import styled, { css } from "styled-components";

import { IButtonStyles } from "@/interfaces";
import { theme } from "@styles/theme";

const buttonColors = {
  default: theme.colors.blue_500,
  white: theme.colors.white,
  black: theme.colors.black,
  none: "transparent",
};

const buttonSizes = {
  width: {
    sm: "10rem",
    md: "14rem",
    lg: "20rem",
  },
};

export const Container = styled.button<IButtonStyles>`
  ${({ theme, background, color, fullWidth, widthSize }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${fullWidth ? "100%" : buttonSizes.width[widthSize]};
    padding: 0.5rem;
    font-size: ${theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.semibold};
    color: ${buttonColors[color]};
    background: ${buttonColors[background]};
    border: none;
    outline: none;
    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
