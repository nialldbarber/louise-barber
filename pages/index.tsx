import React from 'react';
import {NextPage} from 'next';
import client from 'utils/api';
import CustomHead from 'components/custom-head';
import Image from 'components/images';
import {MAIN_IMAGES} from 'constants/api';

const Home: NextPage = ({art}) => {
  return (
    <>
      <CustomHead title="Home" />
      <div>
        {art.map((image: any) => {
          console.log(image);
          const id = image?.sys?.id;
          const url = `https:${image?.fields.mainImage[0].fields.file.url}`;
          return <Image key={id} id={id} url={url} />;
        })}
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const entries = await client.getEntries({
    content_type: MAIN_IMAGES,
  });

  return {art: entries.items};
};

export default Home;
