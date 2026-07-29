const fs = require('fs');
const path = require('path');

const advTopics = [
  // 35. adv-tenses (8 bài)
  {
    id: 'adv-tenses',
    level: 'advanced',
    title: 'Tenses',
    subtitle: '8 bài học với 8 thì cơ bản',
    icon: '🎓',
    order: 135,
    murphyUnit: 'Advanced Units 1–8',
    content: {
      overview: '8 bài học cao cấp chuyên sâu về bình diện Thời thể (Tense & Aspect): Sắc thái thời gian trong báo chí, văn chương, Stative verbs nâng cao, Aspectual nuances và Tense Harmony.',
      rules: [
        {
          title: 'Bài 1: Present Simple & Continuous trong Ngữ cảnh Cao cấp',
          explanation: 'Dùng Present Simple cho tiêu đề báo chí (Newspaper Headlines), tóm tắt cốt truyện phim/sách; Present Continuous cho sự thay đổi mang tính học thuật.',
          examples: [
            { sentence: 'Headline: <em>Prime Minister Resigns</em> After Scandal.', note: 'Báo chí (Headline Present)' },
            { sentence: 'The global climate <em>is deteriorating</em> at an unprecedented rate.', note: 'Biến đổi học thuật' }
          ]
        },
        {
          title: 'Bài 2: Past Simple & Continuous trong Nghệ thuật Kể chuyện (Narrative Nuance)',
          explanation: 'Tạo lập tiền cảnh (Foreground) với Past Simple và hậu cảnh (Background) với Past Continuous & Participles.',
          examples: [
            { sentence: 'As tension <em>was escalating</em> in the capital, the cabinet <em>convened</em> an emergency session.', note: 'Background vs Foreground' }
          ]
        },
        {
          title: 'Bài 3: Present Perfect Simple & Continuous cho Thành tựu & Báo cáo',
          explanation: 'Phân tích kết quả lâu dài (Permanent result) vs trạng thái mở (Open timeframe) trong các báo cáo khoa học.',
          examples: [
            { sentence: 'Researchers <em>have uncovered</em> a novel mechanism.', note: 'Phát kiến khoa học (Present Perfect)' }
          ]
        },
        {
          title: 'Bài 4: Past Perfect Simple & Continuous trong Cấu trúc Câu Phức',
          explanation: 'Dùng Past Perfect thiết lập điều kiện nền tảng (Background conditions) và sự kiện có tính hệ quả trước quá khứ.',
          examples: [
            { sentence: 'Having failed to secure funding, the startup <em>had been operating</em> on a skeleton budget.', note: 'Quá trình kéo dài trước quá khứ' }
          ]
        },
        {
          title: 'Bài 5: Thể Tiếp diễn với Động từ Trạng thái (Advanced Stative Nuance)',
          explanation: 'Dùng Continuous với stative verbs (feel, think, love, weigh, measure, represent) để thể hiện sự cảm nhận nhất thời hoặc thái độ ứng xử.',
          examples: [
            { sentence: 'I <em>am loving</em> every minute of this conference.', note: 'Tận hưởng nhất thời' },
            { sentence: 'He <em>is being</em> extraordinarily generous.', note: 'Thái độ nhất thời' }
          ]
        },
        {
          title: 'Bài 6: Simple vs Continuous Aspectual Nuances (Thể Hoàn thành & Tiếp diễn)',
          explanation: 'Sự khác biệt giữa tính trọn vẹn (Completeness) của Simple Aspect và tính kéo dài/chưa hoàn tất (Incompleteness) của Continuous Aspect.',
          examples: [
            { sentence: 'I <em>read</em> the report. (Đã đọc xong toàn bộ)', note: 'Simple (Completeness)' },
            { sentence: 'I <em>was reading</em> the report. (Đang đọc dở)', note: 'Continuous (Incompleteness)' }
          ]
        },
        {
          title: 'Bài 7: Perfective vs Imperfective Aspect trong Văn kể nâng cao',
          explanation: 'So sánh góc nhìn hoàn thành trọn vẹn (Perfective) và góc nhìn tiến trình nội tại (Imperfective).',
          examples: [
            { sentence: 'The empire <em>collapsed</em> in 476 AD. (Perfective view)', note: 'Nhìn như 1 sự kiện trọn gói' }
          ]
        },
        {
          title: 'Bài 8: Tense Harmony & Backshifting trong Câu Phức Nhiều Mệnh đề',
          explanation: 'Quy tắc hòa hợp thì (Sequence of tenses) trong các văn bản luật pháp, học thuật và báo cáo gián tiếp phức tạp.',
          examples: [
            { sentence: 'The director maintained that had the board known the risks, they would not have authorized the merger.', note: 'Hòa hợp thì nhiều mệnh đề' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The climate changes rapidly these years.', correct: 'The climate is changing rapidly these years.', tip: 'Xu hướng đang diễn ra kéo dài dùng thể tiếp diễn.' }
      ]
    }
  },

  // 36. adv-future (6 bài)
  {
    id: 'adv-future',
    level: 'advanced',
    title: 'The Future',
    subtitle: '6 bài học về thì tương lai và các từ dùng cho thì tương lai',
    icon: '🎓',
    order: 136,
    murphyUnit: 'Advanced Units 9–14',
    content: {
      overview: '6 bài học cao cấp về Các phương thức biểu đạt tương lai (Future Expressions) trong văn phong trang trọng, báo cáo dự phóng và hợp đồng.',
      rules: [
        {
          title: 'Bài 1: Formal Predictions & Plans — Will vs Be Going To trong Văn phong Trang trọng',
          explanation: 'Trong văn bản trang trọng, Will được ưu tiên dùng cho các dự báo chính thức; Be going to dùng khi có dữ liệu thực nghiệm.',
          examples: [
            { sentence: 'Analysts predict that inflation <em>will stabilize</em> by Q4.', note: 'Dự báo trang trọng' }
          ]
        },
        {
          title: 'Bài 2: Future Continuous & Future Perfect trong Báo cáo Dự phóng (Projections)',
          explanation: 'Diễn tả trạng thái sẽ đang diễn ra hoặc đã hoàn tất tại các mốc chiến lược trong tương lai.',
          examples: [
            { sentence: 'By next decade, renewable energy <em>will have surpassed</em> fossil fuels.', note: 'Dự phóng Future Perfect' }
          ]
        },
        {
          title: 'Bài 3: Be to + Infinitive, Be about to & Be on the verge of',
          explanation: 'Be to + V1 dùng trong thông cáo báo chí/mệnh lệnh trang trọng; Be on the verge/brink of + V-ing (trên bờ vực).',
          examples: [
            { sentence: 'The treaty <em>is to be signed</em> tomorrow in Geneva.', note: 'Be to + V1' },
            { sentence: 'The company is <em>on the verge of bankruptcy</em>.', note: 'On the verge of' }
          ]
        },
        {
          title: 'Bài 4: Be due to, Be bound to, Be likely / unlikely to',
          explanation: 'Cấu trúc tiên đoán mức độ chắc chắn: Bound to (tất yếu 100%); Due to (theo lịch trình); Likely to (rất có khả năng).',
          examples: [
            { sentence: 'Prices are <em>bound to rise</em> after the tax increase.', note: 'Tất yếu xảy ra' }
          ]
        },
        {
          title: 'Bài 5: Subordinate Time Clauses with Future Reference (Present Perfect)',
          explanation: 'Dùng Present Perfect trong mệnh đề thời gian để nhấn mạnh việc hành động 1 BẮT BUỘC xong xuôi rồi mới đến hành động 2.',
          examples: [
            { sentence: 'We will issue the statement once the auditor <em>has completed</em> the report.', note: 'Present Perfect trong time clause' }
          ]
        },
        {
          title: 'Bài 6: Timetables & Formal Schedules (Present Simple)',
          explanation: 'Sử dụng Present Simple cho các sự kiện tương lai tuân theo quy luật, lịch trình cố định của tổ chức.',
          examples: [
            { sentence: 'The fiscal year <em>ends</em> on March 31st.', note: 'Lịch tài chính' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The treaty will be to sign tomorrow.', correct: 'The treaty is to be signed tomorrow.', tip: 'Cấu trúc "Be to + V" dùng am/is/are/was/were, không dùng "will be to".' }
      ]
    }
  },

  // 37. adv-modals (6 bài)
  {
    id: 'adv-modals',
    level: 'advanced',
    title: 'Modals and semi – modals',
    subtitle: '6 bài về động từ khuyết thiếu',
    icon: '🎓',
    order: 137,
    murphyUnit: 'Advanced Units 15–20',
    content: {
      overview: '6 bài cao cấp về Động từ khuyết thiếu & Bán khuyết thiếu (Semi-modals): Sắc thái nghĩa trang trọng, Epistemic Modality, Suy đoán quá khứ và Giả định.',
      rules: [
        {
          title: 'Bài 1: Modals of Necessity & Obligation in Legal/Academic Registers',
          explanation: 'Sự khác biệt giữa Must, Shall (trong hợp đồng pháp lý), Ought to và Need trong văn bản chính thức.',
          examples: [
            { sentence: 'The tenant <em>shall pay</em> the rent on the first day of each month.', note: 'Shall trong hợp đồng' }
          ]
        },
        {
          title: 'Bài 2: Modals of Permission & Willingness — Polite & Subdued Style',
          explanation: 'Sử dụng May, Might, Would trong các yêu cầu ngoại giao, hội nghị quốc tế và văn thư thương mại.',
          examples: [
            { sentence: '<em>Might I suggest</em> an alternative solution?', note: 'Ngoại giao cực kỳ lịch sự' }
          ]
        },
        {
          title: 'Bài 3: Epistemic Modality — Suy đoán & Đánh giá Bằng chứng',
          explanation: 'Dùng Must have, Can\'t have, Couldn\'t have, May have, Might have để đánh giá độ tin cậy của bằng chứng lịch sử/khoa học.',
          examples: [
            { sentence: 'The artifact <em>must have been crafted</em> during the Bronze Age.', note: 'Suy đoán lịch sử' }
          ]
        },
        {
          title: 'Bài 4: Semi-modals & Quasi-modals — Need, Dare, Used to, Ought to',
          explanation: 'Cách dùng Need & Dare như động từ khuyết thiếu (Need I say more? / How dare you speak!).',
          examples: [
            { sentence: 'You <em>need not submit</em> the physical copy.', note: 'Need not + bare V' }
          ]
        },
        {
          title: 'Bài 5: Unfulfilled Past Intentions — Should have / Was to have done',
          explanation: 'Diễn tả dự định hoặc nghĩa vụ lẽ ra phải làm trong quá khứ nhưng đã KHÔNG xảy ra.',
          examples: [
            { sentence: 'The summit <em>was to have taken place</em> in Kyoto, but was postponed.', note: 'Dự định không thành' }
          ]
        },
        {
          title: 'Bài 6: Modals in Hypothesizing — Would vs Could vs Might',
          explanation: 'Sử dụng Would, Could, Might trong lập luận giả thuyết kinh tế và khoa học.',
          examples: [
            { sentence: 'A drop in interest rates <em>might stimulate</em> investment, but <em>could also induce</em> inflation.', note: 'Lập luận đa chiều' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'He needs not to come.', correct: 'He need not come. / He doesn\'t need to come.', tip: 'Need not đi trực tiếp với bare infinitive.' }
      ]
    }
  },

  // 38. adv-linking (7 bài)
  {
    id: 'adv-linking',
    level: 'advanced',
    title: 'Linkings verbs, passives, question',
    subtitle: '7 bài học về từ nối, động từ bị động, câu hỏi',
    icon: '🎓',
    order: 138,
    murphyUnit: 'Advanced Units 21–27',
    content: {
      overview: '7 bài học về Động từ liên kết (Copular Verbs), Thể bị động trong văn phong Viết học thuật (Academic Writing) và Cấu trúc câu hỏi nâng cao.',
      rules: [
        {
          title: 'Bài 1: Copular / Linking Verbs (Seem, Appear, Turn, Prove, Remain)',
          explanation: 'Các động từ chỉ sự duy trì hoặc biến đổi trạng thái + Tính từ / Danh từ mệnh đề.',
          examples: [
            { sentence: 'The theory <em>proved to be correct</em>.', note: 'Proved + to be + Adj' },
            { sentence: 'He <em>remained silent</em> throughout the trial.', note: 'Remain + Adj' }
          ]
        },
        {
          title: 'Bài 2: Passive Voice in Academic & Objective Discourse',
          explanation: 'Triệt tiêu tác nhân (Agentless Passive) và Danh từ hóa (Nominalization) để tạo tính khách quan khoa học.',
          examples: [
            { sentence: 'Samples <em>were collected</em> and <em>analyzed</em> under sterile conditions.', note: 'Văn phong khoa học' }
          ]
        },
        {
          title: 'Bài 3: Passives with Complex Transitive Verbs',
          explanation: 'Cấu trúc bị động với động từ có tân ngữ + bổ ngữ (consider, elect, appoint, make, regard as).',
          examples: [
            { sentence: 'Dr. Aris <em>was appointed Director</em> of the institute.', note: 'Bị động + Bổ ngữ' }
          ]
        },
        {
          title: 'Bài 4: Impersonal Passives — It is reported / He is thought to...',
          explanation: 'Dạng bị động gián tiếp với động từ chỉ ý kiến (allege, believe, claim, expect, report, rumor).',
          examples: [
            { sentence: 'He <em>is alleged to have embezzled</em> millions.', note: 'Phân từ hoàn thành bị động' }
          ]
        },
        {
          title: 'Bài 5: Causative & Passivized Structures (Make -> Be made to)',
          explanation: 'Chủ động: make sb do st -> Bị động: be made TO do st; see sb do -> be seen TO do st.',
          examples: [
            { sentence: 'Active: They made him sign.', note: 'Chủ động' },
            { sentence: 'Passive: He <em>was made to sign</em> the confession.', note: 'Bị động có TO' }
          ]
        },
        {
          title: 'Bài 6: Advanced Question Forms — Rhetorical & Negative Questions',
          explanation: 'Câu hỏi tu từ (Rhetorical Questions) và Câu hỏi phủ định nhằm thuyết phục trong diễn văn.',
          examples: [
            { sentence: '<em>Is it not time</em> we addressed the root cause of inequality?', note: 'Câu hỏi thuyết phục' }
          ]
        },
        {
          title: 'Bài 7: Fronted Prepositions in Wh- Questions (Formal Style)',
          explanation: 'Đưa giới từ lên trước đại từ nghi vấn trong văn phong trang trọng (To whom, With which).',
          examples: [
            { sentence: '<em>To whom</em> was the letter addressed?', note: 'Trang trọng (To whom)' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'He was made sign the document.', correct: 'He was made to sign the document.', tip: 'Ở dạng bị động của "make", động từ sau nó phải có "to" (be made to do).' }
      ]
    }
  },

  // 39. adv-verb-comp (4 bài)
  {
    id: 'adv-verb-comp',
    level: 'advanced',
    title: 'Verb complementations',
    subtitle: '4 bài về động từ liên kết',
    icon: '🎓',
    order: 139,
    murphyUnit: 'Advanced Units 28–31',
    content: {
      overview: '4 bài cao cấp về Bổ ngữ cho động từ (Verb Complementations): Ngữ nghĩa Gerund vs Infinitive, Thức giả định (Subjunctive), và Cấu trúc Tri giác.',
      rules: [
        {
          title: 'Bài 1: Complex Semantic Differences (-ing vs To-Infinitive)',
          explanation: 'Phân tích tinh tế giữa Mean to do (dự định) vs Mean doing (có nghĩa là); Regret to say vs Regret doing.',
          examples: [
            { sentence: 'Raising taxes <em>means reducing</em> disposable income.', note: 'Mean + V-ing = có nghĩa là' }
          ]
        },
        {
          title: 'Bài 2: Subjunctive Mood after Suggest, Demand, Insist, Recommend',
          explanation: 'Cấu trúc Thức giả định: Verb + that + S + V-bare (không chia theo thì hay chủ ngữ).',
          examples: [
            { sentence: 'The committee recommended that he <em>resign</em> immediately.', note: 'Subjunctive (resign, not resigns)' },
            { sentence: 'It is essential that she <em>be</em> informed.', note: 'Subjunctive với Be' }
          ]
        },
        {
          title: 'Bài 3: Verbs of Perception — Bare Infinitive vs Participle (-ing)',
          explanation: 'See / Hear / Watch / Feel + Sb + V-bare (thấy toàn bộ quá trình) vs V-ing (thấy 1 phần/đang diễn ra).',
          examples: [
            { sentence: 'I saw him <em>cross</em> the street. (Thấy từ đầu bên này sang bên kia)', note: 'V-bare (toàn bộ)' },
            { sentence: 'I saw him <em>crossing</em> the street. (Thấy khi đang bước đi dở)', note: 'V-ing (một phần)' }
          ]
        },
        {
          title: 'Bài 4: Prepositional Verb Complementations & Noun Clauses',
          explanation: 'Cấu trúc Động từ + Giới từ + Mệnh đề Noun Clause (insist on what..., object to how...).',
          examples: [
            { sentence: 'They strongly objected to <em>how the test was conducted</em>.', note: 'Preposition + Wh- clause' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The doctor suggested that he lies down.', correct: 'The doctor suggested that he lie down.', tip: 'Trong thức giả định (subjunctive), động từ giữ nguyên thể (lie, not lies).' }
      ]
    }
  },

  // 40. adv-reporting (8 bài)
  {
    id: 'adv-reporting',
    level: 'advanced',
    title: 'Reporting',
    subtitle: '8 bài về câu tường thuật',
    icon: '🎓',
    order: 140,
    murphyUnit: 'Advanced Units 32–39',
    content: {
      overview: '8 bài học nâng cao về Câu tường thuật (Reporting) trong văn phong học thuật, báo chí, Thức giả định gián tiếp, Paraphrasing và Khoảng cách quan điểm.',
      rules: [
        {
          title: 'Bài 1: Syntactic Patterns of Advanced Reporting Verbs',
          explanation: 'Phân loại 5 mẫu cú pháp tường thuật cao cấp (verb + that clause, verb + obj + to V, verb + -ing, verb + prep + -ing, verb + clause).',
          examples: [
            { sentence: 'The report <em>highlighted the need for reform</em>.', note: 'Tường thuật tổng quát' }
          ]
        },
        {
          title: 'Bài 2: Subjunctive & Modal Shifts in Indirect Speech',
          explanation: 'Xử lý động từ khuyết thiếu và thức giả định khi chuyển sang tường thuật gián tiếp.',
          examples: [
            { sentence: 'Direct: "You should leave."', note: 'Trực tiếp' },
            { sentence: 'Reported: He advised that I <em>should leave</em> / I <em>leave</em>.', note: 'Subjunctive shift' }
          ]
        },
        {
          title: 'Bài 3: Academic Summarizing & Reporting Statements',
          explanation: 'Sử dụng các động từ: argue, assert, contend, claim, maintain, demonstrate, indicate trong tổng thuật văn liệu (Literature Review).',
          examples: [
            { sentence: 'Smith (2020) <em>argues that</em> capital investment drives growth.', note: 'Trích dẫn học thuật' }
          ]
        },
        {
          title: 'Bài 4: Paraphrasing & Distancing Techniques',
          explanation: 'Sử dụng "allegedly", "reportedly", "it is claimed that" để tạo khoảng cách khách quan, tránh quy kết trách nhiệm pháp lý.',
          examples: [
            { sentence: 'The suspect <em>allegedly fled</em> the country.', note: 'Tạo khoảng cách (allegedly)' }
          ]
        },
        {
          title: 'Bài 5: Exceptions to Backshift Rules in Reporting',
          explanation: 'Không lùi thì khi sự thật vẫn còn đúng ở hiện tại hoặc khi hành động vừa mới xảy ra xong.',
          examples: [
            { sentence: 'The teacher explained that the Earth <em>revolves</em> around the Sun.', note: 'Sự thật vĩnh cửu (Không lùi thì)' }
          ]
        },
        {
          title: 'Bài 6: Reporting Commands, Offers, Suggestions & Requests',
          explanation: 'Tổng hợp cấu trúc tường thuật câu hỏi, mệnh lệnh, lời hứa, lời đe dọa.',
          examples: [
            { sentence: 'He <em>threatened to resign</em> if his demands were not met.', note: 'Threaten + to V' }
          ]
        },
        {
          title: 'Bài 7: Register Shift — Formal vs Informal Reporting',
          explanation: 'So sánh giữa tường thuật hội thoại hàng ngày và tường thuật báo chí chính luận.',
          examples: [
            { sentence: 'Informal: He said he was sorry.', note: 'Hàng ngày' },
            { sentence: 'Formal: He <em>expressed regret for his actions</em>.', note: 'Trang trọng' }
          ]
        },
        {
          title: 'Bài 8: Indirect Speech with Complex Conditional Sentences',
          explanation: 'Tường thuật câu điều kiện loại 2 và loại 3 (Giữ nguyên thì điều kiện giả định).',
          examples: [
            { sentence: 'Direct: "If I were you, I would accept."', note: 'Trực tiếp' },
            { sentence: 'Reported: She said that <em>if she were me, she would accept</em>.', note: 'Giữ nguyên loại 2' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'Smith claimed that he has solved the problem (in 1990).', correct: 'Smith claimed that he had solved the problem.', tip: 'Sự kiện học thuật quá khứ vẫn cần tuân thủ lùi thì thích hợp.' }
      ]
    }
  },

  // 41. adv-nouns (4 bài)
  {
    id: 'adv-nouns',
    level: 'advanced',
    title: 'Nouns',
    subtitle: '4 bài danh từ nâng cao với động từ và chủ ngữ',
    icon: '🎓',
    order: 141,
    murphyUnit: 'Advanced Units 40–43',
    content: {
      overview: '4 bài nâng cao về Danh từ: Sự hòa hợp Chủ ngữ - Động từ phức tạp (Subject-Verb Agreement), Danh từ khối, Danh từ hóa (Nominalization) và Tiền bổ ngữ.',
      rules: [
        {
          title: 'Bài 1: Advanced Subject-Verb Agreement',
          explanation: 'Sự hòa hợp khi chủ ngữ chứa: Neither... nor, Either... or, Along with, As well as, Fraction/Percentage, Plural Noun with Singular Meaning (news, physics, economics).',
          examples: [
            { sentence: 'Neither the manager nor the employees <em>were</em> satisfied.', note: 'Chia theo chủ ngữ gần nhất (employees)' },
            { sentence: 'Economics <em>is</em> my favorite subject.', note: 'Môn học chia số ít' }
          ]
        },
        {
          title: 'Bài 2: Special Countable & Uncountable Noun Nuances',
          explanation: 'Phân tích danh từ chỉ vật liệu, phạm trù chuyên ngành (criteria/criterion, phenomena/phenomenon, strata/stratum).',
          examples: [
            { sentence: 'Social <em>media are</em> influencing public opinion.', note: 'Media (số nhiều gốc Latinh)' }
          ]
        },
        {
          title: 'Bài 3: Nominalization in Academic & Formal Writing',
          explanation: 'Chuyển đổi Động từ/Tính từ thành Cụm danh từ để tăng tính súc tích và trang trọng cho bài viết.',
          examples: [
            { sentence: 'Informal: We analyzed the data quickly.', note: 'Cụm động từ' },
            { sentence: 'Formal: A rapid <em>analysis of the data</em> was conducted.', note: 'Nominalization' }
          ]
        },
        {
          title: 'Bài 4: Complex Noun Pre-modifiers & Genitives (\'s vs Of)',
          explanation: 'Trật tự tiền bổ ngữ danh từ phức hợp (a state-of-the-art research facility) và chọn lựa \'s vs of.',
          examples: [
            { sentence: 'A <em>cutting-edge technology company</em>.', note: 'Tiền bổ ngữ danh từ' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The president as well as his advisors were present.', correct: 'The president as well as his advisors was present.', tip: 'Khi có "as well as", động từ chia theo chủ ngữ chính đầu tiên (president).' }
      ]
    }
  },

  // 42. adv-articles (8 bài)
  {
    id: 'adv-articles',
    level: 'advanced',
    title: 'Articles, determiners, quantifiers',
    subtitle: '8 bài về a,an, one, some…',
    icon: '🎓',
    order: 142,
    murphyUnit: 'Advanced Units 44–51',
    content: {
      overview: '8 bài chuyên sâu về Mạo từ & Từ định lượng nâng cao: Qui chiếu đại quát (Generic reference), Mạo từ zero, Quantifier Stacking, và Sự kết hợp từ.',
      rules: [
        {
          title: 'Bài 1: Generic Reference with Articles (The vs A vs Plural)',
          explanation: 'Qui chiếu đại quát đại diện cho cả loài/thể loại: "The + N số ít" (trang trọng/khoa học), "A + N số ít" (bất kỳ đại diện nào), "N số nhiều" (thông dụng nhất).',
          examples: [
            { sentence: '<em>The blue whale</em> is the largest mammal.', note: 'Trang trọng khoa học (The)' },
            { sentence: '<em>A whale</em> needs to breathe air.', note: 'Đại diện bất kỳ (A)' },
            { sentence: '<em>Whales</em> are intelligent creatures.', note: 'Số nhiều thông dụng' }
          ]
        },
        {
          title: 'Bài 2: The with Proper Nouns & Unique Institutions',
          explanation: 'Sử dụng The với tên bảo tàng, báo chí, tổ chức, tàu thuyền, tác phẩm nghệ thuật nổi tiếng.',
          examples: [
            { sentence: '<em>The Louvre</em>, <em>The Times</em>, <em>The United Nations</em>.', note: 'Tổ chức & Thể chế' }
          ]
        },
        {
          title: 'Bài 3: Zero Article in Abstract & Academic Contexts',
          explanation: 'Không dùng mạo từ trước các danh từ khái niệm trừu tượng: society, nature, space, history, progress, technology.',
          examples: [
            { sentence: '<em>Technology</em> is transforming <em>society</em>.', note: 'Trừu tượng (Zero article)' }
          ]
        },
        {
          title: 'Bài 4: Advanced Quantifiers — Each, Every, All, Both, Neither, Either',
          explanation: 'Sự hòa hợp cú pháp và ngữ nghĩa khi đi kèm của "All of", "Both of", "Neither of".',
          examples: [
            { sentence: '<em>Neither of the proposed solutions</em> is viable.', note: 'Neither of + Plural N + Singular V' }
          ]
        },
        {
          title: 'Bài 5: Quantifiers with "Of" (A great deal of, A large proportion of)',
          explanation: 'Cách dùng tỉ lệ phần trăm, phân số và các cụm chỉ lượng lớn trong báo cáo thống kê.',
          examples: [
            { sentence: 'A substantial <em>proportion of the budget</em> was allocated to R&D.', note: 'Proportion of' }
          ]
        },
        {
          title: 'Bài 6: Determiner Stack Order & Co-occurrence Restrictions',
          explanation: 'Trật tự xếp chồng Determiner: Predeterminer (all, both, double) -> Central (the, my) -> Postdeterminer (first, two, other).',
          examples: [
            { sentence: '<em>All my other three</em> projects.', note: 'Pre -> Central -> Post' }
          ]
        },
        {
          title: 'Bài 7: Indefinite Scope in Conditional & Negative Contexts',
          explanation: 'Cách dùng Any / Some trong câu điều kiện và câu khẳng định với ý nghĩa "bất kỳ ai/cái nào".',
          examples: [
            { sentence: '<em>Any candidate</em> who fails the test will be disqualified.', note: 'Any = bất kỳ ai' }
          ]
        },
        {
          title: 'Bài 8: Articles in Idiomatic & Fixed Prepositional Phrases',
          explanation: 'Bảng tổng hợp các cụm từ cố định đi kèm hoặc không đi kèm mạo từ (in the end, at last, by car, on foot, in demand).',
          table: {
            headers: ['Có Mạo từ (The/A)', 'Không Mạo từ (Zero)'],
            rows: [
              ['in the long run / at the moment', 'at night / by train / on foot'],
              ['make a living / take a break', 'take action / pay attention / make sense']
            ]
          }
        }
      ],
      commonMistakes: [
        { wrong: 'The technology is advancing fast.', correct: 'Technology is advancing fast.', tip: 'Khi nói chung về công nghệ (Technology), không dùng "the".' }
      ]
    }
  },

  // 43. adv-relative (7 bài)
  {
    id: 'adv-relative',
    level: 'advanced',
    title: 'Relative clauses',
    subtitle: '7 bài về mệnh đề quan hệ và những loại câu khác',
    icon: '🎓',
    order: 143,
    murphyUnit: 'Advanced Units 52–58',
    content: {
      overview: '7 bài học cao cấp về Mệnh đề quan hệ: Formal relative pronouns, Sentential relative clauses, Nominal relatives, Quantifier + of + relative, và Cleft sentences.',
      rules: [
        {
          title: 'Bài 1: Formal Relative Pronouns with Prepositions (Whom / Which)',
          explanation: 'Đặt giới từ lên đầu mệnh đề quan hệ trong văn phong học thuật (in which, to whom, for whose).',
          examples: [
            { sentence: 'The conditions <em>under which the experiment was conducted</em> were controlled.', note: 'Preposition + Which' }
          ]
        },
        {
          title: 'Bài 2: Sentential Relative Clauses (Which thay cho cả mệnh đề)',
          explanation: 'Dùng ", which" ở cuối câu để đưa ra lời nhận xét/đánh giá về toàn bộ hành động/ý tưởng phía trước.',
          examples: [
            { sentence: 'He passed the exam with distinction, <em>which surprised everyone</em>.', note: 'Which thay cho cả mệnh đề trước' }
          ]
        },
        {
          title: 'Bài 3: Reduced Relative Clauses with Participles & Adjectives',
          explanation: 'Rút gọn mệnh đề quan hệ phức tạp thành cụm Phân từ (Present/Past Participle) hoặc cụm Tính từ.',
          examples: [
            { sentence: 'The candidates <em>eligible for the scholarship</em> will be notified.', note: 'Rút gọn thành Cụm tính từ' }
          ]
        },
        {
          title: 'Bài 4: Nominal Relative Clauses (What / Whoever / Whatever)',
          explanation: 'Mệnh đề quan hệ danh từ đóng vai trò làm Chủ ngữ hoặc Tân ngữ (What you need is rest / Take whatever you want).',
          examples: [
            { sentence: '<em>What concerns me most</em> is the lack of preparation.', note: 'What clause làm chủ ngữ' }
          ]
        },
        {
          title: 'Bài 5: Quantifier + OF + Relative Pronoun',
          explanation: 'Cấu trúc: Many of whom, Most of which, Neither of whose, Two of which.',
          examples: [
            { sentence: 'She published 5 papers, <em>three of which</em> were featured in Nature.', note: 'Three of which' }
          ]
        },
        {
          title: 'Bài 6: Whose with Inanimate Nouns vs Of Which',
          explanation: 'Dùng "whose" cho cả vật trong câu trang trọng nhẹ nhàng (a company whose strategy changed) hoặc "of which".',
          examples: [
            { sentence: 'It is a policy <em>whose consequences</em> are far-reaching.', note: 'Whose chỉ vật' }
          ]
        },
        {
          title: 'Bài 7: Relative Clauses vs Appositives (Mệnh đề đồng vị)',
          explanation: 'Phân biệt mệnh đề quan hệ (The news which he heard) và mệnh đề đồng vị giải thích (The news that he died).',
          examples: [
            { sentence: 'The fact <em>that the earth is round</em> is undisputed.', note: 'Mệnh đề đồng vị (Appositive)' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'She has two sons, both of them are doctors.', correct: 'She has two sons, both of whom are doctors.', tip: 'Nối 2 mệnh đề độc lập phải dùng "both of whom", không dùng "both of them".' }
      ]
    }
  },

  // 44. adv-pronouns (6 bài)
  {
    id: 'adv-pronouns',
    level: 'advanced',
    title: 'Pronouns, substitution, leaving out words',
    subtitle: '6 bài về Đại từ nhân xưng, từ liên kết',
    icon: '🎓',
    order: 144,
    murphyUnit: 'Advanced Units 59–64',
    content: {
      overview: '6 bài học về Đại từ & Cấu trúc Lược bỏ (Ellipsis & Substitution): Lược bỏ từ lặp, Đại từ thay thế Do so / One / That, và Extraposition.',
      rules: [
        {
          title: 'Bài 1: Ellipsis in Coordination & Comparison (Lược bỏ từ)',
          explanation: 'Lược bỏ thành phần trùng lặp trong câu nối và câu so sánh để tránh lặp từ (She can play piano and [she can] sing).',
          examples: [
            { sentence: 'John cooked dinner and Mary [cooked] dessert.', note: 'Lược bỏ V trùng' }
          ]
        },
        {
          title: 'Bài 2: Substitution with "Do so", "So", "That / Those"',
          explanation: 'Dùng "do so" thay cho cụm động từ; "that/those" thay cho cụm danh từ trong văn viết trang trọng.',
          examples: [
            { sentence: 'Applicants must sign the form; failure to <em>do so</em> will invalidate the application.', note: 'Do so' },
            { sentence: 'The climate of Vietnam is warmer than <em>that of</em> Canada.', note: 'That of = the climate of' }
          ]
        },
        {
          title: 'Bài 3: Extraposition with Dummy "It"',
          explanation: 'Chuyển mệnh đề chủ ngữ dài ra đằng sau bằng chủ ngữ giả "It" (It is vital that we maintain high standards).',
          examples: [
            { sentence: '<em>It is obvious that</em> further research is required.', note: 'Extraposition' }
          ]
        },
        {
          title: 'Bài 4: Disambiguation of Pronoun Reference in Academic Prose',
          explanation: 'Xử lý tính mơ hồ của đại từ (Pronoun Ambiguity) trong văn phong nghiên cứu khoa học.',
          examples: [
            { sentence: 'Unclear: Tom told John that he won.', note: 'Mơ hồ (he là ai?)' },
            { sentence: 'Clear: Tom informed John of John\'s victory.', note: 'Rõ ràng' }
          ]
        },
        {
          title: 'Bài 5: Omission of Auxiliary Verbs & Relative Pronouns in Reduced Clauses',
          explanation: 'Quy tắc tiêu biến trợ động từ trong các câu rút gọn mệnh đề song song.',
          examples: [
            { sentence: 'Some guests ordered tea, others [ordered] coffee.', note: 'Lược bỏ trợ V/động từ' }
          ]
        },
        {
          title: 'Bài 6: Reciprocal & Emphatic Pronouns in Formal Register',
          explanation: 'Sử dụng đại từ tương hỗ và đại từ nhấn mạnh trong các văn kiện ngoại giao/pháp lý.',
          examples: [
            { sentence: 'The contracting parties pledge to support <em>one another</em>.', note: 'One another trong văn bản' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The salary of a manager is higher than a worker.', correct: 'The salary of a manager is higher than that of a worker.', tip: 'So sánh lương với lương, phải có "that of" để thay cho "the salary of".' }
      ]
    }
  },

  // 45. adv-adjectives (13 bài)
  {
    id: 'adv-adjectives',
    level: 'advanced',
    title: 'Adjectives and adverbs',
    subtitle: '13 bài về tính từ và trạng từ',
    icon: '🎓',
    order: 145,
    murphyUnit: 'Advanced Units 65–77',
    content: {
      overview: '13 bài cao cấp nhất về Tính từ & Trạng từ: Attributive vs Predicative, Gradability, Danh từ hóa Tính từ, Trạng từ thái độ (Stance Adverbs) và Đảo ngữ nâng cao.',
      rules: [
        {
          title: 'Bài 1: Attributive vs Predicative Adjectives',
          explanation: 'Attributive (chỉ đứng trước N: main, chief, total, utter); Predicative (chỉ đứng sau To Be: afraid, asleep, alone, alive, aware).',
          examples: [
            { sentence: 'The child is <em>asleep</em>. (NOT an asleep child)', note: 'Predicative only' },
            { sentence: 'This is the <em>main</em> reason. (NOT the reason is main)', note: 'Attributive only' }
          ]
        },
        {
          title: 'Bài 2: Advanced Adjective Order & Cumulative Adjectives',
          explanation: 'Phân biệt tính từ phối hợp (Coordinating - có dấu phẩy/and) và tính từ cộng dồn (Cumulative - không phẩy).',
          examples: [
            { sentence: 'A long, dark, cold night.', note: 'Coordinating adjectives' }
          ]
        },
        {
          title: 'Bài 3: Gradable vs Absolute Adjectives & Degree Modifiers',
          explanation: 'Tuyệt đối: unique, perfect, impossible, dead. Đi kèm: utterly, completely, entirely, perfectly.',
          examples: [
            { sentence: 'It is <em>utterly impossible</em> to complete.', note: 'Utterly + absolute adj' }
          ]
        },
        {
          title: 'Bài 4: Nominalized Adjectives ("The" + Adjective)',
          explanation: 'Dùng "The + Adj" để chỉ một nhóm người mang đặc điểm đó (The rich, the poor, the elderly, the unemployed) -> Chia động từ SỐ NHIỀU.',
          examples: [
            { sentence: '<em>The elderly are</em> more vulnerable to extreme weather.', note: 'The elderly + Plural V' }
          ]
        },
        {
          title: 'Bài 5: Advanced Participle Adjectives in Descriptive Prose',
          explanation: 'Tính từ phân từ tạo hiệu ứng miêu tả hình ảnh sống động (a glittering diamond, a shattered dream).',
          examples: [
            { sentence: 'The <em>shattered window</em> offered no protection.', note: 'Participle adjective' }
          ]
        },
        {
          title: 'Bài 6: Position of Sentence & Stance Adverbs',
          explanation: 'Admittedly, Surprisingly, Frankly, Regrettably, Undeniably đứng đầu câu để thể hiện thái độ người nói.',
          examples: [
            { sentence: '<em>Admittedly</em>, the project faced initial setbacks.', note: 'Stance adverb' }
          ]
        },
        {
          title: 'Bài 7: Discourse & Comment Adverbs (Furthermore, Consequently)',
          explanation: 'Phân loại các trạng từ định hướng lập luận trong văn viết chính luận.',
          examples: [
            { sentence: '<em>Consequently</em>, the policy was repealed.', note: 'Comment adverb' }
          ]
        },
        {
          title: 'Bài 8: Inversion after Negative & Restrictive Adverbs (Đảo ngữ nâng cao)',
          explanation: 'Seldom, Rarely, Never, Little, Scarcely... when, No sooner... than, Only by, Under no circumstances.',
          examples: [
            { sentence: 'Under no circumstances <em>should you reveal</em> the password.', note: 'Đảo ngữ với Under no circumstances' }
          ]
        },
        {
          title: 'Bài 9: Complex Comparative Structures (As... as, The... the...)',
          explanation: 'Cấu trúc so sánh kết hợp mệnh đề (As much as I admire his work, I disagree with his conclusions).',
          examples: [
            { sentence: '<em>As much as I like</em> the idea, it is impractical.', note: 'As much as + Clause' }
          ]
        },
        {
          title: 'Bài 10: Superlatives with Advanced Modifiers',
          explanation: 'Easily the best, by far the most significant, arguably the greatest.',
          examples: [
            { sentence: 'He is <em>arguably the greatest</em> physicist of our time.', note: 'Arguably + Superlative' }
          ]
        },
        {
          title: 'Bài 11: Compound Adjectives & Hyphenation Rules',
          explanation: 'Quy tắc dùng dấu gạch nối trong tính từ ghép (user-friendly, high-density, well-established).',
          examples: [
            { sentence: 'A <em>well-established theory</em>.', note: 'Hyphenated compound' }
          ]
        },
        {
          title: 'Bài 12: Adverbial Modification of Clauses & Prepositional Phrases',
          explanation: 'Trạng từ bổ nghĩa cho cụm giới từ (right through the wall, straight to the point).',
          examples: [
            { sentence: 'He walked <em>straight into the office</em>.', note: 'Straight bổ nghĩa cho into...' }
          ]
        },
        {
          title: 'Bài 13: Adjectives with Fixed Prepositions & Infinitives',
          explanation: 'Bảng tổng hợp tính từ cao cấp đi kèm giới từ (prone to, susceptible to, immune to, exempt from).',
          table: {
            headers: ['Tính từ', 'Giới từ đi kèm', 'Ý nghĩa'],
            rows: [
              ['prone to', 'to (+ N/V-ing)', 'dễ bị (bệnh/tai nạn)'],
              ['susceptible to', 'to (+ N)', 'nhạy cảm/dễ bị ảnh hưởng'],
              ['exempt from', 'from (+ N)', 'được miễn']
            ]
          },
          examples: [
            { sentence: 'Old cars are <em>prone to breaking down</em>.', note: 'Prone to + V-ing' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The rich is getting richer.', correct: 'The rich are getting richer.', tip: 'Cấu trúc "The + Adj" chỉ một nhóm người luôn chia động từ số nhiều.' }
      ]
    }
  },

  // 46. adv-adverbial (9 bài)
  {
    id: 'adv-adverbial',
    level: 'advanced',
    title: 'Adverbial clauses and conjunctions',
    subtitle: '9 bài về mệnh đề và liên từ',
    icon: '🎓',
    order: 146,
    murphyUnit: 'Advanced Units 78–86',
    content: {
      overview: '9 bài chuyên sâu về Mệnh đề Trạng ngữ (Adverbial Clauses): Thời gian, Nguyên nhân, Mục đích, Kết quả, Nhượng bộ, Điều kiện nâng cao và Đảo ngữ điều kiện.',
      rules: [
        {
          title: 'Bài 1: Time Clauses & Advanced Temporal Markers',
          explanation: 'Hardly... when, Scarcely... before, No sooner... than, Once, The moment that.',
          examples: [
            { sentence: '<em>The moment (that) I heard</em> the news, I called him.', note: 'The moment that' }
          ]
        },
        {
          title: 'Bài 2: Clauses of Reason & Cause (In view of, Seeing that)',
          explanation: 'Seeing that, In view of the fact that, Considering that, Inasmuch as.',
          examples: [
            { sentence: '<em>Seeing that it is raining</em>, we should postpone the game.', note: 'Seeing that = because' }
          ]
        },
        {
          title: 'Bài 3: Clauses of Purpose (Lest, For fear that, So as to)',
          explanation: 'Lest / For fear that + S + should + V1 (phòng ngừa việc xấu xảy ra).',
          examples: [
            { sentence: 'He checked the document again <em>lest he should make</em> a mistake.', note: 'Lest + S + should V' }
          ]
        },
        {
          title: 'Bài 4: Clauses of Result (With the result that)',
          explanation: 'He failed to comply, <em>with the result that</em> his license was revoked.',
          examples: [
            { sentence: 'Sales dropped sharply, <em>with the result that</em> staff were laid off.', note: 'With the result that' }
          ]
        },
        {
          title: 'Bài 5: Clauses of Concession (Much as, However, Whatever)',
          explanation: 'Much as + S + V (Dù cho rất...: Much as I respect him, I disagree); Adj + as/though + S + V (Hard as he tried...).',
          examples: [
            { sentence: '<em>Much as I would like to help</em>, I am unable to.', note: 'Much as = Although very much' },
            { sentence: '<em>Hard as he tried</em>, he couldn\'t open the safe.', note: 'Adj + as + S + V' }
          ]
        },
        {
          title: 'Bài 6: Inverted Conditionals (Đảo ngữ Câu Điều kiện)',
          explanation: 'Type 1: Should you need...; Type 2: Were I you... / Were it not for...; Type 3: Had I known... / Had it not been for...',
          table: {
            headers: ['Loại Điều kiện', 'Câu Chuẩn', 'Đảo Ngữ Trang Trọng'],
            rows: [
              ['Loại 1', 'If you need help...', 'Should you need help...'],
              ['Loại 2', 'If I were rich...', 'Were I rich...'],
              ['Loại 3', 'If I had known...', 'Had I known...']
            ]
          },
          examples: [
            { sentence: '<em>Had I known</em> about the traffic, I would have taken the metro.', note: 'Đảo ngữ Loại 3' }
          ]
        },
        {
          title: 'Bài 7: Manner & Comparison Clauses (As if / As though)',
          explanation: 'Phân biệt mệnh đề chỉ thể cách thật (Present) vs giả định (Past Subjunctive).',
          examples: [
            { sentence: 'He looks as if he <em>has seen</em> a ghost. (Có vẻ vừa thấy thật)', note: 'Hiện tại' },
            { sentence: 'He behaves as if he <em>were</em> the king. (Giả định không thật)', note: 'Past Subjunctive' }
          ]
        },
        {
          title: 'Bài 8: Reduced Adverbial Participle Clauses',
          explanation: 'Rút gọn mệnh đề trạng ngữ đồng chủ ngữ: Having finished the report, he submitted it.',
          examples: [
            { sentence: '<em>Having completed the survey</em>, the team analyzed the responses.', note: 'Having + V3 clause' }
          ]
        },
        {
          title: 'Bài 9: Transition & Discourse Connectors Matrix',
          explanation: 'Bảng phân loại toàn bộ các từ nối theo nhóm chức năng logic trong văn bản.',
          table: {
            headers: ['Chức năng', 'Từ nối / Mệnh đề trạng ngữ'],
            rows: [
              ['Tương phản', 'although, whereas, in spite of, nonetheless, converseley'],
              ['Nguyên nhân', 'because, since, owing to, seeing that, on account of'],
              ['Bổ sung', 'furthermore, in addition, moreover, besides, along with']
            ]
          }
        }
      ],
      commonMistakes: [
        { wrong: 'Had I knew the truth, I would have told you.', correct: 'Had I known the truth, I would have told you.', tip: 'Đảo ngữ loại 3 dùng Had + S + V3 (known, not knew).' }
      ]
    }
  },

  // 47. adv-prepositions (7 bài)
  {
    id: 'adv-prepositions',
    level: 'advanced',
    title: 'Prepositions',
    subtitle: '7 bài về Giới từ',
    icon: '🎓',
    order: 147,
    murphyUnit: 'Advanced Units 87–93',
    content: {
      overview: '7 bài cao cấp về Giới từ: Complex prepositions, Prepositional phrases as modifiers, Dependent prepositions và Postposed prepositions (Preposition stranding).',
      rules: [
        {
          title: 'Bài 1: Complex Multi-word Prepositions',
          explanation: 'In light of, with regard to, by virtue of, in accordance with, on behalf of, for the sake of.',
          examples: [
            { sentence: '<em>In light of recent events</em>, we have updated our policy.', note: 'In light of' }
          ]
        },
        {
          title: 'Bài 2: Prepositional Phrases as Post-modifiers in Noun Phrases',
          explanation: 'Dùng cụm giới từ làm bổ ngữ sau danh từ (the man with the yellow hat, the problem of global warming).',
          examples: [
            { sentence: 'The issue <em>under discussion</em> is critical.', note: 'Post-modifier' }
          ]
        },
        {
          title: 'Bài 3: Advanced Verbs with Fixed Prepositions',
          explanation: 'Attribute st to st, substitute A for B, impose st on sb, derive st from st.',
          examples: [
            { sentence: 'He <em>attributed his success to</em> hard work.', note: 'Attribute... to' }
          ]
        },
        {
          title: 'Bài 4: Advanced Adjectives with Fixed Prepositions',
          explanation: 'Compatible with, incompatible with, tantamount to, inherent in, integral to.',
          examples: [
            { sentence: 'His statement was <em>tantamount to an admission of guilt</em>.', note: 'Tantamount to' }
          ]
        },
        {
          title: 'Bài 5: Prepositions vs Conjunctions Contrast Matrix',
          explanation: 'Ma trận phân biệt giới từ (cần Noun) vs Liên từ (cần Mệnh đề): During/While, Due to/Because, Despite/Although.',
          examples: [
            { sentence: 'We stayed indoors <em>owing to the storm</em>.', note: 'Giới từ + Noun' }
          ]
        },
        {
          title: 'Bài 6: Preposition Stranding (Giới từ treo ở cuối câu)',
          explanation: 'Hiện tượng giới từ đứng ở cuối câu trong mệnh đề quan hệ, câu bị động và câu hỏi.',
          examples: [
            { sentence: 'That is the house which I spent my childhood <em>in</em>.', note: 'Preposition stranding' }
          ]
        },
        {
          title: 'Bài 7: Idiomatic Prepositional Metaphors in Business & Law',
          explanation: 'Under the auspices of, at the discretion of, in compliance with, at odds with.',
          examples: [
            { sentence: 'The event was held <em>under the auspices of the UN</em>.', note: 'Thành ngữ giới từ' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'In accordance to the rules.', correct: 'In accordance with the rules.', tip: 'Cụm từ chuẩn là "in accordance with".' }
      ]
    }
  },

  // 48. adv-organising (6 bài)
  {
    id: 'adv-organising',
    level: 'advanced',
    title: 'Organising information',
    subtitle: '6 bài về các cấu trúc sắp xếp thông tin',
    icon: '🎓',
    order: 148,
    murphyUnit: 'Advanced Units 94–100',
    content: {
      overview: '6 bài học nghệ thuật Viết nâng cao: Cấu trúc Tiền đề (Fronting), Đảo ngữ nghệ thuật (Inversion), Câu chẻ (Cleft Sentences), Bao gói thông tin (Information Packaging) và Đã biết vs Mới (Given vs New Information).',
      rules: [
        {
          title: 'Bài 1: Fronting & Topicalization (Tiền đề hóa)',
          explanation: 'Đưa tân ngữ, cụm giới từ hoặc bổ ngữ lên đầu câu để tạo sự chú ý hoặc liên kết văn bản.',
          examples: [
            { sentence: 'Standard: I cannot tolerate such behavior.', note: 'Chuẩn' },
            { sentence: 'Fronted: <em>Such behavior I cannot tolerate</em>.', note: 'Tiền đề hóa nhấn mạnh' }
          ]
        },
        {
          title: 'Bài 2: Subject-Verb Inversion for Literary Effect',
          explanation: 'Đảo động từ chính lên trước chủ ngữ khi mệnh đề bắt đầu bằng từ chỉ phương hướng/vị trí (Into the room walked a stranger).',
          examples: [
            { sentence: 'On the top of the hill <em>stood an ancient castle</em>.', note: 'Đảo ngữ vị trí (Place inversion)' }
          ]
        },
        {
          title: 'Bài 3: Cleft Sentences — It-clefts & Wh-clefts (Câu chẻ)',
          explanation: 'It is/was... that... (nhấn mạnh 1 thành phần cụ thể); What... is/was... (nhấn mạnh hành động/ý niệm).',
          examples: [
            { sentence: '<em>It was John who</em> broke the window.', note: 'It-cleft' },
            { sentence: '<em>What we need is</em> a clear strategy.', note: 'Wh-cleft / Pseudo-cleft' }
          ]
        },
        {
          title: 'Bài 4: Passive Voice for Information Packaging (Given vs New)',
          explanation: 'Đặt thông tin cũ/đã biết (Given info) ở đầu câu và thông tin mới/quan trọng (New info) ở cuối câu.',
          examples: [
            { sentence: 'The theory was proposed by Einstein in 1905. <em>This theory was later validated</em> by experimental data.', note: 'Given -> New flow' }
          ]
        },
        {
          title: 'Bài 5: Extraposition of Heavy Clauses (Đưa mệnh đề dài ra sau)',
          explanation: 'Di chuyển mệnh đề chủ ngữ hoặc tân ngữ quá dài về cuối câu để câu cân đối (Weight Principle).',
          examples: [
            { sentence: '<em>It surprised everyone that</em> a small firm won the tender.', note: 'Extraposition' }
          ]
        },
        {
          title: 'Bài 6: Parallelism & Rhetorical Balance in Sentence Structure',
          explanation: 'Cấu trúc song song (Parallelism) tạo nhịp điệu và sự cân bằng nghệ thuật trong văn phong diễn thuyết.',
          examples: [
            { sentence: 'Not only did he <em>inspire the team</em>, but he also <em>secured the funding</em>.', note: 'Song song cấu trúc' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'It was John which broke the window.', correct: 'It was John who/that broke the window.', tip: 'Trong It-cleft chỉ người, dùng "who" hoặc "that", không dùng "which".' }
      ]
    }
  }
];

fs.writeFileSync(path.join(__dirname, 'expanded_adv_topics.json'), JSON.stringify(advTopics, null, 2));
console.log("Adding 14 detailed advanced topics successfully prepared!");
