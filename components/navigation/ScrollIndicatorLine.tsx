"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Code2 } from "lucide-react";

export default function ScrollIndicatorLine() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });
  
  // Dynamic position calculation: when dragging, use dragProgress directly for 1:1 instant tracking; otherwise use smooth scroll progress
  const lineTopPercent = useTransform(smoothProgress, [0, 1], ["2%", "96%"]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateScroll(e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateScroll(e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    setDragProgress(null);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const updateScroll = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const clampedY = Math.max(0, Math.min(rect.height, relativeY));
    const progress = clampedY / rect.height;

    setDragProgress(progress);

    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: progress * maxScroll,
      behavior: "auto" // 1:1 Instant scroll
    });
  };

  return (
    <div
      ref={trackRef}
      className="hidden lg:block fixed top-0 left-[50%] -translate-x-1/2 h-screen z-50 pointer-events-none w-10"
    >
      {/* Background Vertical Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-slate-800/70" />

      {/* Filled Progress Line */}
      <motion.div
        style={{
          scaleY: isDragging && dragProgress !== null ? dragProgress : smoothProgress,
          transformOrigin: "top"
        }}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2.5px] bg-gradient-to-b from-sky-400 via-indigo-400 to-emerald-400"
      />

      {/* Draggable Code Node `</>` */}
      <motion.div
        style={{
          top: isDragging && dragProgress !== null ? `${dragProgress * 100}%` : lineTopPercent
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 1.15 }}
        className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-sky-400 bg-slate-950 text-sky-400 p-1 shadow-xl shadow-sky-500/50 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing font-mono font-black text-xs select-none transition-shadow duration-300 ${
          isDragging ? "ring-4 ring-sky-400/40 bg-sky-500 text-slate-950 border-white" : ""
        }`}
        title="Drag </ > up or down to scroll page"
      >
        <span className="tracking-tighter font-extrabold text-[11px] select-none">
          &lt;/&gt;
        </span>
      </motion.div>
    </div>
  );
}
