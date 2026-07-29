const fs = require('fs');
const path = require('path');

const grammarFilePath = path.join(__dirname, '../src/data/grammar-data.js');
let fileContent = fs.readFileSync(grammarFilePath, 'utf8');

// Find start of beg-present
const begMarker = "id: 'beg-present'";
const begIndex = fileContent.indexOf(begMarker);

if (begIndex === -1) {
  console.error("Could not find beg-present marker!");
  process.exit(1);
}

// Backtrack to find the start of the object `{` before `id: 'beg-present'`
let objStartIndex = fileContent.lastIndexOf('{', begIndex);

// Find helper functions marker
const helperMarker = "// Helper functions";
const helperIndex = fileContent.indexOf(helperMarker);

// Find the last `];` before helper functions
let arrayEndIndex = fileContent.lastIndexOf('];', helperIndex);

console.log("objStartIndex:", objStartIndex);
console.log("arrayEndIndex:", arrayEndIndex);

// Prepare full detailed 48 topics data
const expandedTopics = [
  // 1. beg-present (9 bài)
  {
    id: 'beg-present',
    level: 'beginner',
    title: 'Present Tenses & Verb Usage',
    subtitle: '9 bài về các thì hiện tại với nội dung chủ yếu xoay quanh động từ sử dụng',
    icon: '🌱',
    order: 101,
    murphyUnit: 'Units 1–9',
    content: {
      overview: 'Bộ 9 bài học toàn diện về các thì hiện tại (Present Simple & Present Continuous), cách dùng động từ trạng thái (stative verbs), Have/Have got, và tần suất hành động.',
      rules: [
        {
          title: 'Bài 1: Present Continuous — Hành động đang diễn ra (am/is/are + V-ing)',
          explanation: 'Dùng để diễn tả hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.',
          table: {
            headers: ['Chủ ngữ', 'Khẳng định', 'Phủ định', 'Nghi vấn'],
            rows: [
              ['I', 'I am working', 'I am not working', 'Am I working?'],
              ['He / She / It', 'She is reading', 'She is not reading', 'Is she reading?'],
              ['We / You / They', 'They are playing', 'They are not playing', 'Are they playing?']
            ]
          },
          examples: [
            { sentence: 'Please be quiet. I <em>am working</em>.', note: 'Hành động đang diễn ra' },
            { sentence: 'Look! It <em>is snowing</em> outside.', note: 'Thời điểm hiện tại' },
            { sentence: 'They <em>are studying</em> for their exams this week.', note: 'Xung quanh thời điểm hiện tại' }
          ]
        },
        {
          title: 'Bài 2: Present Simple — Thói quen & Chân lý (V1 / V-s/es)',
          explanation: 'Dùng cho các hành động lặp đi lặp lại, sự thật hiển nhiên, thói quen hàng ngày.',
          table: {
            headers: ['Chủ ngữ', 'Khẳng định', 'Phủ định', 'Nghi vấn'],
            rows: [
              ['I / You / We / They', 'I work', 'I don\'t work', 'Do you work?'],
              ['He / She / It', 'He works', 'He doesn\'t work', 'Does he work?']
            ]
          },
          examples: [
            { sentence: 'The sun <em>rises</em> in the east.', note: 'Chân lý hiển nhiên' },
            { sentence: 'I <em>drive</em> to work every morning.', note: 'Thói quen hàng ngày' },
            { sentence: 'She <em>doesn\'t eat</em> meat.', note: 'Sở thích / Trạng thái cố định' }
          ]
        },
        {
          title: 'Bài 3: Present Continuous vs Present Simple (So sánh bản chất)',
          explanation: 'Present Continuous dùng cho hành động tạm thời (temporary); Present Simple dùng cho tình trạng lâu dài/cố định (permanent).',
          examples: [
            { sentence: 'I <em>live</em> in Hanoi.', note: 'Cố định, lâu dài (Simple)' },
            { sentence: 'I <em>am living</em> with a friend until I find an apartment.', note: 'Tạm thời (Continuous)' },
            { sentence: 'It <em>always rains</em> in November.', note: 'Thời tiết thường kỳ' }
          ]
        },
        {
          title: 'Bài 4: Stative Verbs — Động từ chỉ trạng thái không dùng thì tiếp diễn',
          explanation: 'Các động từ chỉ cảm xúc, nhận thức, sở hữu (like, love, know, understand, believe, want, need, belong) KHÔNG chia tiếp diễn.',
          examples: [
            { sentence: '❌ I am wanting a glass of water.', note: 'Sai' },
            { sentence: '✅ I <em>want</em> a glass of water.', note: 'Đúng (State verb)' },
            { sentence: 'Do you <em>understand</em> what I mean?', note: 'Nhận thức (State verb)' }
          ]
        },
        {
          title: 'Bài 5: Động từ đa nghĩa: Think, Have, See (State vs Dynamic)',
          explanation: 'Một số động từ vừa là trạng thái (Simple) vừa là hành động (Continuous) tùy nghĩa.',
          table: {
            headers: ['Động từ', 'Thì Hiện tại đơn (State)', 'Thì Hiện tại tiếp diễn (Dynamic)'],
            rows: [
              ['think', 'I think he is smart (bản chất/ý kiến)', 'I am thinking about the plan (đang suy nghĩ)'],
              ['have', 'I have a car (sở hữu)', 'I am having breakfast (đang ăn)'],
              ['see', 'I see a bird (thấy bằng mắt)', 'I am seeing the doctor tomorrow (gặp/khám)']
            ]
          },
          examples: [
            { sentence: 'What do you <em>think</em> of this book?', note: 'Hỏi ý kiến' },
            { sentence: 'Quiet please! I <em>am thinking</em>.', note: 'Đang suy nghĩ trong đầu' }
          ]
        },
        {
          title: 'Bài 6: Have & Have got — Cách diễn đạt sở hữu',
          explanation: 'Cả "have" và "have got" đều dùng để chỉ sở hữu, quan hệ, bệnh tật trong hiện tại.',
          examples: [
            { sentence: 'I <em>have</em> a new phone. = I <em>have got</em> a new phone.', note: 'Sở hữu' },
            { sentence: 'She <em>doesn\'t have</em> a car. = She <em>hasn\'t got</em> a car.', note: 'Phủ định' },
            { sentence: 'Do you <em>have</em> a headache? = <em>Have</em> you <em>got</em> a headache?', note: 'Nghi vấn' }
          ]
        },
        {
          title: 'Bài 7: Present Continuous chỉ sự thay đổi & phát triển',
          explanation: 'Dùng Present Continuous với các động từ get, change, become, increase, grow để nói về sự biến đổi.',
          examples: [
            { sentence: 'Is your English <em>getting</em> better?', note: 'Đang tiến bộ' },
            { sentence: 'The population of the world <em>is increasing</em> very fast.', note: 'Đang gia tăng' }
          ]
        },
        {
          title: 'Bài 8: Trạng từ chỉ tần suất với Present Simple',
          explanation: 'Các trạng từ (always, usually, often, sometimes, rarely, never) đứng TRƯỚC động từ thường và SAU động từ To Be.',
          examples: [
            { sentence: 'I <em>always get up</em> early on weekdays.', note: 'Trước V thường' },
            { sentence: 'He <em>is usually</em> late for meetings.', note: 'Sau To Be' }
          ]
        },
        {
          title: 'Bài 9: Present Continuous dùng với "Always" chỉ sự phàn nàn',
          explanation: 'Cấu trúc "Subject + is/are + always + V-ing" diễn tả hành động lặp đi lặp lại gây khó chịu.',
          examples: [
            { sentence: 'You <em>are always losing</em> your keys!', note: 'Phàn nàn về sự lơ đễnh' },
            { sentence: 'He <em>is always complaining</em> about his salary.', note: 'Thói quen gây bực bội' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I working right now.', correct: 'I am working right now.', tip: 'Không được quên động từ To Be trong thì tiếp diễn.' },
        { wrong: 'She like ice cream.', correct: 'She likes ice cream.', tip: 'Thêm -s/-es cho chủ ngữ số ít ở thì Hiện tại đơn.' },
        { wrong: 'I am understanding this rule.', correct: 'I understand this rule.', tip: '"Understand" là động từ trạng thái, không chia -ing.' }
      ]
    }
  },

  // 2. beg-past (5 bài)
  {
    id: 'beg-past',
    level: 'beginner',
    title: 'Past Tenses & Verb Patterns',
    subtitle: '5 bài về thì quá khứ cũng xoay quanh nội dung động từ',
    icon: '🌱',
    order: 102,
    murphyUnit: 'Units 10–14',
    content: {
      overview: 'Chuyên đề 5 bài về Quá khứ đơn (Past Simple), Quá khứ tiếp diễn (Past Continuous), sự kết hợp giữa hai thì và cấu trúc Used to.',
      rules: [
        {
          title: 'Bài 1: Past Simple — Động từ có quy tắc (-ed) và bất quy tắc',
          explanation: 'Dùng cho hành động đã hoàn thành và chấm dứt hoàn toàn trong quá khứ.',
          table: {
            headers: ['Loại động từ', 'Nguyên thể (V1)', 'Quá khứ (V2)'],
            rows: [
              ['Có quy tắc', 'work / play / stop', 'worked / played / stopped'],
              ['Bất quy tắc', 'go / see / buy / write', 'went / saw / bought / wrote']
            ]
          },
          examples: [
            { sentence: 'I <em>visited</em> my grandparents yesterday.', note: 'Có quy tắc (-ed)' },
            { sentence: 'She <em>bought</em> a new coat last night.', note: 'Bất quy tắc (buy -> bought)' },
            { sentence: 'Did you <em>enjoy</em> the party?', note: 'Nghi vấn dùng Did + V1' }
          ]
        },
        {
          title: 'Bài 2: Past Continuous — Hành động đang diễn ra trong quá khứ',
          explanation: 'Cấu trúc: Was / Were + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong quá khứ.',
          examples: [
            { sentence: 'At 8 PM last night, I <em>was watching</em> TV.', note: 'Mốc thời gian cụ thể' },
            { sentence: 'They <em>were sleeping</em> when the phone rang.', note: 'Hành động nền' }
          ]
        },
        {
          title: 'Bài 3: Past Simple vs Past Continuous (When & While)',
          explanation: 'Hành động đang diễn ra chia Past Continuous (với While); hành động xen vào chia Past Simple (với When).',
          examples: [
            { sentence: 'I <em>was walking</em> home when it <em>started</em> to rain.', note: 'When + Past Simple xen vào' },
            { sentence: 'While she <em>was cooking</em>, he <em>was reading</em>.', note: 'Hai hành động song song' }
          ]
        },
        {
          title: 'Bài 4: Used to + V1 — Thói quen và trạng thái trong quá khứ',
          explanation: 'Diễn tả thói quen hoặc trạng thái kéo dài trong quá khứ nhưng nay không còn nữa.',
          examples: [
            { sentence: 'I <em>used to play</em> tennis a lot, but I stopped.', note: 'Thói quen cũ' },
            { sentence: 'Did you <em>use to live</em> in Paris?', note: 'Nghi vấn (use to)' },
            { sentence: 'She <em>didn\'t use to like</em> vegetables.', note: 'Phủ định' }
          ]
        },
        {
          title: 'Bài 5: Động từ trạng thái trong quá khứ & Từ chỉ thời gian',
          explanation: 'Các từ chỉ thời gian quá khứ: yesterday, ago, last (week/month), in 2010. Không chia tiếp diễn với state verbs trong quá khứ.',
          examples: [
            { sentence: 'I <em>knew</em> the answer 5 minutes ago.', note: 'Knew (state verb, past simple)' },
            { sentence: 'Two years <em>ago</em>, we lived in Tokyo.', note: 'Ago đứng sau thời gian' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I didn\'t went to school yesterday.', correct: 'I didn\'t go to school yesterday.', tip: 'Sau didn\'t dùng động từ nguyên thể.' },
        { wrong: 'I was use to live here.', correct: 'I used to live here.', tip: 'Phân biệt "used to V" (đã từng) và "be used to V-ing".' }
      ]
    }
  },

  // 3. beg-present-perfect (6 bài)
  {
    id: 'beg-present-perfect',
    level: 'beginner',
    title: 'Present Perfect',
    subtitle: '6 bài về thì hiện tại hoàn thành',
    icon: '🌱',
    order: 103,
    murphyUnit: 'Units 15–20',
    content: {
      overview: '6 bài chi tiết về Present Perfect (Have/Has + V3/ed): trải nghiệm sống, kết quả hiện tại, vừa mới/đã/chưa, khoảng thời gian (for/since), và so sánh với Quá khứ đơn.',
      rules: [
        {
          title: 'Bài 1: Present Perfect 1 — Trải nghiệm sống (Ever / Never)',
          explanation: 'Nói về trải nghiệm từ quá khứ đến nay mà không ghi rõ thời gian cụ thể.',
          examples: [
            { sentence: 'Have you <em>ever been</em> to Paris?', note: 'Hỏi trải nghiệm (ever)' },
            { sentence: 'I have <em>never eaten</em> sushi before.', note: 'Chưa từng (never)' }
          ]
        },
        {
          title: 'Bài 2: Present Perfect 2 — Just, Already, Yet',
          explanation: 'Just (vừa mới), Already (đã... rồi - sớm hơn dự kiến), Yet (chưa - dùng trong phủ định & câu hỏi).',
          examples: [
            { sentence: 'I have <em>just finished</em> my lunch.', note: 'Just = a short time ago' },
            { sentence: 'Don\'t forget to pay the bill! — I\'ve <em>already paid</em> it.', note: 'Already' },
            { sentence: 'Has it stopped raining <em>yet</em>?', note: 'Yet ở cuối câu' }
          ]
        },
        {
          title: 'Bài 3: Present Perfect 3 — For & Since (Khoảng thời gian & Mốc thời gian)',
          explanation: 'For + khoảng thời gian (for 5 years, for 2 hours); Since + mốc thời gian (since 2018, since Monday).',
          examples: [
            { sentence: 'She has lived here <em>for 10 years</em>.', note: 'Khoảng thời gian' },
            { sentence: 'They have been friends <em>since high school</em>.', note: 'Mốc thời gian' }
          ]
        },
        {
          title: 'Bài 4: Present Perfect Continuous — Quá khứ hoàn thành tiếp diễn',
          explanation: 'Have/Has been + V-ing: Nhấn mạnh quá trình/sự kéo dài liên tục của hành động kéo dài đến hiện tại.',
          examples: [
            { sentence: 'It <em>has been raining</em> all morning.', note: 'Vẫn đang mưa hoặc vừa dừng' },
            { sentence: 'How long have you <em>been waiting</em>?', note: 'Hỏi thời lượng' }
          ]
        },
        {
          title: 'Bài 5: Present Perfect Simple vs Continuous (How much vs How long)',
          explanation: 'Simple nhấn mạnh kết quả/số lượng (How many/much); Continuous nhấn mạnh quá trình/thời lượng (How long).',
          examples: [
            { sentence: 'I have <em>written 3 letters</em> today.', note: 'Kết quả/Số lượng (Simple)' },
            { sentence: 'I have <em>been writing</em> letters all morning.', note: 'Quá trình (Continuous)' }
          ]
        },
        {
          title: 'Bài 6: Present Perfect vs Past Simple (Thời gian mở vs Thời gian xác định)',
          explanation: 'Present Perfect dùng khi thời gian chưa kết thúc (today, this week); Past Simple dùng khi thời gian đã kết thúc (yesterday, in 2020).',
          examples: [
            { sentence: 'I <em>lost</em> my key yesterday.', note: 'Thời gian đã xong (Past Simple)' },
            { sentence: 'I <em>have lost</em> my key. I can\'t enter.', note: 'Kết quả ảnh hưởng hiện tại (Present Perfect)' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I have seen him yesterday.', correct: 'I saw him yesterday.', tip: 'Có "yesterday" (thời gian quá khứ xác định) phải chia Past Simple.' },
        { wrong: 'She has lived here since 5 years.', correct: 'She has lived here for 5 years.', tip: 'Dùng "for" với khoảng thời gian.' }
      ]
    }
  },

  // 4. beg-passive (2 bài)
  {
    id: 'beg-passive',
    level: 'beginner',
    title: 'Passive',
    subtitle: '2 bài về động từ tobe bị động',
    icon: '🌱',
    order: 104,
    murphyUnit: 'Units 21–22',
    content: {
      overview: '2 bài về Câu bị động cơ bản trong hiện tại và quá khứ đơn (am/is/are + V3 & was/were + V3).',
      rules: [
        {
          title: 'Bài 1: Present Simple Passive (is / am / are + V3/ed)',
          explanation: 'Dùng khi đối tượng nhận hành động quan trọng hơn người thực hiện hành động.',
          examples: [
            { sentence: 'This house <em>is cleaned</em> every day.', note: 'Hiện tại bị động' },
            { sentence: 'Butter <em>is made</em> from milk.', note: 'Sự thật/Quy trình' }
          ]
        },
        {
          title: 'Bài 2: Past Simple Passive (was / were + V3/ed) & Tác nhân By',
          explanation: 'Cấu trúc bị động ở quá khứ. Dùng "by + tân ngữ" để nêu người/vật thực hiện hành động.',
          examples: [
            { sentence: 'The Mona Lisa <em>was painted</em> by Leonardo da Vinci.', note: 'Tác nhân By' },
            { sentence: 'Many houses <em>were destroyed</em> by the storm.', note: 'Quá khứ bị động' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The car was steal yesterday.', correct: 'The car was stolen yesterday.', tip: 'Động từ trong câu bị động luôn chia ở dạng V3/Past Participle.' }
      ]
    }
  },

  // 5. beg-verb-forms (2 bài)
  {
    id: 'beg-verb-forms',
    level: 'beginner',
    title: 'Verb forms',
    subtitle: '2 bài về các dạng từ trong hiện tại, quá khứ đến tần suất',
    icon: '🌱',
    order: 105,
    murphyUnit: 'Units 23–24',
    content: {
      overview: '2 bài tổng hợp về các dạng biến đổi của động từ (V1, V2, V3, V-ing) và vị trí động từ trong câu.',
      rules: [
        {
          title: 'Bài 1: 4 Dạng cơ bản của Động từ (Base, Past, Participle, -ing)',
          explanation: 'Nắm vững 4 dạng: V1 (nguyên thể), V2 (quá khứ), V3 (quá khứ phân từ), V-ing (hiện tại phân từ).',
          table: {
            headers: ['V1 (Base)', 'V2 (Past Simple)', 'V3 (Past Participle)', 'V-ing (Present Participle)'],
            rows: [
              ['do', 'did', 'done', 'doing'],
              ['see', 'saw', 'seen', 'seeing'],
              ['make', 'made', 'made', 'making']
            ]
          },
          examples: [
            { sentence: 'I <em>see</em> him every day.', note: 'V1' },
            { sentence: 'I <em>saw</em> him yesterday.', note: 'V2' },
            { sentence: 'I have <em>seen</em> him twice.', note: 'V3' }
          ]
        },
        {
          title: 'Bài 2: Động từ đi kèm Trợ động từ & Động từ khuyết thiếu',
          explanation: 'Động từ theo sau do/does/did/will/can/must luôn ở dạng Nguyên thể không "to" (Bare Infinitive).',
          examples: [
            { sentence: 'She <em>can speak</em> French.', note: 'Can + V1' },
            { sentence: 'Did you <em>go</em> out last night?', note: 'Did + V1' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'He can speaks English.', correct: 'He can speak English.', tip: 'Sau trợ động từ khuyết thiếu, động từ giữ nguyên dạng.' }
      ]
    }
  },

  // 6. beg-future (4 bài)
  {
    id: 'beg-future',
    level: 'beginner',
    title: 'Future',
    subtitle: '4 bài về thì tương lai với cách dùng trợ động từ',
    icon: '🌱',
    order: 106,
    murphyUnit: 'Units 25–28',
    content: {
      overview: '4 bài về các cách diễn đạt tương lai trong tiếng Anh: Present Continuous cho lịch trình cá nhân, Be going to cho dự định & bằng chứng, Will cho quyết định bộc phát & Shall.',
      rules: [
        {
          title: 'Bài 1: Present Continuous chỉ tương lai (Arrangements)',
          explanation: 'Dùng Present Continuous cho các kế hoạch đã sắp xếp lịch hẹn cụ thể với người khác.',
          examples: [
            { sentence: 'I <em>am meeting</em> Peter at 3 PM tomorrow.', note: 'Lịch hẹn đã chốt' },
            { sentence: 'We <em>are flying</em> to Paris next Monday.', note: 'Đã mua vé' }
          ]
        },
        {
          title: 'Bài 2: Be Going To — Dự định & Dự đoán có bằng chứng',
          explanation: 'Dùng "be going to + V1" khi đã có ý định từ trước hoặc có dấu hiệu/bằng chứng rõ ràng ở hiện tại.',
          examples: [
            { sentence: 'I <em>am going to buy</em> a new laptop next month.', note: 'Ý định cá nhân' },
            { sentence: 'Look at those dark clouds! It <em>is going to rain</em>.', note: 'Bằng chứng hiện tại' }
          ]
        },
        {
          title: 'Bài 3: Will / Shall 1 — Quyết định tức thì, Lời hứa, Lời đề nghị',
          explanation: 'Dùng "Will + V1" cho quyết định đưa ra ngay lúc nói; "Shall I/we...?" cho lời đề nghị giúp đỡ.',
          examples: [
            { sentence: 'What would you like to drink? — I <em>will have</em> an orange juice.', note: 'Quyết định bộc phát' },
            { sentence: '<em>Shall I open</em> the window for you?', note: 'Lời đề nghị trợ giúp' }
          ]
        },
        {
          title: 'Bài 4: Will vs Be Going To (So sánh toàn diện)',
          explanation: 'Will = chưa lên kế hoạch trước / dự đoán chủ quan; Be going to = đã có dự định / có bằng chứng.',
          examples: [
            { sentence: 'Phone ringing: "I <em>will answer</em> it!"', note: 'Will (tức thì)' },
            { sentence: 'Why are you holding a bucket? — I <em>am going to wash</em> the car.', note: 'Going to (ý định có sẵn)' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I will to call you later.', correct: 'I will call you later.', tip: 'Sau "will" dùng động từ nguyên thể không "to".' }
      ]
    }
  },

  // 7. beg-modal-imperative (8 bài)
  {
    id: 'beg-modal-imperative',
    level: 'beginner',
    title: 'Modal, imperative',
    subtitle: '8 bài về các động từ khuyết thiếu',
    icon: '🌱',
    order: 107,
    murphyUnit: 'Units 29–36',
    content: {
      overview: '8 bài chi tiết về các động từ khuyết thiếu cơ bản (Can, Could, Must, Should, May, Might, Needn\'t) và Câu mệnh lệnh (Imperatives).',
      rules: [
        {
          title: 'Bài 1: Can & Could — Khả năng & Xin phép',
          explanation: 'Can = khả năng ở hiện tại; Could = khả năng trong quá khứ hoặc yêu cầu lịch sự.',
          examples: [
            { sentence: 'I <em>can swim</em> fast.', note: 'Khả năng hiện tại' },
            { sentence: 'When I was young, I <em>could run</em> 10 km.', note: 'Khả năng quá khứ' },
            { sentence: '<em>Could you</em> open the door, please?', note: 'Yêu cầu lịch sự' }
          ]
        },
        {
          title: 'Bài 2: Must & Mustn\'t — Bắt buộc & Cấm đoán',
          explanation: 'Must = bắt buộc phải làm; Mustn\'t = tuyệt đối không được làm (cấm đoán).',
          examples: [
            { sentence: 'You <em>must wear</em> a seatbelt.', note: 'Bắt buộc' },
            { sentence: 'You <em>mustn\'t smoke</em> here.', note: 'Cấm đoán' }
          ]
        },
        {
          title: 'Bài 3: Don\'t have to & Needn\'t — Không cần thiết',
          explanation: 'Diễn tả việc KHÔNG bắt buộc phải làm (thích làm thì làm, không làm cũng không sao).',
          examples: [
            { sentence: 'Tomorrow is Sunday, so I <em>don\'t have to get up</em> early.', note: 'Không cần thiết' },
            { sentence: 'You <em>needn\'t hurry</em>. We have plenty of time.', note: 'Không cần gấp' }
          ]
        },
        {
          title: 'Bài 4: Should — Lời khuyên & Ý kiến',
          explanation: 'Dùng "should / shouldn\'t + V1" để đưa ra lời khuyên nên làm gì.',
          examples: [
            { sentence: 'You look tired. You <em>should go</em> to bed.', note: 'Lời khuyên' },
            { sentence: 'You <em>shouldn\'t eat</em> so much sugar.', note: 'Khuyên không nên' }
          ]
        },
        {
          title: 'Bài 5: May & Might — Khả năng có thể xảy ra (Possibility)',
          explanation: 'Diễn tả điều gì đó có thể xảy ra ở hiện tại hoặc tương lai (không chắc chắn 100%).',
          examples: [
            { sentence: 'Take an umbrella. It <em>might rain</em> later.', note: 'Có thể mưa' },
            { sentence: 'I <em>may go</em> to the cinema tonight.', note: 'Có thể đi' }
          ]
        },
        {
          title: 'Bài 6: Would like & Would rather — Sở thích & Sự lựa chọn',
          explanation: 'Would like + to V (muốn); Would rather + V1 (thích... hơn).',
          examples: [
            { sentence: 'I <em>would like</em> a cup of coffee, please.', note: 'Yêu cầu lịch sự' },
            { sentence: 'I <em>would rather stay</em> at home tonight than go out.', note: 'Thích ở nhà hơn' }
          ]
        },
        {
          title: 'Bài 7: Imperatives — Câu mệnh lệnh & Hướng dẫn',
          explanation: 'Bắt đầu bằng V1 (khẳng định) hoặc Don\'t + V1 (phủ định) để ra lệnh, hướng dẫn, mời.',
          examples: [
            { sentence: '<em>Open</em> your books at page 20.', note: 'Mệnh lệnh' },
            { sentence: '<em>Don\'t touch</em> that wire!', note: 'Cấm/Cảnh báo' },
            { sentence: '<em>Have</em> a piece of cake!', note: 'Lời mời' }
          ]
        },
        {
          title: 'Bài 8: Modals in Politeness — Cách giao tiếp lịch sự',
          explanation: 'Sử dụng Would you mind..., Could you..., May I... trong giao tiếp hàng ngày.',
          examples: [
            { sentence: '<em>Would you mind closing</em> the window?', note: 'Lịch sự (V-ing)' },
            { sentence: '<em>May I ask</em> a question?', note: 'Xin phép lịch sự' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'You mustn\'t work on Sunday.', correct: 'You don\'t have to work on Sunday.', tip: 'Mustn\'t là cấm đoán, Don\'t have to là không cần làm.' }
      ]
    }
  },

  // 8. beg-there-it (3 bài)
  {
    id: 'beg-there-it',
    level: 'beginner',
    title: 'There and it',
    subtitle: '3 bài về các dạng từ there',
    icon: '🌱',
    order: 108,
    murphyUnit: 'Units 37–39',
    content: {
      overview: '3 bài học về chủ ngữ giả "There" và "It": cách chỉ sự tồn tại, thời tiết, thời gian, khoảng cách và so sánh giữa chúng.',
      rules: [
        {
          title: 'Bài 1: There is / There are (Hiện tại & Quá khứ)',
          explanation: 'Dùng "There + be" để nói về sự tồn tại của người hoặc vật tại một vị trí.',
          table: {
            headers: ['Thì', 'Số ít / Không đếm được', 'Số nhiều'],
            rows: [
              ['Hiện tại', 'There is a book / water', 'There are three books'],
              ['Quá khứ', 'There was a party yesterday', 'There were many people']
            ]
          },
          examples: [
            { sentence: '<em>There is</em> a dog in the garden.', note: 'Hiện tại số ít' },
            { sentence: '<em>There were</em> 50 students in the class.', note: 'Quá khứ số nhiều' }
          ]
        },
        {
          title: 'Bài 2: Subject "It" — Thời gian, Thời tiết, Khoảng cách',
          explanation: 'Dùng "It" làm chủ ngữ giả cho thời gian, ngày tháng, thời tiết và khoảng cách.',
          examples: [
            { sentence: '<em>It is</em> 10 o\'clock.', note: 'Thời gian' },
            { sentence: '<em>It is raining</em> heavily.', note: 'Thời tiết' },
            { sentence: '<em>It is</em> 5 kilometers from here to the station.', note: 'Khoảng cách' }
          ]
        },
        {
          title: 'Bài 3: So sánh "There" vs "It"',
          explanation: 'There = chỉ sự tồn tại lần đầu; It = nhắc lại vật/người đó hoặc làm chủ ngữ giả.',
          examples: [
            { sentence: '<em>There is</em> a new book on the table. <em>It</em> is very interesting.', note: 'There chỉ sự tồn tại, It thay thế cho cuốn sách' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'It has a lot of people here.', correct: 'There are a lot of people here.', tip: 'Chỉ sự tồn tại dùng "There is/are", không dùng "It has".' }
      ]
    }
  },

  // 9. beg-aux-verbs (4 bài)
  {
    id: 'beg-aux-verbs',
    level: 'beginner',
    title: 'Auxiliary verbs',
    subtitle: '4 bài riêng về trợ động từ',
    icon: '🌱',
    order: 109,
    murphyUnit: 'Units 40–43',
    content: {
      overview: '4 bài học về vai trò của trợ động từ (Be, Do, Have): câu trả lời ngắn, câu hỏi đuôi (question tags), và sự đồng tán thành (So do I / Neither do I).',
      rules: [
        {
          title: 'Bài 1: Trợ động từ trong thì và câu hỏi',
          explanation: 'Ba trợ động từ chính: BE (thì tiếp diễn/bị động), DO (thì đơn), HAVE (thì hoàn thành).',
          examples: [
            { sentence: 'She <em>is</em> working. (BE)', note: 'Hiện tại tiếp diễn' },
            { sentence: '<em>Do</em> you like coffee? (DO)', note: 'Hiện tại đơn' },
            { sentence: 'They <em>have</em> finished. (HAVE)', note: 'Hiện tại hoàn thành' }
          ]
        },
        {
          title: 'Bài 2: Short Answers — Câu trả lời ngắn',
          explanation: 'Dùng trợ động từ tương ứng với thì của câu hỏi để trả lời ngắn gọn.',
          examples: [
            { sentence: 'Are you tired? — Yes, I <em>am</em>. / No, I\'m <em>not</em>.', note: 'Trả lời với Be' },
            { sentence: 'Did he call? — Yes, he <em>did</em>.', note: 'Trả lời với Did' }
          ]
        },
        {
          title: 'Bài 3: Basic Question Tags — Câu hỏi đuôi cơ bản',
          explanation: 'Mệnh đề khẳng định -> Đuôi phủ định; Mệnh đề phủ định -> Đuôi khẳng định.',
          examples: [
            { sentence: 'You are a student, <em>aren\'t you</em>?', note: 'Khẳng định -> Đuôi phủ định' },
            { sentence: 'She doesn\'t like tea, <em>does she</em>?', note: 'Phủ định -> Đuôi khẳng định' }
          ]
        },
        {
          title: 'Bài 4: Đồng tán thành với "So do I" & "Neither do I"',
          explanation: 'So + trợ động từ + S (Đồng ý câu khẳng định); Neither + trợ động từ + S (Đồng ý câu phủ định).',
          examples: [
            { sentence: 'I love football. — <em>So do I</em>.', note: 'Đồng ý khẳng định' },
            { sentence: 'I can\'t swim. — <em>Neither can I</em>.', note: 'Đồng ý phủ định' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I don\'t like coffee. — So do I.', correct: 'I don\'t like coffee. — Neither do I.', tip: 'Đồng ý với mệnh đề phủ định dùng Neither, không dùng So.' }
      ]
    }
  },

  // 10. beg-questions (6 bài)
  {
    id: 'beg-questions',
    level: 'beginner',
    title: 'Questions',
    subtitle: '6 bài về các dạng câu hỏi khác nhau như wh, do…',
    icon: '🌱',
    order: 110,
    murphyUnit: 'Units 44–49',
    content: {
      overview: '6 bài toàn diện về cấu trúc đặt câu hỏi: Yes/No questions, Wh-questions, Câu hỏi chủ ngữ vs tân ngữ, Giới từ trong câu hỏi, và Indirect questions.',
      rules: [
        {
          title: 'Bài 1: Yes/No Questions với Be và Do/Does/Did',
          explanation: 'Đảo trợ động từ lên trước chủ ngữ: Trợ động từ + S + V?',
          examples: [
            { sentence: '<em>Is</em> she at home?', note: 'Với Be' },
            { sentence: '<em>Does</em> he play tennis?', note: 'Với Does' },
            { sentence: '<em>Did</em> you buy the car?', note: 'Với Did' }
          ]
        },
        {
          title: 'Bài 2: Wh- Questions (Từ để hỏi)',
          explanation: 'Wh-word + trợ động từ + S + V? Các từ: Who, What, Where, When, Why, How, Which.',
          examples: [
            { sentence: '<em>Where do</em> you live?', note: 'Hỏi nơi chốn' },
            { sentence: '<em>Why are</em> you crying?', note: 'Hỏi lý do' }
          ]
        },
        {
          title: 'Bài 3: Subject vs Object Questions (Hỏi Chủ ngữ vs Tân ngữ)',
          explanation: 'Khi từ để hỏi (Who/What) làm chủ ngữ -> KHÔNG dùng do/does/did; làm tân ngữ -> CÓ dùng do/does/did.',
          examples: [
            { sentence: '<em>Who saw</em> you? (Someone saw you -> Who is subject)', note: 'Hỏi chủ ngữ' },
            { sentence: '<em>Who did</em> you see? (You saw someone -> Who is object)', note: 'Hỏi tân ngữ' }
          ]
        },
        {
          title: 'Bài 4: Prepositions at the end of Questions (Giới từ ở cuối câu hỏi)',
          explanation: 'Trong giao tiếp tự nhiên, giới từ thường đứng ở cuối câu hỏi.',
          examples: [
            { sentence: 'What are you listening <em>to</em>?', note: 'Listen to' },
            { sentence: 'Where are you from <em>from</em>?', note: 'From' }
          ]
        },
        {
          title: 'Bài 5: Indirect Questions — Câu hỏi gián tiếp',
          explanation: 'Dùng "Do you know..." hoặc "Could you tell me...". Sau từ để hỏi, trật tự từ trở lại dạng khẳng định (S + V).',
          examples: [
            { sentence: 'Direct: Where is the bank?', note: 'Câu hỏi trực tiếp' },
            { sentence: 'Indirect: Do you know <em>where the bank is</em>?', note: 'Trật tự S + V' }
          ]
        },
        {
          title: 'Bài 6: How long / How far / How often / How much',
          explanation: 'Các cụm từ hỏi với "How" chỉ độ dài thời gian, khoảng cách, tần suất và giá cả/số lượng.',
          examples: [
            { sentence: '<em>How long does</em> it take?', note: 'Thời lượng' },
            { sentence: '<em>How often do</em> you exercise?', note: 'Tần suất' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'Do you know where is the museum?', correct: 'Do you know where the museum is?', tip: 'Trong câu hỏi gián tiếp, chủ ngữ đứng trước động từ.' }
      ]
    }
  },

  // 11. beg-reported-speech (1 bài)
  {
    id: 'beg-reported-speech',
    level: 'beginner',
    title: 'Reported Speech',
    subtitle: '1 bài riêng về dạng tường thuật',
    icon: '🌱',
    order: 111,
    murphyUnit: 'Unit 50',
    content: {
      overview: '1 bài cơ bản về cách tường thuật lại câu nói của người khác (Reported Speech / Indirect Speech) với Said và Told.',
      rules: [
        {
          title: 'Bài 1: Quy tắc lùi thì & Phân biệt Said vs Told',
          explanation: 'Khi động từ tường thuật ở quá khứ (said/told), thì trong câu trực tiếp lùi 1 thì về quá khứ. Said + (that); Told + tân ngữ + (that).',
          table: {
            headers: ['Trực tiếp (Direct)', 'Gián tiếp (Reported)'],
            rows: [
              ['Present Simple (am/is/are/V1)', 'Past Simple (was/were/V2)'],
              ['Present Continuous (am/is/are + V-ing)', 'Past Continuous (was/were + V-ing)'],
              ['Will / Can', 'Would / Could']
            ]
          },
          examples: [
            { sentence: 'Direct: Paul said, "I am tired."', note: 'Trực tiếp' },
            { sentence: 'Reported: Paul <em>said that he was tired</em>.', note: 'Lùi thì (is -> was)' },
            { sentence: 'She <em>told me that</em> she loved coffee.', note: 'Told + me' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'She told that she was ready.', correct: 'She said that she was ready. / She told me that she was ready.', tip: 'Told phải có tân ngữ chỉ người nghe (told someone).' }
      ]
    }
  },

  // 12. beg-ing-to (4 bài)
  {
    id: 'beg-ing-to',
    level: 'beginner',
    title: 'Ing and to',
    subtitle: '4 bài riêng với đuôi – ing và dùng to',
    icon: '🌱',
    order: 112,
    murphyUnit: 'Units 51–54',
    content: {
      overview: '4 bài về danh động từ (V-ing) và động từ nguyên thể có "to" (To-infinitive): cấu trúc Verb + V-ing, Verb + to V, Verb + Object + to V và Preposition + V-ing.',
      rules: [
        {
          title: 'Bài 1: Verb + -ing (enjoy, mind, stop, finish)',
          explanation: 'Một số động từ theo sau bắt buộc là V-ing: enjoy, mind, stop, finish, suggest, keep, avoid.',
          examples: [
            { sentence: 'I <em>enjoy listening</em> to music.', note: 'Enjoy + V-ing' },
            { sentence: 'Would you <em>mind opening</em> the window?', note: 'Mind + V-ing' }
          ]
        },
        {
          title: 'Bài 2: Verb + to-infinitive (want, hope, decide, offer)',
          explanation: 'Một số động từ theo sau bắt buộc là To + V1: want, hope, decide, offer, promise, plan, refuse.',
          examples: [
            { sentence: 'We <em>decided to buy</em> a new house.', note: 'Decide + to V' },
            { sentence: 'She <em>wants to become</em> a doctor.', note: 'Want + to V' }
          ]
        },
        {
          title: 'Bài 3: Verb + Object + to-infinitive (want somebody to do)',
          explanation: 'Cấu trúc: Động từ + Tân ngữ + To V (want sb to do, tell sb to do, ask sb to do, advise sb to do).',
          examples: [
            { sentence: 'My doctor <em>advised me to exercise</em> more.', note: 'Advise + object + to V' },
            { sentence: 'I <em>want you to be</em> happy.', note: 'Want + object + to V' }
          ]
        },
        {
          title: 'Bài 4: Preposition + -ing (Giới từ + V-ing)',
          explanation: 'Sau tất cả các giới từ (in, at, on, of, for, about, before, after, without) động từ LUÔN chia dạng V-ing.',
          examples: [
            { sentence: 'Are you interested <em>in learning</em> English?', note: 'In + V-ing' },
            { sentence: 'He left <em>without saying</em> goodbye.', note: 'Without + V-ing' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I enjoy to play football.', correct: 'I enjoy playing football.', tip: 'Sau "enjoy" dùng V-ing.' },
        { wrong: 'Thank you for help me.', correct: 'Thank you for helping me.', tip: 'Sau giới từ "for" phải dùng V-ing.' }
      ]
    }
  },

  // 13. beg-go-get-do (4 bài)
  {
    id: 'beg-go-get-do',
    level: 'beginner',
    title: 'Go, get, do, make and have',
    subtitle: '4 bài riêng về các động từ này',
    icon: '🌱',
    order: 113,
    murphyUnit: 'Units 55–58',
    content: {
      overview: '4 bài học sâu về 5 động từ tần suất cao nhất trong tiếng Anh: GO, GET, DO, MAKE và HAVE.',
      rules: [
        {
          title: 'Bài 1: GO — Cụm từ và cấu trúc thông dụng',
          explanation: 'Go + -ing (hoạt động thể thao/giao lưu: go swimming, go shopping); Go to + nơi chốn; Go home / Go abroad (không có to).',
          examples: [
            { sentence: 'Let\'s <em>go shopping</em> this afternoon.', note: 'Go + V-ing' },
            { sentence: 'I must <em>go home</em> now.', note: 'Go home (không dùng to)' }
          ]
        },
        {
          title: 'Bài 2: GET — Đa nghĩa (Biến đổi, Nhận được, Đến nơi, Phương tiện)',
          explanation: 'Get + Adj (trở nên: get tired); Get + Noun (nhận/mua: get a letter); Get to (đến: get to work); Get on/off (lên/xuống xe).',
          examples: [
            { sentence: 'It is <em>getting dark</em>.', note: 'Biến đổi trạng thái (+ Adj)' },
            { sentence: 'I <em>got an email</em> this morning.', note: 'Nhận được' }
          ]
        },
        {
          title: 'Bài 3: DO vs MAKE — Phân biệt chuẩn xác',
          explanation: 'DO = công việc, nghĩa vụ, hành động chung (do homework, do business, do laundry); MAKE = tạo ra cái mới, sản xuất, nấu nướng (make a cake, make a mistake, make money).',
          table: {
            headers: ['Đi với DO', 'Đi với MAKE'],
            rows: [
              ['do homework / do research', 'make coffee / make tea'],
              ['do housework / do dishes', 'make a mistake / make noise'],
              ['do business / do a favor', 'make money / make a decision']
            ]
          },
          examples: [
            { sentence: 'I have to <em>do my homework</em>.', note: 'Dùng DO' },
            { sentence: 'Don\'t <em>make a mistake</em>!', note: 'Dùng MAKE' }
          ]
        },
        {
          title: 'Bài 4: HAVE — Thói quen, Bữa ăn, Hoạt động',
          explanation: 'Have breakfast/lunch/dinner, have a shower, have a good time, have a break, have a baby.',
          examples: [
            { sentence: 'We <em>had a great time</em> at the party.', note: 'Hoạt động trải nghiệm' },
            { sentence: 'I <em>have a shower</em> every morning.', note: 'Thói quen' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I made my homework.', correct: 'I did my homework.', tip: 'Bài tập nhà dùng "do homework".' },
        { wrong: 'I am going to to home.', correct: 'I am going home.', tip: 'Không dùng "to" trước "home".' }
      ]
    }
  },

  // 14. beg-pronouns (6 bài)
  {
    id: 'beg-pronouns',
    level: 'beginner',
    title: 'Pronouns and possessives',
    subtitle: '6 bài về các dạng động từ, trợ động từ',
    icon: '🌱',
    order: 114,
    murphyUnit: 'Units 59–64',
    content: {
      overview: '6 bài về hệ thống Đại từ & Sở hữu trong tiếng Anh: Đại từ nhân xưng, Tính từ sở hữu, Đại từ sở hữu, Đại từ phản xạ, Sở hữu cách (\'s) và Chỉ định từ.',
      rules: [
        {
          title: 'Bài 1: Subject & Object Pronouns (Đại từ làm Chủ ngữ & Tân ngữ)',
          explanation: 'Chủ ngữ (I, you, he, she, it, we, they) đứng trước V; Tân ngữ (me, you, him, her, it, us, them) đứng sau V hoặc giới từ.',
          examples: [
            { sentence: '<em>He</em> loves <em>her</em>, but <em>she</em> doesn\'t love <em>him</em>.', note: 'Chủ ngữ & Tân ngữ' }
          ]
        },
        {
          title: 'Bài 2: Possessive Adjectives (Tính từ sở hữu: my, your, his, her, its, our, their)',
          explanation: 'Luôn đứng TRƯỚC danh từ để chỉ sở hữu.',
          examples: [
            { sentence: 'This is <em>my car</em> and that is <em>her house</em>.', note: 'Tính từ sở hữu + Noun' }
          ]
        },
        {
          title: 'Bài 3: Possessive Pronouns (Đại từ sở hữu: mine, yours, his, hers, ours, theirs)',
          explanation: 'Đứng ĐỘC LẬP thay thế cho "Tính từ sở hữu + Danh từ" để tránh lặp từ.',
          examples: [
            { sentence: 'This shirt is <em>mine</em>, not <em>yours</em>.', note: 'Mine = my shirt' }
          ]
        },
        {
          title: 'Bài 4: Reflexive Pronouns (Đại từ phản xạ: myself, yourself, himself, themselves)',
          explanation: 'Dùng khi chủ ngữ và tân ngữ là cùng một người/vật.',
          examples: [
            { sentence: 'He cut <em>himself</em> while cooking.', note: 'Chủ ngữ & Tân ngữ cùng là "he"' }
          ]
        },
        {
          title: 'Bài 5: Possessive \'s / s\' (Sở hữu cách người)',
          explanation: 'Danh từ số ít + \'s (John\'s car); Danh từ số nhiều có -s + \' (my parents\' house).',
          examples: [
            { sentence: 'This is <em>Mary\'s coat</em>.', note: 'Số ít + \'s' },
            { sentence: 'The <em>students\' bags</em> are here.', note: 'Số nhiều + \'' }
          ]
        },
        {
          title: 'Bài 6: Demonstratives — This, That, These, Those',
          explanation: 'This/These (ở gần); That/Those (ở xa).',
          examples: [
            { sentence: '<em>This</em> is my book (gần), <em>that</em> is yours (xa).', note: 'Chỉ định số ít' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'This coat is my.', correct: 'This coat is mine. / This is my coat.', tip: 'Không dùng tính từ sở hữu "my" đứng một mình ở cuối câu.' }
      ]
    }
  },

  // 15. beg-a-the (9 bài)
  {
    id: 'beg-a-the',
    level: 'beginner',
    title: 'A and the',
    subtitle: '9 bài riêng về dạng mạo từ này',
    icon: '🌱',
    order: 115,
    murphyUnit: 'Units 65–73',
    content: {
      overview: '9 bài chuyên sâu về Mạo từ bất định (A/An) và Mạo từ xác định (The) trong tiếng Anh.',
      rules: [
        {
          title: 'Bài 1: Mạo từ A / An — Cách dùng chuẩn phát âm',
          explanation: 'A + nguyên âm phát âm là phụ âm (a book, a university); An + nguyên âm phát âm là nguyên âm (an apple, an hour).',
          examples: [
            { sentence: 'I bought <em>a university</em> guide and <em>an hour</em> ago.', note: 'Phát âm /juː/ dùng a; /aʊə/ dùng an' }
          ]
        },
        {
          title: 'Bài 2: A/An vs The — Lần đầu xuất hiện vs Đã xác định',
          explanation: 'Lần đầu nhắc tới dùng A/An; nhắc lại lần thứ hai hoặc cả 2 người đều biết rõ dùng The.',
          examples: [
            { sentence: 'I saw <em>a cat</em>. <em>The cat</em> was sitting on the fence.', note: 'Lần 1: a -> Lần 2: the' }
          ]
        },
        {
          title: 'Bài 3: The — Các đối tượng duy nhất & Tình huống cụ thể',
          explanation: 'Dùng "The" với vật duy nhất (the sun, the moon, the sky, the internet, the earth).',
          examples: [
            { sentence: '<em>The sun</em> rises in the east.', note: 'Vật duy nhất' }
          ]
        },
        {
          title: 'Bài 4: Zero Article — Không dùng mạo từ với Danh từ chung',
          explanation: 'KHÔNG dùng "the" khi nói chung chung về danh từ số nhiều hoặc không đếm được.',
          examples: [
            { sentence: 'I love <em>music</em> and <em>dogs</em>.', note: 'Nói chung chung (Không dùng the)' }
          ]
        },
        {
          title: 'Bài 5: The với Địa danh 1 — Sông, Biển, Đại dương, Dãy núi',
          explanation: 'Dùng "The" với sông, biển, đại dương, dãy núi, đảo quần thể (the Nile, the Pacific, the Alps).',
          examples: [
            { sentence: '<em>The Amazon</em> flows into <em>the Atlantic Ocean</em>.', note: 'Sông & Đại dương' }
          ]
        },
        {
          title: 'Bài 6: The với Địa danh 2 — Quốc gia & Thành phố',
          explanation: 'Thành phố/Quốc gia thường KHÔNG dùng the (Vietnam, Tokyo), TRỪ các quốc gia có Republic, Kingdom, States, số nhiều (the UK, the USA, the Netherlands).',
          examples: [
            { sentence: 'I live in <em>Vietnam</em>, but he lives in <em>the United States</em>.', note: 'Quy tắc tên quốc gia' }
          ]
        },
        {
          title: 'Bài 7: School, Hospital, Prison, Bed, Work, Home',
          explanation: 'Đến với mục đích chính (học, chữa bệnh, đi ngủ) -> KHÔNG dùng the; đến như vị trí/thăm -> CÓ dùng the.',
          examples: [
            { sentence: 'Ken is in <em>hospital</em>. (Học/điều trị)', note: 'Bệnh nhân' },
            { sentence: 'His wife went to <em>the hospital</em> to visit him.', note: 'Người thăm' }
          ]
        },
        {
          title: 'Bài 8: The với So sánh nhất & Số thứ tự',
          explanation: 'Luôn có "the" trước So sánh nhất (the best) và Số thứ tự (the first, the second).',
          examples: [
            { sentence: 'He is <em>the tallest</em> boy in <em>the first</em> row.', note: 'So sánh nhất & Số thứ tự' }
          ]
        },
        {
          title: 'Bài 9: Các cụm từ chỉ thời gian cố định đi với mạo từ',
          explanation: 'In the morning / afternoon / evening; At night (không the); Last week / Next year (không the).',
          examples: [
            { sentence: 'I work <em>in the morning</em> and study <em>at night</em>.', note: 'Cụm cố định' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The life is beautiful.', correct: 'Life is beautiful.', tip: 'Khái niệm chung chung "Life" không dùng mạo từ "the".' }
      ]
    }
  },

  // 16. beg-determiners (11 bài)
  {
    id: 'beg-determiners',
    level: 'beginner',
    title: 'Determiners and pronouns',
    subtitle: '11 bài về dạng từ xác định và đại từ',
    icon: '🌱',
    order: 116,
    murphyUnit: 'Units 74–84',
    content: {
      overview: '11 bài học về Từ định lượng & Từ xác định: Some, Any, No, None, Much, Many, Little, Few, All, Every, Both, Either, Neither, Another, Other.',
      rules: [
        {
          title: 'Bài 1: Some & Any',
          explanation: 'Some trong câu khẳng định / lời mời; Any trong câu phủ định & câu hỏi.',
          examples: [
            { sentence: 'I have <em>some money</em>.', note: 'Khẳng định' },
            { sentence: 'Do you have <em>any questions</em>?', note: 'Nghi vấn' },
            { sentence: 'Would you like <em>some coffee</em>?', note: 'Lời mời lịch sự' }
          ]
        },
        {
          title: 'Bài 2: Any vs No / None',
          explanation: 'No + Noun (bằng negative verb + any); None đứng một mình thay danh từ.',
          examples: [
            { sentence: 'I have <em>no money</em>. = I don\'t have <em>any money</em>.', note: 'No vs Any' },
            { sentence: 'How much money do you have? — <em>None</em>.', note: 'None đứng độc lập' }
          ]
        },
        {
          title: 'Bài 3: Much, Many, A lot of',
          explanation: 'Much + N đếm được số ít/không đếm được; Many + N đếm được số nhiều; A lot of + Cả hai.',
          examples: [
            { sentence: 'There isn\'t <em>much water</em> left.', note: 'Không đếm được' },
            { sentence: 'Are there <em>many students</em>?', note: 'Đếm được số nhiều' }
          ]
        },
        {
          title: 'Bài 4: (A) Little & (A) Few',
          explanation: 'A little / A few = một chút/ít (hướng tích cực); Little / Few = hầu như không có (hướng tiêu cực).',
          examples: [
            { sentence: 'I have <em>a little money</em>, enough for coffee.', note: 'Tích cực' },
            { sentence: 'He has <em>few friends</em>, he feels lonely.', note: 'Tiêu cực (rất ít)' }
          ]
        },
        {
          title: 'Bài 5: All, Most, Some, None + of',
          explanation: 'Cấu trúc: Quantifier + of + the / my / them + Noun.',
          examples: [
            { sentence: '<em>Most of the students</em> passed the exam.', note: 'Most of + the + N' }
          ]
        },
        {
          title: 'Bài 6: Both, Either, Neither (Cho 2 đối tượng)',
          explanation: 'Both = cả hai; Either = 1 trong 2; Neither = không ai/cái nào trong 2.',
          examples: [
            { sentence: '<em>Both sisters</em> are tall.', note: 'Cả hai' },
            { sentence: '<em>Neither of</em> the answers is correct.', note: 'Không cái nào' }
          ]
        },
        {
          title: 'Bài 7: Every & Each',
          explanation: 'Every = tất cả (xem như nhóm); Each = từng cá thể riêng biệt. Đều đi với N số ít.',
          examples: [
            { sentence: '<em>Every student</em> has a book.', note: 'Số ít' },
            { sentence: '<em>Each person</em> was given a gift.', note: 'Từng cá thể' }
          ]
        },
        {
          title: 'Bài 8: Another vs Other vs Others',
          explanation: 'Another + N số ít (thêm 1 cái nữa); Other + N số nhiều; Others = đại từ số nhiều.',
          examples: [
            { sentence: 'Would you like <em>another cup</em> of tea?', note: 'Another + singular N' },
            { sentence: 'Some people like red, <em>others</em> prefer blue.', note: 'Others (đại từ)' }
          ]
        },
        {
          title: 'Bài 9: All vs Every vs Everybody / Everything',
          explanation: 'Everybody / Everything đi với động từ số ít; All đứng trước danh từ.',
          examples: [
            { sentence: '<em>Everybody is</em> ready.', note: 'Is (số ít)' }
          ]
        },
        {
          title: 'Bài 10: Indefinite Pronouns — Someone, Anything, Nowhere',
          explanation: 'Các đại từ bất định đi với động từ số ít và tính từ đứng sau chúng.',
          examples: [
            { sentence: 'Is there <em>anything interesting</em> on TV?', note: 'Tính từ đứng sau' }
          ]
        },
        {
          title: 'Bài 11: Quantitative Determiners Summary',
          explanation: 'Bảng tổng hợp cách dùng từ xác định theo loại danh từ.',
          table: {
            headers: ['Loại Danh từ', 'Từ Xác định Phù hợp'],
            rows: [
              ['Danh từ đếm được số ít', 'a/an, every, each, another, this, that'],
              ['Danh từ đếm được số nhiều', 'many, (a) few, both, several, these, those, other'],
              ['Danh từ không đếm được', 'much, (a) little, a great deal of, an amount of']
            ]
          }
        }
      ],
      commonMistakes: [
        { wrong: 'Every students have books.', correct: 'Every student has a book.', tip: 'Every đi với danh từ số ít và động từ số ít.' }
      ]
    }
  },

  // 17. beg-adjectives (8 bài)
  {
    id: 'beg-adjectives',
    level: 'beginner',
    title: 'Adjectives and adverbs',
    subtitle: '8 bài về dạng tính từ và trạng từ',
    icon: '🌱',
    order: 117,
    murphyUnit: 'Units 85–92',
    content: {
      overview: '8 bài chi tiết về Tính từ & Trạng từ: vị trí, trật tự tính từ, tính từ đuôi -ed/-ing, trạng từ thể cách (-ly), so sánh hơn và so sánh nhất.',
      rules: [
        {
          title: 'Bài 1: Vị trí & Trật tự Tính từ (Adjective Position & Order)',
          explanation: 'Tính từ đứng trước danh từ hoặc sau To Be / Linking Verbs. Trật tự: Ý kiến -> Kích thước -> Tuổi -> Màu sắc -> Nguồn gốc -> Chất liệu.',
          examples: [
            { sentence: 'A <em>beautiful small old black Italian leather</em> bag.', note: 'Trật tự tính từ' }
          ]
        },
        {
          title: 'Bài 2: Tính từ đuôi -ed vs -ing',
          explanation: '-ed = cảm xúc của con người; -ing = tính chất của vật/sự việc.',
          examples: [
            { sentence: 'I am <em>bored</em> with this <em>boring</em> movie.', note: 'Bored (cảm xúc) vs Boring (tính chất)' }
          ]
        },
        {
          title: 'Bài 3: Trạng từ chỉ thể cách (Adverbs of Manner: -ly)',
          explanation: 'Tính từ + -ly = Trạng từ (quick -> quickly, careful -> carefully). Bổ nghĩa cho động từ.',
          examples: [
            { sentence: 'He drives <em>carefully</em>.', note: 'Bổ nghĩa cho drives' }
          ]
        },
        {
          title: 'Bài 4: Trạng từ bất quy tắc (Fast, Hard, Late, Well)',
          explanation: 'Fast -> fast, hard -> hard, late -> late, good -> well.',
          examples: [
            { sentence: 'She is a <em>good</em> swimmer. She swims <em>well</em>.', note: 'Good (adj) vs Well (adv)' }
          ]
        },
        {
          title: 'Bài 5: So sánh hơn (Comparatives: -er / more)',
          explanation: 'Tính từ ngắn + -er + than; More + Tính từ dài + than.',
          examples: [
            { sentence: 'A car is <em>faster than</em> a bicycle.', note: 'Short adj (-er)' },
            { sentence: 'Health is <em>more important than</em> money.', note: 'Long adj (more)' }
          ]
        },
        {
          title: 'Bài 6: So sánh ngang bằng (As... as) & Không bằng',
          explanation: 'As + adj/adv + as (bằng); Not as / Not so + adj/adv + as (không bằng).',
          examples: [
            { sentence: 'He is <em>as tall as</em> his father.', note: 'So sánh bằng' }
          ]
        },
        {
          title: 'Bài 7: So sánh nhất (Superlatives: -est / most)',
          explanation: 'The + tính từ ngắn-est; The most + tính từ dài.',
          examples: [
            { sentence: 'Everest is <em>the highest</em> mountain in the world.', note: 'Short adj (-est)' }
          ]
        },
        {
          title: 'Bài 8: Trạng từ chỉ mức độ (Very, Really, Quite, Too, Enough)',
          explanation: 'Too + Adj (quá... không thể làm); Adj + Enough (đủ... để làm).',
          examples: [
            { sentence: 'The box is <em>too heavy to lift</em>.', note: 'Too + adj' },
            { sentence: 'He is <em>strong enough to carry</em> it.', note: 'Adj + enough' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'He drives very fastly.', correct: 'He drives very fast.', tip: '"Fast" vừa là tính từ vừa là trạng từ, không có "fastly".' }
      ]
    }
  },

  // 18. beg-word-order (4 bài)
  {
    id: 'beg-word-order',
    level: 'beginner',
    title: 'Word order',
    subtitle: '4 bài về sắp xếp trật tự từ',
    icon: '🌱',
    order: 118,
    murphyUnit: 'Units 93–96',
    content: {
      overview: '4 bài về trật tự từ chuẩn trong câu tiếng Anh: Cấu trúc S-V-O, Trật tự Nơi chốn & Thời gian, Tân ngữ trực tiếp vs Gián tiếp, và Vị trí trạng từ.',
      rules: [
        {
          title: 'Bài 1: Trật tự S-V-O (Subject + Verb + Object)',
          explanation: 'Không chen trạng từ hoặc từ khác vào giữa Động từ và Tân ngữ.',
          examples: [
            { sentence: '❌ I like very much coffee.', note: 'Sai' },
            { sentence: '✅ I <em>like coffee</em> very much.', note: 'Đúng (S + V + O)' }
          ]
        },
        {
          title: 'Bài 2: Trật tự Nơi chốn trước Thời gian (Place before Time)',
          explanation: 'Trong câu có cả vị trí và thời gian, Nơi chốn (Place) xếp trước Thời gian (Time).',
          examples: [
            { sentence: 'We arrived <em>at the airport</em> (Place) <em>at 7 o\'clock</em> (Time).', note: 'Place before Time' }
          ]
        },
        {
          title: 'Bài 3: Tân ngữ Trực tiếp & Gián tiếp (Direct & Indirect Objects)',
          explanation: 'Give / Send / Buy: Verb + Sb + St (Give me the book) OR Verb + St + to/for + Sb (Give the book to me).',
          examples: [
            { sentence: 'He gave <em>her a flower</em>.', note: 'Verb + Sb + St' },
            { sentence: 'He gave <em>a flower to her</em>.', note: 'Verb + St + to Sb' }
          ]
        },
        {
          title: 'Bài 4: Vị trí Trạng từ tần suất & Trạng từ câu',
          explanation: 'Trạng từ tần suất đứng trước V thường, sau To Be, và giữa Trợ V + V chính.',
          examples: [
            { sentence: 'I have <em>always remembered</em> your advice.', note: 'Giữa trợ V và V chính' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I go every day to school.', correct: 'I go to school every day.', tip: 'Nơi chốn (to school) đứng trước thời gian (every day).' }
      ]
    }
  },

  // 19. beg-conjunctions (6 bài)
  {
    id: 'beg-conjunctions',
    level: 'beginner',
    title: 'Conjunctions and clauses',
    subtitle: '6 bài về từ liên kết và mệnh đề trong câu',
    icon: '🌱',
    order: 119,
    murphyUnit: 'Units 97–102',
    content: {
      overview: '6 bài về Liên từ & Mệnh đề: And, But, Or, So, Because, When, While, Before, After, Although, If.',
      rules: [
        {
          title: 'Bài 1: And, But, Or, So (Liên từ đẳng lập)',
          explanation: 'And (bổ sung), But (tương phản), Or (lựa chọn), So (kết quả).',
          examples: [
            { sentence: 'It was raining, <em>so</em> I took an umbrella.', note: 'Chỉ kết quả (so)' }
          ]
        },
        {
          title: 'Bài 2: Because, As, Since (Mệnh đề nguyên nhân)',
          explanation: 'Dùng để nêu lý do, nguyên nhân tại sao hành động xảy ra.',
          examples: [
            { sentence: 'I stayed at home <em>because</em> I felt sick.', note: 'Chỉ nguyên nhân' }
          ]
        },
        {
          title: 'Bài 3: When, While, Before, After, Until (Mệnh đề thời gian)',
          explanation: 'Sau các từ nối thời gian chỉ tương lai, dùng thì Hiện tại đơn (không dùng Will).',
          examples: [
            { sentence: 'I will call you <em>when I arrive</em> at the station.', note: 'When + Present Simple' }
          ]
        },
        {
          title: 'Bài 4: Although, Even though vs In spite of (Mệnh đề nhượng bộ)',
          explanation: 'Although / Even though + S + V; In spite of / Despite + Noun / V-ing.',
          examples: [
            { sentence: '<em>Although it rained</em>, we went out.', note: 'Although + Clause' },
            { sentence: '<em>In spite of the rain</em>, we went out.', note: 'In spite of + Noun' }
          ]
        },
        {
          title: 'Bài 5: If clauses (Câu điều kiện Loại 0 & Loại 1)',
          explanation: 'Type 0: If + Present, Present (sự thật); Type 1: If + Present, Will + V1 (tương lai có thể xảy ra).',
          examples: [
            { sentence: 'If you <em>study hard</em>, you <em>will pass</em> the exam.', note: 'Điều kiện Loại 1' }
          ]
        },
        {
          title: 'Bài 6: To-infinitive & So that chỉ mục đích (Purpose)',
          explanation: 'To + V1 (để làm gì); So that + S + can/could + V1.',
          examples: [
            { sentence: 'I went to the shop <em>to buy</em> milk.', note: 'To + V1' },
            { sentence: 'I saved money <em>so that I could buy</em> a bike.', note: 'So that + Clause' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'Although it rained, but we went out.', correct: 'Although it rained, we went out.', tip: 'Không dùng cả "Although" và "but" trong cùng một câu.' }
      ]
    }
  }
];

console.log("Adding 19 detailed beginner topics successfully prepared!");
fs.writeFileSync(path.join(__dirname, 'expanded_beg_topics.json'), JSON.stringify(expandedTopics, null, 2));
