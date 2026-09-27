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
  location?: string;
  details?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  competition: string;
  role: string;
  period: string;
  description: string;
  linkText?: string;
}

export const portfolio = {
  personal: {
    name: "Md Abu Sayeam Mondol Shejan",
    shortName: "Shejan",
    initials: "MS",
    title: "AI Engineer",
    subtitle: "Generative AI, Multi-Agent Swarms, Domain LLMs & Production AI Systems",
    location: "Dhaka, Bangladesh",
    email: "as.shejan@gmail.com",
    phone: "+880 1701 909 276",
    linkedin: "https://linkedin.com/in/asshejan",
    github: "https://github.com/asshejan",
    bio: "AI Engineer experienced in designing, developing, and deploying production AI applications across generative AI, large language models (LLMs), retrieval-augmented generation (RAG), multi-agent systems, natural language processing, and computer vision. Strong Python background with hands-on experience in QLoRA/PEFT fine-tuning, prompt engineering, embeddings, semantic search, vector databases, model evaluation, FastAPI services, Docker, cloud deployment, and CI/CD.",
    about: "I build modular, maintainable production AI systems and collaborate with cross-functional teams to translate business requirements into reliable products. From enterprise-grade locally fine-tuned LLMs with advanced tool calling and multi-agent swarms to high-throughput vector retrieval and computer vision backbones, I turn cutting-edge AI research into measurable business value.",
    avatar: "/images/profile.jpg",
    resume: "/resume/Md%20Abu%20Sayeam%20Mondol%20Shejan_CV.pdf",
    siteUrl: "https://as-shejan.vercel.app", // Canonical URL matching CV
  },
  heroRotator: [
    "Generative AI & LLMs",
    "Multi-Agent Swarms",
    "Production RAG Pipelines",
    "Bengali & Multilingual NLP",
    "Computer Vision & Deep Learning",
    "MLOps & Scalable Deployment",
  ],
  experience: [
    {
      id: "omicon-group",
      role: "AI Engineer",
      company: "Omicon Group",
      location: "Dhaka, Bangladesh",
      period: "Sep 2026 – Present",
      type: "Full-time, On-site",
      responsibilities: [
        "Engineer enterprise-grade, locally fine-tuned LLM solutions with advanced tool-calling capabilities, optimized for Bengali, Banglish, and English understanding and multilingual embedding-based retrieval.",
        "Build evaluation datasets and testing frameworks to benchmark LLM, RAG, retrieval, and tool-calling performance; continuously optimize models and pipelines for accuracy, reliability, and cost-efficient inference.",
        "Contribute to AI-powered catalogue automation for Boibazar.com and develop an agentic customer-facing chatbot for intelligent product discovery, assistance, and workflow automation.",
        "Lead research, development planning, and system architecture design for Lecture Publications' e-learning platform, defining AI capabilities, core components, data flows, integrations, and implementation roadmaps.",
        "Manage and scale local AI/GPU infrastructure for high-volume production systems, monitoring model performance, resource utilization, latency, and reliability while optimizing deployment and inference workloads."
      ],
      technologies: [
        "Local LLMs", "Tool Calling", "RAG Systems", "Bengali/Banglish NLP", "Boibazar.com", "Lecture Publications",
        "Evaluation Frameworks", "GPU Infrastructure", "vLLM", "Ollama", "Python", "PyTorch", "Docker"
      ]
    },
    {
      id: "softvence-ai-engineer",
      role: "AI Engineer",
      company: "Softvence Agency",
      location: "Dhaka, Bangladesh",
      period: "Jan 2026 – Aug 2026",
      type: "Full-time, On-site",
      responsibilities: [
        "Led AI project architecture and implementation planning in collaboration with UI/UX, frontend, and backend teams, translating product requirements into system components, integrations, and delivery plans.",
        "Worked directly with international clients to understand business and technical requirements, define feasible AI solutions, clarify trade-offs, and plan implementation milestones.",
        "Coordinated cross-functional execution, tracked delivery progress, resolved technical dependencies, and provided clients with clear project updates throughout the development lifecycle.",
        "Guided the delivery of agentic AI applications, RAG systems, automation pipelines, scalable APIs, and production deployments focused on reliability and business impact."
      ],
      technologies: [
        "AI Architecture", "Client Relations", "Agentic AI", "RAG Systems", "FastAPI", "Docker", "CI/CD", "Project Planning"
      ]
    },
    {
      id: "softvence-jr-ai-engineer",
      role: "Jr. AI Engineer",
      company: "Softvence Agency",
      location: "Dhaka, Bangladesh",
      period: "Jul 2025 – Dec 2025",
      type: "Full-time, On-site",
      responsibilities: [
        "Developed production AI solutions across machine learning, deep learning, large language models, and computer vision using modern frameworks and tools.",
        "Built agentic AI applications, RAG systems, automation pipelines, and scalable APIs with LangChain, n8n, FastAPI, Docker, and vector databases.",
        "Deployed production-ready AI systems focused on scalability, cost efficiency, reliability, and measurable business impact."
      ],
      technologies: [
        "Python", "Machine Learning", "Deep Learning", "Computer Vision", "LangChain", "n8n", "FastAPI", "Docker", "Vector Databases"
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      id: "nsu",
      institution: "North South University",
      degree: "Bachelor of Science in Computer Science and Engineering",
      period: "2026",
      location: "Dhaka, Bangladesh",
      details: "Focused on Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Software Engineering Principles."
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
      id: "apex-hybrid-ai-lab",
      title: "APEX Hybrid AI Lab: Local Multi-Agent Orchestration Framework",
      category: "Multi-Agent AI",
      githubUrl: "https://github.com/asshejan",
      summary: "Local-first autonomous multi-agent framework featuring OpenClaw routing, structured JSON ReAct execution, critic-based recovery, and local Ollama inference.",
      highlights: [
        "Built a secure, local-first autonomous agent framework with an OpenClaw master router that performs tool calling and delegates requests to specialized agents powered by local Ollama LLMs.",
        "Implemented structured JSON ReAct execution, critic-based self-reflection and recovery, response validation, ChromaDB conversational memory, context compression, and scheduled workflows.",
        "Integrated PC control, Playwright browser automation, a bidirectional Telegram assistant, proactive notifications, and Docker deployment through modular Python components."
      ],
      tools: ["Python", "Ollama", "ChromaDB", "Playwright", "APScheduler", "Telegram Bot API", "Docker"],
      architectureType: "multi-agent",
      metrics: [
        { label: "Data Privacy", value: "100% Local" },
        { label: "Master Router", value: "OpenClaw" },
        { label: "Execution Graph", value: "ReAct + Critic" }
      ]
    },
    {
      id: "qwen3-finetuning",
      title: "Fine-Tuning Qwen3-14B for Reasoning & Conversational AI",
      category: "LLM Fine-Tuning",
      githubUrl: "https://github.com/asshejan",
      summary: "Supervised instruction-tuning and quantization pipeline tailored for complex reasoning and domain conversational tasks.",
      highlights: [
        "Built an end-to-end supervised instruction-tuning and evaluation pipeline for Qwen3-14B using QLoRA and Unsloth for reasoning and conversational tasks.",
        "Reduced training memory through 4-bit quantization, gradient checkpointing, and LoRA adapters with Hugging Face Transformers, TRL, and PEFT.",
        "Exported the optimized model to GGUF for low-latency local inference and deployment with llama.cpp and Ollama."
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
      title: "PhyChat — Local Retrieval-Augmented Generation Chatbot",
      category: "RAG / Local AI",
      githubUrl: "https://github.com/asshejan",
      summary: "Local intelligent document processing and PDF question-answering application featuring vector retrieval, streaming responses, and complete data privacy.",
      highlights: [
        "Built a local intelligent document processing and PDF question-answering application using Llama 3.2, LangChain, Ollama embeddings, and ChromaDB.",
        "Implemented document ingestion, chunking, embedding generation, semantic search, context retrieval, streaming responses, and an interactive Streamlit interface."
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
      title: "Brain Tumor Segmentation from MRI with Knowledge Distillation",
      category: "Computer Vision / Deep Learning",
      githubUrl: "https://github.com/asshejan",
      summary: "Deep neural network segmentation framework leveraging knowledge distillation and multiple deep backbones on the BraTS dataset.",
      highlights: [
        "Developed and evaluated deep learning MRI tumor segmentation models with U-Net, EfficientNetB7, and ResUNet using the BraTS dataset.",
        "Applied preprocessing, augmentation, and knowledge distillation; measured model quality with Dice score and intersection over union (IoU)."
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
      title: "Generative AI & Agents",
      skills: [
        { name: "LLMs" }, { name: "Prompt Engineering" }, { name: "Prompt Optimization" },
        { name: "RAG" }, { name: "AI Assistants" }, { name: "Chatbots" }, { name: "Tool Calling" },
        { name: "Multi-Agent Systems" }, { name: "LangChain" }, { name: "LangGraph" },
        { name: "Ollama" }, { name: "Llama" }, { name: "Qwen" }
      ]
    },
    {
      title: "Fine-Tuning & NLP",
      skills: [
        { name: "Hugging Face Transformers" }, { name: "TRL" }, { name: "PEFT" }, { name: "LoRA" },
        { name: "QLoRA" }, { name: "Supervised Fine-Tuning" }, { name: "4-bit Quantization" },
        { name: "GGUF" }, { name: "Transformer Architecture" }, { name: "Attention Mechanisms" }, { name: "NLP" }
      ]
    },
    {
      title: "Retrieval & Vector Databases",
      skills: [
        { name: "Embeddings" }, { name: "Semantic Search" }, { name: "Knowledge Retrieval" },
        { name: "ChromaDB" }, { name: "FAISS" }, { name: "Pinecone" }
      ]
    },
    {
      title: "Machine Learning & Vision",
      skills: [
        { name: "PyTorch" }, { name: "TensorFlow" }, { name: "Keras" }, { name: "scikit-learn" },
        { name: "OpenCV" }, { name: "NumPy" }, { name: "Pandas" }, { name: "Deep Learning" },
        { name: "Computer Vision" }, { name: "Model Evaluation" }
      ]
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "FastAPI" }, { name: "Flask" }, { name: "Django" }, { name: "REST APIs" },
        { name: "Swagger" }, { name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }
      ]
    },
    {
      title: "MLOps, Cloud & Deployment",
      skills: [
        { name: "MLflow" }, { name: "Docker" }, { name: "AWS EC2" }, { name: "Google Cloud" },
        { name: "GitHub Actions" }, { name: "Bitbucket" }, { name: "CI/CD" }, { name: "Nginx" },
        { name: "Apache" }, { name: "VPS Deployment" }
      ]
    },
    {
      title: "Programming & Engineering",
      skills: [
        { name: "Python" }, { name: "C" }, { name: "C++" }, { name: "Java" },
        { name: "JavaScript" }, { name: "TypeScript" }, { name: "Bash" }, { name: "Git" },
        { name: "API Design" }
      ]
    },
    {
      title: "Automation & Tools",
      skills: [
        { name: "n8n" }, { name: "Zapier" }, { name: "Postman" }, { name: "PowerShell" }
      ]
    }
  ] as SkillCategory[],
  awards: [
    {
      id: "infinity-ai-buildfest",
      title: "Finalist",
      competition: "Infinity AI BuildFest",
      role: "EduOrbit Platform Architect",
      period: "Jun 2026",
      description: "Built and presented EduOrbit, a full-stack AI education platform featuring gamified learning, personalized study assistance, and career-readiness support.",
      linkText: "Cloud Camp BD"
    },
    {
      id: "webxtream-hackathon",
      title: "Finalist",
      competition: "WebXtream Hackathon",
      role: "Hackathon Competitor",
      period: "Jul 2025",
      description: "Developed and presented a working web technology solution through rapid iteration and cross-functional collaboration under competition deadlines.",
      linkText: "North South University"
    },
    {
      id: "national-robofest",
      title: "Finalist",
      competition: "National RoboFest",
      role: "Robotics Competitor",
      period: "Sep 2024",
      description: "Collaborated on robotics problem-solving and hardware–software integration in a national-level competition.",
      linkText: "East West University"
    }
  ] as AwardItem[],
  keyCapabilities: [
    "End-to-end AI development: from research & prototyping to high-volume production cloud server deployment.",
    "Enterprise-grade local LLM solutions with advanced tool calling & multilingual embedding-based retrieval.",
    "Multi-agent swarm orchestration (OpenClaw, LangGraph) with JSON ReAct execution & critic-based self-reflection.",
    "Domain-specific LLM fine-tuning (QLoRA, Unsloth, PEFT) with 4-bit quantization & GGUF local export.",
    "High-throughput vector search (ChromaDB, FAISS, Pinecone) & intelligent RAG pipelines.",
    "Deep learning computer vision architectures (ResUNet, EfficientNetB7) & medical image knowledge distillation.",
    "Containerized microservices (Docker), high-concurrency FastAPI backends, CI/CD pipelines, & MLOps.",
    "Cross-functional collaboration and direct communication with international clients to deliver measurable business impact."
  ]
};
