import React from "react";
import { useNavigate, useLocation } from "react-router";

import leftFirecracker from "../assets/images/left.jpg";
import rightFirecracker from "../assets/images/right.jpg";
import styledComponents from "../styles/Content-style";
const {
  ResultWrapper,
  ButtonWrapper,
  ResultTitle,
  FirecrackerImg,
  ContentWrapper,
  ContentImg,
  ResultName,
  GameButton,
} = styledComponents;

const ResultContent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => navigate("/worldCup");
  const homeClick = () => navigate("/");
  return (
    <>
      <ResultWrapper>
        <ResultTitle>승리자</ResultTitle>

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
        <ButtonWrapper>
          <GameButton onClick={handleClick}>GAME AGAIN</GameButton>
          <GameButton onClick={homeClick}>HOME</GameButton>
        </ButtonWrapper>
      </ResultWrapper>
    </>
  );
};

export default ResultContent;
