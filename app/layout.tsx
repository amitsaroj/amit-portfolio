import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Saroj | Senior Full Stack Developer – Node.js, NestJS, MERN Stack",
  description:
    "Senior Full Stack Developer with 5+ years building scalable backend services and SaaS platforms using Node.js, NestJS, TypeScript, React.js, and Next.js. Expert in microservices, REST APIs, Kafka, Redis, AI Automation, n8n, LangChain, OpenAI.",
  keywords: [
    "Amit Saroj",
    "Senior Full Stack Developer",
    "Node.js Developer",
    "NestJS Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "React.js Developer",
    "Next.js Developer",
    "Backend Developer India",
    "Microservices Architecture",
    "REST API Design",
    "AI Automation Engineer",
    "n8n Developer",
    "LangChain Developer",
    "OpenAI Integration",
    "Agentic AI",
    "RAG Pipeline",
    "Kafka Redis MongoDB",
    "Docker AWS CI/CD",
    "Software Engineer Mohali",
    "Full Stack Developer India",
    "Web3 Developer",
  ],
  authors: [{ name: "Amit Saroj", url: "https://github.com/amitsaroj" }],
  creator: "Amit Saroj",
  publisher: "Amit Saroj",
  metadataBase: new URL("https://autopilot.monster"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://autopilot.monster",
    title: "Amit Saroj | Senior Full Stack Developer – Node.js, NestJS, MERN Stack",
    description:
      "Senior Full Stack Developer with 5+ years building scalable backend services and SaaS platforms. Node.js · NestJS · TypeScript · React.js · Microservices · AI Automation.",
    siteName: "Amit Saroj – Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amit Saroj – Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Saroj | Senior Full Stack Developer – Node.js, NestJS, MERN",
    description:
      "5+ years building scalable backend services with Node.js, NestJS, TypeScript, React.js, and AI Automation. Open to senior roles in India & remote.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#080810" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amit Saroj",
              url: "https://autopilot.monster",
              email: "sarojamit4956@gmail.com",
              telephone: "+918707831236",
              jobTitle: "Senior Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Antier Solutions",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mohali",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/in/amit-saroj/",
                "https://github.com/amitsaroj",
              ],
              knowsAbout: [
                "Node.js",
                "NestJS",
                "React.js",
                "TypeScript",
                "Microservices",
                "AI Automation",
                "MERN Stack",
              ],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
