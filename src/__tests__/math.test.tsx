import { describe, it, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import MathPage from "../pages/MathPage";

describe("MathPage", () => {
  it("muestra el título y los botones de operaciones", () => {
    render(<MathPage />);

    // Título principal
    expect(
      screen.getByText(/matemáticas: operaciones básicas/i)
    ).toBeInTheDocument();

    // Botones de operación
    expect(
      screen.getByRole("button", { name: /suma/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /resta/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /multiplicación/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /división/i })
    ).toBeInTheDocument();
  });

  it("muestra un ejercicio y un campo para ingresar la respuesta", () => {
    render(<MathPage />);

    // Enunciado del ejercicio
    expect(screen.getByText(/ejercicio:/i)).toBeInTheDocument();

    // Input numérico para la respuesta
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();

    // Botón para comprobar
    expect(
      screen.getByRole("button", { name: /comprobar/i })
    ).toBeInTheDocument();
  });

  it("actualiza el puntaje después de comprobar una respuesta", () => {
    render(<MathPage />);

    const input = screen.getByRole("spinbutton");
    const comprobarButton = screen.getByRole("button", { name: /comprobar/i });

    // Obtenemos el nodo donde se muestra el puntaje
    const puntajeNode = screen.getByText(/puntaje:/i).parentElement as HTMLElement;
    const puntajeAntes = puntajeNode.textContent;

    // Escribimos cualquier número (no importa si es correcto o no)
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.click(comprobarButton);

    // Verificamos que el texto del puntaje haya cambiado
    const puntajeDespues = puntajeNode.textContent;
    expect(puntajeDespues).not.toBe(puntajeAntes);
  });
});
