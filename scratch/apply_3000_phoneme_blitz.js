import fs from 'fs';

const phonemeBlitz3000 = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_phoneme_blitz.json', 'utf8'));

console.log(`Loaded ${phonemeBlitz3000.length} Phoneme Blitz items.`);

let content = fs.readFileSync('./src/data/games-data.js', 'utf8');

// Replace export const PHONEME_BLITZ_DATA = [...];
const regex = /export const PHONEME_BLITZ_DATA = \[\s*[\s\S]*?\n\];/;

if (!regex.test(content)) {
  console.error('Could not find PHONEME_BLITZ_DATA in src/data/games-data.js');
  process.exit(1);
}

const newExport = `export const PHONEME_BLITZ_DATA = ${JSON.stringify(phonemeBlitz3000, null, 2)};`;

content = content.replace(regex, newExport);

fs.writeFileSync('./src/data/games-data.js', content, 'utf8');
console.log('Successfully updated src/data/games-data.js with 3,000 Phoneme Blitz items!');
