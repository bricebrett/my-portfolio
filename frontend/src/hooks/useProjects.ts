"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/types/project";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!API_URL) {
      console.error("NEXT_PUBLIC_API_URL n'est pas défini.");
      return;
    }

    let cancelled = false;

    fetch(`${API_URL}/projects`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Project[]) => {
        const sorted = [...data].sort(
          (a, b) => (b.year ?? -Infinity) - (a.year ?? -Infinity)
        );
        if (!cancelled) setProjects(sorted);
      })
      .catch((err) =>
        console.error("Erreur de chargement des projets :", err)
      );

    return () => {
      cancelled = true;
    };
  }, []);

  return projects;
}
