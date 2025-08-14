interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
      />
      <div className="overlay">
        <h3>{project.title}</h3>
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
              <img
                src="./images/logo/github.svg"
                alt="GitHub"
                className="icon"
              />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="./images/logo/code-solid-full.svg"
                alt="Demo"
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
