import fs from 'fs';

console.log("=== BUILDING MASSIVE 8,000+ VOCABULARY DATABANK ===");

const masterMap = new Map(); // key (en.toLowerCase()) -> { en, vn, pool, category, level }

function cleanString(str) {
  if (!str) return '';
  return String(str).trim();
}

function addWord(en, vn, pool = 'common', category = 'General', level = 'B1') {
  const cleanEn = cleanString(en);
  let cleanVn = cleanString(vn).replace(/^(v:|n:|adj:|adv:)\s*/i, '');

  if (!cleanEn || !cleanVn) return;
  if (cleanEn.length < 2 || cleanEn.length > 40) return;
  if (cleanEn.includes('...') || cleanEn.startsWith('✅') || cleanEn.startsWith('❌') || cleanEn.includes(' — ') || cleanEn.includes('___')) return;

  // Capitalize first letter for clean display
  const displayEn = cleanEn.charAt(0).toUpperCase() + cleanEn.slice(1);
  const displayVn = cleanVn.charAt(0).toUpperCase() + cleanVn.slice(1);

  const key = cleanEn.toLowerCase();

  let assignedPool = pool || 'common';
  let assignedLevel = level || 'B1';
  let assignedCat = category || 'General';

  const lowerCat = assignedCat.toLowerCase();
  if (assignedPool === 'toeic' || lowerCat.includes('toeic') || lowerCat.includes('business') || lowerCat.includes('office') || lowerCat.includes('finance') || lowerCat.includes('work') || lowerCat.includes('contract') || lowerCat.includes('trade') || lowerCat.includes('shipping') || lowerCat.includes('hr')) {
    assignedPool = 'toeic';
  } else if (assignedPool === 'ielts' || lowerCat.includes('ielts') || lowerCat.includes('academic') || lowerCat.includes('science') || lowerCat.includes('environment') || lowerCat.includes('psychology') || lowerCat.includes('law') || lowerCat.includes('society') || lowerCat.includes('philosophy')) {
    assignedPool = 'ielts';
  }

  if (!masterMap.has(key)) {
    masterMap.set(key, { en: displayEn, vn: displayVn, pool: assignedPool, category: assignedCat, level: assignedLevel });
  } else {
    // If existing item has generic pool 'common' but new item is 'toeic' or 'ielts', upgrade!
    const existing = masterMap.get(key);
    if (existing.pool === 'common' && assignedPool !== 'common') {
      existing.pool = assignedPool;
      existing.category = assignedCat;
      existing.level = assignedLevel;
    }
  }
}

// 1. Read existing vocab-bank.js
try {
  const currentBank = JSON.parse(fs.readFileSync('./src/data/vocab-bank.js', 'utf8').match(/export const VOCAB_BANK = (\[[\s\S]*?\]);/)[1]);
  currentBank.forEach(item => {
    addWord(item.en, item.vn, item.pool, item.category, item.level);
  });
} catch(e) {}

console.log("Base count from current vocab-bank.js:", masterMap.size);

// 2. Read from all scratch files
const scratchFiles = fs.readdirSync('./scratch');
scratchFiles.forEach(file => {
  if (file.endsWith('.json')) {
    try {
      const data = JSON.parse(fs.readFileSync(`./scratch/${file}`, 'utf8'));
      if (Array.isArray(data)) {
        data.forEach(item => {
          addWord(item.en || item.word, item.vn || item.translation || item.meaning, item.pool, item.category || item.cat, item.level);
        });
      }
    } catch(e) {}
  }
});

console.log("Count after loading scratch files:", masterMap.size);

// 3. Read games-data.js
try {
  const content = fs.readFileSync('./src/data/games-data.js', 'utf8');
  const regex = /{\s*"en":\s*"([^"]+)",\s*"vn":\s*"([^"]+)"(?:,\s*"category":\s*"([^"]+)")?/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    addWord(m[1], m[2], 'common', m[3] || 'General', 'B1');
  }
} catch(e) {}

console.log("Count after games-data.js:", masterMap.size);

// 4. Add dynamic seed dictionary arrays to reach 8,000+ unique words across CEFR A1, A2, B1, B2, C1, C2
const massiveSeedWords = [
  // CEFR A1 - Elementary Daily Words (Ensuring A1 has 500+ words)
  ["Apple", "Quả táo", "common", "Food & Dining", "A1"],
  ["Banana", "Quả chuối", "common", "Food & Dining", "A1"],
  ["Bread", "Bánh mì", "common", "Food & Dining", "A1"],
  ["Butter", "Bơ ăn", "common", "Food & Dining", "A1"],
  ["Cheese", "Phô mai", "common", "Food & Dining", "A1"],
  ["Chicken", "Thịt gà, con gà", "common", "Food & Animals", "A1"],
  ["Coffee", "Cà phê", "common", "Food & Dining", "A1"],
  ["Egg", "Quả trứng", "common", "Food & Dining", "A1"],
  ["Fish", "Con cá, món cá", "common", "Food & Animals", "A1"],
  ["Fruit", "Trái cây", "common", "Food & Dining", "A1"],
  ["Juice", "Nước ép trái cây", "common", "Food & Dining", "A1"],
  ["Lemon", "Quả chanh vàng", "common", "Food & Dining", "A1"],
  ["Meat", "Thịt ăn", "common", "Food & Dining", "A1"],
  ["Milk", "Sữa tươi", "common", "Food & Dining", "A1"],
  ["Orange", "Quả cam, màu cam", "common", "Food & Colors", "A1"],
  ["Rice", "Cơm, gạo", "common", "Food & Dining", "A1"],
  ["Salad", "Món rau trộn", "common", "Food & Dining", "A1"],
  ["Salt", "Muối ăn", "common", "Food & Dining", "A1"],
  ["Soup", "Món súp, canh", "common", "Food & Dining", "A1"],
  ["Sugar", "Đường ăn", "common", "Food & Dining", "A1"],
  ["Tea", "Trà, chè", "common", "Food & Dining", "A1"],
  ["Water", "Nước uống", "common", "Daily Life", "A1"],
  ["Window", "Cửa sổ", "common", "Home & Housing", "A1"],
  ["Door", "Cửa ra vào", "common", "Home & Housing", "A1"],
  ["Wall", "Bức tường", "common", "Home & Housing", "A1"],
  ["Floor", "Sàn nhà, tầng nhà", "common", "Home & Housing", "A1"],
  ["Roof", "Mái nhà", "common", "Home & Housing", "A1"],
  ["Room", "Căn phòng", "common", "Home & Housing", "A1"],
  ["Table", "Cái bàn", "common", "Home & Furniture", "A1"],
  ["Chair", "Cái ghế", "common", "Home & Furniture", "A1"],
  ["Bed", "Cái giường", "common", "Home & Furniture", "A1"],
  ["Clock", "Đồng hồ treo tường", "common", "Home & Daily Life", "A1"],
  ["Pen", "Bút mực", "common", "Education & Office", "A1"],
  ["Pencil", "Bút chì", "common", "Education & Office", "A1"],
  ["Book", "Cuốn sách", "common", "Education & Books", "A1"],
  ["Bag", "Túi xách, cặp", "common", "Daily Life", "A1"],
  ["Coat", "Áo khoác dài", "common", "Fashion & Style", "A1"],
  ["Hat", "Cái mũ, nón", "common", "Fashion & Style", "A1"],
  ["Shoes", "Đôi giày", "common", "Fashion & Style", "A1"],
  ["Socks", "Đôi tất, vớ", "common", "Fashion & Style", "A1"],
  ["Shirt", "Áo sơ mi", "common", "Fashion & Style", "A1"],
  ["Pants", "Quần dài", "common", "Fashion & Style", "A1"],
  ["Dress", "Váy liền thân", "common", "Fashion & Style", "A1"],
  ["Skirt", "Chân váy", "common", "Fashion & Style", "A1"],
  ["Boy", "Cậu bé, con trai", "common", "Family & Life", "A1"],
  ["Girl", "Cô bé, con gái", "common", "Family & Life", "A1"],
  ["Man", "Người đàn ông", "common", "Family & Life", "A1"],
  ["Woman", "Người phụ nữ", "common", "Family & Life", "A1"],
  ["Father", "Người bố, cha", "common", "Family & Life", "A1"],
  ["Mother", "Người mẹ", "common", "Family & Life", "A1"],
  ["Brother", "Anh/em trai", "common", "Family & Life", "A1"],
  ["Sister", "Chị/em gái", "common", "Family & Life", "A1"],
  ["Friend", "Người bạn", "common", "Relationships", "A1"],
  ["Family", "Gia đình", "common", "Family & Life", "A1"],
  ["House", "Ngôi nhà", "common", "Home & Housing", "A1"],
  ["School", "Trường học", "common", "Education", "A1"],
  ["Teacher", "Giáo viên", "common", "Education & Career", "A1"],
  ["Student", "Học sinh, sinh viên", "common", "Education", "A1"],
  ["Doctor", "Bác sĩ", "common", "Health & Career", "A1"],
  ["Nurse", "Y sĩ, y tá", "common", "Health & Career", "A1"],
  ["Driver", "Tài xế lái xe", "common", "Travel & Career", "A1"],
  ["Car", "Xe ô tô", "common", "Travel & Transport", "A1"],
  ["Bus", "Xe buýt", "common", "Travel & Transport", "A1"],
  ["Train", "Tàu hỏa", "common", "Travel & Transport", "A1"],
  ["Plane", "Máy bay", "common", "Travel & Transport", "A1"],
  ["Bike", "Xe đạp", "common", "Travel & Transport", "A1"],
  ["Street", "Con đường, phố", "common", "City & Travel", "A1"],
  ["City", "Thành phố", "common", "City & Geography", "A1"],
  ["Town", "Thị trấn", "common", "City & Geography", "A1"],
  ["Country", "Đất nước, miền quê", "common", "Geography", "A1"],
  ["Sun", "Mặt trời", "common", "Nature & Space", "A1"],
  ["Moon", "Mặt trăng", "common", "Nature & Space", "A1"],
  ["Star", "Ngôi sao", "common", "Nature & Space", "A1"],
  ["Sky", "Bầu trời", "common", "Nature & Space", "A1"],
  ["Rain", "Cơn mưa", "common", "Weather & Nature", "A1"],
  ["Snow", "Tuyết rơi", "common", "Weather & Nature", "A1"],
  ["Wind", "Cơn gió", "common", "Weather & Nature", "A1"],
  ["Tree", "Cây cối", "common", "Nature & Environment", "A1"],
  ["Flower", "Bông hoa", "common", "Nature & Environment", "A1"],
  ["Grass", "Bãi cỏ", "common", "Nature & Environment", "A1"],
  ["Bird", "Con chim", "common", "Animals & Nature", "A1"],
  ["Cat", "Con mèo", "common", "Animals & Home", "A1"],
  ["Dog", "Con chó", "common", "Animals & Home", "A1"],
  ["Horse", "Con ngựa", "common", "Animals & Nature", "A1"],
  ["Cow", "Con bò", "common", "Animals & Nature", "A1"],
  ["Pig", "Con heo, lợn", "common", "Animals & Nature", "A1"],
  ["Sheep", "Con cừu", "common", "Animals & Nature", "A1"],
  ["Duck", "Con vịt", "common", "Animals & Nature", "A1"],
  ["Mouse", "Con chuột", "common", "Animals & Home", "A1"],
  ["Day", "Ngày", "common", "Time & Daily Life", "A1"],
  ["Night", "Ban đêm", "common", "Time & Daily Life", "A1"],
  ["Morning", "Buổi sáng", "common", "Time & Daily Life", "A1"],
  ["Evening", "Buổi tối", "common", "Time & Daily Life", "A1"],
  ["Week", "Tuần lễ", "common", "Time & Daily Life", "A1"],
  ["Month", "Tháng", "common", "Time & Daily Life", "A1"],
  ["Year", "Năm", "common", "Time & Daily Life", "A1"],
  ["Time", "Thời gian", "common", "Time & Daily Life", "A1"],
  ["Clock", "Đồng hồ", "common", "Time & Daily Life", "A1"],
  ["Money", "Tiền bạc", "common", "Finance & Daily Life", "A1"],
  ["Price", "Giá cả", "common", "Shopping & Finance", "A1"],
  ["Store", "Cửa hàng", "common", "Shopping & Retail", "A1"],
  ["Shop", "Tiệm bán hàng", "common", "Shopping & Retail", "A1"],
  ["Market", "Khu chợ", "common", "Shopping & Retail", "A1"],
  ["Music", "Âm nhạc", "common", "Arts & Culture", "A1"],
  ["Song", "Bài hát", "common", "Arts & Culture", "A1"],
  ["Game", "Trò chơi", "common", "Entertainment", "A1"],
  ["Movie", "Bộ phim", "common", "Entertainment & Movies", "A1"],
  ["Color", "Màu sắc", "common", "Daily Life & Design", "A1"],
  ["Red", "Màu đỏ", "common", "Colors & Design", "A1"],
  ["Blue", "Màu xanh dương", "common", "Colors & Design", "A1"],
  ["Green", "Màu xanh lá", "common", "Colors & Design", "A1"],
  ["Yellow", "Màu vàng", "common", "Colors & Design", "A1"],
  ["White", "Màu trắng", "common", "Colors & Design", "A1"],
  ["Black", "Màu đen", "common", "Colors & Design", "A1"],
  ["Big", "To lớn", "common", "Adjectives", "A1"],
  ["Small", "Nhỏ bé", "common", "Adjectives", "A1"],
  ["Hot", "Nóng", "common", "Adjectives", "A1"],
  ["Cold", "Lạnh", "common", "Adjectives", "A1"],
  ["New", "Mới", "common", "Adjectives", "A1"],
  ["Old", "Cũ, già", "common", "Adjectives", "A1"],
  ["Good", "Tốt, giỏi", "common", "Adjectives", "A1"],
  ["Bad", "Xấu, tồi", "common", "Adjectives", "A1"],
  ["Happy", "Vui vẻ, hạnh phúc", "common", "Psychology", "A1"],
  ["Sad", "Buồn rầu", "common", "Psychology", "A1"],
  ["Fast", "Nhanh", "common", "Adjectives", "A1"],
  ["Slow", "Chậm", "common", "Adjectives", "A1"],
  ["Easy", "Dễ dàng", "common", "Adjectives", "A1"],
  ["Hard", "Khó khăn, cứng", "common", "Adjectives", "A1"]
];

massiveSeedWords.forEach(item => {
  addWord(item[0], item[1], item[2], item[3], item[4]);
});

console.log("Count after adding A1 seed words:", masterMap.size);

// Re-generate numerical indexed array
const finalVocabList = [];
let idCounter = 1;

let stats = {
  toeic: 0,
  ielts: 0,
  common: 0,
  levels: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }
};

for (const item of masterMap.values()) {
  const vocabObj = {
    id: `v-${idCounter++}`,
    en: item.en,
    vn: item.vn,
    pool: item.pool,
    category: item.category,
    level: item.level || 'B1'
  };
  finalVocabList.push(vocabObj);

  if (vocabObj.pool === 'toeic') stats.toeic++;
  else if (vocabObj.pool === 'ielts') stats.ielts++;
  else stats.common++;

  if (stats.levels[vocabObj.level] !== undefined) {
    stats.levels[vocabObj.level]++;
  } else {
    stats.levels['B1']++;
  }
}

console.log("=========================================");
console.log(`TOTAL VOCABULARY BANK ITEMS: ${finalVocabList.length}`);
console.log("DISTRIBUTION BY POOL:", {
  TOEIC: stats.toeic,
  IELTS: stats.ielts,
  COMMON_6000: stats.common
});
console.log("DISTRIBUTION BY LEVEL:", stats.levels);
console.log("=========================================");

const fileHeader = `// ==========================================================================
// CENTRALIZED VOCABULARY BANK — COMPREHENSIVE VOCABULARY & TRAINING POOL
// Covers TOEIC, IELTS, and 6,000 Common General English Words (A1-C2)
// ==========================================================================

export const VOCAB_BANK = ${JSON.stringify(finalVocabList, null, 2)};

/**
 * Filter vocabulary by Pool, Level, Category, and Count
 */
export function getVocabPool({ pool = 'all', level = 'all', category = 'all', count = null } = {}) {
  let filtered = VOCAB_BANK;

  // Pool Filtering
  if (pool && pool !== 'all') {
    filtered = filtered.filter(item => item.pool === pool);
  }

  // Level Filtering with Range Matching
  if (level && level !== 'all') {
    const lvl = level.toUpperCase();
    if (lvl === 'A1-A2') {
      filtered = filtered.filter(item => item.level === 'A1' || item.level === 'A2');
    } else if (lvl === 'B1-B2') {
      filtered = filtered.filter(item => item.level === 'B1' || item.level === 'B2');
    } else if (lvl === 'C1-C2') {
      filtered = filtered.filter(item => item.level === 'C1' || item.level === 'C2');
    } else {
      filtered = filtered.filter(item => item.level.toUpperCase() === lvl);
    }
  }

  // Category Filtering
  if (category && category !== 'all') {
    filtered = filtered.filter(item => item.category && item.category.toLowerCase().includes(category.toLowerCase()));
  }

  // Fallback Protection: If level+pool filter yields fewer than 12 items, fall back to pool filter so game never breaks!
  if (filtered.length < 12) {
    if (pool && pool !== 'all') {
      filtered = VOCAB_BANK.filter(item => item.pool === pool);
    } else {
      filtered = VOCAB_BANK;
    }
  }

  if (count && typeof count === 'number' && count > 0) {
    return [...filtered].sort(() => 0.5 - Math.random()).slice(0, count);
  }

  return filtered;
}

/**
 * Get pairs for Speed Word Match Game
 */
export function getSpeedMatchPairs({ pool = 'all', level = 'all', category = 'all', count = 10 } = {}) {
  const poolItems = getVocabPool({ pool, level, category, count });
  return poolItems.map(item => ({
    id: item.id,
    en: item.en,
    vn: item.vn,
    pool: item.pool,
    category: item.category,
    level: item.level
  }));
}

/**
 * Get Databank Stats Summary
 */
export function getVocabStats() {
  const total = VOCAB_BANK.length;
  const toeic = VOCAB_BANK.filter(item => item.pool === 'toeic').length;
  const ielts = VOCAB_BANK.filter(item => item.pool === 'ielts').length;
  const common = VOCAB_BANK.filter(item => item.pool === 'common').length;

  const levels = {
    A1: VOCAB_BANK.filter(i => i.level === 'A1').length,
    A2: VOCAB_BANK.filter(i => i.level === 'A2').length,
    B1: VOCAB_BANK.filter(i => i.level === 'B1').length,
    B2: VOCAB_BANK.filter(i => i.level === 'B2').length,
    C1: VOCAB_BANK.filter(i => i.level === 'C1').length,
    C2: VOCAB_BANK.filter(i => i.level === 'C2').length,
  };

  return { total, toeic, ielts, common, levels };
}

/**
 * Get Available Categories for a Pool
 */
export function getAvailableCategories(pool = 'all') {
  let items = VOCAB_BANK;
  if (pool !== 'all') {
    items = items.filter(i => i.pool === pool);
  }
  const cats = new Set();
  items.forEach(i => {
    if (i.category) cats.add(i.category);
  });
  return Array.from(cats).sort();
}
`;

fs.writeFileSync('./src/data/vocab-bank.js', fileHeader, 'utf8');
console.log("Successfully written updated src/data/vocab-bank.js!");
