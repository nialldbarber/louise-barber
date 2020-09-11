import React, {FC} from 'react';
import Head from 'next/head';
import {TITLE} from 'constants/site-config';

interface HeadTitle {
  title?: string;
  description?: string;
}

const CustomHead: FC<HeadTitle> = ({title, description}) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{`${TITLE.MAIN} | ${title}` || ''}</title>
      <meta name="description" content={description || TITLE.DESC} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default CustomHead;
