import { ReactNode, useEffect, useState } from 'react';
import classes from './Header.module.css';

interface IProps {
  children: ReactNode;
}

function Header({ children }: IProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${classes.header} ${isScrolled ? classes.scroll : ''}`}>
      {children}
    </header>
  );
}

export default Header;
