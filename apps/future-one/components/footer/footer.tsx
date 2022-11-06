import { PrimaryLink, UnstyledLink } from '@future-one/ui';

import { ReactComponent as FacebookIcon } from '../../public/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../public/icons/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../../public/icons/linkedin.svg';
import { ReactComponent as MediumIcon } from '../../public/icons/medium.svg';
import { ReactComponent as GithubIcon } from '../../public/icons/github.svg';

import styles from './footer.module.scss';

const footer = {
  navigation: [
    {
      section: 'Products',
      links: [
        { label: 'Tiramisu chocolate', href: '/' },
        { label: 'Pastry tart', href: '/' },
        { label: 'Pllipop brownie ', href: '/' },
      ],
    },
    {
      section: 'Collaboration',
      links: [
        { label: 'Tiramisu chocolate', href: '/' },
        { label: 'Pastry tart', href: '/' },
        { label: 'Pllipop brownie ', href: '/' },
      ],
    },
  ],
  socials: {
    facebook: '/',
    linkedin: '/',
    twitter: '/',
    medium: '/',
    github: '/',
  },
  legals: [
    { label: 'Legal', href: '/' },
    { label: 'Privacy policy', href: '/' },
    { label: 'Proud to be Open Source ', href: '/' },
  ],
  companyStartDate: '2003',
  copyright: 'Carrot cake sweet pie Sp. z o.o. All rights reserved.',
};

export const Footer = () => {
  const { navigation, socials, copyright, companyStartDate, legals } = footer;

  return (
    <footer className={styles['container']}>
      <div className={styles['wrapper']}>
        <div className={styles['top']}>
          <nav className={styles['navigation']}>
            <ul className={styles['navigation-sections']}>
              {navigation.map(({ section, links }) => (
                <li key={section}>
                  <p className={styles['section-title']}>{section}</p>
                  <ul className={styles['navigation-list']} role="list">
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <PrimaryLink
                          {...{
                            variant: 'light',
                            href,
                            className: styles['navigation-item'],
                          }}
                        >
                          {label}
                        </PrimaryLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles['icons']}>
            <UnstyledLink href={socials.facebook} className={styles.icon}>
              <FacebookIcon />
            </UnstyledLink>
            <UnstyledLink href={socials.twitter} className={styles.icon}>
              <TwitterIcon />
            </UnstyledLink>
            <UnstyledLink href={socials.linkedin} className={styles.icon}>
              <LinkedinIcon />
            </UnstyledLink>
            <UnstyledLink href={socials.medium} className={styles.icon}>
              <MediumIcon />
            </UnstyledLink>
            <UnstyledLink href={socials.github} className={styles.icon}>
              <GithubIcon />
            </UnstyledLink>
          </div>
        </div>
        <div className={styles['bottom']}>
          <ul className={styles['legals']} role="list">
            {legals.map(({ label, href }) => (
              <li key={label}>
                <PrimaryLink
                  {...{
                    variant: 'light',
                    href,
                    className: styles['legal-item'],
                  }}
                >
                  {label}
                </PrimaryLink>
              </li>
            ))}
          </ul>
          <p className={styles['copyright']}>
            &copy; {companyStartDate} - {new Date().getFullYear()} {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
