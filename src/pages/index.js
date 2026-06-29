import React from "react";

const publications = [
  {
    title:
      "Enhancing Two-Step Textual Anomaly Detection through Contrastive Learning and Representation Geometry",
    authors: "Pierre Fihey, Matthieu Labeau, Pavlo Mozharovskyi",
    venue: "ACL 2026",
    link: "https://aclanthology.org/2026.acl-long.1312/",
  },
];

export default function ResearchSection({
  sectionId = "research",
  heading = "Publications",
}) {
  return (
    <section id={sectionId} style={{ padding: "1.5rem 0" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 2rem" }}>
        <h2 style={{ marginBottom: "1.2rem" }}>{heading}</h2>

        <div>
          {publications.map((pub, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#1d2939",
                  textDecoration: "none",
                }}
              >
                {pub.title}
              </a>

              <div
                style={{
                  marginTop: "0.25rem",
                  fontSize: "0.95rem",
                  color: "#667085",
                }}
              >
                {pub.authors}
              </div>

              <div
                style={{
                  marginTop: "0.15rem",
                  fontSize: "0.9rem",
                  color: "#667085",
                  fontStyle: "italic",
                }}
              >
                {pub.venue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}