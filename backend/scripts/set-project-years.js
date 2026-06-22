/**
 * Script de migration ponctuel : renseigne le champ `year` sur les projets.
 *
 * Usage : depuis backend/ -> `node scripts/set-project-years.js`
 * Nécessite MONGODB_URI (lu depuis backend/.env).
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const mongoose = require('mongoose');

// Années cibles, indexées par titre normalisé (minuscules, sans caractères non alphanumériques).
const YEARS = {
  ohmyfood: 2024,
  kasa: 2025,
  ninacarducci: 2025,
  '724events': 2025,
  argentbank: 2025,
  justjobit: 2025,
  epimon: 2025,
  gossip: 2026,
  bookworm: 2026,
  pulse: 2026,
};

const normalize = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI manquant (backend/.env).');
    process.exit(1);
  }

  await mongoose.connect(uri);
  const projects = mongoose.connection.collection('projects');

  const docs = await projects.find({}).toArray();
  console.log(`\n${docs.length} projet(s) trouvé(s) en base.\n`);

  const rows = [];
  for (const doc of docs) {
    const key = normalize(doc.title);
    const targetYear = YEARS[key];

    if (targetYear === undefined) {
      rows.push({ titre: doc.title, ancien: doc.year, nouveau: '— (non listé)', etat: 'IGNORÉ' });
      continue;
    }

    if (doc.year === targetYear) {
      rows.push({ titre: doc.title, ancien: doc.year, nouveau: targetYear, etat: 'déjà OK' });
      continue;
    }

    await projects.updateOne({ _id: doc._id }, { $set: { year: targetYear } });
    rows.push({ titre: doc.title, ancien: doc.year ?? '∅', nouveau: targetYear, etat: '✓ mis à jour' });
  }

  console.table(rows);

  // Vérification finale : relit l'état réel en base.
  const after = await projects.find({}, { projection: { title: 1, year: 1, _id: 0 } }).sort({ year: -1, title: 1 }).toArray();
  console.log('\n=== État final en base (relu) ===');
  console.table(after);

  const sansAnnee = after.filter((p) => typeof p.year !== 'number');
  if (sansAnnee.length) {
    console.warn(`\n⚠️  ${sansAnnee.length} projet(s) sans year :`, sansAnnee.map((p) => p.title).join(', '));
  } else {
    console.log('\n✅ Tous les projets ont une année.');
  }

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error('Erreur migration :', err);
  process.exit(1);
});
