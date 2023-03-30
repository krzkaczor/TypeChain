/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface BInterface extends utils.Interface {
  functions: {};

  events: {
    "Committed(uint256)": EventFragment;
    "Committed(address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Committed(uint256)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Committed(address[])"): EventFragment;

  errors: {};
}

export interface Committed_uint256_EventObject {
  timelock: BigNumber;
}
export type Committed_uint256_Event = TypedEvent<
  [BigNumber],
  Committed_uint256_EventObject
>;

export type Committed_uint256_EventFilter =
  TypedEventFilter<Committed_uint256_Event>;

export interface Committed_address_array_EventObject {
  whitelist: string[];
}
export type Committed_address_array_Event = TypedEvent<
  [string[]],
  Committed_address_array_EventObject
>;

export type Committed_address_array_EventFilter =
  TypedEventFilter<Committed_address_array_Event>;

export interface B extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "Committed(uint256)"(timelock?: null): Committed_uint256_EventFilter;
    "Committed(address[])"(
      whitelist?: null
    ): Committed_address_array_EventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
