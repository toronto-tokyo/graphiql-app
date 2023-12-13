import { NavLink, Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import useRegion from '../hook/useRegion';
import { LOCALE_DATA } from '../locales/constants/constants';

function RootLayout() {
  const region = useRegion();

  return (
    <div className={classes.wrapper}>
      <Header>
        <NavLink to="/" className={classes.link}>
          {region && LOCALE_DATA[region.region].header.link.welcome}
        </NavLink>
      </Header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer>footer</Footer>
    </div>
  );
}

export default RootLayout;
