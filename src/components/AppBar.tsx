import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Box, DropButton } from 'grommet';
import { Menu, FormDown } from 'grommet-icons';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { FormattedMessage } from 'react-intl';
import LuksoLogoPng from '../static/LUKSO-logo.png';
import { web3ReactInterface } from '../pages/ConnectWallet';
import { trimString } from '../utils/trimString';
import {
  AllowedNetworks,
  NetworkChainId,
} from '../pages/ConnectWallet/web3Utils';
import { Dot } from './Dot';
import { Link } from './Link';
import { Text } from './Text';
import { routesEnum } from '../Routes';
import { Heading } from './Heading';
import {
  IS_MAINNET,
  LUKSO_NETWORK_NAME,
  TESTNET_LAUNCHPAD_NAME,
} from '../utils/envVars';
import useMobileCheck from '../hooks/useMobileCheck';

const GradientBackground = styled(Box)`
  background-image: ${p =>
    `linear-gradient(177deg, ${p.theme.gradientNavbar})`};
`;

const LuksoLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const NetworkText = styled.div`
  padding: 5px 8px;
  border: 1px solid;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  &:hover {
    border-radius: 4px;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.6);
    transition: transform 0.1s;
    transform: scale(1.02);
    color: #000;
  }
  svg {
    stroke: #fff;
  }
  :hover svg {
    stroke: #666;
  }
`;

const NavBarLinks = styled.div`
  display: flex;
  .white {
    color: #fff;
  }
  .white span {
    color: #fff;
  }
  .bold span {
    font-weight: 600;
  }
  @media only screen and (max-width: 1080px) {
    .secondary-link {
      display: none;
    }
  }
`;

const ValidatorDropdown = styled(DropButton)`
  padding: 12px 8px;
  font-weight: 300;
  display: flex;
  align-items: center;
  border: none;
  :hover {
    border: none;
    box-shadow: none;
  }
  color: #fff;
`;

const DotDropdown = styled(DropButton)`
  display: flex;
  align-items: center;
  border: none;
  padding: 0;
  margin: 0;
  :hover {
    transition: transform 0.2s;
    transform: scale(1.1);
  }
`;

const DropdownLink = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;

const Card = styled.div``;

const NetworkInfo = styled.div`
  background: ${p => p.theme.gray.light};
  padding: 32px;
`;

const NavLinksRight = styled.div`
  display: flex;
  align-items: center;
  .white {
    color: #fff;
  }
`;

const BarLinkText = styled(Heading)`
  :not(.no-padding) {
    padding: 0 12px;
    white-space: nowrap;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: ${(p: { active?: boolean }) => (p.active ? 'bold' : 400)};
`;

const _AppBar = ({ location }: RouteComponentProps) => {
  const {
    active: walletConnected,
    account,
    chainId,
  }: web3ReactInterface = useWeb3React<Web3Provider>();

  let network;
  let networkAllowed = false;

  if (chainId) {
    network = NetworkChainId[chainId];
    networkAllowed = Object.values(AllowedNetworks).includes(network);
  }

  const pathname: string = React.useMemo(() => location.pathname, [
    location.pathname,
  ]);

  const mobile = useMobileCheck('1080px');

  const networkName = IS_MAINNET ? 'LUKSO Mainnet' : 'LUKSO L15 Testnet';

  return (
    <GradientBackground
      tag="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: 1 }}
    >
      <NavBarLinks>
        <Link to={routesEnum.landingPage} className="mr30">
          <LuksoLogo src={LuksoLogoPng} alt="LUKSO-logo" />
          {!mobile && (
            <div className="flex flex-column center ml5">
              <BarLinkText
                active={pathname === routesEnum.landingPage}
                level={4}
                margin="none"
                className="bar-link-text no-padding white bold"
              >
                <Text>
                  <FormattedMessage
                    defaultMessage="LUKSO {network} Launchpad"
                    values={{
                      network: IS_MAINNET
                        ? ''
                        : `${LUKSO_NETWORK_NAME} Testnet`,
                    }}
                    description="{network} inserts the testnet name, only if on the testnet"
                  />
                </Text>
              </BarLinkText>
            </div>
          )}
        </Link>

        <Link
          to={routesEnum.acknowledgementPage}
          className="mx10 secondary-link"
        >
          <BarLinkText
            level={4}
            margin="none"
            className="bar-link-text white"
            active={pathname === routesEnum.acknowledgementPage}
          >
            <FormattedMessage defaultMessage="Deposit" />
          </BarLinkText>
        </Link>
        <Link to={routesEnum.checklistPage} className="mx10 secondary-link">
          <BarLinkText
            level={4}
            margin="none"
            className="bar-link-text white"
            active={pathname === routesEnum.checklistPage}
          >
            <FormattedMessage defaultMessage="Checklist" />
          </BarLinkText>
        </Link>
        <Link to={routesEnum.FaqPage} className="mx10 secondary-link">
          <BarLinkText
            level={4}
            margin="none"
            className="bar-link-text white"
            active={pathname === routesEnum.FaqPage}
          >
            <FormattedMessage defaultMessage="FAQ" />
          </BarLinkText>
        </Link>
        <Link to={routesEnum.topUpPage} className="mx10 secondary-link">
          <BarLinkText
            level={4}
            margin="none"
            className="bar-link-text white"
            active={pathname === routesEnum.topUpPage}
          >
            <FormattedMessage defaultMessage="Top Up" />
          </BarLinkText>
        </Link>
      </NavBarLinks>
      <NavLinksRight>
        {mobile && (
          <ValidatorDropdown
            className="secondary-link"
            label={<Menu color="white" />}
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
              <Card>
                <NetworkInfo>
                  {walletConnected && (
                    <Box className="flex flex-row mb20">
                      <Dot success={networkAllowed} error={!networkAllowed} />
                      <Text size="small" className="ml10" color="white">
                        {trimString(account as string, 10)}
                      </Text>
                    </Box>
                  )}
                  <span>
                    <FormattedMessage defaultMessage="Launchpad network:" />{' '}
                    <b>
                      {IS_MAINNET ? `L15` : `${TESTNET_LAUNCHPAD_NAME} testnet`}
                    </b>
                  </span>
                  <Text className="mt20">
                    <em>
                      <FormattedMessage defaultMessage="Visit this site on desktop to become a validator." />
                    </em>
                  </Text>
                </NetworkInfo>
                <Box pad="large" className="mt0">
                  <DropdownLink to={routesEnum.FaqPage}>
                    <FormattedMessage defaultMessage="FAQ" />
                  </DropdownLink>
                  <DropdownLink to={routesEnum.checklistPage}>
                    <FormattedMessage defaultMessage="Staker checklist" />
                  </DropdownLink>
                  <Text className="my20">
                    <b>
                      <FormattedMessage defaultMessage="The L15 clients" />
                    </b>
                  </Text>
                  <DropdownLink to={routesEnum.lighthouse}>
                    Lighthouse
                  </DropdownLink>
                  <DropdownLink to={routesEnum.nimbus}>Nimbus</DropdownLink>
                  <DropdownLink to={routesEnum.prysm}>Prysm</DropdownLink>
                  <DropdownLink to={routesEnum.teku}>Teku</DropdownLink>
                </Box>
              </Card>
            }
          />
        )}
        {!mobile && (
          <ValidatorDropdown
            className="secondary-link"
            label={
              <NetworkText>
                {IS_MAINNET ? `L15` : `${LUKSO_NETWORK_NAME}`}
                <FormDown />
              </NetworkText>
            }
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
              <Card>
                <Box pad="small" className="mt0">
                  {!IS_MAINNET && (
                    <Text className="mb10">
                      <FormattedMessage defaultMessage="This is a test network ⚠️" />
                    </Text>
                  )}
                  <DropdownLink to="#">
                    <FormattedMessage
                      defaultMessage="L16 Coming Soon"
                      values={{
                        network: `${
                          IS_MAINNET
                            ? `${TESTNET_LAUNCHPAD_NAME} testnet`
                            : `L15`
                        }`,
                      }}
                    />
                  </DropdownLink>
                </Box>
              </Card>
            }
          />
        )}
        {!mobile && walletConnected && (
          <Box className="flex flex-row mr20">
            {networkAllowed && (
              <DotDropdown
                className="secondary-link"
                label={<Dot success={networkAllowed} error={!networkAllowed} />}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                  <Box pad="small">
                    <Text>
                      <FormattedMessage defaultMessage="Your wallet is connected to the right network!" />
                    </Text>
                  </Box>
                }
              />
            )}
            {!networkAllowed && (
              <DotDropdown
                className="secondary-link"
                label={<Dot error={!networkAllowed} />}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                  <Box pad="small">
                    <Text>
                      <FormattedMessage
                        defaultMessage="Your wallet should be set to {networkName} to use this launchpad."
                        values={{
                          networkName: <span>{networkName}</span>,
                        }}
                      />
                    </Text>
                  </Box>
                }
              />
            )}
            <Text size="small" className="ml10" color="grayLight">
              {trimString(account as string, 10)}
            </Text>
          </Box>
        )}
      </NavLinksRight>
    </GradientBackground>
  );
};

export const AppBar = withRouter(_AppBar);
