import classes from './MainPage.module.css';
import ApiLinkInput from '../../components/UI/ApiLinkInput/ApiLinkInput';
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { fetchJSON, setError, setQuery } from '../../redux/slices/GraphQLSlice';
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

  return (
    <div className={classes.wrapper}>
      {error && (
        <Toast imgPath={errorIcon} onClose={handleErrToastClose}>
          {error}
        </Toast>
      )}
      <ApiLinkInput label="API Link" />
      <div className={classes.row}>
        <EditorViewerSwitch
          value={query}
          onChange={(value: string) => dispatch(setQuery(value))}
        />
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
