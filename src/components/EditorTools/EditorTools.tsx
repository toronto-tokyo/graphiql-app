import Tabs from 'components/UI/Tabs';
import classes from './EditorTools.module.css';
import useEditorTools from './useEditorTools';
import Textarea from 'components/UI/Textarea';
import ToggleButton from 'components/UI/ToggleButton';

const EditorTools = () => {
  const {
    tabs,
    handleTabClick,
    handleVariablesChange,
    selectedTabId,
    variables,
    headers,
    handleHeadersChange,
    open,
    handleToggleBtnClick,
  } = useEditorTools();

  console.log(open);

  return (
    <div className={`${classes.wrapper} ${open ? classes.open : ''}`}>
      <div className={classes.toolBar}>
        <Tabs onClick={handleTabClick} tabs={tabs} selectedId={selectedTabId} />
        <ToggleButton open={open} onClick={handleToggleBtnClick} />
      </div>
      {open && (
        <>
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
        </>
      )}
    </div>
  );
};

export default EditorTools;
