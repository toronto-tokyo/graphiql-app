import { IError } from 'store/slices/GraphQLSlice';
import errorIcon from 'assets/error-icon.svg';
import classes from './Toasts.module.css';
import Toast from 'components/Toast/Toast';
import useErrorToastClose from 'hook/useErrorToastClose';

interface IToastsProps {
  toastsData: IError[];
  handleErrToastClose: (errorId: number) => void;
}

function Toasts({ toastsData }: IToastsProps) {
  const handleErrToastClose = useErrorToastClose();
  return (
    <div className={classes.toastsWrapper}>
      <div className={classes.toasts}>
        {toastsData.map((error) => (
          <Toast
            key={error.id}
            imgPath={errorIcon}
            onClose={() => handleErrToastClose(error.id)}
          >
            {error.message}
          </Toast>
        ))}
      </div>
    </div>
  );
}

export default Toasts;
