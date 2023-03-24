import createEmotionCache from "@/layout/createEmotionCache";
import theme from "@/layout/theme";
import "@/styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";

// Aos.init();
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  React.useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      once: false, // Whether animation should happen only once
      mirror: true,
    });
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      const style = document.getElementById("loaderStyles");
      if (loader && style) {
        loader.remove();
        style.remove();
      }
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
