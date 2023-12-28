import classes from './MainPage.module.css';
import ApiLinkInput from '../../components/UI/ApiLinkInput/ApiLinkInput';
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import {
  fetchJSON,
  setApiLink,
  setError,
  setQuery,
} from '../../redux/slices/GraphQLSlice';
import Toast from '../../components/Toast/Toast';
import errorIcon from '../../assets/error-icon.svg';
import EditorViewerSwitch from '../../components/EditorViewerSwitch/EditorViewerSwitch';
import EditorTools from '../../components/EditorTools/EditorTools';

function MainPage() {
  const { apiLink, query, jsonViewer, error, variables } = useAppSelector(
    (store) => store.graphQL
  );
  const dispatch = useAppDispatch();

  const handleErrToastClose = () => {
    dispatch(setError(null));
  };

  const handleApiLinkChange = (value: string) => {
    dispatch(setApiLink(value));
  };

  const handleQueryEditorChange = (value: string) => {
    dispatch(setQuery(value));
  };

  const clickSendButtonHandle = () => {
    dispatch(fetchJSON({ url: apiLink, query, variables }));
  };

  return (
    <div className={classes.wrapper}>
      {error && (
        <Toast imgPath={errorIcon} onClose={handleErrToastClose}>
          {error}
        </Toast>
      )}
      <ApiLinkInput
        label="API Link"
        value={apiLink}
        changeHandler={handleApiLinkChange}
      />
      <div className={classes.row}>
        <section
          className={`${classes.queryResponseSection} ${classes.queryEditor}`}
        >
          <EditorViewerSwitch
            value={query}
            onChange={handleQueryEditorChange}
          />
          <EditorTools />
        </section>
        <section className={classes.controlPanel}>
          <button onClick={clickSendButtonHandle} disabled={!apiLink}>
            Send
          </button>
        </section>
        <section
          className={`${classes.queryResponseSection} ${classes.jsonViewer}`}
        >
          <EditorViewerSwitch value={jsonViewer} readOnly={true} />
        </section>
      </div>
    </div>
  );
}

export default MainPage;
