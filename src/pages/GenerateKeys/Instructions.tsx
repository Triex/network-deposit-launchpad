import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Paper } from '../../components/Paper';
import { Option1 } from './Option1';
import { Option2 } from './Option2';
import { Heading } from '../../components/Heading';

interface Props {
  validatorCount: number | string;
  os: 'mac' | 'linux' | 'windows';
}

export const Instructions = () => {
  return (
    <div>
      <Paper className="mt20" style={{ animation: 'fadeIn 1s' }}>
        <Heading level={2} size="small" color="blueMedium">
          <FormattedMessage defaultMessage="How to generate validator keys" />
        </Heading>
        <div>
          <Option1 />
        </div>
      </Paper>

      <Paper className="mt20" style={{ animation: 'fadeIn 1s' }}>
        <Heading level={2} size="small" color="blueMedium">
          <FormattedMessage defaultMessage="How to import validator keys" />
        </Heading>
        <div>
          <Option2 />
        </div>
      </Paper>
    </div>
  );
};
