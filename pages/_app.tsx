import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider as T } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { muiTheme } from '../src/theme/MuiTheme';
import createEmotionCache from '../src/theme/CreateEmotionCache';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();
const MyApp: React.FunctionComponent<AppPropsWithLayout> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Nextjs</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;"
        />
        {/* <meta property="og:url" content={currentURL} key="ogurl" /> */}
        <meta property="og:image" content={`logo.png`} key="ogimage" />
        {/* <meta property="og:site_name" content={'siteName'} key="ogsitename" /> */}
        {/* <meta property="og:title" content={'pageTitle'} key="ogtitle" /> */}
        {/* <meta property="og:description" content={'description'} key="ogdesc" /> */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <ToastContainer />
      <Box>{getLayout(<Component {...pageProps} />)}</Box>
    </CacheProvider>
  );
};

export default MyApp;
