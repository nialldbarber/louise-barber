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
          position: relative;
          padding: 1rem;

          &:hover {
            &:after, 
            &:before {
              width: 30%;
            }
          }

          &:after, 
          &:before {
            content: "";
            position: absolute;
            bottom: 0.5rem;
            height: 1px;
            background: ${({theme}) => theme.colors.purple};
            width: 0;
            transition: .275s ${({theme}) => theme.animation.swoop};
          }

          &:after {
            right: 50%;
          }

          &:before {
            left: 50%;
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
