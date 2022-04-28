import React from "react";
import { useNavigate, useLocation } from "react-router";
import leftFirecracker from "../assets/images/left.jpg";
import rightFirecracker from "../assets/images/right.jpg";
import styledComponents from "../styles/Content-style";
const {
  ResultWrapper,
  FirecrackerImg,
  ContentWrapper,
  ContentImg,
  ResultName,
  GameButton,
} = styledComponents;

const ResultContent = () => {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const handleClick = () => navigate("/worldCup");
  return (
    <ResultWrapper>
      <ContentWrapper>
        <FirecrackerImg
          imgUrl={leftFirecracker}
          postion={"20%"}
        ></FirecrackerImg>
        <ContentImg imgUrl={state.url}>
          <ResultName>{state.name}</ResultName>
        </ContentImg>
        <FirecrackerImg
          imgUrl={rightFirecracker}
          postion={"80%"}
        ></FirecrackerImg>
      </ContentWrapper>
      <GameButton onClick={handleClick}>GAME AGAIN</GameButton>
    </ResultWrapper>
  );
};

export default ResultContent;
