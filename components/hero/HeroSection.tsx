"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import ScrollTypography from "@/components/animations/ScrollTypography";
import RevealText from "@/components/animations/RevealText";
import { Cpu, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="about" className="py-16 lg:py-20 relative tech-grid-bg">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Tag */}
        <div className="space-y-4 mb-8">
          <RevealText>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Engineering Profile</span>
            </div>
          </RevealText>

          <RevealText delay={0.1}>
            <ScrollTypography
              text="BUILD INTELLIGENT"
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight uppercase"
            />
          </RevealText>
          <RevealText delay={0.2}>
            <ScrollTypography
              text="PRODUCTION AI SYSTEMS"
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight uppercase text-sky-400"
            />
          </RevealText>
        </div>

        {/* Detailed Profile Summary derived from CV */}
        <RevealText delay={0.3}>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
              Engineering Expertise Overview
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {portfolio.personal.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--border-color)]">
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>LangGraph Multi-Agent Workflows</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Qwen3 & LLaMA 3.2 Fine-Tuning</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Retrieval-Augmented Generation (RAG)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>BraTS MRI Medical Computer Vision</span>
              </div>
            </div>
          </div>
        </RevealText>

      </div>
    </section>
  );
}
