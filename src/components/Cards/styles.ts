import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    min-width: 110px;
    background-color: ${theme.colors.blue_900};
    color: ${theme.colors.white};
    cursor: pointer;

    @media (min-width: 500px) {
      min-height: 250px;
      min-width: 150px;
    }

    @media (min-width: 750px) {
      min-height: 250px;
      min-width: 200px;
    }

    @media (min-width: 1000px) {
      min-height: 350px;
      min-width: 300px;
    }
  `}
`;
