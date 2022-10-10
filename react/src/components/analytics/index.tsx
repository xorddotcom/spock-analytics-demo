import { useEffect } from 'react';
import Web3Analytics from 'analytics-web3';
import { useLocation } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import { WEB3_ANALYTICS_KEY } from 'constants/env';

if (WEB3_ANALYTICS_KEY) {
  Web3Analytics.init({ appKey: WEB3_ANALYTICS_KEY, debug: true, testENV: true });
} else {
  //analytics on testMode, if want to see events on console pass debug true
  Web3Analytics.init({ appKey: 'test', testMode: true });
}

// use this hook at the root level for after providers
export function useWeb3AnalyticsReporter() {
  const { pathname, search } = useLocation();
  const { provider } = useWeb3React();

  //track pageviews
  useEffect(() => {
    Web3Analytics.trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  //track wallet activity
  useEffect(() => {
    if (provider) {
      Web3Analytics.walletProvider(provider);
    }
  }, [provider]);
}
