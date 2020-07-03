import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 10px;
  max-width: 700px;
  display: flex;
`;

export const ContentFormImage = styled.div`
  width: 700px;
  display: flex;

   img {
      background: transparent;
      width: 25%;
      height: 25%;
      justify-content: center;
      align-self: center;
      margin-left: 5%;

      border-width: 3px;
      border-style: solid;
      border-color: #03a84d;

      border-radius: 50%;
   }

`;

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
    margin: 30px 0;
    width: 700px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
