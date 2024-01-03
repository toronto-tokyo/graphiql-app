import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';
import { setDocumentation } from '../../redux/slices/GraphQLSlice';

const useDocumentation = () => {
  const { documentation, apiLink } = useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();
  const region = useRegion();

  const handleDocsBtnClick = () => {
    dispatch(setDocumentation(apiLink));
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
