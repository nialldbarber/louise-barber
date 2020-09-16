import styled from 'styled-components';
import {flexCenterMixin} from 'styles/utils/mixins';

const FooterContainer = styled.footer`
  position: relative;
  height: ${({theme}) => theme?.dimensions?.footerHeight};
  ${flexCenterMixin};

  &:before {
    content: '';
    position: absolute;
    background: ${({theme}) => theme?.colors?.black};
    height: 1px;
    left: 50%;
    top: -0.5rem;
    width: 50px;
    transform: translateX(-50%);
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
`;

const InstaIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
  margin-bottom: 0.2rem;
`;

export {FooterContainer, InstaIcon};
