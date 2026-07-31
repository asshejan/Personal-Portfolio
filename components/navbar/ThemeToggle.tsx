"use client";

import React from "react";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-cyan)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)]"
      aria-label="Toggle Dark and Light Theme"
      id="theme-toggle-btn"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-5 h-5 flex items-center justify-center text-[var(--text-primary)]"
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-sky-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
