import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import SciencePage from "../pages/SciencePage";

describe("SciencePage", () => {
  it("muestra el título principal de ciencias naturales", () => {
    render(<SciencePage />);

    expect(
      screen.getByText(/ciencias naturales: sistema solar/i)
    ).toBeInTheDocument();
  });

  it("muestra información de varios planetas", () => {
    render(<SciencePage />);

    expect(screen.getByText(/mercurio/i)).toBeInTheDocument();
    expect(screen.getByText(/venus/i)).toBeInTheDocument();
    expect(screen.getByText(/tierra/i)).toBeInTheDocument();
    expect(screen.getByText(/marte/i)).toBeInTheDocument();
  });

  // Prueba extra: asegura que hay al menos cuatro planetas
  it("tiene al menos cuatro planetas visibles en la página", () => {
    render(<SciencePage />);

    const planetas = [
      screen.getByText(/mercurio/i),
      screen.getByText(/venus/i),
      screen.getByText(/tierra/i),
      screen.getByText(/marte/i),
    ];

    expect(planetas.length).toBeGreaterThanOrEqual(4);
  });
});
