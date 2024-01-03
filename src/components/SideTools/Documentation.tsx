import classes from './Documentation.module.css';
import useDocumentation from './useDocumentation';

const Documentation = () => {
  const { documentation, handleDocsBtnClick, docsBtnText } = useDocumentation();

  return (
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

export default Documentation;
