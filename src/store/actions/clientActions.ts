import { ActionTypes } from './index';

export enum ClientId {
  'BESU' = 'BESU',
  'OPEN_ETHEREUM' = 'OPEN_ETHEREUM',
  'NETHERMIND' = 'NETHERMIND',
  'GETH' = 'GETH',
  'PRYSM' = 'PRYSM',
  'LIGHTHOUSE' = 'LIGHTHOUSE',
  'NIMBUS' = 'NIMBUS',
  'TEKU' = 'TEKU',
}

export interface UpdateClientAction {
  type: ActionTypes.updateClient;
  payload: {
    clientId: ClientId;
    luksoVersion: 'Pandora' | 'Vanguard';
  };
}

export const updateClient = (
  clientId: ClientId,
  luksoVersion: 'Pandora' | 'Vanguard'
): UpdateClientAction => {
  return {
    type: ActionTypes.updateClient,
    payload: {
      clientId,
      luksoVersion,
    },
  };
};

export type DispatchClientUpdate = (
  ValidatorId: ClientId,
  luksoVersion: 'Pandora' | 'Vanguard'
) => void;
