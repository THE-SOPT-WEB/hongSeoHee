import React from "react";
import { useNavigate } from "react-router";
import styledComponents from "../styles/IntroContent-style";
const { IntroWrapper, GameButton } = styledComponents;

const IntroContent = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/worldCup");
  return (
    <IntroWrapper>
      <GameButton onClick={handleClick}>GAME START</GameButton>
    </IntroWrapper>
  );
};

export default IntroContent;
