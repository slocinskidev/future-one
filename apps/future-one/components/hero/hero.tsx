import { ButtonLink, UnstyledLink } from '@future-one/ui';
import { NextImage, RichText } from '../index';
import styles from './hero.module.scss';

const hero = {
  logo: {
    label: 'Future one',
    href: '/',
  },
  heading: '<h1><strong>Duis aute irure</strong> dolor in reprehenderit</h2>',
  text: '<p>Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis bibendum ut tristique et egestas.</p>',
  button: {
    label: 'Discover now',
    href: '/',
  },
};

export const Hero = () => {
  const { logo, heading, text, button } = hero;

  return (
    <div className={styles['container']}>
      <UnstyledLink className={styles['logo']} href={logo.href}>
        {logo.label}
      </UnstyledLink>
      <div className={styles['content']}>
        <RichText {...{ html: heading }} />
        <RichText {...{ html: text }} />
        <ButtonLink href={button.href}>{button.label}</ButtonLink>
      </div>
      <div className={styles['image']}>
        <NextImage
          alt="Girl with laptop, smilling to us"
          src="/images/hero.png"
          fill
        />
      </div>
    </div>
  );
};
