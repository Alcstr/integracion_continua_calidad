import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Colegio Mentes Creativas</h1>
      <p>
        Bienvenido a la aplicación educativa para estudiantes de 4° y 5° grado.
        Selecciona una de las áreas temáticas del menú para comenzar.
      </p>
      <p>
        Objetivo: apoyar el proceso de enseñanza-aprendizaje mediante recursos
        interactivos y multimedia en Matemáticas, Ciencias Naturales y
        Pensamiento Lógico.
      </p>
    </div>
  );
};

export default HomePage;
