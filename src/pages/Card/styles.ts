import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;


    background: #FFF;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.5s;

    justify-content:center;
    justify-items: center;
    justify-self: center;

    & + div {
      margin-top: 16px;
    }

    &:hover {
      border: solid 3px ${shade(0.2, '#04d361')};
      /*transform: translateX(10px);*/
    }

    a {
        text-decoration: none;
      }

`;
