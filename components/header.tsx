import React from 'react';
import Link from 'next/link';
import useStore from 'state/store';
import Navigation from 'components/navigation';
import {MainHeader} from 'styles/typography/header';
import {HeaderContainer} from 'styles/components/header';
import {TITLE} from 'constants/site-config';

const Header = () => {
  const {showHoveredCursor, hideHoveredCursor} = useStore();

  return (
    <HeaderContainer>
      <Link href="/">
        <a
          onClick={hideHoveredCursor}
          onMouseEnter={showHoveredCursor}
          onMouseLeave={hideHoveredCursor}
        >
          <MainHeader>{TITLE.MAIN}</MainHeader>
        </a>
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
