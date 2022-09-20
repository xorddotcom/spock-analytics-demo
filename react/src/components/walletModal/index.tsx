import Modal from 'react-modal';

import styles from './walletModal.module.css';
import { connections, Connection, ConnectionType } from 'connection';
import { getConnectionName, getIsMetaMask } from 'connection/utils';
import { useAppDispatch } from 'state/hooks';
import { updateSelectedWallet } from 'state/user/reducer';

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
  const dispatch = useAppDispatch();
  const isMetaMask = getIsMetaMask();
  const isActive = connection.hooks.useIsActive();
  const isActivating = connection.hooks.useIsActivating();

  const tryActiviate = async () => {
    if (!isActive && !isActivating) {
      try {
        await connection.connector.activate();
        dispatch(updateSelectedWallet({ wallet: connection.type }));
        onClose();
      } catch (error) {
        console.debug('tryActiviate => ', error);
      }
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
  return (
    <Modal isOpen={isOpen} contentLabel='Wallet Connection' style={customStyles}>
      <div className={styles.main}>
        <div className={styles.header}>
          <span>Wallet Connection</span>
          <span className={styles.close} onClick={onClose}>
            Close
          </span>
        </div>
        <div className={styles.conenctors}>
          {connections.map(connection =>
            connection.type === ConnectionType.NETWORK ? (
              <span key={connection.type}></span>
            ) : (
              <WalletConnection key={connection.type} connection={connection} onClose={onClose} />
            )
          )}
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;
