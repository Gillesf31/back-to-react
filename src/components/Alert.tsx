import { ReactNode } from 'react';
import Button from './Button/Button';

type AlertProps = {
  children: ReactNode;
  alertType?:
    | 'alert-success'
    | 'alert-danger'
    | 'alert-warning'
    | 'alert-info'
    | 'alert-light'
    | 'alert-dark';
  isShown: boolean;
  onCloseClicked?: () => void;
};

function Alert({ children, alertType, isShown, onCloseClicked }: AlertProps) {
  return isShown ? (
    <>
      <div
        className={`alert alert-dismissible ${alertType || 'alert-primary'}`}
        role='alert'
      >
        {children}
        <Button
          onButtonClicked={onCloseClicked}
          btnType='btn-close'
          aria-label='Close'
        ></Button>
      </div>
    </>
  ) : null;
}

export default Alert;
