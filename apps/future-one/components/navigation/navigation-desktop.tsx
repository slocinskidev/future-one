import { PrimaryLink } from '@future-one/ui';

import { NavigationItemType } from './navigation.types';

import styles from './navigation-desktop.module.scss';
import clsx from 'clsx';

type NavigationProps = {
  navigation: NavigationItemType[];
  className?: string;
};

export const NavigationDesktop = ({
  navigation = [],
  className,
}: NavigationProps) => {
  return (
    <nav {...{ className: clsx(styles['container'], className) }}>
      <ul className={styles['navigation-list']} role="list">
        {navigation.map(({ label, href }) => (
          <li key={label}>
            <PrimaryLink {...{ href, className: styles['navigation-item'] }}>
              {label}
            </PrimaryLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
