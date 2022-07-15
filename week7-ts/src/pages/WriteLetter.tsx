import styled from 'styled-components';

import LetterForm from '../components/LetterForm';
export default function WriteLetter() {
  return (
    <StContainer>
      <h1>비밀 편지를 써보세요!</h1>
      <LetterForm letterInfo={null} />
    </StContainer>
  );
}

const StContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  & > h1 {
    width: 100%;
    padding: 4rem 0;

    color: ${({ theme }) => theme.colors.letter_white};
    ${({ theme }) => theme.fonts.letter_h1};

    background-color: ${({ theme }) => theme.colors.letter_purple01};
    text-align: center;
  }
`;
