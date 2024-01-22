import styles from './SignInForm.module.css';
import useErrorToastClose from 'hook/useErrorToastClose';
import Toasts from 'components/Toasts';
import PrimaryButton from 'components/UI/PrimaryButton';
import { LOCALE_DATA } from 'locales/constants';
import useSignInForm from './useSignInForm';
import AuthInputBlock from 'components/AuthInputBlock';

function SignInForm() {
  const { errors, formRegister, isValid, onSubmit, region, storeErrors } =
    useSignInForm();

  return (
    <>
      {storeErrors.length > 0 && (
        <Toasts
          toastsData={storeErrors}
          handleErrToastClose={useErrorToastClose}
        />
      )}
      <form className={styles.form} onSubmit={onSubmit}>
        <AuthInputBlock
          label="email"
          type="email"
          id="email"
          register={formRegister.email}
          error={errors.email?.message}
        />
        <AuthInputBlock
          label="password"
          type="password"
          id="password"
          register={formRegister.password}
          error={errors.password?.message}
        />
        <PrimaryButton disabled={!isValid} type="submit">
          {(region && LOCALE_DATA[region.region].form.button.signIn) ?? ''}
        </PrimaryButton>
      </form>
    </>
  );
}

export default SignInForm;
