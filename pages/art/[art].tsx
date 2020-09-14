import React from 'react';
import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next';
import client from 'utils/api';
import {getProgressiveImage} from 'utils/posts';
import MainLayout from 'components/layout';
import SingleImage from 'components/images/single-image';
import {ImageContainer} from 'styles/layout';
import {MainImages} from 'types/pages/index';

type Art = {asset: MainImages};

const ArtPage: NextPage<Art> = ({asset}) => {
  const {title, file} = asset?.fields;
  const img: string = getProgressiveImage(file?.url);
  const maxWidth: number = file?.details?.image?.width;
  return (
    <MainLayout title={`Art | ${title}`}>
      <ImageContainer>
        <SingleImage img={img} title={title} style={{maxWidth}} />
      </ImageContainer>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const {art} = ctx.query;
  const entry: any = await client.getEntry(`${art}`);
  const imgId: string = entry.fields.mainImage[0].sys.id;
  const asset = await client.getAsset(imgId);

  return {
    props: {
      entry,
      asset,
    },
  };
};

export default ArtPage;
