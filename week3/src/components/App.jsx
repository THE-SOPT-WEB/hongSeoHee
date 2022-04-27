import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import "../styles/App.css";
import Header from "./Header";
import WorldCupContent from "./WorldCupContent";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header></Header>
      <WorldCupContent></WorldCupContent>
    </ThemeProvider>
  );
}

export default App;
