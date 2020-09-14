import styled from 'styled-components';
import {lighten} from 'polished';

const Btn = styled.button`
  &.standard {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({theme}) => theme?.colors?.black};
    padding: 0.5em 1em;
    font-weight: 500;
    line-height: 1.4;
    font-size: 1em;
    background-color: ${({theme}) => theme?.colors?.black};
    color: ${({theme}) => theme?.colors?.white};
    white-space: nowrap;
    border-radius: 4px;
    transition: 0.2s cubic-bezier(0, 0, 1, 1);

    &:hover {
      background-color: ${lighten(0.1, '#111')};
      border-color: ${lighten(0.1, '#111')};
    }

    span {
      padding-right: 0;
      transition: 0.2s cubic-bezier(0, 0, 1, 1);

      &.active {
        padding-right: 1rem;
      }
    }
  }

  &.menu-toggle {
    position: absolute;
    right: 2rem;
    top: 3.1rem;
    background: none;
    z-index: 12;
  }
`;

const BackHomeBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {Btn, BackHomeBtn};
