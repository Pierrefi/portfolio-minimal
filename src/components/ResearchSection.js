import React from "react";

export default function ResearchSection({

  sectionId = "research",

  heading = "Research",

}) {

  return (

    <section id={sectionId} style={{ padding: "2rem 0" }}>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 2rem" }}>

        <h2 style={{ marginBottom: "2rem" }}>{heading}</h2>

        <div

          style={{

            border: "1px solid rgba(90,100,120,0.14)",

            borderRadius: "12px",

            padding: "1.4rem 1.5rem",

            backgroundColor: "rgba(79,109,122,0.025)",

            color: "#667085",

            fontSize: "1rem",

          }}

        >

          Coming soon...

        </div>

      </div>

    </section>

  );

}