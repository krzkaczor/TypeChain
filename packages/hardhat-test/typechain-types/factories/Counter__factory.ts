/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "CountedTo",
    type: "event",
  },
  {
    inputs: [],
    name: "countDown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "countUp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b506105f8806100246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd8599e146100465780635fcbd5b614610064578063a87d942c14610082575b600080fd5b61004e6100a0565b60405161005b9190610432565b60405180910390f35b61006c610183565b6040516100799190610432565b60405180910390f35b61008a610266565b6040516100979190610432565b60405180910390f35b60006100e36040518060400160405280601081526020017f636f756e7455703a20636f756e74203d0000000000000000000000000000000081525060005461026f565b600060016000546100f49190610469565b9050600054811161013a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161013190610412565b60405180910390fd5b806000819055507fa501f5a8ef1a812bff54fb3642cfaec066c351af1716c48a7bdd05e0bb631e676000546040516101729190610432565b60405180910390a160005491505090565b60006101c66040518060400160405280601281526020017f636f756e74446f776e3a20636f756e74203d000000000000000000000000000081525060005461026f565b600060016000546101d791906104bf565b9050600054811061021d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610214906103f2565b60405180910390fd5b806000819055507fa501f5a8ef1a812bff54fb3642cfaec066c351af1716c48a7bdd05e0bb631e676000546040516102559190610432565b60405180910390a160005491505090565b60008054905090565b61030782826040516024016102859291906103c2565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061030b565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600061033f8261044d565b6103498185610458565b93506103598185602086016104fd565b6103628161055f565b840191505092915050565b600061037a601183610458565b915061038582610570565b602082019050919050565b600061039d601083610458565b91506103a882610599565b602082019050919050565b6103bc816104f3565b82525050565b600060408201905081810360008301526103dc8185610334565b90506103eb60208301846103b3565b9392505050565b6000602082019050818103600083015261040b8161036d565b9050919050565b6000602082019050818103600083015261042b81610390565b9050919050565b600060208201905061044760008301846103b3565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610474826104f3565b915061047f836104f3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156104b4576104b3610530565b5b828201905092915050565b60006104ca826104f3565b91506104d5836104f3565b9250828210156104e8576104e7610530565b5b828203905092915050565b6000819050919050565b60005b8381101561051b578082015181840152602081019050610500565b8381111561052a576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f55696e7432353620756e646572666c6f77000000000000000000000000000000600082015250565b7f55696e74323536206f766572666c6f770000000000000000000000000000000060008201525056fea264697066735822122062e7987659cfb72b2613b81304a8a0e3671f5a2351b8cfece1da96e99b6512b664736f6c63430008070033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}
