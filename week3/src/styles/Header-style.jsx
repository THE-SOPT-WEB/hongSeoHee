import styled, { css } from "styled-components";

const CustomHeader = styled.div`
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

const styledComponents = { CustomHeader };
export default styledComponents;
