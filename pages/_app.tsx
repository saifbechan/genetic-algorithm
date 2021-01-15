import * as React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#141526" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="64x64 32x32 24x24 16x16" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="keywords" content="react, typescript, javascript, p5js, github, nextjs" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
