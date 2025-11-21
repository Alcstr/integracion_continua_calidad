// src/pages/SciencePage.tsx
import React from "react";
import NarratorButton from "../components/NarratorButton";

const planetFacts = [
  {
    name: "Mercurio",
    fact: "Es el planeta más cercano al Sol y tiene días muy largos.",
  },
  {
    name: "Venus",
    fact: "Es el planeta más caliente del sistema solar.",
  },
  {
    name: "Tierra",
    fact: "Es nuestro hogar y el único planeta conocido con vida.",
  },
  {
    name: "Marte",
    fact: "Es conocido como el planeta rojo por el color de su superficie.",
  },
];

const SciencePage: React.FC = () => {
  const quizText = "¿Cuál es el planeta conocido como el planeta rojo?";

  return (
    <div className="space-y-6">
      <section className="bg-white/80 rounded-3xl shadow-lg p-6 border border-emerald-100">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-emerald-700">
              Ciencias naturales: Sistema solar
            </h1>
            <p className="text-slate-600 mt-1">
              Explora algunos planetas del sistema solar y responde el mini
              quiz. ¡Puedes escuchar la explicación con el narrador!
            </p>
          </div>
          <NarratorButton
            text="Bienvenido a la clase de ciencias. Hoy aprenderemos sobre algunos planetas del sistema solar: Mercurio, Venus, la Tierra y Marte."
            label="Escuchar introducción"
          />
        </header>

        {/* Lista de planetas */}
        <div className="grid gap-3 md:grid-cols-2">
          {planetFacts.map((planet) => (
            <article
              key={planet.name}
              className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-sky-50 p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-emerald-700 flex items-center gap-2">
                  <span>🪐</span>
                  <span>{planet.name}</span>
                </h2>
                <NarratorButton
                  text={`${planet.name}. ${planet.fact}`}
                  label="Escuchar"
                />
              </div>
              <p className="text-sm text-slate-700">{planet.fact}</p>
            </article>
          ))}
        </div>

        {/* Mini quiz */}
        <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <p className="font-semibold text-sky-800">{quizText}</p>
            <NarratorButton text={quizText} label="Leer pregunta" />
          </div>
          <p className="text-sm text-slate-600 mb-2">
            Pista: es un planeta de color rojo 🌕.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="px-3 py-1 rounded-full border bg-white hover:bg-sky-100 text-slate-700 text-sm"
            >
              Mercurio
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded-full border bg-white hover:bg-sky-100 text-slate-700 text-sm"
            >
              Venus
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded-full border bg-white hover:bg-sky-100 text-slate-700 text-sm"
            >
              Tierra
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded-full border bg-emerald-500 text-white text-sm shadow hover:bg-emerald-600"
            >
              Marte ✅
            </button>
          </div>
          <p className="mt-3 text-sm text-emerald-700 font-semibold">
            Marte es el planeta rojo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;
