import { NavLink, Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { logout } from '../firebase';

function RootLayout() {
  return (
    <div className={classes.wrapper}>
      <Header>
        <NavLink to="/" className={classes.link}>
          Welcome
        </NavLink>
        <div onClick={logout}>Logout</div>
      </Header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer>footer</Footer>
    </div>
  );
}

export default RootLayout;
