import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';
import { setDocumentation } from '../../redux/slices/GraphQLSlice';
import { fetchSchema } from '../../utils/fetchSchema';

const useDocumentation = () => {
  const { documentation, apiLink } = useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();
  const region = useRegion();

  const handleDocsBtnClick = async () => {
    const data = await fetchSchema({ url: apiLink });
    const jsonData = JSON.stringify(data, null, 4);
    dispatch(setDocumentation(jsonData));
  };

  const docsBtnText =
    region && LOCALE_DATA[region.region].sideTools.docs.docsBtn;

  return {
    documentation,
    handleDocsBtnClick,
    docsBtnText,
  };
};

export default useDocumentation;
