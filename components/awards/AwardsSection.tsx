"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import ScrollTypography from "@/components/animations/ScrollTypography";
import RevealText from "@/components/animations/RevealText";
import { Trophy, Calendar, Sparkles } from "lucide-react";

export default function AwardsSection() {
  if (!portfolio.awards || portfolio.awards.length === 0) return null;

  return (
    <section id="awards" className="py-20 relative tech-grid-bg border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <RevealText>
            <span className="text-xs font-mono tracking-widest uppercase text-sky-400 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              Honors & Achievements
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <ScrollTypography
              text="AWARDS & COMPETITIONS"
              className="text-3xl sm:text-5xl font-black"
            />
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Competitive hackathons and national engineering contests demonstrating rapid innovation and AI system building.
            </p>
          </RevealText>
        </div>

        {/* Awards Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolio.awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-500/5 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {award.period}
                  </span>
                </div>

                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-1.5">
                    {award.title}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-amber-300 transition-colors">
                    {award.competition}
                  </h3>
                  {award.linkText && (
                    <p className="text-xs font-mono text-sky-400">
                      {award.linkText}
                    </p>
                  )}
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]/60 mt-4 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1 text-sky-400">
                  <Sparkles className="w-3 h-3" />
                  {award.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
