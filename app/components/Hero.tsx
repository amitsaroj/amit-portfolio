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
          {/* <br /> */}
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
          <button
            className="btn-secondary"
            onClick={() => scrollToSection("contact")}
            aria-label="Go to contact section"
          >
            Get in Touch
          </button>
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
