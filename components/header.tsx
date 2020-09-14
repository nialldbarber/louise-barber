import React from 'react';
import Link from 'next/link';
import Navigation from 'components/navigation';
import CursorLink from 'components/helpers/cursor-hover-links';
import {MainHeader} from 'styles/typography/header';
import {HeaderContainer} from 'styles/components/header';
import {TITLE} from 'constants/site-config';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <CursorLink>
            <MainHeader>{TITLE.MAIN}</MainHeader>
          </CursorLink>
        </a>
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
2;
