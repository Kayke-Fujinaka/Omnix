import {
    forwardRef,
    ForwardRefRenderFunction,
    InputHTMLAttributes,
    ReactElement,
  } from "react";
  
  import * as S from "./styles";
  
  const InputBase: ForwardRefRenderFunction<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
  > = ({ ...rest }, ref): ReactElement => {
    return <S.Input ref={ref} {...rest} />;
  };
  
  export const Input = forwardRef(InputBase);