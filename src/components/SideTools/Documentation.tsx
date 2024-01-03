import classes from './Documentation.module.css';
import useDocumentation from './useDocumentation';

const Documentation = () => {
  const { documentation, handleDocsBtnClick, docsBtnText, isFetching } =
    useDocumentation();

  const renderContent = () => {
    return isFetching ? (
      <section className={classes.wrapper}>
        <div className={classes.documentationTools}>
          <button onClick={handleDocsBtnClick} disabled>
            {docsBtnText}
          </button>
        </div>
      </section>
    ) : (
      <section className={classes.wrapper}>
        <div className={classes.documentationTools}>
          <button onClick={handleDocsBtnClick}>{docsBtnText}</button>
        </div>
        <div className={classes.documentationContentWrap}>
          <textarea
            value={documentation}
            className={classes.documentationContent}
            readOnly
          />
        </div>
      </section>
    );
  };
  return renderContent();
};

export default Documentation;
