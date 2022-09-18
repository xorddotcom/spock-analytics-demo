import { useState } from 'react';
import Modal from 'react-modal';

import { connections, Connection, walletConnectConnection } from 'connection';
import { getConnectionName, getIsMetaMask } from 'connection/utils';
import styles from './walletModal.module.css';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const WalletConnection = ({
  connection,
  onClose,
}: {
  connection: Connection;
  onClose: () => void;
}) => {
  const isMetaMask = getIsMetaMask();
  const isActive = connection.hooks.useIsActive();
  const isActivating = connection.hooks.useIsActivating();

  const tryActiviate = async () => {
    if (!isActive && !isActivating) {
      try {
        await connection.connector.activate();
        onClose();
      } catch (e) {}
    }
  };

  return (
    <div className={isActive ? styles.active : ''} onClick={tryActiviate}>
      {isActivating
        ? 'Activating'
        : getConnectionName(connection.type, isMetaMask) + `${isActive ? ' - connected' : ''}`}
    </div>
  );
};

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const { useIsActivating } = walletConnectConnection.hooks;
  const isActivating = useIsActivating();

  return (
    <Modal isOpen={isOpen} contentLabel='Wallet Connection' style={customStyles}>
      <div className={styles.main}>
        <div className={styles.header}>
          <span>Wallet Connection</span>
          <span className={styles.close} onClick={onClose}>
            Close
          </span>
        </div>
        {/* <div
          onClick={isActivating ? undefined : () => walletConnectConnection.connector.activate(1)}
        >
          Test
        </div> */}
        <div className={styles.conenctors}>
          {connections.map(connection => (
            <WalletConnection key={connection.type} connection={connection} onClose={onClose} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;
