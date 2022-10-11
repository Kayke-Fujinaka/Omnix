import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    text-align: center;
    padding: 10px 35px;
    background-color: ${theme.colors.blue_500};

    h1 {
      font-size: ${theme.fonts.size.xl1};
      color: ${theme.colors.white};
    }
  `}
`;
