import type { TransactionInput } from '@scure/btc-signer/psbt';
import { PsbtPayload } from '@stacks/connect';
import { decodeToken } from 'jsontokens';

import type { Money } from '@leather-wallet/models';
import { isString } from '@leather-wallet/utils';

export interface SignPsbtArgs {
  addressNativeSegwitTotal?: Money;
  addressTaprootTotal?: Money;
  fee?: Money;
  inputs: TransactionInput[];
}

export function getPsbtPayloadFromToken(requestToken: string): PsbtPayload {
  const token = decodeToken(requestToken);
  if (isString(token.payload)) throw new Error('Error decoding json token');
  return token.payload as unknown as PsbtPayload;
}
