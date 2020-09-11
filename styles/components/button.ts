import styled from 'styled-components';

const Btn = styled.button`
  &.standard {
    border: 2px solid ${({theme}) => theme?.colors?.black};
    padding: 0.5em 1em;
    font-weight: 500;
    background-color: ${({theme}) => theme?.colors?.black};
    color: ${({theme}) => theme?.colors?.white};
    white-space: nowrap;
    border-radius: 4px;
  }
`;

export {Btn};
