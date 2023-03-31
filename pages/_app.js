
import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import ResponsiveAppBar from '../components/AppBar';
import "../styles/global.css"
import 'react-quill/dist/quill.snow.css'
import MyAppBar from '../components/MyAppBar';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>world tech travel blog</title>
        <meta
          name="description"
          content="Welcome to World Tech Travel, your go-to destination for the latest news and insights on the intersection of technology, international relations, and travel. We prioritize content on international relations and technology, but also provide valuable travel-related information to enhance your journeys."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <MyAppBar/>

      <ThemeProvider theme={theme}>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}