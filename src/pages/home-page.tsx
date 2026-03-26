import { useEffect } from "react";

import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add("snap-scroll-home");
    return () => {
      document.documentElement.classList.remove("snap-scroll-home");
    };
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
