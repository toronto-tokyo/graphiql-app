import { useContext, useEffect } from 'react';
import SignInForm from 'components/SignInForm';
import AuthContext from 'hoc/context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from 'shared/types';
import useRegion from 'hook/useRegion';
import { LOCALE_DATA } from 'locales/constants';
import classes from './SignInPage.module.css';

function SignInPage() {
  const region = useRegion();
  const authContext = useContext<IAuthContext | null>(AuthContext);
  const { user, loading } = authContext as IAuthContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/main');
    }
  }, [user, navigate]);
  if (loading) {
    return <div className={classes.loader}></div>;
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.header}>
          {region && LOCALE_DATA[region.region].signInPage.text.signIn}
        </h1>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPage;
