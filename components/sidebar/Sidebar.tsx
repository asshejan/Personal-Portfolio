"use client";

import React from "react";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import DynamicRotatingText from "@/components/hero/DynamicRotatingText";
import ThemeToggle from "@/components/navbar/ThemeToggle";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, Phone, MapPin, FileText, ArrowUpRight, GraduationCap, Award, Calendar, Sparkles } from "lucide-react";

export default function Sidebar() {
  const nsuEducation = portfolio.education[0]; // North South University

  return (
    <aside className="w-full lg:w-[50%] lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:overflow-hidden bg-[var(--bg-card)] border-b lg:border-b-0 lg:border-r border-[var(--border-color)] p-6 lg:p-8 flex flex-col items-center justify-between text-center tech-grid-bg select-none">
      
      {/* Top Controls: Availability Badge & Theme Toggle */}
      <div className="w-full max-w-xl flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for AI Engineering Roles</span>
        </div>

        <ThemeToggle />
      </div>

      {/* Main Centered Profile Content */}
      <div className="w-full max-w-xl my-auto space-y-4 flex flex-col items-center">
        
        {/* Profile Image Centered */}
        <div className="relative group pt-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-sky-400/80 shadow-2xl mx-auto">
            <Image
              src={portfolio.personal.avatar}
              alt="Md Abu Sayeam Mondol Shejan"
              fill
              className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="140px"
            />
          </div>
        </div>

        {/* Name & Title Centered */}
        <div className="space-y-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text-primary)]">
            {portfolio.personal.name}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-sky-400 font-semibold">
            {portfolio.personal.title} — Omicon Group
          </p>
        </div>

        {/* Dynamic Rotating Expertise Phrase with Typewriter Animation */}
        <div className="flex justify-center w-full py-0.5">
          <DynamicRotatingText />
        </div>

        {/* Bio Paragraph Centered */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
          {portfolio.personal.bio}
        </p>

        {/* Executive University Education Card UI */}
        {nsuEducation && (
          <div className="w-full pt-2">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-left space-y-2 max-w-lg mx-auto hover:border-sky-500/30 transition-colors shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {nsuEducation.institution}
                    </h3>
                    <p className="text-[11px] font-mono text-[var(--text-muted)]">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[10px] font-mono font-bold text-sky-400">
                  {nsuEducation.period}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[var(--border-color)]">
                <p className="text-xs font-mono font-semibold text-sky-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{nsuEducation.degree}</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Button Centered */}
        <div className="pt-1">
          <a
            href={portfolio.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-sky-500/30 transform hover:-translate-y-0.5"
            id="sidebar-view-resume-btn"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume (PDF)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Bottom Footer Info & Social Links Centered */}
      <div className="w-full max-w-xl pt-4 border-t border-[var(--border-color)] space-y-3">
        
        {/* Contact details */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
          <a href={`mailto:${portfolio.personal.email}`} className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>{portfolio.personal.email}</span>
          </a>

          <a href={`tel:${portfolio.personal.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{portfolio.personal.phone}</span>
          </a>

          <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
            <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>{portfolio.personal.location}</span>
          </div>
        </div>

        {/* Social Icons Bar Centered */}
        <div className="flex items-center justify-center gap-3 pt-0.5">
          <a
            href={portfolio.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={portfolio.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${portfolio.personal.email}`}
            className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400 transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs font-mono text-[var(--text-muted)]">
          © {new Date().getFullYear()} Md Abu Sayeam Mondol Shejan — AI Engineer
        </p>

      </div>

    </aside>
  );
}
