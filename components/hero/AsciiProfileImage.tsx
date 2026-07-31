"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  normX: number; // normalized coordinate (0 to 1)
  normY: number; // normalized coordinate (0 to 1)
  vx: number;
  vy: number;
  // Real colors (RGB values)
  r: number;
  g: number;
  b: number;
  // Theme colors (RGBA values)
  tr: number;
  tg: number;
  tb: number;
  ta: number;
  char: string;
  brightness: number;
}

interface AsciiProfileImageProps {
  imageSrc: string;
  gridResolution?: number; // Density of characters (default: 90)
  themeColor?: string; // Color used for "theme" color mode (default: "#38bdf8")
  colorMode?: "original" | "theme"; // Rendering color scheme (default: "original")
  fontSize?: number; // Font size of ASCII characters (default: 8.0)
  pushStrength?: number; // Strength of mouse repulsion (default: 0.04)
  mouseRadius?: number; // Radius of mouse influence (default: 45)
  springStrength?: number; // Gravity returning particles (default: 0.12)
  friction?: number; // Velocity decay factors (default: 0.78)
}

const charsPreset = "`.\":-+*="; // ASCII gradient: darkest to brightest density

const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 56, g: 189, b: 248 };
};

export default function AsciiProfileImage({
  imageSrc,
  gridResolution = 90,
  themeColor = "#38bdf8",
  colorMode = "original",
  fontSize = 8.0,
  pushStrength = 0.04,
  mouseRadius = 45,
  springStrength = 0.12,
  friction = 0.78,
}: AsciiProfileImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const imageLoadedRef = useRef<boolean>(false);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const animationFrameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [isSettled, setIsSettled] = useState(false);
  const isSettledRef = useRef(false);
  const colorProgressRef = useRef<number>(colorMode === "original" ? 1.0 : 0.0);

  const [viewMode, setViewMode] = useState<"ascii" | "original">("ascii");
  const [colorModeState, setColorModeState] = useState<"original" | "theme">(colorMode);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 384,
    height: 384,
  });

  // Automatically toggle color scheme every 6 seconds smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setColorModeState((prev) => (prev === "theme" ? "original" : "theme"));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Handle Resize and get bounding dims
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({
          width: Math.floor(rect.width),
          height: Math.floor(rect.height),
        });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Set up Canvas DPR and scale particles when dimensions change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dimensions.width || !dimensions.height) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    
    ctx.scale(dpr, dpr);

    const particles = particlesRef.current;
    particles.forEach((part) => {
      const targetX = part.normX * dimensions.width;
      const targetY = part.normY * dimensions.height;
      part.targetX = targetX;
      part.targetY = targetY;
      
      if (part.x === 0 && part.y === 0) {
        part.x = targetX + (Math.random() - 0.5) * 20;
        part.y = targetY + (Math.random() - 0.5) * 20;
      }
    });
  }, [dimensions]);

  // Load and sample the image
  useEffect(() => {
    if (imageLoadedRef.current) return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      imageLoadedRef.current = true;
      
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;

      const sampleWidth = gridResolution;
      const aspect = img.height / img.width;
      const sampleHeight = Math.round(sampleWidth * aspect);

      tempCanvas.width = sampleWidth;
      tempCanvas.height = sampleHeight;
      tempCtx.drawImage(img, 0, 0, sampleWidth, sampleHeight);

      const imgData = tempCtx.getImageData(0, 0, sampleWidth, sampleHeight);
      const data = imgData.data;

      const newParticles: Particle[] = [];
      const themeRgb = hexToRgb(themeColor);

      for (let y = 0; y < sampleHeight; y++) {
        for (let x = 0; x < sampleWidth; x++) {
          const idx = (y * sampleWidth + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];

          if (a < 128) continue;

          const normX = x / sampleWidth;
          const normY = y / sampleHeight;

          // Focus filter for person (center subject area)
          if (normX < 0.08 || normX > 0.92) continue;
          if (normY < 0.02) continue;

          // Luma brightness formula
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          if (brightness < 30) continue;

          // S-curve contrast expansion mapping for face definition
          let normBrightness = (brightness - 30) / (220 - 30);
          normBrightness = Math.max(0, Math.min(1, normBrightness));
          const contrastBrightness = 3 * Math.pow(normBrightness, 2) - 2 * Math.pow(normBrightness, 3);

          const charIdx = Math.floor(contrastBrightness * (charsPreset.length - 1));
          const char = charsPreset[charIdx];

          const scale = Math.max(1.35, 112 / (brightness || 1));
          const adjR = Math.min(255, Math.floor(r * scale));
          const adjG = Math.min(255, Math.floor(g * scale));
          const adjB = Math.min(255, Math.floor(b * scale));
          
          const avg = (adjR + adjG + adjB) / 3;
          const satR = Math.min(255, Math.max(0, Math.floor(avg + (adjR - avg) * 1.25)));
          const satG = Math.min(255, Math.max(0, Math.floor(avg + (adjG - avg) * 1.25)));
          const satB = Math.min(255, Math.max(0, Math.floor(avg + (adjB - avg) * 1.25)));
          
          const opacity = Math.min(1.0, (brightness / 255) * 0.55 + 0.45);

          newParticles.push({
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            normX,
            normY,
            vx: 0,
            vy: 0,
            r: satR,
            g: satG,
            b: satB,
            tr: themeRgb.r,
            tg: themeRgb.g,
            tb: themeRgb.b,
            ta: opacity,
            char,
            brightness,
          });
        }
      }

      particlesRef.current = newParticles;

      const width = dimensions.width;
      const height = dimensions.height;
      
      newParticles.forEach((part) => {
        const targetX = part.normX * width;
        const targetY = part.normY * height;
        part.targetX = targetX;
        part.targetY = targetY;
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * 80;
        part.x = targetX + Math.cos(angle) * dist;
        part.y = targetY + Math.sin(angle) * dist;
        part.vx = (Math.random() - 0.5) * 2;
        part.vy = (Math.random() - 0.5) * 2;
      });
      startTimeRef.current = Date.now();
    };
  }, [imageSrc, gridResolution, themeColor, dimensions.width, dimensions.height]);

  // Main animation loops
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      const targetProgress = colorModeState === "original" ? 1.0 : 0.0;
      const progressDiff = targetProgress - colorProgressRef.current;
      if (Math.abs(progressDiff) > 0.001) {
        colorProgressRef.current += Math.sign(progressDiff) * 0.015;
        colorProgressRef.current = Math.max(0.0, Math.min(1.0, colorProgressRef.current));
      } else {
        colorProgressRef.current = targetProgress;
      }
      const progress = colorProgressRef.current;

      const ATOM_DURATION_MS = 4500;
      const now = Date.now();
      const elapsed = startTimeRef.current !== null ? now - startTimeRef.current : ATOM_DURATION_MS + 1;
      const inAtomPhase = elapsed < ATOM_DURATION_MS;
      const atomProgress = Math.min(1, elapsed / ATOM_DURATION_MS);
      const eased = atomProgress * atomProgress * (3 - 2 * atomProgress);

      if (!inAtomPhase && !isSettledRef.current) {
        isSettledRef.current = true;
        setIsSettled(true);
      }

      const activeSpring = inAtomPhase
        ? springStrength * 0.1 + eased * springStrength * 0.9
        : springStrength;
      const activeFriction = inAtomPhase
        ? 0.97 - eased * (0.97 - friction)
        : friction;

      const activeMouseRadius = isSettledRef.current ? mouseRadius * 1.4 : mouseRadius * 0.4;
      const activePushStrength = isSettledRef.current ? pushStrength * 1.8 : pushStrength * 0.2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (inAtomPhase) {
          const orbitStrength = (1 - eased) * 0.3;
          const dxTarget = p.targetX - p.x;
          const dyTarget = p.targetY - p.y;
          p.vx += -dyTarget * orbitStrength * 0.001;
          p.vy += dxTarget * orbitStrength * 0.001;
          p.vx += (Math.random() - 0.5) * (1 - eased) * 0.08;
          p.vy += (Math.random() - 0.5) * (1 - eased) * 0.08;
        }

        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < activeMouseRadius) {
          const force = Math.pow((activeMouseRadius - distMouse) / activeMouseRadius, 1.4);
          const angle = Math.atan2(dyMouse, dxMouse);
          p.vx += Math.cos(angle) * force * activePushStrength * 120;
          p.vy += Math.sin(angle) * force * activePushStrength * 120;
        }

        const dxTarget = p.targetX - p.x;
        const dyTarget = p.targetY - p.y;
        p.vx += dxTarget * activeSpring;
        p.vy += dyTarget * activeSpring;

        p.vx *= activeFriction;
        p.vy *= activeFriction;

        p.x += p.vx;
        p.y += p.vy;

        if (!inAtomPhase && Math.abs(p.vx) < 0.01 && Math.abs(p.vy) < 0.01 && Math.abs(dxTarget) < 0.1 && Math.abs(dyTarget) < 0.1) {
          p.x = p.targetX;
          p.y = p.targetY;
          p.vx = 0;
          p.vy = 0;
        }

        const rVal = Math.round(p.tr + (p.r - p.tr) * progress);
        const gVal = Math.round(p.tg + (p.g - p.tg) * progress);
        const bVal = Math.round(p.tb + (p.b - p.tb) * progress);
        const aVal = p.ta + (1.0 - p.ta) * progress;

        ctx.fillStyle = `rgba(${rVal}, ${gVal}, ${bVal}, ${aVal.toFixed(2)})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    if (viewMode === "ascii") {
      animationFrameIdRef.current = requestAnimationFrame(render);
    }

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [dimensions, fontSize, mouseRadius, pushStrength, springStrength, friction, viewMode, colorModeState]);

  // Event listeners for cursor tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    const handleMouseEnterNative = () => {
      if (typeof document !== "undefined") document.body.classList.add("no-custom-cursor");
    };

    const handleMouseLeaveNative = () => {
      if (typeof document !== "undefined") document.body.classList.remove("no-custom-cursor");
      mouseRef.current = { x: -9999, y: -9999 };
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeaveNative, { passive: true });
    container.addEventListener("mouseenter", handleMouseEnterNative, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleMouseLeaveNative, { passive: true });
    container.addEventListener("touchstart", handleMouseEnterNative, { passive: true });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeaveNative);
      container.removeEventListener("mouseenter", handleMouseEnterNative);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleMouseLeaveNative);
      container.removeEventListener("touchstart", handleMouseEnterNative);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.classList.remove('no-custom-cursor');
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square rounded-2xl overflow-hidden border bg-[#070b14]/50 shadow-2xl group cursor-crosshair select-none transition-all duration-1000 ${
        isSettled
          ? "border-sky-500/30 shadow-[0_0_20px_rgba(56,189,248,0.08)]"
          : "border-slate-800/80"
      }`}
      data-no-circle-cursor="true"
    >
      {/* 1. ASCII Renderer Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          viewMode === "ascii" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ display: "block" }}
      />

      {/* 2. Original Portrait Display (Crossfaded) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          viewMode === "original" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay z-10 pointer-events-none" />
        <Image
          src={imageSrc}
          alt="Md Abu Sayeam Mondol Shejan — AI Engineer Profile Photo"
          fill
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cyber scanner animation line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-sky-400/40 opacity-50 animate-pulse pointer-events-none z-10" />

      {/* Control UI buttons overlay */}
      <div className="absolute bottom-3 right-3 z-20 flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
        {viewMode === "ascii" && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setColorModeState((prev) => (prev === "theme" ? "original" : "theme"));
            }}
            className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded border border-sky-500/40 bg-slate-950/95 text-sky-400 hover:bg-sky-500/10 transition-all cursor-pointer"
          >
            {colorModeState === "theme" ? "Colors" : "Matrix"}
          </button>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setViewMode((prev) => (prev === "ascii" ? "original" : "ascii"));
          }}
          className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded border border-sky-500/40 bg-slate-950/95 text-sky-400 hover:bg-sky-500/10 transition-all cursor-pointer shadow-md hover:shadow-[0_0_8px_rgba(56,189,248,0.35)]"
        >
          {viewMode === "ascii" ? "Photo" : "ASCII"}
        </button>
      </div>
    </div>
  );
}
