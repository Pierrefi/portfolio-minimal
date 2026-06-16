import React from "react";

const news = [
  {
    date: "06/2026",
    text: "First paper accepted at ACL 2026 🇺🇸 — Oral presentation.",
  },
  {
    date: "03/2025",
    text: "Started teaching as a part-time lecturer at Université Paris-Dauphine — M2 ISF, Practical Data Science.",
  },
  {
    date: "01/2025",
    text: "Started my PhD at Télécom Paris, Institut Polytechnique de Paris.",
  },
];

export default function NewsSection({ sectionId = "news", heading = "News" }) {
  return (
    <section id={sectionId} style={{ padding: "4rem 0" }}>
      <h2>{heading}</h2>

      <div style={{ display: "grid", gap: "1.2rem", marginTop: "2rem" }}>
        {news.map((item) => (
          <div
            key={item.date}
            style={{
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              gap: "1rem",
              alignItems: "start",
            }}
          >
            <strong>{item.date}</strong>
            <p style={{ margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}