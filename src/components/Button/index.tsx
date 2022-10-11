import { IButton } from "@/interfaces";

import * as S from "./styles";

export function Button({
  children,
  background = "default",
  color = "white",
  fullWidth = true,
  widthSize = "md",
  ...props
}: IButton) {
  return (
    <S.Container
      background={background}
      color={color}
      fullWidth={fullWidth}
      widthSize={widthSize}
      {...props}
    >
      {children}
    </S.Container>
  );
}
