import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';
import { setDocumentation } from '../../redux/slices/GraphQLSlice';
import { fetchSchema } from '../../utils/fetchSchema';

const useDocumentation = () => {
  const { documentation, apiLink } = useAppSelector((store) => store.graphQL);
  const [isFetching, setIsFetching] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const dispatch = useAppDispatch();
  const region = useRegion();

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      const data = await fetchSchema({ url: apiLink });
      const jsonData = JSON.stringify(data, null, 4);
      dispatch(setDocumentation(jsonData));
      setIsFetching(false);
    })();
  }, [apiLink, dispatch]);

  const handleDocsBtnClick = async () => {
    setIsContentVisible((prev) => !prev);
  };

  const docsBtnText =
    region && LOCALE_DATA[region.region].sideTools.docs.docsBtn;

  return {
    documentation,
    handleDocsBtnClick,
    docsBtnText,
    isFetching,
    isContentVisible,
  };
};

export default useDocumentation;
