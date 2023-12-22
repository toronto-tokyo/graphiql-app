import classes from './EditorViewerSwitch.module.css';

interface IProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const EditorViewerSwitch = ({ value, onChange, readOnly }: IProps) => {
  return (
    <section className={classes.wrapper}>
      <textarea
        className={`${classes.editorViewer} ${
          readOnly ? classes.jsonViewer : classes.queryEditor
        }`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
      />
    </section>
  );
};

export default EditorViewerSwitch;
