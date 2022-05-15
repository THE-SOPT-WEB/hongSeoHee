import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import WorldCupHeader from "./WorldCupHeader";
import IntroContent from "./IntroContent";
import WorldCupContent from "./WorldCupContent";
import ResultContent from "./ResultContent";
const { MainHeader } = WorldCupHeader;
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainHeader />
        <Routes>
          <Route path="/" element={<IntroContent />} />
          <Route path="/worldCup" element={<WorldCupContent />} />
          <Route path="/result" element={<ResultContent />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
