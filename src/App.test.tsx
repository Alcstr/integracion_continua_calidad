import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renderiza el título principal de la aplicación", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Ajusta este texto al título real de tu HomePage
    expect(
      screen.getByText(/Colegio Mentes Creativas/i)
    ).toBeInTheDocument();
  });
});
