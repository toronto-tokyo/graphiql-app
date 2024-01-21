import Tabs from 'components/UI/Tabs';
import classes from './EditorTools.module.css';
import useEditorTools from './useEditorTools';
import Textarea from 'components/UI/Textarea';

const EditorTools = () => {
  const {
    tabs,
    handleTabClick,
    handleVariablesChange,
    selectedTabId,
    variables,
    headers,
    handleHeadersChange,
  } = useEditorTools();

  return (
    <div className={classes.wrapper}>
      <Tabs
        onClick={handleTabClick}
        tabs={tabs}
        selectedId={selectedTabId}
        className={classes.toolBar}
      />
      {selectedTabId === 1 && (
        <Textarea
          className={classes.toolField}
          value={variables}
          onChange={handleVariablesChange}
        />
      )}
      {selectedTabId === 2 && (
        <Textarea
          className={classes.toolField}
          value={headers}
          onChange={handleHeadersChange}
        />
      )}
    </div>
  );
};

export default EditorTools;
