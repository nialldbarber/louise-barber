import styled from 'styled-components';
import {flexCenterMixin} from 'styles/mixins';

const FooterContainer = styled.footer`
  height: ${({theme}) => theme.dimensions.footerHeight};
  ${flexCenterMixin};
`;

export {FooterContainer};
