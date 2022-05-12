import { storeSearch } from 'libs/api';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import choiceBread from '../assets/images/choiceBread.png';
import noChoiceBread from '../assets/images/noChoiceBread.png';
function Header(props) {
  const { handleIsSearch, handleResults } = props;
  const position = useRef(null);
  const searchRef = useRef(null);
  const [input, setInput] = useState('');
  const [isLocation, setIsLocation] = useState(false);

  const storeSearchHttpHandler = async params => {
    const { data } = await storeSearch(params);

    handleIsSearch(false);
    handleResults(data.documents);
  };

  const handleMyLocation = () => {};
  const handleInputDisabled = () => {};
  const handleInputChange = e => {
    setInput(e.target.value);
  };
  const handleSumbit = e => {};
  return (
    <HeaderContainer>
      <h1>🍰 빵수니가 져아 🍰 </h1>
      <HeaderWrapper>
        <SearchButton choice={isLocation} onClick={handleInputDisabled}>
          현위치
        </SearchButton>
        <SearchLabel>우리 동네 </SearchLabel>
        <SearchInput
          ref={searchRef}
          type="text"
          onChange={handleInputChange}
          value={input}
          placeholder="지역을 입력해주세요"
        />
        <SearchButton choice={handleIsSearch} type="submit" onClick={handleSumbit}>
          검색
        </SearchButton>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
export default Header;

const HeaderContainer = styled.header`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 3rem;
      background-color: ${theme.colors.header};

      color: ${theme.colors.brown};
    `;
  }}
`;
const HeaderWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      color: ${theme.colors.brown};
      font-size: ${theme.fontSizes.form};
    `;
  }}
`;
const SearchButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: 30px;
      margin: 10px;
      border: none;
      background: url(${({ choice }) => (choice ? choiceBread : noChoiceBread)});
      background-repeat: no-repeat;
      background-position: 50% center;
      background-size: contain;
      color: ${({ choice }) => (choice ? theme.colors.white : theme.colors.brown)};
      font-size: ${theme.fontSizes.searchTitle};
    `;
  }}
  &:hover {
    background: url(${choiceBread});
    background-repeat: no-repeat;
    background-position: 50% center;
    background-size: contain;
    color: white;
    cursor: pointer;
  }
`;
const SearchLabel = styled.label`
  ${({ theme }) => {
    return css`
      padding: 30px;
      background: url(${noChoiceBread});
      background-repeat: no-repeat;
      background-position: 50% center;
      background-size: contain;
      color: ${theme.colors.brown};
      font-size: ${theme.fontSizes.searchTitle};
    `;
  }}
`;
const SearchInput = styled.input`
  ${({ theme }) => {
    return css`
      margin: 10px;
      color: ${theme.colors.brown};
      font-size: ${theme.fontSizes.input};
    `;
  }}
`;
