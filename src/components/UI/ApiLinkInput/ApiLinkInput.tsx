import classes from './ApiLinkInput.module.css';
import useApiLinkInput from './useApiLinkInput';

interface IProps {
  label: string;
  value: string;
  submitHandler: (value: string) => void;
}

const ApiSourceInput = ({ label, value, submitHandler }: IProps) => {
  const { inputValue, handleInputChange, handleSubmit } = useApiLinkInput({
    value,
    submitHandler,
  });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="source">{label}</label>
      <input
        className={classes.input}
        id="source"
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button type="submit">Change URL</button>
    </form>
  );
};

export default ApiSourceInput;
