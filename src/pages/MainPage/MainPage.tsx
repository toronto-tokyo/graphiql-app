import classes from './MainPage.module.css';
import ApiLinkInput from '../../components/UI/ApiLinkInput/ApiLinkInput';
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { fetchJSON, setQuery } from '../../redux/slices/GraphQLSlice';

function MainPage() {
  const { apiLink, query, jsonViewer } = useAppSelector(
    (store) => store.graphQL
  );
  const dispatch = useAppDispatch();

  return (
    <div className={classes.wrapper}>
      <ApiLinkInput label="API Link" />
      <div className={classes.row}>
        <section className={classes.editorWrapper}>
          <textarea
            className={classes.editor}
            value={query}
            onChange={(e) => {
              dispatch(setQuery(e.target.value));
            }}
          />
        </section>
        <section className={classes.controlPanel}>
          <button
            onClick={() => dispatch(fetchJSON({ url: apiLink, query }))}
            disabled={!apiLink}
          >
            Send
          </button>
        </section>
        <section className={classes.jsonViewerWrapper}>
          <textarea
            className={classes.jsonViewer}
            value={jsonViewer}
            readOnly
          />
        </section>
      </div>
    </div>
  );
}

export default MainPage;
