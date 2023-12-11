import { useContext, useEffect } from 'react';
import SignInForm from '../components/SignInForm/SignInForm';
import AuthContext from '../hoc/context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from '../shared/types';

function SignInPage() {
  const authContext = useContext<IAuthContext | null>(AuthContext);
  const { user, loading } = authContext as IAuthContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/main');
    }
  }, [user, navigate]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Sign In</h1>
      <SignInForm />
    </>
  );
}

export default SignInPage;
