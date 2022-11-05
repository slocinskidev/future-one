import { ButtonLink } from '@future-one/ui';
import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.container}>
      <ButtonLink href="/">Hello</ButtonLink>
    </div>
  );
}

export default IndexPage;
