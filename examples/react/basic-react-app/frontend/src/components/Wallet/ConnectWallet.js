import React from "react";
import { ConnectButton } from "didit-sdk";

const ConnectWalletButton = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton
        label="Connect with Didit"
        accountStatus="address"
        chainStatus="full"
      />
    </div>
  );
};

export { ConnectWalletButton };
