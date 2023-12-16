import classes from './ApiLinkInput.module.css';

interface IProps {
  label: string;
  value: string;
  changeValue: (value: string) => void;
}

const ApiSourceInput = ({ label, value, changeValue }: IProps) => {
  return (
    <div className={classes.wrapper}>
      <label htmlFor="source">{label}</label>
      <input
        className={classes.input}
        id="source"
        type="text"
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </div>
  );
};

export default ApiSourceInput;
