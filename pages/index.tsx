import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next';
import Masonry from 'react-masonry-css';
import client from 'utils/api';
import useStore from 'state/store';
import {getProgressiveImage, breakpointColumnsObj} from 'utils/posts';
import MainLayout from 'components/layout';
import Images from 'components/images';
import {ImageGrid} from 'styles/pages/index';
import {MAIN_IMAGES} from 'constants/api';
import {Entries} from 'types/pages/index';

const Home: NextPage<Entries> = (entries) => {
  const {
    selectedImageId,
    setSelectedId,
    showAllImages,
    setShowAllImages,
  } = useStore();

  function showId(id: string) {
    setSelectedId(entries.items.find((img) => img.sys.id === id));
    setShowAllImages(false);
  }

  // console.log(selectedImageId && selectedImageId);
  console.log('Show all images?: ', showAllImages);

  // click outside div && click title
  // should make selectedImageId === ''

  return (
    <>
      <MainLayout title="Home">
        <button onClick={() => setShowAllImages(true)}>REVERT!</button>
        <ImageGrid>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {selectedImageId !== '' && showAllImages === false ? (
              <Images
                key={selectedImageId?.sys?.id}
                id={selectedImageId?.sys?.id}
                url={selectedImageId?.fields?.mainImage[1]?.fields?.file?.url}
                title={selectedImageId?.fields?.mainImage[0]?.fields?.title}
                action={showId}
              />
            ) : (
              entries.items.map((image) => {
                const id = image?.sys?.id;
                const url = getProgressiveImage(
                  image?.fields?.mainImage[1]?.fields?.file?.url
                );
                const title = image?.fields?.mainImage[0]?.fields?.title;
                return url ? (
                  <Images
                    key={id}
                    id={id}
                    url={url}
                    title={title}
                    action={showId}
                  />
                ) : null;
              })
            )}
          </Masonry>
        </ImageGrid>
      </MainLayout>
    </>
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
