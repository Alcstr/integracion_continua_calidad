import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MathPage from './pages/MathPage';
import SciencePage from './pages/SciencePage';
import LogicPage from './pages/LogicPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex flex-wrap gap-4">
          <Link to="/" className="font-semibold">
            Inicio
          </Link>
          <Link to="/matematicas">Matemáticas</Link>
          <Link to="/ciencias">Ciencias naturales</Link>
          <Link to="/logica">Pensamiento lógico</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto mt-4">
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
