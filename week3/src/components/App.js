import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import "../styles/App.css";
import Header from "./Header";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
