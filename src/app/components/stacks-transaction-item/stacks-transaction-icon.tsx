import { BoxProps } from 'leather-styles/jsx';

import { StacksTx } from '@leather-wallet/models';

import { StxAvatarIcon } from '@app/ui/components/avatar/stx-avatar-icon';
import { DynamicColorCircle } from '@app/ui/components/dynamic-color-circle';
import { ErrorCircleIcon } from '@app/ui/icons';
import { ListIcon } from '@app/ui/icons/list-icon';

import { TransactionIconWrapper } from '../transaction/transaction-icon-wrapper';
import { TransactionTypeIcon } from '../transaction/transaction-type-icon';

interface TransactionIconProps extends BoxProps {
  transaction: StacksTx;
}
export function StacksTransactionIcon({ transaction, ...rest }: TransactionIconProps) {
  switch (transaction.tx_type) {
    case 'coinbase':
      return <TransactionIconWrapper icon={<ListIcon />} transaction={transaction} {...rest} />;
    case 'smart_contract':
      return (
        <DynamicColorCircle value={`${transaction.smart_contract.contract_id}`} {...rest}>
          <TransactionTypeIcon transaction={transaction} />
        </DynamicColorCircle>
      );
    case 'contract_call':
      return (
        <DynamicColorCircle
          value={`${transaction.contract_call.contract_id}::${transaction.contract_call.function_name}`}
          {...rest}
        >
          <TransactionTypeIcon transaction={transaction} />
        </DynamicColorCircle>
      );
    case 'token_transfer':
      return (
        <TransactionIconWrapper icon={<StxAvatarIcon />} transaction={transaction} {...rest} />
      );
    case 'poison_microblock':
      return (
        <TransactionIconWrapper icon={<ErrorCircleIcon />} transaction={transaction} {...rest} />
      );
    default:
      return null;
  }
}
