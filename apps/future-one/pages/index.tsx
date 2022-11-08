import {
  Hero,
  AccordionList,
  OpinionSection,
  FeatureSection,
  Newsletter,
} from '../components';

import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <AccordionList />
      <OpinionSection />
      <FeatureSection />
      <Newsletter />
    </div>
  );
}

export default IndexPage;
