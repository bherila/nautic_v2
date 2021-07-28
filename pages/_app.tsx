import "reflect-metadata";
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
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
