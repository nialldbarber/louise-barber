import React, {FC} from 'react';
import Head from 'next/head';
import {SITE_TITLE} from '../constants/config';

type HeadTitle = {title: string};

const CustomHead: FC<HeadTitle> = ({title}) => {
  return (
    <Head>
      <title>
        {SITE_TITLE} | {title}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default CustomHead;
