import React from 'react';
import {NextPage, GetServerSideProps} from 'next';
import client from 'utils/api';
import CustomHead from 'components/custom-head';

const ArtPage: NextPage = ({entry, asset}) => {
  const artTitle = entry.fields.mainImage[0].fields.title;
  const img = `https:${asset.fields.file.url}?fm=jpg&fl=progressive`;
  return (
    <>
      <CustomHead title={`Art | ${artTitle}`} />
      <div>
        <p>{artTitle}</p>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {art} = context.query;
  const entry = await client.getEntry(art);
  const imgId = entry.fields.mainImage[0].sys.id;
  const asset = await client.getAsset(imgId);

  return {
    props: {
      entry,
      asset,
    },
  };
};

export default ArtPage;
