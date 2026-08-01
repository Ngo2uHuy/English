import fs from 'fs';
import path from 'path';

console.log("=== SCANNING VOCABULARY DATA SOURCES ===");

// 1. Inspect clean_3000_vocab_pool.json
if (fs.existsSync('./scratch/clean_3000_vocab_pool.json')) {
  const data = JSON.parse(fs.readFileSync('./scratch/clean_3000_vocab_pool.json', 'utf8'));
  console.log("clean_3000_vocab_pool.json count:", Array.isArray(data) ? data.length : typeof data);
  if (Array.isArray(data) && data.length > 0) {
    console.log("Sample:", data[0]);
  }
}

// 2. Inspect final_3000_unique_speed_match.json
if (fs.existsSync('./scratch/final_3000_unique_speed_match.json')) {
  const data = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_speed_match.json', 'utf8'));
  console.log("final_3000_unique_speed_match.json count:", Array.isArray(data) ? data.length : typeof data);
  if (Array.isArray(data) && data.length > 0) {
    console.log("Sample:", data[0]);
  }
}

// 3. Inspect games-data.js
if (fs.existsSync('./src/data/games-data.js')) {
  const content = fs.readFileSync('./src/data/games-data.js', 'utf8');
  console.log("games-data.js size:", (content.length / 1024 / 1024).toFixed(2), "MB");
}

// 4. Scan scratch directory for other potential arrays
const scratchFiles = fs.readdirSync('./scratch');
let totalWordsFound = 0;
scratchFiles.forEach(file => {
  if (file.endsWith('.json')) {
    try {
      const content = JSON.parse(fs.readFileSync(`./scratch/${file}`, 'utf8'));
      if (Array.isArray(content)) {
        console.log(`Scratch JSON: ${file} -> ${content.length} items`);
      }
    } catch(e) {}
  }
});
