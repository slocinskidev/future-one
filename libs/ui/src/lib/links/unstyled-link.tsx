import Link, { LinkProps } from 'next/link';
import React from 'react';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

export const UnstyledLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps
>(({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <Link {...{ ref, className, href }} {...rest} {...nextLinkProps}>
        {children}
      </Link>
    );
  }

  return (
    <a
      {...{ ref, className, href }}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
});
