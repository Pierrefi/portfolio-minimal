import React from "react";

const talks = [
  {
    title:
      "Enhancing Two-Step Textual Anomaly Detection via Representation Geometry",
    venue: "ACL 2026",
    type: "Paper Presentation (Oral)",
    date: "July 2026",
    image: "/talks/prez_1.png",
    pptx: "/talks/ACL_Oral_slides.pptx",
  },
];

export default function TalksSection({
  sectionId = "talks",
  heading = "Talks",
}) {
  return (
    <section id={sectionId} style={{ padding: "2rem 0" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <h2 style={{ marginBottom: "2rem" }}>{heading}</h2>

        {talks.map((talk) => (
          <div
            key={talk.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.4rem",
              padding: "1rem",
              border: "1px solid rgba(90,100,120,0.14)",
              borderRadius: "12px",
              backgroundColor: "rgba(79,109,122,0.025)",
            }}
          >
            <img
              src={talk.image}
              alt={talk.title}
              style={{
                width: "170px",
                borderRadius: "8px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />

            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: "1.15rem", lineHeight: 1.3 }}>
                {talk.title}
              </h3>

              <div style={{ marginTop: "0.4rem", color: "#555" }}>
                <strong>{talk.venue}</strong> · {talk.type}
              </div>

              <div style={{ marginTop: "0.15rem", color: "#888" }}>
                {talk.date}
              </div>

              <a
                href={talk.pptx}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.9rem",
                  padding: "0.45rem 0.9rem",
                  borderRadius: "6px",
                  background: "#4F6D7A",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                Download PPTX
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}