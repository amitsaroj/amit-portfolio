"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <section className="section section-container" id="about" aria-label="About Amit Saroj">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
      >
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">Background</h2>
        </div>
        <div className="about-content">
          <p>
            Senior Full Stack Developer with{" "}
            <strong>{profile.yearsOfExperience} years</strong> of hands-on experience
            building scalable backend services and SaaS platforms. Currently working at{" "}
            <strong>Antier Solutions</strong> in Mohali, India, building full-stack
            blockchain platforms and enterprise-grade applications.
          </p>
          <p>
            Previously at <strong>Arivani Technologies</strong> in Lucknow, delivering
            MERN Stack applications for enterprise clients across PropTech, e-commerce,
            and healthcare domains. Started career with a hands-on internship at{" "}
            <strong>Softpro India Computer Technologies</strong>.
          </p>
          <p>
            Expanding into AI Automation Engineering — building intelligent workflows
            with n8n, integrating OpenAI and LangChain APIs, developing Agentic AI
            pipelines, and implementing RAG-based solutions with vector databases.
          </p>
          <p>
            Open to:{" "}
            <span className="about-open-to">{profile.openTo}</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
