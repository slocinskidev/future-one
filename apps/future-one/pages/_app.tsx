import { AppProps } from 'next/app';

import { Layout } from '@future-one/components';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
