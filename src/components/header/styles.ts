import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;

  span {
    font-size: 32px;
    font-family: Roboto, sans-serif;
    color: #3A3A3A;
    flex: 1;
    margin-top: 10px;
    text-align: right;
    margin-right: 10px;
  }

  img {
      width: 56px;
      height: 56px;
      border-width: 3px;
      border-style: solid;
      border-color: #03a84d;
      border-radius: 50%;
      cursor: pointer;
    }

  svg {
    width: 60px;
    height: 60px;
    color: #3A3A3A;
    border-image: initial;
    border-radius: 50%;

    &:hover {
      color: #03a84d;
    }
  }
`;

export const Logout = styled.div`
  margin-top: 18px;
  margin-left: 10px;
  display: flex;

  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    flex: 1;

    &:hover {
      color: #000;
    }

  }


  p {
      margin-left: 10px;
      font-size: 22px;
    }

  a {
      text-decoration: none;
  }

`;
