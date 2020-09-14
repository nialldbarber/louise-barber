import React, {FC} from 'react';
import {getCurrentYear} from 'utils/site-config';
import CursorLink from 'components/helpers/cursor-hover-links';
import {FooterContainer, InstaIcon} from 'styles/components/footer';
import {TITLE, INSTA} from 'constants/site-config';

const Footer: FC = () => {
  const year = getCurrentYear();

  return (
    <FooterContainer>
      <p>
        {TITLE.FOOTER} {year}
      </p>
      <InstaIcon>
        <CursorLink>
          <a href={INSTA.URL} target="_blank" rel="noopener noreferrer">
            <img src={INSTA.IMG} alt={INSTA.ALT} />
          </a>
        </CursorLink>
      </InstaIcon>
    </FooterContainer>
  );
};

export default Footer;
