import { InputStringProps } from '../../../shared/types';

function InputName({ value, onChange }: InputStringProps) {
  return (
    <div>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={onChange}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default InputName;
