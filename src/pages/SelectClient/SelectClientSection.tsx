import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Paper } from '../../components/Paper';
import { Heading } from '../../components/Heading';
import { Client } from './index';
import { ClientId } from '../../store/actions/clientActions';
import {Alert} from "../../components/Alert";
import {colors} from "../../styles/styledComponentsTheme";
import {Link} from "../../components/Link";

const Pre = styled.pre`
  white-space: normal;
`;

const Highlight = styled.span`
  background: ${p => p.theme.green.medium};
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
    {luksoVersionStep === 'Pandora' && (
      <div style={{ paddingBottom: '1rem' }}>
        <div className="mt30">
          <ul>
            <li>
              <FormattedMessage defaultMessage="Run the following command to install LUKSO CLI locally" />
            </li>
            <Alert variant="secondary" className="my10">
              <Pre className="my10">
                <span style={{ color: colors.red.medium }}>curl https://install.l15.lukso.network | bash</span>
              </Pre>
            </Alert>
            <li>
              <FormattedMessage defaultMessage="Now you should be able to use LUKSO CLI on your machine" />
            </li>
            <Link
                className="mt10"
                primary
                to="https://docs.lukso.tech/networks/l15-testnet"
            >
              <FormattedMessage
                  values={{
                    l15testNetworkName: <Highlight>l15 testnet</Highlight>,
                  }}
                  defaultMessage="Follow the instructions presented on the docs page for {l15testNetworkName}"

              />
            </Link>
            <Alert variant="error" className="my30">
              <FormattedMessage
                  defaultMessage="To import validator keys you must generate them first. This is required to start validator client properly. Please go to the next step and see how to achieve this."
              />
            </Alert>
          </ul>
        </div>
      </div>
    )}
  </Paper>
);

export default SelectClientSection;
