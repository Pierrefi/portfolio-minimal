import React from "react";

import { Section } from "gatsby-theme-portfolio-minimal";

const talks = [

  {

    title: "ACL 2026",

    venue: "Annual Meeting of the Association for Computational Linguistics",

    date: "July 2026",

    type: "Oral presentation",

    description:

      "Enhancing Two-Step Textual Anomaly Detection through Anisotropy Mitigation",

    slides: "/Users/pierrefihey/portfolio-minimal/static/talks/ACL_Oral_slides.pptx",

  },

];

export default function TalksSection({ sectionId, heading }) {

  return (

    <Section sectionId={sectionId} heading={heading}>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

        {talks.map((talk) => (

          <div key={talk.title}>

            <h3 style={{ marginBottom: "0.25rem" }}>{talk.title}</h3>

            <p style={{ margin: 0, fontWeight: 500 }}>

              {talk.type} · {talk.venue}

            </p>

            <p style={{ margin: "0.25rem 0", opacity: 0.75 }}>

              {talk.date}

            </p>

            <p style={{ marginTop: "0.5rem" }}>{talk.description}</p>

            {talk.slides && (

              <a href={talk.slides} download>

                Download slides

              </a>

            )}

          </div>

        ))}

      </div>

    </Section>

  );

}