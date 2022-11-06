import { ButtonLink, ButtonLinkType } from '@future-one/ui';
import { useEffect } from 'react';

import { useToggle } from '../../hooks';

import {
  Hamburger,
  NavigationItemType,
  NavigationMobile,
  NavigationDesktop,
} from '../index';

import styles from './header.module.scss';

export interface HeaderProps {
  navigation: NavigationItemType[];
  contactButton: ButtonLinkType;
}

export const Header = ({ navigation, contactButton }: HeaderProps) => {
  const [isOpen, toggleIsOpen] = useToggle();

  useEffect(() => {
    document.body.style.overflowY =
      document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
  }, [isOpen]);

  return (
    <header className={styles['container']}>
      <NavigationDesktop
        {...{ navigation, className: styles['nav-desktop'] }}
      />
      <NavigationMobile
        {...{
          navigation,
          isOpen,
          toggleIsOpen,
          className: styles['nav-mobile'],
        }}
      />
      <Hamburger
        {...{ isOpen, toggleIsOpen, className: styles['hamburger'] }}
      />
      <ButtonLink
        {...{ href: contactButton.href, className: styles['contact-btn'] }}
      >
        {contactButton.label}
      </ButtonLink>
    </header>
  );
};
