import styled, { css } from "styled-components";
const TitleHeader = styled.span`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      padding: 2rem;
      background-color: ${theme.colors.yellow};
      font-family: ${theme.fonts.family};
      font-size: ${theme.fonts.size.header};
      color: ${theme.colors.brown};
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
        0 0 40px ${theme.colors.yellow}, 0 0 70px ${theme.colors.yellow},
        0 0 80px ${theme.colors.yellow}, 0 0 100px ${theme.colors.yellow};
    `;
  }}
`;
const WorldCupContentHeader = styled(TitleHeader)`
  ${({ theme }) => {
    return css`
      padding: 0.4rem;
      font-size: ${theme.fonts.size.round};
      text-shadow: none;
    `;
  }}
`;
const styledComponents = {
  TitleHeader,
  WorldCupContentHeader,
};
export default styledComponents;
