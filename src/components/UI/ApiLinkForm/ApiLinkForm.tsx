import classes from './ApiLinkForm.module.css';
import useApiLinkForm from './useApiLinkForm';

interface IProps {
  value: string;
  submitHandler: (value: string) => void;
}

const ApiSourceInput = ({ value, submitHandler }: IProps) => {
  const {
    inputValue,
    handleInputChange,
    handleSubmit,
    labelText,
    changeUrlBtnText,
  } = useApiLinkForm({
    value,
    submitHandler,
  });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="source">{labelText}</label>
      <input
        className={classes.input}
        id="source"
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button type="submit">{changeUrlBtnText}</button>
    </form>
  );
};

export default ApiSourceInput;
