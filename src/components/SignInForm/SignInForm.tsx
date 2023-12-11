import { useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import InputLogin from '../UI/InputLogin/InputLogin';
import InputPassword from '../UI/InputPassword/InputPassword';
import styles from './SignInForm.module.css';
import SubmitButton from '../UI/SubmitButton/SubmitButton';

function SignInForm() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth?.setIsAuth(true);
    navigate('/main');
  };
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputLogin />
      <InputPassword />
      <SubmitButton />
    </form>
  );
}

export default SignInForm;
