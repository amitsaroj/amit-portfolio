"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const navItems = ["Resume", "Experience", "Portfolio", "Skills", "Contact"];

const roles = [
  {
    company: "Antier Solutions",
    period: "Feb 2023 - Present",
    title: "Senior MERN Stack Developer",
    stack: "Node.js, NestJS, React, MongoDB, Web3.js, Ethers.js, Kafka, AWS",
    impact:
      "Developed tokenization platforms using ERC-721 and ERC-1155, integrated smart contracts for DeFi protocols, implemented Kafka streams, and improved database performance."
  },
  {
    company: "Arivani Technologies",
    period: "Jan 2021 - Feb 2023",
    title: "MERN Stack Developer",
    stack: "MERN, Redux, REST API, MySQL",
    impact:
      "Built e-commerce platforms with secure payment gateways and healthcare systems with patient record tracking and optimized backend APIs."
  },
  {
    company: "Softpro India",
    period: "Jun 2019 - Dec 2020",
    title: "Junior Developer",
    stack: "HTML, CSS, JavaScript, PHP",
    impact:
      "Assisted in frontend development, maintained legacy systems, and established a disciplined foundation in production web delivery."
  }
];

const projects = [
  {
    name: "Libertum / BlockRidge",
    summary:
      "Decentralized real estate platform with tokenization, MERN architecture, smart contracts, and investor-grade workflows.",
    image: "/stitch/project-archives.jpg",
    tags: ["NestJS", "React", "MongoDB", "Solidity"]
  },
  {
    name: "SaitaSwap",
    summary:
      "DeFi exchange experience spanning wallet flows, swap states, liquidity mechanics, and real-time chain interactions.",
    image: "/stitch/resume-showcase.jpg",
    tags: ["Web3.js", "Ethers", "Redux", "Node.js"]
  },
  {
    name: "Ownerscope",
    summary:
      "Analytics dashboard for asset intelligence, portfolio tracking, and operational visibility across Web3 products.",
    image: "/stitch/experience-log.jpg",
    tags: ["Next.js", "Kafka", "AWS", "Redis"]
  }
];

const skills = [
  ["TypeScript", "95"],
  ["Node.js", "93"],
  ["NestJS", "91"],
  ["React", "92"],
  ["MongoDB", "89"],
  ["Web3 Systems", "94"],
  ["Kafka", "86"],
  ["AWS", "84"]
];

const testimonials = [
  {
    quote:
      "Amit is a Web3 visionary whose deep learning integration redefined our project's trajectory. His understanding of AI ethics is unmatched.",
    name: "Dr. Evelyn Reed",
    role: "CEO, DeepNet Solutions"
  },
  {
    quote:
      "Exceptional MERN stack expertise paired with the rare ability to explain technical tradeoffs clearly to product and executive teams.",
    name: "Rohan Mehta",
    role: "Product Lead, Arivani"
  },
  {
    quote:
      "He transformed our user experience with practical engineering judgment, calm delivery, and a sharp sense for scalable architecture.",
    name: "Maya Chen",
    role: "Founder, Signal Reef"
  }
];

function scrollToSection(label: string) {
  document
    .getElementById(label.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const activeTestimonial = testimonials[testimonialIndex];

  const skillAverage = useMemo(() => {
    const sum = skills.reduce((total, [, value]) => total + Number(value), 0);
    return Math.round(sum / skills.length);
  }, []);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav-pill-row" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item} className="glass-pill" onClick={() => scrollToSection(item)}>
            {item}
          </button>
        ))}
      </nav>

      <section className="hero" id="resume">
        <div className="hero-copy">
          <p className="eyebrow">Abyss 2030 Interaction Lab</p>
          <h1>Amit Saroj</h1>
          <p className="title-line">Senior MERN & Web3 Engineer Portfolio</p>
          <p className="hero-text">
            I build production-grade systems where real-time MERN architecture, Web3 protocols,
            and agentic AI experiences meet clean product execution.
          </p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => scrollToSection("Portfolio")}>
              Explore Projects
            </button>
            <button className="secondary-action" onClick={() => scrollToSection("Contact")}>
              Contact
            </button>
          </div>
        </div>
        <div className="hero-orb" aria-label="Amit Saroj monogram">
          <Image src="/stitch/apple-touch-icon.jpg" alt="" width={280} height={280} priority />
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="hud-card profile-card">
          <div className="card-heading">
            <p>Sub-Aquatic Profile</p>
            <span>{skillAverage}% signal</span>
          </div>
          <h2>Engineering systems that feel fast, clear, and inevitable.</h2>
          <p>
            Focused on tokenization platforms, DeFi integrations, healthcare/e-commerce products,
            and cloud-backed APIs. Comfortable from smart contract integration through UI polish.
          </p>
          <div className="metrics">
            <span>6+ Years</span>
            <span>MERN + Web3</span>
            <span>AI UX</span>
          </div>
        </article>

        <article className="hud-card skill-current">
          <div className="card-heading">
            <p>Neural Skill Current</p>
            <span>live matrix</span>
          </div>
          <div className="rings">
            {[
              ["Web3 & EVM", "95"],
              ["MERN Stack", "90"],
              ["Agentic AI", "80"]
            ].map(([label, value]) => (
              <div className="ring" key={label} style={{ "--score": value } as React.CSSProperties}>
                <strong>{value}%</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-panel" id="experience">
        <div className="section-title">
          <p>Sub-Aquatic Career Log</p>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {roles.map((role) => (
            <article className="timeline-item" key={role.company}>
              <div>
                <h3>{role.company}</h3>
                <p className="role-title">{role.title}</p>
                <p className="stack-line">{role.stack}</p>
                <p>{role.impact}</p>
              </div>
              <time>{role.period}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel" id="portfolio">
        <div className="section-title">
          <p>Deep-Sea Project Nodes</p>
          <h2>Portfolio</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-image">
                <Image src={project.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel split-panel" id="skills">
        <div className="section-title">
          <p>Neural Skill Matrix</p>
          <h2>Skills</h2>
        </div>
        <div className="skill-bars">
          {skills.map(([skill, value]) => (
            <div className="skill-row" key={skill}>
              <span>{skill}</span>
              <div className="bar">
                <i style={{ width: `${value}%` }} />
              </div>
              <strong>{value}%</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonial-title">
        <Image src="/stitch/testimonials.jpg" alt="" fill sizes="100vw" />
        <div className="testimonial-content">
          <p className="eyebrow">Echoes from the Deep</p>
          <h2 id="testimonial-title">Testimonials</h2>
          <blockquote>{activeTestimonial.quote}</blockquote>
          <div>
            <strong>{activeTestimonial.name}</strong>
            <span>{activeTestimonial.role}</span>
          </div>
          <div className="testimonial-controls">
            <button
              onClick={() =>
                setTestimonialIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button
              onClick={() => setTestimonialIndex((index) => (index + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Surface Channel</p>
          <h2>Let’s build the next intelligent interface.</h2>
        </div>
        <div className="contact-links">
          <a href="tel:+9110176728830">+91 10176728 830</a>
          <a href="mailto:arivani@gmail.com">arivani@gmail.com</a>
          <a href="https://amit.saroj.com">amit.saroj.com</a>
        </div>
      </section>
    </main>
  );
}
