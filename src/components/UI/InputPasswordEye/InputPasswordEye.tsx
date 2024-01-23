import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import classes from './InputPasswordEye.module.css';

interface IInputPasswordEyeProps {
  isVisible: boolean;
  handleClick: () => void;
  className?: string;
}

const InputPasswordEye: React.FC<IInputPasswordEyeProps> = ({
  isVisible,
  handleClick,
  className,
}) => {
  return (
    <div
      className={`${classes.toggleEyeBtn} ${className ?? className}`}
      onClick={handleClick}
    >
      {isVisible ? (
        <FaEyeSlash className={classes.toggleEyeIcon} />
      ) : (
        <FaEye className={classes.toggleEyeIcon} />
      )}
    </div>
  );
};

export default InputPasswordEye;
