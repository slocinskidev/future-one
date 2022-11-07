import { NextImage } from '../index';

import styles from './opinion-section.module.scss';

import { ReactComponent as QuoteIcon } from '../../public/icons/quote.svg';

const opinion = {
  heading: 'Bibendum at varius vel pharetra vel turpis nunc eget lorem.',
  quote: `Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus
  in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus
  faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum
  faucibus. Tristique risus nec feugiat in fermentum. Elit duis
  tristique sollicitudin nibh sit amet commodo nulla.`,
  author: 'Faucibus Vitae, Office Assistant',
};

export const OpinionSection = () => {
  const { heading, quote, author } = opinion;

  return (
    <div className={styles['container']}>
      <div className={styles['about']}>
        <h2 className={styles['heading']}>{heading}</h2>
      </div>
      <div className={styles['opinion']}>
        <blockquote className={styles['quote']}>
          <QuoteIcon className={styles['quote-icon-start']} />
          {quote}
          <QuoteIcon className={styles['quote-icon-end']} />
        </blockquote>
        <p className={styles['author']}>{author}</p>
        <NextImage
          src="/images/logo.png"
          height={29}
          width={86}
          alt="Invision logo"
        />
      </div>
    </div>
  );
};
