import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import WorldCupHeader from "./WorldCupHeader";
import styledComponents from "../styles/Content-style";
import { emoticonItems } from "../assets/images/";
const { RoundHeader } = WorldCupHeader;
const { ContentWrapper, ContentImg, ContentName, VersusDiv } = styledComponents;

const WorldCupContent = () => {
  const navigate = useNavigate();
  const [emoticons, setEmoticons] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [round, setRound] = useState([1, 8]);
  const [title, setTitle] = useState("대결");

  useEffect(() => {
    emoticonItems.sort(() => Math.random() - 0.5);
    setEmoticons(emoticonItems);
    setDisplays([emoticonItems[0], emoticonItems[1]]);
  }, []);
  const clickHandler = (emoticon) => (event) => {
    console.log(event.target.classList);
    event.target.classList.add("imageClick");
    setTimeout(() => {
      event.target.classList.remove("imageClick");
      if (emoticons.length > 2) {
        setWinners([...winners, emoticon]);
        setDisplays([emoticons[2], emoticons[3]]);
        setEmoticons(emoticons.slice(2));
        setRound([round[0] + 1, round[1]]);
      } else {
        if (winners.length === 0) {
          setDisplays([emoticon]);
          navigate("/result", { state: emoticon });
        } else {
          const nextStepEmoticon = [...winners, emoticon];
          setEmoticons(nextStepEmoticon);
          setDisplays([nextStepEmoticon[0], nextStepEmoticon[1]]);
          setWinners([]);
          setRound([1, round[1] / 2]);
          if (round[1] / 2 === 2) setTitle("준결승");
          if (round[1] / 2 === 1) setTitle("결승");
        }
      }
    }, 2000);
  };

  return (
    <>
      <RoundHeader title={title} round={round}></RoundHeader>
      <ContentWrapper>
        {displays.map((display) => {
          return (
            <ContentImg
              key={display.name}
              imgUrl={display.url}
              onClick={clickHandler(display)}
            >
              <ContentName key={display.name}>{display.name}</ContentName>
            </ContentImg>
          );
        })}
        <VersusDiv>VS</VersusDiv>
      </ContentWrapper>
    </>
  );
};
export default WorldCupContent;
