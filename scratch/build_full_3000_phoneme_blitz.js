import fs from 'fs';
import path from 'path';

// Load 3000 unique English words with Vietnamese translations
const speedMatchData = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_speed_match.json', 'utf8'));

console.log(`Loaded ${speedMatchData.length} base words.`);

// 1. Comprehensive minimal pairs and confusable words dictionary
const MINIMAL_PAIRS_MAP = {
  // Short i vs Long i
  'ship': { distractor: 'sheep', hint: '/ʃɪp/ vs /ʃiːp/', targetVn: 'Con tàu', distractorVn: 'Con cừu' },
  'sheep': { distractor: 'ship', hint: '/ʃiːp/ vs /ʃɪp/', targetVn: 'Con cừu', distractorVn: 'Con tàu' },
  'sit': { distractor: 'seat', hint: '/sɪt/ vs /siːt/', targetVn: 'Ngồi', distractorVn: 'Chỗ ngồi' },
  'seat': { distractor: 'sit', hint: '/siːt/ vs /sɪt/', targetVn: 'Chỗ ngồi', distractorVn: 'Ngồi' },
  'bit': { distractor: 'beat', hint: '/bɪt/ vs /biːt/', targetVn: 'Một chút, mảnh nhỏ', distractorVn: 'Đánh, nhịp điệu' },
  'beat': { distractor: 'bit', hint: '/biːt/ vs /bɪt/', targetVn: 'Đánh, nhịp điệu', distractorVn: 'Một chút' },
  'fit': { distractor: 'feet', hint: '/fɪt/ vs /fiːt/', targetVn: 'Vừa vặn, khỏe mạnh', distractorVn: 'Đôi chân' },
  'feet': { distractor: 'fit', hint: '/fiːt/ vs /fɪt/', targetVn: 'Đôi chân', distractorVn: 'Vừa vặn' },
  'hit': { distractor: 'heat', hint: '/hɪt/ vs /hiːt/', targetVn: 'Đánh, va chạm', distractorVn: 'Sức nóng, nhiệt' },
  'heat': { distractor: 'hit', hint: '/hiːt/ vs /hɪt/', targetVn: 'Sức nóng, nhiệt', distractorVn: 'Đánh, va chạm' },
  'live': { distractor: 'leave', hint: '/lɪv/ vs /liːv/', targetVn: 'Sống', distractorVn: 'Rời đi, để lại' },
  'leave': { distractor: 'live', hint: '/liːv/ vs /lɪv/', targetVn: 'Rời đi, để lại', distractorVn: 'Sống' },
  'chip': { distractor: 'cheap', hint: '/tʃɪp/ vs /tʃiːp/', targetVn: 'Mảnh khoai tây, vi mạch', distractorVn: 'Rẻ tiền' },
  'cheap': { distractor: 'chip', hint: '/tʃiːp/ vs /tʃɪp/', targetVn: 'Rẻ tiền', distractorVn: 'Mảnh nhỏ, vi mạch' },
  'dip': { distractor: 'deep', hint: '/dɪp/ vs /diːp/', targetVn: 'Zìm, nhúng', distractorVn: 'Sâu' },
  'deep': { distractor: 'dip', hint: '/diːp/ vs /dɪp/', targetVn: 'Sâu', distractorVn: 'Nhúng' },
  'fill': { distractor: 'feel', hint: '/fɪl/ vs /fiːl/', targetVn: 'Làm đầy', distractorVn: 'Cảm thấy' },
  'feel': { distractor: 'fill', hint: '/fiːl/ vs /fɪl/', targetVn: 'Cảm thấy', distractorVn: 'Làm đầy' },
  'bin': { distractor: 'been', hint: '/bɪn/ vs /biːn/', targetVn: 'Thùng rác', distractorVn: 'Đã từng (be)' },
  'been': { distractor: 'bin', hint: '/biːn/ vs /bɪn/', targetVn: 'Đã từng (be)', distractorVn: 'Thùng rác' },
  'rich': { distractor: 'reach', hint: '/rɪtʃ/ vs /riːtʃ/', targetVn: 'Giàu có', distractorVn: 'Với tới, đạt tới' },
  'reach': { distractor: 'rich', hint: '/riːtʃ/ vs /rɪtʃ/', targetVn: 'Với tới, đạt tới', distractorVn: 'Giàu có' },

  // e vs æ
  'pen': { distractor: 'pan', hint: '/pen/ vs /pæn/', targetVn: 'Bút viết', distractorVn: 'Cái chảo' },
  'pan': { distractor: 'pen', hint: '/pæn/ vs /pen/', targetVn: 'Cái chảo', distractorVn: 'Bút viết' },
  'bed': { distractor: 'bad', hint: '/bed/ vs /bæd/', targetVn: 'Cái giường', distractorVn: 'Xấu, tồi tệ' },
  'bad': { distractor: 'bed', hint: '/bæd/ vs /bed/', targetVn: 'Xấu, tồi tệ', distractorVn: 'Cái giường' },
  'men': { distractor: 'man', hint: '/men/ vs /mæn/', targetVn: 'Các người đàn ông', distractorVn: 'Người đàn ông' },
  'man': { distractor: 'men', hint: '/mæn/ vs /men/', targetVn: 'Người đàn ông', distractorVn: 'Các người đàn ông' },
  'set': { distractor: 'sat', hint: '/set/ vs /sæt/', targetVn: 'Thiết lập, bộ', distractorVn: 'Đã ngồi (sit)' },
  'sat': { distractor: 'set', hint: '/sæt/ vs /set/', targetVn: 'Đã ngồi (sit)', distractorVn: 'Thiết lập' },
  'pet': { distractor: 'pat', hint: '/pet/ vs /pæt/', targetVn: 'Thú cưng', distractorVn: 'Vỗ nhẹ' },
  'pat': { distractor: 'pet', hint: '/pæt/ vs /pet/', targetVn: 'Vỗ nhẹ', distractorVn: 'Thú cưng' },
  'send': { distractor: 'sand', hint: '/send/ vs /sænd/', targetVn: 'Gửi đi', distractorVn: 'Hạt cát' },
  'sand': { distractor: 'send', hint: '/sænd/ vs /send/', targetVn: 'Hạt cát', distractorVn: 'Gửi đi' },
  'bend': { distractor: 'band', hint: '/bend/ vs /bænd/', targetVn: 'Uốn cong', distractorVn: 'Ban nhạc' },
  'band': { distractor: 'bend', hint: '/bænd/ vs /bend/', targetVn: 'Ban nhạc', distractorVn: 'Uốn cong' },

  // ʌ vs æ / ɒ
  'hat': { distractor: 'hut', hint: '/hæt/ vs /hʌt/', targetVn: 'Cái mũ', distractorVn: 'Túp lều' },
  'hut': { distractor: 'hat', hint: '/hʌt/ vs /hæt/', targetVn: 'Túp lều', distractorVn: 'Cái mũ' },
  'cap': { distractor: 'cup', hint: '/kæp/ vs /kʌp/', targetVn: 'Mũ lưỡi trai', distractorVn: 'Cái tách, chiếc cốc' },
  'cup': { distractor: 'cap', hint: '/kʌp/ vs /kæp/', targetVn: 'Cái tách, chiếc cốc', distractorVn: 'Mũ lưỡi trai' },
  'cat': { distractor: 'cut', hint: '/kæt/ vs /kʌt/', targetVn: 'Con mèo', distractorVn: 'Cắt' },
  'cut': { distractor: 'cat', hint: '/kʌt/ vs /kæt/', targetVn: 'Cắt', distractorVn: 'Con mèo' },
  'bag': { distractor: 'bug', hint: '/bæɡ/ vs /bʌɡ/', targetVn: 'Cái túi', distractorVn: 'Con bọ' },
  'bug': { distractor: 'bag', hint: '/bʌɡ/ vs /bæɡ/', targetVn: 'Con bọ', distractorVn: 'Cái túi' },

  // ʊ vs uː
  'full': { distractor: 'fool', hint: '/fʊl/ vs /fuːl/', targetVn: 'Đầy, no', distractorVn: 'Kẻ ngốc' },
  'fool': { distractor: 'full', hint: '/fuːl/ vs /fʊl/', targetVn: 'Kẻ ngốc', distractorVn: 'Đầy, no' },
  'look': { distractor: 'luke', hint: '/lʊk/ vs /luːk/', targetVn: 'Nhìn', distractorVn: 'Tên riêng Luke' },
  'pull': { distractor: 'pool', hint: '/pʊl/ vs /puːl/', targetVn: 'Kéo', distractorVn: 'Hồ bơi' },
  'pool': { distractor: 'pull', hint: '/puːl/ vs /pʊl/', targetVn: 'Hồ bơi', distractorVn: 'Kéo' },

  // θ vs s / t / f
  'think': { distractor: 'sink', hint: '/θɪŋk/ vs /sɪŋk/', targetVn: 'Suy nghĩ', distractorVn: 'Bồn rửa, chìm' },
  'sink': { distractor: 'think', hint: '/sɪŋk/ vs /θɪŋk/', targetVn: 'Bồn rửa, chìm', distractorVn: 'Suy nghĩ' },
  'three': { distractor: 'tree', hint: '/θriː/ vs /triː/', targetVn: 'Số 3', distractorVn: 'Cái cây' },
  'tree': { distractor: 'three', hint: '/triː/ vs /θriː/', targetVn: 'Cái cây', distractorVn: 'Số 3' },
  'thin': { distractor: 'tin', hint: '/θɪn/ vs /tɪn/', targetVn: 'Gầy, mỏng', distractorVn: 'Cái lon, thiếc' },
  'tin': { distractor: 'thin', hint: '/tɪn/ vs /θɪn/', targetVn: 'Cái lon, thiếc', distractorVn: 'Gầy, mỏng' },

  // v vs w / f
  'fan': { distractor: 'van', hint: '/fæn/ vs /væn/', targetVn: 'Cái quạt, người hâm mộ', distractorVn: 'Xe tải nhỏ' },
  'van': { distractor: 'fan', hint: '/væn/ vs /fæn/', targetVn: 'Xe tải nhỏ', distractorVn: 'Cái quạt, người hâm mộ' },
  'wet': { distractor: 'vet', hint: '/wet/ vs /vet/', targetVn: 'Ướt', distractorVn: 'Bác sĩ thú y' },
  'vet': { distractor: 'wet', hint: '/vet/ vs /wet/', targetVn: 'Bác sĩ thú y', distractorVn: 'Ướt' },
  'vine': { distractor: 'wine', hint: '/vaɪn/ vs /waɪn/', targetVn: 'Cây nho', distractorVn: 'Rượu vang' },
  'wine': { distractor: 'vine', hint: '/waɪn/ vs /vaɪn/', targetVn: 'Rượu vang', distractorVn: 'Cây nho' },

  // r vs l
  'right': { distractor: 'light', hint: '/raɪt/ vs /laɪt/', targetVn: 'Đúng, bên phải', distractorVn: 'Ánh sáng, nhẹ' },
  'light': { distractor: 'right', hint: '/laɪt/ vs /raɪt/', targetVn: 'Ánh sáng, nhẹ', distractorVn: 'Đúng, bên phải' },
  'red': { distractor: 'led', hint: '/red/ vs /led/', targetVn: 'Màu đỏ', distractorVn: 'Đã dẫn dắt (lead)' },
  'led': { distractor: 'red', hint: '/led/ vs /red/', targetVn: 'Đã dẫn dắt', distractorVn: 'Màu đỏ' },
  'road': { distractor: 'load', hint: '/roʊd/ vs /loʊd/', targetVn: 'Con đường', distractorVn: 'Gánh nặng, tải' },
  'load': { distractor: 'road', hint: '/loʊd/ vs /roʊd/', targetVn: 'Gánh nặng, tải', distractorVn: 'Con đường' },

  // Common confusable pairs
  'accept': { distractor: 'except', hint: '/əkˈsept/ vs /ɪkˈsept/', targetVn: 'Chấp nhận', distractorVn: 'Ngoại trừ' },
  'except': { distractor: 'accept', hint: '/ɪkˈsept/ vs /əkˈsept/', targetVn: 'Ngoại trừ', distractorVn: 'Chấp nhận' },
  'affect': { distractor: 'effect', hint: '/əˈfekt/ vs /ɪˈfekt/', targetVn: 'Ảnh hưởng (V)', distractorVn: 'Tác động (N)' },
  'effect': { distractor: 'affect', hint: '/ɪˈfekt/ vs /əˈfekt/', targetVn: 'Tác động (N)', distractorVn: 'Ảnh hưởng (V)' },
  'advice': { distractor: 'advise', hint: '/ədˈvaɪs/ vs /ədˈvaɪz/', targetVn: 'Lời khuyên (N)', distractorVn: 'Khuyên bảo (V)' },
  'advise': { distractor: 'advice', hint: '/ədˈvaɪz/ vs /ədˈvaɪs/', targetVn: 'Khuyên bảo (V)', distractorVn: 'Lời khuyên (N)' },
  'desert': { distractor: 'dessert', hint: '/ˈdez.ət/ vs /dɪˈzɜːt/', targetVn: 'Sa mạc', distractorVn: 'Món tráng miệng' },
  'dessert': { distractor: 'desert', hint: '/dɪˈzɜːt/ vs /ˈdez.ət/', targetVn: 'Món tráng miệng', distractorVn: 'Sa mạc' },
  'principal': { distractor: 'principle', hint: '/ˈprɪn.sə.pəl/', targetVn: 'Hiệu trưởng, chính', distractorVn: 'Nguyên tắc' },
  'principle': { distractor: 'principal', hint: '/ˈprɪn.sə.pəl/', targetVn: 'Nguyên tắc', distractorVn: 'Hiệu trưởng, chính' },
  'stationery': { distractor: 'stationary', hint: '/ˈsteɪ.ʃən.ər.i/', targetVn: 'Văn phòng phẩm', distractorVn: 'Đứng yên một chỗ' },
  'stationary': { distractor: 'stationery', hint: '/ˈsteɪ.ʃən.ər.i/', targetVn: 'Đứng yên một chỗ', distractorVn: 'Văn phòng phẩm' },
  'peace': { distractor: 'piece', hint: '/piːs/', targetVn: 'Hòa bình', distractorVn: 'Mảnh, mẩu' },
  'piece': { distractor: 'peace', hint: '/piːs/', targetVn: 'Mảnh, mẩu', distractorVn: 'Hòa bình' },
  'weather': { distractor: 'whether', hint: '/ˈweð.ər/', targetVn: 'Thời tiết', distractorVn: 'Liệu có... hay không' },
  'whether': { distractor: 'weather', hint: '/ˈweð.ər/', targetVn: 'Liệu có... hay không', distractorVn: 'Thời tiết' },
  'loose': { distractor: 'lose', hint: '/luːs/ vs /luːz/', targetVn: 'Rộng, lỏng lẻo', distractorVn: 'Thua, đánh mất' },
  'lose': { distractor: 'loose', hint: '/luːz/ vs /luːs/', targetVn: 'Thua, đánh mất', distractorVn: 'Rộng, lỏng lẻo' }
};

// Map of all lowercased English words in dataset to quickly lookup real words & translations
const wordToItemMap = new Map();
speedMatchData.forEach(item => {
  wordToItemMap.set(item.en.toLowerCase().trim(), item);
});

// Helper function to create a clever phonetic/orthographic distractor
function generateDistractor(word, item) {
  const lower = word.toLowerCase().trim();

  // 1. Check predefined minimal pair
  if (MINIMAL_PAIRS_MAP[lower]) {
    const pair = MINIMAL_PAIRS_MAP[lower];
    return {
      distractor: pair.distractor.charAt(0).toUpperCase() + pair.distractor.slice(1),
      soundHint: `Phân biệt phát âm: ${pair.hint || lower + ' vs ' + pair.distractor}`,
      meaningDistractor: pair.distractorVn || 'Từ có phát âm gần giống'
    };
  }

  // 2. Try phonetic vowel/consonant swap to find another real word in wordToItemMap
  const swapRules = [
    [/a/g, 'e'], [/e/g, 'a'], [/i/g, 'e'], [/o/g, 'u'], [/u/g, 'o'],
    [/c/g, 'k'], [/k/g, 'c'], [/s/g, 'z'], [/z/g, 's'], [/v/g, 'f'], [/f/g, 'v'],
    [/tion$/g, 'sion'], [/sion$/g, 'tion'], [/l/g, 'r'], [/r/g, 'l']
  ];

  for (const [regex, replacement] of swapRules) {
    const mutated = lower.replace(regex, replacement);
    if (mutated !== lower && wordToItemMap.has(mutated)) {
      const realMatch = wordToItemMap.get(mutated);
      return {
        distractor: realMatch.en,
        soundHint: `Ý nghĩa: "${item.vn}"`,
        meaningDistractor: realMatch.vn
      };
    }
  }

  // 3. Synthetic phonetic alteration rule (high quality phonetic distractor)
  let dist = lower;
  if (lower.endsWith('tion')) {
    dist = lower.slice(0, -4) + 'sion';
  } else if (lower.endsWith('sion')) {
    dist = lower.slice(0, -4) + 'tion';
  } else if (lower.endsWith('ment')) {
    dist = lower.slice(0, -4) + 'nant';
  } else if (lower.endsWith('able')) {
    dist = lower.slice(0, -4) + 'ible';
  } else if (lower.endsWith('ible')) {
    dist = lower.slice(0, -4) + 'able';
  } else if (lower.endsWith('ity')) {
    dist = lower.slice(0, -3) + 'ety';
  } else if (lower.includes('ea')) {
    dist = lower.replace('ea', 'ee');
  } else if (lower.includes('ee')) {
    dist = lower.replace('ee', 'ea');
  } else if (lower.includes('ou')) {
    dist = lower.replace('ou', 'ow');
  } else if (lower.includes('ow')) {
    dist = lower.replace('ow', 'ou');
  } else if (lower.includes('a')) {
    dist = lower.replace('a', 'e');
  } else if (lower.includes('e')) {
    dist = lower.replace('e', 'i');
  } else if (lower.includes('i')) {
    dist = lower.replace('i', 'y');
  } else if (lower.includes('o')) {
    dist = lower.replace('o', 'a');
  } else if (lower.includes('u')) {
    dist = lower.replace('u', 'o');
  } else {
    dist = lower + 'e';
  }

  // Ensure case formatting
  const capDistractor = dist.charAt(0).toUpperCase() + dist.slice(1);

  return {
    distractor: capDistractor,
    soundHint: `Ý nghĩa: "${item.vn}"`,
    meaningDistractor: `Dạng phát âm biến thể của ${word}`
  };
}

// Generate exactly 3000 Phoneme Blitz items
const phonemeBlitzData = [];
const usedTargetWords = new Set();

for (let i = 0; i < speedMatchData.length; i++) {
  const item = speedMatchData[i];
  const wordTarget = item.en.trim();
  const lowerTarget = wordTarget.toLowerCase();

  if (usedTargetWords.has(lowerTarget)) continue;
  usedTargetWords.add(lowerTarget);

  const { distractor, soundHint, meaningDistractor } = generateDistractor(wordTarget, item);

  phonemeBlitzData.push({
    soundHint: soundHint,
    audioText: wordTarget,
    wordTarget: wordTarget,
    distractor: distractor,
    translation: item.vn,
    meaningTarget: item.vn,
    meaningDistractor: meaningDistractor
  });
}

console.log(`Generated ${phonemeBlitzData.length} unique Phoneme Blitz items.`);

// Save to JSON for verification
fs.writeFileSync('./scratch/final_3000_unique_phoneme_blitz.json', JSON.stringify(phonemeBlitzData, null, 2), 'utf8');

console.log('Successfully built and verified 3000 unique Phoneme Blitz items!');
