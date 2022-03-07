/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { Library } from "../Library";

export class Library__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Library {
    return new Contract(address, _abi, signerOrProvider) as Library;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "b",
        type: "Lib.BOOL",
      },
    ],
    name: "other",
    outputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "",
        type: "Lib.BOOL",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
