import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { logInWithEmailAndPassword } from 'firebaseClient/firebaseClient';
import { useAppDispatch, useAppSelector } from 'hook/useRedux';
import useRegion from 'hook/useRegion';
import { setError } from 'store/slices/GraphQLSlice';

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});

const useSignInForm = () => {
  const { errors: storeErrors } = useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const region = useRegion();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    mode: 'onChange',
  });

  const formRegister = {
    email: register('email'),
    password: register('password'),
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await logInWithEmailAndPassword(data.email, data.password);
      navigate('/main');
    } catch (error) {
      if (error instanceof Error) {
        const err = { id: Date.now(), message: error.message };
        dispatch(setError([...storeErrors, err]));
      } else {
        const err = { id: Date.now(), message: 'Auth: something went wrong' };
        dispatch(setError([...storeErrors, err]));
      }
    }
    reset();
  });

  return {
    storeErrors,
    region,
    onSubmit,
    handleSubmit,
    isValid,
    errors,
    formRegister,
  };
};

export default useSignInForm;
