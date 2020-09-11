import styled, {keyframes} from 'styled-components';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderSpinner = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  &.loader {
    border: 2px solid rgba(0, 0, 0, 0.4);
    border-top-color: #fff;
    animation: ${spinner} 600ms linear infinite;
  }
`;

export {LoaderSpinner};
