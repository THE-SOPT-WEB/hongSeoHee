import React from "react";
import { useNavigate } from "react-router";
import styledComponents from "../styles/Content-style";
const { ContentWrapper, GameButton } = styledComponents;

const IntroContent = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/worldCup");
  return (
    <ContentWrapper>
      <GameButton onClick={handleClick}>GAME START</GameButton>
    </ContentWrapper>
  );
};

export default IntroContent;
