import classes from './Textarea.module.css';

interface ITextareaProps {
  value?: string;
  onChange?: (value: string) => void;
  textareaClassName?: string;
  readOnly?: boolean;
}

function Textarea({
  value,
  onChange,
  textareaClassName,
  readOnly,
}: ITextareaProps) {
  return (
    <textarea
      className={`${classes.textarea} ${
        textareaClassName ? textareaClassName : ''
      }`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      readOnly={readOnly}
    />
  );
}

export default Textarea;
