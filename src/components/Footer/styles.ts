import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    padding-block: 10px;
    background-color: ${theme.colors.blue_500};

    h1 {
      font-size: ${theme.fonts.size.md};
      color: ${theme.colors.white};
    }
  `}
`;
