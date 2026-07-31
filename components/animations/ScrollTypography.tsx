"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface ScrollTypographyProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function ScrollTypography({
  text,
  className = "",
  as: Component = "h2"
}: ScrollTypographyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"]
  });

  // Interpolate progress states
  // 0.0 - 0.25: Solid Primary (White in dark mode / Dark in light mode)
  // 0.25 - 0.5: Stroke + Fill
  // 0.5 - 0.75: Transparent Fill + Crisp Stroke
  // 0.75 - 1.0: Muted / Contrasting Fill
  const fillOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [1, 0.7, 0.1, 0.95]);
  const strokeOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.2, 1, 1, 0.4]);
  const tracking = useTransform(scrollYProgress, [0, 0.5, 1], ["0em", "-0.01em", "0.02em"]);

  const isDark = theme === "dark";
  const primaryColor = isDark ? "rgb(248, 250, 252)" : "rgb(15, 23, 42)";
  const strokeColor = isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(15, 23, 42, 0.9)";
  const finalColor = isDark ? "rgb(56, 189, 248)" : "rgb(2, 132, 199)";

  return (
    <div ref={containerRef} className="relative inline-block overflow-hidden py-1">
      <motion.div
        style={{
          letterSpacing: tracking
        }}
        className={`font-extrabold tracking-tight transition-colors duration-300 ${className}`}
      >
        <motion.span
          style={{
            color: useTransform(
              scrollYProgress,
              [0, 0.4, 0.7, 1],
              [primaryColor, primaryColor, "transparent", finalColor]
            ),
            WebkitTextStrokeWidth: useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ["0px", "1px", "1.5px", "0px"]),
            WebkitTextStrokeColor: strokeColor,
          }}
          className="inline-block"
        >
          {text}
        </motion.span>
      </motion.div>
    </div>
  );
}
