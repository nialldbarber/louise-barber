import styled from 'styled-components';
import {motion} from 'framer-motion';
import {flexCenterMixin} from 'styles/mixins';

const PageLayout = styled(motion.section)`
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  max-width: ${({theme}) => theme?.dimensions?.maxWidth};
  min-height: calc(
    100vh - ${({theme}) => theme?.dimensions?.headerHeight} -
      ${({theme}) => theme?.dimensions?.footerHeight}
  );
`;

const ImageContainer = styled.div`
  ${flexCenterMixin};
  margin: 0 auto;
  max-width: 70%;
`;

export {PageLayout, ImageContainer};
