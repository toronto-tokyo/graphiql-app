import InputLogin from '../UI/InputLogin/InputLogin';
import InputPassword from '../UI/InputPassword/InputPassword';
import styles from './SignUpForm.module.css';
import SubmitButton from '../UI/SubmitButton/SubmitButton';

function SignUpForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Registered');
  };
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <InputLogin />
      <InputPassword />
      <SubmitButton />
    </form>
  );
}

export default SignUpForm;
