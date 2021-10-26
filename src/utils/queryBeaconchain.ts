import axios from 'axios';
import { BEACONCHAIN_URL, LYXT_DEPOSIT_OFFSET } from './envVars';

type BeaconchainResponse = {
  data: {
    status: string;
    data: {
      validatorscount: number;
      totalvalidatorbalance: number; // gwei
    };
  };
};

export const queryBeaconchain = async () => {
  try {
    const response: BeaconchainResponse = await axios.get(
      `${BEACONCHAIN_URL}/api/v1/epoch/latest`
    );
    let lyxtBalance = response.data.data.totalvalidatorbalance * 1e-9;
    lyxtBalance = +lyxtBalance.toFixed(0);
    return {
      statusCode: 200,
      body: {
        totalValidators: response.data.data.validatorscount,
        amountLyxt: lyxtBalance + LYXT_DEPOSIT_OFFSET,
      },
    };
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error(error);
    return {
      statusCode: 500,
      body: {
        totalValidators: 0,
        amountLyxt: 0,
        msg: error.message,
      },
    };
  }
};
