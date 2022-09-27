/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Signer } from "@ethersproject/abstract-signer";

import type { Contract, Overrides } from "@ethersproject/contracts";
import { ContractFactory } from "@ethersproject/contracts";
import type { BigNumberish } from "@ethersproject/bignumber";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestContract,
  TestContractInterface,
} from "../../../artifacts/contracts/TestContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600b81526020017f706c616365686f6c6465720000000000000000000000000000000000000000008152506002908051906020019061004f929190610131565b5034801561005c57600080fd5b5060405161021b38038061021b8339818101604052602081101561007f57600080fd5b81019080805190602001909291905050508073__$8978c1a1ad6ace79c6d069965308e960b0$__63771602f7909160146040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156100ea57600080fd5b505af41580156100fe573d6000803e3d6000fd5b505050506040513d602081101561011457600080fd5b8101908080519060200190929190505050600181905550506101ce565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017257805160ff19168380011785556101a0565b828001600101855582156101a0579182015b8281111561019f578251825591602001919060010190610184565b5b5090506101ad91906101b1565b5090565b5b808211156101ca5760008160009055506001016101b2565b5090565b603f806101dc6000396000f3fe6080604052600080fdfea26469706673582212205e7d3c628e59605cefaf83574bb5b3e32418c84d9801301bca538d248f4a770164736f6c63430007030033";

type TestContractConstructorParams =
  | [linkLibraryAddresses: TestContractLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class TestContract__factory extends ContractFactory {
  constructor(...args: TestContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        TestContract__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: TestContractLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$8978c1a1ad6ace79c6d069965308e960b0\\$__", "g"),
      linkLibraryAddresses["contracts/lib/SafeMath.sol:SafeMath"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestContract> {
    return super.deploy(_amount, overrides || {}) as Promise<TestContract>;
  }
  override getDeployTransaction(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_amount, overrides || {});
  }
  override attach(address: string): TestContract {
    return super.attach(address) as TestContract;
  }
  override connect(signer: Signer): TestContract__factory {
    return super.connect(signer) as TestContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestContractInterface {
    return new Interface(_abi) as TestContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestContract {
    return new Contract(address, _abi, signerOrProvider) as TestContract;
  }
}

export interface TestContractLibraryAddresses {
  ["contracts/lib/SafeMath.sol:SafeMath"]: string;
}
