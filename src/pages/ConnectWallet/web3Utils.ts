import { useEffect, useState } from 'react';
import {
  InjectedConnector,
  InjectedConnector as MetamaskConnector,
} from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';
import { web3ReactInterface } from './index';
import { CHAIN_ID, IS_MAINNET } from '../../utils/envVars';

export enum NetworkChainId {
  'Mainnet' = 1,
  'Ropsten' = 3,
  'Rinkeby' = 4,
  'Göerli' = 5,
  'Kovan' = 42,
  'L15-dev' = 231,
  'L15-staging' = 232,
  'L15-prod' = 23,
}

/*
  for UI purposes, all networks are "supported", but an error message
 is displayed when the user is not connected to the "allowed" network
 */

const supportedNetworks = [
  NetworkChainId['Göerli'],
  NetworkChainId.Mainnet,
  NetworkChainId.Rinkeby,
  NetworkChainId.Ropsten,
  NetworkChainId.Kovan,
  NetworkChainId['L15-dev'],
  NetworkChainId['L15-staging'],
  NetworkChainId['L15-prod'],
];

enum TestnetDev {
  'L15-dev',
}
enum TestnetStaging {
  'L15-staging',
}
enum TestnetProd {
  'L15-prod',
}

enum Mainnet {
  'Mainnet',
}

const getTestnetByChainId = (networkId: number) => {
  switch (networkId) {
    case 231:
      console.log('TestnetDev');
      return TestnetDev;
    case 232:
      console.log('TestnetStaging');
      return TestnetStaging;
    default:
      console.log('TestnetProd');
      return TestnetProd;
  }
};

export const AllowedNetworks = IS_MAINNET
  ? Mainnet
  : getTestnetByChainId(CHAIN_ID);

export const metamask: InjectedConnector = new MetamaskConnector({
  supportedChainIds: supportedNetworks,
});

// sets up initial call to MM
export function useMetamaskEagerConnect(): boolean {
  const {
    activate: connectTo,
    active: isMetamaskConnected,
  }: web3ReactInterface = useWeb3React();
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    const attemptConnection = async () => {
      const isAuthorized: boolean = await metamask.isAuthorized();
      if (isAuthorized) {
        connectTo(metamask, undefined, true).catch(() => setAttempted(true));
      } else {
        setAttempted(true);
      }
    };
    attemptConnection();
  }, [connectTo]);

  useEffect(() => {
    if (!attempted && isMetamaskConnected) setAttempted(true);
  }, [attempted, isMetamaskConnected]);

  return attempted;
}

export function useMetamaskListener(suppress: boolean = false) {
  const { active, error, activate: connectTo } = useWeb3React();

  // eslint-disable-next-line consistent-return
  useEffect((): any => {
    const { ethereum } = window as any;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const connectToMetamask = () => connectTo(metamask);

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          connectToMetamask();
        }
      };

      ethereum.on('connect', connectToMetamask);
      ethereum.on('chainChanged', connectToMetamask);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', connectToMetamask);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', connectToMetamask);
          ethereum.removeListener('chainChanged', connectToMetamask);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', connectToMetamask);
        }
      };
    }
  }, [active, error, suppress, connectTo]);
}
