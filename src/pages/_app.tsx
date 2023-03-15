import type { AppProps } from 'next/app';
import BaseLayout from './base';
import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
};
export default App;
