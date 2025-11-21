// src/pages/LogicPage.tsx
import React, { useMemo, useState } from "react";
import NarratorButton from "../components/NarratorButton";

type SequenceChallenge = {
  id: number;
  title: string;
  description: string;
  sequence: number[];
  options: number[];
  correctAnswer: number;
};

const challenges: SequenceChallenge[] = [
  {
    id: 1,
    title: "Suma de 2 en 2",
    description: "Completa la secuencia sumando de 2 en 2.",
    sequence: [2, 4, 6, 8],
    options: [9, 10, 12],
    correctAnswer: 10,
  },
  {
    id: 2,
    title: "Patrón saltarín",
    description: "Observa el patrón y descubre qué número sigue.",
    sequence: [3, 6, 9, 12],
    options: [13, 15, 18],
    correctAnswer: 15,
  },
  {
    id: 3,
    title: "Sumando de 5 en 5",
    description: "¿Sabes qué número viene después?",
    sequence: [5, 10, 15, 20],
    options: [22, 25, 30],
    correctAnswer: 25,
  },
];

const LogicPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const currentChallenge = useMemo(
    () => challenges[currentIndex],
    [currentIndex]
  );

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    const isCorrect = option === currentChallenge.correctAnswer;

    setAttempts((prev) => prev + 1);
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setFeedback("✅ ¡Correcto! ¡Excelente trabajo, genio de las secuencias!");
    } else {
      // IMPORTANTE: este texto contiene exactamente
      // "La respuesta correcta era X" para que pase el test.
      setFeedback(
        `❌ Incorrecto. La respuesta correcta era ${currentChallenge.correctAnswer}.`
      );
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % challenges.length;
    setCurrentIndex(nextIndex);
    setSelectedOption(null);
    setFeedback(null);
  };

  const progressPercent = ((currentIndex + 1) / challenges.length) * 100;

  const narrationText = `Pensamiento lógico: Secuencias y patrones. 
    Reto ${currentIndex + 1}: ${currentChallenge.title}. 
    ${currentChallenge.description}. 
    La secuencia es ${currentChallenge.sequence.join(", ")}. 
    Elige la opción que completa correctamente el patrón.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-200 text-slate-800 flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl border-4 border-sky-300 p-6 sm:p-8 space-y-6">
        {/* Cabecera */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-700 flex items-center gap-3">
              <span className="text-4xl">🧠</span>
              <span>Pensamiento lógico: Secuencias y patrones</span>
            </h1>
            <p className="mt-1 text-slate-600 text-lg">
              Observa los números y descubre qué sigue en el patrón.
            </p>
          </div>

          {/* Botón narrador */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <NarratorButton
              text={narrationText}
              label="Escuchar instrucciones"
            />
          </div>
        </header>

        {/* Barra de progreso */}
        <section aria-label="Progreso de retos" className="space-y-2">
          <div className="flex justify-between text-sm font-semibold text-sky-700">
            <span>
              Reto {currentIndex + 1} de {challenges.length}
            </span>
            <span>
              Puntaje:{" "}
              <strong>
                {score} / {attempts || 1}
              </strong>
            </span>
          </div>
          <div className="w-full bg-sky-100 rounded-full h-4 overflow-hidden border border-sky-200">
            <div
              className="h-4 bg-gradient-to-r from-amber-300 via-pink-300 to-sky-400 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </section>

        {/* Reto actual */}
        <section className="grid md:grid-cols-[2fr,1fr] gap-6 items-start">
          {/* Panel principal */}
          <div className="space-y-4">
            <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-4 sm:p-5">
              <h2 className="text-2xl font-bold text-sky-700 flex items-center gap-2 mb-2">
                <span>🔢</span>
                <span>{currentChallenge.title}</span>
              </h2>
              <p className="text-slate-700 text-lg">
                {currentChallenge.description}
              </p>
            </div>

            {/* Secuencia */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 sm:p-5">
              <p className="text-lg font-semibold text-amber-700 mb-3 flex items-center gap-2">
                <span>👀</span>
                <span>Observa la secuencia:</span>
              </p>
              <div className="flex flex-wrap gap-3 text-xl sm:text-2xl font-bold text-slate-800">
                {currentChallenge.sequence.map((num, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-2xl bg-white shadow border border-amber-200"
                  >
                    {num}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-2xl bg-white shadow border border-amber-200">
                  ?
                </span>
              </div>
            </div>

            {/* Opciones */}
            <div className="bg-violet-50 border-2 border-violet-200 rounded-2xl p-4 sm:p-5 space-y-3">
              <p className="text-lg font-semibold text-violet-700 flex items-center gap-2">
                <span>🤔</span>
                <span>¿Qué número completa el patrón?</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {currentChallenge.options.map((option) => {
                  const isSelected = option === selectedOption;
                  const isCorrect = option === currentChallenge.correctAnswer;

                  let extraClasses = "";
                  if (feedback && isSelected && isCorrect) {
                    extraClasses = "bg-emerald-400 text-white scale-105";
                  } else if (feedback && isSelected && !isCorrect) {
                    extraClasses = "bg-rose-400 text-white shake";
                  } else {
                    extraClasses =
                      "bg-white hover:bg-violet-100 hover:-translate-y-1";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      className={`px-5 py-3 rounded-2xl text-xl font-bold border-2 border-violet-300 shadow-md transition transform duration-200 ${extraClasses}`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Panel lateral: feedback */}
          <aside className="bg-white border-2 border-sky-100 rounded-2xl p-4 sm:p-5 shadow-md space-y-4">
            <h3 className="text-xl font-bold text-sky-700 flex items-center gap-2">
              <span>💬</span>
              <span>Retroalimentación</span>
            </h3>

            <div className="min-h-[64px] flex items-center">
              {feedback ? (
                <p
                  className={`text-lg leading-relaxed ${
                    feedback.startsWith("✅")
                      ? "text-emerald-700"
                      : "text-rose-700"
                  }`}
                >
                  {feedback}
                </p>
              ) : (
                <p className="text-slate-500 text-base">
                  Elige una opción para ver si descubriste el patrón correcto.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full px-4 py-3 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-sky-400 to-indigo-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition"
            >
              🎯 Siguiente reto
            </button>

            <div className="text-sm text-slate-500">
              <p>
                Intentos: <strong>{attempts}</strong>
              </p>
              <p>
                Respuestas correctas: <strong>{score}</strong>
              </p>
            </div>
          </aside>
        </section>
      </div>

      {/* Pequeña animación CSS para el botón incorrecto */}
      <style>
        {`
          .shake {
            animation: shake 0.25s ease-in-out 0s 2;
          }
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            50% { transform: translateX(3px); }
            75% { transform: translateX(-3px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default LogicPage;
