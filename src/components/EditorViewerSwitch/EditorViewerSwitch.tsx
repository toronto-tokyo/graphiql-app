import classes from './EditorViewerSwitch.module.css';

interface IProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const EditorViewerSwitch = ({ value, onChange, readOnly }: IProps) => {
  return (
    <textarea
      className={classes.editorViewer}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      readOnly={readOnly}
    />
  );
};

export default EditorViewerSwitch;
