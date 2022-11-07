import { Hero, AccordionList, OpinionSection } from '../components';

import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <AccordionList />
      <OpinionSection />
    </div>
  );
}

export default IndexPage;
