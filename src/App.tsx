// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MathPage from "./pages/MathPage";
import SciencePage from "./pages/SciencePage";
import LogicPage from "./pages/LogicPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-indigo-100 text-slate-800">
        <header className="bg-indigo-500 text-white shadow-md">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link to="/" className="text-xl font-bold tracking-wide flex items-center gap-2">
              <span>🌟</span>
              <span>Mentes Creativas</span>
            </Link>

            <ul className="flex gap-4 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-yellow-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/matematicas" className="hover:text-yellow-200">
                  Matemáticas
                </Link>
              </li>
              <li>
                <Link to="/ciencias" className="hover:text-yellow-200">
                  Ciencias
                </Link>
              </li>
              <li>
                <Link to="/logica" className="hover:text-yellow-200">
                  Lógica
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/matematicas" element={<MathPage />} />
            <Route path="/ciencias" element={<SciencePage />} />
            <Route path="/logica" element={<LogicPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
