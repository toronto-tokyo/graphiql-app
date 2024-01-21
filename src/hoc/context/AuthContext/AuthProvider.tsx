import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from 'firebaseClient/firebaseClient';
import { IProps } from 'shared/types';
import AuthContext from './AuthContext';

function AuthProvider({ children }: IProps) {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const normalizedUser = user ?? null;
  const normalizedLoading = loading ?? false;
  const normalizedError = error ?? null;
  return (
    <AuthContext.Provider
      value={{
        user: normalizedUser,
        loading: normalizedLoading,
        error: normalizedError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
