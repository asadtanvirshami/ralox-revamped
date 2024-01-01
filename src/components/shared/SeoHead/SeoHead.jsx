import Head from 'next/head';
import React,{memo} from 'react';



const SeoHead = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />
      {/* <meta charset="UTF-8" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:site" content="@algorim" />
      <meta name="twitter:image" content={props.image || defaultImage} />
      <meta name="twitter:domain" content="algorim.io" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
    </Head>
  );
};

export default memo(SeoHead);
