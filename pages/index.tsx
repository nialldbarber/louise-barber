import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next';
import client from 'utils/api';
import CustomHead from 'components/custom-head';
import Image from 'components/images';
import {MAIN_IMAGES} from 'constants/api';
import {ImageGrid} from 'styles/pages/index';
import {Entries} from 'types/pages/index';

const Home: NextPage<Entries> = (entries) => {
  console.log(entries);
  return (
    <>
      <CustomHead title="Home" />
      <ImageGrid>
        {entries.items.map((image) => {
          const id = image?.sys?.id;
          const url = `https:${image?.fields?.mainImage[0]?.fields?.file?.url}`;
          return url ? <Image key={id} id={id} url={url} /> : null;
        })}
      </ImageGrid>
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
