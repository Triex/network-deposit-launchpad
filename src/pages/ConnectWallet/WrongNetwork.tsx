import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AcknowledgementSection } from '../Summary/AcknowledgementSection';
import { Text } from '../../components/Text';
import { WorkflowPageTemplate } from '../../components/WorkflowPage/WorkflowPageTemplate';
import { IS_MAINNET } from '../../utils/envVars';

const networkName = IS_MAINNET ? 'Mainnet' : 'LUKSO L15 Testnet';

export const WrongNetwork = () => {
  const { formatMessage } = useIntl();
  const acknowledgementTitle = formatMessage({
    defaultMessage: 'Your network has changed',
  });

  const pageTitle = formatMessage({
    defaultMessage: 'Deposit summary',
  });
  return (
    <WorkflowPageTemplate title={pageTitle}>
      <AcknowledgementSection title={acknowledgementTitle}>
        <Text>
          <FormattedMessage
            defaultMessage="Your wallet is on the wrong network. To continue, connect to the 
            {networkName} network."
            values={{ networkName: <span>{networkName}</span> }}
          />
        </Text>
      </AcknowledgementSection>
    </WorkflowPageTemplate>
  );
};
