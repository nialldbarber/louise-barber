import styled from 'styled-components';
import {flexCenterMixin} from 'styles/mixins';

const HeaderContainer = styled.header`
  ${flexCenterMixin};
  position: relative;
  background: ${({theme}) => theme?.colors?.white};
  height: ${({theme}) => theme?.dimensions?.headerHeight};
  padding-top: 2.5rem;

  a {
    z-index: 3;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    ul {
      position: fixed;
      top: 50%;
      left: 50%;
      display: grid;
      grid-gap: 30px;
      text-align: center;
      transform: translate(-50%, -50%);

      li {
        a {
          position: relative;
          padding: 1rem;
          color: ${({theme}) => theme?.colors?.white};
          font-size: clamp(1.5rem, 2.5vw, 2rem);

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
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: ${({theme}) => theme?.colors?.black};
  text-align: center;
`;

export {HeaderContainer, MainHeader};
