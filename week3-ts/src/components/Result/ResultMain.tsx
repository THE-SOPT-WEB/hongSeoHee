import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

import { EmoticonItem } from '../../assets/images';
import leftFirecracker from '../../assets/images/left.jpg';
import rightFirecracker from '../../assets/images/right.jpg';

interface ResultLocation {
  state: EmoticonItem;
}
export default function ResultMain() {
  const { state } = useLocation() as ResultLocation;
  const navigate = useNavigate();

  const handleHomeButton = () => navigate('/');
  const handleGameAgainButton = () => navigate('/worldCup');

  return (
    <>
      <StResultWrapper>
        <StFirecrackerImg imgUrl={leftFirecracker} position={'20%'} />

        <StArticleImg imgUrl={state.url}>
          <StArticleTitle>{state.name}</StArticleTitle>
        </StArticleImg>
        <StFirecrackerImg imgUrl={rightFirecracker} position={'80%'} />
      </StResultWrapper>
      <StButtonWrapper>
        <StButton onClick={handleGameAgainButton}>GAME AGAIN</StButton>
        <StButton onClick={handleHomeButton}>HOME</StButton>
      </StButtonWrapper>
    </>
  );
}
const StResultWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StFirecrackerImg = styled.div<{ imgUrl: string; position: string }>`
  position: relative;
  width: 50%;
  height: 50rem;
  overflow: hidden;
  background: url(${(props) => props.imgUrl});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: ${(props) => props.position} center;
  background-size: contain;
`;
const StArticleImg = styled.div<{ imgUrl: string }>`
  position: relative;
  width: 100%;
  height: 50rem;
  overflow: hidden;
  background: url(${(props) => props.imgUrl});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: contain;
`;
const StArticleTitle = styled.span`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 8rem;
  font-style: normal;
  color: ${({ theme }) => theme.colors.title};
  text-shadow: 0.2rem 0.1rem 0.1rem #000;
  z-index: 1;
`;
const StButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StButton = styled.div`
  height: fit-content;
  padding: 2rem;
  margin: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 4rem;
  box-shadow: 0.2rem 0.2rem 0.2rem ${({ theme }) => theme.colors.darkYellow};

  font-size: 6rem;
  color: ${({ theme }) => theme.colors.brown};
  text-shadow: 0.2rem 0.1rem 0.1rem #000;
`;
