import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import classes from './AuthInputBlock.module.css';
import AuthInput from 'components/UI/AuthInput';

interface IAuthInputBlockProps {
  register: UseFormRegisterReturn;
  type: string;
  label: string;
  id: string;
  error?: string;
  className?: string;
}

const AuthInputBlock: FC<IAuthInputBlockProps> = ({
  register,
  label,
  type,
  error,
  id,
  className,
}) => {
  return (
    <div className={`${classes.inputBlock} ${className ?? className}`}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <AuthInput id={id} register={register} type={type} />
      {error && <div className={classes.errorMessage}>{error}</div>}
    </div>
  );
};

export default AuthInputBlock;
