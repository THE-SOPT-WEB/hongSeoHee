import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { ModalProps } from '../utils/dataType';

export default function Modal(props: ModalProps) {
  const { letterInfo, isOpen, closeModal, checkAnswer } = props;
  const { hint, password } = letterInfo;
  const [input, setInput] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(true);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOkButton = () => {
    if (input === password) {
      setInput('');
      closeModal();
      checkAnswer(false);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleCancelButton = () => {
    setInput('');
    setIsCorrect(true);
    closeModal();
  };
  return (
    <>
      {isOpen && (
        <StModalWrapper>
          <StModal>
            <h1> PASSWORD </h1>
            <p>HINT : {hint}</p>
            <StInputWrapper>
              <StInput type="text" value={input} onChange={handleInput} />
              {!isCorrect && <StErrorP> ❗️ ERROR ❗️</StErrorP>}
            </StInputWrapper>
            <StButtonWrapper>
              <button type="button" onClick={handleOkButton}>
                OK
              </button>
              <button type="button" onClick={handleCancelButton}>
                cancel
              </button>
            </StButtonWrapper>
          </StModal>
        </StModalWrapper>
      )}
    </>
  );
}
const buttonClick = keyframes`
 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StModalWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const StModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  width: 50rem;
  padding: 2rem 0;

  background: ${({ theme }) => theme.colors.letter_white};
  border-radius: 4rem;

  z-index: 1;
  animation: ${buttonClick} 0.3s ease-in-out;

  & > h1 {
    ${({ theme }) => theme.fonts.letter_h1};
  }
  & > p {
    ${({ theme }) => theme.fonts.letter_b1};
    color: ${({ theme }) => theme.colors.letter_purple02};
  }
`;
const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 40rem;
`;
const StInput = styled.input`
  padding: 2rem 0;

  background-color: ${({ theme }) => theme.colors.letter_purple03};
  border-radius: 15px;

  ${({ theme }) => theme.fonts.letter_b1};
  text-indent: 1rem;
  text-align: center;
`;
const StErrorP = styled.p`
  position: absolute;
  left: 110px;
  bottom: -5rem;
  ${({ theme }) => theme.fonts.letter_b1};
  color: ${({ theme }) => theme.colors.letter_red};
  animation: ${buttonClick} 0.3s ease-in-out;
`;
const StButtonWrapper = styled.div`
  display: flex;
  gap: 3rem;

  margin-top: 4rem;
  & > button {
    padding: 1rem 2rem;

    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.letter_purple01};

    color: ${({ theme }) => theme.colors.letter_white};
    ${({ theme }) => theme.fonts.letter_b3};
    & + button {
      background-color: ${({ theme }) => theme.colors.letter_gray};
    }
  }
`;
