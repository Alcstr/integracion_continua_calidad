// src/pages/LogicPage.tsx
import React, { useState } from "react";
import NarratorButton from "../components/NarratorButton";

interface SequenceQuestion {
  sequence: number[];
  correct: number;
}

const baseQuestion: SequenceQuestion = {
  sequence: [2, 4, 6, 8],
  correct: 10,
};

const LogicPage: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correcto" | "incorrecto" | null>(
    null
  );

  const options = [10, 12, 9];

  const handleOptionClick = (value: number) => {
    setSelected(value);
    if (value === baseQuestion.correct) {
      setFeedback("correcto");
    } else {
      setFeedback("incorrecto");
    }
  };

  const explanationText =
    "Observa la secuencia dos, cuatro, seis, ocho. Cada número aumenta de dos en dos. El siguiente número correcto es diez.";

  return (
    <div className="space-y-6">
      <section className="bg-white/80 rounded-3xl shadow-lg p-6 border border-purple-100">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-purple-700">
              Pensamiento lógico: Secuencias y patrones
            </h1>
            <p className="text-slate-600 mt-1">
              Observa las secuencias de números y descubre cuál es el siguiente
              valor que completa el patrón.
            </p>
          </div>
          <NarratorButton
            text="Bienvenido al módulo de lógica. Resolveremos secuencias numéricas buscando patrones como sumar dos, sumar cinco o multiplicar."
            label="Escuchar introducción"
          />
        </header>

        {/* Ejercicio principal */}
        <div className="mt-2 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50 to-sky-50 p-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <p className="font-semibold text-slate-800">
              Completa la secuencia:
            </p>
            <NarratorButton text={explanationText} label="Escuchar pista" />
          </div>

          <p className="text-xl font-bold text-purple-700 mb-3">
            {baseQuestion.sequence.join(", ")} , …
          </p>

          <div className="flex flex-wrap gap-3">
            {options.map((opt) => {
              const isSelected = selected === opt;
              const isCorrect = opt === baseQuestion.correct;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleOptionClick(opt)}
                  className={`px-4 py-2 rounded-xl border shadow-sm text-lg font-semibold transition-all
                  ${
                    isSelected
                      ? isCorrect
                        ? "bg-emerald-500 text-white border-emerald-500 scale-105"
                        : "bg-rose-500 text-white border-rose-500 scale-105"
                      : "bg-white text-purple-700 border-purple-200 hover:bg-purple-50"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {feedback && (
            <div className="mt-4 flex items-center gap-2">
              {feedback === "correcto" ? (
                <>
                  <span className="text-3xl animate-bounce">🧠</span>
                  <p className="text-emerald-700 font-semibold">
                    ¡Muy bien! Has descubierto el patrón: sumar 2 cada vez.
                  </p>
                </>
              ) : (
                <>
                  <span className="text-3xl">🤯</span>
                  <p className="text-rose-700 font-semibold">
                    Esa opción no sigue el patrón. Observa de nuevo la secuencia
                    y prueba otra respuesta.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LogicPage;
