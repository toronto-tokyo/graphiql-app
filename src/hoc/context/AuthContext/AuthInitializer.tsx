import { useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';
import app from '../../../firebase';
import { IProps } from '../../../shared/types';

const AuthInitializer = ({ children }: IProps) => {
  const auth = getAuth(app);
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log('User is logged in:', user);
          } else {
            console.log('User is not logged in');
          }
        });
      } catch (error) {
        console.error('Error initializing authentication:', error);
      }
    };
    initializeAuth();
  }, [auth]);
  return children;
};

export default AuthInitializer;
