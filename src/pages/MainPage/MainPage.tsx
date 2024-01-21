import classes from './MainPage.module.css';
import {
  fetchJSON,
  fetchSchema,
  setApiLink,
  setIsDocsLoaded,
  setIsGraphQLDataLoading,
  setQuery,
} from 'store/slices/GraphQLSlice';
import sendIcon from 'assets/sendIcon.png';
import prettyIcon from 'assets/prettyIcon.png';
import { Suspense, lazy, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hook/useRedux';
import pretty from 'utils/normalizeQuery';
import Toasts from 'components/Toasts';
import useErrorToastClose from 'hook/useErrorToastClose';
import ApiLinkForm from 'components/UI/ApiLinkForm';
import EditorViewerSwitch from 'components/EditorViewerSwitch';
import PrimaryButton from 'components/UI/PrimaryButton';

const Documentation = lazy(
  () => import('../../components/Documentation/Documentation')
);

function MainPage() {
  const { apiLink, query, errors, variables, headers, isDocsLoaded } =
    useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setIsDocsLoaded(false));
      const asyncThunkRequest = await dispatch(fetchSchema({ url: apiLink }));
      if (asyncThunkRequest.meta.requestStatus === 'fulfilled') {
        dispatch(setIsDocsLoaded(true));
      }
    })();
  }, [apiLink, dispatch]);

  const clickSendButtonHandle = async () => {
    dispatch(setIsGraphQLDataLoading(true));
    await dispatch(fetchJSON({ url: apiLink, query, variables, headers }));
    dispatch(setIsGraphQLDataLoading(false));
  };

  const handleChangeURLBtnClick = (value: string) => {
    dispatch(setApiLink(value));
  };

  const handlePrettify = () => {
    const prettifiedQuery = pretty(query);
    dispatch(setQuery(prettifiedQuery.trim()));
  };

  return (
    <div className={classes.wrapper}>
      {errors.length > 0 && (
        <Toasts toastsData={errors} handleErrToastClose={useErrorToastClose} />
      )}
      <div className={classes.row}>
        <Suspense>{isDocsLoaded && <Documentation />}</Suspense>
        <div className={classes.content}>
          <ApiLinkForm
            value={apiLink}
            submitHandler={handleChangeURLBtnClick}
          />
          <div className={classes.fields}>
            <EditorViewerSwitch className={classes.queryResponseSection} />
            <div className={classes.controlPanel}>
              <PrimaryButton
                onClick={clickSendButtonHandle}
                disabled={!apiLink}
              >
                <img className={classes.icon} src={sendIcon} alt="sendIcon" />
              </PrimaryButton>
              <PrimaryButton onClick={handlePrettify} disabled={!apiLink}>
                <img
                  className={classes.icon}
                  src={prettyIcon}
                  alt="prettyIcon"
                />
              </PrimaryButton>
            </div>
            <EditorViewerSwitch
              className={classes.queryResponseSection}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
