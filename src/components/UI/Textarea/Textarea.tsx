import classes from './Textarea.module.css';

interface ITextareaProps {
  value?: string;
  onChange?: (value: string) => void;
  textareaClassName?: string;
  readonly?: boolean;
}

function Textarea({
  value,
  onChange,
  textareaClassName,
  readonly,
}: ITextareaProps) {
  return (
    <textarea
      className={`${classes.textarea} ${
        textareaClassName ? textareaClassName : ''
      }`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      readOnly={readonly}
    />
  );
}

export default Textarea;
