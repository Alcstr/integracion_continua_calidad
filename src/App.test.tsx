// src/App.test.tsx
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renderiza el título principal de la aplicación", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Buscamos exactamente "Mentes Creativas" (anclado),
    // así no choca con textos como "Colegio Mentes Creativas"
    expect(screen.getByText(/^Mentes Creativas$/i)).toBeInTheDocument();
  });
});
