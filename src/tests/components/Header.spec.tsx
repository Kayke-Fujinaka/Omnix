import { Header } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Header Test", () => {
  it("Should Render Header", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header>I Have Children</Header>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("I Have Children")).toBeInTheDocument();
  });

  it("Should Render Header with Font Size XL1", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header>I Have Font Size XL1</Header>
      </ThemeProvider>
    );

    expect(screen.getByText("I Have Font Size XL1")).toHaveStyle({
      fontSize: theme.fonts.size.xl1,
    });
  });

  it("Should Render Header with Color White", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header>I Have Color White</Header>
      </ThemeProvider>
    );

    expect(screen.getByText("I Have Color White")).toHaveStyle({
      color: theme.colors.white,
    });
  });
});
