import {
  Hero,
  AccordionList,
  OpinionSection,
  FeatureSection,
} from '../components';

import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <AccordionList />
      <OpinionSection />
      <FeatureSection />
    </div>
  );
}

export default IndexPage;
