import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.normal};
    color: ${theme.colors.black};
  `}
`;
