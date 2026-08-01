import fs from 'fs';

console.log("=== CHECKING SCRATCH DATA FILES ===");

const files = ['beg_data.js', 'int_data.js', 'adv_data.js', 'build_beg_topics.js', 'build_int_topics.js', 'build_adv_topics.js'];

files.forEach(f => {
  const p = `./scratch/${f}`;
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    console.log(`${f}: size = ${(content.length / 1024).toFixed(1)} KB`);
  }
});
