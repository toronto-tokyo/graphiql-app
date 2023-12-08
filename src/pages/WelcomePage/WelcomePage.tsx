import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import classes from './WelcomePage.module.css';

function WelcomePage() {
  const auth = useAuth();
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {auth?.isAuth ? (
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
