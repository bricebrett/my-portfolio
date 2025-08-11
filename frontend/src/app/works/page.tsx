"use client";

import { useEffect, useState } from "react";
import ProjectGallery, { Project } from "@/components/ProjectGallery";
import Title from "@/components/Title";

export default function WorksPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) =>
        console.error("Erreur lors de la récupération des projets :", err)
      );
  }, []);
  console.log(projects.length);

  return (
    <section className="works-page">
      <Title text="WORK" align="left" />
      <p className="works-page__subtitle">work 2025</p>

      <ProjectGallery projects={projects} />
    </section>
  );
}
