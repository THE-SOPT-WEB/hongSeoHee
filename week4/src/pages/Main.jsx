import Header from 'components/Header';
import ResultsSection from 'components/ResultsSection';
import React, { useState } from 'react';
import styled from 'styled-components';
function Main() {
  const [results, setResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleIsSearch = newIsSearch => {
    setIsSearch(newIsSearch);
  };
  const handleResults = newResults => {
    setResults(newResults);
  };

  return (
    <StyledWrapper>
      <Header handleIsSearch={handleIsSearch} handleResults={handleResults} />
      <StlyedSectionContainer>
        <ResultsSection isSearch={isSearch} results={results} />
      </StlyedSectionContainer>
    </StyledWrapper>
  );
}

export default Main;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-size: 70px;
  h1 {
    text-align: center;
    text-shadow: 1px 2px 3px white;
  }
`;
const StlyedSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
