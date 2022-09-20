import { useCallback, useMemo } from 'react';
import _ from 'lodash';

import useApprove from 'hooks/useApprove';
import useObjectState from 'hooks/useObjectState';
import { isAddress } from 'utils';

const initialApproveState = {
  tokenAddress: '',
  contractAddress: '',
};

type ApproveState = typeof initialApproveState;

//token approval functionality
export default function useTokenApprove() {
  const [approveState, setApproveState, resetApproveState] =
    useObjectState<ApproveState>(initialApproveState);
  const [error, setError] = useObjectState<ApproveState>(initialApproveState);
  const { approve, loading } = useApprove(approveState.tokenAddress);

  const isDisabled = useMemo<boolean>(
    () => _.some(approveState, _.isEmpty) || _.values(error).join('') !== '',
    [approveState, error]
  );

  const handleChange = useCallback(
    (field: string, value: string) => {
      setApproveState(field as keyof ApproveState, value);

      if (value !== '' && !isAddress(value)) {
        setError(field as keyof ApproveState, 'Invalid address');
      } else {
        setError(field as keyof ApproveState, '');
      }
    },
    [setApproveState, setError]
  );

  const handleApprove = useCallback(() => {
    if (!isDisabled) {
      approve(approveState.contractAddress, () => {
        resetApproveState();
      });
    }
  }, [isDisabled, approveState.contractAddress, resetApproveState]);

  return {
    state: { approveState, error, loading, isDisabled },
    actions: { handleChange, handleApprove },
  };
}
