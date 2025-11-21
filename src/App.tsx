// src/views/App.tsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MathPage from "./pages/MathPage";
import SciencePage from "./pages/SciencePage";
import LogicPage from "./pages/LogicPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-indigo-50 text-slate-800">
      {/* CABECERA */}
      <header className="bg-indigo-500 text-white shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🌈</span>
            <span className="text-xl font-bold tracking-wide">
              Mentes Creativas
            </span>
          </Link>

          <nav>
            <ul className="flex gap-4 text-sm font-semibold">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-200 transition-transform hover:-translate-y-0.5"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/matematicas"
                  className="hover:text-yellow-200 transition-transform hover:-translate-y-0.5"
                >
                  Matemáticas
                </Link>
              </li>
              <li>
                <Link
                  to="/ciencias"
                  className="hover:text-yellow-200 transition-transform hover:-translate-y-0.5"
                >
                  Ciencias
                </Link>
              </li>
              <li>
                <Link
                  to="/logica"
                  className="hover:text-yellow-200 transition-transform hover:-translate-y-0.5"
                >
                  Lógica
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 pb-10 pt-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/matematicas" element={<MathPage />} />
          <Route path="/ciencias" element={<SciencePage />} />
          <Route path="/logica" element={<LogicPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
