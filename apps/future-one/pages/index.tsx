import { Hero, AccordionList } from '../components';

import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <AccordionList />
    </div>
  );
}

export default IndexPage;
