import { ReactNode, useState } from 'react';
import RegionContext from './RegionContext';
import { REGIONS } from '../../../locales/constants/constants';

interface IProps {
  children: ReactNode;
}

const initialState = {
  region: REGIONS.EN,
};

const RegionProvider = ({ children }: IProps) => {
  const [region, setRegion] = useState(initialState.region);
  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;
