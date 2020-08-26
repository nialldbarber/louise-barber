import styled from 'styled-components';
import {flexCenterMixin} from 'styles/mixins';

const PageLayout = styled.div`
  margin: 0 auto;  
  padding: 1rem 2rem;
  min-height: calc(100vh - ${({theme}) => theme.dimensions.headerHeight} - ${({theme}) => theme.dimensions.footerHeight});
  max-width: 1200px;
`;

const ImageContainer = styled.div`
  ${flexCenterMixin};
`;

export {PageLayout, ImageContainer};