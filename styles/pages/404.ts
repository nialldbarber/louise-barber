import styled from 'styled-components';
import {positionCenter, marign404} from 'styles/mixins';

const Layout404 = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  ${positionCenter};

  h2 {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    ${marign404};
  }

  button {
    ${marign404};
  }
`;

export {Layout404};
