import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import DigitalStage from "@/components/DigitalStage";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Industries />
        <CaseStudies />
        <Process />
        <Technology />
        <Testimonials />
        <DigitalStage />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
