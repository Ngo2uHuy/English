import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read current grammar-data.js
const grammarDataPath = path.join(__dirname, '../src/data/grammar-data.js');
let fileContent = fs.readFileSync(grammarDataPath, 'utf8');

// Load the 3 build scripts data
import { begTopics } from './beg_data.js';
import { intTopics } from './int_data.js';
import { advTopics } from './adv_data.js';

const allNewTopics = [...begTopics, ...intTopics, ...advTopics];
console.log(`Total expanded topics to inject: ${allNewTopics.length}`);

// We will find where `id: 'beg-present'` starts in `grammar-data.js`
const begMarker = "id: 'beg-present'";
const begIndex = fileContent.indexOf(begMarker);

if (begIndex === -1) {
  console.error("Error: Could not find beg-present in file!");
  process.exit(1);
}

// Find the `{` before `id: 'beg-present'`
const objStartPos = fileContent.lastIndexOf('{', begIndex);

// Find helper functions marker
const helperMarker = "// Helper functions";
const helperPos = fileContent.indexOf(helperMarker);

// Find the `];` just before helper functions
const arrayEndPos = fileContent.lastIndexOf('];', helperPos);

if (objStartPos === -1 || arrayEndPos === -1) {
  console.error("Error: Could not locate boundary positions!");
  process.exit(1);
}

// Convert allNewTopics array into formatted JavaScript object strings
function formatTopics(topics) {
  return topics.map(t => {
    return '  ' + JSON.stringify(t, null, 2).replace(/\n/g, '\n  ');
  }).join(',\n');
}

const formattedJs = formatTopics(allNewTopics);

// Construct new content
const beforePart = fileContent.substring(0, objStartPos);
const afterPart = fileContent.substring(arrayEndPos);

const updatedContent = beforePart + formattedJs + '\n' + afterPart;

fs.writeFileSync(grammarDataPath, updatedContent, 'utf8');
console.log("Successfully updated src/data/grammar-data.js with all 48 detailed topics!");
