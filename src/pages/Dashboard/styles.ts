import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const FormDel = styled.form<FormProps>`
  display: flex;
  border: none;
  margin-left: 5px;

  button {
    background: #fff;
    border: 0;
  }
`;

export const Form = styled.form<FormProps>`
margin-top: 40px;
max-width: 700px;
display: flex;

 input {
  flex:1;
  font-size: 18px;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;

  border: 2px solid #fff;
  border-right: 0;

  &::placeholder {
    color: #a8a8b3;
  }
}

button {
  width: 210px;
  height: 70px;
  font-size: 18px;
  background: #04d361;
  border-radius: 0 5 5 0;
  border : 0;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
}
`;

export const Error = styled.span`
  display: block;
  font-size: 22px;
  color: #c53030;
  margin-top:8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  div {

    border-radius: 10px;
    width: 100%;
    padding: 8px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    svg {
      background: transparent;
    }

  & + div {
    margin-top: 8px;
    background: #FFF;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    padding-top: 5px;

    & + div + div {
      margin-top: 16px;
    }

    &:hover {
      border: solid 3px ${shade(0.2, '#04d361')};
      transform: translateX(10px);
    }

    a {
        text-decoration: none;
      }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

    div{
      transition: none;
      display: block;
      margin-top:15px;

      &:hover {
        border: none;
        transform: translateX(0px);
      }

      strong {
        font-size: 22px;
        color: #3D3D4D;
      }
    }
  }
}
`;

export const User = styled.p`
   font-size: 22px;
   color: #A8A8B3;
   `;

export const Password = styled.p`
   font-size: 22px;
   color: #A8A8B3;
   -webkit-text-security: disc;
    height:20px;
    width:100px;
    padding: 1px;
    background-color: white;
    -webkit-user-select: text;
    cursor: auto;
`;

export const ConfigureSvg = styled.span`

  svg {
      height: 32px;
      display: flex;
      border: none;
      background: #FFF;
      margin-left: 5px;
      color: #000;
      cursor: pointer;
   }
`;
