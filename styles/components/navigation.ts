import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';

const MainNav = styled(motion.nav)`
  /* &.open {
    z-index: 5;
    transition: 2s ease;
  }

  &.closed {
    ul {
      z-index: -1;
    }
  } */

  button {
    svg {
      path {
        stroke: ${({theme}) => theme?.colors?.black};
        transition: 0.45s ease;
      }
    }

    &.open {
      svg {
        path {
          stroke: ${({theme}) => theme?.colors?.white};
        }
      }
    }
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({theme}) => theme?.colors?.black};
`;

const panels = css`
  position: fixed;
  height: 100vh;
  width: 50vw;
  z-index: 5;
`;

const LeftPanelBg = styled(motion.div)`
  ${panels};
  left: 0;
  background-color: ${({theme}) => theme?.colors?.black};
`;

const RightPanelBg = styled(motion.div)`
  ${panels};
  right: 0;
  background-color: ${({theme}) => theme?.colors?.black};
`;

export {MainNav, NavBackground, LeftPanelBg, RightPanelBg};
