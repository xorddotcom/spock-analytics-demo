import { SupportedChainId } from 'constants/chains';
import { ALCHEMY_KEY } from 'constants/env';

export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.ETHEREUM]: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.OPTIMISM]: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.BSC]: `https://bsc-dataseed1.ninicoin.io`,
  [SupportedChainId.GNOSIS]: `https://rpc.ankr.com/gnosis`,
  [SupportedChainId.POLYGON]: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.FANTOM]: `https://rpc.ankr.com/fantom`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.AVALANCHE]: `https://rpc.ankr.com/avalanche`,

  [SupportedChainId.GOERLI]: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.BSC_TESTNET]: `https://data-seed-prebsc-1-s3.binance.org:8545`,
  [SupportedChainId.OPTIMISM_GOERLI]: `https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.MUMBAI]: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.FANTOM_TESTNET]: `https://rpc.ankr.com/fantom_testnet`,
  [SupportedChainId.GNOSIS_CHIADO]: `https://rpc.chiadochain.net`,
  [SupportedChainId.ARBITRUM_GOERLI]: `https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.AVALANCHE_FUJI]: `https://rpc.ankr.com/avalanche_fuji`,
  [SupportedChainId.SEPOLIA]: `https://rpc.sepolia.org`,
};
