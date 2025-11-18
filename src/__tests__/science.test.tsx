import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import SciencePage from "../pages/SciencePage";

describe("SciencePage", () => {
  it("muestra el título principal de ciencias naturales", () => {
    render(<SciencePage />);

    expect(
      screen.getByText(/Ciencias naturales: Sistema solar/i)
    ).toBeInTheDocument();
  });

  it("muestra información de varios planetas", () => {
    render(<SciencePage />);

    // Ajusta estos nombres si tus planetas son otros
    expect(screen.getByText(/Mercurio/i)).toBeInTheDocument();
    expect(screen.getByText(/Venus/i)).toBeInTheDocument();
    expect(screen.getByText(/Tierra/i)).toBeInTheDocument();
    expect(screen.getByText(/Marte/i)).toBeInTheDocument();
  });
});
