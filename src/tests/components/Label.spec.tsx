/* eslint-disable react/no-unescaped-entities */
import { Label } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Label Test", () => {
  it("Should Render Label", () => {
    render(
      <ThemeProvider theme={theme}>
        <Label htmlFor="label">I'm Label</Label>
      </ThemeProvider>
    );

    expect(screen.getByText("I'm Label")).toBeInTheDocument();
  });

  it("Should Render Label", () => {


    screen.logTestingPlaygroundURL()

  });

  it("Should Render Label with Font Size MD", () => {
    render(
        <ThemeProvider theme={theme}>
          <Label htmlFor="label">I Have Font Size MD</Label>
        </ThemeProvider>
      );

    expect(screen.getByText("I Have Font Size MD")).toHaveStyle({
      fontSize: theme.fonts.size.md,
    });
  });

  it("Should Render Label with Color Black", () => {
    render(
        <ThemeProvider theme={theme}>
          <Label htmlFor="label">I Have Color Black</Label>
        </ThemeProvider>
      );

      expect(screen.getByText("I Have Color Black")).toHaveStyle({
        color: theme.colors.black,
      });
  });
});
