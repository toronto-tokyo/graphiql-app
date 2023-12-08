import { ReactNode } from 'react';
import classes from './Footer.module.css';

interface IProps {
  children: ReactNode;
}

function Footer({ children }: IProps) {
  return <footer className={classes.footer}>{children}</footer>;
}

export default Footer;
