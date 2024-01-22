import React from 'react';

interface IUseAuthInputParams {
  type?: string;
}

const useAuthInput = ({ type = 'text' }: IUseAuthInputParams) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputType = showPassword ? 'text' : type;

  const togglePasswordVision = () => setShowPassword((prev) => !prev);

  return {
    inputType,
    showPassword,
    togglePasswordVision,
  };
};

export default useAuthInput;
