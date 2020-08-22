import React, {FC} from 'react';
import {GetStaticProps} from 'next';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import {client} from '../prismic-configuration';
import Images from '../components/images';
import CustomHead from '../components/custom-head';

interface Image {
  params: {
    data: {
      main_image: {
        alt: string;
        copyright: string;
        dimensions: {
          height: number;
          width: number;
        };
        url: string;
      };
    };
    href: string;
    id: string;
    slugs?: string[];
    tags?: string[];
    uid?: string;
  };
}

interface HomeProps {
  paths: Image[];
}

const Home: FC<HomeProps> = ({paths}) => {
  console.log(paths);
  return (
    <div>
      <CustomHead title="Home" />
      <div>
        {paths.map((image) => {
          const id = image?.params?.id;
          return (
            <Link key={id} href="/art/[id]" as={`/art/${`hello`}`}>
              <a>
                <img src={image?.params?.data?.main_image?.url} alt="test" />
              </a>
            </Link>
          );
        })}
        <Images />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {results} = await client.query(
    Prismic.Predicates.at('document.type', 'mainimages')
  );
  const paths = results.map((params) => ({params}));
  return {props: {paths}};
};

export default Home;
