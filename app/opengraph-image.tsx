import { ImageResponse } from "next/og";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, SITE_NAME } from "./lib/seo";
import { profile } from "./data/profile";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #080810 0%, #12121e 45%, #1a1033 100%)",
          color: "#f0f0f5",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            AS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 28, color: "#a78bfa", fontWeight: 700, letterSpacing: 4 }}>
              PORTFOLIO
            </div>
            <div style={{ fontSize: 22, color: "#8b8da0" }}>{SITE_NAME}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "#c7c9d9", lineHeight: 1.3 }}>
            {profile.title} · AI Engineer · MERN Expert
          </div>
          <div style={{ fontSize: 24, color: "#8b8da0", lineHeight: 1.5 }}>
            React.js · Node.js · NestJS · TypeScript · Kafka · Redis · AI Automation
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 22, color: "#a78bfa" }}>portfolio.autopilot.monster</div>
          <div style={{ fontSize: 20, color: "#6366f1" }}>{profile.yearsOfExperience} Years Experience</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
