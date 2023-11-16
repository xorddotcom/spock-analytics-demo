import { useEffect } from 'react';
import Web3Analytics from 'analytics-web3';
import { useLocation } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import { storedSettings } from 'constants/analytics';

// ********************RECOMMENDED INTEGRATION*******************************
// import { WEB3_ANALYTICS_KEY } from 'constants/env';

// Web3Analytics.init({
//   appKey: WEB3_ANALYTICS_KEY,
//   dataPoints: ['demographics', 'engage', 'web2', 'web3'],
// });

// ********************SPECIFIC TO THIS DEMO APP*******************************
Web3Analytics.init({
  appKey: storedSettings.appkey,
  dataPoints: storedSettings.datapoints as any,
  ...(storedSettings.configuration.reduce<Record<string, boolean>>((accum, config) => {
    accum[config] = true;
    return accum;
  }, {}) as any),
});

// use this hook at the root level for after providers
export function useWeb3AnalyticsReporter() {
  const { pathname, search } = useLocation();
  const { provider } = useWeb3React();

  //track pageviews
  useEffect(() => {
    Web3Analytics.trackPageView(pathname, search);
  }, [pathname, search]);

  //track wallet activity
  useEffect(() => {
    if (provider) {
      Web3Analytics.walletProvider(provider);
    }
  }, [provider]);
}
