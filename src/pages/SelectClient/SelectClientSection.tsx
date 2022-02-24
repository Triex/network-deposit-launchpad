import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Paper } from '../../components/Paper';
import { Heading } from '../../components/Heading';
import { Client } from './index';
import { ClientId } from '../../store/actions/clientActions';
import { Alert } from '../../components/Alert';
import { colors } from '../../styles/styledComponentsTheme';

const Pre = styled.pre`
  white-space: normal;
`;

type Props = {
  title?: string;
  clients: Array<Client>;
  currentClient: ClientId;
  setCurrentClient: (client: ClientId) => void;
  clientDetails: any;
  luksoVersionStep: string;
};

const SelectClientSection = ({
  title,
  luksoVersionStep,
}: Props): JSX.Element => (
  <Paper>
    <Heading level={3} size="small" color="blueDark" className="mb20">
      {title}
    </Heading>
    <Alert variant="error" className="my10">
      <FormattedMessage defaultMessage="In case you are currently running a node already, please stop it with this command:" />
      <Pre className="my10">
        <span style={{ color: colors.red.medium }}>
          # Linux
          <br />$ lukso stop
          <br />
          <br />
          # MacOS
          <br />$ sudo lukso stop
        </span>
      </Pre>
    </Alert>
    {luksoVersionStep === 'Pandora' && (
      <div style={{ paddingBottom: '1rem' }}>
        <div className="mt30">
          <ul>
            <li>
              <FormattedMessage defaultMessage="Install / update all the binaries:" />
            </li>
            <Alert variant="secondary" className="my10">
              <Pre className="my10">
                <span style={{ color: colors.red.medium }}>
                  # Linux
                  <br />$ curl https://install.l16.lukso.network | bash
                  <br />
                  <br />
                  # MacOS
                  <br />$ sudo curl https://install.l16.lukso.network | bash
                </span>
              </Pre>
            </Alert>
          </ul>
        </div>
      </div>
    )}
  </Paper>
);

export default SelectClientSection;
