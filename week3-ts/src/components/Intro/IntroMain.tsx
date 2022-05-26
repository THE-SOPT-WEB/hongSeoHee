import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import mainImageUrl from '../../assets/images/메인옴팡이.gif';

export default function IntroMain() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/worldCup');
  return (
    <StIntroWrapper>
      <StContentImg imgUrl={mainImageUrl} />
      <StGameButton onClick={handleClick}>GAME START</StGameButton>
    </StIntroWrapper>
  );
}
const StIntroWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: 1rem;
  overflow: hidden;
`;
const StContentImg = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${(props) => props.imgUrl});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: contain;
`;
const StGameButton = styled.div`
  height: fit-content;
  padding: 2rem;
  margin: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 4rem;
  box-shadow: 0.2rem 0.4rem 0.2rem ${({ theme }) => theme.colors.darkYellow};
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.brown};
  text-shadow: 0.2rem 0.1rem 0.1rem #000;
`;
