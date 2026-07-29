import fs from 'fs';

const gamesData = fs.readFileSync('./src/data/games-data.js', 'utf8');
const match = gamesData.match(/export const SPEED_MATCH_PAIRS = (\[[\s\S]*?\]);\n\nexport const SENTENCE_DASH_DATA/);

if (!match) {
  console.error("Could not parse SPEED_MATCH_PAIRS!");
  process.exit(1);
}

const pairs = JSON.parse(match[1]);
console.log(`Loaded ${pairs.length} unique Speed Match pairs for vocabulary foundation.`);
console.log("Sample 5 pairs:", pairs.slice(0, 5));
