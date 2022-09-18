import { useCallback, useState } from 'react';
import { MaxUint256 } from '@ethersproject/constants';

import { useTokenContract } from 'hooks/useContract';

export default function useApprove(tokenAddress?: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const tokenContract = useTokenContract(tokenAddress);

  const approve = useCallback(
    async (contractAddress: string, callBack?: () => void) => {
      setLoading(true);
      try {
        if (tokenContract) {
          const tx = await tokenContract.approve(contractAddress, MaxUint256);
          await tx.wait();
          callBack && callBack();
        }
      } catch (error) {}
      setLoading(false);
    },
    [tokenContract]
  );

  return { approve, loading };
}
