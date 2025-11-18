import React, { useState } from 'react';

type SequenceQuestion = {
  sequence: string;
  options: number[];
  correct: number;
};

const questions: SequenceQuestion[] = [
  {
    sequence: '2, 4, 6, 8, ?',
    options: [9, 10, 12],
    correct: 10,
  },
  {
    sequence: '5, 10, 15, ?, 25',
    options: [18, 20, 22],
    correct: 20,
  },
  {
    sequence: '1, 1, 2, 3, 5, ?',
    options: [8, 6, 7],
    correct: 8,
  },
];

const LogicPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState('');

  const question = questions[current];

  const handleAnswer = (option: number) => {
    const isCorrect = option === question.correct;
    setTotal((prev) => prev + 1);
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setFeedback('✅ ¡Correcto! Identificaste el patrón.');
    } else {
      setFeedback(
        `❌ Incorrecto. La respuesta correcta era ${question.correct}.`,
      );
    }

    const nextIndex = (current + 1) % questions.length;
    setCurrent(nextIndex);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">
        Pensamiento lógico: Secuencias y patrones
      </h1>
      <p>
        Observa la secuencia y selecciona la opción que completa correctamente
        el patrón.
      </p>

      <div className="space-y-2">
        <p className="text-lg">
          Secuencia: <strong>{question.sequence}</strong>
        </p>
        <div className="flex flex-wrap gap-2">
          {question.options.map((option) => (
            <button
              key={option}
              className="px-3 py-1 border rounded"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {feedback && <p>{feedback}</p>}

      <p>
        Secuencias resueltas correctamente: <strong>{score}</strong> de {total}
        .
      </p>
    </div>
  );
};

export default LogicPage;
