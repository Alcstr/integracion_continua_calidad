import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renderiza el título principal de la aplicación", () => {
    render(<App />);

    expect(
      screen.getByText(/Colegio Mentes Creativas/i)
    ).toBeInTheDocument();
  });
});
