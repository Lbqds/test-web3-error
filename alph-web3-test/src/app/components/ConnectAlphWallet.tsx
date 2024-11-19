import { AlephiumConnectButton } from "@alephium/web3-react";

export const ConnectAlphWallet = () => {
  return (
    <AlephiumConnectButton.Custom displayAccount={(account) => account.address}>
      {({ isConnected, show, disconnect, account }) => {
        return (
          // `show` and `hide` will never be undefined. TODO: Fix the types in web3-react
          <button onClick={isConnected ? disconnect : show}>
            {isConnected
              ? `Disconnect ${account?.address} ${account?.group}`
              : "Connect"}{" "}
          </button>
        );
      }}
    </AlephiumConnectButton.Custom>
  );
};
