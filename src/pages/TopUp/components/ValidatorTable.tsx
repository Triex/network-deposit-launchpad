import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from 'grommet';
import ReactTooltip from 'react-tooltip';
import { Wifi, StatusWarning, Refresh, StatusDisabled } from 'grommet-icons';
import numeral from 'numeral';
import { useWeb3React } from '@web3-react/core';
import { styledComponentsTheme as theme } from '../../../styles/styledComponentsTheme';
import { BeaconChainValidator } from '../types';
import { Text } from '../../../components/Text';
import shortenAddress from '../../../utils/shortenAddress';
import { Button } from '../../../components/Button';
import { Paper } from '../../../components/Paper';
import { Link } from '../../../components/Link';
import {
  BEACONCHAIN_URL,
  PRICE_PER_VALIDATOR,
  TICKER_NAME,
  LUKSO_TO_GWEI,
} from '../../../utils/envVars';

const FakeLink = styled.span`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  display: inline;
`;

const ValidatorTable: React.FC<{
  validators: BeaconChainValidator[];
  setSelectedValidator: (validator: BeaconChainValidator) => void;
}> = ({ validators, setSelectedValidator }) => {
  const { deactivate } = useWeb3React();
  const { formatMessage } = useIntl();

  const validatorStatus = (validator: BeaconChainValidator) => {
    const { status } = validator;

    switch (status) {
      case 'pending': {
        return (
          <div className="flex">
            <Refresh color="blueLight" />
            <Text className="ml10">
              <FormattedMessage defaultMessage="Pending" />
            </Text>
          </div>
        );
      }
      case 'slashing': {
        return (
          <div className="flex">
            <StatusWarning color={theme.red.light} />
            <Text className="ml10">
              <FormattedMessage defaultMessage="Slashing" />
            </Text>
          </div>
        );
      }
      case 'slashed': {
        return (
          <div className="flex">
            <StatusWarning color={theme.red.light} />
            <Text className="ml10">
              <FormattedMessage defaultMessage="Slashed" />
            </Text>
          </div>
        );
      }
      case 'exiting': {
        return (
          <div className="flex">
            <StatusWarning color="yellowDark" />
            <Text className="ml10">
              <FormattedMessage defaultMessage="Exiting" />
            </Text>
          </div>
        );
      }
      case 'exited': {
        return (
          <div className="flex">
            <StatusDisabled color={theme.gray.medium} />
            <Text className="ml10">
              <FormattedMessage defaultMessage="Exited" />
            </Text>
          </div>
        );
      }
      case 'active_offline': {
        return (
          <div className="flex">
            <Wifi color={theme.gray.medium} />
            <Text className="ml10">
              <FormattedMessage defaultMessage="Offline" />
            </Text>
          </div>
        );
      }
      case 'active_online': {
        return (
          <div className="flex">
            <Wifi color={theme.purple.brand} />
            <Text className="ml10">
              <FormattedMessage defaultMessage="Online" />
            </Text>
          </div>
        );
      }
      default:
        return '';
    }
  };

  const validatorRows = React.useMemo(() => {
    return validators.map(validator => {
      const alreadyToppedUp =
        validator.effectivebalance >=
        Number(PRICE_PER_VALIDATOR) * LUKSO_TO_GWEI;
      // No top-ups for exited or slashed validators:
      const statusIneligible =
        validator.status === 'slashed' || validator.status === 'exited';

      const toolTipText = () => {
        if (statusIneligible)
          return formatMessage({
            defaultMessage:
              'Validators that have exited or been slashed are not eligible for topping up',
          });
        if (alreadyToppedUp)
          return formatMessage(
            {
              defaultMessage:
                "This validator's balance is at the effective maximum: {PRICE_PER_VALIDATOR} {TICKER_NAME}.",
            },
            { PRICE_PER_VALIDATOR, TICKER_NAME }
          );
        return formatMessage({
          defaultMessage:
            'You can improve the effective balance of this validator by topping up',
        });
      };

      return (
        <React.Fragment key={validator.pubkey}>
          <TableRow>
            <TableCell scope="col" border="bottom">
              <Link
                primary
                to={`${BEACONCHAIN_URL}/validator/${validator.pubkey}`}
              >
                {shortenAddress(validator.pubkey)}
              </Link>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>{validatorStatus(validator)}</Text>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>
                {validator.slashed ? (
                  <FormattedMessage defaultMessage="YES" />
                ) : (
                  <FormattedMessage defaultMessage="NO" />
                )}
              </Text>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>
                {`${numeral(validator.balance / LUKSO_TO_GWEI).format(
                  '0.00000'
                )} ${TICKER_NAME}`}
              </Text>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>
                {`${numeral(validator.effectivebalance / LUKSO_TO_GWEI).format(
                  '0.00000'
                )} ${TICKER_NAME}`}
              </Text>
            </TableCell>
            <TableCell data-tip={toolTipText()}>
              <Button
                onClick={() => setSelectedValidator(validator)}
                label={formatMessage({ defaultMessage: 'Top up' })}
                gradient
                disabled={statusIneligible}
              />
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
    });
  }, [validators, setSelectedValidator, formatMessage]);

  return validators.length > 0 ? (
    <Paper style={{ marginTop: '3rem' }}>
      <ReactTooltip />
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              <Text>
                <FormattedMessage defaultMessage="Public key" />
              </Text>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>
                <FormattedMessage defaultMessage="Status" />
              </Text>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>
                <FormattedMessage defaultMessage="Slashed?" />
              </Text>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>
                <FormattedMessage defaultMessage="True balance" />
              </Text>
            </TableCell>
            <TableCell scope="col" border="bottom">
              <Text>
                <FormattedMessage defaultMessage="Effective balance" />
              </Text>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>{validatorRows}</TableBody>
      </Table>
    </Paper>
  ) : (
    <Box align="center" justify="center" className="mt40">
      <Text weight={600}>
        <FormattedMessage defaultMessage="No validators found for your connected wallet" />
      </Text>
      <Text className="mt20">
        <FormattedMessage
          defaultMessage="You can {changeYourWallet} to load validators for a different address."
          values={{
            changeYourWallet: (
              <FakeLink onClick={deactivate}>
                <FormattedMessage defaultMessage="change your wallet" />
              </FakeLink>
            ),
          }}
          description="{changeYourWallet} is a link labeled 'change your wallet'"
        />
      </Text>
    </Box>
  );
};

export default ValidatorTable;
