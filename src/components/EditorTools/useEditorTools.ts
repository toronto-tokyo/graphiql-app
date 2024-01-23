import { useEffect, useState } from 'react';
import useRegion from 'hook/useRegion';
import { LOCALE_DATA } from 'locales/constants';
import { ITab } from 'shared/types';
import { useAppDispatch, useAppSelector } from 'hook/useRedux';
import { setHeaders, setVariables } from 'store/slices/GraphQLSlice';

const useEditorTools = () => {
  const region = useRegion();
  const tabs: ITab[] = [
    {
      label:
        (region && LOCALE_DATA[region.region].mainPage.editorTabs.variables) ||
        '',
      id: 1,
    },
    {
      label:
        (region && LOCALE_DATA[region.region].mainPage.editorTabs.headers) ||
        '',
      id: 2,
    },
  ];
  const [selectedTabId, setSelectedTabId] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { variables, headers } = useAppSelector((store) => store.graphQL);

  useEffect(() => {
    if (!open) {
      setSelectedTabId(0);
    }
  }, [open]);

  const handleTabClick = (value: number) => {
    setSelectedTabId(value);
    setOpen(true);
  };

  const handleVariablesChange = (value: string) => {
    dispatch(setVariables(value));
  };

  const handleHeadersChange = (value: string) => {
    dispatch(setHeaders(value));
  };

  const handleToggleBtnClick = () => {
    setOpen((prev) => !prev);
    setSelectedTabId(tabs[0].id);
  };

  return {
    tabs,
    selectedTabId,
    variables,
    headers,
    open,
    handleTabClick,
    handleVariablesChange,
    handleHeadersChange,
    handleToggleBtnClick,
  };
};

export default useEditorTools;
