import React, {FC} from 'react';
import Head from 'next/head';
import {SITE_TITLE} from 'constants/config';

interface HeadTitle {
  title?: string;
  description?: string;
}

let defaultDescription: string = '';

const CustomHead: FC<HeadTitle> = ({title, description}) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{`${SITE_TITLE} | ${title}` || ''}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default CustomHead;
