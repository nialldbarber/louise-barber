import React, {FC} from 'react';
import useStore from 'state/store';
import {getCurrentYear} from 'utils/site-config';
import {FooterContainer, InstaIcon} from 'styles/components/footer';
import {TITLE, INSTA} from 'constants/site-config';

const Footer: FC = () => {
  const {showHoveredCursor, hideHoveredCursor} = useStore();
  const year = getCurrentYear();

  return (
    <FooterContainer>
      <p>
        {TITLE.FOOTER} {year}
      </p>
      <InstaIcon>
        <a
          href={INSTA.URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={hideHoveredCursor}
          onMouseEnter={showHoveredCursor}
          onMouseLeave={hideHoveredCursor}
        >
          <img src={INSTA.IMG} alt={INSTA.ALT} />
        </a>
      </InstaIcon>
    </FooterContainer>
  );
};

export default Footer;
