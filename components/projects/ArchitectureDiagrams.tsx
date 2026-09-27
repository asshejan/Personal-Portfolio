"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Bot, Globe, CheckCircle2, FileEdit, Database, Cpu, 
  ArrowRight, Activity, Sparkles, Server, Layers 
} from "lucide-react";

interface ArchitectureDiagramProps {
  type: "multi-agent" | "llm-finetune" | "rag-pipeline" | "cv-segmentation";
}

export default function ArchitectureDiagrams({ type }: ArchitectureDiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  if (type === "multi-agent") {
    const agents = [
      { id: 1, name: "OpenClaw Router", role: "Tool calling & specialized delegation", icon: <Bot className="w-4 h-4 text-sky-400" /> },
      { id: 2, name: "Ollama LLM Agents", role: "Local inference & domain task execution", icon: <Globe className="w-4 h-4 text-indigo-400" /> },
      { id: 3, name: "Critic & Recovery", role: "Self-reflection, response validation & retry", icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" /> },
      { id: 4, name: "Memory & Automations", role: "ChromaDB memory, Playwright & Telegram", icon: <FileEdit className="w-4 h-4 text-purple-400" /> },
    ];

    return (
      <div className="w-full p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl space-y-5">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 font-mono text-xs text-[var(--text-secondary)]">
          <span className="flex items-center gap-2 text-sky-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            OpenClaw Master Router & Multi-Agent Swarm
          </span>
          <span className="text-[var(--text-muted)]">Local-First Architecture</span>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {agents.map((agent, i) => {
            const isActive = activeStep === i || activeStep === null;
            return (
              <motion.div
                key={agent.id}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--bg-card)] border-sky-500/40 shadow-md"
                    : "bg-[var(--bg-primary)] border-[var(--border-color)] opacity-70"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                    {agent.icon}
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 font-bold">AGENT 0{agent.id}</span>
                </div>
                <h4 className="text-xs font-bold text-[var(--text-primary)] mb-1">{agent.name}</h4>
                <p className="text-[11px] text-[var(--text-secondary)] leading-tight">{agent.role}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Flow Connectors */}
        <div className="p-3 rounded-xl bg-sky-500/5 border border-sky-500/20 text-[11px] font-mono text-[var(--text-secondary)] flex flex-wrap items-center justify-between gap-2">
          <span className="text-sky-400 font-semibold">Orchestration Flow:</span>
          <span className="flex items-center gap-1">Input <ArrowRight className="w-3 h-3 text-sky-400" /></span>
          <span className="flex items-center gap-1">Graph State <ArrowRight className="w-3 h-3 text-sky-400" /></span>
          <span className="flex items-center gap-1">Parallel Extraction <ArrowRight className="w-3 h-3 text-sky-400" /></span>
          <span className="text-emerald-400 font-bold">Verified Report</span>
        </div>
      </div>
    );
  }

  if (type === "llm-finetune") {
    const pipelineSteps = [
      { step: "Base Model", detail: "Qwen3-14B Base weights" },
      { step: "QLoRA / Unsloth", detail: "4-bit quantization + LoRA adapters" },
      { step: "SFT Pipeline", detail: "Transformers + TRL + PEFT" },
      { step: "GGUF Export", detail: "Quantized llama.cpp / Ollama" },
    ];

    return (
      <div className="w-full p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl space-y-5">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 font-mono text-xs text-[var(--text-secondary)]">
          <span className="flex items-center gap-2 text-indigo-400 font-bold">
            <Cpu className="w-4 h-4" />
            QLoRA Supervised Fine-Tuning Pipeline
          </span>
          <span className="text-[var(--text-muted)]">-65% VRAM Reduction</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {pipelineSteps.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[var(--bg-card)] border border-indigo-500/25 hover:border-indigo-400 transition-all">
              <div className="text-[10px] font-mono text-indigo-400 font-bold mb-1">STAGE 0{idx + 1}</div>
              <div className="text-xs font-bold text-[var(--text-primary)] mb-1">{item.step}</div>
              <div className="text-[11px] text-[var(--text-secondary)]">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center justify-between">
          <span>Quantization: 4-bit NF4</span>
          <span className="text-emerald-400 font-bold">Latency: &lt;18ms/token</span>
        </div>
      </div>
    );
  }

  if (type === "rag-pipeline") {
    return (
      <div className="w-full p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl space-y-5">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 font-mono text-xs text-[var(--text-secondary)]">
          <span className="flex items-center gap-2 text-emerald-400 font-bold">
            <Database className="w-4 h-4" />
            Local Vector RAG Retrieval Architecture
          </span>
          <span className="text-[var(--text-muted)]">100% Data Privacy</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-emerald-500/25 space-y-1.5">
            <div className="text-emerald-400 font-bold">1. Document Processing</div>
            <div className="text-[11px] text-[var(--text-secondary)]">PDF Chunking → Ollama Embeddings</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-emerald-500/25 space-y-1.5">
            <div className="text-sky-400 font-bold">2. Vector Search</div>
            <div className="text-[11px] text-[var(--text-secondary)]">ChromaDB → Cosine Retrieval</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-emerald-500/25 space-y-1.5">
            <div className="text-purple-400 font-bold">3. LLaMA Inference</div>
            <div className="text-[11px] text-[var(--text-secondary)]">LLaMA 3.2 → Streamlit Chat UI</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs font-mono text-[var(--text-secondary)] flex justify-between">
          <span>Vector Store: ChromaDB</span>
          <span className="text-emerald-400 font-semibold">Engine: Local LLaMA 3.2</span>
        </div>
      </div>
    );
  }

  // Computer Vision Segmentation Pipeline
  return (
    <div className="w-full p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl space-y-5">
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 font-mono text-xs text-[var(--text-secondary)]">
        <span className="flex items-center gap-2 text-purple-400 font-bold">
          <Activity className="w-4 h-4" />
          Medical Imaging BraTS Segmentation Pipeline
        </span>
        <span className="text-[var(--text-muted)]">Teacher-Student Distillation</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-purple-500/25">
          <div className="text-purple-300 font-bold mb-1">MRI Data Processing</div>
          <div className="text-[11px] text-[var(--text-secondary)]">BraTS Dataset → Augmentation</div>
        </div>
        <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-purple-500/25">
          <div className="text-purple-300 font-bold mb-1">Neural Backbones</div>
          <div className="text-[11px] text-[var(--text-secondary)]">ResUNet + EfficientNetB7</div>
        </div>
        <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-purple-500/25">
          <div className="text-emerald-400 font-bold mb-1">Metrics Evaluation</div>
          <div className="text-[11px] text-[var(--text-secondary)]">Dice: 0.912 | IoU: 0.865</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-xs font-mono text-purple-300 flex justify-between">
        <span>Framework: TensorFlow / Keras</span>
        <span className="text-purple-400 font-semibold">Domain: Medical MRI</span>
      </div>
    </div>
  );
}
