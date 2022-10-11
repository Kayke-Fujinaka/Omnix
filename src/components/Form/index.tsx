/* eslint-disable react-hooks/rules-of-hooks */
import { FieldValues, useForm } from "react-hook-form";
import { useCheck } from "@/contexts/useCEP";
import { Label, Input, Button } from "@/components";
import * as S from "./styles";
import Router from "next/router";

export function Form() {
  const { register, handleSubmit } = useForm();
  const { useCheckCEP } = useCheck();

  const onSubmit = (e: FieldValues) => {
    useCheckCEP(e);
    Router.push("/offers");
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="cep">
        É necessário inserir o seu CEP para prosseguir
      </Label>
      <Input
        id="cep"
        type="number"
        placeholder="Insira seu CEP"
        autoComplete="off"
        {...register("cep")}
        onBlur={useCheckCEP}
      />
      <Button type="submit">Enviar</Button>
    </S.Container>
  );
}
