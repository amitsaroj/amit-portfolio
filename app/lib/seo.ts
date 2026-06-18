import type { Metadata } from "next";
import { certifications, education, experience, profile, projects, skills } from "../data/profile";

export const SITE_URL = "https://portfolio.autopilot.monster";
export const SITE_NAME = "Amit Saroj Portfolio";
export const OG_IMAGE_PATH = "/og-image.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const DEFAULT_KEYWORDS = [
  "Amit Saroj",
  "Amit Saroj Portfolio",
  "Amit Saroj Full Stack Developer",
  "Amit Saroj React Developer",
  "Amit Saroj Node.js Developer",
  "Amit Saroj AI Engineer",
  "Amit Saroj MERN Developer",
  "Amit Saroj Software Engineer",
  "Autopilot Monster Founder",
  "AI Automation Developer India",
  "React Developer",
  "Node.js Developer",
  "NestJS Developer",
  "Full Stack Developer",
  "MERN Developer",
  "AI Engineer",
  "AI Automation Engineer",
  "Agentic AI Developer",
  "n8n Developer",
  "TypeScript Developer",
  "Microservices Developer",
  "Kafka Developer",
  "Redis Developer",
  "Software Engineer India",
  "Senior Full Stack Developer",
  "Next.js Developer",
  "LangChain Developer",
  "OpenAI Integration",
  "Backend Developer India",
  "Mohali Software Engineer",
] as const;

export const DEFAULT_DESCRIPTION =
  "Amit Saroj is a Full Stack Developer specializing in React.js, Node.js, NestJS, AI Automation, Agentic AI, n8n Workflows, Microservices, Kafka, PostgreSQL, Redis and scalable SaaS applications.";

export type SeoPageKey =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "github"
  | "skills"
  | "education"
  | "contact"
  | "blog";

interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export const PAGE_SEO: Record<SeoPageKey, PageSeoConfig> = {
  home: {
    title: "Amit Saroj | Full Stack Developer, AI Engineer & MERN Expert",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  },
  about: {
    title: "About Amit Saroj | Full Stack Developer & AI Engineer",
    description:
      "Learn about Amit Saroj — Senior Full Stack Developer with 5+ years building Node.js, NestJS, React.js, microservices, and AI automation products in India.",
    path: "/#about",
  },
  experience: {
    title: "Experience | Amit Saroj",
    description:
      "Professional experience of Amit Saroj at Antier Solutions, Arivani Technologies, and Softpro India — Node.js, NestJS, MERN stack, Kafka, Redis, and enterprise SaaS delivery.",
    path: "/#experience",
  },
  projects: {
    title: "Projects | Amit Saroj Portfolio",
    description:
      "Explore projects by Amit Saroj including AutopilotMonster AI revenue platform, Libertum RWA tokenization, OwnerScope PropTech, and enterprise MERN applications.",
    path: "/#projects",
  },
  github: {
    title: "GitHub Activity | Amit Saroj",
    description:
      "Browse open-source repositories and GitHub activity from Amit Saroj — Full Stack Developer building with TypeScript, Node.js, React.js, and AI tooling.",
    path: "/#github",
  },
  skills: {
    title: "Skills | Amit Saroj",
    description:
      "Technical skills of Amit Saroj: React.js, Node.js, NestJS, TypeScript, Kafka, Redis, PostgreSQL, Docker, AWS, AI agents, n8n, LangChain, and microservices architecture.",
    path: "/#skills",
  },
  education: {
    title: "Education | Amit Saroj",
    description:
      "Academic background and certifications of Amit Saroj — Diploma in Computer Science and Engineering from Uttar Pradesh Board of Technical Education.",
    path: "/#education",
  },
  contact: {
    title: "Contact Amit Saroj",
    description:
      "Contact Amit Saroj for senior Full Stack Developer, Node.js, MERN, Backend, and AI Automation Engineer opportunities in India and remote.",
    path: "/#contact",
  },
  blog: {
    title: "AI, Node.js & Software Engineering Blog | Amit Saroj",
    description:
      "Insights from Amit Saroj on Node.js, React.js, AI automation, agentic AI, n8n workflows, microservices, and scalable SaaS engineering.",
    path: "/blog",
  },
};

export const PERSON_SKILLS = [
  "React.js",
  "Node.js",
  "NestJS",
  "TypeScript",
  "AI Automation",
  "Agentic AI",
  "n8n",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "Next.js",
  "MongoDB",
  "Microservices",
  "REST APIs",
  "Docker",
  "AWS",
  "LangChain",
  "OpenAI",
] as const;

export const INTERNAL_SECTIONS = [
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "github", label: "GitHub", href: "/#github" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const;

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.startsWith("/#")) {
    return `${SITE_URL}${normalized}`;
  }
  return new URL(normalized, SITE_URL).toString();
}

export function buildCanonical(path: string): string {
  const hashIndex = path.indexOf("#");
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) || "/" : path;
  return absoluteUrl(pathname);
}

interface BuildMetadataOptions {
  page?: SeoPageKey;
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  robots?: Metadata["robots"];
  noIndex?: boolean;
}

export function buildMetadata(options: BuildMetadataOptions = {}): Metadata {
  const page = options.page ?? "home";
  const config = PAGE_SEO[page];
  const title = options.title ?? config.title;
  const description = options.description ?? config.description;
  const keywords = options.keywords ?? [...DEFAULT_KEYWORDS, ...(config.keywords ?? [])];
  const canonicalPath = options.canonical ?? (config.path.split("#")[0] || "/");
  const ogImage = options.ogImage ?? OG_IMAGE_PATH;
  const twitterImage = options.twitterImage ?? ogImage;
  const robots =
    options.robots ??
    (options.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        });

  return {
    title,
    description,
    keywords,
    authors: [{ name: profile.name, url: profile.github }],
    creator: profile.name,
    publisher: profile.name,
    applicationName: SITE_NAME,
    category: "technology",
    alternates: {
      canonical: buildCanonical(canonicalPath),
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: absoluteUrl(canonicalPath),
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: `${profile.name} — ${profile.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
      creator: "@amitsaroj",
    },
    robots,
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    givenName: "Amit",
    familyName: "Saroj",
    url: SITE_URL,
    email: profile.email,
    telephone: profile.phone.replace(/\s/g, ""),
    jobTitle: profile.title,
    description: profile.summary,
    image: absoluteUrl(OG_IMAGE_PATH),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mohali",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "Antier Solutions",
    },
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
    sameAs: [profile.linkedin, profile.github, profile.website, profile.whatsapp],
    knowsAbout: [...PERSON_SKILLS],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
      skills: PERSON_SKILLS.join(", "),
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    author: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "AutopilotMonster",
    url: "https://autopilot.monster",
    founder: {
      "@id": `${SITE_URL}/#person`,
    },
    description:
      "AI-native multi-tenant SaaS platform unifying CRM, AI voice calling, WhatsApp OS, workflow automation, and agentic AI.",
    sameAs: ["https://autopilot.monster"],
  };
}

export function buildProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${profile.name} Portfolio`,
    description: DEFAULT_DESCRIPTION,
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };
}

export function buildProjectSchemas() {
  return projects.map((project, index) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/#project-${index + 1}`,
    name: project.name,
    description: project.description,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    creator: {
      "@id": `${SITE_URL}/#person`,
    },
    dateCreated: project.period,
    keywords: project.stack?.join(", "),
    url: project.liveUrl ?? SITE_URL,
    about: project.highlights,
    isPartOf: {
      "@type": "CollectionPage",
      name: "Amit Saroj Portfolio Projects",
      url: absoluteUrl("/#projects"),
    },
  }));
}

export function buildPortfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/#portfolio`,
    name: "Amit Saroj Portfolio",
    description: "Selected software engineering projects by Amit Saroj.",
    url: absoluteUrl("/#projects"),
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    hasPart: projects.map((project, index) => ({
      "@id": `${SITE_URL}/#project-${index + 1}`,
    })),
  };
}

export function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...INTERNAL_SECTIONS.map((section, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: section.label,
        item: absoluteUrl(section.href),
      })),
    ],
  };
}

export function buildExperienceSchema() {
  return experience.map((item) => ({
    "@context": "https://schema.org",
    "@type": "OrganizationRole",
    roleName: item.role,
    startDate: item.period.split("–")[0]?.trim(),
    endDate: item.period.includes("Present") ? undefined : item.period.split("–")[1]?.trim(),
    memberOf: {
      "@type": "Organization",
      name: item.company,
    },
  }));
}

export function buildStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildWebsiteSchema(),
      buildOrganizationSchema(),
      buildProfilePageSchema(),
      buildPortfolioSchema(),
      buildBreadcrumbSchema(),
      ...buildProjectSchemas(),
      ...buildExperienceSchema(),
    ],
  };
}

export function getSitemapEntries(): Array<{
  url: string;
  lastModified: Date;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}> {
  const lastModified = new Date();
  const staticPages = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/#about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/#experience", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/#projects", changeFrequency: "weekly" as const, priority: 0.95 },
    { path: "/#github", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/#skills", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/#education", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/#contact", changeFrequency: "monthly" as const, priority: 0.85 },
  ];

  return staticPages.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

export function getResumeAssetUrl(): string {
  return absoluteUrl(profile.resumeUrl);
}

export const seoFacts = {
  certificationsCount: certifications.length,
  projectsCount: projects.length,
  skillsCount: skills.reduce((total, group) => total + group.skills.length, 0),
  experienceCount: experience.length,
};
