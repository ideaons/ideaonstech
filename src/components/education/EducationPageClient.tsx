"use client";

import React, { useEffect } from "react";
import EducationHero from "./EducationHero";
import EducationPlatform from "./EducationPlatform";
import ERPModules from "./ERPModules";
import ConnectedCampus from "./ConnectedCampus";
import AIEducation from "./AIEducation";
import SuccessStories from "./SuccessStories";
import EducationDemoForm from "./EducationDemoForm";
import { scrollToTarget } from "../SmoothScrollProvider";

export default function EducationPageClient() {
  // Handle hash scroll on mount (when navigating from another page)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to let the page render first
      const timer = setTimeout(() => {
        scrollToTarget(hash);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <EducationHero />
      <EducationPlatform />
      <ERPModules />
      <ConnectedCampus />
      <AIEducation />
      <SuccessStories />
      <EducationDemoForm />
    </>
  );
}
