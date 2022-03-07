import { values } from 'lodash'
import {
  AbiParameter,
  BytecodeWithLinkReferences,
  Contract,
  createPositionalIdentifier,
  EventArgDeclaration,
  EventDeclaration,
  FunctionDeclaration,
} from 'typechain'

import { FACTORY_POSTFIX } from '../common'
import { codegenFunctions } from './functions'
import { reservedKeywords } from './reserved-keywords'
import { generateInputType, generateInputTypes } from './types'

export function codegenContractTypings(contract: Contract) {
  const template = `
  import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
  import { Listener, Provider } from 'ethers/providers';
  import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
  import { UnsignedTransaction } from "ethers/utils/transaction";
  import { TypedEventDescription, TypedFunctionDescription } from ".";

  interface ${contract.name}Interface extends Interface {
    functions: {
      ${values(contract.functions)
        .map((v) => v[0])
        .map(generateInterfaceFunctionDescription)
        .join('\n')}
    };

    events: {
      ${values(contract.events)
        .map((v) => v[0])
        .map(generateInterfaceEventDescription)
        .join('\n')}
    };
  }

  export class ${contract.name} extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ${contract.name};
    attach(addressOrName: string): ${contract.name};
    deployed(): Promise<${contract.name}>;

    on(event: EventFilter | string, listener: Listener): ${contract.name};
    once(event: EventFilter | string, listener: Listener): ${contract.name};
    addListener(eventName: EventFilter | string, listener: Listener): ${contract.name};
    removeAllListeners(eventName: EventFilter | string): ${contract.name};
    removeListener(eventName: any, listener: Listener): ${contract.name};

    interface: ${contract.name}Interface;

    functions: {
      ${values(contract.functions).map(codegenFunctions.bind(null, {})).join('\n')}
    };

    ${values(contract.functions)
      .filter((f) => !reservedKeywords.has(f[0].name))
      .map(codegenFunctions.bind(null, {}))
      .join('\n')}

    filters: {
      ${values(contract.events)
        .map((v) => v[0])
        .map(generateEvents)
        .join('\n')}
    };

    estimate: {
      ${values(contract.functions)
        .map(codegenFunctions.bind(null, { overrideOutput: 'Promise<BigNumber>' }))
        .join('\n')}
    };
  }`

  return template
}

export function codegenContractFactory(contract: Contract, abi: any, bytecode?: BytecodeWithLinkReferences): string {
  const constructorArgs =
    (contract.constructor[0] ? generateInputTypes(contract.constructor[0].inputs) : '') +
    'overrides?: UnsignedTransaction'
  const constructorArgNamesWithoutOverrides = contract.constructor[0]
    ? generateParamNames(contract.constructor[0].inputs)
    : ''
  const constructorArgNames = constructorArgNamesWithoutOverrides
    ? `${constructorArgNamesWithoutOverrides}, overrides`
    : 'overrides'
  if (!bytecode) return codegenAbstractContractFactory(contract, abi)

  // tsc with noUnusedLocals would complain about unused imports
  const ethersUtilsImports: string[] = []
  if (constructorArgs.match(/\WArrayish(\W|$)/)) ethersUtilsImports.push('Arrayish')
  if (constructorArgs.match(/\WBigNumberish(\W|$)/)) ethersUtilsImports.push('BigNumberish')
  const ethersUtilsImportLine =
    ethersUtilsImports.length > 0 ? `import { ${ethersUtilsImports.join(', ')} } from "ethers/utils";` : ''

  return `
  import { Contract, ContractFactory, Signer } from "ethers";
  import { Provider } from "ethers/providers";
  import { UnsignedTransaction } from "ethers/utils/transaction";
  ${ethersUtilsImportLine}

  import { ${contract.name} } from "../${contract.name}";

  export class ${contract.name}${FACTORY_POSTFIX} extends ContractFactory {
    ${generateFactoryConstructor(contract, bytecode)}
    deploy(${constructorArgs}): Promise<${contract.name}> {
      return super.deploy(${constructorArgNames}) as Promise<${contract.name}>;
    }
    getDeployTransaction(${constructorArgs}): UnsignedTransaction {
      return super.getDeployTransaction(${constructorArgNames});
    };
    attach(address: string): ${contract.name} {
      return super.attach(address) as ${contract.name};
    }
    connect(signer: Signer): ${contract.name}${FACTORY_POSTFIX} {
      return super.connect(signer) as ${contract.name}${FACTORY_POSTFIX};
    }
    static connect(address: string, signerOrProvider: Signer | Provider): ${contract.name} {
      return new Contract(address, _abi, signerOrProvider) as ${contract.name};
    }
  }

  const _abi = ${JSON.stringify(abi, null, 2)};

  const _bytecode = "${bytecode.bytecode}";

  ${generateLibraryAddressesInterface(contract, bytecode)}
  `
}

export function codegenAbstractContractFactory(contract: Contract, abi: any): string {
  return `
  import { Contract, Signer } from "ethers";
  import { Provider } from "ethers/providers";

  import { ${contract.name} } from "../${contract.name}";

  export class ${contract.name}${FACTORY_POSTFIX} {
    static connect(address: string, signerOrProvider: Signer | Provider): ${contract.name} {
      return new Contract(address, _abi, signerOrProvider) as ${contract.name};
    }
  }

  const _abi = ${JSON.stringify(abi, null, 2)};
  `
}

function generateFactoryConstructor(contract: Contract, bytecode: BytecodeWithLinkReferences): string {
  if (!bytecode.linkReferences) {
    return `
    constructor(signer?: Signer) {
      super(_abi, _bytecode, signer);
    }
    `
  }

  const linkRefReplacements = bytecode.linkReferences.map((linkRef) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
    // We're using a double escape backslash, since the string will be pasted into generated code.
    const escapedLinkRefRegex = linkRef.reference.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&')
    const libraryKey = linkRef.name || linkRef.reference
    return `
      linkedBytecode = linkedBytecode.replace(
        new RegExp("${escapedLinkRefRegex}", "g"),
        linkLibraryAddresses["${libraryKey}"].replace(/^0x/, '').toLowerCase(),
      );`
  })

  return `
    constructor(linkLibraryAddresses: ${contract.name}LibraryAddresses, signer?: Signer) {
      super(_abi, ${contract.name}${FACTORY_POSTFIX}.linkBytecode(linkLibraryAddresses), signer);
    }

    static linkBytecode(linkLibraryAddresses: ${contract.name}LibraryAddresses): string {
      let linkedBytecode = _bytecode;
      ${linkRefReplacements.join('\n')}

      return linkedBytecode;
    }
  `
}

function generateLibraryAddressesInterface(contract: Contract, bytecode: BytecodeWithLinkReferences): string {
  if (!bytecode.linkReferences) return ''

  const linkLibrariesKeys = bytecode.linkReferences.map(
    (linkRef) => `    ["${linkRef.name || linkRef.reference}"]: string;`,
  )
  return `
  export interface ${contract.name}LibraryAddresses {
    ${linkLibrariesKeys.join('\n')}
  };`
}

function generateInterfaceFunctionDescription(fn: FunctionDeclaration): string {
  return `
  ${fn.name}: TypedFunctionDescription<{ encode(${generateParamArrayNames(fn.inputs)}: ${generateParamArrayTypes(
    fn.inputs,
  )}): string; }>;
`
}

function generateParamArrayTypes(params: Array<AbiParameter>): string {
  return `[${params.map((param) => generateInputType(param.type)).join(', ')}]`
}

function generateParamNames(params: Array<AbiParameter | EventArgDeclaration>): string {
  return params.map((param) => param.name && createPositionalIdentifier(param.name)).join(', ')
}

function generateParamArrayNames(params: Array<AbiParameter | EventArgDeclaration>): string {
  return `[${generateParamNames(params)}]`
}

function generateEvents(event: EventDeclaration) {
  return `
  ${event.name}(${generateEventInputs(event.inputs)}): EventFilter;
`
}

function generateInterfaceEventDescription(event: EventDeclaration): string {
  return `
  ${event.name}: TypedEventDescription<{ encodeTopics(${generateParamArrayNames(
    event.inputs,
  )}: ${generateEventTopicTypes(event.inputs)}): string[]; }>;
`
}

function generateEventTopicTypes(eventArgs: Array<EventArgDeclaration>): string {
  return `[${eventArgs.map(generateEventArgType).join(', ')}]`
}

function generateEventInputs(eventArgs: EventArgDeclaration[]) {
  if (eventArgs.length === 0) {
    return ''
  }
  return (
    eventArgs
      .map((arg, index) => {
        return `${arg.name ? createPositionalIdentifier(arg.name) : `arg${index}`}: ${generateEventArgType(arg)}`
      })
      .join(', ') + ', '
  )
}

function generateEventArgType(eventArg: EventArgDeclaration): string {
  return eventArg.isIndexed ? `${generateInputType(eventArg.type)} | null` : 'null'
}
