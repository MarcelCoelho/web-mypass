import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const ContentFormImage = styled.div`
  width: 750px;
  display: flex;

   img {
      background: transparent;
      width: 70px;
      height: 70px;
      border-width: 3px;
      border-style: solid;
      border-color: #03a84d;
      justify-content: center;
      align-content: center;
      align-items: center;
      align-self: center;
      margin-left: 5%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 500px;
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

    > a {
    color: #666360;
    display: block;
    margin-top: 32px;
    text-decoration: none;
    font-size: 22px;
    font-family: Roboto, sans-serif;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${shade(0.2, '#000')};
    }
  }

  }
`;
