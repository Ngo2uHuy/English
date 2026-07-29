export const intTopics = [
  // 20. int-present-past (6 bài)
  {
    id: 'int-present-past',
    level: 'intermediate',
    title: 'Present and past',
    subtitle: '6 bài về thì hiện tại và quá khứ, thì tiếp diễn',
    icon: '📚',
    order: 120,
    murphyUnit: 'Intermediate Units 1–6',
    content: {
      overview: '6 bài nâng cao so sánh liên thì giữa Present & Past, các thể tiếp diễn, động từ trạng thái trong ngữ cảnh phức tạp.',
      rules: [
        {
          title: 'Bài 1: Present Continuous vs Present Simple (Chuyên sâu)',
          explanation: 'Phân tích các trường hợp đặc biệt: thói quen tạm thời, xu hướng hiện tại và các động từ cảm xúc.',
          examples: [
            { sentence: 'You are <em>being</em> very unreasonable today.', note: 'Tạm thời hành xử khác thường' },
            { sentence: 'He <em>is always forgetting</em> his password!', note: 'Tần suất phàn nàn' }
          ]
        },
        {
          title: 'Bài 2: Past Simple vs Past Continuous trong Văn kể (Narrative)',
          explanation: 'Dùng Past Continuous dựng bối cảnh không gian; Past Simple cho chuỗi sự kiện chính.',
          examples: [
            { sentence: 'The sun <em>was shining</em> and birds <em>were singing</em>. Suddenly, a strange sound <em>echoed</em>.', note: 'Bối cảnh vs Sự kiện' }
          ]
        },
        {
          title: 'Bài 3: Present Perfect vs Past Simple (Góc nhìn Thời gian)',
          explanation: 'Present Perfect kết nối quá khứ với hiện tại (vẫn còn tác động); Past Simple bị cắt đứt khỏi hiện tại.',
          examples: [
            { sentence: 'Shakespeare <em>wrote</em> 37 plays.', note: 'Tác giả đã mất (Past Simple)' },
            { sentence: 'J.K. Rowling <em>has written</em> many books.', note: 'Tác giả còn sống (Present Perfect)' }
          ]
        },
        {
          title: 'Bài 4: Stative vs Dynamic Verbs trong thì Tiếp diễn',
          explanation: 'Phân tích sâu các động từ think, look, taste, smell, feel, enjoy, see khi chuyển sang dạng tiếp diễn.',
          examples: [
            { sentence: 'This soup <em>tastes</em> delicious. (State)', note: 'Vị của món ăn' },
            { sentence: 'The chef <em>is tasting</em> the soup. (Dynamic)', note: 'Hành động nếm' }
          ]
        },
        {
          title: 'Bài 5: Thói quen Quá khứ: Used to vs Would vs Past Simple',
          explanation: 'Used to (hành động & trạng thái cũ); Would (chỉ hành động lặp đi lặp lại trong quá khứ, KHÔNG dùng cho trạng thái); Past Simple (sự kiện đơn lẻ).',
          table: {
            headers: ['Cấu trúc', 'Hành động quá khứ', 'Trạng thái quá khứ'],
            rows: [
              ['Used to', '✅ I used to swim every day', '✅ I used to live in Paris'],
              ['Would', '✅ We would visit grandma on Sundays', '❌ I would have long hair (SAI)']
            ]
          },
          examples: [
            { sentence: 'Every summer we <em>would go</em> to the beach.', note: 'Would cho hành động quá khứ' }
          ]
        },
        {
          title: 'Bài 6: Continuous Aspect for Annoyance (Khó chịu với Always)',
          explanation: 'Diễn tả sự khó chịu lặp đi lặp lại trong quá khứ (was/were always V-ing) và hiện tại (is/are always V-ing).',
          examples: [
            { sentence: 'My roommate <em>was always leaving</em> dirty dishes in the sink.', note: 'Bực bội quá khứ' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'When I was young, I would have a dog.', correct: 'When I was young, I used to have a dog.', tip: 'Would không dùng cho trạng thái hay sở hữu trong quá khứ.' }
      ]
    }
  },

  // 21. int-present-perfect-past (12 bài)
  {
    id: 'int-present-perfect-past',
    level: 'intermediate',
    title: 'Present perfect and past',
    subtitle: '12 bài về thì dạng thì hiện tại và quá khứ hoàn thành',
    icon: '📚',
    order: 121,
    murphyUnit: 'Intermediate Units 7–18',
    content: {
      overview: '12 bài chuyên sâu về thì Hoàn thành (Present Perfect Simple/Continuous, Past Perfect Simple/Continuous) và các cấu trúc đi kèm.',
      rules: [
        {
          title: 'Bài 1: Present Perfect Simple vs Continuous (Thời lượng vs Kết quả)',
          explanation: 'Simple = "How many / How much / Have done"; Continuous = "How long / Have been doing".',
          examples: [
            { sentence: 'She has <em>been painting</em> the room all day.', note: 'Tập trung vào quá trình' },
            { sentence: 'She has <em>painted</em> three walls.', note: 'Tập trung vào kết quả hoàn thành' }
          ]
        },
        {
          title: 'Bài 2: Past Perfect Simple (Had + V3)',
          explanation: 'Xảy ra và hoàn thành TRƯỚC một thời điểm hoặc hành động khác trong quá khứ.',
          examples: [
            { sentence: 'When I arrived at the party, Tom <em>had already gone</em> home.', note: 'Xảy ra trước khi I arrived' }
          ]
        },
        {
          title: 'Bài 3: Past Perfect Continuous (Had been + V-ing)',
          explanation: 'Diễn tả quá trình kéo dài liên tục trước một thời điểm quá khứ.',
          examples: [
            { sentence: 'We <em>had been walking</em> for two hours when it started to snow.', note: 'Quá trình trước quá khứ' }
          ]
        },
        {
          title: 'Bài 4: Past Perfect vs Past Simple (Trật tự thời gian)',
          explanation: 'Sử dụng Past Perfect khi đảo trật tự kể chuyện hoặc nhấn mạnh tính trước sau.',
          examples: [
            { sentence: 'I <em>lost</em> my key (1st action). I couldn\'t get in because I <em>had lost</em> my key.', note: 'Lý do xảy ra trước' }
          ]
        },
        {
          title: 'Bài 5: Present Perfect với "This is the first time..."',
          explanation: 'Cấu trúc: It / This is the first / second time + S + have/has + V3.',
          examples: [
            { sentence: 'This is the first time I <em>have driven</em> a sports car.', note: 'Present Perfect' }
          ]
        },
        {
          title: 'Bài 6: Past Perfect với "It was the first time..."',
          explanation: 'Cấu trúc: It / This was the first time + S + had + V3.',
          examples: [
            { sentence: 'It was the first time she <em>had flown</em> on an airplane.', note: 'Past Perfect' }
          ]
        },
        {
          title: 'Bài 7: Have been to vs Have gone to',
          explanation: 'Have been to = đã đi và đã trở về; Have gone to = đã đi và chưa về (đang ở đó).',
          examples: [
            { sentence: 'Bill is on holiday. He has <em>gone to</em> Spain.', note: 'Đang ở Spain' },
            { sentence: 'Mary is back home. She has <em>been to</em> Spain.', note: 'Đã quay về' }
          ]
        },
        {
          title: 'Bài 8: Time words trong Hoàn thành: Already, Yet, Still, Just',
          explanation: 'Still (vẫn chưa - thể hiện sự kinh ngạc/bực bội); Just/Already đứng giữa trợ V và V3.',
          examples: [
            { sentence: 'I sent him an email a week ago, but he <em>still hasn\'t replied</em>.', note: 'Still trong phủ định' }
          ]
        },
        {
          title: 'Bài 9: For, Since, Ago, How long trong chuỗi thì',
          explanation: 'For + khoảng; Since + mốc; Ago + Past Simple; How long + Present Perfect.',
          examples: [
            { sentence: 'How long <em>have you known</em> each other?', note: 'Present Perfect' }
          ]
        },
        {
          title: 'Bài 10: Present Perfect vs Past Simple 2 (Khoảng thời gian chưa xong vs Đã xong)',
          explanation: 'This morning (nếu bây giờ vẫn là buổi sáng -> Present Perfect; nếu đã là buổi chiều -> Past Simple).',
          examples: [
            { sentence: 'I <em>have drunk</em> 3 cups of coffee this morning. (Bây giờ là 10 AM)', note: 'Chưa hết buổi sáng' },
            { sentence: 'I <em>drank</em> 3 cups of coffee this morning. (Bây giờ là 3 PM)', note: 'Đã qua buổi sáng' }
          ]
        },
        {
          title: 'Bài 11: Hardley... when / No sooner... than với Past Perfect',
          explanation: 'Cấu trúc đảo ngữ nhấn mạnh hai hành động xảy ra nối tiếp nhau ngay lập tức.',
          examples: [
            { sentence: 'Hardly <em>had I stepped</em> out when it started raining.', note: 'Hardly + Past Perfect + when' },
            { sentence: 'No sooner <em>had he left</em> than she arrived.', note: 'No sooner + Past Perfect + than' }
          ]
        },
        {
          title: 'Bài 12: Future Perfect vs Past Perfect (Đối sánh mốc thời gian)',
          explanation: 'Past Perfect = trước một mốc quá khứ; Future Perfect = trước một mốc tương lai (By next year, I will have finished...).',
          examples: [
            { sentence: 'By the time you arrive tomorrow, I <em>will have finished</em> the report.', note: 'Future Perfect' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'When I arrived, the train left.', correct: 'When I arrived, the train had left.', tip: 'Tàu chạy trước khi tôi tới -> phải dùng Past Perfect.' }
      ]
    }
  },

  // 22. int-future (7 bài)
  {
    id: 'int-future',
    level: 'intermediate',
    title: 'Future',
    subtitle: '7 bài về dạng thì tương lai',
    icon: '📚',
    order: 122,
    murphyUnit: 'Intermediate Units 19–25',
    content: {
      overview: '7 bài chuyên sâu về tất cả các cấu trúc Tương lai (Simple, Continuous, Perfect, Perfect Continuous, Time clauses, Be about to / Be to).',
      rules: [
        {
          title: 'Bài 1: Present Continuous & Present Simple cho Tương lai',
          explanation: 'Present Continuous (lịch cá nhân); Present Simple (thời gian biểu công cộng, tàu xe, lịch học).',
          examples: [
            { sentence: 'The train <em>leaves</em> at 7:30 tomorrow morning.', note: 'Lịch trình tàu xe (Simple)' },
            { sentence: 'I <em>am seeing</em> the dentist at 4 PM.', note: 'Cuộc hẹn cá nhân (Continuous)' }
          ]
        },
        {
          title: 'Bài 2: Will vs Be Going To (Phân tích Ngữ cảnh Phức tạp)',
          explanation: 'Dự đoán: Will (dựa vào nhận định/kinh nghiệm); Be going to (dựa vào dấu hiệu trực quan ngay trước mắt).',
          examples: [
            { sentence: 'I think AI <em>will change</em> the world.', note: 'Dự đoán ý kiến' },
            { sentence: 'Look! That wall <em>is going to fall</em>!', note: 'Dấu hiệu hiện tại' }
          ]
        },
        {
          title: 'Bài 3: Future Continuous (Will be + V-ing)',
          explanation: 'Diễn tả hành động sẽ đang diễn ra tại một điểm thời điểm cụ thể trong tương lai.',
          examples: [
            { sentence: 'This time next week, I <em>will be lying</em> on a beach in Hawaii.', note: 'Hành động đang diễn ra trong tương lai' }
          ]
        },
        {
          title: 'Bài 4: Future Perfect (Will have + V3)',
          explanation: 'Hành động sẽ hoàn tất TRƯỚC một mốc thời gian trong tương lai (By + time).',
          examples: [
            { sentence: 'By 2030, scientists <em>will have found</em> a cure for cancer.', note: 'Hoàn thành trước mốc 2030' }
          ]
        },
        {
          title: 'Bài 5: Future Perfect Continuous (Will have been + V-ing)',
          explanation: 'Nhấn mạnh khoảng thời gian kéo dài của hành động tính đến một điểm trong tương lai.',
          examples: [
            { sentence: 'By December, I <em>will have been working</em> here for 5 years.', note: 'Tính thời lượng đến mốc tương lai' }
          ]
        },
        {
          title: 'Bài 6: Subordinate Time Clauses for Future (When, As soon as, Until)',
          explanation: 'Trong mệnh đề chỉ thời gian tương lai, KHÔNG dùng Will, phải dùng Present Simple hoặc Present Perfect.',
          examples: [
            { sentence: 'I will call you as soon as I <em>arrive</em> (NOT will arrive).', note: 'As soon as + Present Simple' }
          ]
        },
        {
          title: 'Bài 7: Expressions of Future: Be about to / Be due to / Be to',
          explanation: 'Be about to + V1 (sắp sửa); Be due to + V1 (theo kế hoạch/dự kiến); Be to + V1 (mệnh lệnh/chỉ thị chính thức).',
          examples: [
            { sentence: 'Hurry up! The plane <em>is about to take off</em>.', note: 'Sắp sửa xảy ra ngay' },
            { sentence: 'The President <em>is to visit</em> Vietnam next month.', note: 'Thông báo chính thức' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I will call you when I will reach home.', correct: 'I will call you when I reach home.', tip: 'Không dùng "will" trong mệnh đề chỉ thời gian sau when, as soon as.' }
      ]
    }
  },

  // 23. int-modals (7 bài)
  {
    id: 'int-modals',
    level: 'intermediate',
    title: 'Modals verb',
    subtitle: '7 bài chi tiết theo từng dạng từ khuyết thiếu',
    icon: '📚',
    order: 123,
    murphyUnit: 'Intermediate Units 26–32',
    content: {
      overview: '7 bài học toàn diện về Động từ khuyết thiếu trung cấp: Khả năng (Ability), Bắt buộc (Obligation), Lời khuyên, Khả năng xảy ra và Suy đoán quá khứ.',
      rules: [
        {
          title: 'Bài 1: Ability — Can, Could, Be able to',
          explanation: 'Can/Could (khả năng chung); Was/Were able to (thực hiện thành công trong tình huống cụ thể).',
          examples: [
            { sentence: 'Although the fire was big, everyone <em>was able to escape</em>.', note: 'Thành công trong tình huống cụ thể' }
          ]
        },
        {
          title: 'Bài 2: Obligation & Necessity — Must, Have to, Need to',
          explanation: 'Must (bắt buộc từ bản thân/chủ quan); Have to (bắt buộc từ luật lệ/khách quan).',
          examples: [
            { sentence: 'I <em>must study</em> harder. (Tôi tự thấy thế)', note: 'Bắt buộc chủ quan' },
            { sentence: 'In the UK, drivers <em>have to drive</em> on the left.', note: 'Luật lệ khách quan' }
          ]
        },
        {
          title: 'Bài 3: Absence of Obligation & Prohibition — Mustn\'t vs Don\'t have to vs Needn\'t',
          explanation: 'Mustn\'t = cấm đoán; Don\'t have to / Needn\'t = không bắt buộc.',
          examples: [
            { sentence: 'You <em>mustn\'t tell</em> anyone. It\'s a secret.', note: 'Cấm' },
            { sentence: 'You <em>don\'t have to pay</em> now. You can pay later.', note: 'Tùy chọn' }
          ]
        },
        {
          title: 'Bài 4: Advice & Duty — Should, Ought to, Had better',
          explanation: 'Had better + V1 (nên làm, nếu không sẽ có hậu quả xấu).',
          examples: [
            { sentence: 'You <em>had better leave</em> now or you\'ll miss the bus.', note: 'Had better' }
          ]
        },
        {
          title: 'Bài 5: Possibility — May, Might, Could (Hiện tại & Tương lai)',
          explanation: 'May / Might / Could + V1 diễn tả khả năng 30-50% điều gì đó xảy ra.',
          examples: [
            { sentence: 'It <em>might rain</em> later, take a raincoat.', note: 'Có thể' }
          ]
        },
        {
          title: 'Bài 6: Modals of Deduction (Hiện tại) — Must, Can\'t, Could',
          explanation: 'Must be (chắc chắn đúng 99%); Can\'t be (chắc chắn sai/không thể 99%).',
          examples: [
            { sentence: 'He has 3 cars. He <em>must be</em> rich.', note: 'Suy đoán 99% đúng' },
            { sentence: 'She just ate. She <em>can\'t be</em> hungry already.', note: 'Suy đoán 99% không thể' }
          ]
        },
        {
          title: 'Bài 7: Modals of Deduction (Quá khứ) — Must have, Can\'t have, Should have',
          explanation: 'Must have + V3 (chắc là đã); Can\'t have + V3 (chắc là đã không); Should have + V3 (lẽ ra nên làm nhưng không làm).',
          examples: [
            { sentence: 'The ground is wet. It <em>must have rained</em> last night.', note: 'Suy đoán quá khứ' },
            { sentence: 'You <em>should have told</em> me the truth!', note: 'Trách móc/Tiếc nuối quá khứ' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'You should to go home.', correct: 'You should go home.', tip: 'Sau modal verbs (can, must, should) không dùng "to".' }
      ]
    }
  },

  // 24. int-if-wish (4 bài)
  {
    id: 'int-if-wish',
    level: 'intermediate',
    title: 'If and wish',
    subtitle: '4 bài chi tiết riêng về if – wish',
    icon: '📚',
    order: 124,
    murphyUnit: 'Intermediate Units 38–41',
    content: {
      overview: '4 bài nâng cao về Câu điều kiện (Type 1, Type 2, Type 3, Mixed) và Cấu trúc Ước ước (Wish & If only).',
      rules: [
        {
          title: 'Bài 1: Conditionals Type 1 & Type 2 (Thực tế vs Trái với thực tế hiện tại)',
          explanation: 'Type 1: If + Present, Will + V1; Type 2: If + Past Simple, Would + V1.',
          examples: [
            { sentence: 'If I <em>have</em> time, I <em>will visit</em> you.', note: 'Loại 1 (Có thật)' },
            { sentence: 'If I <em>were</em> rich, I <em>would buy</em> an island.', note: 'Loại 2 (Giả định hiện tại)' }
          ]
        },
        {
          title: 'Bài 2: Conditional Type 3 (Trái ngược quá khứ)',
          explanation: 'Cấu trúc: If + Past Perfect (had + V3), Would have + V3.',
          examples: [
            { sentence: 'If I <em>had studied</em> harder, I <em>would have passed</em> the exam.', note: 'Giả định trái quá khứ' }
          ]
        },
        {
          title: 'Bài 3: Mixed Conditionals (Câu điều kiện hỗn hợp)',
          explanation: 'Quá khứ ảnh hưởng Hiện tại: If + Had + V3, Would + V1; Hiện tại ảnh hưởng Quá khứ: If + Past Simple, Would have + V3.',
          examples: [
            { sentence: 'If I <em>had taken</em> the map (Past), I <em>wouldn\'t be</em> lost now (Present).', note: 'Hỗn hợp 3 - 2' }
          ]
        },
        {
          title: 'Bài 4: Wish & If only (Ước cho Hiện tại, Quá khứ & Thói quen)',
          explanation: 'Wish + Past Simple (ước cho hiện tại); Wish + Past Perfect (tiếc nuối quá khứ); Wish + Would + V1 (muốn ai thay đổi thói quen).',
          examples: [
            { sentence: 'I wish I <em>spoke</em> French.', note: 'Ước cho hiện tại' },
            { sentence: 'I wish I <em>hadn\'t bought</em> that car.', note: 'Tiếc nuối quá khứ' },
            { sentence: 'I wish you <em>would stop</em> smoking!', note: 'Yêu cầu thay đổi thói quen' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'If I will see him, I will give him the note.', correct: 'If I see him, I will give him the note.', tip: 'Không dùng "will" trong mệnh đề IF.' }
      ]
    }
  },

  // 25. int-passive (6 bài)
  {
    id: 'int-passive',
    level: 'intermediate',
    title: 'Passive',
    subtitle: '6 bài về câu bị động',
    icon: '📚',
    order: 125,
    murphyUnit: 'Intermediate Units 42–46',
    content: {
      overview: '6 bài chuyên sâu về Câu bị động ở các thì phức tạp, bị động với động từ khuyết thiếu, bị động 2 tân ngữ, bị động truyền dụng (Have/Get done) và Bị động gián tiếp.',
      rules: [
        {
          title: 'Bài 1: Passive in Continuous & Perfect Tenses',
          explanation: 'Present Continuous Passive: am/is/are being + V3; Present Perfect Passive: have/has been + V3; Past Perfect Passive: had been + V3.',
          examples: [
            { sentence: 'The house <em>is being painted</em> right now.', note: 'Hiện tại tiếp diễn bị động' },
            { sentence: 'The application <em>has been approved</em>.', note: 'Hiện tại hoàn thành bị động' }
          ]
        },
        {
          title: 'Bài 2: Passive with Modal Verbs',
          explanation: 'Modal + be + V3 (Can be done, Must be done, Should be done) & Modal + have been + V3.',
          examples: [
            { sentence: 'The form <em>must be filled</em> in ink.', note: 'Must be + V3' },
            { sentence: 'The report <em>should have been sent</em> yesterday.', note: 'Should have been + V3' }
          ]
        },
        {
          title: 'Bài 3: Passives with Two Objects (2 Tân ngữ)',
          explanation: 'Verbs like give, send, show, pay, offer: Ưu tiên đưa tân ngữ chỉ người lên làm chủ ngữ bị động.',
          examples: [
            { sentence: 'Active: They gave me a reward.', note: 'Chủ động' },
            { sentence: 'Passive 1: I <em>was given</em> a reward. (Ưu tiên)', note: 'Bị động chỉ người' },
            { sentence: 'Passive 2: A reward <em>was given to</em> me.', note: 'Bị động chỉ vật' }
          ]
        },
        {
          title: 'Bài 4: Impersonal & Reporting Passives (It is said that...)',
          explanation: 'Cấu trúc: It is reported/said/believed that + Clause OR Subject + is reported/said + to-infinitive.',
          examples: [
            { sentence: '<em>It is believed that</em> the company is expanding.', note: 'Cấu trúc It is said...' },
            { sentence: 'The company <em>is believed to be expanding</em>.', note: 'Chủ ngữ + to-infinitive' }
          ]
        },
        {
          title: 'Bài 5: Causative Passive — Have / Get something done',
          explanation: 'Nhờ hoặc thuê ai đó làm gì cho mình: Have / Get + Tân ngữ vật + V3/ed.',
          examples: [
            { sentence: 'I <em>had my car repaired</em> yesterday.', note: 'Thuê thợ sửa xe' },
            { sentence: 'She <em>is getting her hair cut</em> tomorrow.', note: 'Đi cắt tóc' }
          ]
        },
        {
          title: 'Bài 6: Passive Prepositions & Verbs without Passive',
          explanation: 'Phân biệt "by + tác nhân thực hiện" và "with + công cụ/nguyên liệu". Động từ nội công (happen, die, arrive) KHÔNG có dạng bị động.',
          examples: [
            { sentence: 'The door was opened <em>with a key</em> by John.', note: 'With + công cụ, By + người' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'An accident was happened yesterday.', correct: 'An accident happened yesterday.', tip: 'Nội động từ "happen" không chia bị động.' }
      ]
    }
  },

  // 26. int-reported-speech (2 bài)
  {
    id: 'int-reported-speech',
    level: 'intermediate',
    title: 'Reported speech',
    subtitle: '2 bài về câu tường thuật',
    icon: '📚',
    order: 126,
    murphyUnit: 'Intermediate Units 47–48',
    content: {
      overview: '2 bài chuyên sâu về Câu tường thuật: Quy tắc lùi thì phức tạp, Tường thuật câu hỏi, Mệnh lệnh và Động từ tường thuật chuyên biệt (Reporting Verbs).',
      rules: [
        {
          title: 'Bài 1: Tường thuật Mệnh đề & Câu hỏi (Reported Questions)',
          explanation: 'Hỏi Yes/No: dùng If / Whether; Hỏi Wh-: giữ nguyên từ để hỏi. Đưa về trật tự khẳng định S + V (không đảo trợ V).',
          examples: [
            { sentence: 'Direct: "Where do you live?"', note: 'Trực tiếp' },
            { sentence: 'Reported: He asked me <em>where I lived</em>.', note: 'Trật tự S + V' },
            { sentence: 'Direct: "Are you hungry?" -> He asked <em>if I was hungry</em>.', note: 'Dùng If' }
          ]
        },
        {
          title: 'Bài 2: Advanced Reporting Verbs (Động từ tường thuật phân loại)',
          explanation: 'Bảng cấu trúc các động từ tường thuật đặc biệt.',
          table: {
            headers: ['Cấu trúc', 'Động từ tường thuật đi kèm'],
            rows: [
              ['Verb + to-infinitive', 'offer, promise, refuse, agree, threaten'],
              ['Verb + object + to-infinitive', 'advise, encourage, invite, remind, warn, order'],
              ['Verb + -ing', 'admit, deny, suggest, recommend'],
              ['Verb + preposition + -ing', 'apologize for, insist on, accuse sb of']
            ]
          },
          examples: [
            { sentence: 'He <em>promised to call</em> me later.', note: 'Promise + to V' },
            { sentence: 'She <em>suggested going</em> to the beach.', note: 'Suggest + V-ing' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'He suggested me to go home.', correct: 'He suggested that I should go home. / He suggested going home.', tip: 'Suggest không dùng dạng suggest + obj + to-infinitive.' }
      ]
    }
  },

  // 27. int-questions-aux (4 bài)
  {
    id: 'int-questions-aux',
    level: 'intermediate',
    title: 'Questions and auxiliary verbs',
    subtitle: '4 bài riêng về từng dạng câu hỏi',
    icon: '📚',
    order: 127,
    murphyUnit: 'Intermediate Units 49–52',
    content: {
      overview: '4 bài về Đặt câu hỏi nâng cao: Câu hỏi lồng (Embedded questions), Câu hỏi đuôi (Question tags phức tạp), Câu đáp trợ động từ và Ngữ điệu.',
      rules: [
        {
          title: 'Bài 1: Embedded Questions (Câu hỏi lồng / Gián tiếp)',
          explanation: 'Khi câu hỏi đứng sau I wonder, Could you tell me, Do you have any idea: dùng trật tự khẳng định S + V.',
          examples: [
            { sentence: 'I wonder <em>why she was late</em>.', note: 'S + V' },
            { sentence: 'Could you tell me <em>what time the train leaves</em>?', note: 'S + V' }
          ]
        },
        {
          title: 'Bài 2: Advanced Question Tags (Câu hỏi đuôi nâng cao)',
          explanation: 'Trường hợp đặc biệt: I am -> aren\'t I?; Let\'s -> shall we?; Imperative -> will you?; Nobody/Someone -> they.',
          table: {
            headers: ['Mệnh đề chính', 'Đuôi tương ứng'],
            rows: [
              ['I am right', '..., aren\'t I?'],
              ['Let\'s go', '..., shall we?'],
              ['Open the door', '..., will you / would you?'],
              ['Nobody phoned', '..., did they?']
            ]
          },
          examples: [
            { sentence: 'I\'m late, <em>aren\'t I</em>?', note: 'Aren\'t I' },
            { sentence: 'Nobody came, <em>did they</em>?', note: 'Nobody -> positive tag + they' }
          ]
        },
        {
          title: 'Bài 3: Echo Questions & Expressing Surprise',
          explanation: 'Dùng câu hỏi lặp lại trợ động từ để thể hiện sự bất ngờ hoặc quan tâm (You do? Did she?).',
          examples: [
            { sentence: 'I got married yesterday. — <em>Did you?</em> Congratulations!', note: 'Trợ V nhấn mạnh' }
          ]
        },
        {
          title: 'Bài 4: Negative Questions (Câu hỏi phủ định)',
          explanation: 'Dùng Don\'t / Haven\'t / Isn\'t ở đầu câu hỏi để thể hiện sự ngạc nhiên hoặc mong đợi sự đồng ý.',
          examples: [
            { sentence: '<em>Haven\'t you seen</em> that film yet? It\'s famous!', note: 'Thể hiện ngạc nhiên' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'Do you know what is his name?', correct: 'Do you know what his name is?', tip: 'Giữ trật tự S + V trong câu hỏi lồng.' }
      ]
    }
  },

  // 28. int-ing-to (16 bài)
  {
    id: 'int-ing-to',
    level: 'intermediate',
    title: 'Ing and to',
    subtitle: '16 bài về dạng từ theo đuôi ing và to',
    icon: '📚',
    order: 128,
    murphyUnit: 'Intermediate Units 53–68',
    content: {
      overview: '16 bài toàn diện nhất về Gerunds (-ing) & Infinitives (To-V / Bare V), sự thay đổi nghĩa của động từ, thành ngữ đi kèm V-ing và Phân từ (Participles).',
      rules: [
        {
          title: 'Bài 1: Verb + -ing (Gerunds làm tân ngữ)',
          explanation: 'Các động từ: enjoy, mind, stop, finish, suggest, avoid, fancy, consider, admit, deny, postpone, risk.',
          examples: [
            { sentence: 'Have you <em>considered studying</em> abroad?', note: 'Consider + V-ing' }
          ]
        },
        {
          title: 'Bài 2: Verb + to-infinitive',
          explanation: 'Các động từ: offer, decide, hope, deserve, promise, agree, plan, manage, afford, threaten, refuse.',
          examples: [
            { sentence: 'We can\'t <em>afford to buy</em> a new car.', note: 'Afford + to V' }
          ]
        },
        {
          title: 'Bài 3: Verb + Object + to-infinitive',
          explanation: 'Cấu trúc: Verb + sb + to V: advise, allow, enable, encourage, invite, order, remind, warn, expect.',
          examples: [
            { sentence: 'Her father <em>encouraged her to study</em> law.', note: 'Encourage + sb + to V' }
          ]
        },
        {
          title: 'Bài 4: Verb + Bare Infinitive (Make, Let, See, Hear)',
          explanation: 'Make sb do st, Let sb do st; See / Hear / Watch sb do st (thấy toàn bộ hành động).',
          examples: [
            { sentence: 'Hot weather <em>makes me feel</em> tired.', note: 'Make + bare V' },
            { sentence: 'Let me <em>help</em> you.', note: 'Let + bare V' }
          ]
        },
        {
          title: 'Bài 5: Verb + -ing hoặc To-infinitive (NGHĨA KHÔNG ĐỔI)',
          explanation: 'Begin, start, continue, intend, bother: có thể dùng cả V-ing lẫn To-V mà không đổi nghĩa.',
          examples: [
            { sentence: 'It started <em>raining</em>. = It started <em>to rain</em>.', note: 'Giống nghĩa' }
          ]
        },
        {
          title: 'Bài 6: Group Đổi Nghĩa 1 — Remember / Forget',
          explanation: 'Remember/Forget + V-ing (nhớ/quên việc ĐÃ làm trong quá khứ); Remember/Forget + To V (nhớ/quên việc PHẢI làm).',
          examples: [
            { sentence: 'I remember <em>locking</em> the door. (Đã khóa)', note: 'V-ing (quá khứ)' },
            { sentence: 'Remember <em>to lock</em> the door! (Phải khóa)', note: 'To V (nhiệm vụ)' }
          ]
        },
        {
          title: 'Bài 7: Group Đổi Nghĩa 2 — Regret / Stop / Try',
          explanation: 'Regret + V-ing (hối hận việc đã làm); Regret + to say/inform (lấy làm tiếc phải nói); Stop + V-ing (dừng hẳn việc đang làm); Stop + to V (dừng lại ĐỂ làm việc khác); Try + V-ing (thử nghiệm); Try + to V (cố gắng).',
          examples: [
            { sentence: 'I stopped <em>smoking</em> 3 years ago. (Bỏ thuốc)', note: 'Stop + V-ing' },
            { sentence: 'He stopped <em>to tie</em> his shoelaces. (Dừng lại để buộc dây)', note: 'Stop + to V' }
          ]
        },
        {
          title: 'Bài 8: Group Đổi Nghĩa 3 — Mean / Need / Go on',
          explanation: 'Mean + to V (có ý định); Mean + V-ing (có nghĩa là/dẫn đến); Need + to V (chủ động); Need + V-ing (bị động = need to be done).',
          examples: [
            { sentence: 'The car needs <em>washing</em>. (= needs to be washed)', note: 'Need + V-ing (Bị động)' }
          ]
        },
        {
          title: 'Bài 9: Prefer vs Would rather vs Would prefer',
          explanation: 'Prefer V-ing to V-ing; Would prefer to V rather than V; Would rather V than V.',
          examples: [
            { sentence: 'I <em>prefer reading to watching</em> TV.', note: 'Prefer V-ing to V-ing' },
            { sentence: 'I <em>would rather stay</em> home <em>than go</em> out.', note: 'Would rather V than V' }
          ]
        },
        {
          title: 'Bài 10: Preposition + -ing (Cụm động từ + Giới từ)',
          explanation: 'Apologize for, insist on, succeed in, look forward to, approve of, accuse of.',
          examples: [
            { sentence: 'I am <em>looking forward to meeting</em> you.', note: 'Look forward to + V-ing (to là giới từ)' }
          ]
        },
        {
          title: 'Bài 11: Thành ngữ đi với -ing (It\'s no use, Worth, Point)',
          explanation: 'It\'s no use V-ing, It\'s no good V-ing, There\'s no point in V-ing, Be worth V-ing.',
          examples: [
            { sentence: 'It\'s no use <em>crying</em> over spilt milk.', note: 'Cấu trúc cố định' },
            { sentence: 'This book is <em>worth reading</em>.', note: 'Worth + V-ing' }
          ]
        },
        {
          title: 'Bài 12: Adjective + to-infinitive',
          explanation: 'Tính từ cảm xúc & đánh giá: easy, difficult, hard, impossible, glad, pleased, disappointed + To V.',
          examples: [
            { sentence: 'It is <em>difficult to learn</em> Japanese.', note: 'Adj + to V' }
          ]
        },
        {
          title: 'Bài 13: To-infinitive chỉ Mục đích (Purpose)',
          explanation: 'To V / In order to V / So as to V (chỉ mục đích làm gì).',
          examples: [
            { sentence: 'He got up early <em>in order to catch</em> the first train.', note: 'Mục đích' }
          ]
        },
        {
          title: 'Bài 14: Continuous, Perfect & Passive Infinitives',
          explanation: 'To be doing (tiếp diễn), To have done (hoàn thành), To be done (bị động).',
          examples: [
            { sentence: 'He seems <em>to be working</em> hard.', note: 'To be V-ing' },
            { sentence: 'I am glad <em>to have met</em> you.', note: 'To have V3' }
          ]
        },
        {
          title: 'Bài 15: Participle Clauses (-ing & -ed Clauses)',
          explanation: 'Rút gọn mệnh đề dùng V-ing (chủ động) hoặc V3/ed (bị động) khi 2 mệnh đề cùng chủ ngữ.',
          examples: [
            { sentence: '<em>Feeling tired</em>, I went to bed early.', note: 'V-ing clause' },
            { sentence: '<em>Built in 1920</em>, the house needs repair.', note: 'Past participle clause' }
          ]
        },
        {
          title: 'Bài 16: Gerund as Subject & Complement',
          explanation: 'Danh động từ làm chủ ngữ (Learning grammar is useful) hoặc làm vị ngữ (My hobby is collecting stamps).',
          examples: [
            { sentence: '<em>Swimming</em> is great exercise.', note: 'Gerund làm chủ ngữ' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'I am looking forward to see you.', correct: 'I am looking forward to seeing you.', tip: 'Trong "look forward to", "to" là giới từ nên động từ đi sau là V-ing.' }
      ]
    }
  },

  // 29. int-articles-nouns (13 bài)
  {
    id: 'int-articles-nouns',
    level: 'intermediate',
    title: 'Articles and nouns',
    subtitle: '13 bài riêng về mạo từ và danh từ',
    icon: '📚',
    order: 129,
    murphyUnit: 'Intermediate Units 69–81',
    content: {
      overview: '13 bài chuyên sâu về Danh từ đếm được/không đếm được, Mạo từ A/An/The phức tạp, Danh từ ghép và Danh từ tập hợp.',
      rules: [
        {
          title: 'Bài 1: Danh từ Đếm được vs Không đếm được (Chuyên sâu)',
          explanation: 'Danh từ không đếm được thông dụng: advice, information, news, baggage, furniture, weather, traffic, accommodation, progress.',
          examples: [
            { sentence: 'He gave me a valuable piece of <em>advice</em>.', note: 'Piece of advice' }
          ]
        },
        {
          title: 'Bài 2: Danh từ Vừa đếm được Vừa không đếm được (Đổi nghĩa)',
          explanation: 'Coffee (cà phê nói chung vs 1 tách cà phê); Paper (giấy vs tờ báo/bài báo); Glass (thủy tinh vs cái ly).',
          examples: [
            { sentence: 'I need some <em>paper</em> to write on. (Uncountable)', note: 'Giấy' },
            { sentence: 'I bought a <em>paper</em>. (Countable = a newspaper)', note: 'Tờ báo' }
          ]
        },
        {
          title: 'Bài 3: Danh từ Số ít có Động từ Số nhiều (Collective Nouns)',
          explanation: 'Government, team, family, audience, staff có thể chia số nhiều nếu coi là từng cá nhân.',
          examples: [
            { sentence: 'The team <em>are wearing</em> their new uniforms.', note: 'Từng thành viên' }
          ]
        },
        {
          title: 'Bài 4: Compound Nouns & Possessive (\'s vs Of)',
          explanation: 'Vật + Vật: Dùng danh từ ghép (bus stop) hoặc Of (the roof of the house); Người + Vật: Dùng \'s (Tom\'s car).',
          examples: [
            { sentence: 'The <em>leg of the table</em> was broken.', note: 'Vật + Of + Vật' }
          ]
        },
        {
          title: 'Bài 5: A/An vs The trong Ngữ cảnh Phức tạp',
          explanation: 'A/An để phân loại nghề nghiệp hoặc tính chất; The dùng khi đối tượng được xác định bởi mệnh đề theo sau.',
          examples: [
            { sentence: 'The man <em>who called you</em> is outside.', note: 'Được xác định bởi who clause' }
          ]
        },
        {
          title: 'Bài 6: Mạo từ với Tên Địa danh & Đại lý',
          explanation: 'Quy tắc dùng The với oceans, seas, rivers, canals, deserts, island groups, mountain ranges.',
          examples: [
            { sentence: '<em>The Alps</em> are in Europe.', note: 'Dãy núi' }
          ]
        },
        {
          title: 'Bài 7: Institutions — School, Prison, Hospital, University, Church',
          explanation: 'Phân biệt đi học/đi chữa bệnh (không the) và đi làm việc khác tại tòa nhà đó (có the).',
          examples: [
            { sentence: 'He went to <em>university</em> at 18.', note: 'Học đại học' }
          ]
        },
        {
          title: 'Bài 8: Khái niệm Khái quát không mạo từ vs Cụ thể có The',
          explanation: 'Life / History / Music / Art khi nói khái quát KHÔNG dùng the.',
          examples: [
            { sentence: 'I love <em>classical music</em>.', note: 'Khái quát' },
            { sentence: 'I didn\'t like <em>the music played</em> at the party.', note: 'Cụ thể' }
          ]
        },
        {
          title: 'Bài 9: Quantifiers với Danh từ — Much, Many, Plenty of, A great deal of',
          explanation: 'A great deal of / A large amount of + Uncountable Noun; A large number of + Plural Countable Noun.',
          examples: [
            { sentence: 'He spent a <em>great deal of money</em>.', note: 'Uncountable' }
          ]
        },
        {
          title: 'Bài 10: Nuance giữa A few / Few & A little / Little',
          explanation: 'Few/Little nhấn mạnh sự thiếu hụt (tiêu cực); A few/A little nhấn mạnh có một ít (tích cực).',
          examples: [
            { sentence: 'Unfortunately, I have <em>few friends</em> here.', note: 'Ít bạn (cảm thấy cô đơn)' }
          ]
        },
        {
          title: 'Bài 11: Plural of Irregular & Foreign Nouns',
          explanation: 'Danh từ gốc Latinh/Hy Lạp: phenomenon -> phenomena, criterion -> criteria, analysis -> analyses.',
          examples: [
            { sentence: 'These <em>criteria</em> are very strict.', note: 'Plural of criterion' }
          ]
        },
        {
          title: 'Bài 12: Abstract Nouns & Article Usage',
          explanation: 'Danh từ trừu tượng (knowledge, beauty, courage) thường không dùng mạo từ trừ khi được mô tả cụ thể.',
          examples: [
            { sentence: 'She has <em>a good knowledge</em> of grammar.', note: 'Cụ thể hóa + A' }
          ]
        },
        {
          title: 'Bài 13: Summary Table of Articles and Noun Types',
          explanation: 'Bảng quy tắc mạo từ áp dụng cho từng loại danh từ.',
          table: {
            headers: ['Loại Danh từ', 'Cụ thể (Known)', 'Khái quát (General)'],
            rows: [
              ['Đếm được số ít', 'the book', 'a book'],
              ['Đếm được số nhiều', 'the books', 'books (no article)'],
              ['Không đếm được', 'the water', 'water (no article)']
            ]
          }
        }
      ],
      commonMistakes: [
        { wrong: 'He gave me a good advice.', correct: 'He gave me good advice. / a piece of good advice.', tip: 'Advice là danh từ không đếm được, không dùng mạo từ "a".' }
      ]
    }
  },

  // 30. int-pronouns-det (12 bài)
  {
    id: 'int-pronouns-det',
    level: 'intermediate',
    title: 'Pronouns and determiners',
    subtitle: '12 bài về đại từ nhân xưng và định từ',
    icon: '📚',
    order: 130,
    murphyUnit: 'Intermediate Units 82–93',
    content: {
      overview: '12 bài chi tiết về Đại từ Phản xạ, Đại từ Thay thế (One/Ones, So), Quantifiers + of, Each vs Every, Another/Other và Đại từ Bất định.',
      rules: [
        {
          title: 'Bài 1: Reflexive Pronouns & Emphatic Use',
          explanation: 'Nhấn mạnh chính ai đó làm việc gì mà không có trợ giúp (I built it myself).',
          examples: [
            { sentence: 'The CEO <em>himself</em> signed the contract.', note: 'Đại từ nhấn mạnh' }
          ]
        },
        {
          title: 'Bài 2: Each other vs One another',
          explanation: 'Dùng cho mối quan hệ qua lại giữa 2 hoặc nhiều người.',
          examples: [
            { sentence: 'They looked at <em>each other</em> and smiled.', note: 'Tương hỗ' }
          ]
        },
        {
          title: 'Bài 3: All, Most, Some, Any, No, None + OF',
          explanation: 'Khi đứng trước the, my, this, custom determiners -> BẮT BUỘC có "of".',
          examples: [
            { sentence: '<em>Some of my friends</em> live abroad.', note: 'Some of + my + N' }
          ]
        },
        {
          title: 'Bài 4: Both, Either, Neither + OF',
          explanation: 'Both of the books, Either of them, Neither of my parents.',
          examples: [
            { sentence: '<em>Neither of my parents</em> speaks English.', note: 'Neither of + Plural N + Singular V' }
          ]
        },
        {
          title: 'Bài 5: Phân biệt Chi tiết Each vs Every',
          explanation: 'Each dùng khi nghĩ về từng cá thể (từ 2 trở lên); Every nghĩ về tổng thể (từ 3 trở lên).',
          examples: [
            { sentence: 'Study <em>each sentence</em> carefully.', note: 'Từng câu một' }
          ]
        },
        {
          title: 'Bài 6: Substitute Words — One / Ones',
          explanation: 'Dùng "one" (số ít) hoặc "ones" (số nhiều) để tránh lặp lại danh từ đã nhắc trước.',
          examples: [
            { sentence: 'Which cup is yours? — The <em>blue one</em>.', note: 'One = cup' }
          ]
        },
        {
          title: 'Bài 7: Another vs Other vs The other vs Others',
          explanation: 'Bảng tổng hợp cách dùng từ phân biệt.',
          table: {
            headers: ['Từ', 'Loại', 'Ý nghĩa'],
            rows: [
              ['another', 'Determiner/Pronoun', 'thêm 1 cái khác (số ít)'],
              ['other', 'Determiner', 'những cái khác (số nhiều + N)'],
              ['others', 'Pronoun', 'những người/cái khác (thay N)'],
              ['the other', 'Determiner/Pronoun', 'cái còn lại (trong nhóm 2)']
            ]
          },
          examples: [
            { sentence: 'I have two brothers. One is a doctor, <em>the other</em> is a teacher.', note: 'Cái còn lại' }
          ]
        },
        {
          title: 'Bài 8: Indefinite Pronouns + Singular Verb',
          explanation: 'Someone, Anybody, Everything, Nothing luôn chia động từ ở dạng Số ít.',
          examples: [
            { sentence: '<em>Everything is</em> going according to plan.', note: 'Is (số ít)' }
          ]
        },
        {
          title: 'Bài 9: Whatever, Whoever, Wherever, Whenever',
          explanation: 'Bất cứ cái gì, bất cứ ai, bất cứ đâu, bất cứ khi nào (thể hiện sự tự do/không quan trọng).',
          examples: [
            { sentence: 'You can sit <em>wherever you like</em>.', note: 'Wherever' }
          ]
        },
        {
          title: 'Bài 10: Demonstratives in Text Reference (This / That)',
          explanation: 'This (dùng cho ý tưởng sắp đề cập); That (dùng cho ý tưởng vừa nói xong).',
          examples: [
            { sentence: 'He failed the exam. <em>That</em> is why he is sad.', note: 'That thay cho cả mệnh đề trước' }
          ]
        },
        {
          title: 'Bài 11: Substitutes: So & Not (I hope so / I fear not)',
          explanation: 'Dùng "so" hoặc "not" để thay thế cho cả mệnh đề sau các động từ think, hope, suppose, expect.',
          examples: [
            { sentence: 'Is it going to rain? — I <em>hope not</em>.', note: 'Hope not = hope it won\'t rain' }
          ]
        },
        {
          title: 'Bài 12: Order of Determiners before Nouns',
          explanation: 'Central determiner (my, the) -> Ordinal (first) -> Cardinal (two) -> Noun.',
          examples: [
            { sentence: 'My <em>first two</em> books.', note: 'Trật tự determiner' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'Neither of them are ready.', correct: 'Neither of them is ready.', tip: 'Neither of + Plural N đi với động từ số ít trong tiếng Anh chuẩn.' }
      ]
    }
  },

  // 31. int-relative (6 bài)
  {
    id: 'int-relative',
    level: 'intermediate',
    title: 'Relative clause',
    subtitle: '6 bài về mệnh đề quan hệ',
    icon: '📚',
    order: 131,
    murphyUnit: 'Intermediate Units 92–97',
    content: {
      overview: '6 bài về Mệnh đề quan hệ: Xác định & Không xác định, Lược bỏ đại từ, Giới từ trong mệnh đề quan hệ, Whose, Where, và Mệnh đề rút gọn.',
      rules: [
        {
          title: 'Bài 1: Defining Relative Clauses (Who, Which, That)',
          explanation: 'Mệnh đề xác định cung cấp thông tin bắt buộc. KHÔNG dùng dấu phẩy. Có thể dùng "that" thay cho who/which.',
          examples: [
            { sentence: 'The woman <em>who lives next door</em> is a doctor.', note: 'Bắt buộc để biết người nào' }
          ]
        },
        {
          title: 'Bài 2: Omission of Relative Pronouns (Lược bỏ Đại từ Quan hệ)',
          explanation: 'Có thể LƯỢC BỎ who/which/that khi chúng làm TÂN NGỮ trong mệnh đề xác định.',
          examples: [
            { sentence: 'The book <em>(that) I bought yesterday</em> is interesting.', note: 'I bought the book -> Object -> Lược bỏ được' }
          ]
        },
        {
          title: 'Bài 3: Non-defining Relative Clauses (Mệnh đề Không xác định)',
          explanation: 'Cung cấp thông tin bổ sung. BẮT BUỘC có dấu phẩy. KHÔNG dùng "that", KHÔNG được lược bỏ đại từ.',
          examples: [
            { sentence: 'My brother, <em>who lives in London</em>, is a software engineer.', note: 'Bổ sung thêm thông tin' }
          ]
        },
        {
          title: 'Bài 4: Prepositions in Relative Clauses (Giới từ trong mệnh đề quan hệ)',
          explanation: 'Trang trọng: Giới từ + Whom / Which (The man to whom I spoke); Tự nhiên: Giới từ ở cuối (The man I spoke to).',
          examples: [
            { sentence: 'The hotel <em>at which we stayed</em> was clean.', note: 'Trang trọng' },
            { sentence: 'The hotel <em>we stayed at</em> was clean.', note: 'Tự nhiên' }
          ]
        },
        {
          title: 'Bài 5: Whose, Where, When, Why',
          explanation: 'Whose (sở hữu); Where (nơi chốn = in/at which); When (thời gian = on/in which).',
          examples: [
            { sentence: 'A widow is a woman <em>whose husband is dead</em>.', note: 'Whose (sở hữu)' }
          ]
        },
        {
          title: 'Bài 6: Reduced Relative Clauses (Rút gọn Mệnh đề Quan hệ)',
          explanation: 'Chủ động -> V-ing; Bị động -> V3/ed; Đầu tiên/Cuối cùng -> To V.',
          examples: [
            { sentence: 'The man <em>standing by the door</em> is my uncle. (= who is standing)', note: 'V-ing' },
            { sentence: 'The painting <em>stolen from the museum</em> was found. (= which was stolen)', note: 'V3/ed' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'My father, that is 60, has retired.', correct: 'My father, who is 60, has retired.', tip: 'Không bao giờ dùng "that" trong mệnh đề quan hệ không xác định (có dấu phẩy).' }
      ]
    }
  },

  // 32. int-adj-adv (15 bài)
  {
    id: 'int-adj-adv',
    level: 'intermediate',
    title: 'Adjective and adverbs',
    subtitle: '15 bài về danh từ và trạng từ',
    icon: '📚',
    order: 132,
    murphyUnit: 'Intermediate Units 98–112',
    content: {
      overview: '15 bài chuyên sâu về Tính từ & Trạng từ: Trật tự OSASCOMP, Gradable vs Absolute Adjectives, So sánh phức hợp (The... the...), Trạng từ câu và Đảo ngữ.',
      rules: [
        {
          title: 'Bài 1: Adjective Order — Cấu trúc OSASCOMP chuẩn',
          explanation: 'Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose.',
          examples: [
            { sentence: 'An <em>expensive large modern round red Italian leather dining</em> table.', note: 'OSASCOMP' }
          ]
        },
        {
          title: 'Bài 2: Gradable vs Non-gradable (Extreme) Adjectives',
          explanation: 'Gradable (cold, big) đi với VERY / FAIRLY; Non-gradable (freezing, huge, ancient) đi với ABSOLUTELY / TOTALLY.',
          table: {
            headers: ['Tính từ Thường (Gradable)', 'Tính từ Tuyệt đối (Extreme)'],
            rows: [
              ['very cold', 'absolutely freezing'],
              ['very tired', 'absolutely exhausted'],
              ['very big', 'absolutely huge / enormous']
            ]
          },
          examples: [
            { sentence: '❌ It is very freezing outside.', note: 'Sai' },
            { sentence: '✅ It is <em>absolutely freezing</em> outside.', note: 'Đúng' }
          ]
        },
        {
          title: 'Bài 3: Participle Adjectives (-ed vs -ing trong miêu tả)',
          explanation: 'Frightened (bị hoảng sợ) vs Frightening (gây hoảng sợ); Interested vs Interesting.',
          examples: [
            { sentence: 'I was <em>surprised</em> by the <em>surprising</em> news.', note: '-ed vs -ing' }
          ]
        },
        {
          title: 'Bài 4: Double Adverbs (Fast, Hard, Late, Hardly, Lately)',
          explanation: 'Hard (chăm chỉ/cứng) vs Hardly (hầu như không); Late (trễ) vs Lately (gần đây).',
          examples: [
            { sentence: 'He works <em>hard</em>.', note: 'Hard = chăm chỉ' },
            { sentence: 'He <em>hardly</em> works.', note: 'Hardly = hầu như không làm' }
          ]
        },
        {
          title: 'Bài 5: So sánh hơn Nâng cao (Far / Much / A lot / Slightly + Comparative)',
          explanation: 'Dùng far, much, a lot, slightly, a bit để nhấn mạnh mức độ so sánh.',
          examples: [
            { sentence: 'This laptop is <em>much more expensive</em> than that one.', note: 'Nhấn mạnh mức độ' }
          ]
        },
        {
          title: 'Bài 6: So sánh nhất Nâng cao (The second best / By far the most)',
          explanation: 'He is <em>by far the most talented</em> player. It is the <em>second largest</em> city.',
          examples: [
            { sentence: 'Tokyo is <em>by far the largest</em> city in Japan.', note: 'By far + Superlative' }
          ]
        },
        {
          title: 'Bài 7: Comparative Patterns — As... as & Twice as... as',
          explanation: 'Cấu trúc bội số: Multiplier + as + Adj/Adv + as (twice as expensive as, three times as big as).',
          examples: [
            { sentence: 'This house is <em>twice as large as</em> mine.', note: 'Bội số so sánh' }
          ]
        },
        {
          title: 'Bài 8: Cấu trúc So sánh kép "The... the..."',
          explanation: 'The + Comparative S + V, The + Comparative S + V (Càng... thì càng...).',
          examples: [
            { sentence: '<em>The more</em> you learn, <em>the wiser</em> you become.', note: 'Càng... càng...' }
          ]
        },
        {
          title: 'Bài 9: Position of Adverbs (Manner, Place, Time)',
          explanation: 'Trật tự cuối câu: Manner (Cách thức) -> Place (Nơi chốn) -> Time (Thời gian).',
          examples: [
            { sentence: 'She sang <em>beautifully</em> (Manner) <em>at the concert</em> (Place) <em>last night</em> (Time).', note: 'M - P - T' }
          ]
        },
        {
          title: 'Bài 10: Degree Adverbs — Extremely, Incredibly, Fairly, Quite, Rather',
          explanation: 'Rather có sắc thái tiêu cực hoặc bất ngờ hơn Quite; Extremely / Incredibly nhấn mạnh rất cao.',
          examples: [
            { sentence: 'The exam was <em>rather difficult</em>.', note: 'Rather' }
          ]
        },
        {
          title: 'Bài 11: Adverbs Modifying Adjectives & Other Adverbs',
          explanation: 'Trạng từ đứng trước tính từ hoặc trạng từ khác để bổ nghĩa (badly injured, highly successful).',
          examples: [
            { sentence: 'He is a <em>highly successful</em> businessman.', note: 'Adv + Adj' }
          ]
        },
        {
          title: 'Bài 12: Too vs Enough (Chi tiết vị trí & Mẫu câu)',
          explanation: 'Too + Adj + for sb + to V; Adj + Enough + for sb + to V.',
          examples: [
            { sentence: 'This shirt is <em>too small for me to wear</em>.', note: 'Too... to V' }
          ]
        },
        {
          title: 'Bài 13: Linking Verbs + Adjectives (Look, Sound, Smell, Taste, Feel)',
          explanation: 'Sau động từ nối (feel, look, sound, smell, taste, seem, appear) phải dùng TÍNH TỪ, không dùng trạng từ.',
          examples: [
            { sentence: 'The food <em>smells delicious</em> (NOT deliciously).', note: 'Smell + Adj' }
          ]
        },
        {
          title: 'Bài 14: Compound Adjectives (Tính từ ghép)',
          explanation: 'Number-Noun (a ten-year-old boy); Noun-Adj (world-famous); Adv-V3 (well-known).',
          examples: [
            { sentence: 'We stayed at a <em>five-star hotel</em>.', note: 'Tính từ ghép không có -s' }
          ]
        },
        {
          title: 'Bài 15: Inversion after Negative Adverbs (Đảo ngữ cơ bản)',
          explanation: 'Khi Seldom, Rarely, Never, Hardly đứng đầu câu -> Đảo trợ động từ lên trước chủ ngữ.',
          examples: [
            { sentence: 'Never <em>have I seen</em> such a beautiful sunset.', note: 'Đảo ngữ với Never' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'The soup tastes deliciously.', correct: 'The soup tastes delicious.', tip: 'Sau động từ nối "taste" phải dùng tính từ "delicious".' }
      ]
    }
  },

  // 33. int-conj-prep (24 bài)
  {
    id: 'int-conj-prep',
    level: 'intermediate',
    title: 'Conjunctions and prepositions',
    subtitle: '24 bài về câu liên kết và giới từ',
    icon: '📚',
    order: 133,
    murphyUnit: 'Intermediate Units 113–136',
    content: {
      overview: '24 bài toàn diện nhất về Giới từ (Thời gian, Vị trí, Đi chuyển, Tính từ/Động từ/Danh từ đi kèm) và Liên từ nối câu (Tương phản, Nguyên nhân, Kết quả, Mục đích, Điều kiện).',
      rules: [
        {
          title: 'Bài 1: Prepositions of Place (In vs At vs On)',
          explanation: 'In (không gian 3D/thành phố/quốc gia); At (địa điểm cụ thể/sự kiện); On (bề mặt/tầng nhà/con đường).',
          examples: [
            { sentence: 'In Paris, at the station, on the 3rd floor.', note: 'In / At / On' }
          ]
        },
        {
          title: 'Bài 2: Prepositions of Time (In vs At vs On vs By vs Until)',
          explanation: 'At (giờ, lễ); On (ngày, thứ); In (tháng, năm, mùa); By (trước mốc); Until (cho tới khi).',
          examples: [
            { sentence: 'I must finish the work <em>by 5 PM</em>.', note: 'By = no later than' }
          ]
        },
        {
          title: 'Bài 3: Prepositions of Movement (Into, Onto, Off, Towards, Through)',
          explanation: 'Into (vào trong); Onto (lên trên); Through (xuyên qua không gian 3D); Across (băng qua bề mặt).',
          examples: [
            { sentence: 'We walked <em>through the forest</em> and <em>across the bridge</em>.', note: 'Through vs Across' }
          ]
        },
        {
          title: 'Bài 4: Prepositions with Adjectives 1 (Afraid of, Good at, Interested in)',
          explanation: 'Afraid of, proud of, good at, bad at, interested in, famous for, full of, similar to.',
          examples: [
            { sentence: 'She is <em>famous for</em> her singing.', note: 'Famous for' }
          ]
        },
        {
          title: 'Bài 5: Prepositions with Adjectives 2 (Disappointed with, Kind to, Married to)',
          explanation: 'Kind to sb, married to sb, disappointed with st, allergic to st, custom to st.',
          examples: [
            { sentence: 'She is <em>married to</em> a doctor.', note: 'Married to (NOT with)' }
          ]
        },
        {
          title: 'Bài 6: Prepositions with Verbs 1 (Listen to, Depend on, Belong to)',
          explanation: 'Listen to, depend on, belong to, apply for, suffer from, complain about, care for.',
          examples: [
            { sentence: 'It <em>depends on</em> the weather.', note: 'Depend on' }
          ]
        },
        {
          title: 'Bài 7: Prepositions with Verbs 2 (Accuse of, Prevent from, Protect from)',
          explanation: 'Accuse sb of st, prevent sb from V-ing, protect sb from st, congratulate sb on st.',
          examples: [
            { sentence: 'Rain <em>prevented us from playing</em> tennis.', note: 'Prevent from V-ing' }
          ]
        },
        {
          title: 'Bài 8: Prepositions with Nouns (In my opinion, On purpose, By mistake)',
          explanation: 'In my opinion, on purpose, by mistake, at risk, in demand, under pressure, out of order.',
          examples: [
            { sentence: 'I took your umbrella <em>by mistake</em>.', note: 'By mistake' }
          ]
        },
        {
          title: 'Bài 9: During vs For vs While',
          explanation: 'During + Noun (trong suốt dịp/sự kiện); For + khoảng thời gian; While + S + V.',
          examples: [
            { sentence: 'I fell asleep <em>during the movie</em>.', note: 'During + Noun' }
          ]
        },
        {
          title: 'Bài 10: By vs Until / Till',
          explanation: 'By = hành động hoàn thành tại hoặc trước mốc; Until = hành động kéo dài liên tục cho tới mốc.',
          examples: [
            { sentence: 'I will wait <em>until 5 PM</em>.', note: 'Wait (liên tục tới 5 PM)' }
          ]
        },
        {
          title: 'Bài 11: As vs Like (Phân biệt Vai trò vs So sánh)',
          explanation: 'As + Noun (với tư cách là/vai trò thật); Like + Noun (giống như - so sánh).',
          examples: [
            { sentence: 'He works <em>as a teacher</em>. (Anh ấy là giáo viên)', note: 'Vai trò thực tế' },
            { sentence: 'He sings <em>like a professional</em>.', note: 'So sánh giống như' }
          ]
        },
        {
          title: 'Bài 12: Although, Even though, Though (Mệnh đề Tương phản)',
          explanation: 'Although / Even though / Though + Mệnh đề (S + V). Even though mạnh hơn Although.',
          examples: [
            { sentence: '<em>Even though he was tired</em>, he kept working.', note: 'Mệnh đề tương phản' }
          ]
        },
        {
          title: 'Bài 13: In spite of & Despite (Cụm từ Tương phản)',
          explanation: 'In spite of / Despite + Noun / Noun Phrase / V-ing. KHÔNG có "of" sau Despite.',
          examples: [
            { sentence: '<em>Despite the heavy traffic</em>, we arrived on time.', note: 'Despite + Noun' }
          ]
        },
        {
          title: 'Bài 14: Because / As / Since vs Because of / Due to',
          explanation: 'Because + S + V; Because of / Due to / Owing to + Noun / V-ing.',
          examples: [
            { sentence: 'The flight was cancelled <em>due to bad weather</em>.', note: 'Due to + Noun' }
          ]
        },
        {
          title: 'Bài 15: Result Clauses — So... that & Such... that',
          explanation: 'So + Adj/Adv + that; Such + (a/an) + Adj + Noun + that.',
          examples: [
            { sentence: 'She was <em>so tired that</em> she fell asleep instantly.', note: 'So + Adj + that' },
            { sentence: 'It was <em>such a good movie that</em> I watched it twice.', note: 'Such + a + Adj + N + that' }
          ]
        },
        {
          title: 'Bài 16: Purpose Clauses — In order that / So that',
          explanation: 'So that / In order that + S + can / could / will / would + V1.',
          examples: [
            { sentence: 'I turned down the music <em>so that my baby could sleep</em>.', note: 'So that + Clause' }
          ]
        },
        {
          title: 'Bài 17: Condition Connectors — Unless, As long as, Provided that',
          explanation: 'Unless = If not; As long as / Provided that = Chỉ khi / Miễn là.',
          examples: [
            { sentence: 'You can go out <em>as long as you finish</em> your homework.', note: 'Miễn là' }
          ]
        },
        {
          title: 'Bài 18: In case vs If',
          explanation: 'In case = phòng khi (chuẩn bị trước); If = nếu (chỉ làm khi xảy ra).',
          examples: [
            { sentence: 'Take an umbrella <em>in case it rains</em>.', note: 'Phòng khi (mang ô sẵn)' }
          ]
        },
        {
          title: 'Bài 19: Whereas, While, On the other hand',
          explanation: 'Dùng để đối chiếu hai khía cạnh trái ngược nhau của vấn đề.',
          examples: [
            { sentence: 'Some people love city life, <em>whereas others prefer</em> the countryside.', note: 'Whereas' }
          ]
        },
        {
          title: 'Bài 20: Transition Words — Therefore, However, Furthermore, In addition',
          explanation: 'Từ nối giữa 2 câu (đứng đầu câu mới hoặc sau dấu chấm phẩy, đi kèm dấu phẩy).',
          examples: [
            { sentence: 'The task was difficult. <em>However</em>, they completed it on time.', note: 'Transition' }
          ]
        },
        {
          title: 'Bài 21: Besides, Except (for), Apart from',
          explanation: 'Besides = ngoài ra còn có thêm; Except (for) = trừ ra, ngoại trừ.',
          examples: [
            { sentence: 'Everyone came <em>except for</em> John.', note: 'Ngoại trừ' }
          ]
        },
        {
          title: 'Bài 22: As if / As though (Như thể là)',
          explanation: 'As if / As though + Past Tense (diễn tả điều không có thật ở hiện tại).',
          examples: [
            { sentence: 'He talks <em>as if he knew</em> everything.', note: 'Như thể là (không thật)' }
          ]
        },
        {
          title: 'Bài 23: Prepositional Phrases of Place & Time',
          explanation: 'At the end of (ở cuối của); In the end (cuối cùng/kết cục); In the middle of.',
          examples: [
            { sentence: 'At the end of the street.', note: 'At the end of + N' }
          ]
        },
        {
          title: 'Bài 24: Verb + Object + Preposition Patterns Summary',
          explanation: 'Bảng tổng hợp các dạng Động từ + Tân ngữ + Giới từ phổ biến.',
          table: {
            headers: ['Mẫu cấu trúc', 'Ví dụ động từ'],
            rows: [
              ['Verb + Sb + WITH + St', 'provide sb with st, supply sb with st'],
              ['Verb + Sb + FOR + St', 'blame sb for st, praise sb for st'],
              ['Verb + St + TO + Sb', 'explain st to sb, describe st to sb']
            ]
          }
        }
      ],
      commonMistakes: [
        { wrong: 'Despite of the rain, we went out.', correct: 'Despite the rain, we went out. / In spite of the rain...', tip: 'Không có "of" sau Despite.' }
      ]
    }
  },

  // 34. int-phrasal-verbs (9 bài)
  {
    id: 'int-phrasal-verbs',
    level: 'intermediate',
    title: 'Phrasal verbs',
    subtitle: '9 bài về các cụm động từ',
    icon: '📚',
    order: 134,
    murphyUnit: 'Intermediate Units 137–145',
    content: {
      overview: '9 bài chuyên sâu về Cụm động từ (Phrasal Verbs): Phân loại, Cụm tách được/không tách được, Cụm 3 từ và Phrasal Verbs theo chủ đề cuộc sống & công việc.',
      rules: [
        {
          title: 'Bài 1: Phân loại Phrasal Verbs (Separable vs Inseparable)',
          explanation: 'Nội động từ (Intransitive - không tân ngữ); Ngoại động từ tách được (Separable); Ngoại động từ không tách được (Inseparable).',
          examples: [
            { sentence: 'The car <em>broke down</em>. (Intransitive)', note: 'Không có tân ngữ' }
          ]
        },
        {
          title: 'Bài 2: Phrasal Verbs Type 1 — Intransitive (Nội động từ)',
          explanation: 'Wake up, get up, break down, take off (máy bay cất cánh), grow up, show up.',
          examples: [
            { sentence: 'The plane <em>took off</em> on time.', note: 'Máy bay cất cánh' }
          ]
        },
        {
          title: 'Bài 3: Phrasal Verbs Type 2 — Separable (Ngoại động từ tách được)',
          explanation: 'Nếu tân ngữ là ĐẠI TỪ (it/them/me) -> BẮT BUỘC đứng ở GIỮA: Turn it off (NOT turn off it).',
          examples: [
            { sentence: 'Turn off the light. = Turn the light off.', note: 'Tân ngữ là danh từ' },
            { sentence: 'Turn <em>it</em> off. (NOT Turn off it)', note: 'Tân ngữ là đại từ (bắt buộc ở giữa)' }
          ]
        },
        {
          title: 'Bài 4: Phrasal Verbs Type 3 — Inseparable (Không tách được)',
          explanation: 'Verb + Preposition + Object: look after, run into, come across, take after.',
          examples: [
            { sentence: 'She <em>looks after her mother</em>.', note: 'Không thể tách look her mother after' }
          ]
        },
        {
          title: 'Bài 5: Three-part Phrasal Verbs (Cụm động từ 3 từ)',
          explanation: 'Verb + Adverb + Preposition + Object: look forward to, put up with, run out of, catch up with, cut down on.',
          examples: [
            { sentence: 'I can\'t <em>put up with</em> this noise any longer.', note: 'Put up with = chịu đựng' }
          ]
        },
        {
          title: 'Bài 6: Phrasal Verbs for Daily Routines (Sinh hoạt hàng ngày)',
          explanation: 'Get up, put on (mặc vào), take off (cởi ra), turn on/off, clean up, call back.',
          examples: [
            { sentence: 'Put on your coat, it\'s cold outside.', note: 'Mặc áo vào' }
          ]
        },
        {
          title: 'Bài 7: Phrasal Verbs for Travel & Movement (Du lịch & Di chuyển)',
          explanation: 'Set off (khởi hành), check in, check out, drop off, pick up, speed up, slow down.',
          examples: [
            { sentence: 'We <em>set off</em> early in the morning.', note: 'Khởi hành' }
          ]
        },
        {
          title: 'Bài 8: Phrasal Verbs for Social Life (Giao tiếp & Đời sống)',
          explanation: 'Hang out, call off (hủy), put off (hoãn), catch up with, get along with, break up.',
          examples: [
            { sentence: 'The meeting was <em>called off</em> due to rain.', note: 'Called off = cancelled' }
          ]
        },
        {
          title: 'Bài 9: Phrasal Verbs for Work & Business (Công việc & Kinh doanh)',
          explanation: 'Fill in (điền mẫu), carry out (thực hiện), work out (tìm ra giải pháp/tập thể dục), set up (thành lập), take over (tiếp quản).',
          examples: [
            { sentence: 'The team <em>carried out</em> the research successfully.', note: 'Carry out = thực hiện' }
          ]
        }
      ],
      commonMistakes: [
        { wrong: 'Please turn off it.', correct: 'Please turn it off.', tip: 'Khi tân ngữ là đại từ (it, them), phải đứng giữa động từ và tiểu từ.' }
      ]
    }
  }
];
