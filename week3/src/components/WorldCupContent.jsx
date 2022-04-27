import React, { useState, useEffect } from "react";
import styledComponents from "../styles/WorldCupContent-style";
import { emoticonItems } from "../assets/images";
const { WorldCupDiv, ContentImg, ContentTitle, VersusDiv } = styledComponents;

const WorldCupContent = () => {
  const [emoticons, setEmoticons] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    emoticonItems.sort(() => Math.random() - 0.5);
    setEmoticons(emoticonItems);
    setDisplays([emoticonItems[0], emoticonItems[1]]);
  }, []);
  const clickHandler = (emoticon) => (event) => {
    if (emoticons.length > 2) {
      setWinners([...winners, emoticon]);
      setDisplays([emoticonItems[2], emoticonItems[3]]);
      setEmoticons(emoticons.slice(2));
    }
  };

  return (
    <WorldCupDiv>
      {displays.map((display) => {
        return (
          <ContentImg
            key={display.name}
            imgUrl={display.url}
            onClick={clickHandler(display)}
          >
            <ContentTitle key={display.name}>{display.name}</ContentTitle>
          </ContentImg>
        );
      })}
      <VersusDiv>VS</VersusDiv>
    </WorldCupDiv>
  );
};
export default WorldCupContent;
