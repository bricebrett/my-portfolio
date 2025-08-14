import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

interface Props {
  projects: Project[];
  limit?: number;
}

export default function ProjectGallery({ projects, limit }: Props) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="project-gallery">
      {items.map((project) => (
        <ScrollReveal>
          <ProjectCard key={project._id} project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}
