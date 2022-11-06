import { ReactNode } from 'react';

import { Footer } from './footer';
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

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header {...header} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
