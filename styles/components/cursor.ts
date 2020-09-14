import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';

const Cursor = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid ${({theme}) => theme?.colors?.black};
  border-radius: 100%;
  pointer-events: none;
  cursor: pointer;
  z-index: 10;

  ${({mode}) =>
    mode &&
    css`
      background-color: ${({theme}) => theme?.colors?.offWhite};
    `}
`;

export {Cursor};
