import React, {FC} from 'react';
import {getCurrentYear} from 'utils/site-config';
import {FooterContainer} from 'styles/components/footer';
import {FOOTER_TITLE} from 'constants/config';

const Footer: FC = () => {
  const year = getCurrentYear();

  return (
    <FooterContainer>
      <p>
        @ {FOOTER_TITLE} {year}
      </p>
    </FooterContainer>
  );
};

export default Footer;
