import React, { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Layer } from 'grommet';
import { Network } from 'grommet-icons';
import {
  AllowedNetworks,
  metamask,
  NetworkChainId,
} from '../../ConnectWallet/web3Utils';
import { WalletButton } from '../../ConnectWallet/WalletButton';
import { web3ReactInterface } from '../../ConnectWallet';
import metamaskLogo from '../../../static/metamask.svg';
import { IS_MAINNET } from '../../../utils/envVars';
import { Heading } from '../../../components/Heading';
import { Text } from '../../../components/Text';
import { MetamaskHardwareButton } from '../../ConnectWallet/MetamaskHardwareButton';

const WalletConnectModal: React.FC = () => {
  const {
    connector,
    error,
    chainId,
    active,
  }: web3ReactInterface = useWeb3React<Web3Provider>();

  const [selectedWallet, setSelectedWallet] = useState<
    AbstractConnector | null | undefined
  >(null);

  const isInvalidNetwork = useMemo(() => {
    if (!chainId) return false;

    const network = NetworkChainId[chainId as number];

    return !Object.values(AllowedNetworks).includes(network);
  }, [chainId]);

  if (isInvalidNetwork) {
    return (
      <Layer>
        <div className="p20">
          <Heading level={2} color="blueMedium" center className="mb20">
            <FormattedMessage defaultMessage="Wrong network" />
          </Heading>
          <Network
            size="xlarge"
            style={{ margin: '45 auto', display: 'block' }}
          />
          <Text center>
            <FormattedMessage
              defaultMessage="Connect to {network}"
              values={{
                network: IS_MAINNET ? 'LUKSO mainnet' : 'LUKSO L16 Testnet',
              }}
              description="{network} is either 'LUKSO Mainnet' or 'LUKSO L16 Testnet'"
            />
          </Text>
        </div>
      </Layer>
    );
  }

  if (active) return null;

  return (
    <Layer>
      <Heading level={2} color="blueMedium" style={{ margin: '20px auto' }}>
        <FormattedMessage defaultMessage="Connect a wallet" />
      </Heading>
      <div style={{ margin: 'auto' }}>
        <WalletButton
          selectedWallet={selectedWallet}
          setSelectedWallet={setSelectedWallet}
          logoSource={metamaskLogo}
          walletProvider={metamask}
          title="Metamask"
          error={connector === metamask ? error : undefined}
        />

        <MetamaskHardwareButton />
      </div>
    </Layer>
  );
};

export default WalletConnectModal;
