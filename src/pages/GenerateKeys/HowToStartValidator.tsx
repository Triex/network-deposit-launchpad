import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Alert } from '../../components/Alert';
import { colors } from '../../styles/styledComponentsTheme';

const Pre = styled.pre`
  white-space: normal;
`;

export const HowToStartValidator = () => {
  return (
    <div className="mt30">
      <ul>
        <li>
          <FormattedMessage defaultMessage="Run the following command:" />
        </li>
        <Alert variant="secondary" className="my10">
          <Pre className="my10">
            <span style={{ color: colors.red.medium }}>
              # Linux
              <br />$ make start
              <br />
              <br />
              # MacOS
              <br />$ make start-validator
            </span>
          </Pre>
        </Alert>
        <Alert variant="info" className="my40">
          <FormattedMessage defaultMessage="Replace YOUR_ETH1_ADDRESS with an address you own the private key of. This address will receive the transaction fees of blocks that the validator client has produced." />
        </Alert>
      </ul>
    </div>
  );
};
