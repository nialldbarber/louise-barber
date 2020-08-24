import React, {FC} from 'react';
import {getCurrentYear} from 'utils/site-config';
import {SITE_TITLE} from 'constants/config';

const Footer: FC = () => {
  return (
    <footer>
      <p>
        @ {SITE_TITLE} {getCurrentYear()}
      </p>
    </footer>
  );
};

export default Footer;
