import React from 'react';
import styled from 'styled-components';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { FormattedMessage } from 'react-intl';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { TICKER_NAME } from '../../utils/envVars';

/**
 * Styled Components
 */

const Container = styled.div`
  background: ${p => p.theme.white};
  padding: ${(p: { isMobile: boolean }) => (p.isMobile ? '60px 0' : '150px 0')};
`;

const SubContainer = styled.div`
  width: 100%;
  max-width: ${p =>
    p.theme.screenSizes.largest}; // needed to contain the chart svg
  margin: 0 auto;
  padding: 0 120px;
  @media only screen and (max-width: ${p => p.theme.screenSizes.largest}) {
    padding: ${(p: { isMobile: boolean }) =>
      p.isMobile ? '0 20px' : '0 60px'};
  }
`;

/**
 * Main Component
 */

export const StakingRewards: React.FC<{
  currentStaked?: number;
}> = (): JSX.Element => {
  const m = (window as any).mobileCheck();

  // Here we'll generate the data points that make the curve in the chart.
  // We increment by 10k until the amount staked is past 15M, then we double the
  // increment to 20k (this is because the chart starts lagging with a lot of
  // points)

  return (
    <Container isMobile={m}>
      <SubContainer isMobile={m}>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <Heading level={2} size="medium" color="blueDark" margin="none">
            <FormattedMessage defaultMessage="Staking and rewards" />
          </Heading>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Text className="mt25">
            <FormattedMessage
              defaultMessage="Validators get rewarded for proposing and attesting to blocks. The
                rewards are tied to the overall amount of {TICKER_NAME} staked in
                the network."
              values={{ TICKER_NAME }}
            />
          </Text>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce delay={450}>
          <div style={{ width: '100%', marginTop: 100 }}></div>
        </ScrollAnimation>
      </SubContainer>
    </Container>
  );
};
