import InputPassword from '../UI/InputPassword/InputPassword';
import styles from './SignUpForm.module.css';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import InputName from '../UI/InputName/InputName';
import { useState } from 'react';
import { registerWithEmailAndPassword } from '../../firebase';
import InputEmail from '../UI/InputEmail/InputEmail';
import * as yup from 'yup';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';

const signUpFormSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[A-ZА-ЯЁ][a-zа-яё]*$/),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/),
});

function SignUpForm() {
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
      await registerWithEmailAndPassword(
        formData.name,
        formData.email,
        formData.password
      );
      console.log('Registered successfully');
    } catch (error) {
      console.error(error);
    }
  };
  const isValid = signUpFormSchema.isValidSync(formData);

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputName
        value={formData.name}
        onChange={(value: string) => handleChange('name', value)}
      />
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
        text={(region && LOCALE_DATA[region.region].form.button.signUp) ?? ''}
      />
    </form>
  );
}

export default SignUpForm;
