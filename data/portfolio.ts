export interface Project {
  id: string;
  title: string;
  category: string;
  githubUrl: string;
  demoUrl?: string;
  summary: string;
  highlights: string[];
  tools: string[];
  architectureType: 'multi-agent' | 'llm-finetune' | 'rag-pipeline' | 'cv-segmentation';
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; level?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  group?: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export const portfolio = {
  personal: {
    name: "Md Abu Sayeam Mondol Shejan",
    shortName: "Shejan",
    initials: "MS",
    title: "AI Engineer",
    subtitle: "Building Production AI Systems, Multi-Agent Swarms & Domain LLMs",
    location: "Dhaka, Bangladesh",
    email: "as.shejan@gmail.com",
    phone: "+880 1701 909 276",
    linkedin: "https://linkedin.com/in/asshejan",
    github: "https://github.com/asshejan",
    bio: "Artificial Intelligence Engineer with hands-on industry experience building and deploying AI-driven solutions. Skilled in Computer Vision, NLP, automation, AI agents, RAG systems, and LLM fine-tuning, managing the full lifecycle from research to production.",
    about: "I specialize in turning cutting-edge AI research into robust, high-performance production systems. From multi-agent orchestration graphs and domain-specific LLM fine-tuning to real-time computer vision segmentation and high-throughput vector retrieval, I build intelligent software that drives tangible business value.",
    avatar: "/images/profile.jpg",
    resume: "/resume/Md_Abu_Sayeam_Mondol_Shejan_CV.pdf",
    siteUrl: "https://shejan-ai.vercel.app", // Editable canonical URL
  },
  heroRotator: [
    "AI Agents",
    "RAG Systems",
    "LLM Applications",
    "Computer Vision Systems",
    "AI Automation",
    "Production AI",
  ],
  experience: [
    {
      id: "softvence-betopia",
      role: "AI Engineer",
      company: "Softvence",
      group: "Betopia Group",
      location: "Dhaka, Bangladesh",
      period: "Jul 2025 – Present",
      type: "Full-time, On-site",
      responsibilities: [
        "Design, develop, and deploy scalable AI solutions for real-world business applications leveraging Machine Learning, Deep Learning, Computer Vision, and Large Language Models.",
        "Build intelligent AI agents, RAG systems, and workflow automation solutions to enhance operational efficiency and decision-making processes.",
        "Develop and optimize conversational AI applications, including chatbot systems, knowledge assistants, and autonomous agent workflows.",
        "Fine-tune, evaluate, and deploy open-source and proprietary AI models for domain-specific use cases and production environments.",
        "Develop production-ready APIs and backend services, ensuring reliability, scalability, and maintainability of AI-powered applications.",
        "Implement cloud deployment, containerization, monitoring, and MLOps best practices to support efficient model lifecycle management.",
        "Collaborate with product managers, designers, and engineering teams to deliver high-quality AI solutions for international clients."
      ],
      technologies: [
        "Python", "PyTorch", "TensorFlow", "FastAPI", "Docker", "LangGraph", "LangChain",
        "Qwen", "Ollama", "ChromaDB", "AWS EC2", "MLflow", "CI/CD"
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      id: "nsu",
      institution: "North South University",
      degree: "B.Sc. in Computer Science & Engineering",
      period: "2026",
      details: "Focused on Artificial Intelligence, Machine Learning, Data Structures, and Software Engineering Principles."
    },
    {
      id: "cpsc",
      institution: "Cantonment Public School and College, Lalmonirhat",
      degree: "Higher Secondary Certificate (HSC) & Secondary School Certificate (SSC)",
      period: "2020 (HSC) | 2018 (SSC)",
      details: "Science Group — High academic distinction in Mathematics, Physics, and ICT."
    }
  ] as EducationItem[],
  projects: [
    {
      id: "multi-agent-research",
      title: "Autonomous Local Web Research & Wikipedia-Style Synthesizer",
      category: "Multi-Agent AI",
      githubUrl: "https://github.com/asshejan",
      summary: "Production-grade multi-agent AI research system using LangGraph for autonomous web research, fact validation, and structured document synthesis.",
      highlights: [
        "Designed planner, browser, fact-checking, and writer agents with graph-based orchestration and shared state management.",
        "Implemented parallel web extraction using Playwright, BeautifulSoup, and asynchronous Python workflows.",
        "Developed cross-source verification pipelines for fact validation and contradiction detection."
      ],
      tools: ["Python", "LangGraph", "LangChain", "Playwright", "BeautifulSoup", "FastAPI", "Docker"],
      architectureType: "multi-agent",
      metrics: [
        { label: "Extraction Speed", value: "3.5x Faster" },
        { label: "Agent Verification", value: "99.2% Accuracy" },
        { label: "State Graph Nodes", value: "12 States" }
      ]
    },
    {
      id: "qwen3-finetuning",
      title: "Fine-Tuning Qwen3-14B for Reasoning & Conversational AI",
      category: "LLM Fine-Tuning",
      githubUrl: "https://github.com/asshejan",
      summary: "Memory-efficient supervised fine-tuning and quantization pipeline tailored for complex reasoning and domain conversational tasks.",
      highlights: [
        "Fine-tuned Qwen3-14B using QLoRA and Unsloth for specialized reasoning and conversational workflows.",
        "Implemented memory-efficient training with 4-bit quantization, gradient checkpointing, and LoRA adapters.",
        "Built end-to-end supervised fine-tuning pipelines using Transformers, TRL, and PEFT.",
        "Exported optimized models for low-latency local deployment using GGUF, llama.cpp, and Ollama."
      ],
      tools: ["Python", "Qwen3-14B", "Unsloth", "Transformers", "TRL", "PEFT", "LoRA", "Ollama", "GGUF"],
      architectureType: "llm-finetune",
      metrics: [
        { label: "VRAM Reduction", value: "-65%" },
        { label: "Quantization", value: "4-bit GGUF" },
        { label: "Inference Latency", value: "<18ms/tok" }
      ]
    },
    {
      id: "phychat-rag",
      title: "PhyChat — Local AI Chatbot",
      category: "RAG / Local AI",
      githubUrl: "https://github.com/asshejan",
      summary: "Local PDF-based conversational AI assistant featuring vector retrieval, streaming responses, and complete data privacy.",
      highlights: [
        "Built a PDF-based conversational AI system using LLaMA 3.2, LangChain, and Retrieval-Augmented Generation.",
        "Implemented document vectorization and retrieval using Ollama Embeddings and ChromaDB.",
        "Developed low-latency streaming responses and an interactive chat interface with Streamlit."
      ],
      tools: ["Python", "LangChain", "LLaMA 3.2", "ChromaDB", "Ollama", "Streamlit"],
      architectureType: "rag-pipeline",
      metrics: [
        { label: "Embedding Latency", value: "12ms/doc" },
        { label: "Context Window", value: "128k tokens" },
        { label: "Data Privacy", value: "100% Local" }
      ]
    },
    {
      id: "brain-tumor-segmentation",
      title: "Brain Tumor Segmentation using MRI",
      category: "Computer Vision / Deep Learning",
      githubUrl: "https://github.com/asshejan",
      summary: "High-precision medical image segmentation framework using deep neural networks and knowledge distillation on BraTS MRI datasets.",
      highlights: [
        "Developed MRI tumor segmentation models leveraging U-Net, EfficientNetB7, and ResUNet deep learning backbones.",
        "Applied medical image preprocessing, dataset augmentation, and teacher-student knowledge distillation.",
        "Rigorously evaluated segmentation boundaries using Dice Similarity Coefficient and IoU metrics."
      ],
      tools: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib", "BraTS Dataset"],
      architectureType: "cv-segmentation",
      metrics: [
        { label: "Dice Score", value: "0.912" },
        { label: "Mean IoU", value: "0.865" },
        { label: "Backbone", value: "ResUNet + EffNet" }
      ]
    }
  ] as Project[],
  skillCategories: [
    {
      title: "AI / Machine Learning",
      skills: [
        { name: "Python" }, { name: "TensorFlow" }, { name: "PyTorch" }, { name: "scikit-learn" },
        { name: "Keras" }, { name: "NumPy" }, { name: "Pandas" }, { name: "OpenCV" },
        { name: "LangChain" }, { name: "Ollama" }, { name: "ChromaDB" }, { name: "FAISS" },
        { name: "Pinecone" }, { name: "MLflow" }
      ]
    },
    {
      title: "Web & API",
      skills: [
        { name: "FastAPI" }, { name: "Flask" }, { name: "Django" }, { name: "REST APIs" },
        { name: "Docker" }, { name: "Nginx" }, { name: "Apache" }, { name: "Swagger" },
        { name: "Postman" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS EC2" }, { name: "Azure" }, { name: "Google Cloud" }, { name: "Render" },
        { name: "Firebase" }, { name: "GitHub Actions" }, { name: "Bitbucket" },
        { name: "CI/CD Pipelines" }, { name: "VPS Deployment" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" }, { name: "MongoDB" }, { name: "PostgreSQL" }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python" }, { name: "C" }, { name: "C++" }, { name: "Java" },
        { name: "JavaScript" }, { name: "TypeScript" }, { name: "Bash" }, { name: "Julia" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React" }, { name: "TailwindCSS" }, { name: "Bootstrap" }, { name: "Streamlit" }
      ]
    },
    {
      title: "Automation",
      skills: [
        { name: "n8n" }, { name: "Make.com" }, { name: "Zapier" }
      ]
    },
    {
      title: "Tools & Hardware",
      skills: [
        { name: "Git" }, { name: "GitHub" }, { name: "Jira" }, { name: "Notion" },
        { name: "Figma" }, { name: "Canva" }, { name: "Raspberry Pi" }, { name: "PowerShell" }
      ]
    }
  ] as SkillCategory[],
  keyCapabilities: [
    "End-to-end AI development: from research & prototyping to production cloud server deployment.",
    "Computer Vision, NLP, LLM fine-tuning (QLoRA, Unsloth), & agentic workflow orchestration.",
    "Cross-functional collaboration with backend, frontend, and mobile engineering teams.",
    "Containerized microservices (Docker), high-concurrency FastAPI backends, & MLOps.",
    "Direct communication with international clients, translating complex requirements into AI architectures.",
    "Technical leadership and rapid delivery of multidisciplinary projects under tight timelines."
  ]
};
