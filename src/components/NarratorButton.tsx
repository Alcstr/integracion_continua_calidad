// src/components/NarratorButton.tsx
import React, { useState, useEffect } from "react";

interface NarratorButtonProps {
  text: string;
  label?: string;
}

const NarratorButton: React.FC<NarratorButtonProps> = ({ text, label }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleClick = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Tu navegador no soporta narración por voz.");
      return;
    }

    // Detener cualquier narración previa
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Limpieza por si el componente se desmonta mientras narra
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isSpeaking}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold shadow 
      border border-indigo-300 bg-indigo-50 text-indigo-700 
      hover:bg-indigo-100 hover:-translate-y-0.5 active:translate-y-0 
      transition-transform transition-colors
      disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      <span>{isSpeaking ? "🔊" : "🗣️"}</span>
      <span>{label ?? "Escuchar"}</span>
    </button>
  );
};

export default NarratorButton;
