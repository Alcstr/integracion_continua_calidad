// src/pages/SciencePage.tsx
import React, { useState } from "react";

type Planet = {
  name: string;
  emoji: string;
  description: string;
  extra: string;
};

const planets: Planet[] = [
  {
    name: "Mercurio",
    emoji: "🧡",
    description: "Es el planeta más cercano al Sol y también uno de los más pequeños.",
    extra: "Tiene días muy calientes y noches muy frías porque casi no tiene atmósfera.",
  },
  {
    name: "Venus",
    emoji: "💛",
    description: "Es el planeta más caliente del sistema solar.",
    extra: "Su atmósfera está llena de nubes de ácido y atrapa mucho calor (efecto invernadero).",
  },
  {
    name: "Tierra",
    emoji: "🌍",
    description: "Nuestro hogar y, hasta ahora, el único planeta conocido con vida.",
    extra: "Tiene agua líquida, oxígeno y una atmósfera que nos protege del espacio.",
  },
  {
    name: "Marte",
    emoji: "🔴",
    description: "Es conocido como el planeta rojo.",
    extra: "Su color se debe al óxido de hierro en su superficie. Hay muchas misiones espaciales estudiándolo.",
  },
];

const SciencePage: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  const handlePlanetClick = (name: string) => {
    setSelectedPlanet((prev) => (prev === name ? null : name));
  };

  const handleQuiz = (answer: string) => {
    setQuizAnswer(answer);
  };

  const isCorrect = quizAnswer === "Marte";

  return (
    <div className="rounded-3xl bg-white/90 p-6 shadow-lg border border-emerald-100 space-y-4">
      <h1 className="text-2xl font-bold text-emerald-700 flex items-center gap-2">
        <span>🪐</span>
        <span>Ciencias naturales: Sistema solar</span>
      </h1>

      <p className="text-sm text-slate-700">
        Explora algunos de los planetas del sistema solar. Haz clic en cada tarjeta
        para descubrir un dato curioso.
      </p>

      {/* Tarjetas de planetas */}
      <div className="grid gap-4 md:grid-cols-2">
        {planets.map((planet) => {
          const isOpen = selectedPlanet === planet.name;

          return (
            <button
              key={planet.name}
              type="button"
              onClick={() => handlePlanetClick(planet.name)}
              className={`text-left rounded-3xl px-4 py-3 shadow border transition flex flex-col gap-1 ${
                isOpen
                  ? "bg-emerald-100 border-emerald-300"
                  : "bg-emerald-50 border-emerald-100 hover:bg-emerald-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{planet.emoji}</span>
                  <span className="font-semibold text-emerald-900">
                    {planet.name}
                  </span>
                </div>
                <span className="text-xs text-emerald-700">
                  {isOpen ? "Ver menos ▲" : "Ver más ▼"}
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-1">{planet.description}</p>
              {isOpen && (
                <p className="mt-2 text-xs text-slate-600">{planet.extra}</p>
              )}
            </button>
          );
        })}
      </div>

      {/* Mini quiz */}
      <section className="mt-6 space-y-2">
        <h2 className="text-lg font-semibold text-emerald-700 flex items-center gap-2">
          <span>🧠</span>
          <span>Mini quiz: el planeta rojo</span>
        </h2>
        <p className="text-sm text-slate-700">
          ¿Cuál de estos planetas es conocido como el <strong>planeta rojo</strong>?
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {["Mercurio", "Venus", "Tierra", "Marte"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleQuiz(option)}
              className={`px-3 py-1 rounded-full text-sm font-semibold shadow transition ${
                quizAnswer === option
                  ? "bg-emerald-500 text-white"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {quizAnswer && (
          <div className="mt-3">
            {isCorrect ? (
              <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-100 px-3 py-2 text-emerald-800 text-sm shadow">
                <span className="text-xl">🎉</span>
                <span>¡Correcto! Marte es el planeta rojo.</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-2xl bg-rose-100 px-3 py-2 text-rose-800 text-sm shadow">
                <span className="text-xl">🙂</span>
                <span>
                  No pasa nada, la respuesta correcta es <strong>Marte</strong>.
                </span>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default SciencePage;
