import { Link } from 'react-router-dom';
import classes from './WelcomePage.module.css';
import { useContext } from 'react';
import AuthContext from '../../hoc/context/AuthContext/AuthContext';
import { IAuthContext } from '../../shared/types';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';
import { Developers } from '../../components/Developers/Developers';

function WelcomePage() {
  const region = useRegion();
  const authContext = useContext<IAuthContext | null>(AuthContext);
  const { user, loading } = authContext as IAuthContext;
  if (loading) {
    return <div className={classes.loader}></div>;
  }
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {user ? (
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
      <Developers />
    </div>
  );
}

export default WelcomePage;
