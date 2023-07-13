import React from "react";

import { getDefaultWallets, DiditAuthProvider, lightTheme } from "didit-sdk";
import { DiditProvider } from "didit-provider";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import "didit-sdk/styles.css";

// Didit Walletconnect Project Id
const projectId = "bb8c5c3d25e7f8c2bdee64feaafb93d2";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Didit demo",
  projectId,
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
