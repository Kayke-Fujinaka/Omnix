import { createContext, useCallback, useContext } from "react";
import { ICheckCEPContext, IChildren } from "@/interfaces";
import { FieldValues } from "react-hook-form";

const CheckCEPContext = createContext<ICheckCEPContext>({} as ICheckCEPContext);

export const CheckCepProvider = ({ children }: IChildren): JSX.Element => {
  const useCheckCEP = useCallback(async (e: FieldValues) => {
    const cep = e.target?.value.replace(/\D/g, "");
    if (cep)
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("CEP_INFOS", JSON.stringify(data));
        })
        .catch(() => alert("Insira um CEP Válido"));
  }, []);

  const useRemoveCEP = useCallback(() => {
    localStorage.removeItem("CEP_INFOS");
  }, []);

  return (
    <CheckCEPContext.Provider
      value={{
        useCheckCEP,
        useRemoveCEP,
      }}
    >
      {children}
    </CheckCEPContext.Provider>
  );
};

export const useCheck = (): ICheckCEPContext => useContext(CheckCEPContext);
