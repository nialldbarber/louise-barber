import styled from 'styled-components';
import {titleClamp} from 'styles/utils/mixins';

const MainHeader = styled.h1`
  margin: 0;
  ${titleClamp};
  color: ${({theme}) => theme?.colors?.black};
  text-align: center;
`;

export {MainHeader};
