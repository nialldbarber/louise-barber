import React, {FC} from 'react';
import {getCurrentYear} from 'utils/site-config';
import {FooterContainer} from 'styles/components/footer';
import {TITLE} from 'constants/site-config';

const Footer: FC = () => {
  const year = getCurrentYear();

  return (
    <FooterContainer>
      <p>
        {TITLE.FOOTER} {year}
      </p>
    </FooterContainer>
  );
};

export default Footer;
