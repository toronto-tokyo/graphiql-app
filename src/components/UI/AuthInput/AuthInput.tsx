import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import classes from './AuthInput.module.css';
import useAuthInput from './useAuthInput';
import InputPasswordEye from '../InputPasswordEye';

interface IAuthInputProps {
  register?: UseFormRegisterReturn;
  type: string;
  id: string;
  className?: string;
}

const AuthInput: React.FC<IAuthInputProps> = ({
  id,
  register,
  type,
  className,
}) => {
  const { inputType, showPassword, togglePasswordVision } = useAuthInput({
    type,
  });

  return (
    <div className={`${classes.wrapper} ${className ?? className}`}>
      <input
        className={classes.input}
        type={inputType}
        id={id}
        placeholder=""
        {...register}
      />
      {type === 'password' && (
        <InputPasswordEye
          isVisible={showPassword}
          handleClick={togglePasswordVision}
          className={classes.passwordEye}
        />
      )}
    </div>
  );
};

export default AuthInput;
