import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    height: 3rem;
    width: 100%;
    padding-left: 10px;
    font-size: ${theme.fonts.size.xs};
    
    ::placeholder {
      font-size: ${theme.fonts.size.xs};
    }
  `}
`;