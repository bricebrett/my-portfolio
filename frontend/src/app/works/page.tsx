"use client";

import { useEffect, useState } from "react";
import ProjectGallery, { Project } from "@/components/ProjectGallery";
import Title from "@/components/Title";
import ScrollReveal from "@/components/ScrollReveal";

export default function WorksPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://my-portfolio-production-1d50.up.railway.app/projects")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setProjects)
      .catch((err) => console.error("Erreur de chargement des projets :", err));
  }, []);

  return (
    <section className="works-page">
      <Title text="WORK" align="left" />
      <ScrollReveal>
        <p className="works-page__subtitle">work 2025</p>
      </ScrollReveal>

      <ProjectGallery projects={projects} />
    </section>
  );
}
