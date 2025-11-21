// src/pages/MathPage.tsx
import React, { useEffect, useState } from "react";

type Operation = "suma" | "resta" | "multiplicacion" | "division";

const getRandomNumber = () => Math.floor(Math.random() * 101); // 0–100

const MathPage: React.FC = () => {
  const [operation, setOperation] = useState<Operation>("suma");
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<"correcto" | "incorrecto" | null>(
    null
  );
  const [animateScore, setAnimateScore] = useState(false);

  const generateExercise = (op: Operation = operation) => {
    let x = getRandomNumber();
    let y = getRandomNumber();

    if (op === "resta" && y > x) {
      // evitamos negativos para niños
      [x, y] = [y, x];
    }

    if (op === "division") {
      // generamos división entera sencilla
      y = Math.max(1, Math.floor(Math.random() * 10)); // 1–9
      const result = Math.floor(Math.random() * 10); // 0–9
      x = result * y;
    }

    setA(x);
    setB(y);
  };

  useEffect(() => {
    generateExercise(operation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation]);

  const getCorrectAnswer = () => {
    switch (operation) {
      case "suma":
        return a + b;
      case "resta":
        return a - b;
      case "multiplicacion":
        return a * b;
      case "division":
        return Math.floor(a / b);
      default:
        return 0;
    }
  };

  const handleCheck = () => {
    const userValue = parseInt(answer, 10);
    if (Number.isNaN(userValue)) {
      setFeedback("incorrecto");
      return;
    }

    const correct = getCorrectAnswer();
    setAttempts((prev) => prev + 1);

    if (userValue === correct) {
      setScore((prev) => prev + 1);
      setFeedback("correcto");
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 300);
    } else {
      setFeedback("incorrecto");
    }

    setAnswer("");
    generateExercise(operation);
  };

  const symbol = (() => {
    switch (operation) {
      case "suma":
        return "+";
      case "resta":
        return "−";
      case "multiplicacion":
        return "×";
      case "division":
        return "÷";
      default:
        return "+";
    }
  })();

  return (
    <div className="rounded-3xl bg-white/90 p-6 shadow-lg border border-yellow-100 space-y-4">
      <h1 className="text-2xl font-bold text-yellow-700 flex items-center gap-2">
        <span>🧮</span>
        <span>Matemáticas: Operaciones básicas</span>
      </h1>

      <p className="text-sm text-slate-700">
        Selecciona el tipo de operación y resuelve los ejercicios. El sistema
        generará números naturales entre 0 y 100.
      </p>

      {/* botones de operación */}
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded-full text-sm font-semibold shadow transition ${
            operation === "suma"
              ? "bg-yellow-400 text-slate-900"
              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
          }`}
          onClick={() => setOperation("suma")}
        >
          Suma
        </button>
        <button
          className={`px-3 py-1 rounded-full text-sm font-semibold shadow transition ${
            operation === "resta"
              ? "bg-orange-400 text-slate-900"
              : "bg-orange-100 text-orange-800 hover:bg-orange-200"
          }`}
          onClick={() => setOperation("resta")}
        >
          Resta
        </button>
        <button
          className={`px-3 py-1 rounded-full text-sm font-semibold shadow transition ${
            operation === "multiplicacion"
              ? "bg-pink-400 text-white"
              : "bg-pink-100 text-pink-800 hover:bg-pink-200"
          }`}
          onClick={() => setOperation("multiplicacion")}
        >
          Multiplicación
        </button>
        <button
          className={`px-3 py-1 rounded-full text-sm font-semibold shadow transition ${
            operation === "division"
              ? "bg-emerald-400 text-white"
              : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
          }`}
          onClick={() => setOperation("division")}
        >
          División (entera)
        </button>
      </div>

      {/* ejercicio */}
      <div className="space-y-2 mt-2">
        <p className="text-lg text-slate-800">
          Ejercicio:{" "}
          <strong className="text-indigo-600">{a}</strong>{" "}
          <span className="font-bold">{symbol}</span>{" "}
          <strong className="text-indigo-600">{b}</strong> = ?
        </p>

        <div className="flex items-center gap-2">
          <input
            className="border rounded px-3 py-1 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow hover:bg-emerald-600 active:scale-95 transition"
            onClick={handleCheck}
          >
            Comprobar
          </button>
        </div>
      </div>

      {/* puntaje + mensaje motivacional */}
      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div
          className={`inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800 shadow transition-transform duration-300 ${
            animateScore ? "scale-110" : "scale-100"
          }`}
        >
          <span className="text-lg">⭐</span>
          <span>
            {/* 👇 Este texto lo usan tus tests: no cambiar “Puntaje:” */}
            Puntaje: <span className="font-bold">{score}</span> correctas de{" "}
            <span>{attempts}</span> intentos.
          </span>
        </div>

        <p className="text-xs text-slate-500">
          ¡Cada respuesta correcta suma una estrella a tu marcador! 🌟
        </p>
      </div>

      {/* feedback visual */}
      {feedback === "correcto" && (
        <div className="mt-4 rounded-2xl bg-emerald-100 px-4 py-3 text-emerald-800 flex items-center gap-3 shadow">
          <span className="text-2xl">🎉</span>
          <div>
            <p className="font-bold">¡Muy bien!</p>
            <p className="text-sm">Has sumado 1 punto a tu marcador.</p>
          </div>
        </div>
      )}

      {feedback === "incorrecto" && (
        <div className="mt-4 rounded-2xl bg-rose-100 px-4 py-3 text-rose-800 flex items-center gap-3 shadow">
          <span className="text-2xl">😅</span>
          <div>
            <p className="font-bold">Casi...</p>
            <p className="text-sm">
              No pasa nada, intenta de nuevo. ¡Practicar también suma!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MathPage;
