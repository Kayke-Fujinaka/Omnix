/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Cards, Footer } from "@/components";
import { Header } from "@/components/Header";
import { useCheck } from "@/contexts/useCEP";
import Router from "next/router";
import { useEffect, useState } from "react";
import * as S from "./styles";

export function OffersLayout() {
  const [infosCEP, setInfosCEP] = useState<any>({} as any);
  const { useRemoveCEP } = useCheck();

  useEffect(() => {
    const infos = JSON.parse(localStorage.getItem("CEP_INFOS") || "{}");
    setInfosCEP(infos);
  }, []);

  function handleRemoveCEP() {
    useRemoveCEP();
    Router.push("/");
  }

  return (
    <S.Container>
      <Header>Confira os nossos planos:</Header>
      <S.Content>
        <div>
          <h1>Seus dados:</h1>
          <p>
            <strong>CEP:</strong> {infosCEP?.cep}
          </p>
          <p>
            <strong>Bairro:</strong> {infosCEP?.bairro}
          </p>
          <p>
            <strong>Localidade:</strong> {infosCEP?.localidade}
          </p>
        </div>
        <S.WrapperCards>
          <Cards plan="Diário" price="R$ 100,00" />
          <Cards plan="Mensal" price="R$ 500,00" />
          <Cards plan="Anual" price="R$ 1500,00" />
        </S.WrapperCards>

        <Button widthSize="md" fullWidth={false} onClick={handleRemoveCEP}>
          Ops, errei meu cep!
        </Button>
      </S.Content>
      <Footer />
    </S.Container>
  );
}
