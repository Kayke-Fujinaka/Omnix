/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Button Test", () => {
  it("Should Render Button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>I'm Button</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("I'm Button")).toBeInTheDocument();
  });

  it("Should Render Button", () => {
    screen.logTestingPlaygroundURL();
  });

  it("Should Render Button with Color White", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>I Have Color White</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("I Have Color White")).toHaveStyle({
      color: theme.colors.white,
    });
  });
});
