import { css, DefaultTheme } from 'styled-components';

const fonts = {
  header: css`
    font-size: 6rem;
  `,
  round: css`
    font-size: 4rem;
  `,
};
const colors = {
  title: '#EED330',
  yellow: '#FFE266',
  darkYellow: '#daa520',
  brown: '#5E2F1A',
};

const theme: DefaultTheme = {
  fonts,
  colors,
};
export default theme;
