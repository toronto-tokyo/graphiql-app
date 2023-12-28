import classes from './ApiLinkFrom.module.css';
import useApiLinkForm from './useApiLinkForm';

interface IProps {
  label: string;
  value: string;
  submitHandler: (value: string) => void;
}

const ApiSourceInput = ({ label, value, submitHandler }: IProps) => {
  const { inputValue, handleInputChange, handleSubmit } = useApiLinkForm({
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
