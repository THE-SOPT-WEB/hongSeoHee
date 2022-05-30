import React from 'react';
import { useNavigate } from 'react-router';
import styled, { keyframes } from 'styled-components';

import { EmoticonItem } from '../../assets/images';

interface WorldCupSectionProps {
  emoticons: EmoticonItem[];
  winners: EmoticonItem[];
  round: number[];
  handleEmoticons: (newEmoticons: EmoticonItem[]) => void;
  handleWinners: (newWinner: EmoticonItem[]) => void;
  handleRound: (newRound: number[]) => void;
  handleTitle: (newTitle: string) => void;
}
export default function WorldCupSection(props: WorldCupSectionProps) {
  const { emoticons, winners, round, handleEmoticons, handleWinners, handleRound, handleTitle } = props;

  const navigate = useNavigate();

  const handleClickImage = (emoticon: EmoticonItem) => (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) {
      const image = event.target;
      image.classList.add('imageClick');

      setTimeout(() => {
        image.classList.remove('imageClick');
        if (emoticons.length > 2) {
          handleWinners([...winners, emoticon]);
          handleEmoticons(emoticons.slice(2));
          handleRound([round[0] + 1, round[1]]);
        } else {
          if (winners.length === 0) {
            navigate('/result', { state: emoticon });
          } else {
            const nextStepEmoticon = [...winners, emoticon];
            handleEmoticons(nextStepEmoticon);
            handleWinners([]);
            handleRound([1, round[1] / 2]);
            if (round[1] / 2 === 2) handleTitle('준결승');
            if (round[1] / 2 === 1) handleTitle('결승');
          }
        }
      }, 1000);
    }
  };
  if (emoticons.length === 0) return <StWorldCupWrapper />;
  console.log(winners);
  return (
    <StWorldCupWrapper>
      <StArticleImg imgUrl={emoticons[0].url} onClick={handleClickImage(emoticons[0])}>
        <StArticleTitle>{emoticons[0].name}</StArticleTitle>
      </StArticleImg>
      <StArticleImg imgUrl={emoticons[1].url} onClick={handleClickImage(emoticons[1])}>
        <StArticleTitle>{emoticons[1].name}</StArticleTitle>
      </StArticleImg>
      <StVersus>VS</StVersus>
    </StWorldCupWrapper>
  );
}
const imageClick = keyframes`
 50% {
    transform: scale(0.8);
  }
`;
const StWorldCupWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  overflow: hidden;

  .imageClick {
    animation: ${imageClick} 0.4s infinite linear alternate;
  }
`;
const StArticleImg = styled.div<{ imgUrl: string }>`
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
const StArticleTitle = styled.span`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.title};
  text-shadow: 0.2rem 0.1rem 0.1rem #000;
`;
const StVersus = styled(StArticleTitle)`
  top: 80%;
  font-style: normal;
  z-index: 1;
`;
