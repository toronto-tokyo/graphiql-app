import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { setQuery } from '../../store/slices/GraphQLSlice';

const useEditorViewerSwitch = () => {
  const { query, jsonViewer, isGraphQLDataLoading } = useAppSelector(
    (store) => store.graphQL
  );
  const dispatch = useAppDispatch();

  const handleQueryEditorChange = (value: string) => {
    dispatch(setQuery(value));
  };

  return {
    query,
    jsonViewer,
    isGraphQLDataLoading,
    handleQueryEditorChange,
  };
};

export default useEditorViewerSwitch;
