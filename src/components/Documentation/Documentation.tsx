import classes from './Documentation.module.css';
import useDocumentation from './useDocumentation';
import Textarea from 'components/UI/Textarea';
import PrimaryButton from 'components/UI/PrimaryButton';

const Documentation = () => {
  const { documentation, handleDocsBtnClick, docsBtnText, showContent } =
    useDocumentation();

  return (
    <div className={`${classes.wrapper} ${showContent ? classes.active : ''}`}>
      <div className={classes.documentationTools}>
        <PrimaryButton onClick={handleDocsBtnClick}>
          {docsBtnText}
        </PrimaryButton>
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
    </div>
  );
};

export default Documentation;
