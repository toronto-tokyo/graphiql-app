import { useState } from 'react';

interface IProps {
  value: string;
  submitHandler: (value: string) => void;
}

const useApiLinkInput = ({ value, submitHandler }: IProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(inputValue);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return {
    inputValue,
    handleSubmit,
    handleInputChange,
  };
};

export default useApiLinkInput;
