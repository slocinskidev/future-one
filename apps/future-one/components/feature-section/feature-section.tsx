import { RichText, FeatureCard, CardIconType } from '../index';

import styles from './feature-section.module.scss';

const future = {
  heading: 'Massa tempor nec feugiat nisl pretium fusce',
  text: `<p>Pellentesque <strong>habitant</strong> morbi tristique senectus et netus et malesuada. <strong>Ipsum faucibus vitae</strong> aliquet nec ullamcorper sit amet risus nullam. Dictum varius duis at consectetur <strong>lorem donec</strong> massa sapien. Massa tempor nec feugiat nisl pretium fusce. </br></br> Elit scelerisque mauris pellentesque?</p>`,
  cards: [
    {
      icon: 'guard',
      label: 'View details',
    },
    {
      icon: 'scissors',
      label: 'View details',
    },
    {
      icon: 'android',
      label: 'View details',
    },
    {
      icon: 'circle-x-v',
      label: 'View details',
    },
  ],
} as {
  heading: string;
  text: string;
  cards: {
    icon: CardIconType;
    label: string;
  }[];
};

export const FeatureSection = () => {
  const { heading, text, cards } = future;

  return (
    <div className={styles['container']}>
      <h2 className={styles['heading']}>{heading}</h2>
      <RichText html={text} />
      <ul className={styles['card-list']}>
        {cards.map((card) => (
          <li key={card.icon}>
            <FeatureCard {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
};
