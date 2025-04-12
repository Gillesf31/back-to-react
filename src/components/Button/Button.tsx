import { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children?: ReactNode;
  onButtonClicked?: () => void;
  btnType?: 'primary' | 'secondary';
};

function Button({
  children,
  onButtonClicked,
  btnType = 'primary',
}: ButtonProps) {
  return (
    <button
      onClick={onButtonClicked}
      type='button'
      className={`${styles.btn} ${styles['btn-' + btnType]}`}
    >
      {children}
    </button>
  );
}

export default Button;
