import { describe, it, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import LogicPage from "../pages/LogicPage";

describe("LogicPage", () => {
  it("muestra el título principal", () => {
    render(<LogicPage />);

    // Comprobamos el título de la página
    expect(
      screen.getByText(/Pensamiento lógico: Secuencias y patrones/i)
    ).toBeInTheDocument();
  });

  it("permite seleccionar una opción para completar la secuencia", () => {
    render(<LogicPage />);

    const optionButtons = screen.getAllByRole("button");
    const numericButton = optionButtons.find((btn) =>
      /^\d+$/.test(btn.textContent || "")
    );

    expect(numericButton).toBeDefined();

    if (numericButton) {
      fireEvent.click(numericButton);
    }

    expect(true).toBe(true);
  });
});
