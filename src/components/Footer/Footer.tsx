import { ReactNode } from 'react';
import classes from './Footer.module.css';
import ContentWrapper from 'components/ContentWrapper';
import GitHubLink from 'components/UI/GitHubLink';
import SchoolLink from 'components/UI/SchoolLink';

interface IProps {
  children?: ReactNode;
}

function Footer({ children }: IProps) {
  return (
    <footer className={classes.footer}>
      <ContentWrapper>
        <div className={classes.innerContent}>
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
        </div>
      </ContentWrapper>
    </footer>
  );
}

export default Footer;
