import { createTheme, ThemeProvider } from '@mui/material';
import { Html, Head, Main, NextScript } from 'next/document';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
  },
});

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
};
export default Document;
