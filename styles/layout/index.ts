import styled from 'styled-components';
import {motion} from 'framer-motion';
import {flexCenterMixin} from 'styles/utils/mixins';
import {media} from 'styles/utils/media-queries';

const PageLayout = styled(motion.section)`
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  max-width: ${({theme}) => theme?.dimensions?.maxWidth};
  min-height: calc(
    100vh - ${({theme}) => theme?.dimensions?.headerHeight} -
      ${({theme}) => theme?.dimensions?.footerHeight}
  );
`;

const Main = styled.main`
  padding-bottom: 2rem;
`;

const ImageContainer = styled.div`
  ${flexCenterMixin};
  margin: 0 auto;
  max-width: 70%;
  ${media.lessThan('tablet')`
    max-width: 100%;
  `};
`;

export {PageLayout, Main, ImageContainer};
