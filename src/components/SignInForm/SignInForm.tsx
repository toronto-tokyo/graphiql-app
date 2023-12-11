import { useNavigate } from 'react-router-dom';
import InputEmail from '../UI/InputEmail/InputEmail';
import InputPassword from '../UI/InputPassword/InputPassword';
import styles from './SignInForm.module.css';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import { useState } from 'react';
import { logInWithEmailAndPassword } from '../../firebase';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await logInWithEmailAndPassword(email, password);
      navigate('/main');
      console.log('Logged in successfully');
    } catch (error) {
      console.error(error);
    }
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
