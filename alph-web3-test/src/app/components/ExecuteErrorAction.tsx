import { useWallet } from "@alephium/web3-react";
import { ALEPHIUM_TOKEN_BRIDGE_CONTRACT_ID } from "../consts";
import {
  alephium_contracts,
  CHAIN_ID_ALEPHIUM,
  getTokenBridgeForChainId,
} from "@alephium/wormhole-sdk";
import { addressFromContractId } from "@alephium/web3";

export const ExecuteErrorAction = () => {
  const alphWallet = useWallet();

  const executeErrorAction = async () => {
    if (alphWallet.account === null) {
      throw new Error("Wallet not connected");
    }

    const tokenBridgeForChainId = getTokenBridgeForChainId(
      ALEPHIUM_TOKEN_BRIDGE_CONTRACT_ID,
      CHAIN_ID_ALEPHIUM,
      alphWallet.account!.group
    );
    const contractState = await alephium_contracts.TokenBridgeForChain.at(
      addressFromContractId(tokenBridgeForChainId)
    ).fetchState();

    console.log(contractState);
  };

  return (
    <button onClick={executeErrorAction} className="text-20">
      {alphWallet.account ? "Run error action" : "Connect wallet first"}
    </button>
  );
};
