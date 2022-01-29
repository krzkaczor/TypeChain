/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import type { Provider } from "ethers/providers";

import type { Issue428Reproduction } from "../Issue428Reproduction";

export class Issue428Reproduction__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Issue428Reproduction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Issue428Reproduction;
  }
}

const _abi = [
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
