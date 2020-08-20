import React, {FC} from 'react';
// import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import {Client} from '../prismic-configuration';

const Home: FC = () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="hero">
        <h1 className="title">Louise Barber</h1>
        <div className="row">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
