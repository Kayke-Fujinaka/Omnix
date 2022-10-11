import { Label, Input } from "@/components";
import * as S from "./styles"

export function Form() {
  return (
    <S.Container>
      <Label htmlFor="cep">É necessário inserir o seu CEP para prosseguir</Label>
      <Input
        id="cep"
        type="cep"
        placeholder="Insira seu CEP"
        autoComplete="off"
      />
    </S.Container>
  );
}
