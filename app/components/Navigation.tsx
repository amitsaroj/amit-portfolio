"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, navItems, type NavItem } from "../data/profile";

function scrollToSection(id: string) {
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...navItems.map((n) => n.toLowerCase())];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      className={`nav-bar${scrolled ? " nav-scrolled" : ""}`}
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    >
      <div className="nav-inner">
        <button
          className="nav-logo"
          onClick={() => scrollToSection("hero")}
          aria-label="Go to top"
        >
          {profile.name.split(" ")[0].toLowerCase()}.dev
        </button>

        <div className="nav-links" role="menubar">
          {navItems.map((item: NavItem) => (
            <button
              key={item}
              className={`nav-link${activeSection === item.toLowerCase() ? " nav-link-active" : ""}`}
              onClick={() => scrollToSection(item)}
              role="menuitem"
              aria-current={activeSection === item.toLowerCase() ? "page" : undefined}
            >
              {item}
            </button>
          ))}
          <a
            className="nav-cta"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile (opens in new tab)"
          >
            GitHub ↗
          </a>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-line" style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span className="hamburger-line" style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="hamburger-line" style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="nav-mobile-menu"
            role="menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <motion.div
              className="nav-mobile-links"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06 } },
                closed: {},
              }}
            >
              {navItems.map((item: NavItem) => (
                <motion.button
                  key={item}
                  className="nav-mobile-link"
                  role="menuitem"
                  onClick={() => {
                    scrollToSection(item);
                    setMobileOpen(false);
                  }}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -16 },
                  }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.a
                className="nav-mobile-cta"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -16 },
                }}
              >
                GitHub ↗
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
