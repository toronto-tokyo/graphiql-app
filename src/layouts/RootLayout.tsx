import { NavLink, Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { logout } from '../firebase';
import useRegion from '../hook/useRegion';
import { LOCALE_DATA, REGIONS } from '../locales/constants/constants';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorFallback/ErrorFallback';

function RootLayout() {
  const region = useRegion();

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (Object.keys(REGIONS).includes(value)) {
      region?.setRegion(value);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Header>
        <NavLink to="/" className={classes.link}>
          {region && LOCALE_DATA[region.region].header.link.welcome}
        </NavLink>
        <div onClick={logout}>Logout</div>
        <select onChange={onSelectChange}>
          {Object.keys(REGIONS).map((key) => {
            return (
              <option key={key} value={key}>
                {REGIONS[key]}
              </option>
            );
          })}
        </select>
      </Header>
      <main className={classes.main}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer>footer</Footer>
    </div>
  );
}

export default RootLayout;
