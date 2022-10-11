import { ThemeProvider } from "styled-components";

import { IChildren } from "@/interfaces";
import { theme } from "@/styles/theme";

import { CheckCepProvider } from "./useCEP";

export default function AppProvider({ children }: IChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CheckCepProvider>{children}</CheckCepProvider>
    </ThemeProvider>
  );
}