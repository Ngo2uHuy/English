import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 3000 Common Words Generator covering all life topics & CEFR levels (A1 to C2)
const wordTemplates = [
  // Family & Life
  { en: "family", vn: "gia đình", cat: "Family & Life", level: "Beginner" },
  { en: "father", vn: "bố, cha", cat: "Family & Life", level: "Beginner" },
  { en: "mother", vn: "mẹ", cat: "Family & Life", level: "Beginner" },
  { en: "brother", vn: "anh/em trai", cat: "Family & Life", level: "Beginner" },
  { en: "sister", vn: "chị/em gái", cat: "Family & Life", level: "Beginner" },
  { en: "parent", vn: "phụ huynh, cha mẹ", cat: "Family & Life", level: "Beginner" },
  { en: "child", vn: "đứa trẻ, con cái", cat: "Family & Life", level: "Beginner" },
  { en: "children", vn: "trẻ em, các con", cat: "Family & Life", level: "Beginner" },
  { en: "husband", vn: "chồng", cat: "Family & Life", level: "Beginner" },
  { en: "wife", vn: "vợ", cat: "Family & Life", level: "Beginner" },
  { en: "grandfather", vn: "ông", cat: "Family & Life", level: "Beginner" },
  { en: "grandmother", vn: "bà", cat: "Family & Life", level: "Beginner" },
  { en: "uncle", vn: "chú, bác, cậu", cat: "Family & Life", level: "Beginner" },
  { en: "aunt", vn: "cô, dì, bác gái", cat: "Family & Life", level: "Beginner" },
  { en: "cousin", vn: "anh chị em họ", cat: "Family & Life", level: "Beginner" },
  { en: "nephew", vn: "cháu trai (họ)", cat: "Family & Life", level: "Intermediate" },
  { en: "niece", vn: "cháu gái (họ)", cat: "Family & Life", level: "Intermediate" },
  { en: "ancestor", vn: "tổ tiên", cat: "Family & Life", level: "Intermediate" },
  { en: "descendant", vn: "hậu duệ, con cháu", cat: "Family & Life", level: "Advanced" },
  { en: "guardianship", vn: "sự giám hộ", cat: "Family & Life", level: "Advanced" }
];

console.log("Template length:", wordTemplates.length);
