"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import ScrollTypography from "@/components/animations/ScrollTypography";
import RevealText from "@/components/animations/RevealText";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative tech-grid-bg border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <RevealText>
            <span className="text-xs font-mono tracking-widest uppercase text-sky-400">
              Academic Qualifications
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <ScrollTypography
              text="EDUCATION & DEGREES"
              className="text-3xl sm:text-5xl font-black"
            />
          </RevealText>
        </div>

        {/* Flat Editorial Education List (No Cards!) */}
        <div className="divide-y divide-[var(--border-color)] pt-2 border-t border-[var(--border-color)]">
          {portfolio.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-8 first:pt-4 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  {edu.institution}
                </h3>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-sky-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </span>
              </div>

              <p className="text-sm font-semibold text-sky-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>{edu.degree}</span>
              </p>

              {edu.details && (
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
