import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function AuthPrivateRoute({ children }: IProps) {
  const auth = useAuth();

  if (!auth?.isAuth) {
    return <Navigate to="/sign-in" />;
  }
  return children;
}

export default AuthPrivateRoute;
