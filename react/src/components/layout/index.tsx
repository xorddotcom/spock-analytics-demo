import Navbar from 'components/navbar';
import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
