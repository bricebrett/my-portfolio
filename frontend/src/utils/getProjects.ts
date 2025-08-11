export async function getProjects() {
  const res = await fetch("http://localhost:3000/projects");
  if (!res.ok) throw new Error("Erreur de récupération des projets");
  return res.json();
}
