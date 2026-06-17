"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, certifications } from "../data/profile";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const GraduationIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const CertificateIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

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
          {education.map((edu) => (
            <article
              className="education-card"
              key={edu.institution}
              aria-label={`${edu.degree} in ${edu.field}`}
            >
              <div className="education-icon-wrap" aria-hidden="true">
                <GraduationIcon />
              </div>
              <div className="education-details">
                <h3>
                  {edu.degree} in {edu.field}
                </h3>
                <p>{edu.institution}</p>
                <p className="education-period">{edu.period}</p>
              </div>
            </article>
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
