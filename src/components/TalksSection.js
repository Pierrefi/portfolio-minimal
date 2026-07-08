import React from "react";
import { Section } from "gatsby-theme-portfolio-minimal";

const talks = [
  {
    title: "Enhancing Two-Step Textual Anomaly Detection via Representation Geometry",
    venue: "ACL 2026",
    type: "Paper presentation (Oral)",
    date: "July 2026",
    image: "/Users/pierrefihey/portfolio-minimal/static/talks/prez_1.png",
    pptx: "/Users/pierrefihey/portfolio-minimal/static/talks/ACL_Oral_slides.pptx",
  },
];

export default function TalksSection({ sectionId, heading }) {
  return (
    <Section sectionId={sectionId} heading={heading}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
        {talks.map((talk) => (
          <a
            key={talk.title}
            href={talk.pptx}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              gap: "1.75rem",
              alignItems: "center",
              padding: "1.25rem",
              borderRadius: "14px",
              background: "white",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(0, 0, 0, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0, 0, 0, 0.08)";
            }}
          >
            <img
              src={talk.image}
              alt={`${talk.venue} slide preview`}
              style={{
                width: "260px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
              }}
            />

            <div>
              <h3
                style={{
                  margin: "0 0 0.75rem",
                  fontSize: "1.35rem",
                  lineHeight: 1.3,
                }}
              >
                {talk.title}
              </h3>

              <p style={{ margin: "0 0 0.25rem", fontWeight: 600 }}>
                {talk.venue}
              </p>

              <p style={{ margin: "0 0 0.25rem", opacity: 0.8 }}>
                {talk.type}
              </p>

              <p style={{ margin: "0 0 1rem", opacity: 0.65 }}>
                {talk.date}
              </p>

              <span
                style={{
                  display: "inline-block",
                  padding: "0.55rem 1rem",
                  borderRadius: "8px",
                  background: "#3B82A0",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                PPTX
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}