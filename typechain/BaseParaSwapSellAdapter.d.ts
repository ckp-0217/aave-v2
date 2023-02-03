/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BaseParaSwapSellAdapterInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "AUGUSTUS_REGISTRY()": FunctionFragment;
    "LENDING_POOL()": FunctionFragment;
    "MAX_SLIPPAGE_PERCENT()": FunctionFragment;
    "ORACLE()": FunctionFragment;
    "executeOperation(address[],uint256[],uint256[],address,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescueTokens(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AUGUSTUS_REGISTRY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LENDING_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_SLIPPAGE_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ORACLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeOperation",
    values: [string[], BigNumberish[], BigNumberish[], string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AUGUSTUS_REGISTRY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LENDING_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_SLIPPAGE_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ORACLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Swapped(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swapped"): EventFragment;
}

export class BaseParaSwapSellAdapter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BaseParaSwapSellAdapterInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "AUGUSTUS_REGISTRY()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    LENDING_POOL(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "MAX_SLIPPAGE_PERCENT()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    ORACLE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "ORACLE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rescueTokens(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "rescueTokens(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

  AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<string>;

  "AUGUSTUS_REGISTRY()"(overrides?: CallOverrides): Promise<string>;

  LENDING_POOL(overrides?: CallOverrides): Promise<string>;

  "LENDING_POOL()"(overrides?: CallOverrides): Promise<string>;

  MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  "MAX_SLIPPAGE_PERCENT()"(overrides?: CallOverrides): Promise<BigNumber>;

  ORACLE(overrides?: CallOverrides): Promise<string>;

  "ORACLE()"(overrides?: CallOverrides): Promise<string>;

  executeOperation(
    assets: string[],
    amounts: BigNumberish[],
    premiums: BigNumberish[],
    initiator: string,
    params: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeOperation(address[],uint256[],uint256[],address,bytes)"(
    assets: string[],
    amounts: BigNumberish[],
    premiums: BigNumberish[],
    initiator: string,
    params: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rescueTokens(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "rescueTokens(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

    AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<string>;

    "AUGUSTUS_REGISTRY()"(overrides?: CallOverrides): Promise<string>;

    LENDING_POOL(overrides?: CallOverrides): Promise<string>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<string>;

    MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX_SLIPPAGE_PERCENT()"(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE(overrides?: CallOverrides): Promise<string>;

    "ORACLE()"(overrides?: CallOverrides): Promise<string>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rescueTokens(token: string, overrides?: CallOverrides): Promise<void>;

    "rescueTokens(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Swapped(
      fromAsset: string | null,
      toAsset: string | null,
      fromAmount: null,
      receivedAmount: null
    ): EventFilter;
  };

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;

    "AUGUSTUS_REGISTRY()"(overrides?: CallOverrides): Promise<BigNumber>;

    LENDING_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX_SLIPPAGE_PERCENT()"(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE(overrides?: CallOverrides): Promise<BigNumber>;

    "ORACLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rescueTokens(token: string, overrides?: Overrides): Promise<BigNumber>;

    "rescueTokens(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ADDRESSES_PROVIDER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "AUGUSTUS_REGISTRY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LENDING_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_SLIPPAGE_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAX_SLIPPAGE_PERCENT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ORACLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    rescueTokens(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "rescueTokens(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
