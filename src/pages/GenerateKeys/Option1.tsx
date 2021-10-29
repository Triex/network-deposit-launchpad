import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Alert } from '../../components/Alert';
import { colors } from '../../styles/styledComponentsTheme';

const Pre = styled.pre`
  white-space: normal;
`;

export const Option1 = () => {
  return (
    <div className="mt30">
      <ul>
        <li>
          <FormattedMessage defaultMessage="Run the following command to generate the keys" />
        </li>
        <Alert variant="secondary" className="my10">
          <Pre className="my10">
            <span style={{ color: colors.red.medium }}>lukso keygen </span>
          </Pre>
        </Alert>
        <li>
          <FormattedMessage defaultMessage="Now follow the instructions presented to you in the terminal window." />
        </li>
        <li>
          <FormattedMessage defaultMessage="Your validator keystores should be available in the newly created 'validator_keys' directory." />
        </li>
      </ul>
    </div>
  );
};
