import styled from 'styled-components';

const ImageGrid = styled.div`
  display: flex;

  div {
    a {
      cursor: pointer;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export {ImageGrid};