import { useNavigate } from 'react-router-dom';
import InputEmail from '../UI/InputEmail/InputEmail';
import InputPassword from '../UI/InputPassword/InputPassword';
import styles from './SignInForm.module.css';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import { useState } from 'react';
import { logInWithEmailAndPassword } from '../../firebase';
import * as yup from 'yup';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';

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

function SignInForm() {
  const navigate = useNavigate();
  const region = useRegion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await logInWithEmailAndPassword(formData.email, formData.password);
      navigate('/main');
      console.log('Logged in successfully');
    } catch (error) {
      console.error(error);
    }
  };
  const isValid = signInFormSchema.isValidSync(formData);

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputEmail
        value={formData.email}
        onChange={(value: string) => handleChange('email', value)}
      />
      <InputPassword
        value={formData.password}
        onChange={(value: string) => handleChange('password', value)}
      />
      <SubmitButton
        disabled={!isValid}
        text={(region && LOCALE_DATA[region.region].form.button.signIn) ?? ''}
      />
    </form>
  );
}

export default SignInForm;
