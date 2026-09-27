"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-bold text-base text-[var(--text-primary)]">
              {portfolio.personal.name}
            </h4>
            <p className="text-xs font-mono text-sky-400">
              {portfolio.personal.title} — Omicon Group
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] font-mono">
            <span>© {new Date().getFullYear()} Md Abu Sayeam Mondol Shejan</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:text-sky-400 hover:border-sky-400 transition-colors"
              aria-label="Back to top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
