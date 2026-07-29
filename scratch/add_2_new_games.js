import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gamesDataPath = path.join(__dirname, '../src/data/games-data.js');
let code = fs.readFileSync(gamesDataPath, 'utf8');

// Base Synonyms & Antonyms Seed Pool
const synonymAntonymSeed = [
  { word: 'Accomplish', type: 'SYNONYM', targetMeaning: 'Đồng nghĩa với Accomplish (Hoàn thành)', correctAnswer: 'Achieve', options: ['Achieve', 'Fail', 'Abandon', 'Delay'], explanation: 'Accomplish và Achieve đều có nghĩa là hoàn thành, đạt được mục tiêu.', translation: 'Accomplish = Achieve (Hoàn thành)' },
  { word: 'Substantial', type: 'SYNONYM', targetMeaning: 'Đồng nghĩa với Substantial (Đáng kể)', correctAnswer: 'Significant', options: ['Significant', 'Minor', 'Slight', 'Tiny'], explanation: 'Substantial và Significant đều chỉ số lượng hoặc mức độ đáng kể, quan trọng.', translation: 'Substantial = Significant (Đáng kể)' },
  { en: 'Abundant', type: 'ANTONYM', targetMeaning: 'Trái nghĩa với Abundant (Dồi dào)', correctAnswer: 'Scarce', options: ['Scarce', 'Plentiful', 'Ample', 'Copious'], explanation: 'Abundant có nghĩa là dồi dào, trái nghĩa là Scarce (khan hiếm).', translation: 'Abundant (dồi dào) >< Scarce (khan hiếm)' },
  { word: 'Mandatory', type: 'ANTONYM', targetMeaning: 'Trái nghĩa với Mandatory (Bắt buộc)', correctAnswer: 'Optional', options: ['Optional', 'Compulsory', 'Required', 'Binding'], explanation: 'Mandatory là bắt buộc, trái nghĩa với Optional (tùy chọn).', translation: 'Mandatory (bắt buộc) >< Optional (tùy chọn)' },
  { word: 'Feasible', type: 'SYNONYM', targetMeaning: 'Đồng nghĩa với Feasible (Khả thi)', correctAnswer: 'Practicable', options: ['Practicable', 'Impossible', 'Unrealistic', 'Futile'], explanation: 'Feasible và Practicable đều có nghĩa là khả thi, làm được.', translation: 'Feasible = Practicable (Khả thi)' },
  { word: 'Reluctant', type: 'ANTONYM', targetMeaning: 'Trái nghĩa với Reluctant (Lưỡng lự, ngần ngại)', correctAnswer: 'Eager', options: ['Eager', 'Hesitant', 'Unwilling', 'Averse'], explanation: 'Reluctant là miễn cưỡng/ngần ngại, trái nghĩa là Eager (háo hức/sẵn lòng).', translation: 'Reluctant (ngần ngại) >< Eager (háo hức)' }
];

console.log("Synonym Antonym Seed count:", synonymAntonymSeed.length);
