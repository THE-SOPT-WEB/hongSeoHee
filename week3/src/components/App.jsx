import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import IntroContent from "./IntroContent";
import WorldCupContent from "./WorldCupContent";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header></Header>
        <Routes>
          <Route path="/" element={<IntroContent />} />
          <Route path="/worldCup" element={<WorldCupContent />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
