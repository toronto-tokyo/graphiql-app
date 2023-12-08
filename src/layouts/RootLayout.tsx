import { NavLink, Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function RootLayout() {
  return (
    <div className={classes.wrapper}>
      <Header>
        <NavLink to="/" className={classes.link}>
          Welcome
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
