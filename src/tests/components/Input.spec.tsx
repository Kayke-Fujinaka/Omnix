import { Input } from "@/components";
import { theme } from "@styles/theme";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Input Test", () => {
  it("Should Render Input", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input id="name" type="text" placeholder="Insira seu nome" />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Insira seu nome");

    fireEvent.change(input, {
      target: { value: "test" },
    });

    expect(input).toHaveValue("test");
  });

  it("Should Render Input with Font Size XS", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input id="name" type="text" placeholder="Insira seu nome" />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Insira seu nome");

    expect(input).toHaveStyle({
      fontSize: theme.fonts.size.xs,
    });
  });
});
