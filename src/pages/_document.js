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
        <link rel="preconnect" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="//db.onlinewebfonts.com/c/4e447705f6a3ad4e6e6ec31c7c8a14aa?family=Revamped" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,600;1,500&display=swap"
          rel="preconnect"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
