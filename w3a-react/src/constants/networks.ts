import { SupportedChainId } from 'constants/chains';

export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
};
