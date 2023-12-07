import { Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';

function RootLayout() {
  return (
    <div className={classes.wrapper}>
      <header>header</header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default RootLayout;
