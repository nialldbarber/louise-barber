import styled from 'styled-components';
import {flexCenterMixin} from 'styles/mixins';

const FooterContainer = styled.footer`
  height: ${({theme}) => theme?.dimensions?.footerHeight};
  ${flexCenterMixin};

  p {
    margin: 0;
  }
`;

const InstaIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
`;

export {FooterContainer, InstaIcon};
