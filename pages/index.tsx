import React from 'react';
import {NextPage, GetServerSideProps} from 'next';
import styled from 'styled-components';
import client from 'utils/api';
import CustomHead from 'components/custom-head';
import Image from 'components/images';
import {MAIN_IMAGES} from 'constants/api';

const ImageGrid = styled.div`
  display: flex;

  div {
    a {
      cursor: pointer;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

const Home: NextPage = ({items}) => {
  // console.log(items);
  return (
    <>
      <CustomHead title="Home" />
      <ImageGrid>
        {items.map((image: any) => {
          // console.log(image);
          const id = image?.sys?.id;
          const url = `https:${image?.fields?.mainImage[0]?.fields?.file?.url}`;
          return <Image key={id} id={id} url={url} />;
        })}
      </ImageGrid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const entries = await client.getEntries({
    content_type: MAIN_IMAGES,
  });

  return {
    props: entries,
  };
};

export default Home;
