import { Link } from 'react-router-dom';
import classes from './WelcomePage.module.css';
import { useContext } from 'react';
import AuthContext from '../../hoc/context/AuthContext/AuthContext';
import { IAuthContext } from '../../shared/types';

function WelcomePage() {
  const authContext = useContext<IAuthContext | null>(AuthContext);
  const { user, loading } = authContext as IAuthContext;
  console.log(user);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {user ? (
          <li className={classes.listElement}>
            <Link to="/main" className={classes.link}>
              Main page
            </Link>
          </li>
        ) : (
          <>
            <li className={classes.listElement}>
              <Link to="/sign-in" className={classes.link}>
                Sign In
              </Link>
            </li>
            <li className={classes.listElement}>
              <Link to="/sign-up" className={classes.link}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default WelcomePage;
