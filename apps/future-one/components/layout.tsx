import React from 'react';

import { Header } from './header';

const header = {
  navigation: [
    { label: 'Overview', href: '/' },
    { label: 'About', href: '/' },
    { label: 'Resources', href: '/' },
    { label: 'Network', href: '/' },
    { label: 'Cloud', href: '/' },
    { label: 'Download', href: '/' },
    { label: 'Contact', href: '/' },
  ],
  contactButton: {
    label: 'Contact Us',
    href: '/',
  },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header {...header} />
      <main>{children}</main>
    </>
  );
};
