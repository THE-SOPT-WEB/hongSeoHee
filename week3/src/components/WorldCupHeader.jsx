import React from "react";
import styledComponents from "../styles/Header-style";
const { CustomHeader, WorldCupContentHeader } = styledComponents;

const TitleHeader = () => {
  return <CustomHeader>💖 꺄아ㅏㅏ너므 귀여워 💖 </CustomHeader>;
};

const RoundHeader = (props) => {
  return (
    <WorldCupContentHeader>
      {props.title} {props.round[0]}/{props.round[1]}
    </WorldCupContentHeader>
  );
};
const ResultHeader = (props) => {
  return <WorldCupContentHeader>{props.title}</WorldCupContentHeader>;
};
const WorldCupHeader = {
  TitleHeader,
  RoundHeader,
  ResultHeader,
};
export default WorldCupHeader;
