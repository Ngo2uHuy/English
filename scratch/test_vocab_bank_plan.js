import fs from 'fs';

console.log("=== BUILDING 6,000+ VOCABULARY DATABANK ===");

// 1. Gather all existing clean words
const existingMap = new Map();

function addExisting(en, vn, category = 'General', tag = 'common') {
  if (!en || !vn) return;
  const cleanEn = String(en).trim();
  let cleanVn = String(vn).trim().replace(/^(v:|n:|adj:|adv:)\s*/i, '');

  if (cleanEn.length < 2) return;
  if (cleanEn.includes('...') || cleanEn.startsWith('✅') || cleanEn.startsWith('❌') || cleanEn.includes(' — ') || cleanEn.length > 35) return;
  if (cleanEn.includes('___')) return;

  const key = cleanEn.toLowerCase();
  if (!existingMap.has(key)) {
    existingMap.set(key, { en: cleanEn, vn: cleanVn, category, tag });
  }
}

// Read from scratch & src files
const scratchFiles = fs.readdirSync('./scratch');
scratchFiles.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.json')) {
    try {
      const content = fs.readFileSync(`./scratch/${file}`, 'utf8');
      const regex = /{\s*"en":\s*"([^"]+)",\s*"vn":\s*"([^"]+)"(?:,\s*"category":\s*"([^"]+)")?/g;
      let m;
      while ((m = regex.exec(content)) !== null) {
        addExisting(m[1], m[2], m[3]);
      }
      const regexSingle = /{\s*en:\s*["']([^"']+)["'],\s*vn:\s*["']([^"']+)["'](?:,\s*cat:\s*["']([^"']+)["'])?/g;
      while ((m = regexSingle.exec(content)) !== null) {
        addExisting(m[1], m[2], m[3]);
      }
    } catch(e) {}
  }
});

console.log("Base gathered unique words:", existingMap.size);

// Expand words database to reach 6000+ words using categorized word seeds for TOEIC, IELTS, and 6000 Common Words
// Let's create seed generators for high-demand words in TOEIC, IELTS, A1-C2

const toeicCategories = [
  "Corporate Management & Office", "Finance & Accounting", "Sales & Marketing",
  "Contracts & Negotiation", "HR & Recruitment", "Logistics & Shipping",
  "Travel & Hospitality", "Banking & Investment", "Real Estate & Construction",
  "Customer Service & Relations", "IT & Office Systems", "Legal & Compliance"
];

const ieltsCategories = [
  "Academic & Essay Vocab", "Environment & Climate Change", "Science & Space Exploration",
  "Psychology & Human Behavior", "Society & Globalization", "Education & Pedagogy",
  "Technology & Artificial Intelligence", "Philosophy & Ethics", "Arts & Culture",
  "Health & Medicine", "Law & Criminology", "Economy & Development"
];

const commonCategories = [
  "A1 - Daily Essentials", "A2 - Everyday Life", "B1 - Intermediate Fluency",
  "B2 - Upper-Intermediate", "C1 - Advanced Mastery", "C2 - Expert & Nuance"
];

console.log("TOEIC Categories:", toeicCategories.length);
console.log("IELTS Categories:", ieltsCategories.length);
console.log("Common Categories:", commonCategories.length);
