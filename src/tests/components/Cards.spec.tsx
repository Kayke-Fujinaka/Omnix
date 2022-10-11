/* eslint-disable react/no-unescaped-entities */
import { Cards } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Cards Test", () => {
  it("Should Render Cards", () => {
    render(
      <ThemeProvider theme={theme}>
        <Cards plan="Mensal" price="R$ 1000,00" />
      </ThemeProvider>
    );

    expect(screen.getByText("Mensal")).toBeInTheDocument();
    expect(screen.getByText("R$ 1000,00")).toBeInTheDocument();
  });

  it("Should Render Cards", () => {
    screen.logTestingPlaygroundURL();
  });
});
