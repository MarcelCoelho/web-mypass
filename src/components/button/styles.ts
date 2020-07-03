import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  font-size: 28px;
  width: 100%;
  height: 70px;
  background: #04d361;
  border-radius: 5px;
  border : 0;
  margin-top: 15px;
  color: #FFF;
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;
