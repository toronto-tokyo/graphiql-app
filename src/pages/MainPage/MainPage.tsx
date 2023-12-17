import { useState } from 'react';
import classes from './MainPage.module.css';
import ApiLinkInput from '../../components/UI/ApiLinkInput/ApiLinkInput';
import { QUERY_TEMPLATE, BASE_API_LINK } from '../../shared/constants';

function MainPage() {
  const [apiLink, setApiLink] = useState(BASE_API_LINK);
  const [query, setQuery] = useState(QUERY_TEMPLATE);
  const [jsonViewerData, setJsonViewerData] = useState('');

  const searchHandle = async () => {
    try {
      const response = await fetch(apiLink, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setJsonViewerData(JSON.stringify(data, null, 4));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <ApiLinkInput label="API Link" value={apiLink} changeValue={setApiLink} />
      <div className={classes.row}>
        <section className={classes.editorWrapper}>
          <textarea
            className={classes.editor}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </section>
        <section className={classes.controlPanel}>
          <button onClick={searchHandle} disabled={!apiLink}>
            Send
          </button>
        </section>
        <section className={classes.jsonViewerWrapper}>
          <textarea
            className={classes.jsonViewer}
            value={jsonViewerData}
            readOnly
          />
        </section>
      </div>
    </div>
  );
}

export default MainPage;
