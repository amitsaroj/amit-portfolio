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
  whatsapp: "https://wa.me/918707831236",
  resumeUrl: "/resume.pdf",
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
      "Developed OwnerScope, a PropTech homeownership guidance platform — built personality assessment and reporting modules, optimized MongoDB queries, and improved performance with Redis caching.",
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
  stack?: string[];
  highlights: string[];
  featured: boolean;
  category: "flagship" | "client";
  liveUrl?: string;
  accent: string;
}

export const projects: ProjectItem[] = [
  /* ── Flagship ── */
  {
    name: "AutopilotMonster – AI Revenue Platform",
    company: "Personal Project",
    period: "Jan 2026 – Present",
    description:
      "AI-native, multi-tenant SaaS platform — unifying CRM, AI Voice Calling, WhatsApp OS, Workflow Automation, and Agentic AI into one autonomous revenue-operations engine. Currently in Public Beta.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Docker", "OpenAI", "Qdrant", "n8n"],
    highlights: [
      "Built GPT-powered AI agents that autonomously qualify leads, handle objections, book meetings, and nurture prospects 24/7 — with sub-second latency Voice AI, real-time transcription, sentiment analysis, and bulk concurrent outbound campaigns.",
      "Developed WhatsApp OS (shared team inbox, broadcast campaigns, no-code flow builder), drag-and-drop workflow automation, real-time ARR analytics, and built-in SaaS billing with usage-based pricing and credit wallets.",
      "Engineered enterprise-grade multi-tenant isolation, JWT + MFA auth, RBAC, AES encryption, audit logging, rate limiting, and SOC 2–aligned security alongside a plugin marketplace for community extensions.",
    ],
    featured: true,
    category: "flagship",
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
    category: "flagship",
    accent: "#8b5cf6",
  },
  {
    name: "OwnerScope – Home Ownership Platform",
    company: "Arivani Technologies",
    period: "Apr 2022 – Dec 2022",
    description:
      "PropTech platform guiding homebuyers toward home ownership through a personality-based quiz, personalized resource delivery, and a unique connection key system that unlocks community features.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    highlights: [
      "Built the 3-minute personality quiz flow and Ownerscope profile generation with personalized resource delivery via email.",
      "Developed the connection key system — unique per-user link and QR code that unlocks tiered community features.",
      "Optimized MongoDB queries and improved application performance with Redis caching.",
    ],
    featured: false,
    category: "client",
    liveUrl: "https://www.ownerscope.com",
    accent: "#22d3ee",
  },
  /* ── Client Work ── */
  {
    name: "Droupons – Doctor Appointment & Wellness",
    company: "Arivani Technologies",
    period: "Jan 2021 – Aug 2021",
    description:
      "Healthcare marketplace where doctors list services and patients book appointments using coupon codes — combined with real-time chat and an integrated wellness product store.",
    // stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    highlights: [
      "Built doctor listing and appointment booking system with coupon code–based service purchasing.",
      "Developed real-time chat feature connecting patients with healthcare providers.",
      "Created wellness store module for browsing and purchasing health products alongside bookings.",
    ],
    featured: false,
    category: "client",
    liveUrl: "https://www.droupons.com",
    accent: "#10b981",
  },
  {
    name: "Repair Zone USA – Device Repair Platform",
    company: "Arivani Technologies",
    period: "Aug 2021 – Dec 2021",
    description:
      "Service platform for a US-based mobile device repair shop at Southpoint Mall, Durham — enabling customers to view repair services, get instant price quotes, and book repair appointments online.",
    // stack: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    highlights: [
      "Developed service catalog covering iPhone, iPad, Samsung, tablet, and all other phone repairs.",
      "Built instant price quote system with a low-price guarantee and transparent pricing display.",
      "Integrated appointment booking and location-specific storefront pages for Southpoint Mall Durham.",
    ],
    featured: false,
    category: "client",
    liveUrl: "https://www.repairzoneusa.com",
    accent: "#f59e0b",
  },
  {
    name: "Kitchens & Beyond – Remodeling Platform",
    company: "Arivani Technologies",
    period: "Jan 2022 – Apr 2022",
    description:
      "Business web platform for a US-based kitchen and bathroom remodeling company — showcasing custom cabinet designs, countertop options (granite, quartz, marble), and full remodeling services.",
    // stack: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    highlights: [
      "Built service showcase pages for kitchen, bathroom, basement, and bedroom remodeling.",
      "Developed image gallery and portfolio sections to present completed remodeling projects.",
      "Created contact and inquiry form with business hours and location details for the Indiana-based business.",
    ],
    featured: false,
    category: "client",
    liveUrl: "https://www.kitchensanbeyond.com",
    accent: "#f97316",
  },
  {
    name: "Shop Hope Global – Shopify Fashion Store",
    company: "Arivani Technologies",
    period: "Sep 2022 – Feb 2023",
    description:
      "Shopify-based e-commerce fashion store selling handcrafted items from Haiti — featuring curated collections, new arrivals, bestsellers, gift cards, and a Square-powered secure checkout.",
    // stack: ["Shopify", "JavaScript", "Liquid", "React.js", "REST APIs"],

    highlights: [
      "Developed custom Shopify theme with product collections, new arrivals, and bestseller sections.",
      "Integrated Square-powered secure checkout supporting CashApp, Apple Pay, Google Pay, and major credit cards.",
      "Built responsive storefront with product search, cart management, and customer account features.",
    ],
    featured: false,
    category: "client",
    liveUrl: "https://www.shophopeglobal.org",
    accent: "#ec4899",
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
  level: "diploma" | "intermediate" | "highschool";
}

export const education: EducationItem[] = [
  {
    degree: "Diploma",
    field: "Computer Science and Engineering",
    institution: "Board of Technical Education, Uttar Pradesh, Lucknow",
    period: "2017 – 2019",
    level: "diploma",
  },
  {
    degree: "Intermediate (Class XII)",
    field: "Science",
    institution: "Uttar Pradesh Board",
    period: "2015",
    level: "intermediate",
  },
  {
    degree: "High School (Class X)",
    field: "Science",
    institution: "Uttar Pradesh Board",
    period: "2013",
    level: "highschool",
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "Apprenticeship (6 Months)",
    issuer: "Softpro India Computer Technologies (P) Limited, Lucknow",
    date: "Jul 2019",
  },
];

export const navItems = [
  "About",
  "Experience",
  "Projects",
  "GitHub",
  "Skills",
  "Education",
  "Contact",
] as const;

export type NavItem = (typeof navItems)[number];
