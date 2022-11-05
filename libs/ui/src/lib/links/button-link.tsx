import React from 'react';
import clsx from 'clsx';

import { UnstyledLink, UnstyledLinkProps } from './index';

import styles from './button-link.module.scss';

type ButtonLinkProps = {
  variant?: 'contained' | 'outline';
};

export const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps & ButtonLinkProps
>(({ variant = 'contained', className, children, ...delegated }, ref) => {
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
