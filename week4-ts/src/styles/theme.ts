import { DefaultTheme } from 'styled-components';
const fontSizes = {
  form: '40px',
  searchTitle: '34px',
  input: '28px',
  placeName: '40px',
  roadAddressName: '30px',
  phone: '30px',
};
const colors = {
  main: '#e92328',
  white: '#ffffff',
  header: '#f2d0ae',
  brown: '#5E2F1A',
  skeleton: '#f2d0aa',
  lightYellow: '#f3e7aa',
};
const theme: DefaultTheme = {
  fontSizes,
  colors,
};
export default theme;
