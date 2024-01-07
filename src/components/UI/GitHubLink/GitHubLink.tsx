import classes from './GitHubLink.module.css';

interface GitHubLinkProps {
  href: string | undefined;
  text: string;
}

export function GitHubLink({ href, text }: GitHubLinkProps) {
  if (!href) return;
  return (
    <a className={classes.link} target="_blank" href={href} rel="noreferrer">
      <img
        className={classes.logo}
        src="/src/assets/github-logo.png"
        alt="gitghub-logo"
      />
      {text}
    </a>
  );
}
