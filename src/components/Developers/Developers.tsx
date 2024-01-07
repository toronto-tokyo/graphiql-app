import classes from './Developers.module.css';
import { DeveloperCard } from '../DeveloperCard/DeveloperCard';
import useRegion from '../../hook/useRegion';
import { LOCALE_DATA } from '../../locales/constants/constants';

export function Developers() {
  const region = useRegion();
  const developersData =
    (region && LOCALE_DATA[region.region].developers) ?? [];
  const developersArray = Object.values(developersData);
  return (
    <div className={classes.developers}>
      {developersArray.map((elem, index) => (
        <DeveloperCard data={elem} key={index} />
      ))}
    </div>
  );
}
