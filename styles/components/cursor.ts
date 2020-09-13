import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';

const Cursor = styled(motion.div)`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  z-index: 10;
  top: 0;
  border: 1px solid #111;
  border-radius: 100%;
  pointer-events: none;

  ${({mode}) =>
    mode &&
    css`
      background-color: #e7dede;
    `}
`;

export {Cursor};
