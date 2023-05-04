import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Web3Analytics from 'analytics-web3';
import { useWeb3React } from '@web3-react/core';

import WalletConnect from 'components/walletModal';
import { shortenAddress } from 'utils';
import styles from './navbar.module.css';

const NavLink = ({
  path,
  title,
  activePath,
}: {
  path: string;
  title: string;
  activePath: string;
}) => {
  return (
    <Link to={path} className={path === activePath ? styles.active : ''}>
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [allowTracking, setAllowTracking] = useState<boolean>(!Web3Analytics.hasOptedOutTracking());
  const { account } = useWeb3React();
  const { pathname } = useLocation();

  const toggleTracking = () => {
    const optOut = Web3Analytics.hasOptedOutTracking();
    if (optOut) {
      Web3Analytics.optInTracking();
      setAllowTracking(true);
    } else {
      Web3Analytics.optOutTracking();
      setAllowTracking(false);
    }
  };

  return (
    <>
      <WalletConnect isOpen={openModal} onClose={() => setOpenModal(false)} />
      <nav className={styles.main}>
        <h1>Spock</h1>
        <div className={styles.menu}>
          <NavLink path='/approve' title='Approve' activePath={pathname} />
          <NavLink path='/transfer' title='Transfer' activePath={pathname} />
        </div>
        <div className={styles.controls}>
          <div
            className={[styles.tracking, allowTracking ? styles.start : styles.stop].join(' ')}
            onClick={toggleTracking}
          >
            Stop tracking
          </div>
          <div className={styles.connect} onClick={() => setOpenModal(true)}>
            {account ? shortenAddress(account) : 'Connect'}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
