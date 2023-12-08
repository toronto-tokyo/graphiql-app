import { ReactNode, useState } from 'react';
import AuthContext from './AuthContext';

interface IProps {
  children: ReactNode;
}

function AuthProvider({ children }: IProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
