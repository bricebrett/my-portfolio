"use client";

import ProjectGallery from "@/components/ProjectGallery";
import Title from "@/components/Title";
import ScrollReveal from "@/components/ScrollReveal";
import { useProjects } from "@/hooks/useProjects";
import type { Project } from "@/types/project";

type Group = { key: string; label: string; projects: Project[] };

function groupByYear(projects: Project[]): Group[] {
  const withYear = new Map<number, Project[]>();
  const withoutYear: Project[] = [];

  for (const project of projects) {
    if (typeof project.year === "number") {
      const bucket = withYear.get(project.year) ?? [];
      bucket.push(project);
      withYear.set(project.year, bucket);
    } else {
      withoutYear.push(project);
    }
  }

  const groups: Group[] = [...withYear.keys()]
    .sort((a, b) => b - a)
    .map((year) => ({
      key: String(year),
      label: `Work ${year}`,
      projects: withYear.get(year)!,
    }));

  if (withoutYear.length > 0) {
    groups.push({ key: "autres", label: "Autres", projects: withoutYear });
  }

  return groups;
}

export default function WorksPage() {
  const projects = useProjects();
  const groups = groupByYear(projects);

  return (
    <section className="works-page">
      <Title text="WORK" align="left" />

      {groups.map((group) => (
        <div className="works-page__section" key={group.key}>
          <ScrollReveal>
            <p className="works-page__subtitle">{group.label}</p>
          </ScrollReveal>

          <ProjectGallery projects={group.projects} headingLevel={2} />
        </div>
      ))}
    </section>
  );
}
