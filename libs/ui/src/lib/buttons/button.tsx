import React from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

type ButtonProps = {
  variant?: 'contained' | 'outline';
} & React.ComponentPropsWithRef<'button'>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'contained', ...delegated }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(styles['wrapper'], className)}
        data-variant={variant}
        {...delegated}
      >
        {children}
      </button>
    );
  }
);
