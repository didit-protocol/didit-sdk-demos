import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

import loadable from '@loadable/component';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);

const DynamicConnectWalletButton = loadable(() =>
  import('./components/Wallet/ConnectWallet').then(mod => mod.ConnectWalletButton),
);

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '96vh',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <h1
        className="Home_title__T09hD"
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#000000',
          textAlign: 'center',
          marginBottom: '4rem',
          lineHeight: '1.2',
          fontFamily:
            'SFRounded, ui-rounded, SF Pro Rounded, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
        }}
      >
        Welcome to this demo of
        <a
          href="https://www.didit.me/"
          style={{
            background:
              'linear-gradient(30deg, #0E8AAA -20%, #FF4ECD -10%, #0072F5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginLeft: '1rem',
          }}
        >
          Didit
        </a>
      </h1>
      <DynamicConnectWalletButton />
    </div>
  );
}

export default Home;