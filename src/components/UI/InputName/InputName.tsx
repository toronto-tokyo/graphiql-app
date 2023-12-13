import { ChangeEvent, useState } from 'react';
import * as yup from 'yup';

const inputNameSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z][a-z]*$/, 'Name must start with an uppercase letter'),
});

interface InputNameProps {
  value: string;
  onChange: (value: string) => void;
}

function InputName({ value, onChange }: InputNameProps) {
  const [error, setError] = useState<string | undefined>(undefined);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setError(undefined);
  };

  const validateInput = async () => {
    try {
      await inputNameSchema.validate({ name: value }, { abortEarly: false });
      setError(undefined);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setError(error.errors[0]);
      }
    }
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
        onBlur={validateInput}
      />
      {!error && (
        <div style={{ display: 'hidden', height: '20px' }}>{error}</div>
      )}
      {error && (
        <div style={{ color: 'red', display: 'block', height: '20px' }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default InputName;
