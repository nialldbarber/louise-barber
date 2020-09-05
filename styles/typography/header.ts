import styled from 'styled-components';
import {flexCenterMixin} from 'styles/mixins';

const HeaderContainer = styled.header`
  ${flexCenterMixin};
  position: relative;
  background: ${({theme}) => theme?.colors?.white};
  height: ${({theme}) => theme?.dimensions?.headerHeight};
  padding-top: 2.5rem;

  nav {
    ${flexCenterMixin};
    position: absolute;
    top: 2.5rem;
    bottom: 0;
    right: 2rem;

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
            content: '';
            position: absolute;
            bottom: 0.5rem;
            width: 0;
            height: 1px;
            background: ${({theme}) => theme?.colors?.purple};
            transition: 0.275s ${({theme}) => theme?.animation?.swoop};
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
  color: ${({theme}) => theme?.colors?.black};
  text-align: center;
`;

export {HeaderContainer, MainHeader};
