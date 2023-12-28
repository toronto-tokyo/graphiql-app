import Tabs from '../UI/Tabs/Tabs';
import classes from './EditorTools.module.css';
import useEditorTools from './useEditorTools';

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
        <textarea
          className={classes.toolField}
          value={variables}
          onChange={(e) => handleVariablesChange(e.target.value)}
        />
      )}
      {selectedTabId === 2 && (
        <textarea
          className={classes.toolField}
          value={headers}
          onChange={(e) => handleHeadersChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default EditorTools;
