import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title?: string;
  round?: number[];
}
export default function Header(props: HeaderProps) {
  const { title, round } = props;
  return (
    <>
      <StHeader>💖 꺄아ㅏㅏ너므 귀여워 💖</StHeader>
      <StSubHeader>
        {title !== undefined ? `${title}` : ''}
        {round !== undefined ? ` ${round[0]}/${round[1]}` : ''}
      </StSubHeader>
    </>
  );
}

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.brown};
  text-shadow: 0 0 0.6rem #fff, 0 0 0.4rem #fff, 0 0 0.6rem #fff, 0 0 0.8rem ${({ theme }) => theme.colors.yellow},
    0 0 1.4rem ${({ theme }) => theme.colors.yellow}, 0 0 1.6rem ${({ theme }) => theme.colors.yellow},
    0 0 2rem ${({ theme }) => theme.colors.yellow};
`;

const StSubHeader = styled(StHeader)`
  ${({ theme }) => theme.fonts.round};

  padding: 0.4rem;
  text-shadow: none;
`;
