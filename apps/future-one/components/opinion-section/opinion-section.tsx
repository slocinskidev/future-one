import { NextImage } from '../next-image';
import styles from './opinion-section.module.scss';

import { ReactComponent as QuoteIcon } from '../../public/icons/quote.svg';

export const OpinionSection = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['about']}>
        <h2 className={styles['heading']}>
          Bibendum at varius vel pharetra vel turpis nunc eget lorem.
        </h2>
      </div>
      <div className={styles['opinion']}>
        <blockquote className={styles['quote']}>
          <QuoteIcon className={styles['quote-icon-start']} />
          Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus
          in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus
          faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum
          faucibus. Tristique risus nec feugiat in fermentum. Elit duis
          tristique sollicitudin nibh sit amet commodo nulla.
          <QuoteIcon className={styles['quote-icon-end']} />
        </blockquote>
        <p className={styles['author']}>Faucibus Vitae, Office Assistant</p>
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
