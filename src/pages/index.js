import React from "react";

import NewsSection from "../components/NewsSection";
import TeachingSection from "../components/TeachingSection";
import ResearchSection from "../components/ResearchSection";
import TalksSection from "../components/TalksSection";

import {

  ContactSection,

  HeroSection,

  Page,

  ProjectsSection,

  Seo,

} from "gatsby-theme-portfolio-minimal";
const globalStyle = `

  #hero {
    min-height: auto !important;
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
  }
  #hero > div {
    padding-bottom: 1rem !important;
  }
`;
export default function IndexPage() {

  return (

    <>

      <Seo title="Pierre Fihey" />
      <style>{globalStyle}</style>

      <Page useSplashScreenAnimation>

        <HeroSection sectionId="hero" />

        <NewsSection sectionId="news" heading="News" />

        <ResearchSection sectionId="research" heading="Publications" />

        <TeachingSection sectionId="teaching" heading="Teaching" />

        <TalksSection sectionId="talks" heading="Talks" />

      </Page>

    </>

  );

}