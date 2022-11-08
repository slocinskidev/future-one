import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { useToggle } from '../../hooks';
import { getWindowWidth } from '../../utils';

import { ReactComponent as PlusIcon } from '../../public/icons/plus.svg';

import styles from './accordion.module.scss';

export type AccordionProps = {
  header: string;
  body: string;
  index?: number;
  className?: string;
};

export const Accordion = ({
  header,
  body,
  index,
  className,
}: AccordionProps) => {
  const [isExpanded, toggleIsExpanded] = useToggle();
  const [height, setHeight] = useState('');
  const width = getWindowWidth();
  const accordionBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (accordionBodyRef?.current) {
      const accordionBodyHeight = `${accordionBodyRef?.current?.scrollHeight}px`;

      setHeight(accordionBodyHeight);
    }
  }, [width]);

  return (
    <div className={clsx(styles['container'], className)}>
      <button
        {...{
          onClick: toggleIsExpanded,
          id: `accordion-header-${index}`,
          'aria-controls': `accordion-body-${index}`,
          'aria-label': `click to ${
            !isExpanded ? 'expand' : 'collapse'
          } content`,
          'aria-expanded': isExpanded,
          className: styles['header'],
        }}
      >
        <h2 className={styles['header-with-number']}>
          {index != null ? (
            <span className={styles['header-index']}>
              {index < 10 ? `0${index + 1}.` : `${index + 1}.`}
            </span>
          ) : null}
          {header}
        </h2>
        <PlusIcon />
      </button>
      <div
        {...{
          ref: accordionBodyRef,
          id: `accordion-body-${index}`,
          'aria-labelledby': `accordion-header-${index}`,
          role: 'region',
          className: styles['body'],
          'data-expanded': isExpanded,
          style: height
            ? ({
                '--accordion-body-height': height,
              } as React.CSSProperties)
            : undefined,
        }}
      >
        <div className={styles['body-wrapper']}>{body}</div>
      </div>
    </div>
  );
};
