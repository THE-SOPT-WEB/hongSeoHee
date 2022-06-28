import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LetterFormProps, PatchBody } from '../utils/dataType';
import { patchLetter, postLetter } from '../utils/lib/api';
const letterInfoList = [
  { label: '이름', id: 'name', placeholder: '이름이 뭐에요?' },
  {
    label: '내용',
    id: 'content',
    placeholder: '무슨 내용의 편지를 써볼까요?',
  },
  {
    label: '비밀번호',
    id: 'password',
    placeholder: '비밀번호를 통해 편지를 잠궈보아요.',
    type: 'password',
  },
  {
    label: '비밀번호 힌트',
    id: 'hint',
    placeholder: '누군가 내 비밀편지를 보도록 비밀번호 힌트를 주세요.',
  },
];
export default function LetterForm(props: LetterFormProps) {
  const { letterInfo } = props;

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLInputElement | HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const formData = new FormData();

    if (!letterInfo) {
      Array.from(target.childNodes).forEach((input) => {
        Array.from(input.childNodes).forEach((node: ChildNode | HTMLInputElement) => {
          if (node.nodeName === 'INPUT' && node instanceof HTMLInputElement) {
            if (node.type === 'file' && node.files) {
              Array.from(node.files).forEach((file) => {
                formData.append(node.id, file);
              });
            } else {
              formData.append(node.id, node.value);
            }
          }
        });
      });
      await postLetter(formData);
    } else {
      const reqBody: PatchBody = {};
      Array.from(target.childNodes).forEach((input) => {
        Array.from(input.childNodes).forEach((node: ChildNode | HTMLInputElement) => {
          if (node.nodeName === 'INPUT' && node instanceof HTMLInputElement) {
            if (node.id === 'name' || node.id === 'hint' || node.id === 'password' || node.id === 'content') {
              if (letterInfo[node.id] !== node.value) reqBody[node.id] = node.value;
            }
          }
        });
      });
      await patchLetter(letterInfo._id, reqBody);
    }
    navigate('/');
  };

  const fillInputValue = (ref: HTMLInputElement) => {
    if (ref && letterInfo) {
      if (ref.id === 'name' || ref.id === 'content' || ref.id === 'hint' || ref.id === 'password')
        ref.value = letterInfo[ref.id];
    }
  };

  return (
    <StLetterFrom onSubmit={handleSubmit}>
      {letterInfoList.map(({ label, id, placeholder, type }) => (
        <StInputWrapper key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type || 'text'} placeholder={placeholder} id={id} ref={fillInputValue} />
        </StInputWrapper>
      ))}

      {!letterInfo && (
        <StInputWrapper>
          <label htmlFor="images">썸네일</label>
          <StFileSubmitButton
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current && fileInputRef.current.click();
            }}>
            이미지 업로드 (jpg, jpeg, png)
          </StFileSubmitButton>
          <input type="file" accept="image/*" id="images" multiple ref={fileInputRef} style={{ display: 'none' }} />
        </StInputWrapper>
      )}

      <StSubmitButton type="submit">{letterInfo ? '몰래 수정하기' : '비밀편지 보내기'}</StSubmitButton>
    </StLetterFrom>
  );
}
const StLetterFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 50rem;
  border-radius: 2rem;
  box-shadow: 0.5rem 0.5rem 1rem 0.5rem lightgray;
  background-color: ${({ theme }) => theme.colors.letter_purple04};
  & input {
    width: 100%;
    outline: none;
    padding: 1rem;
    border: none;
    border-radius: 1.8rem;
    ${({ theme }) => theme.fonts.letter_b3};
  }
  & label {
    margin: 1rem 0 0 1rem;
    ${({ theme }) => theme.fonts.letter_b2};
    color: ${({ theme }) => theme.colors.letter_purple01};
  }
`;

const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StSubmitButton = styled.button`
  border-radius: 0.8rem;

  padding: 1rem 0;
  border: none;

  ${({ theme }) => theme.fonts.letter_h1};
  background-color: ${({ theme }) => theme.colors.letter_purple01};
  &:hover {
    transform: scale(0.97);
  }
`;

const StFileSubmitButton = styled(StSubmitButton)`
  padding: 0.5rem 3rem;
  ${({ theme }) => theme.fonts.letter_b3};
  background-color: ${({ theme }) => theme.colors.letter_purple02};
`;
