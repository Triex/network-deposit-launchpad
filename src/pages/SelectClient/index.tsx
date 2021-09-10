import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import _shuffle from 'lodash/shuffle';
import { useIntl } from 'react-intl';
import { StoreState } from '../../store/reducers';
import { WorkflowPageTemplate } from '../../components/WorkflowPage/WorkflowPageTemplate';
import { routeToCorrectWorkflowStep } from '../../utils/RouteToCorrectWorkflowStep';
import SelectClientSection from './SelectClientSection';
import SelectClientButtons from './SelectClientButtons';
import { PrysmDetails } from '../Clients/Eth2/Prysm';
import { GethDetails } from '../Clients/Eth1/Geth';
import PrysmaticCircle from '../../static/prysmatic-labs-circle.png';
import GethCircle from '../../static/gethereum-mascot-circle.png';

import {
  DispatchWorkflowUpdateType,
  updateWorkflow,
  WorkflowStep,
} from '../../store/actions/workflowActions';
import {
  DispatchClientUpdate,
  updateClient,
  ClientId,
} from '../../store/actions/clientActions';
import { clientState } from '../../store/reducers/clientReducer';

// Prop definitions
interface OwnProps {}
interface StateProps {
  workflow: WorkflowStep;
  chosenClients: clientState;
}

interface DispatchProps {
  dispatchWorkflowUpdate: DispatchWorkflowUpdateType;
  dispatchClientUpdate: DispatchClientUpdate;
}
type Props = StateProps & DispatchProps & OwnProps;

const clientDetails = {
  [ClientId.PRYSM]: <PrysmDetails shortened />,
  [ClientId.GETH]: <GethDetails />,
};

export type Client = {
  clientId: ClientId;
  name: string;
  imgUrl: string;
  language?: any;
};

// define and shuffle the clients
const lyxtClients: {
  [ethVersion: number]: Array<Client>;
} = {
  1: _shuffle([
    {
      clientId: ClientId.GETH,
      name: 'Pandora',
      imgUrl: GethCircle,
      language: 'Go',
    },
  ]),
  2: _shuffle([
    {
      clientId: ClientId.PRYSM,
      name: 'Vanguard',
      imgUrl: PrysmaticCircle,
      language: 'Go',
    },
  ]),
};

const _SelectClientPage = ({
  workflow,
  dispatchWorkflowUpdate,
  chosenClients,
  dispatchClientUpdate,
}: Props): JSX.Element => {
  // set the default the eth version to 1 on initial render
  const [luksoVersionStep, setLuksoVersionStep] = useState<1 | 2>(1);

  const { formatMessage } = useIntl();

  // filter the options based on the eth version the user is on
  const clientOptions = React.useMemo(() => lyxtClients[luksoVersionStep], [
    luksoVersionStep,
  ]);

  // memoize the chosen client by step
  const selectedClient: ClientId = React.useMemo(
    () =>
      luksoVersionStep === 1
        ? chosenClients.pandoraClient
        : chosenClients.vanguardClient,
    [luksoVersionStep, chosenClients]
  );

  const setClientFxn = (clientId: ClientId) => {
    dispatchClientUpdate(clientId, luksoVersionStep);
  };

  React.useEffect(() => {
    const header = document.getElementsByTagName('header')[0];

    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  }, [luksoVersionStep]);

  const handleSubmit = () => {
    if (workflow === WorkflowStep.SELECT_CLIENT) {
      dispatchWorkflowUpdate(WorkflowStep.GENERATE_KEY_PAIRS);
    }
  };

  if (workflow < WorkflowStep.SELECT_CLIENT) {
    return routeToCorrectWorkflowStep(workflow);
  }

  const title = formatMessage(
    {
      defaultMessage: `Choose {lyxt} client`,
      description:
        '{lyxt} injects Pandora or Vanguard networks depending on step',
    },
    {
      lyxt: `Eth${luksoVersionStep}`,
    }
  );

  return (
    <WorkflowPageTemplate title={title}>
      <SelectClientSection
        title={formatMessage(
          {
            defaultMessage: `Choose your Eth{luksoVersionStep} client and set up a node`,
            description: `{luksoVersionStep} is either 1 (Pandora) or 2 (Vanguard), depending on which step user is on`,
          },
          { luksoVersionStep }
        )}
        clients={clientOptions}
        currentClient={selectedClient}
        setCurrentClient={setClientFxn}
        clientDetails={clientDetails}
        luksoVersionStep={luksoVersionStep}
      />
      <div className="flex center p30">
        <SelectClientButtons
          updateStep={setLuksoVersionStep}
          luksoVersionStep={luksoVersionStep}
          handleSubmit={handleSubmit}
          currentClient={selectedClient}
        />
      </div>
    </WorkflowPageTemplate>
  );
};

const mapStateToProps = ({ workflow, client }: StoreState): StateProps => ({
  workflow,
  chosenClients: client,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatchClientUpdate: (clientId: ClientId, ethVersion: 1 | 2) => {
    dispatch(updateClient(clientId, ethVersion));
  },
  dispatchWorkflowUpdate: (step: WorkflowStep) => {
    dispatch(updateWorkflow(step));
  },
});

export const SelectClientPage = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  StoreState
>(
  mapStateToProps,
  mapDispatchToProps
)(_SelectClientPage);
