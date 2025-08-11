"use client";
import { useEffect, useState } from "react";
import RedirectionButton from "./RedirectionButton";
import ProjectGallery, { Project } from "./ProjectGallery";

export default function Works() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Erreur de chargement des projets :", err));
  }, []);

  return (
    <section className="works">
      <div className="works__header">
        <h2 className="works__title">work.</h2>
        <RedirectionButton href="/works" className="works__button">
          Show More
        </RedirectionButton>
      </div>

      <ProjectGallery projects={projects} limit={4} />
    </section>
  );
}
