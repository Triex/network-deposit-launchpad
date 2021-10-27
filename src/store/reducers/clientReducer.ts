import _sample from 'lodash/sample';
import { Action, ActionTypes } from '../actions';
import { ClientId } from '../actions/clientActions';

export type clientState = {
  pandoraClient: ClientId;
  vanguardClient: ClientId;
};

const pandoraClientIds = [
  ClientId.BESU,
  ClientId.NETHERMIND,
  ClientId.OPEN_ETHEREUM,
  ClientId.GETH,
];

const vanguardClientIds = [
  ClientId.LIGHTHOUSE,
  ClientId.NIMBUS,
  ClientId.TEKU,
  ClientId.PRYSM,
];

const initialState: clientState = {
  pandoraClient: _sample(pandoraClientIds) || vanguardClientIds[0],
  vanguardClient: _sample(vanguardClientIds) || vanguardClientIds[0],
};

export const clientReducer = (
  state: clientState = initialState,
  action: Action
) => {
  if (action.type === ActionTypes.updateClient) {
    if (action.payload.luksoVersion === 'Pandora') {
      return {
        ...state,
        pandoraClient: action.payload.clientId,
      };
    }

    if (action.payload.luksoVersion === 'Vanguard') {
      return {
        ...state,
        vanguardClient: action.payload.clientId,
      };
    }
  }
  return state;
};
