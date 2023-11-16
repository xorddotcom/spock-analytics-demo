import styles from './walletModal.module.css';

import Modal from 'components/modal';
import { connections, Connection, ConnectionType } from 'connection';
import { getConnectionName, getIsMetaMask } from 'connection/utils';
import { useAppDispatch } from 'state/hooks';
import { updateSelectedWallet } from 'state/user/reducer';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
    <Modal isOpen={isOpen} label='Wallet Connection' onClose={onClose}>
      <div className={styles.conenctors}>
        {connections.map(connection =>
          connection.type === ConnectionType.NETWORK ? (
            <span key={connection.type}></span>
          ) : (
            <WalletConnection key={connection.type} connection={connection} onClose={onClose} />
          )
        )}
      </div>
    </Modal>
  );
};

export default WalletModal;
