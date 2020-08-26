import React from 'react';
import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next';
import client from 'utils/api';
import CustomHead from 'components/custom-head';
import {getProgressiveImage} from 'utils/posts';
import {PageLayout, ImageContainer} from 'styles/layout';

const ArtPage: NextPage = ({asset}) => {
  console.log(asset);
  const {title, file} = asset?.fields;
  const img = getProgressiveImage(file?.url);
  const maxWidth = file?.details?.image?.width;
  return (
    <>
      <CustomHead title={`Art | ${title}`} />
      <PageLayout>
        <p>{title}</p>
        <ImageContainer>
          <img src={img} alt="" style={{ maxWidth }} />
        </ImageContainer>
      </PageLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const {art} = ctx.query;
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
