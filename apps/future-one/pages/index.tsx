import { Hero } from '../components/hero/hero';
import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}

export default IndexPage;
