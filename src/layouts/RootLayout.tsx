import { Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import Header from '../components/Header/Header';

function RootLayout() {
  return (
    <div className={classes.wrapper}>
      <Header>header</Header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default RootLayout;
