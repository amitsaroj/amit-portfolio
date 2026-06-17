"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience, type ExperienceItem } from "../data/profile";

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  return (
    <motion.div
      className="timeline-item"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className="timeline-dot"
        aria-hidden="true"
        style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}66` }}
      />
      <article className="experience-card" aria-label={`${exp.company} — ${exp.role}`}>
        <div className="experience-header">
          <div className="experience-header-left">
            <h3 className="experience-company">{exp.company}</h3>
            <p className="experience-role" style={{ color: exp.accent }}>
              {exp.role}
            </p>
            <p className="experience-location">{exp.location}</p>
          </div>
          <div className="experience-meta">
            <span className="experience-period">{exp.period}</span>
            <span
              className="experience-type-badge"
              style={{
                background: `${exp.accent}18`,
                color: exp.accent,
                borderColor: `${exp.accent}30`,
              }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        <div className="experience-stack" aria-label="Tech stack">
          {exp.stack.map((tech) => (
            <span className="stack-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <ul className="experience-responsibilities" aria-label="Responsibilities">
          {exp.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </article>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      className="section section-container"
      id="experience"
      aria-label="Professional experience"
    >
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={headerVariants}
      >
        <span className="section-label">Career</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Professional journey across enterprise software, blockchain platforms, and SaaS
          products.
        </p>
      </motion.div>

      <div className="timeline" aria-label="Career timeline">
        <div className="timeline-line" aria-hidden="true" />
        {experience.map((exp, index) => (
          <ExperienceCard key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
