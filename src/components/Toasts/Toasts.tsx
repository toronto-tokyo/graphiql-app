import { IError } from '../../redux/slices/GraphQLSlice';
import Toast from '../Toast/Toast';
import errorIcon from '../../assets/error-icon.svg';
import classes from './Toasts.module.css';

interface IToastsProps {
  toastsData: IError[];
  handleErrToastClose: (errorId: number) => void;
}

function Toasts({ toastsData, handleErrToastClose }: IToastsProps) {
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
