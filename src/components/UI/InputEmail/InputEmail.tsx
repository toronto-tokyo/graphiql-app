import { InputStringProps } from '../../../shared/types';

function InputLogin({ value, onChange }: InputStringProps) {
  return (
    <div>
      <label htmlFor="email">email:</label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={onChange}
        placeholder="Enter your email"
      />
    </div>
  );
}

export default InputLogin;
