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
    <section
      className={`${classes.jsonViewer} ${className ? className : className}`}
    >
      <Textarea
        textareaClassName={classes.textarea}
        readOnly={readOnly}
        value={jsonViewer}
      />
    </section>
  ) : (
    <section
      className={`${classes.queryEditor} ${className ? className : className}`}
    >
      <Textarea
        textareaClassName={classes.textarea}
        onChange={handleQueryEditorChange}
        readOnly={readOnly}
        value={query}
      />
      <EditorTools />
    </section>
  );
};

export default EditorViewerSwitch;
