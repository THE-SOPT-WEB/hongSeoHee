import styled, { css, keyframes } from 'styled-components';

import resultBread from '../../assets/images/resultBread.png';
const loading = keyframes`
0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  padding: 3%;
  margin: 10px;
  background: url(${resultBread});
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: 50% 100%;

  .placeName {
    ${({ theme }) => {
      return css`
        padding: 40px;
        font-size: ${theme.fontSizes.placeName};
        text-decoration: none;
        color: ${theme.colors.white};
      `;
    }}
  }
  .roadAddressName {
    ${({ theme }) => {
      return css`
        padding: 10px;
        font-size: ${theme.fontSizes.roadAddressName};
        color: ${theme.colors.brown};
      `;
    }}
  }
  .phone {
    ${({ theme }) => {
      return css`
        padding: 10px;

        font-size: ${theme.fontSizes.phone};
        color: ${theme.colors.brown};
      `;
    }}
  }
  .skeleton::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    background: linear-gradient(to right, #f2d0aa, #ddd, #f2d0aa);
    animation: ${loading} 2s infinite linear;
  }

  .skeleton {
    width: 30%;
    height:30px;
    margin-top: 30px;
    position: relative;
    overflow: hidden;
    ${({ theme }) => {
      return css`
        background: ${theme.colors.skeleton};
      `;
    }}
  }
  
  }
`;
