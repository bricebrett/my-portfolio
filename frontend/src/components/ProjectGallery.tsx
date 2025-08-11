import ProjectCard from "./ProjectCard";

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
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
