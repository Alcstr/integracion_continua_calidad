import React from 'react';

type Planet = {
  name: string;
  type: string;
  distance: string;
  description: string;
};

const planets: Planet[] = [
  {
    name: 'Mercurio',
    type: 'Planeta rocoso',
    distance: '57,9 millones de km',
    description:
      'Es el planeta más cercano al Sol y el más pequeño del sistema solar.',
  },
  {
    name: 'Venus',
    type: 'Planeta rocoso',
    distance: '108,2 millones de km',
    description:
      'Tiene una atmósfera muy densa y es el planeta más caliente.',
  },
  {
    name: 'Tierra',
    type: 'Planeta rocoso',
    distance: '149,6 millones de km',
    description:
      'Nuestro planeta, el único conocido con vida gracias al agua líquida.',
  },
  {
    name: 'Marte',
    type: 'Planeta rocoso',
    distance: '227,9 millones de km',
    description:
      'Conocido como el planeta rojo por el óxido de hierro en su superficie.',
  },
];

const SciencePage: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Ciencias naturales: Sistema solar</h1>
      <p>
        Explora algunos de los planetas del sistema solar. Haz clic en cada
        tarjeta para leer su descripción.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {planets.map((planet) => (
          <details
            key={planet.name}
            className="border rounded p-3 bg-white shadow-sm"
          >
            <summary className="cursor-pointer font-semibold">
              {planet.name}
            </summary>
            <p className="mt-2">
              <strong>Tipo:</strong> {planet.type}
            </p>
            <p>
              <strong>Distancia al Sol:</strong> {planet.distance}
            </p>
            <p className="mt-1">{planet.description}</p>
          </details>
        ))}
      </div>

      <p className="mt-4">
        Actividad: elige un planeta y explica con tus propias palabras por qué
        crees que podría o no tener condiciones para la vida.
      </p>
    </div>
  );
};

export default SciencePage;
