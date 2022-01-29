/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { B, BInterface } from "../B";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timelock",
        type: "uint256",
      },
    ],
    name: "Committed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "whitelist",
        type: "address[]",
      },
    ],
    name: "Committed",
    type: "event",
  },
];

export class B__factory {
  static readonly abi = _abi;
  static createInterface(): BInterface {
    return new utils.Interface(_abi) as BInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): B {
    return new Contract(address, _abi, signerOrProvider) as B;
  }
}
