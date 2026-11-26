import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MusicSection } from "@/components/sections/music-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <MusicSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
