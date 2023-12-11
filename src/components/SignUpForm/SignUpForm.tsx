import InputPassword from '../UI/InputPassword/InputPassword';
import styles from './SignUpForm.module.css';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import InputName from '../UI/InputName/InputName';
import { useState } from 'react';
import { registerWithEmailAndPassword } from '../../firebase';
import InputEmail from '../UI/InputEmail/InputEmail';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(name, email, password);
      await registerWithEmailAndPassword(name, email, password);
      console.log('Registered successfully');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputName
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
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

export default SignUpForm;
