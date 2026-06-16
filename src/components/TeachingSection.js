import React from "react";

const highlightStyle = {
  color: "#4F6D7A",
  fontWeight: 700,
};

const courses = [
  {
    title: "Data Science – M2 ISF – Paris Dauphine",
    description: "Course materials for the M2 ISF Practical Data Science class.",
    sessions: [
      {
        title: "Introduction",
        files: [
          {
            label: "Introduction",
            url: "/slides/data-science-m2-isf/cours-0/Introduction.pdf",
          },
          {
            label: "Projet",
            url: "/slides/data-science-m2-isf/cours-0/Projet.pdf",
          },
        ],
      },
      {
        title: "Séance 1",
        files: [
          {
            label: "Cours",
            url: "/slides/data-science-m2-isf/cours-1/COURS1.pdf",
          },
          {
            label: "TP 1",
            url: "/slides/data-science-m2-isf/cours-1/TP-1.pdf",
          },
          {
            label: "TP 2",
            url: "/slides/data-science-m2-isf/cours-1/TP-2.pdf",
          },
        ],
      },
      {
        title: "Séance 2",
        files: [
          {
            label: "Cours",
            url: "/slides/data-science-m2-isf/cours-2/cours-2.pdf",
          },
          {
            label: "TP 1",
            url: "/slides/data-science-m2-isf/cours-2/TP3.pdf",
          },
          {
            label: "TP 2",
            url: "/slides/data-science-m2-isf/cours-2/TP4.pdf",
          },
        ],
      },
      {
        title: "Séance 3",
        files: [
          {
            label: "Cours",
            url: "/slides/data-science-m2-isf/cours-3/Cours3.pdf",
          },
          {
            label: "TP 1",
            url: "/slides/data-science-m2-isf/cours-3/TP-5.pdf",
          },
        ],
      },
      {
        title: "Séance 4",
        files: [
          {
            label: "Cours",
            url: "/slides/data-science-m2-isf/cours-4/Cours-4.pdf",
          },
          {
            label: "TP 1",
            url: "/slides/data-science-m2-isf/cours-4/TP6.pdf",
          },
          {
            label: "TP 2",
            url: "/slides/data-science-m2-isf/cours-4/TP7.pdf",
          },
          {
            label: "TP 3",
            url: "/slides/data-science-m2-isf/cours-4/TP8.pdf",
          },
        ],
      },
    ],
  },
];

export default function TeachingSection({
  sectionId = "teaching",
  heading = "Teaching",
}) {
  return (
    <>
      <style>{`
        summary {
          list-style: none;
        }

        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>

      <section id={sectionId} style={{ padding: "2rem 0" }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          <h2 style={{ marginBottom: "2rem" }}>{heading}</h2>

          {courses.map((course) => (
            <details
              key={course.title}
              style={{
                border: "1px solid rgba(90,100,120,0.14)",
                borderRadius: "12px",
                padding: "1rem 1.2rem",
                backgroundColor: "rgba(79,109,122,0.025)",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                }}
              >
                <div style={{ marginBottom: "0.3rem" }}>
                  <span style={highlightStyle}>
                    📁 {course.title}
                  </span>
                </div>

                <div
                  style={{
                    color: "#667085",
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                  }}
                >
                  {course.description}
                </div>
              </summary>

              <div
                style={{
                  marginTop: "1rem",
                  display: "grid",
                  gap: "0.5rem",
                }}
              >
                {course.sessions.map((session) => (
                  <details
                    key={session.title}
                    style={{
                      border: "1px solid rgba(90,100,120,0.10)",
                      borderRadius: "10px",
                      padding: "0.75rem 0.9rem",
                    }}
                  >
                    <summary
                      style={{
                        cursor: "pointer",
                        fontWeight: 600,
                        color: "#344054",
                        fontSize: "0.96rem",
                      }}
                    >
                      📂 {session.title}
                    </summary>

                    <div
                      style={{
                        marginTop: "0.7rem",
                        marginLeft: "1.6rem",
                        display: "grid",
                        gap: "0.35rem",
                      }}
                    >
                      {session.files.map((file) => (
                        <a
                          key={file.url}
                          href={file.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "#4F6D7A",
                            textDecoration: "none",
                            fontWeight: 500,
                            fontSize: "0.92rem",
                          }}
                        >
                          📄 {file.label}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}