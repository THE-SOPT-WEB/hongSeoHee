import React from 'react';
import ReactDOM from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset } from 'styled-reset';

import App from './App';
import theme from './style/theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Jua', sans-serif;
    box-sizing: border-box;
  } 
  
  html {
    font-family: 'Jua', sans-serif;
    font-size: 62.5%;
    letter-spacing: -0.03rem;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  input {
    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    appearance: none;
    
    & : focus {
      outline: none;
    }
  }
`;
const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
