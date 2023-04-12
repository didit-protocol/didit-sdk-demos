import React from 'react';
import { DiditProviderComponent } from '../Didit/Provider';
import { ConnectButton } from 'diditsdktest';

const ConnectWalletButton = () => {
  return (
    <DiditProviderComponent children={undefined}>
        <div
        style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 12,
        }}
        >
        <ConnectButton
            label="Connect with Didit"
            accountStatus="address"
            chainStatus="full"
        />
        </div>
    </DiditProviderComponent>
  );
};

export { ConnectWalletButton };