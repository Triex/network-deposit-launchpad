import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import LuksoLogoPng from '../static/LUKSO-logo.png';
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';
import { routesEnum } from '../Routes';
import { Link } from './Link';

import { Button } from './Button';

const LUKSOMiniLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: -3px;
`;

const GradientBackground = styled.div`
  min-width: 100%;
  overflow: hidden;
  background-image: ${p =>
    `radial-gradient(circle at 100% -80%, ${p.theme.gradientFooter})`};
`;

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    .cta-button {
      display: none;
    }
  }

  @media screen and (max-width: 518px) {
    .extra-links {
      margin-top: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonLink = styled(Link)`
  width: fit-content;
  padding: 0;
`;

export const Footer = () => {
  const { pathname } = useLocation();
  const despotWorkflowRoutes = [
    routesEnum.acknowledgementPage,
    routesEnum.selectClient,
    routesEnum.generateKeysPage,
    routesEnum.uploadValidatorPage,
    routesEnum.connectWalletPage,
    routesEnum.summaryPage,
    routesEnum.transactionsPage,
    routesEnum.congratulationsPage,
    routesEnum.topUpPage,
  ];

  return (
    <GradientBackground>
      <FooterStyles className="pb30">
        <div className="col">
          <Heading level={4}>
            <FormattedMessage defaultMessage="LUKSO L16 Beta Network Launchpad" />
          </Heading>
          <Link to={routesEnum.acknowledgementPage}>
            <FormattedMessage defaultMessage="Deposit" />
          </Link>
          <Link to={routesEnum.checklistPage}>
            <FormattedMessage defaultMessage="Checklist" />
          </Link>
          <Link to={routesEnum.FaqPage}>
            <FormattedMessage defaultMessage="FAQ" />
          </Link>
          <Link to={routesEnum.termsOfServicePage}>
            <FormattedMessage defaultMessage="Terms of Service" />
          </Link>
        </div>

        {!despotWorkflowRoutes.includes(pathname as routesEnum) && (
          <ButtonContainer className="m-auto">
            <ButtonLink
              to={routesEnum.acknowledgementPage}
              className="cta-button"
            >
              <Button
                gradient
                fullWidth
                width={400}
                label={
                  <FormattedMessage
                    defaultMessage="Become a validator {emoji}"
                    values={{
                      emoji: (
                        <LUKSOMiniLogo src={LuksoLogoPng} alt="LUKSO-logo" />
                      ),
                    }}
                  />
                }
              />
            </ButtonLink>
          </ButtonContainer>
        )}
        <div className="col extra-links">
          <Heading level={4}>
            <FormattedMessage defaultMessage="More on LUKSO" />
          </Heading>
          <Link to="https://medium.com/lukso">
            <FormattedMessage defaultMessage="The LUKSO upgrades" />
          </Link>
        </div>
      </FooterStyles>
      <FooterStyles className="pt0">
        <Link to="https://github.com/ethereum/staking-launchpad">
          <FormattedMessage defaultMessage="🌈 Forked from the Eth2 Launchpad" />
        </Link>
      </FooterStyles>
    </GradientBackground>
  );
};
