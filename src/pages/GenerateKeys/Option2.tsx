import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Alert } from '../../components/Alert';
import { colors } from '../../styles/styledComponentsTheme';

const Pre = styled.pre`
  white-space: normal;
`;

export const Option2 = () => {
  return (
    <div className="mt30">
      <ul>
        <li>
          <FormattedMessage defaultMessage="Run the following command to import the keys" />
        </li>
        <Alert variant="secondary" className="my10">
          <Pre className="my10">
            <span style={{ color: colors.red.medium }}>
              # Linux
              <br />$ lukso wallet
              <br />
              <br />
              # MacOS
              <br />$ sudo lukso wallet
            </span>
          </Pre>
        </Alert>
        <li>
          <FormattedMessage defaultMessage="Now follow the instructions presented to you in the terminal window." />
        </li>
        <Alert variant="info" className="my40">
          <ul>
            <li>
              <FormattedMessage defaultMessage="The first time you are prompted for a password, that will be the password the validator client needs to open up the wallet we are just creating. You will just need to enter this once, since it is stored in a file, so that the validator client can open the wallet on its own." />
              <br />
              <br />
              <FormattedMessage defaultMessage="These are the rules that apply to the password:" />
              <ul>
                <li>at least 8 characters</li>
                <li>at least 1 alphabetical character</li>
                <li>at least 1 unicode symbol</li>
                <li>at least 1 number</li>
              </ul>
              <br />
            </li>
            <li>
              <FormattedMessage defaultMessage="The second time you are asked for a password, you need to enter the password that you used to protect your keys in the step 'Generate the validator keys'." />
            </li>
          </ul>
        </Alert>
      </ul>
    </div>
  );
};
