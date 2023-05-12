import React from "react";

import { getDefaultWallets, DiditAuthProvider, lightTheme } from "diditsdktest";
import { DiditProvider } from "diditprovidertest";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import "diditsdktest/styles.css";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Didit demo",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const DiditProviderComponent = ({ children }) => {
  return (
    <main>
      <div>
        <WagmiConfig client={wagmiClient}>
          <DiditProvider clientUrl="http://localhost:3001" children={undefined}>
            <DiditAuthProvider
              chains={chains}
              modalSize="compact"
              theme={lightTheme({
                accentColor:
                  "linear-gradient(30deg, #0E8AAA -20%, #FF4ECD -10%, #0072F5 90%)",
                accentColorForeground: "white",
                borderRadius: "large",
                fontStack: "system",
                overlayBlur: "large",
              })}
              children={undefined}
            >
              {children}
            </DiditAuthProvider>
          </DiditProvider>
        </WagmiConfig>
      </div>
    </main>
  );
};

export { DiditProviderComponent };
