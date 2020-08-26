import styled from 'styled-components';
import {flexCenterMixin} from 'styles/mixins';

const HeaderContainer = styled.header`
  ${flexCenterMixin};
  position: relative;
  background: ${({theme}) => theme.colors.white};
  height: ${({theme}) => theme.dimensions.headerHeight};

  nav {
    ${flexCenterMixin};
    position: absolute;
    right: 2rem;
    top: 0;
    bottom: 0;

    ul {
      display: flex;

      li {
        a {
          padding: 1rem;
        }

        &:last-child {
          a {
            padding-right: 0;
          }
        }
      }
    }
  }
`;

const MainHeader = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.black};
  text-align: center;
`;

export {HeaderContainer, MainHeader};
