import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerWithEmailAndPassword } from 'firebaseClient/firebaseClient';
import { setError } from 'store/slices/GraphQLSlice';
import { useAppDispatch, useAppSelector } from 'hook/useRedux';
import useRegion from 'hook/useRegion';

const signUpFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('name is required')
    .matches(
      /^[A-ZА-ЯЁ][a-zа-яё]*$/,
      'the name should should start uppercase letter in the Latin or Cyrillic ans contain only letters'
    ),
  email: yup.string().required('email is required').email('Invalid email'),
  password: yup
    .string()
    .required('password is required')
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const useSignUpForm = () => {
  const { errors: storeErrors } = useAppSelector((store) => store.graphQL);
  const dispatch = useAppDispatch();
  const region = useRegion();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(signUpFormSchema),
    mode: 'onChange',
  });

  const formRegister = {
    name: register('name'),
    email: register('email'),
    password: register('password'),
    confirmPassword: register('confirmPassword'),
  };

  const onSubmit = handleSubmit(async (date) => {
    try {
      await registerWithEmailAndPassword(date.name, date.email, date.password);
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

  return { formRegister, errors, isValid, storeErrors, onSubmit, region };
};

export default useSignUpForm;
