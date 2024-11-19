"use client";

import { NetworkId } from "@alephium/web3";
import { AlephiumWalletProvider } from "@alephium/web3-react";
import { Screen } from "./components";

export default function Home() {
  return (
    <div>
      <AlephiumWalletProvider
        addressGroup={0}
        network={process.env.NEXT_PUBLIC_NETWORK as NetworkId}
        theme="simple-dark"
      >
        <Screen />
      </AlephiumWalletProvider>
    </div>
  );
}
