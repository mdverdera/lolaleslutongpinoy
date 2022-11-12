import Layout from "@components/layout/Layout";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Lola Les Lutong Pinoy - A food blog that emphasizes Filipino food.
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="description"
          content="A food blog that emphasizes Filipino food that is affordable and easy to do in daily life."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="p:domain_verify"
          content="b4023b5db6a28c1c58bc08d4532244a7"
        />
      </Head>

      <Layout>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-4037215281786151"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
