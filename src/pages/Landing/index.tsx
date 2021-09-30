import React, { useEffect, useState } from 'react';
import { AppBar } from '../../components/AppBar';
import { Hero } from './Hero';
import { NetworkStatus } from './NetworkStatus';
import { StakingRewards } from './StakingRewards';
import { Introduction } from './Introduction';
import { SignupSteps } from './SignupSteps';
import { Upgrades } from './Upgrades';
import { queryBeaconchain } from '../../utils/queryBeaconchain';

export const LandingPage = (): JSX.Element => {
  const [state, setState] = useState({
    amountLyxt: 0,
    totalValidators: 0,
    status: 0,
  });

  useEffect(() => {
    (async () => {
      const response = await queryBeaconchain();
      setState({
        amountLyxt: response.body.amountLyxt,
        totalValidators: response.body.totalValidators,
        status: response.statusCode,
      });
    })();
  }, []);

  return (
    <>
      <AppBar />
      <Hero />
      <NetworkStatus {...{ state }} />
      <StakingRewards currentStaked={state.amountLyxt} />
      <Introduction />
      <SignupSteps />
      <Upgrades />
    </>
  );
};
