import React, {FC} from 'react';
// import Link from 'next/link';
import CustomHead from '../components/custom-head';
import Nav from '../components/nav';

const Home: FC = () => {
  return (
    <div>
      <CustomHead title="Home" />
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
