import { Accordion } from '../index';

import styles from './accordion-list.module.scss';

const accordionList = {
  heading: 'Lacinia quis vel eros tempor orci.',
  list: [
    {
      header: 'Arcu non odio',
      body: 'Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.',
    },
    {
      header: 'Eget gravida cum sociis',
      body: 'Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.',
    },
    {
      header: 'Massa massa ultricies',
      body: 'Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.',
    },
  ],
};

export const AccordionList = () => {
  const { heading, list } = accordionList;

  return (
    <div className={styles['container']}>
      <h2 className={styles['heading']}>{heading}</h2>
      <ul className={styles['list']}>
        {list.map(({ header, body }, index) => (
          <li key={header}>
            <Accordion {...{ header, body, index }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
