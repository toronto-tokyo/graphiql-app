import { useContext, useEffect } from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import AuthContext from '../hoc/context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from '../shared/types';

function SignUpPage() {
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
      <h1>Sign Up</h1>
      <SignUpForm />
    </>
  );
}

export default SignUpPage;
