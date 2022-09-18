import { useCallback, useState } from 'react';
import { BigNumber } from '@ethersproject/bignumber';

import { useTokenContract } from 'hooks/useContract';

export default function useTransfer(tokenAddress?: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const tokenContract = useTokenContract(tokenAddress);

  const transfer = useCallback(
    async (receiver: string, amount: BigNumber, callBack?: () => void) => {
      setLoading(true);
      try {
        if (tokenContract) {
          const tx = await tokenContract.transfer(receiver, amount);
          await tx.wait();
          callBack && callBack();
        }
      } catch (error) {}
      setLoading(false);
    },
    [tokenContract]
  );

  return { transfer, loading };
}
