export const profile = {
  name: "Amit Saroj",
  title: "Senior Full Stack Developer",
  subtitle: "Node.js · NestJS · MERN Stack · TypeScript · Microservices · AI Automation",
  email: "sarojamit4956@gmail.com",
  phone: "+91 8707831236",
  location: "Mohali, India",
  github: "https://github.com/amitsaroj",
  linkedin: "https://www.linkedin.com/in/amit-saroj/",
  website: "https://autopilot.monster",
  yearsOfExperience: "5+",
  githubRepos: 62,
  openTo:
    "Senior Node.js Developer, MERN Stack Developer, Full Stack Developer, Backend Developer, AI Automation Engineer",
  summary:
    "Senior Full Stack Developer with 5+ years of experience building scalable backend services and SaaS platforms using Node.js, NestJS, TypeScript, React.js, and Next.js. Strong in microservices architecture, REST API design, and event-driven systems with Kafka and Redis. Currently building AI-powered products — AI agents, RAG pipelines, and workflow automation with n8n, OpenAI, and LangChain. Experienced in integrating blockchain APIs and wallet connectivity into full-stack applications (Web3.js, Ethers.js).",
};

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  stack: string[];
  responsibilities: string[];
  accent: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Antier Solutions",
    role: "Software Engineer (Full Stack)",
    type: "Full-time",
    location: "Mohali, India",
    period: "Feb 2023 – Present",
    accent: "#6366f1",
    stack: [
      "Node.js",
      "NestJS",
      "Fastify",
      "React.js",
      "Next.js",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker",
      "AWS",
      "Web3.js",
      "Ethers.js",
    ],
    responsibilities: [
      "Designed and developed backend microservices in Node.js, NestJS, and Fastify for an enterprise asset-management and investment platform (Libertum), covering investor onboarding, KYC/AML workflows, asset listing, and high-volume transaction processing.",
      "Built secure REST APIs with JWT authentication, role-based access control (RBAC), Redis caching, and rate limiting across admin, issuer, and investor modules; optimized MongoDB query performance.",
      "Implemented Kafka-based asynchronous, event-driven workflows for background jobs and blockchain data indexing, synchronizing on-chain events with off-chain databases for reporting and compliance.",
      "Integrated blockchain transaction APIs and wallet connectivity (Web3.js, Ethers.js) into full-stack flows for a token swap and cross-chain bridge platform, improving reliability of transaction tracking in React.js/Next.js.",
      "Integrated payment and notification services; owned production debugging for API timeouts, failed transactions, and data-sync issues.",
    ],
  },
  {
    company: "Arivani Technologies Pvt. Ltd.",
    role: "Software Engineer (MERN Stack)",
    type: "Full-time",
    location: "Lucknow, India",
    period: "Jan 2021 – Feb 2023",
    accent: "#8b5cf6",
    stack: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "MySQL",
      "REST APIs",
      "Redux",
    ],
    responsibilities: [
      "Designed and developed full-stack web applications for enterprise clients using MongoDB, Express.js, React.js, Node.js, and TypeScript.",
      "Built and maintained RESTful APIs using Node.js and Express.js with JWT-based authentication and role-based access control.",
      "Developed responsive frontend interfaces using React.js with Redux state management; built reusable UI components and optimized rendering performance.",
      "Developed OwnerScope, a PropTech ownership and investment-intelligence platform — built assessment and reporting modules, optimized MongoDB queries, and improved performance with Redis caching.",
      "Collaborated in Agile/Scrum environment with cross-functional teams to deliver features on schedule.",
    ],
  },
  {
    company: "Softpro India Computer Technologies",
    role: "Full Stack Developer",
    type: "Internship",
    location: "Lucknow, India",
    period: "Aug 2020 – Jan 2021",
    accent: "#22d3ee",
    stack: ["Node.js", "React.js", "Express.js", "MongoDB", "JavaScript"],
    responsibilities: [
      "Trained hands-on in MERN stack development (MongoDB, Express.js, React.js, Node.js), building full-stack web applications under senior developer mentorship.",
      "Developed REST APIs, CRUD modules, and responsive React.js UI components for internship projects.",
    ],
  },
];

export interface ProjectItem {
  name: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured: boolean;
  liveUrl?: string;
  accent: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Autopilot Monster CRM",
    company: "Antier Solutions",
    period: "Jan 2026 – Present",
    description:
      "AI-native, multi-tenant SaaS platform unifying CRM, voice calling, WhatsApp automation, workflow automation, and AI agents into a single revenue-operations system.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Docker", "OpenAI", "Qdrant"],
    highlights: [
      "Developed autonomous AI voice agents, conversational chatbots, and RAG-based knowledge retrieval with Qdrant vector memory.",
      "Implemented strict tenant-level data isolation, JWT with MFA, RBAC, audit logging, and event-driven background processing.",
      "Built intelligent lead-qualification workflows and AI auto-calling features.",
    ],
    featured: true,
    liveUrl: "https://autopilot.monster",
    accent: "#6366f1",
  },
  {
    name: "Libertum – RWA Tokenization Platform",
    company: "Antier Solutions",
    period: "Sep 2025 – Apr 2026",
    description:
      "Enterprise-grade blockchain-powered Real World Asset (RWA) tokenization platform enabling asset owners to digitize and fractionalize assets such as real estate and infrastructure projects.",
    stack: ["Node.js", "Fastify", "MongoDB", "Redis", "Kafka", "Docker"],
    highlights: [
      "Designed and developed REST APIs, implemented authentication and RBAC.",
      "Built asset and investor management modules, integrating payment and notification services.",
      "Optimized database performance, implemented Redis caching and rate limiting, and developed Kafka-based asynchronous workflows.",
    ],
    featured: false,
    accent: "#8b5cf6",
  },
  {
    name: "OwnerScope – Property Intelligence Platform",
    company: "Arivani Technologies",
    period: "Apr 2022 – Dec 2022",
    description:
      "PropTech platform that helps homebuyers, property owners, and real estate investors make informed decisions through ownership analytics, investment assessments, and market insights.",
    stack: ["React.js", "Node.js", "MongoDB", "Redis", "REST APIs", "JWT"],
    highlights: [
      "Developed responsive user interfaces using React.js and scalable backend services using Node.js.",
      "Built assessment and reporting modules, integrated third-party services.",
      "Optimized MongoDB queries and improved application performance with Redis caching.",
    ],
    featured: false,
    accent: "#22d3ee",
  },
];

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    icon: "⌨",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python"],
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Fastify",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
  {
    category: "Frontend",
    icon: "◻",
    skills: ["React.js", "Next.js", "Redux"],
  },
  {
    category: "Databases",
    icon: "◉",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "AI & Automation",
    icon: "✦",
    skills: [
      "Generative AI (GenAI)",
      "AI Agents",
      "Agentic AI",
      "RAG",
      "LangChain",
      "OpenAI",
      "n8n",
      "Prompt Engineering",
      "Qdrant",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁",
    skills: ["Docker", "AWS", "CI/CD", "Git"],
  },
  {
    category: "Web3",
    icon: "⬡",
    skills: ["Web3.js", "Ethers.js", "Wallet Integration", "Blockchain API Integration"],
  },
  {
    category: "Practices",
    icon: "◈",
    skills: [
      "System Design",
      "API Design",
      "Performance Optimization",
      "Multi-Tenant SaaS",
      "RBAC",
      "Agile/Scrum",
    ],
  },
];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    degree: "Diploma",
    field: "Computer Science and Engineering",
    institution: "Board of Technical Education, Uttar Pradesh, Lucknow",
    period: "2017 – 2019",
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "Apprenticeship",
    issuer: "Softpro India Computer Technologies (P) Limited, Lucknow",
    date: "Jul 2019",
  },
];

export const navItems = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
] as const;

export type NavItem = (typeof navItems)[number];
