import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import lock from '../assets/lock.png';
import { LetterInfo, LetterProps } from '../utils/dataType';
import Modal from './Modal';

export default function Letter(props: LetterProps) {
  const { letterInfo } = props;
  const { name, password, content, images, hint } = letterInfo;

  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [choiceLetter, setChoiceLetter] = useState<Pick<LetterInfo, 'hint' | 'password'>>();
  const navigate = useNavigate();

  const handleLockButton = () => {
    setIsOpen(true);
    setChoiceLetter({ hint, password });
  };
  const handleEditButton = () => {
    navigate('/edit', { state: letterInfo });
  };

  return (
    <>
      {choiceLetter && (
        <Modal
          letterInfo={choiceLetter}
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          checkAnswer={(isCorrect: boolean) => setIsLocked(isCorrect)}
        />
      )}
      <StRoot>
        {isLocked ? (
          <LockButton onClick={handleLockButton} />
        ) : (
          <StLetter>
            <StImageList>
              {images?.map((url) => (
                <StImage key={url} url={url} />
              ))}
            </StImageList>
            <StName>
              <b>{name}</b>님이 남긴 편지에요.
            </StName>
            <StContent>{content}</StContent>
            <StEditButton type="button" onClick={handleEditButton}>
              내맘대로 수정하기
            </StEditButton>
          </StLetter>
        )}
      </StRoot>
    </>
  );
}
const StRoot = styled.article`
  position: relative;
  min-width: 40rem;
  min-height: 45rem;
`;

const LockButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 95%;
  border: none;

  background-color: ${({ theme }) => theme.colors.letter_purple03};
  background-image: url(${lock});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const StLetter = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  width: 95%;
  height: 95%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.letter_purple04};
`;

const StImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

const StImage = styled.li<{ url: string }>`
  width: 10rem;
  height: 10rem;
  border-radius: 10%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StName = styled.p`
  padding: 1rem;
  ${({ theme }) => theme.fonts.letter_b2};
  background-color: ${({ theme }) => theme.colors.letter_purple01};
  color: ${({ theme }) => theme.colors.letter_white};
  & > b {
    color: ${({ theme }) => theme.colors.letter_purple02};
  }
`;

const StContent = styled.p`
  ${({ theme }) => theme.fonts.letter_b1};
`;

const StEditButton = styled.button`
  width: fit-content;
  padding: 1rem 2rem;
  margin-top: auto;

  border-radius: 1.8rem;

  ${({ theme }) => theme.fonts.letter_b2};
  background-color: ${({ theme }) => theme.colors.letter_purple02};
  align-self: center;
`;
