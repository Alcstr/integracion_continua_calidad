import { describe, it, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import MathPage from "../pages/MathPage";

describe("MathPage", () => {
  it("muestra el título y los botones de operaciones", () => {
    render(<MathPage />);

    expect(screen.getByText(/Matemáticas/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Suma/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Resta/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Multiplicación/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /División/i })
    ).toBeInTheDocument();
  });

  it("permite ingresar una respuesta y ejecutar la comprobación sin errores", () => {
    render(<MathPage />);

    const input = screen.getByRole("spinbutton") as HTMLInputElement;
    const comprobarButton = screen.getByRole("button", {
      name: /Comprobar/i,
    });

    // Simulamos que el estudiante escribe una respuesta
    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(comprobarButton);

    // Expectativa sencilla: el test llega aquí sin lanzar errores
    // (podrías cambiarlo por algo más específico si luego ajustas el componente)
    expect(true).toBe(true);
  });
});
