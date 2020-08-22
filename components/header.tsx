import React from 'react';
import {SITE_TITLE} from '../constants/config';
import Nav from './nav';

const Header = () => {
  return (
    <header>
      <h1>{SITE_TITLE}</h1>
      <Nav />
    </header>
  );
};

export default Header;
