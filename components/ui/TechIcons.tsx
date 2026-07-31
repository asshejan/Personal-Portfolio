import React from "react";
import * as SimpleIcons from "simple-icons";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-3.5 h-3.5 shrink-0" }: TechIconProps) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Map skill names to simple-icons slugs
  const slugMap: Record<string, string> = {
    python: "siPython",
    tensorflow: "siTensorflow",
    pytorch: "siPytorch",
    scikitlearn: "siScikitlearn",
    keras: "siKeras",
    numpy: "siNumpy",
    pandas: "siPandas",
    opencv: "siOpencv",
    mlflow: "siMlflow",
    fastapi: "siFastapi",
    flask: "siFlask",
    django: "siDjango",
    docker: "siDocker",
    nginx: "siNginx",
    apache: "siApache",
    swagger: "siSwagger",
    postman: "siPostman",
    awsec2: "siAmazonwebservices",
    aws: "siAmazonwebservices",
    azure: "siMicrosoftazure",
    googlecloud: "siGooglecloud",
    render: "siRender",
    firebase: "siFirebase",
    githubactions: "siGithubactions",
    bitbucket: "siBitbucket",
    mysql: "siMysql",
    mongodb: "siMongodb",
    postgresql: "siPostgresql",
    c: "siC",
    cpp: "siCplusplus",
    cplusplus: "siCplusplus",
    java: "siOpenJDK",
    javascript: "siJavascript",
    typescript: "siTypescript",
    bash: "siGnubash",
    julia: "siJulia",
    react: "siReact",
    tailwindcss: "siTailwindcss",
    bootstrap: "siBootstrap",
    streamlit: "siStreamlit",
    n8n: "siN8n",
    make: "siMake",
    makecom: "siMake",
    zapier: "siZapier",
    git: "siGit",
    github: "siGithub",
    jira: "siJira",
    notion: "siNotion",
    figma: "siFigma",
    canva: "siCanva",
    raspberrypi: "siRaspberrypi",
    powershell: "siPowershell"
  };

  const iconKey = slugMap[norm];
  const simpleIcon = iconKey ? (SimpleIcons as any)[iconKey] : null;

  if (simpleIcon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
      >
        <path d={simpleIcon.path} />
      </svg>
    );
  }

  // Fallback SVG badge for niche tools (LangChain, Ollama, ChromaDB, FAISS, Pinecone, REST APIs, CI/CD, VPS)
  return (
    <span className="w-3.5 h-3.5 rounded bg-sky-500/20 text-sky-400 font-mono text-[9px] font-bold flex items-center justify-center shrink-0">
      {name.substring(0, 2).toUpperCase()}
    </span>
  );
}
