import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next';
import {motion} from 'framer-motion';
import Masonry from 'react-masonry-css';
import client from 'utils/api';
import {getProgressiveImage, breakpointColumnsObj} from 'utils/posts';
import MainLayout from 'components/layout';
import CustomHead from 'components/custom-head';
import Images from 'components/images';
import {PageLayout} from 'styles/layout/index';
import {ImageGrid} from 'styles/pages/index';
import {MAIN_IMAGES} from 'constants/api';
import {Entries} from 'types/pages/index';

const Home: NextPage<Entries> = (entries) => {
  return (
    <MainLayout>
      <>
        <CustomHead title="Home" />
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <PageLayout>
            <ImageGrid>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid-column"
              >
                {entries.items.map((image) => {
                  const id = image?.sys?.id;
                  const url = getProgressiveImage(
                    image?.fields?.mainImage[1]?.fields?.file?.url
                  );
                  const title = image?.fields?.mainImage[0]?.fields?.title;
                  return url ? (
                    <Images key={id} id={id} url={url} title={title} />
                  ) : null;
                })}
              </Masonry>
            </ImageGrid>
          </PageLayout>
        </motion.div>
      </>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const entries = await client.getEntries({
    content_type: MAIN_IMAGES,
  });

  return {props: entries};
};

export default Home;
