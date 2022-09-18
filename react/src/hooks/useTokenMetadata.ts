import { useState, useEffect, useCallback } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { useWeb3React } from '@web3-react/core';

import { useTokenContract } from 'hooks/useContract';

type TokenMetadata = {
  name: string;
  symbol: string;
  decimals: number;
  balance?: BigNumber;
};

export default function useTokenMetadata(tokenAddress?: string) {
  const [tokenMetadata, setTokenMetadata] = useState<TokenMetadata>({
    name: '',
    symbol: '',
    decimals: 0,
  });
  const { account } = useWeb3React();
  const tokenContract = useTokenContract(tokenAddress);

  const fetchTokenData = useCallback(async () => {
    if (tokenContract) {
      const [name, symbol, decimals] = await Promise.all([
        tokenContract.name(),
        tokenContract.symbol(),
        tokenContract.decimals(),
      ]);
      setTokenMetadata(prevState => ({ ...prevState, name, symbol, decimals }));
    }
  }, [tokenContract]);

  const fetchUserBalace = useCallback(async () => {
    if (account && tokenContract) {
      const balance = await tokenContract.balanceOf(account);
      setTokenMetadata(prevState => ({ ...prevState, balance }));
    }
  }, [account, tokenContract]);

  useEffect(() => {
    fetchUserBalace();
  }, [fetchUserBalace]);

  useEffect(() => {
    fetchTokenData();
  }, [fetchTokenData]);

  return tokenMetadata;
}
