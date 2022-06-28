import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Letter from '../components/Letter';
import LetterHeader from '../components/LetterHeader';
import { LetterInfo } from '../utils/dataType';
import { getLetters } from '../utils/lib/api';
export default function LetterMain() {
  const [letters, setLetters] = useState<LetterInfo[]>([]);
  useEffect(() => {
    async function fetchLetters() {
      const { data } = await getLetters();
      setLetters(data.data);
    }
    fetchLetters();
  }, []);
  return (
    <StMainWrapper>
      <LetterHeader />
      <StLetterSection>
        {letters.map((letter) => (
          <Letter key={letter._id} letterInfo={letter} />
        ))}
      </StLetterSection>
    </StMainWrapper>
  );
}
const StMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > h1 {
    width: 100%;
    padding: 4rem 0;

    color: ${({ theme }) => theme.colors.letter_white};
    ${({ theme }) => theme.fonts.letter_h1};

    background-color: ${({ theme }) => theme.colors.letter_purple01};
    text-align: center;
  }
`;
const StLetterSection = styled.section`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
`;
