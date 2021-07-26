import "../styles/normalize.css";
import "../styles/components.css";
import "../styles/nearshorenetworks.css";
import type { AppProps } from "next/app";
import Layout from "./components/layout";
import Head from "next/head";

declare var WebFont: any;

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    WebFont.load({
      google: {
        families: [
          "Poppins:300,regular,500,600,700",
          "Playfair Display:regular,italic,700,700italic,900,900italic",
        ],
      },
    });
  }
  return (
    <Layout>
      <Head>
        <title>Nearshore Networks</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="4S_29TZmGdAwjBsw_FZ-JD20hrZdMoOyoWFEvRSLito"
          name="google-site-verification"
        />
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5a29d8f7c76e0b0001d9eac5"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
        <script type="text/javascript" src="/js/nearshorenetworks.js" />
        <script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
