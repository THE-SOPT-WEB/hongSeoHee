import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import backBread from '../assets/images/backBread.png';

const GlobalStyle = createGlobalStyle`
@font-face { 
    font-family: 'LotteMartHappy'; 
    font-style: normal; 
    font-weight: 400; 
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff') format('woff');
}
${reset}
#root, body, html {
    width: 100%;
    height: auto;
    font-family: 'LotteMartHappy';
background: url(${backBread});
  background-repeat: repeat;
  background-position: center;
  background-size: auto;
}
* {
   
    box-sizing: border-box;
     font-family: 'LotteMartHappy';

    }
`;

export default GlobalStyle;
