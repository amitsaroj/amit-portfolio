"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectItem } from "../data/profile";
import { sectionHeaderVariants, cardRevealVariants } from "../lib/animations";
import TiltCard from "./motion/TiltCard";

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const ALL_FILTERS = [
  "All",
  "Node.js",
  "NestJS",
  "React.js",
  "Next.js",
  "OpenAI",
  "Docker",
  "Kafka",
  "Shopify",
];

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: ProjectItem;
  index: number;
  featured: boolean;
}) {
  return (
    <TiltCard className={`project-card-wrap${featured ? " project-card-wrap-featured" : ""}`}>
      <motion.article
        className={`project-card project-card-premium${featured ? " project-card-featured" : ""}`}
        aria-label={project.name}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={cardRevealVariants}
        style={{ "--project-accent": project.accent } as React.CSSProperties}
      >
      <div
        className="project-card-top-bar"
        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}66)` }}
        aria-hidden="true"
      />
      <div className="project-card-body">
        <div className="project-card-header">
          <span className="project-company-badge" style={{ color: project.accent }}>
            {project.company}
          </span>
          <span className="project-period">{project.period}</span>
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="project-highlights" aria-label="Project highlights">
          {project.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="project-footer">
          <div className="project-stack" aria-label="Technologies used">
            {project.stack && project.stack.map((tech) => (
              <span className="stack-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          {project.liveUrl && (
            <a
              className="project-live-btn"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.name} (opens in new tab)`}
              style={{ borderColor: `${project.accent}44`, color: project.accent }}
            >
              Live Demo <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
      </motion.article>
    </TiltCard>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const featured = projects.find((p) => p.featured);
  const flagshipNonFeatured = projects.filter((p) => !p.featured && p.category === "flagship");
  const clientProjects = projects.filter((p) => p.category === "client");

  const matchesFilter = (p: ProjectItem) => {
    if (filter === "All") return true;
    return p.stack?.includes(filter);
  };

  const showFeatured = featured && matchesFilter(featured);
  const filteredFlagship = flagshipNonFeatured.filter(matchesFilter);
  const filteredClient = clientProjects.filter(matchesFilter);

  return (
    <section
      className="section section-container"
      id="projects"
      aria-label="Projects"
    >
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionHeaderVariants}
      >
        <span className="section-label">Work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real-world platforms built with modern architecture, deployed in production environments.
        </p>
      </motion.div>

      <div className="projects-filter" role="group" aria-label="Filter projects by technology">
        {ALL_FILTERS.map((tag) => (
          <button
            key={tag}
            className={`filter-btn${filter === tag ? " filter-btn-active" : ""}`}
            onClick={() => setFilter(tag)}
            aria-pressed={filter === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Featured flagship card */}
          {showFeatured && featured && (
            <div style={{ marginBottom: "var(--space-lg)" }}>
              <ProjectCard project={featured} index={0} featured={true} />
            </div>
          )}

          {/* Other flagship projects */}
          {filteredFlagship.length > 0 && (
            <div
              className="projects-grid"
              style={{ marginBottom: filteredClient.length > 0 ? "var(--space-3xl)" : undefined }}
            >
              {filteredFlagship.map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i + 1} featured={false} />
              ))}
            </div>
          )}

          {/* Client work section */}
          {filteredClient.length > 0 && (
            <>
              <div className="projects-client-header">
                <span className="projects-client-label">Client Work</span>
                <div className="projects-client-line" aria-hidden="true" />
              </div>
              <div className="projects-grid">
                {filteredClient.map((p, i) => (
                  <ProjectCard key={p.name} project={p} index={i + 1} featured={false} />
                ))}
              </div>
            </>
          )}

          {!showFeatured && filteredFlagship.length === 0 && filteredClient.length === 0 && (
            <p className="projects-empty">No projects match this filter.</p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
