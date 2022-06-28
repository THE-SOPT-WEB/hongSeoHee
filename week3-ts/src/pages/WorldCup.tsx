import React, { useEffect, useState } from 'react';

import { EmoticonItem, emoticonItems } from '../assets/images';
import Header from '../components/common/Header';
import WorldCupSection from '../components/WorldCup/WorldCupSection';
export default function WorldCup() {
  const [emoticons, setEmoticons] = useState<EmoticonItem[]>([]);
  const [winners, setWinners] = useState<EmoticonItem[]>([]);
  const [round, setRound] = useState<number[]>([1, 8]);
  const [title, setTitle] = useState<string>('대결');

  useEffect(() => {
    emoticonItems.sort(() => Math.random() - 0.5);
    setEmoticons(emoticonItems);
  }, []);

  const handleEmoticons = (newEmoticons: EmoticonItem[]) => {
    setEmoticons(newEmoticons);
  };

  const handleWinners = (newWinner: EmoticonItem[]) => {
    setWinners(newWinner);
  };
  const handleRound = (newRound: number[]) => {
    setRound(newRound);
  };
  const handleTitle = (newTitle: string) => {
    setTitle(newTitle);
  };
  return (
    <>
      <Header title={title} round={round} />
      <WorldCupSection
        emoticons={emoticons}
        winners={winners}
        round={round}
        handleEmoticons={handleEmoticons}
        handleWinners={handleWinners}
        handleRound={handleRound}
        handleTitle={handleTitle}
      />
    </>
  );
}
