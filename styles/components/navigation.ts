import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import {fullSpacedMixin} from 'styles/mixins';

const MainNav = styled(motion.nav)`
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
  ${fullSpacedMixin};
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
