"use client";
import RedirectionButton from "./RedirectionButton";
import ProjectGallery from "./ProjectGallery";
import ScrollReveal from "./ScrollReveal";
import { useProjects } from "@/hooks/useProjects";

export default function Works() {
  const projects = useProjects();

  return (
    <section className="works">
      <div className="works__header">
        <ScrollReveal>
          <h2 className="works__title">projets.</h2>
        </ScrollReveal>
        <RedirectionButton href="/works" className="works__button">
          Afficher plus
        </RedirectionButton>
      </div>

      <ProjectGallery projects={projects} limit={4} />
    </section>
  );
}
