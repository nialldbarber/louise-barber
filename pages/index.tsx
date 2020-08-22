import React, {FC} from 'react';
// import Link from 'next/link';
import CustomHead from '../components/custom-head';
import {client} from '../prismic-configuration';

const Home: FC = ({title: {data}}) => {
  return (
    <div>
      <CustomHead title="Home" />
      <div className="hero">
        <div className="row">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const title = await client.getSingle('sitetitle');

  return {
    props: {
      title,
    },
  };
}

export default Home;
