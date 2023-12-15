import enLocale from '../data/en.json';
import deLocale from '../data/de.json';

type Regions = {
  [key: string]: string;
};

export const REGIONS: Regions = {
  EN: 'EN',
  DE: 'DE',
};

export const LOCALE_DATA = {
  [REGIONS.EN]: enLocale,
  [REGIONS.DE]: deLocale,
};
