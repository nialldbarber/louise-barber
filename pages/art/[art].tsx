import React from 'react';
import {NextPage, GetServerSideProps} from 'next';
import client from 'utils/api';
import CustomHead from 'components/custom-head';

const ArtPage: NextPage = ({entry}) => {
  console.log(entry);
  const artTitle = entry.fields.mainImage[0].fields.title;
  return (
    <>
      <CustomHead title={`Art | ${artTitle}`} />
      <div>
        <p>{artTitle}</p>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {art} = context.query;
  const entry = await client.getEntry(art);

  return {
    props: {entry},
  };
};

export default ArtPage;
