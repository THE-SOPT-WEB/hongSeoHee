import React, { useState, useEffect } from "react";
import styledComponents from "../styles/WorldCupContent-style";
const { WorldCupDiv, ContentImg, ContentTitle, VersusDiv } = styledComponents;

const WorldCupContent = () => {
  return (
    <WorldCupDiv>
      <VersusDiv>VS</VersusDiv>
    </WorldCupDiv>
  );
};
export default WorldCupContent;
