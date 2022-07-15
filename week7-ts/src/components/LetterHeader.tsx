import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function LetterHeader() {
  return (
    <>
      <h1>WEB SECRET MAILBOX</h1>
      <StLetterLink to="/write">Write</StLetterLink>
    </>
  );
}
const StLetterLink = styled(Link)`
  position: absolute;

  top: 2.2rem;
  right: 4rem;
  padding: 2rem 2.5rem;
  border-radius: 1.8rem;

  ${({ theme }) => theme.fonts.letter_b1};

  background-color: ${({ theme }) => theme.colors.letter_purple02};
`;
