import Textarea from '../UI/Textarea/Textarea';
import classes from './Documentation.module.css';
import useDocumentation from './useDocumentation';

const Documentation = () => {
  const { documentation, handleDocsBtnClick, docsBtnText, showContent } =
    useDocumentation();

  return (
    <section
      className={`${classes.wrapper} ${showContent ? classes.active : ''}`}
    >
      <div className={classes.documentationTools}>
        <button onClick={handleDocsBtnClick}>{docsBtnText}</button>
      </div>
      <div
        className={`${classes.documentationContentWrap} ${
          showContent ? classes.active : ''
        }`}
      >
        <Textarea
          value={documentation}
          className={classes.documentationContent}
          readOnly
        />
      </div>
    </section>
  );
};

export default Documentation;
