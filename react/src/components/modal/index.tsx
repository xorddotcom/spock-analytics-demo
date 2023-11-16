import ReactModal from 'react-modal';
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  label: string;
  children: React.ReactNode;
  onClose?: () => void;
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

const Modal: React.FC<ModalProps> = ({ isOpen, label, children, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} contentLabel={label} style={customStyles}>
      <div className={styles.main}>
        <div className={styles.header}>
          <span>{label}</span>
          {onClose && (
            <span className={styles.close} onClick={onClose}>
              Close
            </span>
          )}
        </div>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
