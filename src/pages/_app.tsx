import "reflect-metadata";
import "../styles/normalize.css";
import "../styles/components.css";
import "../styles/nearshorenetworks.css";
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'
import '@fontsource/roboto'
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nearshore Networks</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="4S_29TZmGdAwjBsw_FZ-JD20hrZdMoOyoWFEvRSLito"
          name="google-site-verification"
        />
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63154f3300bbd06788d75ff9"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          type="text/javascript"
          crossOrigin="anonymous"
        />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.0/jquery-ui.min.js"
          type="text/javascript"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <script type="text/javascript" src="/js/webflow.js" />
    </>
  );
}
export default MyApp;
