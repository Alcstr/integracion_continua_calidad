// src/pages/MathPage.tsx
import React, { useEffect, useState } from "react";
import NarratorButton from "../components/NarratorButton";

type Operation = "suma" | "resta" | "multiplicacion" | "division";

interface Question {
  a: number;
  b: number;
  operation: Operation;
}

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = (operation: Operation): Question => {
  let a = getRandomInt(0, 20);
  let b = getRandomInt(0, 20);

  if (operation === "resta" && b > a) {
    [a, b] = [b, a];
  }

  if (operation === "division") {
    b = getRandomInt(1, 10);
    const result = getRandomInt(0, 10);
    a = b * result;
  }

  return { a, b, operation };
};

const getCorrectAnswer = ({ a, b, operation }: Question) => {
  switch (operation) {
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multiplicacion":
      return a * b;
    case "division":
      return a / b;
    default:
      return 0;
  }
};

const operationLabel: Record<Operation, string> = {
  suma: "Suma",
  resta: "Resta",
  multiplicacion: "Multiplicación",
  division: "División (entera)",
};

const MathPage: React.FC = () => {
  const [operation, setOperation] = useState<Operation>("suma");
  const [question, setQuestion] = useState<Question>(
    generateQuestion("suma")
  );
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correcto" | "incorrecto" | null>(
    null
  );
  const [attempts, setAttempts] = useState(0);
  const [hits, setHits] = useState(0);

  useEffect(() => {
    setQuestion(generateQuestion(operation));
    setAnswer("");
    setFeedback(null);
  }, [operation]);

  const handleCheck = () => {
    if (!answer.trim()) return;

    const correct = getCorrectAnswer(question);
    const numericAnswer = Number(answer);

    const isCorrect = numericAnswer === correct;

    setAttempts((prev) => prev + 1);
    if (isCorrect) setHits((prev) => prev + 1);
    setFeedback(isCorrect ? "correcto" : "incorrecto");

    // Nueva pregunta después de un pequeño delay
    setTimeout(() => {
      setQuestion(generateQuestion(operation));
      setAnswer("");
      setFeedback(null);
    }, 1500);
  };

  const questionText = `¿Cuánto es ${question.a} ${
    question.operation === "suma"
      ? "más"
      : question.operation === "resta"
      ? "menos"
      : question.operation === "multiplicacion"
      ? "por"
      : "dividido entre"
  } ${question.b}?`;

  return (
    <div className="space-y-6">
      <section className="bg-white/80 rounded-3xl shadow-lg p-6 border border-sky-100">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-sky-700">
              Matemáticas: Operaciones básicas
            </h1>
            <p className="text-slate-600 mt-1">
              Selecciona el tipo de operación y resuelve los ejercicios. ¡Cada
              respuesta correcta suma estrellas a tu puntaje!
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-sm font-semibold text-slate-500">
              Progreso
            </span>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="text-sm">
                {hits} / {attempts || 1} correctas
              </span>
            </div>
          </div>
        </header>

        {/* Selector de operación */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(operationLabel).map(([key, label]) => {
            const op = key as Operation;
            const isActive = op === operation;
            return (
              <button
                key={op}
                type="button"
                onClick={() => setOperation(op)}
                className={`rounded-full px-4 py-1 text-sm font-semibold border shadow-sm
                transition-all
                ${
                  isActive
                    ? "bg-sky-500 text-white border-sky-500 shadow-sky-200 scale-105"
                    : "bg-white text-sky-700 border-sky-200 hover:bg-sky-50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Narrador de la consigna */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-slate-500">
            Lee o escucha el ejercicio y escribe tu respuesta.
          </p>
          <NarratorButton text={questionText} label="Escuchar ejercicio" />
        </div>

        {/* Tarjeta del ejercicio */}
        <div
          className={`mt-2 rounded-2xl border p-4 bg-gradient-to-r from-sky-50 to-emerald-50 
          flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}
        >
          <div>
            <p className="text-lg text-slate-800 font-semibold">
              Ejercicio:
              <span className="ml-2">
                {question.a}{" "}
                {question.operation === "suma"
                  ? "+"
                  : question.operation === "resta"
                  ? "−"
                  : question.operation === "multiplicacion"
                  ? "×"
                  : "÷"}{" "}
                {question.b} = ?
              </span>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Escribe el resultado en el cuadro y presiona{" "}
              <strong>Comprobar</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-24 border border-sky-200 rounded-xl px-3 py-2 text-center text-lg font-semibold text-sky-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="button"
              onClick={handleCheck}
              className="rounded-xl bg-emerald-500 px-4 py-2 text-white font-semibold shadow-md hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0 transition-transform transition-colors"
            >
              Comprobar
            </button>
          </div>
        </div>

        {/* Feedback visual */}
        {feedback && (
          <div className="mt-4 flex items-center gap-3">
            {feedback === "correcto" ? (
              <>
                <span className="text-3xl animate-bounce">🎉</span>
                <p className="text-emerald-700 font-semibold">
                  ¡Correcto! ¡Ganaste una estrella!
                </p>
              </>
            ) : (
              <>
                <span className="text-3xl">🤔</span>
                <p className="text-rose-700 font-semibold">
                  Incorrecto. ¡No pasa nada, intenta de nuevo en el siguiente
                  ejercicio!
                </p>
              </>
            )}
          </div>
        )}

        {/* Puntaje */}
        <div className="mt-4 text-sm text-slate-600">
          <p>
            Puntaje:{" "}
            <strong>
              {hits} correctas de {attempts} intentos.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default MathPage;
