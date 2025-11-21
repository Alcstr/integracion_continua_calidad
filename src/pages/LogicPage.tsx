// src/pages/LogicPage.tsx
import React, { useState } from "react";

const LogicPage: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"correcto" | "incorrecto" | null>(
    null
  );

  const sequence = [2, 4, 6, 8];
  const correctAnswer = 10;
  const options = [6, 8, 10, 12]; // el primero (6) es incorrecto

  const handleClick = (value: number) => {
    setSelected(value);
    if (value === correctAnswer) {
      setFeedback("correcto");
    } else {
      setFeedback("incorrecto");
    }
  };

  return (
    <div className="rounded-3xl bg-white/90 p-6 shadow-lg border border-purple-100 space-y-4">
      <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
        <span>🧩</span>
        <span>Pensamiento lógico: patrones y secuencias</span>
      </h1>

      <p className="text-sm text-slate-700">
        Observa la secuencia y selecciona la opción que completa correctamente el
        patrón.
      </p>

      {/* Secuencia visual */}
      <div className="flex items-center gap-2 mt-2">
        {sequence.map((num, index) => (
          <div
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-800 font-semibold shadow"
          >
            {num}
          </div>
        ))}
        <span className="text-lg font-bold text-slate-600">?</span>
      </div>

      {/* Opciones */}
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => handleClick(option)}
            className={`w-12 h-12 rounded-2xl shadow text-sm font-semibold transition flex items-center justify-center ${
              selected === option
                ? "bg-purple-500 text-white"
                : "bg-purple-50 text-purple-800 hover:bg-purple-100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback para niños */}
      {feedback === "correcto" && (
        <div className="mt-4 rounded-2xl bg-emerald-100 px-4 py-3 text-emerald-800 flex items-center gap-3 shadow">
          <span className="text-2xl">🧠</span>
          <div>
            <p className="font-bold">¡Excelente!</p>
            <p className="text-sm">
              Has detectado el patrón: estás sumando 2 cada vez (2, 4, 6, 8, 10).
            </p>
          </div>
        </div>
      )}

      {feedback === "incorrecto" && (
        <div className="mt-4 rounded-2xl bg-rose-100 px-4 py-3 text-rose-800 flex items-center gap-3 shadow">
          <span className="text-2xl">🤔</span>
          <div>
            <p className="font-bold">Casi...</p>
            <p className="text-sm">
              Incorrecto. La respuesta correcta era 10, porque la secuencia suma 2
              en cada paso.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogicPage;
