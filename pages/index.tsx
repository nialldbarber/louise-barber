import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next';
import Masonry from 'react-masonry-css';
import client from 'utils/api';
import {getProgressiveImage} from 'utils/posts';
import CustomHead from 'components/custom-head';
import Image from 'components/images';
import {MAIN_IMAGES} from 'constants/api';
import {PageLayout} from 'styles/layout/index';
import {ImageGrid} from 'styles/pages/index';
import {Entries} from 'types/pages/index';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Home: NextPage<Entries> = (entries) => {
  console.log(entries);
  return (
    <>
      <CustomHead title="Home" />
      <PageLayout>
        <ImageGrid>
          <Masonry
            breakpointCols={breakpointColumnsObj} 
            className="masonry-grid" 
            columnClassName="masonry-grid-column"
          >
            {entries.items.map((image) => {
              const id = image?.sys?.id;
              const url = getProgressiveImage(image?.fields?.mainImage[0]?.fields?.file?.url);
              const title = image?.fields?.mainImage[0]?.fields?.title;
              return url ? <Image key={id} id={id} url={url} title={title} /> : null;
            })}
          </Masonry>
        </ImageGrid>
      </PageLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const entries = await client.getEntries({
    content_type: MAIN_IMAGES,
  });
  
  return {props: entries};
};

export default Home;
