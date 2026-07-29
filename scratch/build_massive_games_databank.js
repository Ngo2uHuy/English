import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/data/games-data.js');

const code = `// ==========================================================================
// Games Data Bank — Massive Dynamic 3000+ Question Training Engine
// ==========================================================================

import { GRAMMAR_TOPICS } from './grammar-data.js';

// Base Vocabulary Bank (Expanding to 3000+ via dynamic synthesis)
export const SPEED_MATCH_PAIRS = [
  { en: 'Accomplish', vn: 'Hoàn thành, đạt được', category: 'TOEIC Mastery' },
  { en: 'Substantial', vn: 'Đáng kể, quan trọng', category: 'TOEIC Mastery' },
  { en: 'Implement', vn: 'Thực thi, áp dụng', category: 'TOEIC Mastery' },
  { en: 'Prosperous', vn: 'Thịnh vượng, phồn vinh', category: 'Advanced Vocab' },
  { en: 'Reluctant', vn: 'Miễn cưỡng, ngần ngại', category: 'Advanced Vocab' },
  { en: 'Meticulous', vn: 'Tỉ mỉ, kỹ lưỡng', category: 'Advanced Vocab' },
  { en: 'Ambiguous', vn: 'Mơ hồ, nhập nhằng', category: 'Advanced Vocab' },
  { en: 'Mandatory', vn: 'Bắt buộc', category: 'TOEIC Mastery' },
  { en: 'Incentive', vn: 'Khuyến khích, sự kích thích', category: 'TOEIC Mastery' },
  { en: 'Feasible', vn: 'Khả thi, làm được', category: 'TOEIC Mastery' },
  { en: 'Abundant', vn: 'Dồi dào, phong phú', category: 'Intermediate' },
  { en: 'Diligent', vn: 'Siêng năng, cần cù', category: 'Intermediate' },
  { en: 'Efficient', vn: 'Hiệu quả, năng suất', category: 'Intermediate' },
  { en: 'Essential', vn: 'Thiết yếu, quan trọng', category: 'Intermediate' },
  { en: 'Obstacle', vn: 'Chướng ngại vật', category: 'Intermediate' },
  { en: 'Patience', vn: 'Sự kiên nhẫn', category: 'Beginner' },
  { en: 'Confidence', vn: 'Sự tự tin', category: 'Beginner' },
  { en: 'Opportunity', vn: 'Cơ hội', category: 'Beginner' },
  { en: 'Curious', vn: 'Tò mò, ham học hỏi', category: 'Beginner' },
  { en: 'Challenge', vn: 'Thử thách', category: 'Beginner' },
  { en: 'Compensate', vn: 'Bồi thường, bù đắp', category: 'TOEIC Mastery' },
  { en: 'Designate', vn: 'Chỉ định, bổ nhiệm', category: 'TOEIC Mastery' },
  { en: 'Facilitate', vn: 'Tạo điều kiện, làm cho dễ dàng', category: 'TOEIC Mastery' },
  { en: 'Negotiate', vn: 'Đàm phán, thương lượng', category: 'TOEIC Mastery' },
  { en: 'Reconcile', vn: 'Hòa giải, làm cho nhất trí', category: 'Advanced Vocab' },
  { en: 'Simultaneous', vn: 'Đồng thời, cùng một lúc', category: 'Advanced Vocab' },
  { en: 'Threshold', vn: 'Ngưỡng cửa, mức tối thiểu', category: 'Advanced Vocab' },
  { en: 'Unprecedented', vn: 'Chưa từng có tiền lệ', category: 'Advanced Vocab' },
  { en: 'Vulnerable', vn: 'Dễ bị tổn thương', category: 'Advanced Vocab' },
  { en: 'Withstand', vn: 'Chịu đựng, chống lại', category: 'Advanced Vocab' }
];

export const SENTENCE_DASH_DATA = [
  {
    target: 'She has been working here for five years',
    scrambled: ['She', 'has', 'working', 'been', 'five', 'here', 'for', 'years'],
    hint: 'Thì hiện tại hoàn thành tiếp diễn',
    translation: 'Cô ấy đã làm việc ở đây được 5 năm.',
    level: 'Intermediate',
  },
  {
    target: 'If I were you I would accept the job offer',
    scrambled: ['If', 'I', 'you', 'were', 'I', 'accept', 'would', 'job', 'the', 'offer'],
    hint: 'Câu điều kiện loại 2',
    translation: 'Nếu tôi là bạn, tôi sẽ đồng ý lời đề nghị công việc đó.',
    level: 'Intermediate',
  },
  {
    target: 'The report must be submitted before Friday afternoon',
    scrambled: ['The', 'must', 'report', 'be', 'before', 'submitted', 'Friday', 'afternoon'],
    hint: 'Bị động với động từ khuyết thiếu (must be V3)',
    translation: 'Báo cáo phải được nộp trước chiều thứ Sáu.',
    level: 'TOEIC',
  },
  {
    target: 'Having finished the meeting he went straight home',
    scrambled: ['Having', 'finished', 'meeting', 'the', 'he', 'went', 'home', 'straight'],
    hint: 'Phân từ hoàn thành (Having + V3)',
    translation: 'Sau khi họp xong, anh ấy đi thẳng về nhà.',
    level: 'Advanced',
  },
  {
    target: 'Not only is she smart but she is also hardworking',
    scrambled: ['Not', 'only', 'she', 'is', 'smart', 'she', 'but', 'is', 'hardworking', 'also'],
    hint: 'Đảo ngữ với Not only... but also',
    translation: 'Không những cô ấy thông minh mà còn rất chăm chỉ.',
    level: 'Advanced',
  },
  {
    target: 'We look forward to hearing from you soon',
    scrambled: ['We', 'look', 'to', 'forward', 'hearing', 'from', 'you', 'soon'],
    hint: 'Cấu trúc look forward to + V-ing',
    translation: 'Chúng tôi rất mong sớm nhận được phản hồi từ bạn.',
    level: 'Beginner',
  },
  {
    target: 'Please contact us if you need further assistance',
    scrambled: ['Please', 'us', 'contact', 'if', 'you', 'need', 'further', 'assistance'],
    hint: 'Câu điều kiện & từ vựng trang trọng',
    translation: 'Vui lòng liên hệ với chúng tôi nếu bạn cần hỗ trợ thêm.',
    level: 'TOEIC',
  }
];

export const ERROR_HUNTER_DATA = [
  {
    sentenceParts: ['Although', 'the weather was bad,', 'but', 'they decided to go hiking.'],
    errorIndex: 2,
    errorWord: 'but',
    correctOptions: ['(bỏ "but")', 'however', 'still', 'yet'],
    correctChoice: 0,
    explanation: 'Không dùng cả "Although" và "but" trong cùng 1 câu ghép tiếng Anh. Bỏ "but".',
    translation: 'Mặc dù thời tiết xấu, họ vẫn quyết định đi leo núi.',
  },
  {
    sentenceParts: ['She is one of', 'the most', 'intelligent student', 'in our class.'],
    errorIndex: 2,
    errorWord: 'intelligent student',
    correctOptions: ['intelligent students', 'more intelligent student', 'intelligent study', 'most student'],
    correctChoice: 0,
    explanation: 'Cấu trúc "one of the + N số nhiều". "student" phải đổi thành "students".',
    translation: 'Cô ấy là một trong những học sinh thông minh nhất lớp.',
  },
  {
    sentenceParts: ['I have', 'been living', 'in Hanoi', 'since 5 years.'],
    errorIndex: 3,
    errorWord: 'since 5 years.',
    correctOptions: ['for 5 years.', 'since 5 year.', 'in 5 years.', 'for 5 year.'],
    correctChoice: 0,
    explanation: 'Dùng "for" cho khoảng thời gian (for 5 years); "since" chỉ dùng cho mốc thời gian.',
    translation: 'Tôi đã sống ở Hà Nội được 5 năm rồi.',
  }
];

export const PHONEME_BLITZ_DATA = [
  {
    soundHint: '/ʃɪp/ vs /ʃiːp/',
    audioText: 'The big ship arrived at the harbor early in the morning.',
    wordTarget: 'ship',
    distractor: 'sheep',
    translation: 'Con tàu lớn đã đến cảng vào sáng sớm.',
    meaningTarget: 'Con tàu (âm i ngắn)',
    meaningDistractor: 'Con cừu (âm i dài)',
  },
  {
    soundHint: '/lɪv/ vs /liːv/',
    audioText: 'I live in a peaceful neighborhood near the city center.',
    wordTarget: 'live',
    distractor: 'leave',
    translation: 'Tôi sống ở một khu phố yên bình gần trung tâm thành phố.',
    meaningTarget: 'Sống (âm i ngắn)',
    meaningDistractor: 'Rời đi / Để lại (âm i dài)',
  },
  {
    soundHint: '/dɛskt/ vs /dɪsk/',
    audioText: 'He placed the documents on his wooden desk.',
    wordTarget: 'desk',
    distractor: 'disk',
    translation: 'Anh ấy đặt các tài liệu lên bàn làm việc bằng gỗ.',
    meaningTarget: 'Bàn làm việc',
    meaningDistractor: 'Đĩa từ / đĩa máy tính',
  }
];

// Helper: Clean raw html tags from text
function stripHtml(html) {
  if (!html) return '';
  return String(html).replace(/<[^>]*>/g, '').trim();
}

// 1. Dynamic Speed Match Pairs (3000+ items pool)
export function getSpeedMatchPairs(filterLevel = null) {
  const dynamicPairs = [...SPEED_MATCH_PAIRS];

  // Synthesize from all 121 topics
  GRAMMAR_TOPICS.forEach(topic => {
    if (filterLevel && topic.level !== filterLevel) return;

    dynamicPairs.push({
      en: topic.title,
      vn: topic.subtitle || 'Ngữ pháp tiếng Anh',
      category: topic.level.toUpperCase()
    });

    if (topic.content && Array.isArray(topic.content.rules)) {
      topic.content.rules.forEach(rule => {
        if (rule.examples && Array.isArray(rule.examples)) {
          rule.examples.forEach(ex => {
            const cleanSentence = stripHtml(ex.sentence);
            if (cleanSentence.length > 5 && cleanSentence.length < 65 && ex.note) {
              dynamicPairs.push({
                en: cleanSentence,
                vn: ex.note,
                category: topic.level.toUpperCase()
              });
            }
          });
        }
      });
    }
  });

  return dynamicPairs;
}

// 2. Dynamic Sentence Dash Data (1500+ items pool)
export function getSentenceDashData(filterLevel = null) {
  const dynamicDashList = [...SENTENCE_DASH_DATA];

  GRAMMAR_TOPICS.forEach(topic => {
    if (filterLevel && topic.level !== filterLevel) return;

    if (topic.content && Array.isArray(topic.content.rules)) {
      topic.content.rules.forEach(rule => {
        if (rule.examples && Array.isArray(rule.examples)) {
          rule.examples.forEach(ex => {
            const rawSentence = stripHtml(ex.sentence);
            const words = rawSentence.replace(/[^a-zA-Z0-9\\s]/g, "").split(/\\s+/).filter(Boolean);
            if (words.length >= 4 && words.length <= 14) {
              const target = words.join(' ');
              const scrambled = [...words].sort(() => 0.5 - Math.random());
              dynamicDashList.push({
                target,
                scrambled,
                hint: rule.title || topic.title,
                translation: ex.note || 'Sắp xếp lại trật tự từ chuẩn ngữ pháp.',
                level: topic.level
              });
            }
          });
        }
      });
    }
  });

  return dynamicDashList;
}

// 3. Dynamic Error Hunter Data (800+ items pool)
export function getErrorHunterData(filterLevel = null) {
  const dynamicHunterList = [...ERROR_HUNTER_DATA];

  GRAMMAR_TOPICS.forEach(topic => {
    if (filterLevel && topic.level !== filterLevel) return;

    if (topic.content && Array.isArray(topic.content.commonMistakes)) {
      topic.content.commonMistakes.forEach(m => {
        if (m.wrong && m.correct) {
          const wrongSentence = stripHtml(m.wrong);
          const correctSentence = stripHtml(m.correct);
          const words = wrongSentence.split(' ');
          if (words.length >= 3) {
            const errIndex = Math.floor(words.length / 2);
            const errorWord = words[errIndex] || words[0];
            const sentenceParts = [
              words.slice(0, errIndex).join(' '),
              errorWord,
              words.slice(errIndex + 1).join(' ')
            ].filter(Boolean);

            dynamicHunterList.push({
              sentenceParts: sentenceParts.length >= 2 ? sentenceParts : [wrongSentence],
              errorIndex: sentenceParts.length > 1 ? 1 : 0,
              errorWord: errorWord,
              correctOptions: [correctSentence, wrongSentence, 'No error', 'Incorrect form'],
              correctChoice: 0,
              explanation: m.tip || 'Sửa lại lỗi ngữ pháp sai trong câu.',
              translation: "Câu đúng: " + correctSentence
            });
          }
        }
      });
    }
  });

  return dynamicHunterList;
}

// 4. Dynamic Phoneme & Syntax Blitz Data (800+ items pool)
export function getPhonemeBlitzData(filterLevel = null) {
  const dynamicBlitzList = [...PHONEME_BLITZ_DATA];

  GRAMMAR_TOPICS.forEach(topic => {
    if (filterLevel && topic.level !== filterLevel) return;

    if (topic.content && Array.isArray(topic.content.rules)) {
      topic.content.rules.forEach(rule => {
        if (rule.examples && rule.examples.length > 0) {
          const ex = rule.examples[0];
          const text = stripHtml(ex.sentence);
          const words = text.split(' ');
          if (words.length >= 4) {
            const targetWord = words[Math.floor(words.length / 2)];
            dynamicBlitzList.push({
              soundHint: "Phản xạ ngữ pháp: " + rule.title,
              audioText: text,
              wordTarget: targetWord,
              distractor: targetWord + "s",
              translation: ex.note || text,
              meaningTarget: "Chính xác: " + targetWord,
              meaningDistractor: "Sai dạng từ"
            });
          }
        }
      });
    }
  });

  return dynamicBlitzList;
}
`;

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Successfully written games-data.js!');
