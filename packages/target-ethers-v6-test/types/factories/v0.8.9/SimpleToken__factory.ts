/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, ContractRunner } from "ethers";
import type {
  SimpleToken,
  SimpleTokenInterface,
} from "../../v0.8.9/SimpleToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class SimpleToken__factory {
  static readonly abi = _abi;
  static createInterface(): SimpleTokenInterface {
    return new Interface(_abi) as SimpleTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SimpleToken {
    return new Contract(address, _abi, runner) as unknown as SimpleToken;
  }
}
