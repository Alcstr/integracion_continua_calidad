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

  // Verifica que al hacer clic en una opción aparece retroalimentación
  it("muestra un mensaje de retroalimentación cuando se selecciona una opción", () => {
    render(<LogicPage />);

    const buttons = screen.getAllByRole("button");
    // Hacemos clic en cualquiera (por ejemplo, el primero)
    fireEvent.click(buttons[0]);

    // Usamos el texto que aparece en tu captura:
    // "Incorrecto. La respuesta correcta era 10."
    expect(
      screen.getByText(/la respuesta correcta era 10/i)
    ).toBeInTheDocument();
  });
});
