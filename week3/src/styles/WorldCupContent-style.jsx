import styled, { css } from "styled-components";

const WorldCupDiv = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      width: 100%;
      height: 80vh;
      overflow: hidden;
      background-color: ${theme.colors.yellow};
    `;
  }}
`;
const ContentImg = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: cover;
`;
const ContentTitle = styled.h2`
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
const styledComponents = { WorldCupDiv, ContentImg, ContentTitle, VersusDiv };
export default styledComponents;
