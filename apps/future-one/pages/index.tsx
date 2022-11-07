import { Hero } from '../components';
import { AccordionList } from '../components/accordion-list/accordion-list';

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
