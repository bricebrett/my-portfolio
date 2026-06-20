import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/types/project";

interface Props {
  project: Project;
  headingLevel?: 2 | 3;
}

export default function ProjectCard({ project, headingLevel = 3 }: Props) {
  const [active, setActive] = useState(false);
  const Heading = `h${headingLevel}` as const;

  const handleToggle = () => {
    if (window.innerWidth <= 809) {
      setActive(!active);
    }
  };

  return (
    <div
      className={`project-card ${active ? "active" : ""}`}
      onClick={handleToggle}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
      />
      <div className="overlay">
        <Heading>{project.title}</Heading>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logo/github.svg"
                alt="GitHub"
                width={30}
                height={30}
                className="icon"
              />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logo/code-solid-full.svg"
                alt="Demo"
                width={30}
                height={30}
                className="icon"
              />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
