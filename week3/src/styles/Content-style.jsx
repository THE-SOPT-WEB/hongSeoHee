import styled, { css, keyframes } from "styled-components";
const imageClick = keyframes`
 50% {
    transform: scale(0.8);
  }
`;
const ContentWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80vh;
      overflow: hidden;
    `;
  }}
  .imageClick {
    animation: ${imageClick} 0.4s infinite linear alternate;
  }
`;

const ResultWrapper = styled(ContentWrapper)`
  flex-direction: column;
`;
const ContentImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${(props) => props.imgUrl});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: contain;
`;
const FirecrackerImg = styled(ContentImg)`
  width: 50%;
  background-position: ${(props) => props.postion};
`;
const ContentName = styled.h2`
  ${({ theme }) => {
    return css`
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translateX(-50%);
      font-family: ${theme.fonts.family};
      font-size: 100px;
      font-style: italic;
      color: ${theme.colors.title};
      text-shadow: 2px 1px 1px #000;
    `;
  }}
`;
const ResultTitle = styled(ContentName)`
  top: 18%;
  font-size: 80px;
  font-style: normal;
  z-index: 1;
`;
const ResultName = styled(ContentName)`
  top: 83%;
  font-size: 80px;
  font-style: normal;
`;
const GameButton = styled.div`
  ${({ theme }) => {
    return css`
      height: fit-content;
      padding: 20px;
      margin: 20px;
      background-color: ${theme.colors.yellow};
      border-radius: 40px;
      font-family: ${theme.fonts.family};
      font-size: 60px;
      color: ${theme.colors.brown};
      text-shadow: 2px 1px 1px #000;
    `;
  }}
`;

const VersusDiv = styled.div`
  ${({ theme }) => {
    return css`
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translateX(-50%);

      font-family: ${theme.fonts.family};
      font-size: 100px;
      color: ${theme.colors.title};
      text-shadow: 2px 1px 1px #000;
      z-index: 1;
    `;
  }}
`;

const styledComponents = {
  ContentWrapper,
  ResultWrapper,
  ContentImg,
  FirecrackerImg,
  ContentName,
  ResultTitle,
  ResultName,
  GameButton,
  VersusDiv,
};
export default styledComponents;
