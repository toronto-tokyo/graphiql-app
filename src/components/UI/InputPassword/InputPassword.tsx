import { InputStringProps } from '../../../shared/types';

function InputPassword({ value, onChange }: InputStringProps) {
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={value}
        onChange={onChange}
        placeholder="Enter your password"
      />
    </div>
  );
}

export default InputPassword;
