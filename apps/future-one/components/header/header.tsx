import { Button } from '@future-one/ui';

import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <header className={styles['container']}>
      <h1>Welcome to Header!</h1>
      <Button />
    </header>
  );
};
