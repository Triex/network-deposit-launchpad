import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import LuksoLogoPng from '../static/LUKSO-logo.png';
import { Text } from '../components/Text';
import { Link } from '../components/Link';

const GradientBackground = styled.div`
  background-image: ${p =>
    `radial-gradient(circle at 100% -80%, ${p.theme.gradientLight})`};
  min-height: 100vh;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LuksoLogo = styled.img`
  height: 100px;
  width: 100px;
  margin: 0 auto;
`;
const LogoText = styled(Text)`
  font-weight: bold;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 400px;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  /*this to solve "the content will not be cut when the window is smaller than the content": */
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;

export const NotFoundPage = (): JSX.Element => {
  return (
    <GradientBackground>
      <Content>
        <LogoContainer>
          <LuksoLogo src={LuksoLogoPng} />
          <LogoText className="mt20" center size="large">
            LUKSO L15 Testnet Launchpad
          </LogoText>
        </LogoContainer>
        <Text center className="mt20">
          <FormattedMessage defaultMessage="Sorry, this page does not exist." />
          <Link primary className="mt20" to="/">
            {' '}
            <FormattedMessage defaultMessage="Launchpad home" />
          </Link>
        </Text>
      </Content>
    </GradientBackground>
  );
};
