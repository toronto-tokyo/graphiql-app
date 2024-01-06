import React from 'react';
import classes from './Developers.module.css';
import { DEVELOPERS_DATA, DeveloperData } from '../../shared/developers-data';
import { DeveloperCard } from '../DeveloperCard/DeveloperCard';

export function Developers() {
  const data = DEVELOPERS_DATA as DeveloperData[];
  return (
    <div className={classes.developers}>
      {data.map((elem, index) => (
        <DeveloperCard data={elem} key={index} />
      ))}
    </div>
  );
}
