import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { setQuery } from '../../redux/slices/GraphQLSlice';

const useEditorViewerSwitch = () => {
  const { query, jsonViewer } = useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();

  const handleQueryEditorChange = (value: string) => {
    dispatch(setQuery(value));
  };

  return {
    query,
    jsonViewer,
    handleQueryEditorChange,
  };
};

export default useEditorViewerSwitch;
