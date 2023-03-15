import type { AppProps } from 'next/app';
import BaseLayout from './base';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
