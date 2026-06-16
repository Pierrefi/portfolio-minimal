import React from "react";

const highlightStyle = {
  color: "#3B82A0",
  fontWeight: 700,
};

const news = [
  {
    date: "06/2026",
    text: (
      <>
        My first paper has been accepted at{" "}
        <span style={highlightStyle}>ACL 2026</span> 🇺🇸 —{" "}
        <strong>Oral Presentation</strong>.
      </>
    ),
  },
  {
    date: "03/2025",
    text: (
      <>
        I started teaching as an Adjunct Lecturer at{" "}
        <span style={highlightStyle}>
          Université Paris-Dauphine
        </span>{" "}
        for <strong>M2 ISF – Practical Data Science</strong>.
      </>
    ),
  },
  {
    date: "01/2025",
    text: (
      <>
        I started my PhD at{" "}
        <span style={highlightStyle}>
          Télécom Paris
        </span>
        , <strong>Institut Polytechnique de Paris</strong>.
      </>
    ),
  },
];

export default function NewsSection({ sectionId = "news", heading = "News" }) {
  return (
    <section id={sectionId} style={{ padding: "2rem 0" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 2rem" }}>
        <h2 style={{ marginBottom: "2.5rem" }}>{heading}</h2>

        <div style={{ display: "grid", gap: "0.4rem" }}>
          {news.map((item) => (
            <div
              key={item.date}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "1.5rem",
                alignItems: "start",
                padding: "1.35rem 0",
                borderBottom: "1px solid rgba(90, 100, 120, 0.16)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  color: "#667085",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    opacity: 0.75,
                  }}
                />
                {item.date}
              </div>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.75,
                  color: "#344054",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}