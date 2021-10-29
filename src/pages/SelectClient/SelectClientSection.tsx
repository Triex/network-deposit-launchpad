import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';
import { FormattedMessage } from 'react-intl';
import { Paper } from '../../components/Paper';
import { Heading } from '../../components/Heading';
import { ImageSelectionBox } from '../../components/ImageSelectionBox';
import { Client } from './index';
import { ClientId } from '../../store/actions/clientActions';

const ClientOptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
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
  clients,
  currentClient,
  setCurrentClient,
  luksoVersionStep,
}: Props): JSX.Element => (
  <Paper>
    <Heading level={3} size="small" color="blueDark" className="mb20">
      {title}
    </Heading>
    {luksoVersionStep === 'Pandora' && (
      <div style={{ paddingBottom: '1rem' }}>
        <FormattedMessage
          defaultMessage="To process incoming validator deposits from the Pandora chain,
            you'll need to run a Pandora client in parallel to your Vanguard client. While
            you can use a third-party service like Infura, we recommend running your
            own client in order to ensure the network stays as decentralised as
            possible."
        />
      </div>
    )}
    <Box className="flex flex-column space-between mt10">
      <ClientOptionContainer>
        {clients.map(({ clientId, name, imgUrl, language }) => {
          const inputId = `${clientId}-client`;
          const onClick = () => setCurrentClient(clientId);

          return (
            <ImageSelectionBox
              fullWidthImg
              key={inputId}
              src={imgUrl}
              isActive={currentClient === clientId}
              onClick={onClick}
              text={name}
              language={language}
            />
          );
        })}
      </ClientOptionContainer>
    </Box>
  </Paper>
);

export default SelectClientSection;
