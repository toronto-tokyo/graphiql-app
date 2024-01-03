import classes from './Documentation.module.css';
import useDocumentation from './useDocumentation';

const Documentation = () => {
  const { documentation, handleDocsBtnClick, docsBtnText, isFetching } =
    useDocumentation();

  const renderContent = () => {
    return isFetching ? (
      <section className={classes.sideTools}>
        <button onClick={handleDocsBtnClick} disabled>
          {docsBtnText}
        </button>
      </section>
    ) : (
      <section className={classes.sideTools}>
        <button onClick={handleDocsBtnClick}>{docsBtnText}</button>
        <textarea
          value={documentation}
          className={classes.documentationContent}
          readOnly
        />
      </section>
    );
  };
  return renderContent();
};

export default Documentation;
