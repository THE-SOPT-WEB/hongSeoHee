import { Params, Result } from 'core/resultsType';
import { searchStore } from 'libs/api';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import choiceBread from '../assets/images/choiceBread.png';
import noChoiceBread from '../assets/images/noChoiceBread.png';
interface HeaderProps {
  handleIsSearch: (newIsSearch: boolean) => void;

  handleResults: (newResuls: Result[]) => void;
}
interface Coordinates {
  longitude: number;
  latitude: number;
}
function Header(props: HeaderProps) {
  const { handleIsSearch, handleResults } = props;
  const position = useRef<Coordinates>({ longitude: 0, latitude: 0 });
  const searchRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>('');
  const [isLocation, setIsLocation] = useState<boolean>(false);

  const storeSearchHttpHandler = async (params: Params) => {
    const { data } = await searchStore(params);

    handleIsSearch(false);
    handleResults(data.documents);
  };

  const handleMyLocation = () => {
    if (!isLocation) {
      new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((currentPosition) => {
          position.current = currentPosition.coords;
          const params = {
            y: position.current.latitude,
            x: position.current.longitude,
            radius: 1000,
            query: '베이커리',
          };
          storeSearchHttpHandler(params);
        });
      });
    } else {
      const params = {
        y: position.current.latitude,
        x: position.current.longitude,
        radius: 1000,
        query: '베이커리',
      };
      storeSearchHttpHandler(params);
    }
  };

  const handleInputDisabled = () => {
    if (null !== searchRef.current) {
      searchRef.current.disabled = !searchRef.current.disabled;
      setIsLocation((prev) => !prev);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSearchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleIsSearch(true);
    e.preventDefault();
    if (null !== searchRef.current) {
      if (!searchRef.current.disabled) {
        const params: Params = {
          query: input + ' ' + '베이커리',
        };
        storeSearchHttpHandler(params);
      } else {
        handleMyLocation();
      }
    }
  };
  return (
    <StHeaderContainer>
      <h1>🍰 빵수니가 져아 🍰 </h1>
      <StHeaderWrapper>
        <StSearchButton isChoice={isLocation} onClick={handleInputDisabled}>
          현위치
        </StSearchButton>
        <StSearchLabel>우리 동네 </StSearchLabel>
        <StSearchInput
          ref={searchRef}
          type="text"
          onChange={handleInputChange}
          value={input}
          placeholder="지역을 입력해주세요"
        />
        <StSearchButton isChoice={isLocation} type="submit" onClick={handleSearchButton}>
          검색
        </StSearchButton>
      </StHeaderWrapper>
    </StHeaderContainer>
  );
}
export default Header;

interface StHeaderProps {
  isChoice: boolean;
}
const StHeaderContainer = styled.header`
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
const StHeaderWrapper = styled.div`
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
const StSearchButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: 30px;
      margin: 10px;
      border: none;
      background: url(${(props: StHeaderProps) => (props.isChoice ? choiceBread : noChoiceBread)});
      background-repeat: no-repeat;
      background-position: 50% center;
      background-size: contain;
      color: ${(props: StHeaderProps) => (props.isChoice ? theme.colors.white : theme.colors.brown)};
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
const StSearchLabel = styled.label`
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
const StSearchInput = styled.input`
  ${({ theme }) => {
    return css`
      margin: 10px;
      color: ${theme.colors.brown};
      font-size: ${theme.fontSizes.input};
    `;
  }}
`;
