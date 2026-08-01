import fs from 'fs';

try {
  const fileContent = fs.readFileSync('./src/data/games-data.js', 'utf8');
  console.log("File read successfully, length:", fileContent.length);

  // Match exported SPEED_MATCH_PAIRS
  const match = fileContent.match(/export const SPEED_MATCH_PAIRS = (\[[\s\S]*?\]);/);
  if (match) {
    const data = JSON.parse(match[1]);
    console.log("SPEED_MATCH_PAIRS length:", data.length);
    const categories = {};
    data.forEach(item => {
      categories[item.category] = (categories[item.category] || 0) + 1;
    });
    console.log("Categories in SPEED_MATCH_PAIRS:", categories);
  } else {
    console.log("Could not parse SPEED_MATCH_PAIRS regex directly.");
  }
} catch (err) {
  console.error("Error:", err.message);
}
