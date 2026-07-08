import React from "react";
import { Section } from "gatsby-theme-portfolio-minimal";

const talks = [
  {
    title: "ACL 2026",
    subtitle: "Paper presentation (Oral)",
    date: "July 2026",
    description:
      "Enhancing Two-Step Textual Anomaly Detection via Representation Geometry.",
    image: "/Users/pierrefihey/portfolio-minimal/static/prez_1.png",
    slides: "/Users/pierrefihey/portfolio-minimal/static/talks/ACL_Oral_slides.pptx",
  },
];

export default function TalksSection({ sectionId, heading }) {
  return (
    <Section sectionId={sectionId} heading={heading}>
      {talks.map((talk) => (
        <div
          key={talk.title}
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            marginBottom: "2.5rem",
          }}
        >
          <img
            src={talk.image}
            alt={talk.title}
            style={{
              width: 240,
              borderRadius: 8,
              boxShadow: "0 3px 10px rgba(0,0,0,.15)",
            }}
          />

          <div>
            <h2 style={{ marginBottom: 6 }}>
              {talk.title}
            </h2>

            <div style={{ fontWeight: 600 }}>
              {talk.subtitle}
            </div>

            <div style={{ color: "#777", margin: "6px 0 14px" }}>
              {talk.date}
            </div>

            <p style={{ maxWidth: 650 }}>
              {talk.description}
            </p>

            <a
              href={talk.slides}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 10,
                padding: "10px 18px",
                borderRadius: 6,
                background: "#2d6cdf",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Slides
            </a>
          </div>
        </div>
      ))}
    </Section>
  );
}