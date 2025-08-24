"use client";

export interface FormationItem {
  annee: string;
  intitule: string;
  ecole: string;
}

const FORMATIONS: FormationItem[] = [
  {
    annee: "2016 - 2017",
    intitule: "Baccalauréat Production Imprimée et Plurimédia",
    ecole: "Lycée Gutenberg",
  },
  {
    annee: "2021 - 2023",
    intitule: "Formation Intégrateur / Développeur Web",
    ecole: "Web@cadémie, Epitech Strasbourg",
  },
  {
    annee: "2024 - 2025",
    intitule: "Formation Intégrateur Web",
    ecole: "OpenClassRooms",
  },
  {
    annee: "2025 - en cours",
    intitule: "Pré Master of Science",
    ecole: "Epitech, Strasbourg",
  },
];

export default function Formations() {
  return (
    <section className="formations" aria-label="Section Formations">
      <ul className="formations__list">
        {FORMATIONS.map((item, index) => (
          <li key={index} className="formations__item">
            <span className="formations__annee">{item.annee}</span>
            <div className="formations__details">
              <h3 className="formations__intitule">{item.intitule}</h3>
              {item.ecole && <p className="formations__ecole">{item.ecole}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
