import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;

  margin: 0 auto;

  max-width: 920px;
  height: 100vh;

  align-content: flex-start;
  justify-content: center;

  .form {
    .titulo {
      display: grid;
      grid-template-rows: 1fr;

      span:first-child {
        grid-row: 1;
        font-size: 1.5rem;
        font-weight: 500;
        align-self: flex-end;
        justify-self: start;
        margin-bottom: 3rem;
      }
    }
  }
`;

/*export const ContentFormImage = styled.div`
  width: 46rem;
  display: flex;

  img {
    background: transparent;
    width: 4rem;
    height: 4rem;
    border-width: 3px;
    border-style: solid;
    border-color: #03a84d;

    margin-left: 5%;
    border-radius: 50%;
  }
`;
*/
const appearFromRight = keyframes`
from {
  opacity:0;
  transform:  translateX(50px);
}
to{
  opacity: 1;
  transform: translateX(0);
}
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 1s;

  form {
    text-align: center;
    width: 32rem;

    a {
      color: #f4ede8;
      display: block;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    > a {
      color: #666360;
      display: block;
      margin-top: 2rem;
      text-decoration: none;
      font-size: 1.5rem;
      font-family: Roboto, sans-serif;
      transition: color 0.2s;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      &:hover {
        color: ${shade(0.2, '#000')};
      }
    }
  }
`;
