import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubActivity from "./components/GitHubActivity";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { profile } from "./data/profile";
import { buildMetadata, INTERNAL_SECTIONS } from "./lib/seo";

export const metadata: Metadata = buildMetadata({ page: "home" });

export default function Home() {
  return (
    <div className="portfolio-root">
      <Navigation />
  
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <GitHubActivity />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Education />
        <hr className="section-divider" />
        <Contact />
      </main>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer-glow" aria-hidden="true" />
        <div className="site-footer-inner section-container">
          <div className="footer-brand">
            <span className="footer-monogram" aria-hidden="true">AS</span>
            <div className="footer-brand-copy">
              <span className="footer-name">{profile.name}</span>
              <span className="footer-role">{profile.title}</span>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {INTERNAL_SECTIONS.map((section) => (
              <a key={section.id} className="footer-nav-link" href={section.href}>
                {section.label}
              </a>
            ))}
          </nav>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} {profile.name}. Crafted with Next.js &amp; TypeScript.
          </p>
          <div className="footer-stack" aria-label="Tech stack">
            <span className="footer-stack-pill">Next.js</span>
            <span className="footer-stack-pill">TypeScript</span>
            <span className="footer-stack-pill">Node.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
