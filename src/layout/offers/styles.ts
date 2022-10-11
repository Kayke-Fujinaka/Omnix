import styled from "styled-components";

export const Container = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 100vh;
`;

export const Content = styled.main`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-inline: 10px;
  gap: 25px;

  > button {
    align-self: flex-end;
  }

  @media (min-width: 750px) {
    padding-inline: 25px;
  }

  @media (min-width: 1000px) {
    padding-inline: 50px;
  }
`;

export const WrapperCards = styled.main`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
