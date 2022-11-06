import clsx from 'clsx';

import styles from './hamburger.module.scss';

type HamburgerProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
  className?: string;
};

export const Hamburger = ({
  isOpen,
  toggleIsOpen,
  className,
}: HamburgerProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.wrapper, className)}
      onClick={toggleIsOpen}
    >
      <span className={styles.box}>
        <span className={styles.inner} data-open={isOpen} />
      </span>
    </button>
  );
};
