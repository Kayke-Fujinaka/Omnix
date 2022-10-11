import { IHeader } from "@/interfaces";
import * as S from "./styles"

export function Header({ children }: IHeader) {
  return (
    <S.Container>
      <h1>{children}</h1>
    </S.Container>
  );
}
