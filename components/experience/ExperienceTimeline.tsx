"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import ScrollTypography from "@/components/animations/ScrollTypography";
import RevealText from "@/components/animations/RevealText";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative tech-grid-bg border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <RevealText>
            <span className="text-xs font-mono tracking-widest uppercase text-sky-400">
              Professional Journey
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <ScrollTypography
              text="WORK EXPERIENCE"
              className="text-3xl sm:text-5xl font-black"
            />
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Hands-on AI engineering experience driving production LLM fine-tuning, RAG systems, and medical vision backbones.
            </p>
          </RevealText>
        </div>

        {/* Vertical Editorial Timeline (No Floating Cards!) */}
        <div className="relative border-l-2 border-sky-500/40 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-12">
          {portfolio.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative space-y-4"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-sky-400 bg-slate-950 shadow-md shadow-sky-500/50" />

              {/* Role Header */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-sky-400">
                  <span className="flex items-center gap-1 font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-mono font-bold text-sky-400">
                  {exp.company} {exp.group && <span className="text-[var(--text-secondary)] font-normal">({exp.group})</span>}
                </h4>
              </div>

              {/* Responsibilities & Impact */}
              <div className="pt-2 space-y-2.5">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-1" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[var(--text-muted)]">Stack:</span>
                {exp.technologies.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border border-[var(--border-color)] bg-[var(--bg-primary)] text-sky-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
