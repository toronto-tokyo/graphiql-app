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

function MainPage() {
  const { apiLink, query, jsonViewer, error } = useAppSelector(
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
        <EditorViewerSwitch value={query} onChange={handleQueryEditorChange} />
        <section className={classes.controlPanel}>
          <button
            onClick={() => dispatch(fetchJSON({ url: apiLink, query }))}
            disabled={!apiLink}
          >
            Send
          </button>
        </section>
        <EditorViewerSwitch value={jsonViewer} readOnly={true} />
      </div>
    </div>
  );
}

export default MainPage;
