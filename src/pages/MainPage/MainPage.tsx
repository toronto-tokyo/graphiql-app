import classes from './MainPage.module.css';
import ApiLinkForm from '../../components/UI/ApiLinkForm/ApiLinkForm';
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import {
  fetchJSON,
  fetchSchema,
  setApiLink,
  setError,
  setIsDocsLoaded,
  setQuery,
} from '../../redux/slices/GraphQLSlice';
import Toast from '../../components/Toast/Toast';
import errorIcon from '../../assets/error-icon.svg';
import EditorViewerSwitch from '../../components/EditorViewerSwitch/EditorViewerSwitch';
import EditorTools from '../../components/EditorTools/EditorTools';
import { Suspense, lazy, useEffect } from 'react';

const Documentation = lazy(
  () => import('../../components/Documentation/Documentation')
);

function MainPage() {
  const {
    apiLink,
    query,
    jsonViewer,
    error,
    variables,
    headers,
    isDocsLoaded,
    documentation,
  } = useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setIsDocsLoaded(false));
      const asyncThunkRequest = await dispatch(fetchSchema({ url: apiLink }));
      if (asyncThunkRequest.meta.requestStatus === 'fulfilled') {
        dispatch(setIsDocsLoaded(true));
      }
    })();
  }, [apiLink, dispatch, documentation]);

  const handleErrToastClose = () => {
    dispatch(setError(null));
  };

  const handleQueryEditorChange = (value: string) => {
    dispatch(setQuery(value));
  };

  const clickSendButtonHandle = () => {
    dispatch(fetchJSON({ url: apiLink, query, variables, headers }));
  };

  const handleChangeURLBtnClick = (value: string) => {
    dispatch(setApiLink(value));
  };

  return (
    <div className={classes.wrapper}>
      {error && (
        <Toast imgPath={errorIcon} onClose={handleErrToastClose}>
          {error}
        </Toast>
      )}
      <div className={classes.row}>
        <Suspense>{isDocsLoaded && <Documentation />}</Suspense>
        <section className={classes.content}>
          <ApiLinkForm
            value={apiLink}
            submitHandler={handleChangeURLBtnClick}
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
        </section>
      </div>
    </div>
  );
}

export default MainPage;
