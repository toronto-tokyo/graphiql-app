import { useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import InputEmail from '../UI/InputEmail/InputEmail';
import InputPassword from '../UI/InputPassword/InputPassword';
import styles from './SignInForm.module.css';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import { useState } from 'react';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth?.setIsAuth(true);
    navigate('/main');
  };
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputEmail
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
      />
      <InputPassword
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <SubmitButton />
    </form>
  );
}

export default SignInForm;
