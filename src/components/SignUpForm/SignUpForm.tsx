import styles from './SignUpForm.module.css';
import useErrorToastClose from 'hook/useErrorToastClose';
import Toasts from 'components/Toasts';
import PrimaryButton from 'components/UI/PrimaryButton';
import { LOCALE_DATA } from 'locales/constants';
import useSignUpForm from './useSignUpForm';
import AuthInputBlock from 'components/AuthInputBlock';

function SignUpForm() {
  const { errors, formRegister, isValid, onSubmit, region, storeErrors } =
    useSignUpForm();

  return (
    <>
      {storeErrors.length > 0 && (
        <Toasts
          toastsData={storeErrors}
          handleErrToastClose={useErrorToastClose}
        />
      )}

      <form className={styles.form} action="" onSubmit={onSubmit}>
        <AuthInputBlock
          label="name"
          type="name"
          id="name"
          register={formRegister.name}
          error={errors.name?.message}
        />
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
        <AuthInputBlock
          label="confirmPassword"
          type="password"
          id="confirmPassword"
          register={formRegister.confirmPassword}
          error={errors.confirmPassword?.message}
        />
        <PrimaryButton disabled={!isValid} type="submit">
          {(region && LOCALE_DATA[region.region].form.button.signUp) ?? ''}
        </PrimaryButton>
      </form>
    </>
  );
}

export default SignUpForm;
