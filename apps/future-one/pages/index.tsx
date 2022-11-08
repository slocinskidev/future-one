import {
  Hero,
  AccordionList,
  OpinionSection,
  FeatureSection,
  Newsletter,
  Seo,
} from '../components';

import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.container}>
      <Seo templateTitle="Home Page" />
      <Hero />
      <AccordionList />
      <OpinionSection />
      <FeatureSection />
      <Newsletter />
    </div>
  );
}

export default IndexPage;
