import { SupportedChainId } from 'constants/chains';
import { INFURA_KEY } from 'constants/env';

export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.POLYGON]: 'https://polygon-rpc.com/',
  [SupportedChainId.BSC]: 'https://bsc-dataseed.binance.org/',

  [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.SEPOLIA]: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.MUMBAI]: 'https://matic-mumbai.chainstacklabs.com',
  [SupportedChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
};
