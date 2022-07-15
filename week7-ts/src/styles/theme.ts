import { DefaultTheme } from 'styled-components';
const colors = {
  letter_purple01: '#804afb',
  letter_purple02: '#bb9dfc',
  letter_purple03: '#e1d4fd',
  letter_purple04: '#f1f2fb',
  letter_white: '#F9F8Ff',
  letter_red: '#FF0000',
  letter_gray: '#BDBDBD',
};

const fonts = {
  letter_h1: `
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
  `,

  letter_h2: `
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
  `,

  letter_h3: `
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
  `,

  letter_h4: `
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
  `,

  letter_b1: `
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: -0.04em;
  `,

  letter_b2: `
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 21px;
    letter-spacing: 0.02em;
  `,

  letter_b3: `
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: -0.04em;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
