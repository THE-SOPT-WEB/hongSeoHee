import React from "react";
import styledComponents from "../styles/Header-style";
const { CustomHeader } = styledComponents;

const TitleHeader = () => {
  return <CustomHeader>💖 꺄아ㅏㅏ너므 귀여워 💖 </CustomHeader>;
};
const RoundHeader = (props) => {
  return (
    <CustomHeader>
      {props.round[0]}/{props.round[1]}
    </CustomHeader>
  );
};
const WorldCupHeader = {
  TitleHeader,
  RoundHeader,
};
export default WorldCupHeader;
