import { FirebaseError, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5QAwbJYbNzA1aA_Hamahg9hUZ9plfGvY',
  authDomain: 'graphiql-bf6de.firebaseapp.com',
  projectId: 'graphiql-bf6de',
  storageBucket: 'graphiql-bf6de.appspot.com',
  messagingSenderId: '212188522180',
  appId: '1:212188522180:web:04ce868ee58cc95bfe8b91',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof FirebaseError) {
      throw err;
    } else {
      throw err;
    }
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if (err instanceof FirebaseError) {
      throw err;
    } else {
      throw err;
    }
  }
};

export const logout = () => {
  signOut(auth);
};

export default app;
