import { ReactNode } from 'react';
import classes from './Footer.module.css';
import { SchoolLink } from '../UI/SchoolLink/SchoolLink';
import { GitHubLink } from '../UI/GitHubLink/GitHubLink';

interface IProps {
  children?: ReactNode;
}

function Footer({ children }: IProps) {
  return (
    <footer className={classes.footer}>
      {children}
      <div className="developers">
        <GitHubLink text="Ilya" href="https://github.com/toronto-tokyo" />
        <GitHubLink text="Vladislav" href="https://github.com/GinezisNWD" />
        <GitHubLink
          text="Miroslav"
          href="https://github.com/miroslav-zarenkov"
        />
      </div>

      <div>2024</div>

      <SchoolLink></SchoolLink>
    </footer>
  );
}

export default Footer;
