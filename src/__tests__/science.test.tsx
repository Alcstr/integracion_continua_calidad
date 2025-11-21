import { describe, it, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import SciencePage from "../pages/SciencePage";

describe("SciencePage", () => {
  it("muestra el título principal de ciencias naturales", () => {
    render(<SciencePage />);

    expect(
      screen.getByText(/ciencias naturales: sistema solar/i)
    ).toBeInTheDocument();
  });

  it("muestra información de los planetas Mercurio, Venus, Tierra y Marte", () => {
    render(<SciencePage />);

    const planetNames = [/mercurio/i, /venus/i, /tierra/i, /marte/i];

    planetNames.forEach((regex) => {
      const matches = screen.getAllByText(regex);
      // al menos una coincidencia por planeta
      expect(matches.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renderiza al menos cuatro tarjetas de planeta", () => {
    render(<SciencePage />);

    // cada tarjeta de planeta es un botón
    const planetButtons = screen.getAllByRole("button", {
      name: /(Mercurio|Venus|Tierra|Marte)/i,
    });

    expect(planetButtons.length).toBeGreaterThanOrEqual(4);
  });

  it("muestra mensaje de acierto cuando se selecciona Marte en el mini quiz", () => {
    render(<SciencePage />);

    // botones del quiz (uno de ellos es Marte)
    const marteButtons = screen.getAllByRole("button", { name: /Marte/i });

    // normalmente el último es el del quiz, pero por si acaso usamos el último
    const quizMarteButton = marteButtons[marteButtons.length - 1];

    fireEvent.click(quizMarteButton);

    expect(
      screen.getByText(/Marte es el planeta rojo/i)
    ).toBeInTheDocument();
  });
});
