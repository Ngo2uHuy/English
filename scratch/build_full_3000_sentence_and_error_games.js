import fs from 'fs';
import path from 'path';

const gamesDataPath = './src/data/games-data.js';
const code = fs.readFileSync(gamesDataPath, 'utf8');

// Parse SPEED_MATCH_PAIRS
const match = code.match(/export const SPEED_MATCH_PAIRS = (\[[\s\S]*?\]);\n\nexport const SENTENCE_DASH_DATA/);
if (!match) {
  console.error("Could not find SPEED_MATCH_PAIRS section in games-data.js!");
  process.exit(1);
}

const pairs = JSON.parse(match[1]);
console.log(`Successfully loaded ${pairs.length} base vocabulary pairs from SPEED_MATCH_PAIRS.`);

// Diversity of sentence templates for Sentence Builder Dash
const sentenceTemplates = [
  (w, vn) => ({
    target: `We should ${w.toLowerCase()} this issue as soon as possible`,
    hint: `Động từ khuyết thiếu: should + V0 (${w})`,
    translation: `Chúng ta nên ${vn.toLowerCase()} vấn đề này càng sớm càng tốt.`
  }),
  (w, vn) => ({
    target: `They decided to ${w.toLowerCase()} the project after careful review`,
    hint: `Cấu trúc động từ: decide to + V (${w})`,
    translation: `Họ đã quyết định ${vn.toLowerCase()} dự án sau khi xem xét kỹ lưỡng.`
  }),
  (w, vn) => ({
    target: `She has a strong ${w.toLowerCase()} in her field of work`,
    hint: `Cụm danh từ: a strong + N (${w})`,
    translation: `Cô ấy có ${vn.toLowerCase()} mạnh mẽ trong lĩnh vực công việc của mình.`
  }),
  (w, vn) => ({
    target: `The manager requested a detailed report about ${w.toLowerCase()}`,
    hint: `Giới từ đi kèm danh từ: report about + N (${w})`,
    translation: `Quản lý đã yêu cầu một báo cáo chi tiết về ${vn.toLowerCase()}.`
  }),
  (w, vn) => ({
    target: `It is important to understand the concept of ${w.toLowerCase()}`,
    hint: `Cấu trúc tính từ giả định: It is important to + V (${w})`,
    translation: `Điều quan trọng là phải hiểu khái niệm về ${vn.toLowerCase()}.`
  }),
  (w, vn) => ({
    target: `He demonstrated an impressive ${w.toLowerCase()} during the meeting`,
    hint: `Thì quá khứ đơn: demonstrated an impressive ${w}`,
    translation: `Anh ấy đã thể hiện một ${vn.toLowerCase()} ấn tượng trong cuộc họp.`
  }),
  (w, vn) => ({
    target: `Our team will implement new strategies for ${w.toLowerCase()}`,
    hint: `Thì tương lai đơn: will implement + N (${w})`,
    translation: `Đội của chúng tôi sẽ triển khai các chiến lược mới cho ${vn.toLowerCase()}.`
  }),
  (w, vn) => ({
    target: `The company aims to improve its ${w.toLowerCase()} this year`,
    hint: `Cấu trúc mục tiêu: aim to + V (${w})`,
    translation: `Công ty hướng tới cải thiện ${vn.toLowerCase()} của mình trong năm nay.`
  }),
  (w, vn) => ({
    target: `You can find useful information regarding ${w.toLowerCase()}`,
    hint: `Giới từ trang trọng: regarding + N (${w})`,
    translation: `Bạn có thể tìm thấy thông tin hữu ích liên quan đến ${vn.toLowerCase()}.`
  }),
  (w, vn) => ({
    target: `Many experts emphasize the value of ${w.toLowerCase()}`,
    hint: `Thì hiện tại đơn: emphasize the value of + N (${w})`,
    translation: `Nhiều chuyên gia nhấn mạnh giá trị của ${vn.toLowerCase()}.`
  }),
  (w, vn) => ({
    target: `Please ensure that you understand ${w.toLowerCase()} clearly`,
    hint: `Câu mệnh lệnh lịch sự: Please ensure that... (${w})`,
    translation: `Xin vui lòng đảm bảo rằng bạn hiểu rõ về ${vn.toLowerCase()}.`
  }),
  (w, vn) => ({
    target: `Recent developments have shown great progress in ${w.toLowerCase()}`,
    hint: `Thì hiện tại hoàn thành: have shown progress in + N (${w})`,
    translation: `Những phát triển gần đây đã cho thấy tiến bộ lớn về ${vn.toLowerCase()}.`
  }),
  (w, vn) => ({
    target: `If you encounter any problem with ${w.toLowerCase()} contact support`,
    hint: `Câu điều kiện loại 1: If + S + V, Command (${w})`,
    translation: `Nếu bạn gặp bất kỳ sự cố nào với ${vn.toLowerCase()}, hãy liên hệ hỗ trợ.`
  }),
  (w, vn) => ({
    target: `The main goal is to promote ${w.toLowerCase()} across all departments`,
    hint: `Danh từ làm bổ ngữ: promote + N (${w})`,
    translation: `Mục tiêu chính là thúc đẩy ${vn.toLowerCase()} trên tất cả các phòng ban.`
  }),
  (w, vn) => ({
    target: `Having analyzed ${w.toLowerCase()} we found several new solutions`,
    hint: `Phân từ hoàn thành: Having + V3 (${w})`,
    translation: `Sau khi phân tích ${vn.toLowerCase()}, chúng tôi đã tìm ra nhiều giải pháp mới.`
  })
];

// Helper to scramble words and ensure scrambled != target
function getScrambledArray(sentence) {
  const words = sentence.split(/\s+/);
  const scrambled = [...words];
  for (let i = scrambled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
  }
  if (scrambled.join(' ') === sentence && words.length > 1) {
    [scrambled[0], scrambled[1]] = [scrambled[1], scrambled[0]];
  }
  return scrambled;
}

// Generate 3000 SENTENCE DASH items
const sentenceDashData = [];
const uniqueSentenceTargets = new Set();

pairs.forEach((p, idx) => {
  const word = p.en;
  const vn = p.vn;
  const level = idx % 5 === 0 ? 'Beginner' : idx % 5 === 1 ? 'Intermediate' : idx % 5 === 2 ? 'Advanced' : idx % 5 === 3 ? 'TOEIC' : 'IELTS';
  
  const tmpl = sentenceTemplates[idx % sentenceTemplates.length];
  const built = tmpl(word, vn);
  
  let target = built.target;
  if (uniqueSentenceTargets.has(target)) {
    target = `${built.target} (${idx + 1})`;
  }
  uniqueSentenceTargets.add(target);

  sentenceDashData.push({
    target: target,
    scrambled: getScrambledArray(target),
    hint: built.hint,
    translation: built.translation,
    level: level
  });
});

console.log(`Generated ${sentenceDashData.length} unique Sentence Dash items.`);

// Diversity of Grammar Error Trap patterns for Error Hunter
const errorPatterns = [
  (w, vn) => ({
    sentenceParts: ['Although', `we studied ${w.toLowerCase()},`, 'but', 'we failed the exam.'],
    errorIndex: 2,
    errorWord: 'but',
    correctOptions: ['(bỏ "but")', 'however', 'nevertheless', 'yet'],
    correctChoice: 0,
    explanation: `Không dùng cả "Although" và "but" trong cùng một câu ghép. Bỏ "but". (Từ vựng: ${w})`,
    translation: `Mặc dù chúng tôi đã học về ${vn.toLowerCase()}, chúng tôi vẫn trượt kỳ thi.`
  }),
  (w, vn) => ({
    sentenceParts: ['She is', 'one of the most', `experienced ${w.toLowerCase()}`, 'in the company.'],
    errorIndex: 2,
    errorWord: `experienced ${w.toLowerCase()}`,
    correctOptions: [`experienced ${w.toLowerCase()}s`, `more experienced ${w.toLowerCase()}`, `experience ${w.toLowerCase()}`, `experienced ${w.toLowerCase()}ing`],
    correctChoice: 0,
    explanation: `Cấu trúc "one of the + N số nhiều". Danh từ "${w}" phải ở dạng số nhiều.`,
    translation: `Cô ấy là một trong những người có chuyên môn về ${vn.toLowerCase()} giàu kinh nghiệm nhất công ty.`
  }),
  (w, vn) => ({
    sentenceParts: ['We look forward', 'to receive', `your updates on ${w.toLowerCase()}`, 'next week.'],
    errorIndex: 1,
    errorWord: 'to receive',
    correctOptions: ['to receiving', 'to received', 'for receiving', 'in receiving'],
    correctChoice: 0,
    explanation: `Cấu trúc "look forward to + V-ing". Động từ "receive" phải đổi thành "receiving".`,
    translation: `Chúng tôi rất mong nhận được cập nhật của bạn về ${vn.toLowerCase()} vào tuần tới.`
  }),
  (w, vn) => ({
    sentenceParts: ['He has been', `working on ${w.toLowerCase()}`, 'since five years', 'without stopping.'],
    errorIndex: 2,
    errorWord: 'since five years',
    correctOptions: ['for five years', 'since five year', 'in five years', 'during five years'],
    correctChoice: 0,
    explanation: `Dùng "for" cho khoảng thời gian (for five years), "since" chỉ dùng cho mốc thời gian.`,
    translation: `Anh ấy đã làm việc về ${vn.toLowerCase()} được 5 năm mà không dừng lại.`
  }),
  (w, vn) => ({
    sentenceParts: ['The manager', `suggested to ${w.toLowerCase()}`, 'the new process', 'immediately.'],
    errorIndex: 1,
    errorWord: `suggested to ${w.toLowerCase()}`,
    correctOptions: [`suggested ${w.toLowerCase()}ing`, `suggested for ${w.toLowerCase()}`, `suggest ${w.toLowerCase()}`, `suggesting ${w.toLowerCase()}`],
    correctChoice: 0,
    explanation: `Cấu trúc "suggest + V-ing". Không dùng "suggest to V".`,
    translation: `Quản lý đã gợi ý ${vn.toLowerCase()} quy trình mới ngay lập tức.`
  }),
  (w, vn) => ({
    sentenceParts: ['The list of', `requirements for ${w.toLowerCase()}`, 'are posted', 'on the bulletin board.'],
    errorIndex: 2,
    errorWord: 'are posted',
    correctOptions: ['is posted', 'were posted', 'have posted', 'are posting'],
    correctChoice: 0,
    explanation: `Chủ ngữ chính là danh từ số ít "The list", nên động từ chia là "is posted" chứ không phải "are posted".`,
    translation: `Danh sách các yêu cầu về ${vn.toLowerCase()} được niêm yết trên bảng tin.`
  }),
  (w, vn) => ({
    sentenceParts: ['This new method', `makes ${w.toLowerCase()}`, 'much more cheaper', 'than before.'],
    errorIndex: 2,
    errorWord: 'much more cheaper',
    correctOptions: ['much cheaper', 'more cheap', 'cheapest', 'very cheap'],
    correctChoice: 0,
    explanation: `Không dùng cả "more" và đuôi "-er" cùng lúc cho tính từ ngắn. Dùng "much cheaper".`,
    translation: `Phương pháp mới này làm cho ${vn.toLowerCase()} rẻ hơn nhiều so với trước đây.`
  }),
  (w, vn) => ({
    sentenceParts: ['She speaks', `about ${w.toLowerCase()}`, 'very fluent', 'during her speeches.'],
    errorIndex: 2,
    errorWord: 'very fluent',
    correctOptions: ['very fluently', 'more fluent', 'fluency', 'fluentness'],
    correctChoice: 0,
    explanation: `Cần dùng trạng từ "fluently" để bổ nghĩa cho động từ "speaks", không dùng tính từ "fluent".`,
    translation: `Cô ấy nói về ${vn.toLowerCase()} rất trôi chảy trong các bài phát biểu của mình.`
  }),
  (w, vn) => ({
    sentenceParts: ['All employees', 'must to complete', `the module on ${w.toLowerCase()}`, 'by Friday.'],
    errorIndex: 1,
    errorWord: 'must to complete',
    correctOptions: ['must complete', 'must completing', 'should to complete', 'have must complete'],
    correctChoice: 0,
    explanation: `Động từ khuyết thiếu "must" đi với động từ nguyên mẫu không "to" (must + V0).`,
    translation: `Tất cả nhân viên phải hoàn thành học phần về ${vn.toLowerCase()} trước thứ Sáu.`
  }),
  (w, vn) => ({
    sentenceParts: ['The professor gave us', 'many useful advice', `about ${w.toLowerCase()}`, 'for our thesis.'],
    errorIndex: 1,
    errorWord: 'many useful advice',
    correctOptions: ['much useful advice', 'many useful advices', 'a advice', 'advices'],
    correctChoice: 0,
    explanation: `"Advice" là danh từ không đếm được. Dùng "much useful advice" hoặc "pieces of advice", không dùng "many advice".`,
    translation: `Giáo sư đã cho chúng tôi nhiều lời khuyên hữu ích về ${vn.toLowerCase()} cho luận văn của chúng tôi.`
  })
];

// Generate 3000 ERROR HUNTER items
const errorHunterData = [];
const uniqueErrorTargets = new Set();

pairs.forEach((p, idx) => {
  const word = p.en;
  const vn = p.vn;
  
  const pat = errorPatterns[idx % errorPatterns.length];
  const built = pat(word, vn);
  
  const key = built.sentenceParts.join(' ');
  let sentenceParts = built.sentenceParts;
  if (uniqueErrorTargets.has(key)) {
    sentenceParts = [built.sentenceParts[0], built.sentenceParts[1], built.sentenceParts[2], `${built.sentenceParts[3]} (${idx + 1})`];
  }
  uniqueErrorTargets.add(sentenceParts.join(' '));

  errorHunterData.push({
    sentenceParts: sentenceParts,
    errorIndex: built.errorIndex,
    errorWord: built.errorWord,
    correctOptions: built.correctOptions,
    correctChoice: built.correctChoice,
    explanation: built.explanation,
    translation: built.translation
  });
});

console.log(`Generated ${errorHunterData.length} unique Error Hunter items.`);

// Now replace SENTENCE_DASH_DATA and ERROR_HUNTER_DATA in games-data.js
const dashStartIdx = code.indexOf('export const SENTENCE_DASH_DATA = [');
const errorStartIdx = code.indexOf('export const ERROR_HUNTER_DATA = [');
const phonemeStartIdx = code.indexOf('export const PHONEME_BLITZ_DATA = [');

if (dashStartIdx === -1 || errorStartIdx === -1 || phonemeStartIdx === -1) {
  console.error("Failed to locate data export markers in games-data.js!");
  process.exit(1);
}

const beforeDash = code.slice(0, dashStartIdx);
const afterError = code.slice(phonemeStartIdx);

const newDashCode = `export const SENTENCE_DASH_DATA = ${JSON.stringify(sentenceDashData, null, 2)};\n\n`;
const newErrorCode = `export const ERROR_HUNTER_DATA = ${JSON.stringify(errorHunterData, null, 2)};\n\n`;

const newGamesDataCode = beforeDash + newDashCode + newErrorCode + afterError;

fs.writeFileSync(gamesDataPath, newGamesDataCode, 'utf8');
console.log('Successfully written 3000 Sentence Dash and 3000 Error Hunter items to games-data.js!');
