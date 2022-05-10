import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
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
    height: 100%;
    font-family: 'LotteMartHappy';

}
* {
    margin: 10%;
    padding: 10%;
    box-sizing: border-box;
    }
`;

export default GlobalStyle;
