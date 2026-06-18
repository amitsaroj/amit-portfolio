"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const MailIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const DownloadIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CopyIcon = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

type ContactAccent = "indigo" | "emerald" | "cyan" | "violet" | "whatsapp";

interface ContactChannel {
  id: string;
  label: string;
  sublabel: string;
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
  accent: ContactAccent;
  external?: boolean;
  download?: string;
}

const primaryChannels: ContactChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    sublabel: "Quick chat",
    href: profile.whatsapp,
    ariaLabel: "Chat with Amit Saroj on WhatsApp (opens in new tab)",
    icon: <WhatsAppIcon />,
    accent: "whatsapp",
    external: true,
  },
  {
    id: "phone",
    label: profile.phone,
    sublabel: "Direct call",
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    ariaLabel: `Call Amit Saroj at ${profile.phone}`,
    icon: <PhoneIcon />,
    accent: "cyan",
  },
];

const secondaryChannels: ContactChannel[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    sublabel: "Professional network",
    href: profile.linkedin,
    ariaLabel: "Connect with Amit Saroj on LinkedIn (opens in new tab)",
    icon: <LinkedinIcon />,
    accent: "indigo",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    sublabel: "Open source work",
    href: profile.github,
    ariaLabel: "Follow Amit Saroj on GitHub (opens in new tab)",
    icon: <GithubIcon />,
    accent: "violet",
    external: true,
  },
  {
    id: "resume",
    label: "Resume",
    sublabel: "PDF download",
    href: profile.resumeUrl,
    ariaLabel: "Download Amit Saroj's resume",
    icon: <DownloadIcon />,
    accent: "emerald",
    download: "Amit_Saroj_5_Years.pdf",
  },
];

function ChannelCard({ channel }: { channel: ContactChannel }) {
  const className = `contact-channel-card contact-channel-${channel.accent}`;

  return (
    <a
      className={className}
      href={channel.href}
      target={channel.external ? "_blank" : undefined}
      rel={channel.external ? "noopener noreferrer" : undefined}
      download={channel.download}
      aria-label={channel.ariaLabel}
    >
      <span className="contact-channel-icon">{channel.icon}</span>
      <span className="contact-channel-copy">
        <span className="contact-channel-label">{channel.label}</span>
        <span className="contact-channel-sublabel">{channel.sublabel}</span>
      </span>
      <span className="contact-channel-arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
    </a>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email).catch(() => undefined);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="section contact-section section-container"
      id="contact"
      aria-label="Contact Amit Saroj"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionVariants}
      >
        <div className="section-header contact-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-subtitle">
            Open to Senior Node.js Developer, MERN Stack Developer, Full Stack Developer,
            Backend Developer, and AI Automation Engineer roles.
          </p>
        </div>

        <motion.div className="contact-panel" variants={panelVariants}>
          <div className="contact-panel-glow" aria-hidden="true" />

          <div className="contact-email-hero">
            <div className="contact-email-icon" aria-hidden="true">
              <MailIcon />
            </div>
            <div className="contact-email-copy">
              <span className="contact-email-label">Primary email</span>
              <span className="contact-email-value">{profile.email}</span>
            </div>
            <div className="contact-email-actions">
              <button
                type="button"
                className={`contact-copy-btn${copied ? " contact-copy-btn-success" : ""}`}
                onClick={handleCopy}
                aria-label={copied ? "Email copied to clipboard" : "Copy email to clipboard"}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
              <a
                className="contact-email-cta"
                href={`mailto:${profile.email}`}
                aria-label="Send email to Amit Saroj"
              >
                Send Email
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="contact-panel-divider" aria-hidden="true" />

          <div className="contact-primary-grid">
            {primaryChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>

          <div className="contact-secondary-grid">
            {secondaryChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
