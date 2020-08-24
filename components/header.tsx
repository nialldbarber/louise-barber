import React from 'react';
import Nav from 'components/nav';
import {SITE_TITLE} from 'constants/config';

const Header = () => {
  return (
    <header>
      <h1>{SITE_TITLE}</h1>
      <Nav />
    </header>
  );
};

export default Header;
