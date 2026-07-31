"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import ScrollTypography from "@/components/animations/ScrollTypography";
import RevealText from "@/components/animations/RevealText";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "AI / ML Project Consultation",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "AI / ML Project Consultation", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-20 relative tech-grid-bg border-t border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <RevealText>
            <span className="text-xs font-mono tracking-widest uppercase text-sky-400">
              Direct Contact & Inquiries
            </span>
          </RevealText>
          <RevealText delay={0.1}>
            <ScrollTypography
              text="LET'S TALK"
              className="text-3xl sm:text-5xl font-black"
            />
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl">
              Available for full-time AI engineering roles, technical advisory, custom LLM fine-tuning, and multi-agent architecture projects.
            </p>
          </RevealText>
        </div>

        {/* Seamless Flat Layout Without Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6 border-t border-[var(--border-color)]">
          
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-bold font-mono text-[var(--text-primary)] uppercase tracking-wider">
              Engineering Channels
            </h3>

            <div className="space-y-4 font-mono text-xs text-[var(--text-secondary)]">
              <a
                href={`mailto:${portfolio.personal.email}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-sky-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] text-[var(--text-muted)]">EMAIL</div>
                  <div className="font-bold text-[var(--text-primary)]">{portfolio.personal.email}</div>
                </div>
              </a>

              <a
                href={`tel:${portfolio.personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-emerald-400 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-[var(--text-muted)]">PHONE / WHATSAPP</div>
                  <div className="font-bold text-[var(--text-primary)]">{portfolio.personal.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-[var(--text-muted)]">LOCATION</div>
                  <div className="font-bold text-[var(--text-primary)]">{portfolio.personal.location}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-3">
              <span className="text-xs font-mono text-[var(--text-muted)]">Profiles:</span>
              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-sky-400 hover:border-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Form Directly Embedded (No Card Container!) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold font-mono text-[var(--text-primary)] uppercase tracking-wider">
              Send an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-secondary)] uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Vance"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[var(--text-secondary)] uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-secondary)] uppercase">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-sky-400 transition-colors"
                >
                  <option value="AI / ML Project Consultation">AI / ML Project Consultation</option>
                  <option value="Full-time AI Engineer Role">Full-time AI Engineer Role</option>
                  <option value="LLM Fine-Tuning & RAG Architecture">LLM Fine-Tuning & RAG Architecture</option>
                  <option value="Computer Vision Medical Imaging">Computer Vision Medical Imaging</option>
                  <option value="Other Technical Inquiry">Other Technical Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-secondary)] uppercase">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your requirements, technical scope, or opportunity details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message sent successfully! Shejan will respond shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md disabled:opacity-50"
                id="contact-submit-btn"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
