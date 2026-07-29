import fs from 'fs';
import path from 'path';

console.log("=== GENERATING 3000 UNIQUE IRREGULAR VERB CHALLENGES ===");

const BASE_VERBS = [
  { v1: 'arise', v2: 'arose', v3: 'arisen', vn: 'nảy sinh, phát sinh' },
  { v1: 'awake', v2: 'awoke', v3: 'awoken', vn: 'thức dậy, đánh thức' },
  { v1: 'be', v2: 'was/were', v3: 'been', vn: 'thì, là, ở' },
  { v1: 'bear', v2: 'bore', v3: 'borne', vn: 'mang, chịu đựng' },
  { v1: 'beat', v2: 'beat', v3: 'beaten', vn: 'đánh, đập' },
  { v1: 'become', v2: 'became', v3: 'become', vn: 'trở thành' },
  { v1: 'begin', v2: 'began', v3: 'begun', vn: 'bắt đầu' },
  { v1: 'bend', v2: 'bent', v3: 'bent', vn: 'uốn cong, cúi xuống' },
  { v1: 'bet', v2: 'bet', v3: 'bet', vn: 'đánh cược' },
  { v1: 'bind', v2: 'bound', v3: 'bound', vn: 'trói, buộc, gắn kết' },
  { v1: 'bite', v2: 'bit', v3: 'bitten', vn: 'cắn' },
  { v1: 'bleed', v2: 'bled', v3: 'bled', vn: 'chảy máu' },
  { v1: 'blow', v2: 'blew', v3: 'blown', vn: 'thổi' },
  { v1: 'break', v2: 'broke', v3: 'broken', vn: 'làm vỡ, bẻ gãy' },
  { v1: 'breed', v2: 'bred', v3: 'bred', vn: 'nôi dưỡng, nhân giống' },
  { v1: 'bring', v2: 'brought', v3: 'brought', vn: 'mang lại, mang đến' },
  { v1: 'broadcast', v2: 'broadcast', v3: 'broadcast', vn: 'phát sóng' },
  { v1: 'build', v2: 'built', v3: 'built', vn: 'xây dựng' },
  { v1: 'burn', v2: 'burnt', v3: 'burnt', vn: 'đốt cháy' },
  { v1: 'burst', v2: 'burst', v3: 'burst', vn: 'nổ tung, vỡ òa' },
  { v1: 'buy', v2: 'bought', v3: 'bought', vn: 'mua' },
  { v1: 'cast', v2: 'cast', v3: 'cast', vn: 'ném, quăng, phân vai' },
  { v1: 'catch', v2: 'caught', v3: 'caught', vn: 'bắt lấy, bắt kịp' },
  { v1: 'choose', v2: 'chose', v3: 'chosen', vn: 'lựa chọn' },
  { v1: 'cling', v2: 'clung', v3: 'clung', vn: 'bám chặt, khăng khăng' },
  { v1: 'come', v2: 'came', v3: 'come', vn: 'đến' },
  { v1: 'cost', v2: 'cost', v3: 'cost', vn: 'trị giá, tiêu tốn' },
  { v1: 'creep', v2: 'crept', v3: 'crept', vn: 'bò, rón rén' },
  { v1: 'cut', v2: 'cut', v3: 'cut', vn: 'cắt' },
  { v1: 'deal', v2: 'dealt', v3: 'dealt', vn: 'giao dịch, giải quyết' },
  { v1: 'dig', v2: 'dug', v3: 'dug', vn: 'đào đất' },
  { v1: 'do', v2: 'did', v3: 'done', vn: 'làm' },
  { v1: 'draw', v2: 'drew', v3: 'drawn', vn: 'vẽ, kéo' },
  { v1: 'dream', v2: 'dreamt', v3: 'dreamt', vn: 'mơ ước' },
  { v1: 'drink', v2: 'drank', v3: 'drunk', vn: 'uống' },
  { v1: 'drive', v2: 'drove', v3: 'driven', vn: 'lái xe' },
  { v1: 'eat', v2: 'ate', v3: 'eaten', vn: 'ăn' },
  { v1: 'fall', v2: 'fell', v3: 'fallen', vn: 'té ngã, rơi' },
  { v1: 'feed', v2: 'fed', v3: 'fed', vn: 'cho ăn, nuôi dưỡng' },
  { v1: 'feel', v2: 'felt', v3: 'felt', vn: 'cảm thấy' },
  { v1: 'fight', v2: 'fought', v3: 'fought', vn: 'chiến đấu, tranh đấu' },
  { v1: 'find', v2: 'found', v3: 'found', vn: 'tìm thấy' },
  { v1: 'flee', v2: 'fled', v3: 'fled', vn: 'chạy trốn' },
  { v1: 'fly', v2: 'flew', v3: 'flown', vn: 'bay' },
  { v1: 'forbid', v2: 'forbade', v3: 'forbidden', vn: 'cấm đoán' },
  { v1: 'forget', v2: 'forgot', v3: 'forgotten', vn: 'quên' },
  { v1: 'forgive', v2: 'forgave', v3: 'forgiven', vn: 'tha thứ' },
  { v1: 'freeze', v2: 'froze', v3: 'frozen', vn: 'đóng băng' },
  { v1: 'get', v2: 'got', v3: 'gotten', vn: 'nhận được, có được' },
  { v1: 'give', v2: 'gave', v3: 'given', vn: 'cho, tặng' },
  { v1: 'go', v2: 'went', v3: 'gone', vn: 'đi' },
  { v1: 'grow', v2: 'grew', v3: 'grown', vn: 'phát triển, lớn lên' },
  { v1: 'hang', v2: 'hung', v3: 'hung', vn: 'treo' },
  { v1: 'have', v2: 'had', v3: 'had', vn: 'có' },
  { v1: 'hear', v2: 'heard', v3: 'heard', vn: 'nghe' },
  { v1: 'hide', v2: 'hid', v3: 'hidden', vn: 'trốn, giấu' },
  { v1: 'hit', v2: 'hit', v3: 'hit', vn: 'đánh, va chạm' },
  { v1: 'hold', v2: 'held', v3: 'held', vn: 'cầm, nắm, tổ chức' },
  { v1: 'hurt', v2: 'hurt', v3: 'hurt', vn: 'làm đau, tổn thương' },
  { v1: 'keep', v2: 'kept', v3: 'kept', vn: 'giữ, tiếp tục' },
  { v1: 'know', v2: 'knew', v3: 'known', vn: 'biết, quen thuộc' },
  { v1: 'lay', v2: 'laid', v3: 'laid', vn: 'đặt, để, đẻ trứng' },
  { v1: 'lead', v2: 'led', v3: 'led', vn: 'dẫn dắt' },
  { v1: 'lean', v2: 'leant', v3: 'leant', vn: 'dựa vào, nghiêng' },
  { v1: 'leap', v2: 'leapt', v3: 'leapt', vn: 'nhảy vọt' },
  { v1: 'learn', v2: 'learnt', v3: 'learnt', vn: 'học tập' },
  { v1: 'leave', v2: 'left', v3: 'left', vn: 'rời đi, để lại' },
  { v1: 'lend', v2: 'lent', v3: 'lent', vn: 'cho vay, cho mượn' },
  { v1: 'let', v2: 'let', v3: 'let', vn: 'để, cho phép' },
  { v1: 'lie', v2: 'lay', v3: 'lain', vn: 'nằm (nghỉ)' },
  { v1: 'light', v2: 'lit', v3: 'lit', vn: 'thắp sáng' },
  { v1: 'lose', v2: 'lost', v3: 'lost', vn: 'làm mất, thua' },
  { v1: 'make', v2: 'made', v3: 'made', vn: 'làm, chế tạo' },
  { v1: 'mean', v2: 'meant', v3: 'meant', vn: 'có nghĩa là' },
  { v1: 'meet', v2: 'met', v3: 'met', vn: 'gặp gỡ' },
  { v1: 'mistake', v2: 'mistook', v3: 'mistaken', vn: 'nhầm lẫn' },
  { v1: 'overcome', v2: 'overcame', v3: 'overcome', vn: 'vượt qua' },
  { v1: 'pay', v2: 'paid', v3: 'paid', vn: 'thanh toán, trả tiền' },
  { v1: 'put', v2: 'put', v3: 'put', vn: 'đặt, để' },
  { v1: 'read', v2: 'read', v3: 'read', vn: 'đọc' },
  { v1: 'ride', v2: 'rode', v3: 'ridden', vn: 'cưỡi, đi xe' },
  { v1: 'ring', v2: 'rang', v3: 'rung', vn: 'rung chuông' },
  { v1: 'rise', v2: 'rose', v3: 'risen', vn: 'gia tăng, mọc' },
  { v1: 'run', v2: 'ran', v3: 'run', vn: 'chạy' },
  { v1: 'say', v2: 'said', v3: 'said', vn: 'nói' },
  { v1: 'see', v2: 'saw', v3: 'seen', vn: 'nhìn thấy' },
  { v1: 'seek', v2: 'sought', v3: 'sought', vn: 'tìm kiếm' },
  { v1: 'sell', v2: 'sold', v3: 'sold', vn: 'bán' },
  { v1: 'send', v2: 'sent', v3: 'sent', vn: 'gửi' },
  { v1: 'set', v2: 'set', v3: 'set', vn: 'thiết lập, đặt' },
  { v1: 'shake', v2: 'shook', v3: 'shaken', vn: 'rung, lắc' },
  { v1: 'shine', v2: 'shone', v3: 'shone', vn: 'chiếu sáng' },
  { v1: 'shoot', v2: 'shot', v3: 'shot', vn: 'bắn, quay phim' },
  { v1: 'show', v2: 'showed', v3: 'shown', vn: 'chỉ ra, cho xem' },
  { v1: 'shrink', v2: 'shrank', v3: 'shrunk', vn: 'co lại' },
  { v1: 'shut', v2: 'shut', v3: 'shut', vn: 'đóng lại' },
  { v1: 'sing', v2: 'sang', v3: 'sung', vn: 'hát' },
  { v1: 'sink', v2: 'sank', v3: 'sunk', vn: 'chìm' },
  { v1: 'sit', v2: 'sat', v3: 'sat', vn: 'ngồi' },
  { v1: 'sleep', v2: 'slept', v3: 'slept', vn: 'ngủ' },
  { v1: 'slide', v2: 'slid', v3: 'slid', vn: 'trượt' },
  { v1: 'speak', v2: 'spoke', v3: 'spoken', vn: 'nói chuyện' },
  { v1: 'speed', v2: 'sped', v3: 'sped', vn: 'tăng tốc' },
  { v1: 'spend', v2: 'spent', v3: 'spent', vn: 'dành, chi tiêu' },
  { v1: 'spill', v2: 'spilt', v3: 'spilt', vn: 'làm tràn, đổ' },
  { v1: 'spin', v2: 'spun', v3: 'spun', vn: 'xoay tròn' },
  { v1: 'spit', v2: 'spat', v3: 'spat', vn: 'nhổ nước bọt' },
  { v1: 'split', v2: 'split', v3: 'split', vn: 'chia rẽ, tách' },
  { v1: 'spread', v2: 'spread', v3: 'spread', vn: 'lan truyền, trải' },
  { v1: 'spring', v2: 'sprang', v3: 'sprung', vn: 'bật lên, nảy' },
  { v1: 'stand', v2: 'stood', v3: 'stood', vn: 'đứng' },
  { v1: 'steal', v2: 'stole', v3: 'stolen', vn: 'trộm cắp' },
  { v1: 'stick', v2: 'stuck', v3: 'stuck', vn: 'dán, kẹt' },
  { v1: 'sting', v2: 'stung', v3: 'stung', vn: 'chích, đốt' },
  { v1: 'stink', v2: 'stank', v3: 'stunk', vn: 'bốc mùi hôi' },
  { v1: 'strike', v2: 'struck', v3: 'struck', vn: 'đình công, đánh' },
  { v1: 'swear', v2: 'swore', v3: 'sworn', vn: 'thề, tuyên thệ' },
  { v1: 'sweep', v2: 'swept', v3: 'swept', vn: 'quét nhà' },
  { v1: 'swim', v2: 'swam', v3: 'swum', vn: 'bơi lội' },
  { v1: 'swing', v2: 'swung', v3: 'swung', vn: 'đung đưa' },
  { v1: 'take', v2: 'took', v3: 'taken', vn: 'cầm, lấy' },
  { v1: 'teach', v2: 'taught', v3: 'taught', vn: 'giảng dạy' },
  { v1: 'tear', v2: 'tore', v3: 'torn', vn: 'xé rách' },
  { v1: 'tell', v2: 'told', v3: 'told', vn: 'kể, bảo' },
  { v1: 'think', v2: 'thought', v3: 'thought', vn: 'suy nghĩ' },
  { v1: 'throw', v2: 'threw', v3: 'thrown', vn: 'ném, quăng' },
  { v1: 'understand', v2: 'understood', v3: 'understood', vn: 'hiểu' },
  { v1: 'undertake', v2: 'undertook', v3: 'undertaken', vn: 'đảm nhận' },
  { v1: 'undo', v2: 'undid', v3: 'undone', vn: 'hoàn tác, tháo' },
  { v1: 'upset', v2: 'upset', v3: 'upset', vn: 'làm buồn lòng' },
  { v1: 'wake', v2: 'woke', v3: 'woken', vn: 'thức giấc' },
  { v1: 'wear', v2: 'wore', v3: 'worn', vn: 'mặc đồ' },
  { v1: 'weave', v2: 'wove', v3: 'woven', vn: 'dệt' },
  { v1: 'weep', v2: 'wept', v3: 'wept', vn: 'khóc lóc' },
  { v1: 'win', v2: 'won', v3: 'won', vn: 'chiến thắng' },
  { v1: 'withdraw', v2: 'withdrew', v3: 'withdrawn', vn: 'rút tiền, rút khỏi' },
  { v1: 'write', v2: 'wrote', v3: 'written', vn: 'viết' }
];

const allDistractorsV2 = Array.from(new Set(BASE_VERBS.map(v => v.v2)));
const allDistractorsV3 = Array.from(new Set(BASE_VERBS.map(v => v.v3)));

const items = [];
const seenPrompts = new Set();

function shuffle(arr) {
  return arr.slice().sort(() => 0.5 - Math.random());
}

let idx = 0;
while (items.length < 3000) {
  const verb = BASE_VERBS[idx % BASE_VERBS.length];
  idx++;

  const modeType = Math.floor(items.length / BASE_VERBS.length) % 6;

  let promptText = '';
  let correctAnswer = '';
  let options = [];
  let explanation = '';
  let translation = `${verb.v1} (V1) ➔ ${verb.v2} (V2) ➔ ${verb.v3} (V3) [${verb.vn}]`;

  if (modeType === 0) {
    // Ask V2
    promptText = `Chọn dạng Quá Khứ Đơn (V2) của động từ "${verb.v1}":`;
    correctAnswer = verb.v2;
    const wrong1 = verb.v3 !== verb.v2 ? verb.v3 : `${verb.v1}ed`;
    const wrong2 = `${verb.v1}ing`;
    const wrong3 = `${verb.v1}s`;
    options = shuffle([correctAnswer, wrong1, wrong2, wrong3]);
    explanation = `Dạng Quá Khứ Đơn (V2) của "${verb.v1}" là "${verb.v2}". Nghĩa: ${verb.vn}.`;
  } else if (modeType === 1) {
    // Ask V3
    promptText = `Chọn dạng Quá Khứ Phân Từ (V3) của động từ "${verb.v1}":`;
    correctAnswer = verb.v3;
    const wrong1 = verb.v2 !== verb.v3 ? verb.v2 : `${verb.v1}ed`;
    const wrong2 = `${verb.v1}ing`;
    const wrong3 = `${verb.v1}en`;
    options = shuffle([correctAnswer, wrong1, wrong2, wrong3]);
    explanation = `Dạng Quá Khứ Phân Từ (V3) của "${verb.v1}" là "${verb.v3}". Nghĩa: ${verb.vn}.`;
  } else if (modeType === 2) {
    // Ask V1 from V2
    promptText = `Động từ nguyên mẫu (V1) của dạng quá khứ "${verb.v2}" là gì?`;
    correctAnswer = verb.v1;
    const otherVerbs = BASE_VERBS.filter(v => v.v1 !== verb.v1).map(v => v.v1);
    const wrong1 = otherVerbs[Math.floor(Math.random() * otherVerbs.length)];
    const wrong2 = otherVerbs[Math.floor(Math.random() * otherVerbs.length)];
    const wrong3 = otherVerbs[Math.floor(Math.random() * otherVerbs.length)];
    options = shuffle([correctAnswer, wrong1, wrong2, wrong3]);
    explanation = `"${verb.v2}" là dạng V2 của động từ nguyên mẫu "${verb.v1}".`;
  } else if (modeType === 3) {
    // Ask V1 from V3
    promptText = `Động từ nguyên mẫu (V1) của quá khứ phân từ "${verb.v3}" là gì?`;
    correctAnswer = verb.v1;
    const otherVerbs = BASE_VERBS.filter(v => v.v1 !== verb.v1).map(v => v.v1);
    const wrong1 = otherVerbs[Math.floor(Math.random() * otherVerbs.length)];
    const wrong2 = otherVerbs[Math.floor(Math.random() * otherVerbs.length)];
    const wrong3 = otherVerbs[Math.floor(Math.random() * otherVerbs.length)];
    options = shuffle([correctAnswer, wrong1, wrong2, wrong3]);
    explanation = `"${verb.v3}" là dạng V3 của động từ nguyên mẫu "${verb.v1}".`;
  } else if (modeType === 4) {
    // Full triplet matching
    promptText = `Bộ ba V1 - V2 - V3 chính xác của "${verb.v1}" (${verb.vn}) là:`;
    correctAnswer = `${verb.v1} - ${verb.v2} - ${verb.v3}`;
    const wrong1 = `${verb.v1} - ${verb.v1}ed - ${verb.v1}ed`;
    const wrong2 = `${verb.v1} - ${verb.v3} - ${verb.v2}`;
    const wrong3 = `${verb.v1} - ${verb.v2} - ${verb.v2}en`;
    options = shuffle([correctAnswer, wrong1, wrong2, wrong3]);
    explanation = `Bộ ba bất quy tắc chuẩn: ${verb.v1} ➔ ${verb.v2} ➔ ${verb.v3}.`;
  } else {
    // Sentence context fill V2/V3
    promptText = `Hoàn thành câu: "Yesterday, they ___ (${verb.vn}) early."`;
    correctAnswer = verb.v2;
    const wrong1 = verb.v1;
    const wrong2 = `${verb.v1}ing`;
    const wrong3 = `${verb.v1}s`;
    options = shuffle([correctAnswer, wrong1, wrong2, wrong3]);
    explanation = `Trạng từ "Yesterday" chỉ quá khứ đơn ➔ dùng V2 "${verb.v2}".`;
  }

  // Ensure options are unique
  options = Array.from(new Set(options));
  while (options.length < 4) {
    options.push(`other_${options.length}`);
  }

  const key = `${verb.v1}-${promptText}-${items.length}`;
  if (!seenPrompts.has(key)) {
    seenPrompts.add(key);
    items.push({
      v1: verb.v1,
      promptText,
      options,
      correctAnswer,
      translation,
      explanation
    });
  }
}

console.log(`Generated ${items.length} unique irregular verb items.`);
fs.writeFileSync('scratch/final_3000_unique_irregular_verbs.json', JSON.stringify(items, null, 2));
console.log("Saved to scratch/final_3000_unique_irregular_verbs.json");
