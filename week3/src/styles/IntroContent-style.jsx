import styled, { css } from "styled-components";

const IntroWrapper = styled.div`
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
`;
const GameButton = styled.div`
  ${({ theme }) => {
    return css`
      height: fit-content;
      padding: 20px;

      background-color: ${theme.colors.yellow};
      border-radius: 40px;
      font-family: ${theme.fonts.family};
      font-size: 100px;
      color: ${theme.colors.brown};
      text-shadow: 2px 1px 1px #000;
    `;
  }}
`;

const styledComponents = { IntroWrapper, GameButton };
export default styledComponents;
