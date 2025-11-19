import { describe, it, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import LogicPage from "../pages/LogicPage";

describe("LogicPage", () => {
  it("muestra el título de pensamiento lógico", () => {
    render(<LogicPage />);
    expect(
      screen.getByText(/pensamiento lógico/i)
    ).toBeInTheDocument();
  });

  // ✅ opción correcta (usamos el primer botón de la página)
  it("muestra mensaje correcto cuando se selecciona la opción que completa la secuencia", () => {
    render(<LogicPage />);

    const buttons = screen.getAllByRole("button");
    // asumimos que el primer botón es la respuesta correcta
    fireEvent.click(buttons[0]);

    expect(screen.getByText(/correct/i)).toBeInTheDocument();
    // si tu texto es "Respuesta correcta", cambia a /respuesta correcta/i
  });

  // ✅ opción incorrecta (usamos el último botón)
  it("muestra mensaje de error cuando se selecciona una opción incorrecta", () => {
    render(<LogicPage />);

    const buttons = screen.getAllByRole("button");
    // asumimos que el último botón es claramente incorrecto
    fireEvent.click(buttons[buttons.length - 1]);

    expect(screen.getByText(/incorrect/i)).toBeInTheDocument();
    // adapta a /incorrecto/i o /respuesta incorrecta/i según tu mensaje
  });
});
