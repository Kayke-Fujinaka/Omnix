import { Footer, Form, Header } from "@/components";
import * as S from "./styles";

export function HomeLayout() {
  return (
    <S.Container>
      <Header>Seja Bem Vindo!</Header>
      <Form />
      <Footer />
    </S.Container>
  );
}
