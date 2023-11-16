import { WEB3_ANALYTICS_KEY } from 'constants/env';

const DEFAULT_SETTINGS = JSON.stringify({
  datapoints: ['engage', 'web3'],
  configuration: ['debug'],
  appkey: WEB3_ANALYTICS_KEY,
});

export type Settings = { datapoints: string[]; configuration: string[]; appkey: string };
export const storedSettings: Settings = JSON.parse(
  localStorage.getItem('demo_settings') ?? DEFAULT_SETTINGS
);
