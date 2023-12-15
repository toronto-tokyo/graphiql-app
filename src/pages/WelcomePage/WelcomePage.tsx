import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import classes from './WelcomePage.module.css';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';

function WelcomePage() {
  const auth = useAuth();
  const region = useRegion();
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {auth?.isAuth ? (
          <li className={classes.listElement}>
            <Link to="/main" className={classes.link}>
              {region && LOCALE_DATA[region.region].welcomePage.link.mainPage}
            </Link>
          </li>
        ) : (
          <>
            <li className={classes.listElement}>
              <Link to="/sign-in" className={classes.link}>
                {region && LOCALE_DATA[region.region].welcomePage.link.signIn}
              </Link>
            </li>
            <li className={classes.listElement}>
              <Link to="/sign-up" className={classes.link}>
                {region && LOCALE_DATA[region.region].welcomePage.link.signUp}
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default WelcomePage;
