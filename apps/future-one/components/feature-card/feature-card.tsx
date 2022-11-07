import { PrimaryLink, UnstyledLink } from '@future-one/ui';

import { ReactComponent as GuardIcon } from '../../public/icons/guard.svg';
import { ReactComponent as ScissorsIcon } from '../../public/icons/scissors.svg';
import { ReactComponent as AndroidIcon } from '../../public/icons/android.svg';
import { ReactComponent as CircleXV } from '../../public/icons/circle-x-v.svg';
import { ReactComponent as ArrowRight } from '../../public/icons/arrow-right.svg';

import styles from './feature-card.module.scss';

export type FeatureCardProps = {
  icon: CardIconType;
  label: string;
};

export type CardIconType = 'guard' | 'scissors' | 'android' | 'circle-x-v';

export const FeatureCard = ({ icon, label }: FeatureCardProps) => {
  const iconMap: Record<FeatureCardProps['icon'], JSX.Element> = {
    guard: <GuardIcon />,
    scissors: <ScissorsIcon />,
    android: <AndroidIcon />,
    'circle-x-v': <CircleXV />,
  };

  return (
    <UnstyledLink href="/" tabIndex={-1} className={styles['card-link']}>
      <div className={styles['container']}>
        {iconMap[icon]}
        <div className={styles['details']}>
          <PrimaryLink href="/" className={styles['details-link']}>
            {label}
          </PrimaryLink>
          <ArrowRight className={styles['details-icon']} />
        </div>
      </div>
    </UnstyledLink>
  );
};
