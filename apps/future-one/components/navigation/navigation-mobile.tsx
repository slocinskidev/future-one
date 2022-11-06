import { PrimaryLink } from '@future-one/ui';
import clsx from 'clsx';
import styles from './navigation-mobile.module.scss';
import { NavigationItemType } from './navigation.types';

export type NavigationMobileProps = {
  navigation: NavigationItemType[];
  isOpen: boolean;
  toggleIsOpen: () => void;
  className?: string;
};

export const NavigationMobile = ({
  navigation,
  className,
  isOpen,
  toggleIsOpen,
}: NavigationMobileProps) => {
  return (
    <div className={clsx(styles.container, className)} data-visible={isOpen}>
      <nav>
        <ul className={styles['navigation-list']} role="list">
          {navigation.map(({ label, href }) => (
            <li key={label}>
              <PrimaryLink
                {...{
                  href,
                  className: styles['navigation-item'],
                  onClick: toggleIsOpen,
                }}
              >
                {label}
              </PrimaryLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
