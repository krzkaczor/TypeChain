/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Demo,
  DemoInterface,
  Struct1Struct,
  Struct2Struct,
} from "../Demo";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "b",
            type: "uint256",
          },
        ],
        internalType: "struct Demo.Struct1",
        name: "input1",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "b",
            type: "uint256",
          },
        ],
        internalType: "struct Demo.Struct2[]",
        name: "input2",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103313803806103318339818101604052810190610032919061018c565b50506102e4565b600061004c6100478461020d565b6101e8565b9050808382526020820190508285604086028201111561006f5761006e6102ad565b5b60005b8581101561009f57816100858882610127565b845260208401935060408301925050600181019050610072565b5050509392505050565b600082601f8301126100be576100bd6102a3565b5b81516100ce848260208601610039565b91505092915050565b6000604082840312156100ed576100ec6102a8565b5b6100f760406101e8565b9050600061010784828501610177565b600083015250602061011b84828501610177565b60208301525092915050565b60006040828403121561013d5761013c6102a8565b5b61014760406101e8565b9050600061015784828501610177565b600083015250602061016b84828501610177565b60208301525092915050565b600081519050610186816102cd565b92915050565b600080606083850312156101a3576101a26102b7565b5b60006101b1858286016100d7565b925050604083015167ffffffffffffffff8111156101d2576101d16102b2565b5b6101de858286016100a9565b9150509250929050565b60006101f2610203565b90506101fe8282610243565b919050565b6000604051905090565b600067ffffffffffffffff82111561022857610227610274565b5b602082029050602081019050919050565b6000819050919050565b61024c826102bc565b810181811067ffffffffffffffff8211171561026b5761026a610274565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6102d681610239565b81146102e157600080fd5b50565b603f806102f26000396000f3fe6080604052600080fdfea26469706673582212201d01eb5d1b5bdaa6bed6f2f157914e06e540802623813dc22be9be737413548164736f6c63430008070033";

type DemoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DemoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Demo__factory extends ContractFactory {
  constructor(...args: DemoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    contractName: "Demo";
  }

  deploy(
    input1: Struct1Struct,
    input2: Struct2Struct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Demo> {
    return super.deploy(input1, input2, overrides || {}) as Promise<Demo>;
  }
  getDeployTransaction(
    input1: Struct1Struct,
    input2: Struct2Struct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input1, input2, overrides || {});
  }
  attach(address: string): Demo {
    return super.attach(address) as Demo;
  }
  connect(signer: Signer): Demo__factory {
    return super.connect(signer) as Demo__factory;
  }
  static readonly contractName: "Demo";
  public readonly contractName: "Demo";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DemoInterface {
    return new utils.Interface(_abi) as DemoInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Demo {
    return new Contract(address, _abi, signerOrProvider) as Demo;
  }
}
