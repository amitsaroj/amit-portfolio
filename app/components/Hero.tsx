"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const DownloadIcon = () => (
  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const [counted, setCounted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setCounted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const repoCount = useCountUp(profile.githubRepos, 1.2, counted);

  return (
    <section
      className="section hero-section section-container"
      id="hero"
      ref={ref}
      aria-label="Introduction"
    >
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants} aria-label="Availability status">
          <span className="hero-badge-dot" aria-hidden="true" />
          Open to senior roles in India &amp; remote
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          {profile.name.split(" ")[0]}
          <br />
          {profile.name.split(" ")[1]}
        </motion.h1>

        <motion.p className="hero-title" variants={itemVariants}>
          {profile.subtitle}
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          {profile.summary}
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <button
            className="btn-primary"
            onClick={() => scrollToSection("projects")}
            aria-label="View projects section"
          >
            View Projects
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
          </button>
          <a
            className="btn-secondary"
            href={profile.resumeUrl}
            download="Amit_Saroj_Resume.pdf"
            aria-label="Download Amit Saroj's resume"
          >
            Download Resume
            <DownloadIcon />
          </a>
          <a
            className="btn-whatsapp"
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Amit Saroj on WhatsApp (opens in new tab)"
          >
            WhatsApp
            <WhatsAppIcon />
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants} aria-label="Career statistics">
          <div className="hero-stat">
            <span className="hero-stat-value" aria-label={`${profile.yearsOfExperience} years of experience`}>
              {profile.yearsOfExperience} YOE
            </span>
            <span className="hero-stat-label">Verified Experience</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value" aria-label="3 structured employers">3</span>
            <span className="hero-stat-label">Structured Employers</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-value" aria-label={`${repoCount} GitHub repositories`}>
              {repoCount}
            </span>
            <span className="hero-stat-label">GitHub Repositories</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
