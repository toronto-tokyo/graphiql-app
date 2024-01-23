import { ReactNode, useState } from 'react';
import { INITIAL_REGION } from 'shared/constants';
import RegionContext from './RegionContext';

interface IProps {
  children: ReactNode;
}

const RegionProvider = ({ children }: IProps) => {
  const [region, setRegion] = useState(INITIAL_REGION);
  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export default RegionProvider;
