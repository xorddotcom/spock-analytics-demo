import { useEffect } from 'react';
import { Connector } from '@web3-react/types';

import { networkConnection } from 'connection';
import { getConnection } from 'connection/utils';
import { useAppSelector } from 'state/hooks';

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`);
  }
}

export default function useEagerlyConnect() {
  const selectedWallet = useAppSelector(state => state.user.selectedWallet);

  useEffect(() => {
    connect(networkConnection.connector);

    if (selectedWallet) {
      connect(getConnection(selectedWallet).connector);
    } // The dependency list is empty so this is only run once on mount
  }, []);
}
