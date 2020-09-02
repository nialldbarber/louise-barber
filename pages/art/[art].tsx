import React from 'react';
import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next';
import {motion} from 'framer-motion';
import client from 'utils/api';
import CustomHead from 'components/custom-head';
import {getProgressiveImage} from 'utils/posts';
import {PageLayout, ImageContainer} from 'styles/layout';
import {MainImages} from 'types/pages/index';

interface Art {
  asset: MainImages;
}

const ArtPage: NextPage<Art> = ({asset}) => {
  console.log(asset);
  const {title, file} = asset?.fields;
  const img = getProgressiveImage(file?.url);
  const maxWidth = file?.details?.image?.width;
  return (
    <>
      <CustomHead title={`Art | ${title}`} />
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <PageLayout>
          <ImageContainer>
            <img src={img} alt={title} style={{maxWidth}} />
          </ImageContainer>
        </PageLayout>
      </motion.div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const {art} = ctx.query;
  console.log(ctx.query);
  const entry: any = await client.getEntry(`${art}`);
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
