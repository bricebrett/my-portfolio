import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import type { Project } from "@/types/project";

interface Props {
  projects: Project[];
  limit?: number;
}

export default function ProjectGallery({ projects, limit }: Props) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="project-gallery">
      {items.map((project) => (
        <ScrollReveal key={project._id}>
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
