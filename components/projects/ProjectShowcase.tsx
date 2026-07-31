"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import ScrollTypography from "@/components/animations/ScrollTypography";
import RevealText from "@/components/animations/RevealText";
import ArchitectureDiagrams from "./ArchitectureDiagrams";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowUpRight, Cpu, CheckCircle2, Sparkles } from "lucide-react";

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 relative tech-grid-bg border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <RevealText>
            <span className="text-xs font-mono tracking-widest uppercase text-sky-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              Featured AI Engineering Portfolio
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <ScrollTypography
              text="FEATURED AI PROJECTS"
              className="text-3xl sm:text-5xl font-black"
            />
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Production AI systems, fine-tuned LLMs, local RAG pipelines, and medical computer vision backbones built by Shejan.
            </p>
          </RevealText>
        </div>

        {/* Project Entries Separated by Clean Borders (No Floating Cards!) */}
        <div className="divide-y divide-[var(--border-color)] border-t border-[var(--border-color)]">
          {portfolio.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-12 first:pt-8 space-y-6"
            >
              {/* Project Header */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <span className="text-sky-400 font-bold uppercase">
                    PROJECT 0{idx + 1} // {project.category}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-sky-400 hover:text-sky-400 font-bold text-xs transition-colors"
                    id={`project-github-btn-${project.id}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  {project.summary}
                </p>
              </div>

              {/* Highlights & Benchmarks */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                <div className="lg:col-span-7 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.metrics && (
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Performance Metrics:
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-center font-mono">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)]">
                          <div className="text-[9px] text-[var(--text-muted)] uppercase">{m.label}</div>
                          <div className="text-xs font-bold text-sky-400 mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Architecture Diagram Rendered Flat */}
              <div className="pt-2">
                <ArchitectureDiagrams type={project.architectureType} />
              </div>

              {/* Stack Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[var(--text-muted)]">Stack:</span>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border border-[var(--border-color)] bg-[var(--bg-primary)] text-sky-300"
                  >
                    {tool}
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
