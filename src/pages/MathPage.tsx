import React, { useState } from 'react';

type Operation = 'suma' | 'resta' | 'multiplicacion' | 'division';

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MathPage: React.FC = () => {
  const [operation, setOperation] = useState<Operation>('suma');
  const [a, setA] = useState<number>(getRandomInt(0, 100));
  const [b, setB] = useState<number>(getRandomInt(0, 100));
  const [answer, setAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const calculateResult = () => {
    switch (operation) {
      case 'suma':
        return a + b;
      case 'resta':
        return a - b;
      case 'multiplicacion':
        return a * b;
      case 'division':
        // evitamos divisiones con decimales raros
        return b === 0 ? 0 : Math.floor(a / b);
      default:
        return 0;
    }
  };

  const generateExercise = (op: Operation = operation) => {
    const newA = getRandomInt(0, 100);
    const newB = getRandomInt(0, 100);
    setOperation(op);
    setA(newA);
    setB(newB);
    setAnswer('');
    setFeedback('');
  };

  const handleCheck = () => {
    const expected = calculateResult();
    const userValue = Number(answer);
    const isCorrect = userValue === expected;

    setTotal((prev) => prev + 1);
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setFeedback('✅ ¡Correcto! ¡Buen trabajo!');
    } else {
      setFeedback(`❌ Incorrecto. La respuesta correcta era ${expected}.`);
    }
    // Nuevo ejercicio
    generateExercise();
  };

  const handleChangeOperation = (op: Operation) => {
    generateExercise(op);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Matemáticas: Operaciones básicas</h1>
      <p>
        Selecciona el tipo de operación y resuelve los ejercicios. El sistema
        generará números naturales entre 0 y 100.
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          className="px-3 py-1 border rounded"
          onClick={() => handleChangeOperation('suma')}
        >
          Suma
        </button>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => handleChangeOperation('resta')}
        >
          Resta
        </button>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => handleChangeOperation('multiplicacion')}
        >
          Multiplicación
        </button>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => handleChangeOperation('division')}
        >
          División (entera)
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-lg">
          Ejercicio: <strong>{a}</strong> {operation === 'suma' && '+'}
          {operation === 'resta' && '-'}
          {operation === 'multiplicacion' && '×'}
          {operation === 'division' && '÷'} <strong>{b}</strong> = ?
        </p>

        <input
          type="number"
          className="border rounded px-2 py-1"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button
          className="ml-2 px-3 py-1 border rounded"
          onClick={handleCheck}
        >
          Comprobar
        </button>
      </div>

      {feedback && <p>{feedback}</p>}

      <div>
        <p>
          Puntaje: <strong>{score}</strong> correctas de {total} intentos.
        </p>
      </div>
    </div>
  );
};

export default MathPage;
