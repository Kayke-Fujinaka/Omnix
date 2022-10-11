import { Footer } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Footer Test", () => {
  it("Should Render Footer", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    expect(screen.getByText("Omnix Digital Experience ❤️")).toBeInTheDocument();
  });

  it("Should Render Footer with Font Size MD", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    expect(screen.getByText("Omnix Digital Experience ❤️")).toHaveStyle({
      fontSize: theme.fonts.size.md,
    });
  });

  it("Should Render Footer with Color White", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    expect(screen.getByText("Omnix Digital Experience ❤️")).toHaveStyle({
      color: theme.colors.white,
    });
  });
});
