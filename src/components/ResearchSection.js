import React from "react";

const publications = [
  {
    title:
      "Enhancing Two-Step Textual Anomaly Detection through Contrastive Learning and Representation Geometry",
    authors:
      "Pierre Fihey, Matthieu Labeau, Pavlo Mozharovskyi",
    venue: "ACL 2026 (Oral)",
    year: 2026,
    paper: "https://aclanthology.org/2026.acl-long.1312/",   // ACL Anthology
  },

  // Example of a future paper:
  // {
  //   title: "My Second Paper",
  //   authors: "Pierre Fihey, ...",
  //   venue: "EMNLP 2027",
  //   year: 2027,
  //   paper: "",
  //   arxiv: "",
  //   code: "",
  //   bibtex: "",
  // },
];

export default function ResearchSection({
  sectionId = "research",
  heading = "Publications",
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

        {publications.map((pub, index) => (
          <div
            key={index}
            style={{
              border: "1px solid rgba(90,100,120,0.14)",
              borderRadius: "12px",
              padding: "1.4rem 1.5rem",
              marginBottom: "1.5rem",
              background: "rgba(79,109,122,0.025)",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "0.6rem",
                color: "#1d2939",
              }}
            >
              {pub.title}
            </h3>

            <p
              style={{
                margin: "0 0 0.4rem",
                color: "#667085",
              }}
            >
              {pub.authors}
            </p>

            <p
              style={{
                margin: "0 0 1rem",
                fontWeight: 600,
                color: "#344054",
              }}
            >
              {pub.venue}
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {pub.paper && (
                <a href={pub.paper} target="_blank" rel="noopener noreferrer">
                  📄 Paper
                </a>
              )}

              {pub.arxiv && (
                <a href={pub.arxiv} target="_blank" rel="noopener noreferrer">
                  arXiv
                </a>
              )}

              {pub.code && (
                <a href={pub.code} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              )}

              {pub.bibtex && (
                <a href={pub.bibtex} target="_blank" rel="noopener noreferrer">
                  BibTeX
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}