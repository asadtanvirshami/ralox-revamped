import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="primeflex/primeflex.css" />
        <link
          rel="preconnect"
          href="primereact/resources/themes/lara-light-indigo/theme.css"
        />
        <link rel="preconnect" href="primeicons/primeicons.css" />
        <link rel="preconnect" href="primereact/resources/primereact.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
