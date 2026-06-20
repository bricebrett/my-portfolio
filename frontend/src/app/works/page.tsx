"use client";

import ProjectGallery from "@/components/ProjectGallery";
import Title from "@/components/Title";
import ScrollReveal from "@/components/ScrollReveal";
import { useProjects } from "@/hooks/useProjects";

export default function WorksPage() {
  const projects = useProjects();

  return (
    <section className="works-page">
      <Title text="WORK" align="left" />
      <ScrollReveal>
        <p className="works-page__subtitle">work 2025</p>
      </ScrollReveal>

      <ProjectGallery projects={projects} headingLevel={2} />
    </section>
  );
}
