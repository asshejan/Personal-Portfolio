"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolio } from "@/data/portfolio";
import ScrollTypography from "@/components/animations/ScrollTypography";
import RevealText from "@/components/animations/RevealText";
import { TechIcon } from "@/components/ui/TechIcons";
import { Cpu, Globe, Cloud, Database, Code2, Layout, Zap, Wrench, CheckCircle } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI / Machine Learning": <Cpu className="w-4 h-4 text-sky-400" />,
  "Web & API": <Globe className="w-4 h-4 text-indigo-400" />,
  "Cloud & DevOps": <Cloud className="w-4 h-4 text-emerald-400" />,
  "Databases": <Database className="w-4 h-4 text-amber-400" />,
  "Programming": <Code2 className="w-4 h-4 text-purple-400" />,
  "Frontend": <Layout className="w-4 h-4 text-pink-400" />,
  "Automation": <Zap className="w-4 h-4 text-yellow-400" />,
  "Tools & Hardware": <Wrench className="w-4 h-4 text-cyan-400" />
};

export default function SkillsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ["All", ...portfolio.skillCategories.map(c => c.title)];

  const filteredCategories = selectedCategory === "All"
    ? portfolio.skillCategories
    : portfolio.skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 relative tech-grid-bg border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <RevealText>
            <span className="text-xs font-mono tracking-widest uppercase text-sky-400">
              Technical Stack & Ecosystem
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <ScrollTypography
              text="AI ENGINEERING STACK"
              className="text-3xl sm:text-5xl font-black"
            />
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Comprehensive list of tools, libraries, cloud architectures, and languages mastered across research & production pipelines.
            </p>
          </RevealText>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 border ${
                  isSelected
                    ? "bg-sky-500/20 text-sky-400 font-bold border-sky-400 shadow-sm"
                    : "bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-sky-500/40 hover:text-[var(--text-primary)]"
                }`}
                id={`skill-tab-${cat.toLowerCase().replace(/[^a-z0-0]/g, '-')}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Flat Border-Divided Skills Categories (No Floating Cards!) */}
        <div className="divide-y divide-[var(--border-color)] border-t border-[var(--border-color)]">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((catGroup, idx) => (
              <motion.div
                key={catGroup.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="py-8 first:pt-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {categoryIcons[catGroup.title] || <Cpu className="w-4 h-4 text-sky-400" />}
                    <h3 className="text-sm font-bold text-[var(--text-primary)] font-mono uppercase tracking-wider">
                      {catGroup.title}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {catGroup.skills.length} MODULES
                  </span>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {catGroup.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default flex items-center gap-2 border ${
                          isHovered
                            ? "bg-sky-500/15 text-sky-300 border-sky-400/60 font-semibold scale-[1.03]"
                            : "bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-sky-500/30 hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <TechIcon name={skill.name} className="w-3.5 h-3.5 shrink-0 text-sky-400" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Key Capabilities Section (Flat Border-Separated) */}
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            <h3 className="text-base font-bold text-[var(--text-primary)] tracking-wide font-mono uppercase">
              Engineering Core Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {portfolio.keyCapabilities.map((cap, cIdx) => (
              <div key={cIdx} className="flex items-start gap-2.5 p-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
