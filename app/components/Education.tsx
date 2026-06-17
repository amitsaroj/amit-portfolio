"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, certifications, type EducationItem } from "../data/profile";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: i * 0.1,
    },
  }),
};

const DiplomaIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const SchoolIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CertificateIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const LEVEL_CONFIG = {
  diploma: {
    color: "#6366f1",
    bg: "rgba(99, 102, 241, 0.1)",
    border: "rgba(99, 102, 241, 0.2)",
    label: "Diploma",
  },
  intermediate: {
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.1)",
    border: "rgba(139, 92, 246, 0.2)",
    label: "Class XII",
  },
  highschool: {
    color: "#22d3ee",
    bg: "rgba(34, 211, 238, 0.08)",
    border: "rgba(34, 211, 238, 0.18)",
    label: "Class X",
  },
};

function EducationCard({ edu, index }: { edu: EducationItem; index: number }) {
  const cfg = LEVEL_CONFIG[edu.level];
  const Icon = edu.level === "diploma" ? DiplomaIcon : SchoolIcon;

  return (
    <motion.article
      className="education-card"
      aria-label={`${edu.degree} in ${edu.field}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      style={{ "--edu-accent": cfg.color } as React.CSSProperties}
    >
      <div
        className="education-icon-wrap"
        aria-hidden="true"
        style={{ background: cfg.bg, color: cfg.color }}
      >
        <Icon />
      </div>
      <div className="education-details">
        <div className="edu-header-row">
          <span
            className="edu-level-pill"
            style={{ color: cfg.color, borderColor: cfg.border, background: cfg.bg }}
          >
            {cfg.label}
          </span>
        </div>
        <h3>
          {edu.degree}: {edu.field}
        </h3>
        <p>{edu.institution}</p>
        <p className="education-period">{edu.period}</p>
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <section
      className="section section-container"
      id="education"
      aria-label="Education and certifications"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
      >
        <div className="section-header">
          <span className="section-label">Education &amp; Certifications</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-list">
          {education.map((edu, i) => (
            <EducationCard key={edu.degree} edu={edu} index={i} />
          ))}

          {certifications.map((cert) => (
            <article
              className="cert-card"
              key={cert.name}
              aria-label={`Certification: ${cert.name}`}
            >
              <div className="cert-icon-wrap" aria-hidden="true">
                <CertificateIcon />
              </div>
              <div className="cert-details">
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                <p className="cert-date">Issued {cert.date}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
