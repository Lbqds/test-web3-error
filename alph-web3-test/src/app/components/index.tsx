import { web3 } from "@alephium/web3";
import { useWallet } from "@alephium/web3-react";
import { useEffect } from "react";
import { ConnectAlphWallet } from "./ConnectAlphWallet";
import { ExecuteErrorAction } from "./ExecuteErrorAction";

export const Screen: React.FC = () => {
  const wallet = useWallet();

  useEffect(() => {
    if (wallet?.nodeProvider !== undefined) {
      web3.setCurrentNodeProvider(wallet.nodeProvider);
    }
  }, [wallet?.nodeProvider]);

  return (
    <div className="flex flex-col gap-y-4">
      <ConnectAlphWallet />
      <ExecuteErrorAction />
    </div>
  );
};
