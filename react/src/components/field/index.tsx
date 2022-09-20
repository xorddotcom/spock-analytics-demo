import React from 'react';
import styles from './field.module.css';

interface FieldProps {
  title: string;
  placeholder?: string;
  value?: string;
  stateKey?: string;
  error?: string;
  onChange?: (key: string, value: string) => void;
}

const Field: React.FC<FieldProps> = ({ title, placeholder, value, stateKey, error, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(stateKey ?? '', event.target.value);
  };

  return (
    <div className={styles.fieldWrapper}>
      <span>{title}</span>
      <input type='text' placeholder={placeholder} value={value} onChange={handleChange} />
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default Field;
