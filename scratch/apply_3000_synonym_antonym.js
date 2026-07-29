import fs from 'fs';

const synonymAntonym3000 = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_synonym_antonym.json', 'utf8'));

console.log(`Loaded ${synonymAntonym3000.length} Synonym & Antonym items.`);

let content = fs.readFileSync('./src/data/games-data.js', 'utf8');

// Replace export const SYNONYM_ANTONYM_DATA = [...];
const regex = /export const SYNONYM_ANTONYM_DATA = \[\s*[\s\S]*?\n\];/;

if (!regex.test(content)) {
  console.error('Could not find SYNONYM_ANTONYM_DATA in src/data/games-data.js');
  process.exit(1);
}

const newExport = `export const SYNONYM_ANTONYM_DATA = ${JSON.stringify(synonymAntonym3000, null, 2)};`;

content = content.replace(regex, newExport);

fs.writeFileSync('./src/data/games-data.js', content, 'utf8');
console.log('Successfully updated src/data/games-data.js with 3,000 Synonym & Antonym items!');
