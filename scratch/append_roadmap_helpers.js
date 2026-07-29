import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/data/grammar-data.js');
let fileContent = fs.readFileSync(targetPath, 'utf8');

// We will append EXPERT_ROADMAP and helper functions at the end of grammar-data.js
const roadmapCode = `

// ==========================================================================
// EXPERT ROADMAP — Evidence-Based Pedagogical Learning Path (8 Stages)
// ==========================================================================
export const EXPERT_ROADMAP = [
  {
    id: 'stage-1',
    stageNumber: 1,
    title: 'Stage 1: Nền Tảng Căn Bản',
    englishTitle: 'Foundations & Core Sentences',
    subtitle: 'Nắm vững cấu trúc câu, danh từ, đại từ, mạo từ và câu khẳng định/phủ định cơ bản',
    icon: '🌱',
    color: 'emerald',
    badgeClass: 'badge-emerald',
    estimatedHours: '8–10 hrs',
    pedagogyFocus: 'Bloom: Remember & Understand — Nhận diện từ loại & trật tự từ chuẩn trong câu',
    topics: [
      'to-be',
      'beg-present',
      'beg-pronouns',
      'beg-a-the',
      'beg-determiners',
      'beg-word-order',
      'beg-there-it',
      'countable-uncountable',
      'articles',
      'pronouns',
      'there-is-are'
    ]
  },
  {
    id: 'stage-2',
    stageNumber: 2,
    title: 'Stage 2: Diễn Đạt Thời Gian & Hành Động',
    englishTitle: 'Time, Tenses & Routine Actions',
    subtitle: 'Làm chủ các thì cơ bản (Hiện tại, Quá khứ, Tương lai) và sự phối hợp động từ',
    icon: '⏳',
    color: 'indigo',
    badgeClass: 'badge-indigo',
    estimatedHours: '12–15 hrs',
    pedagogyFocus: 'Bloom: Apply — Áp dụng đúng thì khi kể lại thói quen, sự kiện quá khứ và kế hoạch',
    topics: [
      'present-simple',
      'present-continuous',
      'past-simple',
      'future-simple',
      'beg-past',
      'beg-future',
      'beg-verb-forms',
      'beg-aux-verbs',
      'beg-go-get-do',
      'used-to-would'
    ]
  },
  {
    id: 'stage-3',
    stageNumber: 3,
    title: 'Stage 3: Trạng Thái Kéo Dài & Quá Trình',
    englishTitle: 'Aspects, Continuities & Completed Events',
    subtitle: 'Khám phá sự liên kết giữa quá khứ - hiện tại qua các thì Hoàn thành & Tiếp diễn',
    icon: '🔄',
    color: 'violet',
    badgeClass: 'badge-purple',
    estimatedHours: '14–18 hrs',
    pedagogyFocus: 'SLA Nuance: Phân biệt Thời lượng (Duration) vs Kết quả (Completion)',
    topics: [
      'present-perfect',
      'present-perfect-continuous',
      'past-continuous',
      'past-perfect',
      'past-perfect-continuous',
      'future-continuous',
      'future-perfect',
      'future-perfect-continuous',
      'beg-present-perfect',
      'int-present-past',
      'int-present-perfect-past',
      'int-future'
    ]
  },
  {
    id: 'stage-4',
    stageNumber: 4,
    title: 'Stage 4: Ý Định, Thái Độ & Dạng Động Từ',
    englishTitle: 'Modality, Intentions & Verb Complementations',
    subtitle: 'Bày tỏ khả năng, nghĩa vụ, lời khuyên và dạng động từ (-ing vs To-V)',
    icon: '🎯',
    color: 'cyan',
    badgeClass: 'badge-cyan',
    estimatedHours: '15–20 hrs',
    pedagogyFocus: 'Cognitive Chunking: Nhóm động từ theo mẫu cú pháp & sắc thái giả định',
    topics: [
      'modal-verbs-basic',
      'beg-modal-imperative',
      'beg-ing-to',
      'gerunds-infinitives',
      'modals-of-deduction',
      'int-modals',
      'int-ing-to',
      'adv-modals',
      'adv-verb-comp'
    ]
  },
  {
    id: 'stage-5',
    stageNumber: 5,
    title: 'Stage 5: Cấu Trúc Câu Complex & Gián Tiếp',
    englishTitle: 'Sentence Architecture & Passive Voice',
    subtitle: 'Master câu bị động, câu điều kiện, mệnh đề quan hệ và câu tường thuật',
    icon: '⚡',
    color: 'amber',
    badgeClass: 'badge-amber',
    estimatedHours: '18–22 hrs',
    pedagogyFocus: 'Structural Transformation: Chuyển đổi linh hoạt giữa Chủ động, Bị động & Trực/Gián tiếp',
    topics: [
      'beg-passive',
      'beg-questions',
      'beg-reported-speech',
      'conditionals-012',
      'passive-voice',
      'reported-speech',
      'relative-clauses',
      'wish-if-only',
      'int-if-wish',
      'int-passive',
      'int-reported-speech',
      'int-questions-aux',
      'int-relative'
    ]
  },
  {
    id: 'stage-6',
    stageNumber: 6,
    title: 'Stage 6: Tính Từ, Trạng Từ & Cấu Trúc Liên Kết',
    englishTitle: 'Modifiers, Connectors & Prepositions',
    subtitle: 'Nâng cấp khả năng miêu tả, so sánh và kết nối câu bằng giới từ & liên từ',
    icon: '🎨',
    color: 'teal',
    badgeClass: 'badge-teal',
    estimatedHours: '20–25 hrs',
    pedagogyFocus: 'Fluency & Flow: Tối ưu tính mạch lạc (Cohesion) và độ mượt mà khi viết',
    topics: [
      'prepositions',
      'comparatives-superlatives',
      'adjectives-adverbs',
      'possessives-reflexives',
      'question-formation-tags',
      'phrasal-verbs',
      'conjunctions-connectors',
      'beg-adjectives',
      'beg-conjunctions',
      'int-articles-nouns',
      'int-pronouns-det',
      'int-adj-adv',
      'int-conj-prep',
      'int-phrasal-verbs'
    ]
  },
  {
    id: 'stage-7',
    stageNumber: 7,
    title: 'Stage 7: Ngữ Pháp Nâng Cao & Văn Phong Học Thuật',
    englishTitle: 'Advanced Masterclass & Academic Discourse',
    subtitle: 'Chinh phục Đảo ngữ, Câu chẻ, Thức giả định, Báo cáo & Cấu trúc nghệ thuật',
    icon: '🎓',
    color: 'rose',
    badgeClass: 'badge-advanced',
    estimatedHours: '25–30 hrs',
    pedagogyFocus: 'Native Fluency & Rhetoric: Sử dụng cấu trúc viết chính luận, bài luận & báo cáo khoa học',
    topics: [
      'conditionals-3-mixed',
      'inversion',
      'cleft-sentences',
      'subjunctive',
      'advanced-passive',
      'participle-clauses',
      'ellipsis-substitution',
      'emphasis-fronting',
      'complex-noun-phrases',
      'discourse-markers',
      'inverted-conditionals',
      'academic-collocations',
      'punctuation-syntax',
      'adv-tenses',
      'adv-future',
      'adv-linking',
      'adv-reporting',
      'adv-nouns',
      'adv-articles',
      'adv-relative',
      'adv-pronouns',
      'adv-adjectives',
      'adv-adverbial',
      'adv-prepositions',
      'adv-organising'
    ]
  },
  {
    id: 'stage-8',
    stageNumber: 8,
    title: 'Stage 8: TOEIC & Ngữ Cảnh Chuyên Nghiệp',
    englishTitle: 'TOEIC Mastery & Professional English',
    subtitle: 'Tối ưu cho bài thi TOEIC (Part 5 & 6), từ loại, mệnh đề rút gọn và Tiếng Anh thương mại',
    icon: '🎯',
    color: 'rose',
    badgeClass: 'badge-toeic',
    estimatedHours: '20–25 hrs',
    pedagogyFocus: 'Exam Precision & Business Relevance: Phản xạ làm bài thi nhanh và chính xác',
    topics: [
      'irregular-verbs',
      'toeic-sentence-structure',
      'toeic-tenses-overview',
      'parts-of-speech-toeic',
      'toeic-pronouns-possessives',
      'toeic-passive-business',
      'subject-verb-agreement',
      'prepositions-vs-conjunctions',
      'quantifiers-determiners',
      'toeic-to-infinitive-gerund',
      'toeic-relative-clauses',
      'toeic-comparison-structures',
      'reduced-clauses',
      'parallel-structure',
      'subjunctive-business',
      'toeic-inversion-emphasis',
      'toeic-causative-structures',
      'toeic-noun-clauses',
      'toeic-collocations',
      'toeic-word-families',
      'toeic-phrasal-verbs',
      'toeic-verb-patterns',
      'toeic-linking-words',
      'toeic-synonyms-antonyms',
      'toeic-fixed-expressions',
      'toeic-idioms',
      'toeic-proverbs'
    ]
  }
];

export function getRoadmapStages() {
  return EXPERT_ROADMAP;
}

export function getStageById(stageId) {
  return EXPERT_ROADMAP.find(s => s.id === stageId);
}

export function getTopicStageInfo(topicId) {
  for (const stage of EXPERT_ROADMAP) {
    if (stage.topics.includes(topicId)) {
      return stage;
    }
  }
  return null;
}

export function getTopicsForStage(stageId) {
  const stage = getStageById(stageId);
  if (!stage) return [];
  return stage.topics.map(id => getTopicById(id)).filter(Boolean);
}
`;

// Avoid duplicating if already present
if (!fileContent.includes('EXPERT_ROADMAP')) {
  fs.appendFileSync(targetPath, roadmapCode, 'utf8');
  console.log('Appended EXPERT_ROADMAP successfully!');
} else {
  console.log('EXPERT_ROADMAP already present in grammar-data.js');
}
