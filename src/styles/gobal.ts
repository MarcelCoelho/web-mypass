import { createGlobalStyle } from 'styled-components';

import backgroundMyPass from '../assets/background-my-pass-03.png';

export default createGlobalStyle`
  * {
   margin:0;
   left: 0;
   padding:0;
   outline:0;
   box-sizing: border-box;
  }
  body {
    /*background: var (--gray-line) url(${backgroundMyPass}) no-repeat 50% right;*/
    background: var(--gray-line) url(${backgroundMyPass}) no-repeat 70% top;

   // -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 16px Roboto, sans-serif;
  }

:root {
  --background:#293341;
  --gray-line: #DCDDE0;
  --text: #666666;
  --title: #2E384D;
  --red: #E83F5B;
  --green: #4CD62B;
  --blue: #5965E0;
  --blue-dark: #4953B8;
  --blue-twitter: #2AA9E0;
  --orange: #B35710;
  --orange-medium: #F5bc92;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

@media(max-width: 650px) {
  html {
    font-size: 81.5%;
    margin-left: 1rem;
  }
  button {
      font-size: 81.5%;
    }
}

button {
  cursor: pointer;
}

`;
