import styled from 'styled-components';
import {flexCenterMixin} from 'styles/mixins';

const HeaderContainer = styled.header`
  ${flexCenterMixin};
  position: relative;
  background: ${({theme}) => theme.colors.white};
  height: 5rem;

  nav {
    ${flexCenterMixin};
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const MainHeader = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.black};
  text-align: center;
`;

export {HeaderContainer, MainHeader};
