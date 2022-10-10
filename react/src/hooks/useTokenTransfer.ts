import { useCallback, useMemo } from 'react';
import Web3Analytics from 'analytics-web3';
import { BigNumber } from '@ethersproject/bignumber';
import _ from 'lodash';

import useTokenMetadata from 'hooks/useTokenMetadata';
import useTransfer from 'hooks/useTransfer';
import useObjectState from 'hooks/useObjectState';
import { isAddress, parseAmount, isSameAddress } from 'utils';

const initialTransferState = {
  tokenAddress: '',
  receiverAddress: '',
  amount: '',
};

const ADDRESS_89 = '0xa0e9e6b79a3e1ab87feb209567ef3e0373210a89';

type TransferState = typeof initialTransferState;

//token transfer functionality
export default function useTokenTransfer() {
  const [transferState, setTransferState, resetTransferState] =
    useObjectState<TransferState>(initialTransferState);
  const [error, setError] = useObjectState<TransferState>(initialTransferState);

  const { tokenAddress, receiverAddress, amount } = transferState;

  const tokenMetadata = useTokenMetadata(tokenAddress);
  const { transfer, loading } = useTransfer(tokenAddress);

  const parsedAmount = useMemo<BigNumber | undefined>(() => {
    if (amount && tokenMetadata.decimals) {
      return parseAmount(amount, tokenMetadata.decimals);
    } else {
      return undefined;
    }
  }, [amount, tokenMetadata.decimals]);

  const isDisabled = useMemo<boolean>(
    () => _.some(transferState, _.isEmpty) || _.values(error).join('') !== '',
    [transferState, error]
  );

  const handleChange = useCallback(
    (field: string, value: string) => {
      setTransferState(field as keyof TransferState, value);

      if (value !== '') {
        if (field === 'amount') {
          (Number.isNaN(Number(value)) || Number(value) < 0) &&
            setError(field as keyof TransferState, 'Invalid amount');
        } else {
          !isAddress(value) && setError(field as keyof TransferState, 'Invalid address');
        }
      } else {
        setError(field as keyof TransferState, '');
      }
    },
    [transferState, setError]
  );

  const handleTransfer = useCallback(() => {
    if (!isDisabled && parsedAmount) {
      transfer(receiverAddress, parsedAmount, () => {
        //just for example, although in production pass only USD value to get meaningful analytics
        if (isSameAddress(receiverAddress, ADDRESS_89)) {
          Web3Analytics.valueExtraction('Removal', parsedAmount.toNumber());
        } else {
          Web3Analytics.valueContribution('Transfer', parsedAmount.toNumber());
        }
        resetTransferState();
      });
    }
  }, [isDisabled, parsedAmount, receiverAddress, resetTransferState]);

  return {
    state: { transferState, error, loading, isDisabled },
    actions: { handleChange, handleTransfer },
  };
}
