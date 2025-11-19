import { describe, it, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import MathPage from "../pages/MathPage";

describe("MathPage", () => {
  it("muestra el título y los botones de operaciones", () => {
    render(<MathPage />);

    expect(screen.getByText(/matemáticas/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /suma/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /resta/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /multiplicación/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /división/i })).toBeInTheDocument();
  });

  // ✅ respuesta correcta
  it("muestra mensaje de 'Correcto' cuando la respuesta es correcta", async () => {
    render(<MathPage />);

    const input = screen.getByRole("spinbutton"); // <input type="number" />
    const sumaButton = screen.getByRole("button", { name: /suma/i });

    // ajusta el valor "5" a la respuesta real de tu primer ejercicio
    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(sumaButton);

    // usamos findByText por si el mensaje aparece tras un rerender
    expect(await screen.findByText(/correct/i)).toBeInTheDocument();
    // si tu texto es "¡Correcto!" o "Respuesta correcta", usa /respuesta correcta/i
  });

  // ✅ respuesta incorrecta
  it("muestra mensaje de 'Incorrecto' cuando la respuesta es incorrecta", async () => {
    render(<MathPage />);

    const input = screen.getByRole("spinbutton");
    const sumaButton = screen.getByRole("button", { name: /suma/i });

    fireEvent.change(input, { target: { value: "999" } });
    fireEvent.click(sumaButton);

    expect(await screen.findByText(/incorrect/i)).toBeInTheDocument();
    // adapta a /incorrecto/i o al texto real, por ejemplo /vuelve a intentarlo/i
  });
});
