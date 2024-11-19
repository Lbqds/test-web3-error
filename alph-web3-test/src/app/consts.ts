import alephiumMainnetConfig from "../app/configs/alephium/mainnet.json";
import alephiumTestnetConfig from "../app/configs/alephium/testnet.json";
import alephiumDevnetConfig from "../app/configs/alephium/devnet.json";

export type Cluster = "devnet" | "testnet" | "mainnet";
export const CLUSTER: Cluster =
  process.env.NEXT_PUBLIC_NETWORK === "mainnet"
    ? "mainnet"
    : process.env.NEXT_PUBLIC_NETWORK === "testnet"
    ? "testnet"
    : "devnet";

export const ALEPHIUM_TOKEN_BRIDGE_CONTRACT_ID =
  CLUSTER === "mainnet"
    ? alephiumMainnetConfig.contracts.tokenBridge
    : CLUSTER === "testnet"
    ? alephiumTestnetConfig.contracts.tokenBridge
    : alephiumDevnetConfig.contracts.tokenBridge;
