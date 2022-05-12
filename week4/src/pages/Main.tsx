import Header from 'components/Header';
import ResultsSection from 'components/ResultsSection';
import { Result } from 'core/resultsType';
import React, { useState } from 'react';
import styled from 'styled-components';
function Main() {
  const [results, setResults] = useState<Result[]>([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleIsSearch = (newIsSearch: boolean) => {
    setIsSearch(newIsSearch);
  };
  const handleResults = (newResults: Result[]) => {
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
