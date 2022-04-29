import styled, { css } from "styled-components";

const CustomHeader = styled.span`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      padding: 2rem;
      background-color: ${theme.colors.yellow};
      font-family: ${theme.fonts.family};
      font-size: ${theme.fonts.size.header};
      color: ${theme.colors.brown};
    `;
  }}
`;
const WorldCupContentHeader = styled(CustomHeader)`
  ${({ theme }) => {
    return css`
      padding: 1rem;
      font-size: ${theme.fonts.size.round};
    `;
  }}
`;
const styledComponents = {
  CustomHeader,
  WorldCupContentHeader,
};
export default styledComponents;
