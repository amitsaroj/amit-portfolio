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
      <footer className="site-footer section-container" role="contentinfo">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          TypeScript.
        </p>
      </footer>
    </div>
  );
}
