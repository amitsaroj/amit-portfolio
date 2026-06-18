"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills, type SkillCategory } from "../data/profile";

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: i * 0.06 },
  }),
};

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#6366f1",
  Backend: "#8b5cf6",
  Frontend: "#22d3ee",
  Databases: "#10b981",
  "AI & Automation": "#f59e0b",
  "DevOps & Cloud": "#a78bfa",
  Web3: "#ec4899",
  Practices: "#64748b",
};

const SearchIcon = () => (
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

function SkillCategoryCard({
  cat,
  index,
  search,
}: {
  cat: SkillCategory;
  index: number;
  search: string;
}) {
  const filtered = cat.skills.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );
  if (search && filtered.length === 0) return null;

  const color = CATEGORY_COLORS[cat.category] ?? "#6366f1";

  return (
    <motion.div
      className="skill-category-card skill-category-card-premium"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      aria-label={`${cat.category} skills`}
      style={{ "--cat-color": color, borderTopColor: color } as React.CSSProperties}
    >
      <div className="skill-category-header">
        <span className="skill-category-icon" aria-hidden="true" style={{ color }}>
          {cat.icon}
        </span>
        <h3 className="skill-category-title" style={{ color }}>{cat.category}</h3>
      </div>
      <div className="skill-tags" role="list">
        {cat.skills.map((skill) => {
          const highlight =
            search.length > 0 && skill.toLowerCase().includes(search.toLowerCase());
          return (
            <span
              className={`skill-tag${highlight ? " skill-tag-highlighted" : ""}`}
              key={skill}
              role="listitem"
            >
              {skill}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [search, setSearch] = useState("");

  const hasResults = skills.some((cat) =>
    cat.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section
      className="section section-container"
      id="skills"
      aria-label="Skills and technologies"
    >
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={headerVariants}
      >
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          Technical capabilities verified from resume, professional experience, and GitHub
          activity.
        </p>
      </motion.div>

      <div className="skill-search-wrap">
        <label htmlFor="skill-search" className="sr-only">
          Search skills
        </label>
        <SearchIcon />
        <input
          id="skill-search"
          type="search"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="skill-search-input"
          aria-label="Search skills"
          autoComplete="off"
        />
        {search && (
          <button
            className="skill-search-clear"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {!hasResults && search && (
        <p className="skills-no-results" role="status">
          No skills match &ldquo;{search}&rdquo;
        </p>
      )}

      <div className="skills-grid">
        {skills.map((cat, i) => (
          <SkillCategoryCard key={cat.category} cat={cat} index={i} search={search} />
        ))}
      </div>
    </section>
  );
}
