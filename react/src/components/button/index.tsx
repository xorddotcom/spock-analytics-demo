import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import styles from './button.module.css';
import WalletConnect from 'components/walletModal';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  normal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, loading, onClick, normal }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { account } = useWeb3React();

  const handleClick = () => {
    if (!account && !normal) {
      setOpenModal(true);
    } else if (!loading && !disabled) {
      onClick && onClick();
    }
  };

  return (
    <>
      <WalletConnect isOpen={openModal} onClose={() => setOpenModal(false)} />
      <button className={styles.button} onClick={handleClick} disabled={account ? disabled : false}>
        {account || normal ? (loading ? 'Loading' : children) : 'Connect'}
      </button>
    </>
  );
};

export default Button;
