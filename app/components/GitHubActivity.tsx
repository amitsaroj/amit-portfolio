"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  topics: string[];
  visibility: string;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  HTML: "#e34c26",
  Shell: "#89e051",
  Solidity: "#AA6746",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Dockerfile: "#384d54",
  "Jupyter Notebook": "#DA5B0B",
};

const REPOS_PER_SLIDE = 4;

function getCols(width: number): number {
  if (width <= 680) return 1;
  if (width <= 900) return 2;
  return 4;
}

function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const d = Math.floor(diff / 86400000);
  if (d < 1) return "today";
  if (d < 7) return `${d}d ago`;
  if (d < 30) return `${Math.floor(d / 7)}w ago`;
  if (d < 365) return `${Math.floor(d / 30)}mo ago`;
  return `${Math.floor(d / 365)}y ago`;
}

function formatName(name: string): string {
  return name.replace(/[-_.]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const StarIcon = () => (
  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ForkIcon = () => (
  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
    <line x1="12" y1="12" x2="12" y2="15" />
  </svg>
);

const ExternalIcon = () => (
  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const ChevronIcon = ({ dir }: { dir: "left" | "right" }) => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {dir === "left" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
  </svg>
);

const ForkBadge = () => (
  <svg aria-label="Forked repo" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
    <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" /><line x1="12" y1="12" x2="12" y2="15" />
  </svg>
);

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const langColor = repo.language ? (LANG_COLORS[repo.language] ?? "#8b8b8b") : "#444";
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="gh-repo-card"
      aria-label={`View ${formatName(repo.name)} on GitHub`}
      style={{ "--gh-lang-color": langColor } as React.CSSProperties}
    >
      <div className="gh-repo-lang-bar" aria-hidden="true" />
      <div className="gh-repo-body">
        <div className="gh-repo-header">
          <span className="gh-repo-name">{formatName(repo.name)}</span>
          <span className="gh-repo-ext"><ExternalIcon /></span>
        </div>

        {repo.fork && (
          <span className="gh-fork-badge" aria-label="Forked repository">
            <ForkBadge /> fork
          </span>
        )}

        <p className="gh-repo-desc">
          {repo.description ?? <span className="gh-repo-no-desc">—</span>}
        </p>

        <div className="gh-repo-footer">
          {repo.language && (
            <span className="gh-lang-tag">
              <span className="gh-lang-dot" style={{ background: langColor }} aria-hidden="true" />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="gh-stat"><StarIcon />{repo.stargazers_count}</span>
          )}
          {repo.forks_count > 0 && (
            <span className="gh-stat"><ForkIcon />{repo.forks_count}</span>
          )}
          <span className="gh-updated">{relativeTime(repo.updated_at)}</span>
        </div>
      </div>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div className="gh-repo-card gh-repo-skeleton" aria-hidden="true">
      <div className="gh-repo-lang-bar" />
      <div className="gh-repo-body">
        <div className="gh-skel-line gh-skel-title" />
        <div className="gh-skel-line gh-skel-desc" />
        <div className="gh-skel-line gh-skel-desc gh-skel-short" />
        <div className="gh-skel-line gh-skel-tag" />
      </div>
    </div>
  );
}

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [cols, setCols] = useState(4);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/amitsaroj/repos?sort=updated&per_page=100&type=public",
      { headers: { Accept: "application/vnd.github.v3+json" } }
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: GitHubRepo[]) => {
        const sorted = [...data].sort((a, b) => {
          if (a.fork !== b.fork) return a.fork ? 1 : -1;
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        setRepos(sorted);
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const updateCols = () => setCols(getCols(window.innerWidth));
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const perSlide = REPOS_PER_SLIDE;

  const slides = useMemo(() => {
    const chunks: GitHubRepo[][] = [];
    for (let i = 0; i < repos.length; i += perSlide) {
      chunks.push(repos.slice(i, i + perSlide));
    }
    return chunks;
  }, [repos, perSlide]);

  useEffect(() => {
    setSlideIndex(0);
  }, [perSlide, repos.length]);

  useEffect(() => {
    if (slideIndex >= slides.length && slides.length > 0) {
      setSlideIndex(slides.length - 1);
    }
  }, [slideIndex, slides.length]);

  const canPrev = slideIndex > 0;
  const canNext = slideIndex < slides.length - 1;
  const currentSlide = slides[slideIndex] ?? [];

  const goToSlide = (dir: "prev" | "next") => {
    setSlideIndex((i) => (dir === "next" ? Math.min(i + 1, slides.length - 1) : Math.max(i - 1, 0)));
  };

  const displayed = loading ? null : repos.length;

  return (
    <section className="section section-container" id="github" aria-label="GitHub repositories">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={headerVariants}
      >
        <span className="section-label">Open Source</span>
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-subtitle">
          {loading
            ? "Loading repositories…"
            : displayed !== null && displayed > 0
            ? `${displayed} public repositories · Browse the code behind the work.`
            : "Public repositories on GitHub."}
        </p>
      </motion.div>

      <div className="gh-slider-wrap">
        <div className="gh-slide-viewport" aria-live="polite">
          {loading ? (
            <div
              className="gh-slide"
              style={{ "--gh-cols": cols } as React.CSSProperties}
              role="list"
              aria-label="Loading GitHub repositories"
            >
              {Array.from({ length: perSlide }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slideIndex}
                className="gh-slide"
                style={{ "--gh-cols": cols } as React.CSSProperties}
                role="list"
                aria-label={`GitHub repositories, slide ${slideIndex + 1} of ${slides.length}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {currentSlide.map((repo) => (
                  <div key={repo.id} role="listitem">
                    <RepoCard repo={repo} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <div className="gh-slider-controls">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-view-all"
            aria-label="View all repositories on GitHub (opens in new tab)"
          >
            View all on GitHub <ExternalIcon />
          </a>
          <div className="gh-slider-meta">
            {!loading && slides.length > 1 && (
              <span className="gh-slide-counter" aria-hidden="true">
                {slideIndex + 1} / {slides.length}
              </span>
            )}
            <div className="gh-nav-btns" aria-label="Slide navigation">
              <button
                className="gh-nav-btn"
                onClick={() => goToSlide("prev")}
                disabled={!canPrev}
                aria-label="Previous slide"
              >
                <ChevronIcon dir="left" />
              </button>
              <button
                className="gh-nav-btn"
                onClick={() => goToSlide("next")}
                disabled={!canNext}
                aria-label="Next slide"
              >
                <ChevronIcon dir="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
