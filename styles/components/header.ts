import styled from 'styled-components';
import {
  flexCenterMixin,
  fullSpacedMixin,
  positionCenter,
} from 'styles/utils/mixins';

const HeaderContainer = styled.header`
  ${flexCenterMixin};
  position: relative;
  margin: 0 auto;
  padding-top: 2.5rem;
  padding-left: 2rem;
  height: ${({theme}) => theme?.dimensions?.headerHeight};
  max-width: ${({theme}) => theme?.dimensions?.maxWidth};
  justify-content: flex-start;
  background: ${({theme}) => theme?.colors?.white};

  a {
    z-index: 3;
  }

  nav {
    position: absolute;
    ${fullSpacedMixin};

    ul {
      ${positionCenter};
      position: fixed;
      display: grid;
      grid-gap: 30px;
      text-align: center;

      li {
        a {
          position: relative;
          padding: 1rem;
          font-size: clamp(1.5rem, 4.5vw, 3rem);
          text-transform: uppercase;
          color: ${({theme}) => theme?.colors?.white};

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

export {HeaderContainer};
