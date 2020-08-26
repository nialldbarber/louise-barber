import React, {FC} from 'react';
import {getCurrentYear} from 'utils/site-config';
import {FooterContainer} from 'styles/components/footer';
import {SITE_TITLE} from 'constants/config';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <p>
        @ {SITE_TITLE} {getCurrentYear()}
      </p>
    </FooterContainer>
  );
};

export default Footer;
