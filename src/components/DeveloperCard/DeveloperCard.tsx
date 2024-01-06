import React from 'react';
import classes from './DeveloperCard.module.css';
import { DeveloperData } from '../../shared/developers-data';
interface DeveloperCardProps {
  data: DeveloperData;
}

export function DeveloperCard({ data }: DeveloperCardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.photo}>
        <img
          className={classes.image}
          src={data.imgLink}
          alt={data.firstName}
        />
      </div>
      <div className={classes.info}>
        <h2 className={classes.title}>{data.firstName}</h2>
        <h3 className={classes.position}>{data.position}</h3>
        <p className={classes.biography}>{data.biography}</p>
        <a
          className={classes.link}
          target="_blank"
          href={data.gitHubLink}
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
