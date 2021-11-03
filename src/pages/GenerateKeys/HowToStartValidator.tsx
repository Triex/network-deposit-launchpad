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
              <br />$ lukso start --validate --node-name
              "REPLACE-WITH-NODE-NAME" --coinbase YOUR_ETH1_ADDRESS
              <br />
              <br />
              # MacOS
              <br />$ sudo lukso start --validate --node-name
              "REPLACE-WITH-NODE-NAME" --coinbase YOUR_ETH1_ADDRESS
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
