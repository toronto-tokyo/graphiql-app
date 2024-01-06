export const DEVELOPERS_DATA = [
  {
    imgLink:
      'https://github.com/mir-org/eCommerce-Application/blob/develop/src/assets/images/ilya-photo.jpg?raw=true',
    firstName: 'Ilya',
    position: 'Team lead',
    biography:
      "Worked in logistics for almost 2 years. Then I decided to change my life. That's how I came to RSSchool, and this is my second attempt to take this course.",
    gitHubLink: 'https://github.com/toronto-tokyo',
  },
  {
    imgLink:
      'https://github.com/mir-org/eCommerce-Application/blob/develop/src/assets/images/vlad-photo.jpg?raw=true',
    firstName: 'Vladislav',
    position: 'Frontend developer',
    biography:
      'After I finished my studies, I made a living by trading for several years, then for a couple of years I had my own small outsourcing company, but it just became boring and now I’m trying to find my place in development.',
    gitHubLink: 'https://github.com/GinezisNWD',
  },
  {
    imgLink:
      'https://github.com/mir-org/eCommerce-Application/blob/develop/src/assets/images/mira-photo.jpg?raw=true',
    firstName: 'Miroslav',
    position: 'Frontend developer',
    biography:
      "I have been working as an IT Support Technician for a few years. Right now I'm studying frontend development to challenge myself and potentially open a new career path.",
    gitHubLink: 'https://github.com/miroslav-zarenkov',
  },
];

export type DeveloperData = {
  imgLink?: string;
  firstName?: string;
  position?: string;
  biography?: string;
  gitHubLink?: string;
};
