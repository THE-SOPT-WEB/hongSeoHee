import React from "react";
import { useNavigate } from "react-router";
import styledComponents from "../styles/Content-style";
import mainImageUrl from "../assets/images/메인옴팡이.gif";
const { IntroWrapper, ContentImg, GameButton } = styledComponents;

const IntroContent = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/worldCup");
  console.log(mainImageUrl);
  return (
    <IntroWrapper>
      <ContentImg imgUrl={mainImageUrl} />
      <GameButton onClick={handleClick}>GAME START</GameButton>
    </IntroWrapper>
  );
};

export default IntroContent;
