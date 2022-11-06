import React from 'react';
import clsx from 'clsx';

import { UnstyledLink, UnstyledLinkProps } from './index';

import styles from './primary-link.module.scss';

type PrimaryLinkProps = {
  variant?: 'light' | 'dark';
};

export const PrimaryLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps & PrimaryLinkProps
>(({ variant = 'dark', className, children, ...delegated }, ref) => {
  return (
    <UnstyledLink
      ref={ref}
      {...delegated}
      className={clsx(styles['wrapper'], className)}
      data-variant={variant}
    >
      {children}
    </UnstyledLink>
  );
});
