import EditorTools from '../EditorTools/EditorTools';
import Textarea from '../UI/Textarea/Textarea';
import classes from './EditorViewerSwitch.module.css';
import useEditorViewerSwitch from './useEditorViewer';

interface IProps {
  onChange?: (value: string) => void;
  readOnly?: boolean;
  className?: string;
}

const EditorViewerSwitch = ({ readOnly, className }: IProps) => {
  const { query, jsonViewer, handleQueryEditorChange } =
    useEditorViewerSwitch();

  return readOnly ? (
    <div
      className={`${classes.jsonViewer} ${className ? className : className}`}
    >
      <Textarea
        className={classes.textarea}
        readOnly={readOnly}
        value={jsonViewer}
      />
    </div>
  ) : (
    <section
      className={`${classes.queryEditor} ${className ? className : className}`}
    >
      <Textarea
        className={classes.textarea}
        onChange={handleQueryEditorChange}
        readOnly={readOnly}
        value={query}
      />
      <EditorTools />
    </section>
  );
};

export default EditorViewerSwitch;
