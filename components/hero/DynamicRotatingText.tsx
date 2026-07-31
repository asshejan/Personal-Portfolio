"use client";

import React, { useState, useEffect } from "react";
import { portfolio } from "@/data/portfolio";

export default function DynamicRotatingText() {
  const phrases = portfolio.heroRotator;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[phraseIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Backspacing
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          return;
        }
      }
    };

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleType, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases]);

  return (
    <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-[var(--text-secondary)]">
      <span>Architecting & Building</span>
      <span className="text-sky-400 font-bold tracking-wide">
        {currentText}
      </span>
      {/* Blinking Typewriter Cursor Pipe | */}
      <span className="inline-block w-[2px] h-4 bg-sky-400 animate-pulse ml-0.5" />
    </div>
  );
}
