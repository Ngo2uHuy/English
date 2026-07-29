// ==========================================================================
// AESTHETE — Modern Human-Crafted Grammar Database
// ==========================================================================

export const LEVELS = [
  { id: 'beginner', name: 'Beginner (A1-A2)', subtitle: 'Sơ Cấp', icon: '🌱', color: 'emerald', description: 'Essential sentence structures, core tenses, articles, and basic modifiers.' },
  { id: 'intermediate', name: 'Intermediate (B1-B2)', subtitle: 'Trung Cấp', icon: '🌿', color: 'indigo', description: 'Complex tenses, passive voice, modal nuances, conditionals, and clauses.' },
  { id: 'advanced', name: 'Advanced (C1-C2)', subtitle: 'Cao Cấp', icon: '🌲', color: 'amber', description: 'Inversion, subjunctive mood, academic discourse markers, and rhetoric.' },
  { id: 'lexicon', name: 'Lexicon & Usage', subtitle: 'Từ Vựng & Cú Pháp', icon: '💎', color: 'cyan', description: 'Phrasal verbs, collocations, idiomatic prepositional structures.' },
  { id: 'toeic', name: 'TOEIC Mastery', subtitle: 'Chuyện Thi TOEIC', icon: '🎯', color: 'rose', description: 'Grammar patterns, part 5/6 short-cut strategies, business contexts.' },
];

export const EXERCISE_TYPES = [
  { id: 'fill-blanks', name: 'Fill in the Blanks', icon: '✍️' },
  { id: 'multiple-choice', name: 'Multiple Choice', icon: '🔘' },
  { id: 'error-correction', name: 'Error Correction', icon: '🔍' },
  { id: 'sentence-transformation', name: 'Sentence Transformation', icon: '🔄' },
  { id: 'matching', name: 'Matching Pairs', icon: '🧩' },
];

export const GRAMMAR_TOPICS = [
  {
    "id": "to-be",
    "level": "beginner",
    "title": "Verb \"To Be\"",
    "subtitle": "am / is / are",
    "icon": "🔤",
    "order": 1,
    "content": {
      "overview": "Động từ \"To Be\" là động từ nền tảng nhất trong tiếng Anh, dùng để giới thiệu bản thân, diễn tả quốc tịch, tuổi tác, đặc điểm tính cách, trạng thái và vị trí.",
      "rules": [
        {
          "title": "Present Simple Forms",
          "explanation": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
          "table": {
            "headers": [
              "Subject",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "I",
                "I am (I'm)",
                "I am not (I'm not)",
                "Am I...?"
              ],
              [
                "You/We/They",
                "You are (You're)",
                "You are not (aren't)",
                "Are you...?"
              ],
              [
                "He/She/It",
                "He is (He's)",
                "He is not (isn't)",
                "Is he...?"
              ]
            ]
          }
        },
        {
          "title": "Uses of \"To Be\"",
          "explanation": "Quy tắc & Cấu trúc chính: We use \"to be\" to talk about: identity, age, nationality, feelings, descriptions, jobs, and location.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "I <em>am</em> a student.",
              "note": "Identity"
            },
            {
              "sentence": "She <em>is</em> 25 years old.",
              "note": "Age"
            },
            {
              "sentence": "They <em>are</em> from Brazil.",
              "note": "Nationality"
            },
            {
              "sentence": "He <em>is</em> happy today.",
              "note": "Feelings"
            },
            {
              "sentence": "The book <em>is</em> on the table.",
              "note": "Location"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I is a teacher.",
          "correct": "I am a teacher.",
          "tip": "Always use \"am\" with \"I\"."
        },
        {
          "wrong": "She are beautiful.",
          "correct": "She is beautiful.",
          "tip": "Use \"is\" with he/she/it."
        },
        {
          "wrong": "They is students.",
          "correct": "They are students.",
          "tip": "Use \"are\" with they/we/you."
        }
      ]
    }
  },
  {
    "id": "present-simple",
    "level": "beginner",
    "title": "Present Simple",
    "subtitle": "Habitual actions & facts",
    "icon": "🔁",
    "order": 2,
    "content": {
      "overview": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "I/You/We/They",
                "I work",
                "I don't work",
                "Do I work?"
              ],
              [
                "He/She/It",
                "She works",
                "She doesn't work",
                "Does she work?"
              ]
            ]
          }
        },
        {
          "title": "Spelling Rules for 3rd Person Singular",
          "explanation": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
          "examples": [
            {
              "sentence": "Most verbs: add -s → work<em>s</em>, play<em>s</em>, read<em>s</em>",
              "note": "General rule"
            },
            {
              "sentence": "Verbs ending in -s, -sh, -ch, -x, -o: add -es → watch<em>es</em>, go<em>es</em>",
              "note": "-es rule"
            },
            {
              "sentence": "Verbs ending in consonant + y: change y to i, add -es → stud<em>ies</em>, carr<em>ies</em>",
              "note": "-ies rule"
            }
          ]
        },
        {
          "title": "Time Expressions",
          "explanation": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
          "examples": [
            {
              "sentence": "always, usually, often, sometimes, rarely, never",
              "note": "Frequency adverbs"
            },
            {
              "sentence": "every day / week / month / year",
              "note": "Every + time period"
            },
            {
              "sentence": "on Mondays, in the morning, at night",
              "note": "Specific times"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She work every day.",
          "correct": "She works every day.",
          "tip": "Don't forget the -s for he/she/it."
        },
        {
          "wrong": "He doesn't works here.",
          "correct": "He doesn't work here.",
          "tip": "After doesn't, use base form (no -s)."
        },
        {
          "wrong": "Do she like coffee?",
          "correct": "Does she like coffee?",
          "tip": "Use \"does\" for he/she/it questions."
        }
      ]
    }
  },
  {
    "id": "present-continuous",
    "level": "beginner",
    "title": "Present Continuous",
    "subtitle": "Actions happening now",
    "icon": "⏳",
    "order": 3,
    "content": {
      "overview": "Công thức: S + am/is/are + V-ing. Dùng để diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc tình huống mang tính tạm thời.",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + am/is/are + V-ing. Dùng để diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc tình huống mang tính tạm thời.",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "I",
                "I am working",
                "I'm not working",
                "Am I working?"
              ],
              [
                "You/We/They",
                "They are working",
                "They aren't working",
                "Are they working?"
              ],
              [
                "He/She/It",
                "He is working",
                "He isn't working",
                "Is he working?"
              ]
            ]
          }
        },
        {
          "title": "Uses",
          "explanation": "Công thức: S + am/is/are + V-ing. Dùng để diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc tình huống mang tính tạm thời.",
          "examples": [
            {
              "sentence": "She <em>is reading</em> a book right now.",
              "note": "Action happening now"
            },
            {
              "sentence": "I <em>am living</em> in London this year.",
              "note": "Temporary situation"
            },
            {
              "sentence": "We <em>are meeting</em> them tomorrow.",
              "note": "Future arrangement"
            },
            {
              "sentence": "You <em>are always complaining</em>!",
              "note": "Annoying habit (with \"always\")"
            }
          ]
        },
        {
          "title": "Stative Verbs",
          "explanation": "Công thức: S + am/is/are + V-ing. Dùng để diễn tả hành động đang diễn ra ngay tại thời điểm nói hoặc tình huống mang tính tạm thời.",
          "examples": [
            {
              "sentence": "❌ I <em>am knowing</em> the answer.",
              "note": "Wrong"
            },
            {
              "sentence": "✅ I <em>know</em> the answer.",
              "note": "Correct — \"know\" is a stative verb"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I am know the answer.",
          "correct": "I know the answer.",
          "tip": "\"Know\" is a stative verb — don't use it in continuous form."
        },
        {
          "wrong": "She is work now.",
          "correct": "She is working now.",
          "tip": "Don't forget the -ing ending."
        }
      ]
    }
  },
  {
    "id": "past-simple",
    "level": "beginner",
    "title": "Past Simple",
    "subtitle": "Completed actions in the past",
    "icon": "⏪",
    "order": 4,
    "content": {
      "overview": "Công thức: S + V2/ed. Dùng để diễn tả hành động đã xảy ra và hoàn tất tại một thời điểm xác định trong quá khứ. Dùng trợ động từ 'did/didn't' cho câu hỏi và câu phủ định.",
      "rules": [
        {
          "title": "Regular Verbs",
          "explanation": "Công thức: S + V2/ed. Dùng để diễn tả hành động đã xảy ra và hoàn tất tại một thời điểm xác định trong quá khứ. Dùng trợ động từ 'did/didn't' cho câu hỏi và câu phủ định.",
          "examples": [
            {
              "sentence": "work → work<em>ed</em>, play → play<em>ed</em>",
              "note": "Most verbs: add -ed"
            },
            {
              "sentence": "live → liv<em>ed</em>, dance → danc<em>ed</em>",
              "note": "Ending in -e: add -d"
            },
            {
              "sentence": "stop → stopp<em>ed</em>, plan → plann<em>ed</em>",
              "note": "CVC pattern: double consonant + -ed"
            },
            {
              "sentence": "study → studi<em>ed</em>, carry → carri<em>ed</em>",
              "note": "Consonant + y: change to -ied"
            }
          ]
        },
        {
          "title": "Irregular Verbs",
          "explanation": "Công thức: S + V2/ed. Dùng để diễn tả hành động đã xảy ra và hoàn tất tại một thời điểm xác định trong quá khứ. Dùng trợ động từ 'did/didn't' cho câu hỏi và câu phủ định.",
          "table": {
            "headers": [
              "Base Form",
              "Past Simple",
              "Base Form",
              "Past Simple"
            ],
            "rows": [
              [
                "go",
                "went",
                "come",
                "came"
              ],
              [
                "see",
                "saw",
                "take",
                "took"
              ],
              [
                "eat",
                "ate",
                "drink",
                "drank"
              ],
              [
                "write",
                "wrote",
                "read",
                "read"
              ],
              [
                "buy",
                "bought",
                "bring",
                "brought"
              ],
              [
                "give",
                "gave",
                "make",
                "made"
              ]
            ]
          }
        },
        {
          "title": "Negatives & Questions",
          "explanation": "Công thức: S + V2/ed. Dùng để diễn tả hành động đã xảy ra và hoàn tất tại một thời điểm xác định trong quá khứ. Dùng trợ động từ 'did/didn't' cho câu hỏi và câu phủ định.",
          "table": {
            "headers": [
              "Type",
              "Structure",
              "Example"
            ],
            "rows": [
              [
                "Negative",
                "Subject + didn't + base form",
                "She didn't go to school."
              ],
              [
                "Question",
                "Did + subject + base form?",
                "Did you see the movie?"
              ],
              [
                "Short answer",
                "Yes, I did. / No, I didn't.",
                "Did he call? — Yes, he did."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She didn't went to school.",
          "correct": "She didn't go to school.",
          "tip": "After didn't, use the base form, not past form."
        },
        {
          "wrong": "Did you saw the movie?",
          "correct": "Did you see the movie?",
          "tip": "After did, use the base form."
        },
        {
          "wrong": "I goed to the store.",
          "correct": "I went to the store.",
          "tip": "\"Go\" is irregular — its past form is \"went\"."
        }
      ]
    }
  },
  {
    "id": "future-simple",
    "level": "beginner",
    "title": "Future Simple",
    "subtitle": "will / shall / going to",
    "icon": "⏩",
    "order": 5,
    "content": {
      "overview": "Cấu trúc thì Tương lai: Dùng 'Will + V' cho quyết định bộc phát tại thời điểm nói hoặc dự đoán không căn cứ; dùng 'Be going to + V' cho kế hoạch đã lên lịch trước hoặc dự đoán có dấu hiệu thực tế.",
      "rules": [
        {
          "title": "Will — Spontaneous Decisions & Predictions",
          "explanation": "Cấu trúc thì Tương lai: Dùng 'Will + V' cho quyết định bộc phát tại thời điểm nói hoặc dự đoán không căn cứ; dùng 'Be going to + V' cho kế hoạch đã lên lịch trước hoặc dự đoán có dấu hiệu thực tế.",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "All subjects",
                "I will (I'll) help",
                "I will not (won't) help",
                "Will I help?"
              ]
            ]
          }
        },
        {
          "title": "Be Going To — Plans & Evidence-based Predictions",
          "explanation": "Cấu trúc thì Tương lai: Dùng 'Will + V' cho quyết định bộc phát tại thời điểm nói hoặc dự đoán không căn cứ; dùng 'Be going to + V' cho kế hoạch đã lên lịch trước hoặc dự đoán có dấu hiệu thực tế.",
          "examples": [
            {
              "sentence": "I <em>am going to</em> study medicine next year.",
              "note": "Planned decision"
            },
            {
              "sentence": "Look at those clouds! It <em>is going to</em> rain.",
              "note": "Prediction based on evidence"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I will to go tomorrow.",
          "correct": "I will go tomorrow.",
          "tip": "Don't use \"to\" after \"will\"."
        },
        {
          "wrong": "She will goes home.",
          "correct": "She will go home.",
          "tip": "Use base form after \"will\" (no -s)."
        }
      ]
    }
  },
  {
    "id": "countable-uncountable",
    "level": "beginner",
    "title": "Countable & Uncountable Nouns",
    "subtitle": "Quantity expressions",
    "icon": "🔢",
    "order": 6,
    "content": {
      "overview": "Danh từ đếm được có thể đếm theo từng đơn vị (one book, two books). Danh từ không đếm được là chất lỏng, vật chất hoặc khái niệm trừu tượng (water, information, advice).",
      "rules": [
        {
          "title": "Countable vs Uncountable",
          "explanation": "Danh từ đếm được có thể đếm theo từng đơn vị (one book, two books). Danh từ không đếm được là chất lỏng, vật chất hoặc khái niệm trừu tượng (water, information, advice).",
          "table": {
            "headers": [
              "Countable",
              "Uncountable"
            ],
            "rows": [
              [
                "a book / books",
                "water"
              ],
              [
                "an apple / apples",
                "information"
              ],
              [
                "a child / children",
                "advice"
              ],
              [
                "a person / people",
                "furniture"
              ]
            ]
          }
        },
        {
          "title": "Quantifiers",
          "explanation": "Danh từ đếm được có thể đếm theo từng đơn vị (one book, two books). Danh từ không đếm được là chất lỏng, vật chất hoặc khái niệm trừu tượng (water, information, advice).",
          "table": {
            "headers": [
              "Countable",
              "Uncountable",
              "Both"
            ],
            "rows": [
              [
                "many",
                "much",
                "some / any"
              ],
              [
                "few / a few",
                "little / a little",
                "a lot of"
              ],
              [
                "several",
                "—",
                "enough"
              ],
              [
                "a number of",
                "an amount of",
                "no"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I need an advice.",
          "correct": "I need some advice. / I need a piece of advice.",
          "tip": "\"Advice\" is uncountable."
        },
        {
          "wrong": "How much books do you have?",
          "correct": "How many books do you have?",
          "tip": "Use \"many\" with countable nouns."
        },
        {
          "wrong": "I have many informations.",
          "correct": "I have a lot of information.",
          "tip": "\"Information\" is uncountable (no plural -s)."
        }
      ]
    }
  },
  {
    "id": "articles",
    "level": "beginner",
    "title": "Articles",
    "subtitle": "a / an / the",
    "icon": "📝",
    "order": 7,
    "content": {
      "overview": "Quy tắc dùng mạo từ: Dùng 'a/an' cho danh từ đếm được số ít nói chung chung ('a' trước phụ âm, 'an' trước nguyên âm); dùng 'the' cho đối tượng cụ thể mà cả hai bên đều đã biết.",
      "rules": [
        {
          "title": "Indefinite Articles: A vs An",
          "explanation": "Quy tắc dùng mạo từ: Dùng 'a/an' cho danh từ đếm được số ít nói chung chung ('a' trước phụ âm, 'an' trước nguyên âm); dùng 'the' cho đối tượng cụ thể mà cả hai bên đều đã biết.",
          "examples": [
            {
              "sentence": "<em>a</em> book, <em>a</em> university (starts with /juː/ sound)",
              "note": "Consonant sound → a"
            },
            {
              "sentence": "<em>an</em> apple, <em>an</em> hour (silent h)",
              "note": "Vowel sound → an"
            }
          ]
        },
        {
          "title": "The Definite Article: The",
          "explanation": "Quy tắc dùng mạo từ: Dùng 'a/an' cho danh từ đếm được số ít nói chung chung ('a' trước phụ âm, 'an' trước nguyên âm); dùng 'the' cho đối tượng cụ thể mà cả hai bên đều đã biết.",
          "examples": [
            {
              "sentence": "I bought <em>a</em> car. <em>The</em> car is red.",
              "note": "Second mention"
            },
            {
              "sentence": "<em>The</em> sun rises in the east.",
              "note": "Unique things"
            },
            {
              "sentence": "Can you close <em>the</em> door?",
              "note": "Known from context"
            }
          ]
        },
        {
          "title": "Zero Article (no article)",
          "explanation": "Quy tắc dùng mạo từ: Dùng 'a/an' cho danh từ đếm được số ít nói chung chung ('a' trước phụ âm, 'an' trước nguyên âm); dùng 'the' cho đối tượng cụ thể mà cả hai bên đều đã biết.",
          "examples": [
            {
              "sentence": "I love ∅ music.",
              "note": "General/abstract concepts"
            },
            {
              "sentence": "She speaks ∅ English.",
              "note": "Languages"
            },
            {
              "sentence": "Breakfast is at 8.",
              "note": "Meals (general)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She is a honest person.",
          "correct": "She is an honest person.",
          "tip": "\"Honest\" starts with a vowel sound (/ɒ/)."
        },
        {
          "wrong": "I go to the school every day.",
          "correct": "I go to school every day.",
          "tip": "No article when talking about purpose (going to learn)."
        }
      ]
    }
  },
  {
    "id": "pronouns",
    "level": "beginner",
    "title": "Pronouns",
    "subtitle": "Personal, possessive, reflexive",
    "icon": "👤",
    "order": 8,
    "content": {
      "overview": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
      "rules": [
        {
          "title": "Personal Pronouns",
          "explanation": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
          "table": {
            "headers": [
              "Subject",
              "Object",
              "Possessive Adj.",
              "Possessive Pron.",
              "Reflexive"
            ],
            "rows": [
              [
                "I",
                "me",
                "my",
                "mine",
                "myself"
              ],
              [
                "you",
                "you",
                "your",
                "yours",
                "yourself"
              ],
              [
                "he",
                "him",
                "his",
                "his",
                "himself"
              ],
              [
                "she",
                "her",
                "her",
                "hers",
                "herself"
              ],
              [
                "it",
                "it",
                "its",
                "its",
                "itself"
              ],
              [
                "we",
                "us",
                "our",
                "ours",
                "ourselves"
              ],
              [
                "they",
                "them",
                "their",
                "theirs",
                "themselves"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Me and John went to the store.",
          "correct": "John and I went to the store.",
          "tip": "Use subject pronouns before the verb."
        },
        {
          "wrong": "This is her book. It's her.",
          "correct": "This is her book. It's hers.",
          "tip": "Use possessive pronouns (hers) without a following noun."
        }
      ]
    }
  },
  {
    "id": "prepositions",
    "level": "beginner",
    "title": "Prepositions of Time & Place",
    "subtitle": "in / on / at",
    "icon": "📍",
    "order": 9,
    "content": {
      "overview": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
      "rules": [
        {
          "title": "Prepositions of Time",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "table": {
            "headers": [
              "Preposition",
              "Used for",
              "Examples"
            ],
            "rows": [
              [
                "at",
                "Specific times, holidays",
                "at 5 o'clock, at night, at Christmas"
              ],
              [
                "on",
                "Days, dates",
                "on Monday, on 5th May, on my birthday"
              ],
              [
                "in",
                "Months, years, seasons, long periods",
                "in June, in 2024, in the morning"
              ]
            ]
          }
        },
        {
          "title": "Prepositions of Place",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "table": {
            "headers": [
              "Preposition",
              "Used for",
              "Examples"
            ],
            "rows": [
              [
                "at",
                "Specific point/location",
                "at the bus stop, at home, at work"
              ],
              [
                "on",
                "Surface, street",
                "on the table, on the wall, on Main Street"
              ],
              [
                "in",
                "Enclosed space, area",
                "in the room, in London, in the car"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I was born in 5th May.",
          "correct": "I was born on 5th May.",
          "tip": "Use \"on\" for specific dates."
        },
        {
          "wrong": "See you on Monday at the morning.",
          "correct": "See you on Monday in the morning.",
          "tip": "Use \"in\" for parts of the day (morning/afternoon/evening)."
        }
      ]
    }
  },
  {
    "id": "there-is-are",
    "level": "beginner",
    "title": "There is / There are",
    "subtitle": "Describing existence",
    "icon": "📌",
    "order": 10,
    "content": {
      "overview": "Cấu trúc chỉ sự tồn tại: Dùng 'There is' với danh từ số ít hoặc không đếm được; dùng 'There are' với danh từ số nhiều tại một vị trí xác định.",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Cấu trúc chỉ sự tồn tại: Dùng 'There is' với danh từ số ít hoặc không đếm được; dùng 'There are' với danh từ số nhiều tại một vị trí xác định.",
          "table": {
            "headers": [
              "",
              "Singular / Uncountable",
              "Plural"
            ],
            "rows": [
              [
                "Affirmative",
                "There is (There's) a cat.",
                "There are two cats."
              ],
              [
                "Negative",
                "There isn't a cat.",
                "There aren't any cats."
              ],
              [
                "Question",
                "Is there a cat?",
                "Are there any cats?"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "There is many people here.",
          "correct": "There are many people here.",
          "tip": "\"People\" is plural — use \"there are\"."
        },
        {
          "wrong": "There are a lot of water.",
          "correct": "There is a lot of water.",
          "tip": "\"Water\" is uncountable — use \"there is\"."
        }
      ]
    }
  },
  {
    "id": "comparatives-superlatives",
    "level": "beginner",
    "title": "Comparatives & Superlatives",
    "subtitle": "Comparing things",
    "icon": "⚖️",
    "order": 11,
    "content": {
      "overview": "Quy tắc so sánh: So sánh hơn (Comparatives) dùng cho 2 đối tượng (short adj-er / more + long adj + than); So sánh nhất (Superlatives) dùng cho 3 đối tượng trở lên (the short adj-est / the most + long adj).",
      "rules": [
        {
          "title": "Formation Rules",
          "explanation": "Quy tắc so sánh: So sánh hơn (Comparatives) dùng cho 2 đối tượng (short adj-er / more + long adj + than); So sánh nhất (Superlatives) dùng cho 3 đối tượng trở lên (the short adj-est / the most + long adj).",
          "table": {
            "headers": [
              "Adjective Type",
              "Comparative",
              "Superlative",
              "Example"
            ],
            "rows": [
              [
                "1 syllable",
                "+ -er",
                "+ -est",
                "tall → taller → tallest"
              ],
              [
                "1 syllable ending in -e",
                "+ -r",
                "+ -st",
                "large → larger → largest"
              ],
              [
                "2+ syllables",
                "more + adj",
                "most + adj",
                "beautiful → more beautiful → most beautiful"
              ],
              [
                "Irregular",
                "—",
                "—",
                "good → better → best"
              ]
            ]
          }
        },
        {
          "title": "Irregular Forms",
          "explanation": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
          "table": {
            "headers": [
              "Adjective",
              "Comparative",
              "Superlative"
            ],
            "rows": [
              [
                "good",
                "better",
                "best"
              ],
              [
                "bad",
                "worse",
                "worst"
              ],
              [
                "far",
                "farther/further",
                "farthest/furthest"
              ],
              [
                "little",
                "less",
                "least"
              ],
              [
                "much/many",
                "more",
                "most"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She is more tall than me.",
          "correct": "She is taller than me.",
          "tip": "Short adjectives (1 syllable) use -er, not \"more\"."
        },
        {
          "wrong": "This is the most good movie.",
          "correct": "This is the best movie.",
          "tip": "\"Good\" is irregular: good → better → best."
        },
        {
          "wrong": "He is more better.",
          "correct": "He is better.",
          "tip": "Don't use \"more\" with comparative forms."
        }
      ]
    }
  },
  {
    "id": "modal-verbs-basic",
    "level": "beginner",
    "title": "Modal Verbs (Basic)",
    "subtitle": "can / could / must / should",
    "icon": "🔑",
    "order": 12,
    "content": {
      "overview": "Động từ khuyết thiếu (Can, Could, Must, Should, May, Might) bổ sung ý nghĩa về khả năng, sự cho phép, nghĩa vụ bắt buộc, lời khuyên hoặc sự suy đoán logic. Theo sau luôn là động từ nguyên mẫu không 'to'.",
      "rules": [
        {
          "title": "Common Modal Verbs",
          "explanation": "Động từ khuyết thiếu (Can, Could, Must, Should, May, Might) bổ sung ý nghĩa về khả năng, sự cho phép, nghĩa vụ bắt buộc, lời khuyên hoặc sự suy đoán logic. Theo sau luôn là động từ nguyên mẫu không 'to'.",
          "table": {
            "headers": [
              "Modal",
              "Use",
              "Example"
            ],
            "rows": [
              [
                "can",
                "Ability / Permission",
                "I can swim. / Can I go?"
              ],
              [
                "could",
                "Past ability / Polite request",
                "I could swim when I was 5. / Could you help me?"
              ],
              [
                "must",
                "Strong obligation / Certainty",
                "You must wear a seatbelt. / She must be tired."
              ],
              [
                "should",
                "Advice / Recommendation",
                "You should see a doctor."
              ],
              [
                "may",
                "Permission / Possibility",
                "May I come in? / It may rain."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She can to swim.",
          "correct": "She can swim.",
          "tip": "Don't use \"to\" after modal verbs."
        },
        {
          "wrong": "He musts go now.",
          "correct": "He must go now.",
          "tip": "Modal verbs don't take -s for third person."
        },
        {
          "wrong": "I can't to understand.",
          "correct": "I can't understand.",
          "tip": "No \"to\" after can't either."
        }
      ]
    }
  },
  {
    "id": "adjectives-adverbs",
    "level": "beginner",
    "title": "Adjectives & Adverbs",
    "subtitle": "Describing nouns & actions",
    "icon": "✨",
    "order": 13,
    "content": {
      "overview": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
      "rules": [
        {
          "title": "Adjectives vs Adverbs Formation",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "table": {
            "headers": [
              "Adjective (describes Noun)",
              "Adverb (describes Verb)",
              "Example"
            ],
            "rows": [
              [
                "quick",
                "quickly",
                "She is a quick runner. / She runs quickly."
              ],
              [
                "careful",
                "carefully",
                "Be careful! / Drive carefully."
              ],
              [
                "easy",
                "easily",
                "An easy test. / Passed easily."
              ],
              [
                "fast",
                "fast (irregular)",
                "A fast car. / Drives fast."
              ],
              [
                "good",
                "well (irregular)",
                "A good cook. / Cooks well."
              ]
            ]
          }
        },
        {
          "title": "Adverb Placement",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "She speaks English <em>fluently</em>.",
              "note": "Manner adverb after object"
            },
            {
              "sentence": "He <em>always</em> arrives on time.",
              "note": "Frequency adverb before main verb"
            },
            {
              "sentence": "They are <em>extremely</em> happy.",
              "note": "Degree adverb before adjective"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She speaks English good.",
          "correct": "She speaks English well.",
          "tip": "Use \"well\" (adverb) to describe how someone speaks a language."
        },
        {
          "wrong": "He drives fastly.",
          "correct": "He drives fast.",
          "tip": "\"Fast\" is both an adjective and an adverb (no \"fastly\")."
        }
      ]
    }
  },
  {
    "id": "possessives-reflexives",
    "level": "beginner",
    "title": "Possessives & Reflexive Pronouns",
    "subtitle": "My/Mine, Myself, Each other",
    "icon": "🤝",
    "order": 14,
    "content": {
      "overview": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
      "rules": [
        {
          "title": "Possessive Adjective vs Possessive Pronoun",
          "explanation": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
          "table": {
            "headers": [
              "Subject",
              "Possessive Adjective (+ Noun)",
              "Possessive Pronoun (No Noun)"
            ],
            "rows": [
              [
                "I",
                "my book",
                "This book is mine."
              ],
              [
                "you",
                "your car",
                "That car is yours."
              ],
              [
                "he",
                "his coat",
                "The coat is his."
              ],
              [
                "she",
                "her bag",
                "The bag is hers."
              ],
              [
                "we",
                "our house",
                "The house is ours."
              ],
              [
                "they",
                "their team",
                "The trophy is theirs."
              ]
            ]
          }
        },
        {
          "title": "Reflexive vs Reciprocal Pronouns",
          "explanation": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
          "examples": [
            {
              "sentence": "He cut <em>himself</em> while cooking.",
              "note": "Reflexive: subject = object"
            },
            {
              "sentence": "Tom and Mary looked at <em>each other</em>.",
              "note": "Reciprocal: mutual action"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "This pen is my.",
          "correct": "This pen is mine.",
          "tip": "Use \"mine\" when there is no noun following."
        },
        {
          "wrong": "They love themselves.",
          "correct": "They love each other.",
          "tip": "Use \"each other\" for mutual affection between two people."
        }
      ]
    }
  },
  {
    "id": "question-formation-tags",
    "level": "beginner",
    "title": "Question Formation & Question Tags",
    "subtitle": "Direct, Indirect & Tag questions",
    "icon": "❓",
    "order": 15,
    "content": {
      "overview": "Quy tắc đặt câu hỏi: Đảo trợ động từ (be, do, have, modal) lên trước chủ ngữ. Với câu hỏi đuôi (Tag questions), mệnh đề khẳng định đi với đuôi phủ định và ngược lại.",
      "rules": [
        {
          "title": "Direct Question Structure (ASI / QUASI)",
          "explanation": "Quy tắc đặt câu hỏi: Đảo trợ động từ (be, do, have, modal) lên trước chủ ngữ. Với câu hỏi đuôi (Tag questions), mệnh đề khẳng định đi với đuôi phủ định và ngược lại.",
          "examples": [
            {
              "sentence": "<em>Do you live</em> in London?",
              "note": "Auxiliary (Do) + Subject (you) + Verb (live)"
            },
            {
              "sentence": "<em>Where did she go</em> yesterday?",
              "note": "Q-word (Where) + Aux (did) + Subj (she) + Verb (go)"
            }
          ]
        },
        {
          "title": "Question Tags",
          "explanation": "Quy tắc đặt câu hỏi: Đảo trợ động từ (be, do, have, modal) lên trước chủ ngữ. Với câu hỏi đuôi (Tag questions), mệnh đề khẳng định đi với đuôi phủ định và ngược lại.",
          "table": {
            "headers": [
              "Statement",
              "Question Tag",
              "Full Sentence"
            ],
            "rows": [
              [
                "She is a doctor,",
                "isn't she?",
                "She is a doctor, isn't she?"
              ],
              [
                "You don't smoke,",
                "do you?",
                "You don't smoke, do you?"
              ],
              [
                "They arrived late,",
                "didn't they?",
                "They arrived late, didn't they?"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Where she goes every day?",
          "correct": "Where does she go every day?",
          "tip": "Don't forget the auxiliary verb \"does\" in present simple questions."
        },
        {
          "wrong": "You are coming, aren't it?",
          "correct": "You are coming, aren't you?",
          "tip": "Match the subject and auxiliary in the question tag."
        }
      ]
    }
  },
  {
    "id": "present-perfect",
    "level": "intermediate",
    "title": "Present Perfect",
    "subtitle": "have/has + past participle",
    "icon": "✅",
    "order": 1,
    "content": {
      "overview": "Công thức: S + have/has + V3/ed. Diễn tả trải nghiệm sống, sự việc vừa mới xảy ra hoặc trạng thái kéo dài từ quá khứ đến hiện tại (thường đi với for/since/just/already/yet).",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + have/has + V3/ed. Diễn tả trải nghiệm sống, sự việc vừa mới xảy ra hoặc trạng thái kéo dài từ quá khứ đến hiện tại (thường đi với for/since/just/already/yet).",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "I/You/We/They",
                "I have (I've) worked",
                "I haven't worked",
                "Have I worked?"
              ],
              [
                "He/She/It",
                "She has (She's) worked",
                "She hasn't worked",
                "Has she worked?"
              ]
            ]
          }
        },
        {
          "title": "Key Uses",
          "explanation": "Công thức: S + have/has + V3/ed. Diễn tả trải nghiệm sống, sự việc vừa mới xảy ra hoặc trạng thái kéo dài từ quá khứ đến hiện tại (thường đi với for/since/just/already/yet).",
          "examples": [
            {
              "sentence": "I <em>have visited</em> Paris three times.",
              "note": "Life experience (ever/never)"
            },
            {
              "sentence": "She <em>has just finished</em> her homework.",
              "note": "Recent action (just/already/yet)"
            },
            {
              "sentence": "I <em>have lived</em> here since 2010.",
              "note": "Unfinished time (since/for)"
            },
            {
              "sentence": "Technology <em>has changed</em> our lives.",
              "note": "Change over time"
            }
          ]
        },
        {
          "title": "Since vs For",
          "explanation": "Công thức: S + have/has + V3/ed. Diễn tả trải nghiệm sống, sự việc vừa mới xảy ra hoặc trạng thái kéo dài từ quá khứ đến hiện tại (thường đi với for/since/just/already/yet).",
          "table": {
            "headers": [
              "Since (point in time)",
              "For (period of time)"
            ],
            "rows": [
              [
                "since 2020",
                "for 4 years"
              ],
              [
                "since Monday",
                "for 3 days"
              ],
              [
                "since I was a child",
                "for a long time"
              ],
              [
                "since 8 o'clock",
                "for 2 hours"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I have went to Paris.",
          "correct": "I have gone to Paris.",
          "tip": "Use the past participle (V3), not past simple."
        },
        {
          "wrong": "I have visited Paris yesterday.",
          "correct": "I visited Paris yesterday.",
          "tip": "Don't use Present Perfect with specific past times (yesterday, last week, in 2019)."
        },
        {
          "wrong": "I live here for 5 years.",
          "correct": "I have lived here for 5 years.",
          "tip": "Use Present Perfect for actions that started in the past and continue now."
        }
      ]
    }
  },
  {
    "id": "present-perfect-continuous",
    "level": "intermediate",
    "title": "Present Perfect Continuous",
    "subtitle": "have/has been + V-ing",
    "icon": "🔄",
    "order": 2,
    "content": {
      "overview": "Công thức: S + have/has been + V-ing. Diễn tả hành động bắt đầu trong quá khứ, tiếp diễn liên tục đến hiện tại và nhấn mạnh vào THỜI LƯỢNG hoặc quá trình làm việc.",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + have/has been + V-ing. Diễn tả hành động bắt đầu trong quá khứ, tiếp diễn liên tục đến hiện tại và nhấn mạnh vào THỜI LƯỢNG hoặc quá trình làm việc.",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "I/You/We/They",
                "I have been working",
                "I haven't been working",
                "Have I been working?"
              ],
              [
                "He/She/It",
                "She has been working",
                "She hasn't been working",
                "Has she been working?"
              ]
            ]
          }
        },
        {
          "title": "Present Perfect Simple vs Continuous",
          "explanation": "Công thức: S + have/has been + V-ing. Diễn tả hành động bắt đầu trong quá khứ, tiếp diễn liên tục đến hiện tại và nhấn mạnh vào THỜI LƯỢNG hoặc quá trình làm việc.",
          "examples": [
            {
              "sentence": "I <em>have read</em> the book. (finished it)",
              "note": "Simple = result"
            },
            {
              "sentence": "I <em>have been reading</em> for 2 hours. (still reading or just stopped)",
              "note": "Continuous = duration"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I have been knowing him for years.",
          "correct": "I have known him for years.",
          "tip": "\"Know\" is a stative verb — use simple form."
        }
      ]
    }
  },
  {
    "id": "past-continuous",
    "level": "intermediate",
    "title": "Past Continuous",
    "subtitle": "was/were + V-ing",
    "icon": "🔙",
    "order": 3,
    "content": {
      "overview": "Công thức: S + was/were + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong quá khứ (kết hợp với Past Simple qua when/while).",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + was/were + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong quá khứ (kết hợp với Past Simple qua when/while).",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "I/He/She/It",
                "I was working",
                "I wasn't working",
                "Was I working?"
              ],
              [
                "You/We/They",
                "They were working",
                "They weren't working",
                "Were they working?"
              ]
            ]
          }
        },
        {
          "title": "Uses",
          "explanation": "Công thức: S + was/were + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong quá khứ (kết hợp với Past Simple qua when/while).",
          "examples": [
            {
              "sentence": "I <em>was cooking</em> when the phone rang.",
              "note": "Interrupted action (while/when)"
            },
            {
              "sentence": "At 8 PM, she <em>was studying</em>.",
              "note": "Action at a specific past time"
            },
            {
              "sentence": "While I <em>was reading</em>, he <em>was watching</em> TV.",
              "note": "Parallel actions"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I was cook dinner when he arrived.",
          "correct": "I was cooking dinner when he arrived.",
          "tip": "Don't forget the -ing ending."
        },
        {
          "wrong": "When I was sleeping, the alarm rang.",
          "correct": "While I was sleeping, the alarm rang.",
          "tip": "Use \"while\" for the longer action and \"when\" for the shorter one."
        }
      ]
    }
  },
  {
    "id": "past-perfect",
    "level": "intermediate",
    "title": "Past Perfect",
    "subtitle": "had + past participle",
    "icon": "⏮️",
    "order": 4,
    "content": {
      "overview": "Công thức: S + had + V3/ed. Diễn tả một hành động đã xảy ra và hoàn thành TRƯỚC một hành động hoặc mốc thời gian khác trong quá khứ.",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + had + V3/ed. Diễn tả một hành động đã xảy ra và hoàn thành TRƯỚC một hành động hoặc mốc thời gian khác trong quá khứ.",
          "examples": [
            {
              "sentence": "When I arrived, the movie <em>had already started</em>.",
              "note": "Action 1 (started) before Action 2 (arrived)"
            },
            {
              "sentence": "She <em>had never seen</em> snow before she moved to Canada.",
              "note": "Experience before a past time"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "When I arrived, the movie already started.",
          "correct": "When I arrived, the movie had already started.",
          "tip": "Use Past Perfect for the earlier action."
        }
      ]
    }
  },
  {
    "id": "past-perfect-continuous",
    "level": "intermediate",
    "title": "Past Perfect Continuous",
    "subtitle": "had been + V-ing",
    "icon": "⏳",
    "order": 5,
    "content": {
      "overview": "Công thức: S + had been + V-ing. Nhấn mạnh khoảng thời gian diễn ra liên tục của hành động quá khứ cho tới trước một mốc quá khứ khác.",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + had been + V-ing. Nhấn mạnh khoảng thời gian diễn ra liên tục của hành động quá khứ cho tới trước một mốc quá khứ khác.",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "I/You/We/They",
                "I had been working",
                "I hadn't been working",
                "Had I been working?"
              ],
              [
                "He/She/It",
                "She had been working",
                "She hadn't been working",
                "Had she been working?"
              ]
            ]
          }
        },
        {
          "title": "Key Uses",
          "explanation": "Công thức: S + had been + V-ing. Nhấn mạnh khoảng thời gian diễn ra liên tục của hành động quá khứ cho tới trước một mốc quá khứ khác.",
          "examples": [
            {
              "sentence": "They <em>had been playing</em> football for an hour when it started to rain.",
              "note": "Duration before past event"
            },
            {
              "sentence": "The ground was wet because it <em>had been raining</em>.",
              "note": "Cause of past result"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I had been knowing her for years.",
          "correct": "I had known her for years.",
          "tip": "\"Know\" is a stative verb — use Past Perfect Simple instead."
        }
      ]
    }
  },
  {
    "id": "future-continuous",
    "level": "intermediate",
    "title": "Future Continuous",
    "subtitle": "will be + V-ing",
    "icon": "🔮",
    "order": 6,
    "content": {
      "overview": "Công thức: S + will be + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong tương lai.",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + will be + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong tương lai.",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "All subjects",
                "I will be working",
                "I won't be working",
                "Will you be working?"
              ]
            ]
          }
        },
        {
          "title": "Key Uses",
          "explanation": "Công thức: S + will be + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong tương lai.",
          "examples": [
            {
              "sentence": "This time tomorrow, we <em>will be flying</em> to New York.",
              "note": "Action in progress"
            },
            {
              "sentence": "I <em>will be working</em> late tonight.",
              "note": "Planned future event"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I will being studying tonight.",
          "correct": "I will be studying tonight.",
          "tip": "Use \"be + V-ing\" after \"will\"."
        }
      ]
    }
  },
  {
    "id": "future-perfect",
    "level": "intermediate",
    "title": "Future Perfect",
    "subtitle": "will have + past participle",
    "icon": "⏳",
    "order": 7,
    "content": {
      "overview": "Công thức: S + will have + V3/ed. Diễn tả hành động sẽ hoàn thành TRƯỚC một mốc thời gian hoặc một sự kiện khác trong tương lai (đi với by/by the time).",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + will have + V3/ed. Diễn tả hành động sẽ hoàn thành TRƯỚC một mốc thời gian hoặc một sự kiện khác trong tương lai (đi với by/by the time).",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "All subjects",
                "I will have finished",
                "I won't have finished",
                "Will you have finished?"
              ]
            ]
          }
        },
        {
          "title": "Key Uses",
          "explanation": "Công thức: S + will have + V3/ed. Diễn tả hành động sẽ hoàn thành TRƯỚC một mốc thời gian hoặc một sự kiện khác trong tương lai (đi với by/by the time).",
          "examples": [
            {
              "sentence": "I <em>will have graduated</em> by next year.",
              "note": "Action completed before a point in time"
            },
            {
              "sentence": "She <em>will have finished</em> the report by Friday.",
              "note": "Action completed before a deadline"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "By the time you arrive, I will finish the report.",
          "correct": "By the time you arrive, I will have finished the report.",
          "tip": "Use Future Perfect with \"by the time\" to show completion."
        }
      ]
    }
  },
  {
    "id": "future-perfect-continuous",
    "level": "intermediate",
    "title": "Future Perfect Continuous",
    "subtitle": "will have been + V-ing",
    "icon": "🔄",
    "order": 8,
    "content": {
      "overview": "Công thức: S + will have been + V-ing. Nhấn mạnh thời lượng kéo dài của hành động tính tới một thời điểm trong tương lai (thường có 'by' và 'for').",
      "rules": [
        {
          "title": "Formation",
          "explanation": "Công thức: S + will have been + V-ing. Nhấn mạnh thời lượng kéo dài của hành động tính tới một thời điểm trong tương lai (thường có 'by' và 'for').",
          "table": {
            "headers": [
              "",
              "Affirmative",
              "Negative",
              "Question"
            ],
            "rows": [
              [
                "All subjects",
                "I will have been working",
                "I won't have been working",
                "Will you have been working?"
              ]
            ]
          }
        },
        {
          "title": "Key Uses",
          "explanation": "Công thức: S + will have been + V-ing. Nhấn mạnh thời lượng kéo dài của hành động tính tới một thời điểm trong tương lai (thường có 'by' và 'for').",
          "examples": [
            {
              "sentence": "By next year, I <em>will have been living</em> in London for five years.",
              "note": "Duration up to a future point"
            },
            {
              "sentence": "When you arrive, she <em>will have been waiting</em> for two hours.",
              "note": "Duration before another event"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "By 5 PM, I will have been working here since 10 hours.",
          "correct": "By 5 PM, I will have been working here for 10 hours.",
          "tip": "Use \"for\" to express duration."
        }
      ]
    }
  },
  {
    "id": "conditionals-012",
    "level": "intermediate",
    "title": "Conditionals (Type 0, 1, 2)",
    "subtitle": "If-clauses",
    "icon": "🔀",
    "order": 9,
    "content": {
      "overview": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
      "rules": [
        {
          "title": "Zero Conditional — General Truths",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "examples": [
            {
              "sentence": "If you heat water to 100°C, it <em>boils</em>.",
              "note": "Scientific fact"
            },
            {
              "sentence": "If I eat too much, I <em>feel</em> sick.",
              "note": "General truth"
            }
          ]
        },
        {
          "title": "First Conditional — Real Future",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "examples": [
            {
              "sentence": "If it <em>rains</em>, I <em>will stay</em> home.",
              "note": "Possible future situation"
            },
            {
              "sentence": "If you <em>study</em> hard, you <em>will pass</em> the exam.",
              "note": "Likely outcome"
            }
          ]
        },
        {
          "title": "Second Conditional — Unreal Present",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "examples": [
            {
              "sentence": "If I <em>had</em> a million dollars, I <em>would travel</em> the world.",
              "note": "Imaginary situation"
            },
            {
              "sentence": "If she <em>were</em> taller, she <em>would</em> play basketball.",
              "note": "Hypothetical — use \"were\" for all subjects"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "If it will rain, I will stay home.",
          "correct": "If it rains, I will stay home.",
          "tip": "Don't use \"will\" in the if-clause of first conditional."
        },
        {
          "wrong": "If I would have money, I would buy it.",
          "correct": "If I had money, I would buy it.",
          "tip": "Don't use \"would\" in the if-clause of second conditional."
        }
      ]
    }
  },
  {
    "id": "passive-voice",
    "level": "intermediate",
    "title": "Passive Voice",
    "subtitle": "be + past participle",
    "icon": "🔃",
    "order": 10,
    "content": {
      "overview": "Công thức bị động: S + be + V3/ed (+ by tác nhân). Dùng khi đối tượng chịu tác động hoặc bản thân hành động quan trọng hơn người thực hiện.",
      "rules": [
        {
          "title": "Formation Across Tenses",
          "explanation": "Công thức bị động: S + be + V3/ed (+ by tác nhân). Dùng khi đối tượng chịu tác động hoặc bản thân hành động quan trọng hơn người thực hiện.",
          "table": {
            "headers": [
              "Tense",
              "Active",
              "Passive"
            ],
            "rows": [
              [
                "Present Simple",
                "They make cars here.",
                "Cars are made here."
              ],
              [
                "Past Simple",
                "She wrote the letter.",
                "The letter was written (by her)."
              ],
              [
                "Present Perfect",
                "They have built a bridge.",
                "A bridge has been built."
              ],
              [
                "Future (will)",
                "They will repair the road.",
                "The road will be repaired."
              ],
              [
                "Modal",
                "You must finish it.",
                "It must be finished."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The letter was wrote by her.",
          "correct": "The letter was written by her.",
          "tip": "Use the past participle (V3), not past simple."
        },
        {
          "wrong": "English is spoke here.",
          "correct": "English is spoken here.",
          "tip": "\"Speak\" is irregular: speak → spoke → spoken."
        }
      ]
    }
  },
  {
    "id": "reported-speech",
    "level": "intermediate",
    "title": "Reported Speech",
    "subtitle": "Indirect speech",
    "icon": "💬",
    "order": 11,
    "content": {
      "overview": "Quy tắc câu tường thuật: Lùi thì của động từ về quá khứ (Present -> Past, Will -> Would...), đồng thời thay đổi đại từ, tính từ sở hữu và trạng từ thời gian/nơi chốn tương ứng.",
      "rules": [
        {
          "title": "Tense Changes",
          "explanation": "Quy tắc câu tường thuật: Lùi thì của động từ về quá khứ (Present -> Past, Will -> Would...), đồng thời thay đổi đại từ, tính từ sở hữu và trạng từ thời gian/nơi chốn tương ứng.",
          "table": {
            "headers": [
              "Direct Speech",
              "Reported Speech"
            ],
            "rows": [
              [
                "Present Simple: \"I work here.\"",
                "Past Simple: He said he worked there."
              ],
              [
                "Present Continuous: \"I am working.\"",
                "Past Continuous: He said he was working."
              ],
              [
                "Past Simple: \"I worked.\"",
                "Past Perfect: He said he had worked."
              ],
              [
                "Will: \"I will go.\"",
                "Would: He said he would go."
              ],
              [
                "Can: \"I can swim.\"",
                "Could: He said he could swim."
              ]
            ]
          }
        },
        {
          "title": "Pronoun & Time/Place Changes",
          "explanation": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
          "table": {
            "headers": [
              "Direct",
              "Reported"
            ],
            "rows": [
              [
                "today",
                "that day"
              ],
              [
                "tomorrow",
                "the next day"
              ],
              [
                "yesterday",
                "the day before"
              ],
              [
                "here",
                "there"
              ],
              [
                "this",
                "that"
              ],
              [
                "now",
                "then"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He said that he is happy.",
          "correct": "He said that he was happy.",
          "tip": "Shift present simple to past simple when reporting verb is past."
        }
      ]
    }
  },
  {
    "id": "relative-clauses",
    "level": "intermediate",
    "title": "Relative Clauses",
    "subtitle": "who / which / that / where",
    "icon": "🔗",
    "order": 12,
    "content": {
      "overview": "Mệnh đề quan hệ bổ sung thông tin cho danh từ: Dùng 'who' chỉ người, 'which' chỉ vật, 'that' thay cho cả hai trong mệnh đề xác định, 'whose' chỉ sở hữu.",
      "rules": [
        {
          "title": "Relative Pronouns",
          "explanation": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
          "table": {
            "headers": [
              "Pronoun",
              "Used for",
              "Example"
            ],
            "rows": [
              [
                "who/that",
                "People",
                "The man who lives next door is friendly."
              ],
              [
                "which/that",
                "Things/Animals",
                "The book which I read was excellent."
              ],
              [
                "whose",
                "Possession",
                "The girl whose father is a doctor won."
              ],
              [
                "where",
                "Places",
                "The restaurant where we met is closing."
              ],
              [
                "when",
                "Times",
                "I remember the day when we first met."
              ]
            ]
          }
        },
        {
          "title": "Defining vs Non-defining",
          "explanation": "Mệnh đề quan hệ bổ sung thông tin cho danh từ: Dùng 'who' chỉ người, 'which' chỉ vật, 'that' thay cho cả hai trong mệnh đề xác định, 'whose' chỉ sở hữu.",
          "examples": [
            {
              "sentence": "The students <em>who passed the exam</em> can graduate.",
              "note": "Defining — tells us which students"
            },
            {
              "sentence": "My brother, <em>who lives in London</em>, is a doctor.",
              "note": "Non-defining — extra info (commas)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The man which I met was kind.",
          "correct": "The man who I met was kind.",
          "tip": "Use \"who\" for people, not \"which\"."
        },
        {
          "wrong": "My sister who lives in Paris is a teacher. (only one sister)",
          "correct": "My sister, who lives in Paris, is a teacher.",
          "tip": "If you only have one sister, use commas (non-defining)."
        }
      ]
    }
  },
  {
    "id": "gerunds-infinitives",
    "level": "intermediate",
    "title": "Gerunds & Infinitives",
    "subtitle": "V-ing vs to + V",
    "icon": "🎯",
    "order": 13,
    "content": {
      "overview": "Danh động từ (V-ing) và Động từ nguyên mẫu (To-V): Dùng làm tân ngữ sau một số động từ nhất định (enjoy + V-ing, decide + To-V) hoặc sau giới từ (preposition + V-ing).",
      "rules": [
        {
          "title": "Verbs Followed by Gerund (-ing)",
          "explanation": "Danh động từ (V-ing) và Động từ nguyên mẫu (To-V): Dùng làm tân ngữ sau một số động từ nhất định (enjoy + V-ing, decide + To-V) hoặc sau giới từ (preposition + V-ing).",
          "examples": [
            {
              "sentence": "I enjoy <em>swimming</em> in the sea.",
              "note": ""
            },
            {
              "sentence": "She avoids <em>eating</em> fast food.",
              "note": ""
            }
          ]
        },
        {
          "title": "Verbs Followed by Infinitive (to + V)",
          "explanation": "Danh động từ (V-ing) và Động từ nguyên mẫu (To-V): Dùng làm tân ngữ sau một số động từ nhất định (enjoy + V-ing, decide + To-V) hoặc sau giới từ (preposition + V-ing).",
          "examples": [
            {
              "sentence": "I want <em>to learn</em> English.",
              "note": ""
            },
            {
              "sentence": "She decided <em>to move</em> to London.",
              "note": ""
            }
          ]
        },
        {
          "title": "Verbs That Take Both (Different Meaning)",
          "explanation": "Danh động từ (V-ing) và Động từ nguyên mẫu (To-V): Dùng làm tân ngữ sau một số động từ nhất định (enjoy + V-ing, decide + To-V) hoặc sau giới từ (preposition + V-ing).",
          "table": {
            "headers": [
              "Verb",
              "Gerund (V-ing)",
              "Infinitive (to + V)"
            ],
            "rows": [
              [
                "remember",
                "I remember locking the door. (= I did it and I remember)",
                "Remember to lock the door. (= Don't forget to do it)"
              ],
              [
                "stop",
                "He stopped smoking. (= quit)",
                "He stopped to smoke. (= paused in order to smoke)"
              ],
              [
                "try",
                "Try calling her. (= experiment)",
                "I tried to call her. (= attempted)"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I enjoy to swim.",
          "correct": "I enjoy swimming.",
          "tip": "\"Enjoy\" is always followed by a gerund."
        },
        {
          "wrong": "She decided going home.",
          "correct": "She decided to go home.",
          "tip": "\"Decide\" is always followed by an infinitive."
        }
      ]
    }
  },
  {
    "id": "phrasal-verbs",
    "level": "intermediate",
    "title": "Phrasal Verbs",
    "subtitle": "Verb + particle combinations",
    "icon": "🧩",
    "order": 14,
    "content": {
      "overview": "Cụm động từ (Phrasal Verbs) = Động từ + Giới từ/Tiểu từ, mang nghĩa thành ngữ mới. Lưu ý với phrasal verbs tách được, đại từ tân ngữ (it, them) BẮT BUỘC phải đứng ở giữa.",
      "rules": [
        {
          "title": "Common Phrasal Verbs",
          "explanation": "Cụm động từ (Phrasal Verbs) = Động từ + Giới từ/Tiểu từ, mang nghĩa thành ngữ mới. Lưu ý với phrasal verbs tách được, đại từ tân ngữ (it, them) BẮT BUỘC phải đứng ở giữa.",
          "table": {
            "headers": [
              "Phrasal Verb",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "look up",
                "search for information",
                "I looked up the word in a dictionary."
              ],
              [
                "give up",
                "stop trying",
                "Don't give up! Keep trying."
              ],
              [
                "turn on/off",
                "start/stop a device",
                "Turn off the lights, please."
              ],
              [
                "put off",
                "postpone",
                "They put off the meeting until Friday."
              ],
              [
                "break down",
                "stop working (machine)",
                "My car broke down on the highway."
              ],
              [
                "come up with",
                "think of (an idea)",
                "She came up with a great solution."
              ],
              [
                "look forward to",
                "anticipate with pleasure",
                "I look forward to seeing you."
              ],
              [
                "run out of",
                "have no more of",
                "We ran out of milk."
              ]
            ]
          }
        },
        {
          "title": "Separable vs Inseparable",
          "explanation": "Cụm động từ (Phrasal Verbs) = Động từ + Giới từ/Tiểu từ, mang nghĩa thành ngữ mới. Lưu ý với phrasal verbs tách được, đại từ tân ngữ (it, them) BẮT BUỘC phải đứng ở giữa.",
          "examples": [
            {
              "sentence": "She <em>turned off</em> the TV. / She <em>turned</em> the TV <em>off</em>.",
              "note": "Separable — object can go in the middle"
            },
            {
              "sentence": "She <em>turned</em> it <em>off</em>. (NOT: She turned off it.)",
              "note": "Pronouns MUST go in the middle"
            },
            {
              "sentence": "I <em>look forward to</em> the party. (NOT: I look the party forward to.)",
              "note": "Inseparable — object must come after"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I look forward to hear from you.",
          "correct": "I look forward to hearing from you.",
          "tip": "\"To\" here is a preposition, so use gerund (-ing)."
        },
        {
          "wrong": "Turn off it.",
          "correct": "Turn it off.",
          "tip": "With pronouns, the object goes between the verb and particle."
        }
      ]
    }
  },
  {
    "id": "conjunctions-connectors",
    "level": "intermediate",
    "title": "Conjunctions & Connectors",
    "subtitle": "Linking ideas",
    "icon": "🔗",
    "order": 15,
    "content": {
      "overview": "Liên từ và từ nối giúp gắn kết các từ, mệnh đề để thể hiện quan hệ logic: FANBOYS cho mệnh đề ngang hàng; because/although cho mệnh đề phụ thuộc; however/therefore cho liên kết câu.",
      "rules": [
        {
          "title": "Coordinating Conjunctions (FANBOYS)",
          "explanation": "Liên từ và từ nối giúp gắn kết các từ, mệnh đề để thể hiện quan hệ logic: FANBOYS cho mệnh đề ngang hàng; because/although cho mệnh đề phụ thuộc; however/therefore cho liên kết câu.",
          "examples": [
            {
              "sentence": "I was tired, <em>but</em> I kept working.",
              "note": "Contrast"
            },
            {
              "sentence": "She studied hard, <em>so</em> she passed.",
              "note": "Result"
            }
          ]
        },
        {
          "title": "Subordinating Conjunctions",
          "explanation": "Liên từ và từ nối giúp gắn kết các từ, mệnh đề để thể hiện quan hệ logic: FANBOYS cho mệnh đề ngang hàng; because/although cho mệnh đề phụ thuộc; however/therefore cho liên kết câu.",
          "table": {
            "headers": [
              "Type",
              "Conjunctions",
              "Example"
            ],
            "rows": [
              [
                "Time",
                "when, while, before, after, since, until",
                "I'll wait until you come."
              ],
              [
                "Reason",
                "because, since, as",
                "She left because she was tired."
              ],
              [
                "Contrast",
                "although, though, even though, whereas",
                "Although it rained, we went out."
              ],
              [
                "Condition",
                "if, unless, provided that",
                "Unless you hurry, you'll be late."
              ],
              [
                "Purpose",
                "so that, in order that",
                "I study so that I can pass."
              ]
            ]
          }
        },
        {
          "title": "Linking Adverbs",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "table": {
            "headers": [
              "Type",
              "Adverbs",
              "Example"
            ],
            "rows": [
              [
                "Addition",
                "moreover, furthermore, in addition",
                "He is smart. Moreover, he is hardworking."
              ],
              [
                "Contrast",
                "however, nevertheless, on the other hand",
                "It was expensive. However, it was worth it."
              ],
              [
                "Result",
                "therefore, consequently, as a result",
                "He didn't study. Therefore, he failed."
              ],
              [
                "Example",
                "for example, for instance, such as",
                "Many sports, for example, swimming..."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Although it was raining, but we went out.",
          "correct": "Although it was raining, we went out.",
          "tip": "Don't use both \"although\" and \"but\" — choose one."
        },
        {
          "wrong": "Because I was tired. I went to bed.",
          "correct": "Because I was tired, I went to bed.",
          "tip": "\"Because\" connects two parts of the same sentence — don't split them."
        }
      ]
    }
  },
  {
    "id": "used-to-would",
    "level": "intermediate",
    "title": "Used to, Would & Be/Get used to",
    "subtitle": "Past habits vs becoming accustomed",
    "icon": "🕰️",
    "order": 16,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: \"Used to\" and \"would\" describe past habits and states. \"Be used to\" and \"get used to\" describe being or becoming familiar with something.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Used to vs Would (Past Habits & States)",
          "explanation": "Quy tắc & Cấu trúc chính: \"Used to\" can be used for past habits AND past states. \"Would\" can ONLY be used for past repeated actions (habits), NOT states.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "I <em>used to live</em> in Paris. (NOT: I would live...)",
              "note": "State verb (live/be/have) → use \"used to\""
            },
            {
              "sentence": "Every summer we <em>would go</em> camping.",
              "note": "Action verb → \"used to\" or \"would\""
            }
          ]
        },
        {
          "title": "Be used to vs Get used to",
          "explanation": "Quy tắc & Cấu trúc chính: \"Be used to + V-ing/Noun\" = be accustomed to. \"Get used to + V-ing/Noun\" = become accustomed to.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Structure",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Subject + be used to + V-ing",
                "Accustomed to (present state)",
                "I am used to getting up early."
              ],
              [
                "Subject + get used to + V-ing",
                "Process of becoming accustomed",
                "She is getting used to the cold weather."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I would be shy when I was young.",
          "correct": "I used to be shy when I was young.",
          "tip": "\"Be\" is a state verb — use \"used to\", not \"would\"."
        },
        {
          "wrong": "I am used to wake up early.",
          "correct": "I am used to waking up early.",
          "tip": "After \"be used to\", use verb-ing or a noun."
        }
      ]
    }
  },
  {
    "id": "modals-of-deduction",
    "level": "intermediate",
    "title": "Modals of Deduction (Present & Past)",
    "subtitle": "Must have, Can't have, Might have",
    "icon": "🕵️",
    "order": 17,
    "content": {
      "overview": "Động từ khuyết thiếu (Can, Could, Must, Should, May, Might) bổ sung ý nghĩa về khả năng, sự cho phép, nghĩa vụ bắt buộc, lời khuyên hoặc sự suy đoán logic. Theo sau luôn là động từ nguyên mẫu không 'to'.",
      "rules": [
        {
          "title": "Present Deduction",
          "explanation": "Động từ khuyết thiếu (Can, Could, Must, Should, May, Might) bổ sung ý nghĩa về khả năng, sự cho phép, nghĩa vụ bắt buộc, lời khuyên hoặc sự suy đoán logic. Theo sau luôn là động từ nguyên mẫu không 'to'.",
          "table": {
            "headers": [
              "Certainty Level",
              "Modal Structure",
              "Example"
            ],
            "rows": [
              [
                "95% Sure Yes",
                "must + base form",
                "He has 5 sports cars. He must be rich."
              ],
              [
                "95% Sure No",
                "can't + base form",
                "She just ate. She can't be hungry."
              ],
              [
                "50% Possible",
                "might / may / could + base form",
                "He isn't answering. He might be sleeping."
              ]
            ]
          }
        },
        {
          "title": "Past Deduction (Modals + Have + V3)",
          "explanation": "Động từ khuyết thiếu (Can, Could, Must, Should, May, Might) bổ sung ý nghĩa về khả năng, sự cho phép, nghĩa vụ bắt buộc, lời khuyên hoặc sự suy đoán logic. Theo sau luôn là động từ nguyên mẫu không 'to'.",
          "examples": [
            {
              "sentence": "The ground is wet. It <em>must have rained</em> last night.",
              "note": "Certain past deduction"
            },
            {
              "sentence": "She <em>can't have stolen</em> the money; she wasn't there.",
              "note": "Impossible past event"
            },
            {
              "sentence": "You <em>should have studied</em> for the exam.",
              "note": "Past regret / criticism"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He hasn't eaten all day. He mustn't be hungry.",
          "correct": "He hasn't eaten all day. He must be hungry / He can't be full.",
          "tip": "For strong negative deduction, use \"can't\", not \"mustn't\"."
        },
        {
          "wrong": "She musted have gone home.",
          "correct": "She must have gone home.",
          "tip": "Modals do not change form in the past. Use modal + have + V3."
        }
      ]
    }
  },
  {
    "id": "wish-if-only",
    "level": "intermediate",
    "title": "Wish & If Only",
    "subtitle": "Expressing regrets & desires",
    "icon": "⭐",
    "order": 18,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: \"Wish\" and \"If only\" express desires for things to be different from reality in the present, past, or future.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Tense Backshift Rules for Wish",
          "explanation": "Quy tắc & Cấu trúc chính: The tense shifts back one step to show hypothetical/unreal state.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Time Frame",
              "Structure",
              "Example"
            ],
            "rows": [
              [
                "Present Regret",
                "Wish + Past Simple",
                "I wish I had more money. (I don't have money)"
              ],
              [
                "Past Regret",
                "Wish + Past Perfect (had V3)",
                "If only I had studied harder. (I didn't study)"
              ],
              [
                "Future Desire / Annoyance",
                "Wish + would + base form",
                "I wish it would stop raining!"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I wish I am rich.",
          "correct": "I wish I were / was rich.",
          "tip": "Use past simple after \"wish\" for present regrets."
        },
        {
          "wrong": "I wish you will stop shouting.",
          "correct": "I wish you would stop shouting.",
          "tip": "Use \"would\" for desires/annoyances about other people's behavior."
        }
      ]
    }
  },
  {
    "id": "conditionals-3-mixed",
    "level": "advanced",
    "title": "Conditionals (Type 3 & Mixed)",
    "subtitle": "Unreal past & mixed conditions",
    "icon": "🧠",
    "order": 1,
    "content": {
      "overview": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
      "rules": [
        {
          "title": "Third Conditional — Unreal Past",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "examples": [
            {
              "sentence": "If I <em>had studied</em>, I <em>would have passed</em> the exam.",
              "note": "But I didn't study, so I didn't pass."
            },
            {
              "sentence": "If she <em>had known</em>, she <em>wouldn't have gone</em>.",
              "note": "But she didn't know, so she went."
            }
          ]
        },
        {
          "title": "Mixed Conditionals",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "examples": [
            {
              "sentence": "If I <em>had studied</em> medicine (past), I <em>would be</em> a doctor now (present).",
              "note": "Past condition → present result"
            },
            {
              "sentence": "If I <em>spoke</em> Chinese (present), I <em>would have gotten</em> that job (past).",
              "note": "Present condition → past result"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "If I would have known, I would have come.",
          "correct": "If I had known, I would have come.",
          "tip": "Don't use \"would have\" in the if-clause."
        }
      ]
    }
  },
  {
    "id": "inversion",
    "level": "advanced",
    "title": "Inversion",
    "subtitle": "Inverted word order for emphasis",
    "icon": "🔃",
    "order": 2,
    "content": {
      "overview": "Đảo ngữ (Inversion): Đưa trợ động từ lên trước chủ ngữ sau các trạng từ phủ định (Hardly, Never, Seldom, Not only...) để tạo điểm nhấn trang trọng trong văn viết academic.",
      "rules": [
        {
          "title": "Inversion after Negative Adverbs",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "<em>Never have I seen</em> such beauty.",
              "note": "never"
            },
            {
              "sentence": "<em>Rarely does she</em> complain.",
              "note": "rarely"
            },
            {
              "sentence": "<em>Not only did he</em> win, but he also set a record.",
              "note": "not only...but also"
            },
            {
              "sentence": "<em>Hardly had I</em> arrived when it started raining.",
              "note": "hardly...when"
            },
            {
              "sentence": "<em>No sooner had she</em> left than the phone rang.",
              "note": "no sooner...than"
            }
          ]
        },
        {
          "title": "Other Inversion Patterns",
          "explanation": "Đảo ngữ (Inversion): Đưa trợ động từ lên trước chủ ngữ sau các trạng từ phủ định (Hardly, Never, Seldom, Not only...) để tạo điểm nhấn trang trọng trong văn viết academic.",
          "examples": [
            {
              "sentence": "<em>Had I known</em>, I would have come. (= If I had known)",
              "note": "Conditional inversion"
            },
            {
              "sentence": "<em>Were she</em> here, she would help. (= If she were here)",
              "note": "Second conditional inversion"
            },
            {
              "sentence": "<em>So beautiful was</em> the sunset that everyone stopped.",
              "note": "So + adjective"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Never I have seen such a thing.",
          "correct": "Never have I seen such a thing.",
          "tip": "After negative adverbs, invert the auxiliary and subject."
        }
      ]
    }
  },
  {
    "id": "cleft-sentences",
    "level": "advanced",
    "title": "Cleft Sentences",
    "subtitle": "It is / What... is/was",
    "icon": "✂️",
    "order": 3,
    "content": {
      "overview": "Câu chẻ (Cleft Sentences): Sử dụng cấu trúc 'It is/was... that...' hoặc 'What... is/was...' để dồn sự chú ý của người đọc vào thành phần thông tin trọng tâm.",
      "rules": [
        {
          "title": "It-Cleft",
          "explanation": "Câu chẻ (Cleft Sentences): Sử dụng cấu trúc 'It is/was... that...' hoặc 'What... is/was...' để dồn sự chú ý của người đọc vào thành phần thông tin trọng tâm.",
          "examples": [
            {
              "sentence": "<em>It was John who</em> broke the window.",
              "note": "Emphasizes \"John\""
            },
            {
              "sentence": "<em>It is the grammar that</em> I find difficult.",
              "note": "Emphasizes \"the grammar\""
            }
          ]
        },
        {
          "title": "What-Cleft (Pseudo-Cleft)",
          "explanation": "Câu chẻ (Cleft Sentences): Sử dụng cấu trúc 'It is/was... that...' hoặc 'What... is/was...' để dồn sự chú ý của người đọc vào thành phần thông tin trọng tâm.",
          "examples": [
            {
              "sentence": "<em>What I need is</em> a good rest.",
              "note": "Emphasizes \"a good rest\""
            },
            {
              "sentence": "<em>What she did was</em> (to) resign.",
              "note": "Emphasizes the action"
            }
          ]
        },
        {
          "title": "All-Cleft",
          "explanation": "Câu chẻ (Cleft Sentences): Sử dụng cấu trúc 'It is/was... that...' hoặc 'What... is/was...' để dồn sự chú ý của người đọc vào thành phần thông tin trọng tâm.",
          "examples": [
            {
              "sentence": "<em>All I want is</em> peace and quiet.",
              "note": "Emphasizes simplicity of the need"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "It was John who he broke the window.",
          "correct": "It was John who broke the window.",
          "tip": "Don't add an extra pronoun in the relative clause."
        }
      ]
    }
  },
  {
    "id": "subjunctive",
    "level": "advanced",
    "title": "Subjunctive Mood",
    "subtitle": "Formal recommendations & wishes",
    "icon": "📜",
    "order": 4,
    "content": {
      "overview": "Thức giả định (Subjunctive Mood): Động từ ở dạng nguyên mẫu không chia (V-bare) sau các động từ/tính từ thể hiện sự khẩn cấp hoặc kiến nghị (suggest/require that he be/do...).",
      "rules": [
        {
          "title": "Present Subjunctive",
          "explanation": "Thức giả định (Subjunctive Mood): Động từ ở dạng nguyên mẫu không chia (V-bare) sau các động từ/tính từ thể hiện sự khẩn cấp hoặc kiến nghị (suggest/require that he be/do...).",
          "examples": [
            {
              "sentence": "I suggest that he <em>be</em> more careful.",
              "note": "Not \"is\" — use base form"
            },
            {
              "sentence": "It is essential that she <em>attend</em> the meeting.",
              "note": "Not \"attends\""
            },
            {
              "sentence": "The doctor recommended that he <em>take</em> rest.",
              "note": "Not \"takes\""
            }
          ]
        },
        {
          "title": "Formulaic Subjunctive",
          "explanation": "Thức giả định (Subjunctive Mood): Động từ ở dạng nguyên mẫu không chia (V-bare) sau các động từ/tính từ thể hiện sự khẩn cấp hoặc kiến nghị (suggest/require that he be/do...).",
          "examples": [
            {
              "sentence": "God <em>save</em> the Queen!",
              "note": "Fixed phrase"
            },
            {
              "sentence": "<em>Be</em> that as it may...",
              "note": "Concession"
            },
            {
              "sentence": "If need <em>be</em>...",
              "note": "If necessary"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I suggest that he goes home.",
          "correct": "I suggest that he go home.",
          "tip": "Use the base form (go) after \"suggest that\"."
        }
      ]
    }
  },
  {
    "id": "advanced-passive",
    "level": "advanced",
    "title": "Advanced Passive Structures",
    "subtitle": "Impersonal & causative",
    "icon": "🏗️",
    "order": 5,
    "content": {
      "overview": "Công thức bị động: S + be + V3/ed (+ by tác nhân). Dùng khi đối tượng chịu tác động hoặc bản thân hành động quan trọng hơn người thực hiện.",
      "rules": [
        {
          "title": "Impersonal Passive",
          "explanation": "Công thức bị động: S + be + V3/ed (+ by tác nhân). Dùng khi đối tượng chịu tác động hoặc bản thân hành động quan trọng hơn người thực hiện.",
          "examples": [
            {
              "sentence": "<em>It is believed that</em> the earth is 4.5 billion years old.",
              "note": "People believe..."
            },
            {
              "sentence": "<em>It is reported that</em> the company will close.",
              "note": "People report..."
            },
            {
              "sentence": "The earth <em>is believed to be</em> 4.5 billion years old.",
              "note": "Alternative personal form"
            }
          ]
        },
        {
          "title": "Causative: Have/Get Something Done",
          "explanation": "Công thức bị động: S + be + V3/ed (+ by tác nhân). Dùng khi đối tượng chịu tác động hoặc bản thân hành động quan trọng hơn người thực hiện.",
          "examples": [
            {
              "sentence": "I <em>had my car repaired</em> yesterday.",
              "note": "A mechanic repaired it for me"
            },
            {
              "sentence": "She <em>got her hair cut</em> last week.",
              "note": "A hairdresser cut it for her"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I had repaired my car. (when you mean someone else did it)",
          "correct": "I had my car repaired.",
          "tip": "Causative: have + object + past participle."
        }
      ]
    }
  },
  {
    "id": "participle-clauses",
    "level": "advanced",
    "title": "Participle Clauses",
    "subtitle": "V-ing / V3 as clause starters",
    "icon": "📎",
    "order": 6,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Participle clauses use present participles (-ing) or past participles (-ed/V3) to combine sentences and create a more sophisticated style.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Present Participle Clauses",
          "explanation": "Quy tắc & Cấu trúc chính: Using V-ing to replace subject + verb.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "<em>Walking</em> home, I saw an accident.",
              "note": "= While I was walking home..."
            },
            {
              "sentence": "<em>Being</em> tired, she went to bed early.",
              "note": "= Because she was tired..."
            },
            {
              "sentence": "<em>Not knowing</em> what to do, he called his mother.",
              "note": "= Because he didn't know..."
            }
          ]
        },
        {
          "title": "Past Participle Clauses",
          "explanation": "Quy tắc & Cấu trúc chính: Using V3 for passive meaning.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "<em>Built</em> in 1900, the house is still standing.",
              "note": "= The house, which was built in 1900..."
            },
            {
              "sentence": "<em>Exhausted</em> by the journey, they fell asleep.",
              "note": "= Because they were exhausted..."
            }
          ]
        },
        {
          "title": "Perfect Participle",
          "explanation": "Quy tắc & Cấu trúc chính: Having + V3 for completed earlier action.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "<em>Having finished</em> the work, she went home.",
              "note": "= After she had finished..."
            },
            {
              "sentence": "<em>Having been warned</em>, he was careful.",
              "note": "= After he had been warned..."
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Walking home, the rain started. (dangling participle)",
          "correct": "Walking home, I got caught in the rain.",
          "tip": "The participle must refer to the subject of the main clause."
        }
      ]
    }
  },
  {
    "id": "ellipsis-substitution",
    "level": "advanced",
    "title": "Ellipsis & Substitution",
    "subtitle": "Avoiding repetition",
    "icon": "✂️",
    "order": 7,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Ellipsis is the omission of words that are understood from context. Substitution replaces words with shorter forms.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Ellipsis",
          "explanation": "Quy tắc & Cấu trúc chính: Omitting repeated words.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "She can play guitar and (she can play) piano ∅.",
              "note": "After \"and\""
            },
            {
              "sentence": "A: \"Are you coming?\" B: \"I hope so ∅.\"",
              "note": "Omitting \"that I am coming\""
            },
            {
              "sentence": "I'll help you if I can ∅.",
              "note": "Omitting \"help you\""
            }
          ]
        },
        {
          "title": "Substitution",
          "explanation": "Quy tắc & Cấu trúc chính: Replacing with \"so\", \"do so\", \"one/ones\", \"not\".. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "\"Is it going to rain?\" \"I think <em>so</em>.\"",
              "note": "\"so\" replaces \"it is going to rain\""
            },
            {
              "sentence": "\"I'd like a coffee.\" \"I'd like <em>one</em> too.\"",
              "note": "\"one\" replaces \"a coffee\""
            },
            {
              "sentence": "He asked me to leave, so I <em>did so</em>.",
              "note": "\"did so\" replaces \"left\""
            }
          ]
        }
      ],
      "commonMistakes": []
    }
  },
  {
    "id": "emphasis-fronting",
    "level": "advanced",
    "title": "Emphasis & Fronting",
    "subtitle": "Highlighting key information",
    "icon": "🎯",
    "order": 8,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Fronting moves elements to the front of a sentence for emphasis. Various structures exist to highlight different parts of a message.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Fronting for Emphasis",
          "explanation": "Quy tắc & Cấu trúc chính: Move an element to the front to give it prominence.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "<em>This book</em> I really enjoyed. (normal: I really enjoyed this book)",
              "note": "Object fronting"
            },
            {
              "sentence": "<em>Slowly and carefully</em>, she opened the door.",
              "note": "Adverb fronting"
            },
            {
              "sentence": "<em>Into the room</em> walked a tall stranger.",
              "note": "Prepositional phrase fronting (with inversion)"
            }
          ]
        },
        {
          "title": "Emphatic \"Do\"",
          "explanation": "Quy tắc & Cấu trúc chính: Add \"do/does/did\" before the main verb for emphasis.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "I <em>do</em> understand your concern.",
              "note": "Emphasizes understanding"
            },
            {
              "sentence": "She <em>did</em> call you yesterday!",
              "note": "Emphasizes that the call happened"
            }
          ]
        }
      ],
      "commonMistakes": []
    }
  },
  {
    "id": "complex-noun-phrases",
    "level": "advanced",
    "title": "Complex Noun Phrases",
    "subtitle": "Pre & post-modification",
    "icon": "🏛️",
    "order": 9,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Complex noun phrases combine multiple modifiers before and after a head noun, creating information-dense academic-style writing.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Pre-modification",
          "explanation": "Quy tắc & Cấu trúc chính: Elements before the head noun.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "<em>a recently published peer-reviewed scientific</em> article",
              "note": "Adverb + adjectives + noun modifier"
            },
            {
              "sentence": "<em>the three large old stone</em> bridges",
              "note": "Determiner + number + size + age + material"
            }
          ]
        },
        {
          "title": "Post-modification",
          "explanation": "Quy tắc & Cấu trúc chính: Elements after the head noun.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "the report <em>published by the committee last year</em>",
              "note": "Past participle phrase"
            },
            {
              "sentence": "the question <em>of whether to proceed</em>",
              "note": "Prepositional phrase"
            },
            {
              "sentence": "students <em>who have completed the course</em>",
              "note": "Relative clause"
            }
          ]
        },
        {
          "title": "Adjective Order",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "table": {
            "headers": [
              "Order",
              "Category",
              "Example"
            ],
            "rows": [
              [
                "1",
                "Opinion",
                "beautiful, nice, terrible"
              ],
              [
                "2",
                "Size",
                "big, small, tall"
              ],
              [
                "3",
                "Age",
                "old, young, new"
              ],
              [
                "4",
                "Shape",
                "round, square, flat"
              ],
              [
                "5",
                "Color",
                "red, blue, green"
              ],
              [
                "6",
                "Origin",
                "French, Japanese, American"
              ],
              [
                "7",
                "Material",
                "wooden, metal, silk"
              ],
              [
                "8",
                "Purpose",
                "sleeping (bag), wedding (dress)"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "a wooden big old table",
          "correct": "a big old wooden table",
          "tip": "Follow the adjective order: size → age → material."
        }
      ]
    }
  },
  {
    "id": "discourse-markers",
    "level": "advanced",
    "title": "Discourse Markers",
    "subtitle": "Organizing speech & writing",
    "icon": "🗣️",
    "order": 10,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Discourse markers are words or phrases that organize text, signal relationships between ideas, and guide the reader/listener.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Categories of Discourse Markers",
          "explanation": "Quy tắc & Cấu trúc chính: Different markers serve different purposes in organizing ideas.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Function",
              "Markers",
              "Example"
            ],
            "rows": [
              [
                "Adding",
                "furthermore, moreover, in addition, besides",
                "Moreover, the results were significant."
              ],
              [
                "Contrasting",
                "however, nevertheless, on the other hand, conversely",
                "However, not everyone agrees."
              ],
              [
                "Cause/Result",
                "therefore, consequently, thus, hence",
                "Therefore, we must act quickly."
              ],
              [
                "Exemplifying",
                "for instance, namely, in particular",
                "For instance, consider the case of..."
              ],
              [
                "Sequencing",
                "firstly, subsequently, finally, meanwhile",
                "Firstly, let us examine..."
              ],
              [
                "Summarizing",
                "in conclusion, to sum up, overall, in short",
                "In conclusion, the evidence suggests..."
              ],
              [
                "Reformulating",
                "in other words, that is to say, namely",
                "In other words, it failed."
              ],
              [
                "Conceding",
                "admittedly, granted, it is true that",
                "Admittedly, there are limitations."
              ]
            ]
          }
        },
        {
          "title": "Formal vs Informal Discourse Markers",
          "explanation": "Quy tắc & Cấu trúc chính: Choose markers appropriate for the register.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Formal",
              "Informal"
            ],
            "rows": [
              [
                "furthermore",
                "also, plus"
              ],
              [
                "however",
                "but, though"
              ],
              [
                "therefore",
                "so"
              ],
              [
                "consequently",
                "that's why"
              ],
              [
                "nevertheless",
                "still, anyway"
              ],
              [
                "in addition",
                "on top of that"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Furthermore the results were good.",
          "correct": "Furthermore, the results were good.",
          "tip": "Discourse markers at the start of a sentence are usually followed by a comma."
        }
      ]
    }
  },
  {
    "id": "inverted-conditionals",
    "level": "advanced",
    "title": "Inverted Conditionals",
    "subtitle": "Should, Were, Had inversion",
    "icon": "⚡",
    "order": 11,
    "content": {
      "overview": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
      "rules": [
        {
          "title": "Three Types of Conditional Inversion",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "table": {
            "headers": [
              "Type",
              "Standard If-Clause",
              "Inverted Form"
            ],
            "rows": [
              [
                "Type 1 (Formal future)",
                "If you should need help...",
                "Should you need help, please call us."
              ],
              [
                "Type 2 (Unreal present)",
                "If I were in your position...",
                "Were I in your position, I would accept."
              ],
              [
                "Type 3 (Unreal past)",
                "If we had known about the delay...",
                "Had we known about the delay, we would have left earlier."
              ]
            ]
          }
        },
        {
          "title": "Negative Inversion in Conditionals",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "examples": [
            {
              "sentence": "<em>Had it not been</em> for your support, we would have failed.",
              "note": "NOT: Hadn't it been..."
            },
            {
              "sentence": "<em>Should you not receive</em> the email, check your spam folder.",
              "note": "NOT: Shouldn't you receive..."
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Hadn't we arrived early, we would have missed the train.",
          "correct": "Had we not arrived early, we would have missed the train.",
          "tip": "Do not contract \"not\" with the auxiliary verb in conditional inversion."
        }
      ]
    }
  },
  {
    "id": "academic-collocations",
    "level": "advanced",
    "title": "Academic Collocations & Collocational Competence",
    "subtitle": "High-frequency verb-noun & adj-noun pairs",
    "icon": "🏛️",
    "order": 12,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Collocations are natural combinations of words that native speakers use frequently. In formal, academic, and business contexts, using exact collocations is crucial for precision.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Key Academic Verb + Noun Collocations",
          "explanation": "Quy tắc & Cấu trúc chính: Certain verbs natural match specific academic and business concepts.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Verb",
              "Natural Noun Collocations",
              "Example"
            ],
            "rows": [
              [
                "conduct / undertake",
                "research, a study, an investigation, an audit",
                "The team conducted a comprehensive audit."
              ],
              [
                "draw / reach",
                "a conclusion, an agreement, a consensus",
                "Researchers reached a consensus after months of debate."
              ],
              [
                "raise / pose",
                "a question, an objection, a concern, a threat",
                "The new policy poses significant environmental concerns."
              ],
              [
                "fulfill / meet",
                "requirements, criteria, expectations, deadlines",
                "All candidates must meet the strict entry criteria."
              ]
            ]
          }
        },
        {
          "title": "Adjective + Noun Collocations",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "<em>compelling evidence</em> (NOT: strong proof)",
              "note": "High academic impact"
            },
            {
              "sentence": "<em>profound impact</em> (NOT: deep result)",
              "note": "Natural emphasis"
            },
            {
              "sentence": "<em>paramount importance</em> (NOT: big priority)",
              "note": "Formal priority"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "We did a deep research.",
          "correct": "We conducted thorough research.",
          "tip": "Use \"conduct/carry out research\" instead of \"do research\" in formal contexts."
        }
      ]
    }
  },
  {
    "id": "punctuation-syntax",
    "level": "advanced",
    "title": "Punctuation & Sentence Structure",
    "subtitle": "Semicolons, Colons, Comma Splices",
    "icon": "🖋️",
    "order": 13,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Mastering punctuation ensures clarity in complex sentence structures and prevents structural errors such as run-on sentences and comma splices.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Semicolon (;) vs Colon (:)",
          "explanation": "Quy tắc & Cấu trúc chính: Use semicolons to join closely related independent clauses. Use colons to introduce lists, explanations, or quotes.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Punctuation",
              "Primary Function",
              "Example"
            ],
            "rows": [
              [
                "Semicolon (;)",
                "Joins independent clauses without conjunctions",
                "The report was incomplete; key financial metrics were omitted."
              ],
              [
                "Colon (:)",
                "Introduces an explanation, series, or quotation",
                "The committee agreed on one outcome: total restructuring."
              ]
            ]
          }
        },
        {
          "title": "Avoiding Comma Splices",
          "explanation": "Quy tắc & Cấu trúc chính: A comma splice occurs when two independent clauses are joined with only a comma.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "❌ It was raining heavily, we decided to stay indoors.",
              "note": "Comma splice error"
            },
            {
              "sentence": "✅ It was raining heavily, <em>so</em> we decided to stay indoors.",
              "note": "Correct — added coordinating conjunction"
            },
            {
              "sentence": "✅ It was raining heavily; we decided to stay indoors.",
              "note": "Correct — replaced comma with semicolon"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The results were clear, the project succeeded.",
          "correct": "The results were clear; the project succeeded.",
          "tip": "Do not join two independent sentences with only a comma (comma splice)."
        }
      ]
    }
  },
  {
    "id": "toeic-collocations",
    "level": "lexicon",
    "toeicBand": "Target 0–500",
    "title": "Business Collocations",
    "subtitle": "High-frequency verb-noun pairings",
    "icon": "🤝",
    "order": 1,
    "content": {
      "overview": "Collocations (sự kết hợp từ) là những cụm từ thường xuyên đi liền với nhau một cách tự nhiên. Trong TOEIC Part 5, việc nắm vững collocation giúp bạn chọn đáp án cực nhanh mà không cần dịch hết câu.",
      "rules": [
        {
          "title": "Verb + Noun Collocations (Động từ + Danh từ)",
          "explanation": "Các động từ phổ biến trong môi trường văn phòng thường đi kèm với những danh từ cố định.",
          "table": {
            "headers": [
              "Collocation",
              "Meaning (Nghĩa)",
              "Example (Ví dụ TOEIC)"
            ],
            "rows": [
              [
                "Make a decision",
                "Đưa ra quyết định",
                "The board will make a decision by Friday."
              ],
              [
                "Meet a deadline",
                "Kịp thời hạn",
                "We must work overtime to meet the deadline."
              ],
              [
                "Implement a policy",
                "Thực thi chính sách",
                "The HR department will implement a new policy."
              ],
              [
                "Reach an agreement",
                "Đạt được thỏa thuận",
                "Both parties finally reached an agreement."
              ]
            ]
          }
        },
        {
          "title": "Adverb + Adjective Collocations (Trạng từ + Tính từ)",
          "explanation": "Các tính từ thường được bổ nghĩa bởi những trạng từ mang tính nhấn mạnh hoặc mức độ.",
          "table": {
            "headers": [
              "Collocation",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Highly recommended",
                "Được đánh giá cao / Khuyên dùng",
                "This training course is highly recommended."
              ],
              [
                "Strictly prohibited",
                "Bị nghiêm cấm",
                "Smoking is strictly prohibited in the building."
              ],
              [
                "Widely recognized",
                "Được công nhận rộng rãi",
                "He is a widely recognized expert in finance."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The team couldn't <s>do a decision</s>.",
          "correct": "The team couldn't make a decision.",
          "tip": "Luôn dùng \"make a decision\", không dùng \"do\"."
        },
        {
          "wrong": "The rules are <s>strongly prohibited</s>.",
          "correct": "The rules are strictly prohibited.",
          "tip": "Dùng \"strictly prohibited\" (cấm tiệt), không dùng \"strongly\"."
        }
      ]
    }
  },
  {
    "id": "toeic-word-families",
    "level": "lexicon",
    "toeicBand": "Target 300–700",
    "title": "Word Families & Suffixes",
    "subtitle": "Vocabulary building through suffixes",
    "icon": "🧩",
    "order": 2,
    "content": {
      "overview": "Word Families (Từ cùng gốc) là nhóm từ được tạo ra từ một từ gốc bằng cách thêm tiền tố hoặc hậu tố. TOEIC Part 5 thường xuyên kiểm tra từ loại (Noun, Verb, Adj, Adv) dựa trên vị trí của từ trong câu.",
      "rules": [
        {
          "title": "Common Noun & Adjective Suffixes (Hậu tố Danh từ & Tính từ)",
          "explanation": "Nhận diện từ loại qua đuôi từ giúp bạn làm bài tập ngữ pháp mà không cần dịch nghĩa.",
          "table": {
            "headers": [
              "Word Type",
              "Common Suffixes",
              "Examples",
              "TOEIC Clue"
            ],
            "rows": [
              [
                "Noun (Person)",
                "-er, -or, -ant, -ee",
                "employer, supervisor, applicant, employee",
                "Thường làm Chủ ngữ hoặc Tân ngữ."
              ],
              [
                "Noun (Thing)",
                "-tion, -ment, -ness, -ity",
                "production, management, awareness, security",
                "Đứng sau Mạo từ (a/an/the) hoặc Tính từ."
              ],
              [
                "Adjective",
                "-ive, -able, -al, -ful",
                "productive, reasonable, additional, successful",
                "Đứng trước Danh từ hoặc sau to-be."
              ]
            ]
          }
        },
        {
          "title": "Word Family Examples",
          "explanation": "Một số gốc từ xuất hiện liên tục trong bài thi TOEIC.",
          "table": {
            "headers": [
              "Verb",
              "Noun",
              "Adjective",
              "Adverb"
            ],
            "rows": [
              [
                "produce",
                "production / product",
                "productive",
                "productively"
              ],
              [
                "compete",
                "competition / competitor",
                "competitive",
                "competitively"
              ],
              [
                "indicate",
                "indication / indicator",
                "indicative",
                "indicatively"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The <s>production</s> manager works very <s>productive</s>.",
          "correct": "The production manager works very productively.",
          "tip": "Sau động từ thường \"works\" cần một Trạng từ (Adv) bổ nghĩa."
        }
      ]
    }
  },
  {
    "id": "toeic-phrasal-verbs",
    "level": "lexicon",
    "toeicBand": "Target 500–700",
    "title": "Business Phrasal Verbs",
    "subtitle": "Essential multi-word verbs",
    "icon": "🔗",
    "order": 3,
    "content": {
      "overview": "Cụm động từ (Phrasal Verbs) là sự kết hợp giữa một Động từ (Verb) và một Tiểu từ (Particle/Preposition). Nghĩa của chúng thường khác hoàn toàn với nghĩa đen của động từ gốc.",
      "rules": [
        {
          "title": "High-Frequency TOEIC Phrasal Verbs",
          "explanation": "Những cụm động từ này xuất hiện dày đặc trong email, thông báo và các cuộc hội thoại công sở.",
          "table": {
            "headers": [
              "Phrasal Verb",
              "Meaning",
              "TOEIC Context"
            ],
            "rows": [
              [
                "Look forward to (+ V-ing)",
                "Mong đợi",
                "I look forward to hearing from you soon."
              ],
              [
                "Fill out",
                "Điền vào (mẫu đơn)",
                "Please fill out this application form."
              ],
              [
                "Take over",
                "Tiếp quản",
                "Mr. Smith will take over as the new manager."
              ],
              [
                "Bring up",
                "Đề cập tới (một vấn đề)",
                "She brought up the budget issue during the meeting."
              ],
              [
                "Turn down",
                "Từ chối",
                "The company turned down our proposal."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I look forward to <s>see</s> you.",
          "correct": "I look forward to seeing you.",
          "tip": "\"To\" trong \"look forward to\" là giới từ, do đó động từ theo sau phải ở dạng V-ing."
        }
      ]
    }
  },
  {
    "id": "toeic-verb-patterns",
    "level": "lexicon",
    "toeicBand": "Target 500–700",
    "title": "Verb + Preposition Patterns",
    "subtitle": "Verbs that require specific prepositions",
    "icon": "🎯",
    "order": 4,
    "content": {
      "overview": "Một số động từ trong tiếng Anh đòi hỏi phải đi kèm với những giới từ cố định nhất định. Trong TOEIC Part 5, đây là dạng bài lấy điểm nhanh nếu bạn thuộc cấu trúc.",
      "rules": [
        {
          "title": "Verb + Object + Preposition",
          "explanation": "Cấu trúc: Động từ + Tân ngữ + Giới từ + Danh từ / V-ing.",
          "table": {
            "headers": [
              "Pattern",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Provide sb WITH sth",
                "Cung cấp cho ai cái gì",
                "We provide our staff with free lunch."
              ],
              [
                "Provide sth FOR sb",
                "Cung cấp cái gì cho ai",
                "We provide free lunch for our staff."
              ],
              [
                "Inform sb OF/ABOUT sth",
                "Thông báo cho ai về việc gì",
                "Please inform us of any changes."
              ],
              [
                "Prevent sb FROM doing sth",
                "Ngăn cản ai làm gì",
                "The bad weather prevented them from leaving."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He informed me <s>with</s> the meeting.",
          "correct": "He informed me of/about the meeting.",
          "tip": "Động từ \"inform\" luôn đi kèm \"of\" hoặc \"about\"."
        }
      ]
    }
  },
  {
    "id": "toeic-linking-words",
    "level": "lexicon",
    "toeicBand": "Target 700–990",
    "title": "Linking Words & Transitions",
    "subtitle": "Connecting ideas in Part 6 & 7",
    "icon": "🔗",
    "order": 5,
    "content": {
      "overview": "Từ nối (Linking Words) là chìa khóa để làm tốt TOEIC Part 6 (điền câu/từ vào đoạn văn) và hiểu logic bài đọc Part 7. Chúng thể hiện mối quan hệ giữa các mệnh đề: nguyên nhân - kết quả, tương phản, bổ sung.",
      "rules": [
        {
          "title": "Contrast (Tương phản) & Addition (Bổ sung)",
          "explanation": "Các trạng từ nối này thường đứng đầu câu, theo sau là dấu phẩy (,), hoặc đứng sau dấu chấm phẩy (;).",
          "table": {
            "headers": [
              "Category",
              "Linking Words",
              "Example"
            ],
            "rows": [
              [
                "Contrast (Tuy nhiên)",
                "However, Nevertheless, Nonetheless",
                "Sales dropped; however, profits remained stable."
              ],
              [
                "Addition (Hơn nữa)",
                "Furthermore, Moreover, In addition",
                "The software is fast. Moreover, it is cheap."
              ]
            ]
          }
        },
        {
          "title": "Cause and Effect (Nguyên nhân - Kết quả)",
          "explanation": "Chỉ ra hệ quả của một hành động trước đó.",
          "table": {
            "headers": [
              "Category",
              "Linking Words",
              "Example"
            ],
            "rows": [
              [
                "Effect (Do đó)",
                "Therefore, Consequently, As a result",
                "It rained heavily. Therefore, the event was canceled."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "It was raining, <s>however</s> we went out.",
          "correct": "It was raining; however, we went out.",
          "tip": "\"However\" không thể nối 2 mệnh đề bằng dấu phẩy. Phải dùng dấu chấm phẩy (;) hoặc dấu chấm (.)."
        }
      ]
    }
  },
  {
    "id": "toeic-synonyms-antonyms",
    "level": "lexicon",
    "toeicBand": "Target 500–990",
    "title": "Synonyms & Paraphrasing",
    "subtitle": "Mastering Part 7 paraphrasing",
    "icon": "🔄",
    "order": 6,
    "content": {
      "overview": "Kỹ năng Paraphrasing (sử dụng từ đồng nghĩa để diễn đạt lại một ý) là kỹ năng cốt lõi của TOEIC Part 7. Câu hỏi trong đề bài hiếm khi dùng lại đúng từ vựng trong bài đọc.",
      "rules": [
        {
          "title": "Common TOEIC Paraphrasing Sets",
          "explanation": "Dưới đây là các nhóm từ đồng nghĩa thường bị \"đánh tráo\" giữa bài đọc (Passage) và câu hỏi (Question).",
          "table": {
            "headers": [
              "Word in Passage",
              "Word in Question / Options",
              "Meaning"
            ],
            "rows": [
              [
                "purchase",
                "buy",
                "mua"
              ],
              [
                "affordable / inexpensive",
                "cheap / reasonable price",
                "giá cả phải chăng / rẻ"
              ],
              [
                "modify / adjust",
                "change / alter",
                "thay đổi, điều chỉnh"
              ],
              [
                "complimentary",
                "free of charge / no cost",
                "miễn phí"
              ],
              [
                "notify / announce",
                "inform",
                "thông báo"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Looking for the exact word from the question in the text.",
          "correct": "Looking for synonyms or paraphrased concepts.",
          "tip": "Part 7 là bài kiểm tra khả năng nhận diện từ đồng nghĩa. Đừng chỉ scan \"word by word\"."
        }
      ]
    }
  },
  {
    "id": "toeic-fixed-expressions",
    "level": "lexicon",
    "toeicBand": "Target 700–990",
    "title": "Fixed Expressions",
    "subtitle": "Professional prepositional phrases",
    "icon": "📌",
    "order": 7,
    "content": {
      "overview": "Thành ngữ cố định (Fixed Expressions) thường là các cụm giới từ đóng vai trò như liên từ hoặc trạng từ trong câu. TOEIC thường đục lỗ giới từ đầu hoặc cuối của cụm này.",
      "rules": [
        {
          "title": "Essential Business Phrases",
          "explanation": "Học thuộc cả cụm để điền đáp án trong 3 giây.",
          "table": {
            "headers": [
              "Expression",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "In advance",
                "Trước (thời gian)",
                "Please pay the deposit in advance."
              ],
              [
                "On behalf of",
                "Thay mặt cho",
                "I am writing on behalf of the management team."
              ],
              [
                "In compliance with",
                "Tuân thủ theo",
                "We designed it in compliance with safety standards."
              ],
              [
                "With regard to",
                "Liên quan đến",
                "With regard to your invoice, we have processed it."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I am calling <s>in behalf of</s> Mr. Chen.",
          "correct": "I am calling on behalf of Mr. Chen.",
          "tip": "Cụm từ cố định là \"ON behalf of\", không được đổi giới từ."
        }
      ]
    }
  },
  {
    "id": "toeic-idioms",
    "level": "lexicon",
    "toeicBand": "Target 700–990",
    "title": "Idioms in the Workplace",
    "subtitle": "Sounding like a native professional",
    "icon": "🎭",
    "order": 8,
    "content": {
      "overview": "Thành ngữ (Idioms) ít xuất hiện trong Part 5 nhưng thỉnh thoảng xuất hiện trong Part 3 & 4 (Hội thoại) hoặc Part 7. Hiểu idiom giúp bạn nắm bắt ý định thực sự của người nói.",
      "rules": [
        {
          "title": "Corporate Idioms",
          "explanation": "Các thành ngữ hay dùng trong giao tiếp công sở hàng ngày.",
          "table": {
            "headers": [
              "Idiom",
              "Meaning",
              "Context / Example"
            ],
            "rows": [
              [
                "Get the ball rolling",
                "Bắt đầu tiến hành việc gì",
                "Let's get the ball rolling on this project."
              ],
              [
                "Touch base",
                "Liên lạc / cập nhật tình hình",
                "I will touch base with you next week."
              ],
              [
                "On the same page",
                "Có cùng suy nghĩ / hiểu chung vấn đề",
                "We need to ensure everyone is on the same page."
              ],
              [
                "Learn the ropes",
                "Học cách làm việc (cho người mới)",
                "It will take a few weeks to learn the ropes."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Let's get the <s>sphere</s> rolling.",
          "correct": "Let's get the ball rolling.",
          "tip": "Thành ngữ mang tính cố định, không thể thay thế từ vựng bên trong bằng từ đồng nghĩa."
        }
      ]
    }
  },
  {
    "id": "toeic-proverbs",
    "level": "lexicon",
    "toeicBand": "Target 700–990",
    "title": "Business Proverbs & Sayings",
    "subtitle": "Wisdom of the English-speaking world",
    "icon": "📜",
    "order": 9,
    "content": {
      "overview": "Mặc dù TOEIC là bài thi kinh doanh, đôi khi các bài báo (articles) trong Part 7 có thể trích dẫn tục ngữ hoặc châm ngôn để tạo sự hấp dẫn cho bài viết.",
      "rules": [
        {
          "title": "Professional Proverbs",
          "explanation": "Những câu nói mang triết lý làm việc.",
          "table": {
            "headers": [
              "Proverb / Saying",
              "Meaning",
              "Equivalent"
            ],
            "rows": [
              [
                "Time is money",
                "Thời gian là tiền bạc",
                "Đừng lãng phí thời gian, hãy làm việc hiệu quả."
              ],
              [
                "Don't put all your eggs in one basket",
                "Đừng dồn tất cả rủi ro vào một chỗ",
                "Nên đa dạng hóa đầu tư / phương án."
              ],
              [
                "Actions speak louder than words",
                "Hành động quan trọng hơn lời nói",
                "Kết quả công việc chứng minh năng lực thực sự."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Action speaks louder than word.",
          "correct": "Actions speak louder than words.",
          "tip": "Luôn dùng số nhiều \"Actions\" và \"words\"."
        }
      ]
    }
  },
  {
    "id": "irregular-verbs",
    "level": "toeic",
    "toeicBand": "Target 0–300",
    "title": "Irregular Verbs Reference",
    "subtitle": "100+ Common Irregular Verbs (V1 - V2 - V3)",
    "icon": "📊",
    "order": 1,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Irregular verbs do not follow the standard -ed past tense rule. In TOEIC, recognizing V2 and V3 (Past Participle) forms instantly is essential for Part 5, 6, and 7.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Pattern 1: All Three Forms Identical (V1 = V2 = V3)",
          "explanation": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
          "table": {
            "headers": [
              "Base Form (V1)",
              "Past Simple (V2)",
              "Past Participle (V3)",
              "Vietnamese Meaning"
            ],
            "rows": [
              [
                "cut",
                "cut",
                "cut",
                "Cắt"
              ],
              [
                "put",
                "put",
                "put",
                "Đặt, để"
              ],
              [
                "set",
                "set",
                "set",
                "Thiết lập, đặt"
              ],
              [
                "cost",
                "cost",
                "cost",
                "Trị giá, tốn chi phí"
              ],
              [
                "hit",
                "hit",
                "hit",
                "Đánh, va chạm"
              ],
              [
                "let",
                "let",
                "let",
                "Cho phép"
              ],
              [
                "shut",
                "shut",
                "shut",
                "Đóng lại"
              ],
              [
                "read /riːd/",
                "read /red/",
                "read /red/",
                "Đọc (phát âm thay đổi)"
              ]
            ]
          }
        },
        {
          "title": "Pattern 2: V2 and V3 are Identical (V1 ≠ V2 = V3)",
          "explanation": "Quy tắc & Cấu trúc chính: The past simple and past participle forms are identical.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Base Form (V1)",
              "Past Simple (V2)",
              "Past Participle (V3)",
              "Vietnamese Meaning"
            ],
            "rows": [
              [
                "buy",
                "bought",
                "bought",
                "Mua"
              ],
              [
                "bring",
                "brought",
                "brought",
                "Mang đến"
              ],
              [
                "build",
                "built",
                "built",
                "Xây dựng"
              ],
              [
                "catch",
                "caught",
                "caught",
                "Bắt, nắm lấy"
              ],
              [
                "find",
                "found",
                "found",
                "Tìm thấy"
              ],
              [
                "have / has",
                "had",
                "had",
                "Có"
              ],
              [
                "hold",
                "held",
                "held",
                "Cầm, tổ chức (cuộc họp)"
              ],
              [
                "keep",
                "kept",
                "kept",
                "Giữ"
              ],
              [
                "lead",
                "led",
                "led",
                "Lãnh đạo, dẫn dắt"
              ],
              [
                "leave",
                "left",
                "left",
                "Rời đi, để lại"
              ],
              [
                "make",
                "made",
                "made",
                "Làm, chế tạo"
              ],
              [
                "meet",
                "met",
                "met",
                "Gặp mặt"
              ],
              [
                "pay",
                "paid",
                "paid",
                "Thanh toán"
              ],
              [
                "sell",
                "sold",
                "sold",
                "Bán"
              ],
              [
                "send",
                "sent",
                "sent",
                "Gửi"
              ],
              [
                "spend",
                "spent",
                "spent",
                "Dành (thời gian/tiền)"
              ],
              [
                "teach",
                "taught",
                "taught",
                "Giảng dạy"
              ],
              [
                "tell",
                "told",
                "told",
                "Kể, bảo"
              ],
              [
                "think",
                "thought",
                "thought",
                "Suy nghĩ"
              ],
              [
                "understand",
                "understood",
                "understood",
                "Hiểu"
              ]
            ]
          }
        },
        {
          "title": "Pattern 3: All Three Forms Different (V1 ≠ V2 ≠ V3)",
          "explanation": "Cấu trúc và cách sử dụng: Dùng để diễn tả thói quen lặp đi lặp lại hàng ngày hoặc sự thật hiển nhiên. Chia động từ theo chủ ngữ (thêm -s/-es với He/She/It và danh từ số ít).",
          "table": {
            "headers": [
              "Base Form (V1)",
              "Past Simple (V2)",
              "Past Participle (V3)",
              "Vietnamese Meaning"
            ],
            "rows": [
              [
                "be (am/is/are)",
                "was / were",
                "been",
                "Thì, là, ở"
              ],
              [
                "begin",
                "began",
                "begun",
                "Bắt đầu"
              ],
              [
                "break",
                "broke",
                "broken",
                "Làm vỡ, hỏng"
              ],
              [
                "choose",
                "chose",
                "chosen",
                "Lựa chọn"
              ],
              [
                "do / does",
                "did",
                "done",
                "Làm"
              ],
              [
                "drive",
                "drove",
                "driven",
                "Lái xe"
              ],
              [
                "eat",
                "ate",
                "eaten",
                "Ăn"
              ],
              [
                "fall",
                "fell",
                "fallen",
                "Rơi, giảm (giá trị)"
              ],
              [
                "fly",
                "flew",
                "flown",
                "Bay"
              ],
              [
                "forget",
                "forgot",
                "forgotten",
                "Quên"
              ],
              [
                "give",
                "gave",
                "given",
                "Cho, tặng"
              ],
              [
                "go",
                "went",
                "gone",
                "Đi"
              ],
              [
                "grow",
                "grew",
                "grown",
                "Phát triển, tăng trưởng"
              ],
              [
                "know",
                "knew",
                "known",
                "Biết"
              ],
              [
                "rise",
                "rose",
                "risen",
                "Tăng lên"
              ],
              [
                "see",
                "saw",
                "seen",
                "Nhìn thấy"
              ],
              [
                "speak",
                "spoke",
                "spoken",
                "Nói"
              ],
              [
                "take",
                "took",
                "taken",
                "Cầm, lấy, tốn (thời gian)"
              ],
              [
                "write",
                "wrote",
                "written",
                "Viết"
              ]
            ]
          }
        },
        {
          "title": "Pattern 4: V1 and V3 are Identical (V1 = V3 ≠ V2)",
          "explanation": "Quy tắc & Cấu trúc chính: The base form and past participle are identical.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Base Form (V1)",
              "Past Simple (V2)",
              "Past Participle (V3)",
              "Vietnamese Meaning"
            ],
            "rows": [
              [
                "become",
                "became",
                "become",
                "Trở thành"
              ],
              [
                "come",
                "came",
                "come",
                "Đến"
              ],
              [
                "run",
                "ran",
                "run",
                "Chạy, vận hành"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The company has payed the invoice.",
          "correct": "The company has paid the invoice.",
          "tip": "Pay -> paid -> paid (not payed)."
        },
        {
          "wrong": "Sales have rised significantly.",
          "correct": "Sales have risen significantly.",
          "tip": "Rise -> rose -> risen (not rised)."
        }
      ]
    }
  },
  {
    "id": "toeic-sentence-structure",
    "level": "toeic",
    "toeicBand": "Target 0–300",
    "title": "Sentence Structure & Core Elements",
    "subtitle": "Cấu trúc câu cơ bản & Thành phần câu trong Part 5",
    "icon": "🏛️",
    "order": 2,
    "content": {
      "overview": "Mọi câu trong TOEIC Part 5 đều xoay quanh các thành phần cốt lõi: Chủ ngữ (Subject), Động từ chính (Main Verb), Tân ngữ (Object), Bổ ngữ (Complement) và Trạng ngữ/Cụm giới từ (Modifiers). Nhận biết nhanh Động từ chính giúp giải quyết câu hỏi trong 5 giây.",
      "rules": [
        {
          "title": "Basic Sentence Patterns in Business English",
          "explanation": "Các dạng cấu trúc câu phổ biến trong đề thi TOEIC:",
          "table": {
            "headers": [
              "Cấu trúc",
              "Thành phần",
              "Ví dụ thực tế trong TOEIC"
            ],
            "rows": [
              [
                "S + V",
                "Subject + Intransitive Verb",
                "The train arrived on time."
              ],
              [
                "S + V + O",
                "Subject + Verb + Direct Object",
                "The board reviewed the quarterly budget."
              ],
              [
                "S + V + C",
                "Subject + Linking Verb + Complement",
                "Mr. Harrison remains optimistic about sales."
              ],
              [
                "S + V + O1 + O2",
                "Subject + Verb + Indirect Obj + Direct Obj",
                "The manager gave employees a clear guidance."
              ],
              [
                "S + V + O + C",
                "Subject + Verb + Object + Obj Complement",
                "The committee appointed Ms. Carter head director."
              ]
            ]
          }
        },
        {
          "title": "Identifying Prepositional Modifiers (Loại bỏ cụm từ gây nhiễu)",
          "explanation": "Cụm giới từ (Prepositional Phrases) đứng giữa Chủ ngữ và Động từ chính thường đóng vai trò bổ nghĩa, cần gạch bỏ khi xác định hòa hợp Chủ - Vị.",
          "examples": [
            {
              "sentence": "The report [on international marketing strategies] <em>was submitted</em> yesterday.",
              "note": "Subject = The report (số ít) -> Verb = was submitted"
            },
            {
              "sentence": "All members [of the executive committee] <em>are attending</em> the seminar.",
              "note": "Subject = All members (số nhiều) -> Verb = are attending"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The news about market expansions were unexpected.",
          "correct": "The news about market expansions was unexpected.",
          "tip": "Chủ ngữ thực sự là \"The news\" (danh từ không đếm được/số ít), không phải \"expansions\"."
        }
      ]
    }
  },
  {
    "id": "toeic-tenses-overview",
    "level": "toeic",
    "toeicBand": "Target 0–300",
    "title": "Business Tenses & Time Indicators",
    "subtitle": "12 Thì Tiếng Anh & Dấu hiệu nhận biết trong TOEIC",
    "icon": "⏱️",
    "order": 3,
    "content": {
      "overview": "Đề thi TOEIC tập trung chủ yếu vào 6 thì trọng điểm: Present Simple, Present Continuous, Past Simple, Present Perfect, Future Simple và Future Perfect. Việc nắm vững dấu hiệu thời gian (Time Signals) giúp chọn ngay đáp án đúng.",
      "rules": [
        {
          "title": "High-Frequency Tenses & Keywords in TOEIC",
          "explanation": "Bảng tổng hợp dấu hiệu nhận biết thì trong TOEIC Part 5 & 6:",
          "table": {
            "headers": [
              "Thì (Tense)",
              "Dấu hiệu nhận biết (Keywords)",
              "Ví dụ TOEIC"
            ],
            "rows": [
              [
                "Present Simple",
                "always, usually, daily, monthly, regularly, every week",
                "The store opens daily at 8:00 AM."
              ],
              [
                "Present Continuous",
                "currently, now, at present, at the moment",
                "We are currently reviewing your job application."
              ],
              [
                "Past Simple",
                "yesterday, last month, ago, in 2023, previously",
                "The contract was signed last Tuesday."
              ],
              [
                "Present Perfect",
                "already, recently, lately, since, for, so far, over the past 3 years",
                "She has recently been promoted to Senior Vice President."
              ],
              [
                "Future Simple",
                "tomorrow, next week, soon, shortly, upcoming",
                "The CEO will announce the annual profits tomorrow."
              ],
              [
                "Future Perfect",
                "by the time + S+V(pres), by + [future time point]",
                "By next December, we will have opened 50 new stores."
              ]
            ]
          }
        },
        {
          "title": "Special Note on \"Recently\" and \"Lately\"",
          "explanation": "\"Recently\" và \"Lately\" thường đi với Thì Hiện tại Hoàn thành. Tuy nhiên, \"Recently\" có thể dùng với Quá khứ Đơn trong văn phong báo chí.",
          "examples": [
            {
              "sentence": "Mr. Tanaka <em>has recently launched</em> a new startup.",
              "note": "Hiện tại hoàn thành (phổ biến nhất TOEIC)"
            },
            {
              "sentence": "The firm <em>recently published</em> its environmental policy.",
              "note": "Quá khứ đơn (hành động đã hoàn thành hẳn)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Over the last two years, our revenues increased by 20%.",
          "correct": "Over the last two years, our revenues have increased by 20%.",
          "tip": "Cụm \"over/in/during the past/last + thời gian\" BẮT BUỘC dùng Hiện tại Hoàn thành."
        }
      ]
    }
  },
  {
    "id": "parts-of-speech-toeic",
    "level": "toeic",
    "toeicBand": "Target 300–500",
    "title": "Parts of Speech (Từ Loại TOEIC)",
    "subtitle": "Nouns, Verbs, Adjectives, Adverbs in Part 5",
    "icon": "🧩",
    "order": 4,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Parts of speech questions account for over 40% of TOEIC Part 5. Mastering word suffixes and positions allows you to answer in under 10 seconds per question.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Common Suffixes for Word Types",
          "explanation": "Quy tắc & Cấu trúc chính: Identify word forms instantly by their endings.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Part of Speech",
              "Common Suffixes",
              "Examples"
            ],
            "rows": [
              [
                "Noun (Danh từ)",
                "-tion, -sion, -ment, -ance, -ence, -ty, -er, -or, -ee",
                "information, agreement, assistant, employee"
              ],
              [
                "Verb (Động từ)",
                "-ize, -ise, -ate, -en, -fy",
                "finalize, motivate, shorten, notify"
              ],
              [
                "Adjective (Tính từ)",
                "-able, -ible, -al, -ive, -ful, -less, -ous, -ic",
                "reliable, professional, effective, careful"
              ],
              [
                "Adverb (Trạng từ)",
                "-ly (usually Adj + ly)",
                "effectively, carefully, rapidly, highly"
              ]
            ]
          }
        },
        {
          "title": "Key Positional Rules in Sentences",
          "explanation": "Quy tắc & Cấu trúc chính: Use neighboring words to determine the required part of speech without translating.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "Determiner (a/an/the/this/my) + <em>Noun</em> -> The <em>performance</em> was great.",
              "note": "After determiner = Noun"
            },
            {
              "sentence": "Determiner + <em>Adjective</em> + Noun -> An <em>effective</em> strategy.",
              "note": "Before noun = Adjective"
            },
            {
              "sentence": "Subject + <em>Adverb</em> + Verb -> She <em>gently</em> explained.",
              "note": "Modifying verb = Adverb"
            },
            {
              "sentence": "Preposition + <em>Noun / V-ing</em> -> Interested in <em>applying</em>.",
              "note": "After preposition = Noun / V-ing"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The proposal was very success.",
          "correct": "The proposal was very successful.",
          "tip": "After \"was very\" (linking verb + adverb), use an Adjective (successful), not a Noun (success)."
        }
      ]
    }
  },
  {
    "id": "toeic-pronouns-possessives",
    "level": "toeic",
    "toeicBand": "Target 300–500",
    "title": "Pronouns & Possessives in Business",
    "subtitle": "Đại từ, Tính từ sở hữu & Đại từ phản xạ",
    "icon": "👤",
    "order": 5,
    "content": {
      "overview": "Các câu hỏi về Đại từ trong TOEIC Part 5 kiểm tra sự phân biệt giữa Đại từ nhân xưng (Subject/Object), Tính từ sở hữu (Possessive Adj), Đại từ sở hữu (Possessive Pronoun) và Đại từ phản xạ (Reflexive Pronoun).",
      "rules": [
        {
          "title": "Classification & Placement Matrix",
          "explanation": "Bảng phân loại và vị trí đứng của các đại từ trong câu:",
          "table": {
            "headers": [
              "Loại Đại Từ",
              "Các từ tiêu biểu",
              "Vị trí & Quy tắc xuất hiện"
            ],
            "rows": [
              [
                "Subject Pronoun",
                "I, you, he, she, it, we, they",
                "Đứng trước Động từ chính (làm Chủ ngữ)"
              ],
              [
                "Object Pronoun",
                "me, you, him, her, it, us, them",
                "Đứng sau Động từ ngoại hoặc sau Giới từ"
              ],
              [
                "Possessive Adj",
                "my, your, his, her, its, our, their",
                "BẮT BUỘC đi kèm theo Danh từ phía sau"
              ],
              [
                "Possessive Pronoun",
                "mine, yours, his, hers, ours, theirs",
                "Độc lập (= Possessive Adj + Noun), KHÔNG đi kèm Noun"
              ],
              [
                "Reflexive Pronoun",
                "myself, yourself, himself, itself, themselves",
                "Làm tân ngữ khi S = O, hoặc nhấn mạnh (by + reflexive)"
              ]
            ]
          }
        },
        {
          "title": "Idiomatic Expressions with Reflexive Pronouns",
          "explanation": "Các cấu trúc thành ngữ thường xuất hiện trong TOEIC:",
          "examples": [
            {
              "sentence": "Mr. Vance completed the financial audit <em>by himself</em>.",
              "note": "by himself = on his own = alone (Tự mình làm)"
            },
            {
              "sentence": "The machine operates <em>of itself</em>.",
              "note": "of itself = tự động (automatically)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Please return the revised contract to our as soon as possible.",
          "correct": "Please return the revised contract to us as soon as possible.",
          "tip": "Sau giới từ \"to\" phải dùng Tân ngữ (us), không dùng Tính từ sở hữu (our)."
        },
        {
          "wrong": "This is my coffee and that is her.",
          "correct": "This is my coffee and that is hers.",
          "tip": "Đứng một mình ở cuối câu thay cho \"her coffee\" phải dùng Đại từ sở hữu (hers)."
        }
      ]
    }
  },
  {
    "id": "toeic-passive-business",
    "level": "toeic",
    "toeicBand": "Target 300–500",
    "title": "Business Passive Voice",
    "subtitle": "Thể Bị Động trong Hợp đồng & Thư từ Thương mại",
    "icon": "🔄",
    "order": 6,
    "content": {
      "overview": "Thể bị động xuất hiện dày đặc trong thông báo doanh nghiệp, email thương mại và tài liệu hướng dẫn. Nhận biết câu bị động dựa vào cấu trúc Be + V3/ed và sự xuất hiện của Tân ngữ.",
      "rules": [
        {
          "title": "Passive Structures by Tense & Modals",
          "explanation": "Bảng công thức câu bị động phổ biến trong TOEIC Part 5 & 6:",
          "table": {
            "headers": [
              "Thì / Cấu trúc",
              "Chủ động (Active)",
              "Bị động (Passive TOEIC)"
            ],
            "rows": [
              [
                "Present Simple",
                "They inspect equipment.",
                "Equipment is inspected regularly."
              ],
              [
                "Past Simple",
                "The manager approved the budget.",
                "The budget was approved by the manager."
              ],
              [
                "Present Perfect",
                "We have delivered the items.",
                "The items have been delivered."
              ],
              [
                "Modal Verbs",
                "You must submit the report.",
                "The report must be submitted."
              ],
              [
                "Two-Object Verbs",
                "They offered her a promotion.",
                "She was offered a promotion / A promotion was offered to her."
              ]
            ]
          }
        },
        {
          "title": "Standard Formula: Active vs Passive Quick Check",
          "explanation": "Quy tắc vàng chọn Active/Passive trong TOEIC Part 5: Nếu sau khoảng trống KHÔNG CÓ Tân ngữ (Noun), chọn Bị động (Be + V3). Nếu CÓ Tân ngữ, chọn Chủ động.",
          "examples": [
            {
              "sentence": "All confidential documents <em>must be stored</em> securely.",
              "note": "Không có tân ngữ phía sau -> chọn Bị động (must be stored)"
            },
            {
              "sentence": "The secretary <em>stored</em> the documents securely.",
              "note": "Có tân ngữ \"the documents\" -> chọn Chủ động (stored)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The new policy was announce yesterday.",
          "correct": "The new policy was announced yesterday.",
          "tip": "Thể bị động luôn yêu cầu Động từ ở dạng Quá khứ phân từ V3/ed (announced)."
        }
      ]
    }
  },
  {
    "id": "subject-verb-agreement",
    "level": "toeic",
    "toeicBand": "Target 500–700",
    "title": "Subject-Verb Agreement",
    "subtitle": "Singular & Plural Matching Rules",
    "icon": "⚖️",
    "order": 7,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Subject-Verb Agreement tests whether you can match singular subjects with singular verbs and plural subjects with plural verbs, even with interrupting phrases.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Special Subject Patterns in TOEIC",
          "explanation": "Quy tắc & Cấu trúc chính: Watch out for subjects separated from verbs by prepositions or modifiers.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Pattern",
              "Rule",
              "Example"
            ],
            "rows": [
              [
                "Subject + (along with / as well as) + Noun",
                "Verb agrees with FIRST subject",
                "The manager, along with the staff, is attending."
              ],
              [
                "Either A or B / Neither A nor B",
                "Verb agrees with SECOND subject (B)",
                "Either the director or the assistants have the key."
              ],
              [
                "Each of / Every one of + Plural Noun",
                "Takes SINGULAR verb",
                "Each of the applicants is qualified."
              ],
              [
                "Number of vs A number of",
                "The number of = Singular; A number of = Plural",
                "The number of errors is small. / A number of students are here."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The list of items are on the desk.",
          "correct": "The list of items is on the desk.",
          "tip": "The subject is \"The list\" (singular), not \"items\"."
        }
      ]
    }
  },
  {
    "id": "prepositions-vs-conjunctions",
    "level": "toeic",
    "toeicBand": "Target 500–700",
    "title": "Prepositions vs Conjunctions in TOEIC",
    "subtitle": "Despite vs Although, Because of vs Because",
    "icon": "🔀",
    "order": 8,
    "content": {
      "overview": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
      "rules": [
        {
          "title": "Contrast & Cause Pairs",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "table": {
            "headers": [
              "Meaning",
              "Preposition (+ Noun / V-ing)",
              "Conjunction (+ Subject + Verb)"
            ],
            "rows": [
              [
                "Contrast (Dù, mặc dù)",
                "despite, in spite of",
                "although, even though, though"
              ],
              [
                "Reason (Bởi vì)",
                "because of, due to, owing to, on account of",
                "because, since, as"
              ],
              [
                "Time (Trong khi)",
                "during",
                "while"
              ]
            ]
          }
        },
        {
          "title": "Quick Elimination Technique",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "___ the heavy rain, the event was canceled.",
              "note": "\"the heavy rain\" is a Noun Phrase → use \"Because of\" or \"Despite\""
            },
            {
              "sentence": "___ it rained heavily, the event was canceled.",
              "note": "\"it rained heavily\" is a Clause (S+V) → use \"Because\" or \"Although\""
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Although the bad weather, we left.",
          "correct": "Despite the bad weather, we left.",
          "tip": "\"the bad weather\" is a noun phrase, so use \"despite\", not \"although\"."
        },
        {
          "wrong": "Because of he was late, he missed it.",
          "correct": "Because he was late, he missed it.",
          "tip": "\"he was late\" has a verb (was), so use conjunction \"because\"."
        }
      ]
    }
  },
  {
    "id": "quantifiers-determiners",
    "level": "toeic",
    "toeicBand": "Target 500–700",
    "title": "Quantifiers & Determiners",
    "subtitle": "Another, Other, Each, Every, All, Most",
    "icon": "🔢",
    "order": 9,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: TOEIC tests the subtle differences between determiners like another, other, others, the other, each, every, all, and most.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Another vs Other vs Others vs The Other",
          "explanation": "Quy tắc & Cấu trúc chính: A frequently tested group in TOEIC Part 5 & 6.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "table": {
            "headers": [
              "Determiner",
              "Followed by",
              "Example"
            ],
            "rows": [
              [
                "another",
                "Singular countable noun (+ 1 additional)",
                "Need another copy"
              ],
              [
                "other",
                "Plural countable / Uncountable noun",
                "other documents, other information"
              ],
              [
                "others",
                "NO noun (acts as a plural pronoun)",
                "Some agreed, others disagreed."
              ],
              [
                "the other",
                "Specific remaining singular/plural noun",
                "One is red, the other is blue."
              ]
            ]
          }
        },
        {
          "title": "Each / Every vs All / Most",
          "explanation": "Quy tắc & Cấu trúc chính: Each and Every take singular nouns; All and Most take plural or uncountable nouns.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "<em>Each</em> employee receive<em>s</em> a badge.",
              "note": "Each + Singular Noun + Singular Verb"
            },
            {
              "sentence": "<em>All</em> employee<em>s</em> receive a badge.",
              "note": "All + Plural Noun + Plural Verb"
            },
            {
              "sentence": "<em>Most</em> of the <em>information</em> is accurate.",
              "note": "Most of + Uncountable Noun + Singular Verb"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I have another documents.",
          "correct": "I have other documents. / I have another document.",
          "tip": "\"Another\" is only used with singular countable nouns."
        }
      ]
    }
  },
  {
    "id": "toeic-to-infinitive-gerund",
    "level": "toeic",
    "toeicBand": "Target 500–700",
    "title": "Gerunds & Infinitives in Business Context",
    "subtitle": "V-ing vs To-V & Verbs taking Object + To-V",
    "icon": "🎯",
    "order": 10,
    "content": {
      "overview": "Danh động từ (V-ing) và Động từ nguyên mẫu (To-V) chiếm tỉ lệ lớn trong câu hỏi Part 5. Cần nhớ danh sách động từ đi kèm To-V, V-ing và cấu trúc V + Object + To-V.",
      "rules": [
        {
          "title": "Core Business Verb Classifications",
          "explanation": "Phân loại động từ theo cấu trúc theo sau:",
          "table": {
            "headers": [
              "Dạng Động từ",
              "Các Động từ phổ biến trong TOEIC",
              "Ví dụ câu TOEIC"
            ],
            "rows": [
              [
                "Verb + To-V",
                "decide, agree, promise, plan, refuse, offer, intend, aim, attempt",
                "We plan to open a new branch next year."
              ],
              [
                "Verb + V-ing",
                "consider, recommend, suggest, postpone, avoid, enjoy, mind, finish, delay",
                "They recommended postponing the product launch."
              ],
              [
                "Verb + Object + To-V",
                "allow, enable, encourage, require, ask, advise, remind, invite",
                "This tool enables users to analyze data quickly."
              ],
              [
                "Preposition + V-ing",
                "instead of, besides, upon, by, far from, look forward to",
                "Before submitting the proposal, double-check figures."
              ]
            ]
          }
        },
        {
          "title": "Special Phrasal Expressions with V-ing",
          "explanation": "Các cụm từ đặc biệt có \"to\" là Giới từ (phải đi kèm V-ing thay vì To-V):",
          "examples": [
            {
              "sentence": "We look forward to <em>meeting</em> you soon.",
              "note": "look forward to + V-ing (hóng đợi)"
            },
            {
              "sentence": "She is committed to <em>improving</em> customer service.",
              "note": "be committed/dedicated/devoted to + V-ing (cam kết)"
            },
            {
              "sentence": "In addition to <em>expanding</em> sales, we reduced costs.",
              "note": "in addition to + V-ing (bên cạnh việc)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The policy allows employees take extra days off.",
          "correct": "The policy allows employees to take extra days off.",
          "tip": "Allow + Object + TO-V (cho phép ai làm gì)."
        },
        {
          "wrong": "I look forward to hear from you.",
          "correct": "I look forward to hearing from you.",
          "tip": "Sau \"look forward to\", \"to\" là giới từ nên bắt buộc đi với V-ing."
        }
      ]
    }
  },
  {
    "id": "toeic-relative-clauses",
    "level": "toeic",
    "toeicBand": "Target 500–700",
    "title": "Business Relative Clauses",
    "subtitle": "Mệnh Đề Quan Hệ Who, Which, That, Whose & Giới Từ + Mệnh Đề Quan Hệ",
    "icon": "🔗",
    "order": 11,
    "content": {
      "overview": "Mệnh đề quan hệ giúp bổ nghĩa cho danh từ chỉ người hoặc vật trong câu kinh doanh phức tạp. TOEIC nâng cao thường kiểm tra trường hợp Giới từ đứng trước đại từ quan hệ (Preposition + Whom/Which).",
      "rules": [
        {
          "title": "Relative Pronouns Summary",
          "explanation": "Bảng tra cứu đại từ quan hệ:",
          "table": {
            "headers": [
              "Đại từ",
              "Thay thế cho",
              "Vai trò trong MĐQH",
              "Ví dụ TOEIC"
            ],
            "rows": [
              [
                "who",
                "Người",
                "Chủ ngữ (S)",
                "The engineer who designed this software won an award."
              ],
              [
                "whom",
                "Người",
                "Tân ngữ (O)",
                "The applicant whom we interviewed yesterday was highly qualified."
              ],
              [
                "which",
                "Vật / Sự việc",
                "Chủ ngữ hoặc Tân ngữ",
                "The report which details our expenditure is attached."
              ],
              [
                "that",
                "Người hoặc Vật",
                "Thay cho who/which (trong MĐ xác định)",
                "All items that arrive late will be returned."
              ],
              [
                "whose",
                "Sở hữu (Danh từ)",
                "Đứng trước Noun sở hữu",
                "Candidates whose skills match our needs will be called."
              ]
            ]
          }
        },
        {
          "title": "Preposition + Relative Pronoun (Prep + Whom / Which)",
          "explanation": "Trong văn phong trang trọng của TOEIC, giới từ có thể đảo lên trước \"whom\" hoặc \"which\" (KHÔNG dùng that/who sau giới từ).",
          "examples": [
            {
              "sentence": "The manager <em>with whom</em> I spoke was very helpful.",
              "note": "with whom (người mà tôi đã nói chuyện cùng)"
            },
            {
              "sentence": "The proposal <em>in which</em> we invested generated profit.",
              "note": "in which (dự án mà trong đó chúng tôi đã đầu tư)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The project in that we are participating is confidential.",
          "correct": "The project in which we are participating is confidential.",
          "tip": "Sau giới từ BẮT BUỘC dùng \"which\" hoặc \"whom\", tuyệt đối KHÔNG dùng \"that\"."
        }
      ]
    }
  },
  {
    "id": "toeic-comparison-structures",
    "level": "toeic",
    "toeicBand": "Target 500–700",
    "title": "Comparison Structures in Reports",
    "subtitle": "So Sánh Bằng, So Sánh Hơn, So Sánh Nhất & Trạng Từ Nhấn Mạnh",
    "icon": "📈",
    "order": 12,
    "content": {
      "overview": "Các báo cáo doanh thu và đánh giá hiệu suất trong TOEIC thường xuyên sử dụng cấu trúc so sánh. Điểm quan trọng là nhận biết các Trạng từ nhấn mạnh mức độ so sánh (much, far, significantly).",
      "rules": [
        {
          "title": "Three Levels of Comparison",
          "explanation": "Bảng tổng hợp công thức so sánh:",
          "table": {
            "headers": [
              "Cấp độ So Sánh",
              "Tính/Trạng từ ngắn",
              "Tính/Trạng từ dài",
              "Ví dụ TOEIC"
            ],
            "rows": [
              [
                "So sánh bằng",
                "as + adj/adv + as",
                "as + adj/adv + as",
                "The new model is as reliable as the old one."
              ],
              [
                "So sánh hơn",
                "adj-er + than",
                "more + adj/adv + than",
                "Sales were higher than expected."
              ],
              [
                "So sánh nhất",
                "the + adj-est",
                "the most + adj/adv",
                "This is the most efficient system available."
              ],
              [
                "So sánh kép",
                "The + comparative..., the + comparative...",
                "The earlier you order, the faster we ship."
              ]
            ]
          }
        },
        {
          "title": "Emphasizing Comparatives (Trạng từ nhấn mạnh so sánh hơn)",
          "explanation": "Các trạng từ được phép đứng trước dạng so sánh hơn để nhấn mạnh: much, far, significantly, substantially, considerably, even, slightly.",
          "examples": [
            {
              "sentence": "This year's profit is <em>significantly higher</em> than last year's.",
              "note": "significantly + comparative (cao hơn đáng kể)"
            },
            {
              "sentence": "Our services are <em>much more affordable</em> than competitors'.",
              "note": "much + more adj (rẻ hơn nhiều)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Sales are very higher than last month.",
          "correct": "Sales are much / significantly higher than last month.",
          "tip": "KHÔNG dùng \"very\" để nhấn mạnh so sánh hơn; phải dùng \"much\", \"far\", \"significantly\"."
        }
      ]
    }
  },
  {
    "id": "reduced-clauses",
    "level": "toeic",
    "toeicBand": "Target 700–990",
    "title": "Reduced Clauses (Rút Gọn Mệnh Đề)",
    "subtitle": "Participle Clauses V-ing & V3 in TOEIC",
    "icon": "✂️",
    "order": 13,
    "content": {
      "overview": "Quy tắc & Cấu trúc chính: Reduced relative clauses and adverbial clauses are heavily tested in higher-level TOEIC questions (700+ target).. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
      "rules": [
        {
          "title": "Reduced Relative Clauses",
          "explanation": "Mệnh đề quan hệ bổ sung thông tin cho danh từ: Dùng 'who' chỉ người, 'which' chỉ vật, 'that' thay cho cả hai trong mệnh đề xác định, 'whose' chỉ sở hữu.",
          "examples": [
            {
              "sentence": "Active: The man <em>working</em> at the desk is Mr. Smith. (= who is working)",
              "note": "V-ing for active voice"
            },
            {
              "sentence": "Passive: The products <em>made</em> in Germany are high quality. (= which are made)",
              "note": "V3 for passive voice"
            }
          ]
        },
        {
          "title": "Reduced Adverbial Time/Reason Clauses",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "Active: <em>Before submitting</em> the report, please review it. (= Before you submit...)",
              "note": "Preposition/Conjunction + V-ing"
            },
            {
              "sentence": "Passive: <em>When asked</em> about the plan, he gave details. (= When he was asked...)",
              "note": "Conjunction + V3"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The items ordering online arrived today.",
          "correct": "The items ordered online arrived today.",
          "tip": "The items are ordered (passive), so use V3 \"ordered\", not V-ing."
        }
      ]
    }
  },
  {
    "id": "parallel-structure",
    "level": "toeic",
    "toeicBand": "Target 700–990",
    "title": "Parallel Structure & Correlatives",
    "subtitle": "Both...and, Either...or, Not only...but also",
    "icon": "⚖️",
    "order": 14,
    "content": {
      "overview": "Mệnh đề quan hệ bổ sung thông tin cho danh từ: Dùng 'who' chỉ người, 'which' chỉ vật, 'that' thay cho cả hai trong mệnh đề xác định, 'whose' chỉ sở hữu.",
      "rules": [
        {
          "title": "Correlative Conjunctions",
          "explanation": "Mệnh đề quan hệ bổ sung thông tin cho danh từ: Dùng 'who' chỉ người, 'which' chỉ vật, 'that' thay cho cả hai trong mệnh đề xác định, 'whose' chỉ sở hữu.",
          "table": {
            "headers": [
              "Pair",
              "Example"
            ],
            "rows": [
              [
                "both... and...",
                "The course is both informative and enjoyable."
              ],
              [
                "either... or...",
                "You can pay either by credit card or in cash."
              ],
              [
                "neither... nor...",
                "The product is neither expensive nor poor quality."
              ],
              [
                "not only... but also...",
                "She is not only skilled but also dedicated."
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The job requires dedication, patience, and working hard.",
          "correct": "The job requires dedication, patience, and hard work.",
          "tip": "Keep items parallel: Noun, Noun, and Noun."
        }
      ]
    }
  },
  {
    "id": "subjunctive-business",
    "level": "toeic",
    "toeicBand": "Target 700–990",
    "title": "Subjunctive Mood in Business English",
    "subtitle": "Demand, recommend, insist + base verb",
    "icon": "📝",
    "order": 15,
    "content": {
      "overview": "Thức giả định (Subjunctive Mood): Động từ ở dạng nguyên mẫu không chia (V-bare) sau các động từ/tính từ thể hiện sự khẩn cấp hoặc kiến nghị (suggest/require that he be/do...).",
      "rules": [
        {
          "title": "Verbs Triggering the Subjunctive",
          "explanation": "Thức giả định (Subjunctive Mood): Động từ ở dạng nguyên mẫu không chia (V-bare) sau các động từ/tính từ thể hiện sự khẩn cấp hoặc kiến nghị (suggest/require that he be/do...).",
          "table": {
            "headers": [
              "Trigger Verb",
              "Example Sentence"
            ],
            "rows": [
              [
                "recommend",
                "The board recommended that Mr. Lee submit the report."
              ],
              [
                "insist",
                "She insisted that he be present at the ceremony."
              ],
              [
                "require",
                "Regulations require that each worker wear safety gear."
              ],
              [
                "request",
                "The client requested that the contract be revised."
              ]
            ]
          }
        },
        {
          "title": "Adjectives Triggering the Subjunctive",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "It is <em>essential that</em> every manager <em>attend</em> the meeting.",
              "note": "Not \"attends\" — bare infinitive"
            },
            {
              "sentence": "It is <em>imperative that</em> the shipment <em>be</em> dispatched today.",
              "note": "Not \"is\" — bare form of be"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The director recommended that she signs the agreement.",
          "correct": "The director recommended that she sign the agreement.",
          "tip": "Use the base verb (sign) after \"recommended that\"."
        }
      ]
    }
  },
  {
    "id": "toeic-inversion-emphasis",
    "level": "toeic",
    "toeicBand": "Target 700–990",
    "title": "Inversion & Emphatic Structures",
    "subtitle": "Đảo Ngữ Trạng Từ Phủ Định & Đảo Ngữ Câu Điều Kiện",
    "icon": "⚡",
    "order": 16,
    "content": {
      "overview": "Cấu trúc đảo ngữ (Inversion) đẩy Trạng từ phủ định hoặc Từ điều kiện lên đầu câu để tạo sự nhấn mạnh trang trọng. Đây là điểm ngữ pháp phân loại học viên chinh phục Band 800–990 trong TOEIC Part 5 & 6.",
      "rules": [
        {
          "title": "Inversion with Negative Adverbs",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "table": {
            "headers": [
              "Trạng từ đầu câu",
              "Cấu trúc Đảo ngữ",
              "Ví dụ TOEIC chuẩn"
            ],
            "rows": [
              [
                "Never / Seldom / Rarely",
                "Seldom + AUX + S + V",
                "Seldom have we witnessed such outstanding annual sales growth."
              ],
              [
                "Hardly / Scarcely... when",
                "Hardly + had + S + V3... when + S + V2",
                "Hardly had the meeting started when the fire alarm rang."
              ],
              [
                "No sooner... than",
                "No sooner + had + S + V3... than + S + V2",
                "No sooner had we launched the campaign than orders flooded in."
              ],
              [
                "Not only... but also",
                "Not only + AUX + S + V..., but S also...",
                "Not only did she meet the deadline, but she also exceeded expectations."
              ],
              [
                "Only after / Only when",
                "Only after + N/V-ing + AUX + S + V",
                "Only after signing the contract did they transfer funds."
              ]
            ]
          }
        },
        {
          "title": "Inverted Conditionals (Đảo ngữ câu điều kiện)",
          "explanation": "Bỏ \"If\" và đảo Động từ/Trợ động từ lên trước Chủ ngữ:",
          "examples": [
            {
              "sentence": "Type 1: <em>Should you have</em> any questions, please contact customer support. (= If you have...)",
              "note": "Should + Subject + Base Verb"
            },
            {
              "sentence": "Type 2: <em>Were I</em> in your position, I would accept the job offer. (= If I were...)",
              "note": "Were + Subject + to-V / Noun"
            },
            {
              "sentence": "Type 3: <em>Had we received</em> the invoice earlier, we would have paid on time. (= If we had received...)",
              "note": "Had + Subject + V3/ed"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Seldom we have seen such rapid expansion.",
          "correct": "Seldom have we seen such rapid expansion.",
          "tip": "Khi đứng đầu câu, \"Seldom\" BẮT BUỘC đảo trợ động từ (have) lên trước chủ ngữ (we)."
        }
      ]
    }
  },
  {
    "id": "toeic-causative-structures",
    "level": "toeic",
    "toeicBand": "Target 700–990",
    "title": "Causative & Verb Patterns",
    "subtitle": "Cấu Trúc Sai Khiến Have, Get, Make, Let, Help & Động Từ Nguyên Nhân",
    "icon": "🛠️",
    "order": 17,
    "content": {
      "overview": "Thể sai khiến (Causative Structures) biểu thị việc nhờ, thuê hoặc yêu cầu người khác làm điều gì cho mình. Phân biệt chính xác giữa Chủ động và Bị động của Have và Get là chìa khóa Part 5.",
      "rules": [
        {
          "title": "Causative Have and Get Formula",
          "explanation": "So sánh cấu trúc Thể sai khiến:",
          "table": {
            "headers": [
              "Động từ",
              "Dạng Chủ động (Active)",
              "Dạng Bị động (Passive - TOEIC Focus)"
            ],
            "rows": [
              [
                "HAVE",
                "Have + Subject (người) + V-bare (nguyên mẫu)",
                "Have + Object (vật) + V3/ed (được làm)"
              ],
              [
                "GET",
                "Get + Subject (người) + To-V",
                "Get + Object (vật) + V3/ed (được làm)"
              ],
              [
                "MAKE",
                "Make + Subject (người) + V-bare (bắt buộc ai làm gì)",
                "Be made + To-V"
              ],
              [
                "LET",
                "Let + Subject (người) + V-bare (cho phép ai làm gì)",
                "Be allowed + To-V"
              ],
              [
                "HELP",
                "Help + Subject + (To) V-bare (giúp ai làm gì)",
                "—"
              ]
            ]
          }
        },
        {
          "title": "Examples in Business Documents",
          "explanation": "Ứng dụng trong thông báo & hợp đồng:",
          "examples": [
            {
              "sentence": "We will <em>have the technician inspect</em> the server tomorrow.",
              "note": "Have + technician (người) + inspect (V-bare)"
            },
            {
              "sentence": "We will <em>have the server inspected</em> by a technician tomorrow.",
              "note": "Have + server (vật) + inspected (V3/ed)"
            },
            {
              "sentence": "She <em>got the contractor to fix</em> the roof.",
              "note": "Get + contractor (người) + to fix (To-V)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The manager had his assistant to schedule the meeting.",
          "correct": "The manager had his assistant schedule the meeting.",
          "tip": "Have + người + V-bare (KHÔNG dùng to-V với Have)."
        },
        {
          "wrong": "We got the contract sign yesterday.",
          "correct": "We got the contract signed yesterday.",
          "tip": "Get + vật + V3/ed (signed)."
        }
      ]
    }
  },
  {
    "id": "toeic-noun-clauses",
    "level": "toeic",
    "toeicBand": "Target 700–990",
    "title": "Noun Clauses & Embedded Questions",
    "subtitle": "Mệnh Đề Danh Từ Làm Chủ Ngữ & Tân Ngữ trong Tiếng Anh Thương Mại",
    "icon": "📦",
    "order": 18,
    "content": {
      "overview": "Mệnh đề danh từ (Noun Clause) đóng vai trò như một danh từ đơn lẻ trong câu (có thể làm Chủ ngữ, Tân ngữ của Động từ hoặc Tân ngữ của Giới từ). Mệnh đề danh từ thường bắt đầu bằng That, Whether/If, hoặc Wh-words.",
      "rules": [
        {
          "title": "Types of Noun Clauses",
          "explanation": "Các dạng Mệnh đề danh từ chính trong TOEIC:",
          "table": {
            "headers": [
              "Bắt đầu bằng",
              "Chức năng",
              "Ví dụ TOEIC thực tế"
            ],
            "rows": [
              [
                "That + S + V",
                "Làm Tân ngữ cho động từ chỉ tư duy/tuyên bố",
                "Analysts predict that oil prices will stabilize soon."
              ],
              [
                "That + S + V",
                "Làm Chủ ngữ câu (Verb chia số ít)",
                "That the company achieved record growth surprised everyone."
              ],
              [
                "Whether / If + S + V",
                "Làm Tân ngữ (\"liệu có... hay không\")",
                "We need to confirm whether the supplier can meet our deadline."
              ],
              [
                "Wh- word + S + V",
                "Làm Tân ngữ của Động từ / Giới từ",
                "Management is evaluating how we can improve productivity."
              ]
            ]
          }
        },
        {
          "title": "Word Order in Embedded Questions (Trật tự từ trong câu hỏi ẩn)",
          "explanation": "Trong mệnh đề danh từ bắt đầu bằng Wh-word, trật tự từ BẮT BUỘC là [Wh-word + Subject + Verb] (KHÔNG đảo trợ động từ như câu hỏi thông thường).",
          "examples": [
            {
              "sentence": "❌ Please inform us <em>when will the delivery arrive</em>.",
              "note": "Sai vì đảo trợ động từ \"will\" lên trước S"
            },
            {
              "sentence": "✅ Please inform us <em>when the delivery will arrive</em>.",
              "note": "Đúng — Noun clause: Wh-word + S + V"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I don't know where is the main conference room.",
          "correct": "I don't know where the main conference room is.",
          "tip": "Mệnh đề danh từ KHÔNG được đảo ngữ. Dùng trật tự [Wh-word + S + V]."
        }
      ]
    }
  },
  {
    "id": "beg-present",
    "level": "beginner",
    "title": "Present Tenses & Verb Usage",
    "subtitle": "9 bài về các thì hiện tại với nội dung chủ yếu xoay quanh động từ sử dụng",
    "icon": "🌱",
    "order": 101,
    "murphyUnit": "Units 1–9",
    "content": {
      "overview": "Bộ 9 bài học toàn diện về các thì hiện tại (Present Simple & Present Continuous), cách dùng động từ trạng thái (stative verbs), Have/Have got, và tần suất hành động.",
      "rules": [
        {
          "title": "Bài 1: Present Continuous — Hành động đang diễn ra (am/is/are + V-ing)",
          "explanation": "Dùng để diễn tả hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.",
          "table": {
            "headers": [
              "Chủ ngữ",
              "Khẳng định",
              "Phủ định",
              "Nghi vấn"
            ],
            "rows": [
              [
                "I",
                "I am working",
                "I am not working",
                "Am I working?"
              ],
              [
                "He / She / It",
                "She is reading",
                "She is not reading",
                "Is she reading?"
              ],
              [
                "We / You / They",
                "They are playing",
                "They are not playing",
                "Are they playing?"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "Please be quiet. I <em>am working</em>.",
              "note": "Hành động đang diễn ra"
            },
            {
              "sentence": "Look! It <em>is snowing</em> outside.",
              "note": "Thời điểm hiện tại"
            },
            {
              "sentence": "They <em>are studying</em> for their exams this week.",
              "note": "Xung quanh thời điểm hiện tại"
            }
          ]
        },
        {
          "title": "Bài 2: Present Simple — Thói quen & Chân lý (V1 / V-s/es)",
          "explanation": "Dùng cho các hành động lặp đi lặp lại, sự thật hiển nhiên, thói quen hàng ngày.",
          "table": {
            "headers": [
              "Chủ ngữ",
              "Khẳng định",
              "Phủ định",
              "Nghi vấn"
            ],
            "rows": [
              [
                "I / You / We / They",
                "I work",
                "I don't work",
                "Do you work?"
              ],
              [
                "He / She / It",
                "He works",
                "He doesn't work",
                "Does he work?"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "The sun <em>rises</em> in the east.",
              "note": "Chân lý hiển nhiên"
            },
            {
              "sentence": "I <em>drive</em> to work every morning.",
              "note": "Thói quen hàng ngày"
            },
            {
              "sentence": "She <em>doesn't eat</em> meat.",
              "note": "Sở thích / Trạng thái cố định"
            }
          ]
        },
        {
          "title": "Bài 3: Present Continuous vs Present Simple (So sánh bản chất)",
          "explanation": "Present Continuous dùng cho hành động tạm thời (temporary); Present Simple dùng cho tình trạng lâu dài/cố định (permanent).",
          "examples": [
            {
              "sentence": "I <em>live</em> in Hanoi.",
              "note": "Cố định, lâu dài (Simple)"
            },
            {
              "sentence": "I <em>am living</em> with a friend until I find an apartment.",
              "note": "Tạm thời (Continuous)"
            },
            {
              "sentence": "It <em>always rains</em> in November.",
              "note": "Thời tiết thường kỳ"
            }
          ]
        },
        {
          "title": "Bài 4: Stative Verbs — Động từ chỉ trạng thái không dùng thì tiếp diễn",
          "explanation": "Các động từ chỉ cảm xúc, nhận thức, sở hữu (like, love, know, understand, believe, want, need, belong) KHÔNG chia tiếp diễn.",
          "examples": [
            {
              "sentence": "❌ I am wanting a glass of water.",
              "note": "Sai"
            },
            {
              "sentence": "✅ I <em>want</em> a glass of water.",
              "note": "Đúng (State verb)"
            },
            {
              "sentence": "Do you <em>understand</em> what I mean?",
              "note": "Nhận thức (State verb)"
            }
          ]
        },
        {
          "title": "Bài 5: Động từ đa nghĩa: Think, Have, See (State vs Dynamic)",
          "explanation": "Một số động từ vừa là trạng thái (Simple) vừa là hành động (Continuous) tùy nghĩa.",
          "table": {
            "headers": [
              "Động từ",
              "Thì Hiện tại đơn (State)",
              "Thì Hiện tại tiếp diễn (Dynamic)"
            ],
            "rows": [
              [
                "think",
                "I think he is smart (bản chất/ý kiến)",
                "I am thinking about the plan (đang suy nghĩ)"
              ],
              [
                "have",
                "I have a car (sở hữu)",
                "I am having breakfast (đang ăn)"
              ],
              [
                "see",
                "I see a bird (thấy bằng mắt)",
                "I am seeing the doctor tomorrow (gặp/khám)"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "What do you <em>think</em> of this book?",
              "note": "Hỏi ý kiến"
            },
            {
              "sentence": "Quiet please! I <em>am thinking</em>.",
              "note": "Đang suy nghĩ trong đầu"
            }
          ]
        },
        {
          "title": "Bài 6: Have & Have got — Cách diễn đạt sở hữu",
          "explanation": "Cả \"have\" và \"have got\" đều dùng để chỉ sở hữu, quan hệ, bệnh tật trong hiện tại.",
          "examples": [
            {
              "sentence": "I <em>have</em> a new phone. = I <em>have got</em> a new phone.",
              "note": "Sở hữu"
            },
            {
              "sentence": "She <em>doesn't have</em> a car. = She <em>hasn't got</em> a car.",
              "note": "Phủ định"
            },
            {
              "sentence": "Do you <em>have</em> a headache? = <em>Have</em> you <em>got</em> a headache?",
              "note": "Nghi vấn"
            }
          ]
        },
        {
          "title": "Bài 7: Present Continuous chỉ sự thay đổi & phát triển",
          "explanation": "Dùng Present Continuous với các động từ get, change, become, increase, grow để nói về sự biến đổi.",
          "examples": [
            {
              "sentence": "Is your English <em>getting</em> better?",
              "note": "Đang tiến bộ"
            },
            {
              "sentence": "The population of the world <em>is increasing</em> very fast.",
              "note": "Đang gia tăng"
            }
          ]
        },
        {
          "title": "Bài 8: Trạng từ chỉ tần suất với Present Simple",
          "explanation": "Các trạng từ (always, usually, often, sometimes, rarely, never) đứng TRƯỚC động từ thường và SAU động từ To Be.",
          "examples": [
            {
              "sentence": "I <em>always get up</em> early on weekdays.",
              "note": "Trước V thường"
            },
            {
              "sentence": "He <em>is usually</em> late for meetings.",
              "note": "Sau To Be"
            }
          ]
        },
        {
          "title": "Bài 9: Present Continuous dùng với \"Always\" chỉ sự phàn nàn",
          "explanation": "Cấu trúc \"Subject + is/are + always + V-ing\" diễn tả hành động lặp đi lặp lại gây khó chịu.",
          "examples": [
            {
              "sentence": "You <em>are always losing</em> your keys!",
              "note": "Phàn nàn về sự lơ đễnh"
            },
            {
              "sentence": "He <em>is always complaining</em> about his salary.",
              "note": "Thói quen gây bực bội"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I working right now.",
          "correct": "I am working right now.",
          "tip": "Không được quên động từ To Be trong thì tiếp diễn."
        },
        {
          "wrong": "She like ice cream.",
          "correct": "She likes ice cream.",
          "tip": "Thêm -s/-es cho chủ ngữ số ít ở thì Hiện tại đơn."
        },
        {
          "wrong": "I am understanding this rule.",
          "correct": "I understand this rule.",
          "tip": "\"Understand\" là động từ trạng thái, không chia -ing."
        }
      ]
    }
  },
  {
    "id": "beg-past",
    "level": "beginner",
    "title": "Past Tenses & Verb Patterns",
    "subtitle": "5 bài về thì quá khứ cũng xoay quanh nội dung động từ",
    "icon": "🌱",
    "order": 102,
    "murphyUnit": "Units 10–14",
    "content": {
      "overview": "Chuyên đề 5 bài về Quá khứ đơn (Past Simple), Quá khứ tiếp diễn (Past Continuous), sự kết hợp giữa hai thì và cấu trúc Used to.",
      "rules": [
        {
          "title": "Bài 1: Past Simple — Động từ có quy tắc (-ed) và bất quy tắc",
          "explanation": "Dùng cho hành động đã hoàn thành và chấm dứt hoàn toàn trong quá khứ.",
          "table": {
            "headers": [
              "Loại động từ",
              "Nguyên thể (V1)",
              "Quá khứ (V2)"
            ],
            "rows": [
              [
                "Có quy tắc",
                "work / play / stop",
                "worked / played / stopped"
              ],
              [
                "Bất quy tắc",
                "go / see / buy / write",
                "went / saw / bought / wrote"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "I <em>visited</em> my grandparents yesterday.",
              "note": "Có quy tắc (-ed)"
            },
            {
              "sentence": "She <em>bought</em> a new coat last night.",
              "note": "Bất quy tắc (buy -> bought)"
            },
            {
              "sentence": "Did you <em>enjoy</em> the party?",
              "note": "Nghi vấn dùng Did + V1"
            }
          ]
        },
        {
          "title": "Bài 2: Past Continuous — Hành động đang diễn ra trong quá khứ",
          "explanation": "Cấu trúc: Was / Were + V-ing. Diễn tả hành động đang diễn ra tại một mốc thời gian xác định trong quá khứ.",
          "examples": [
            {
              "sentence": "At 8 PM last night, I <em>was watching</em> TV.",
              "note": "Mốc thời gian cụ thể"
            },
            {
              "sentence": "They <em>were sleeping</em> when the phone rang.",
              "note": "Hành động nền"
            }
          ]
        },
        {
          "title": "Bài 3: Past Simple vs Past Continuous (When & While)",
          "explanation": "Hành động đang diễn ra chia Past Continuous (với While); hành động xen vào chia Past Simple (với When).",
          "examples": [
            {
              "sentence": "I <em>was walking</em> home when it <em>started</em> to rain.",
              "note": "When + Past Simple xen vào"
            },
            {
              "sentence": "While she <em>was cooking</em>, he <em>was reading</em>.",
              "note": "Hai hành động song song"
            }
          ]
        },
        {
          "title": "Bài 4: Used to + V1 — Thói quen và trạng thái trong quá khứ",
          "explanation": "Diễn tả thói quen hoặc trạng thái kéo dài trong quá khứ nhưng nay không còn nữa.",
          "examples": [
            {
              "sentence": "I <em>used to play</em> tennis a lot, but I stopped.",
              "note": "Thói quen cũ"
            },
            {
              "sentence": "Did you <em>use to live</em> in Paris?",
              "note": "Nghi vấn (use to)"
            },
            {
              "sentence": "She <em>didn't use to like</em> vegetables.",
              "note": "Phủ định"
            }
          ]
        },
        {
          "title": "Bài 5: Động từ trạng thái trong quá khứ & Từ chỉ thời gian",
          "explanation": "Các từ chỉ thời gian quá khứ: yesterday, ago, last (week/month), in 2010. Không chia tiếp diễn với state verbs trong quá khứ.",
          "examples": [
            {
              "sentence": "I <em>knew</em> the answer 5 minutes ago.",
              "note": "Knew (state verb, past simple)"
            },
            {
              "sentence": "Two years <em>ago</em>, we lived in Tokyo.",
              "note": "Ago đứng sau thời gian"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I didn't went to school yesterday.",
          "correct": "I didn't go to school yesterday.",
          "tip": "Sau didn't dùng động từ nguyên thể."
        },
        {
          "wrong": "I was use to live here.",
          "correct": "I used to live here.",
          "tip": "Phân biệt \"used to V\" (đã từng) và \"be used to V-ing\"."
        }
      ]
    }
  },
  {
    "id": "beg-present-perfect",
    "level": "beginner",
    "title": "Present Perfect",
    "subtitle": "6 bài về thì hiện tại hoàn thành",
    "icon": "🌱",
    "order": 103,
    "murphyUnit": "Units 15–20",
    "content": {
      "overview": "6 bài chi tiết về Present Perfect (Have/Has + V3/ed): trải nghiệm sống, kết quả hiện tại, vừa mới/đã/chưa, khoảng thời gian (for/since), và so sánh với Quá khứ đơn.",
      "rules": [
        {
          "title": "Bài 1: Present Perfect 1 — Trải nghiệm sống (Ever / Never)",
          "explanation": "Nói về trải nghiệm từ quá khứ đến nay mà không ghi rõ thời gian cụ thể.",
          "examples": [
            {
              "sentence": "Have you <em>ever been</em> to Paris?",
              "note": "Hỏi trải nghiệm (ever)"
            },
            {
              "sentence": "I have <em>never eaten</em> sushi before.",
              "note": "Chưa từng (never)"
            }
          ]
        },
        {
          "title": "Bài 2: Present Perfect 2 — Just, Already, Yet",
          "explanation": "Just (vừa mới), Already (đã... rồi - sớm hơn dự kiến), Yet (chưa - dùng trong phủ định & câu hỏi).",
          "examples": [
            {
              "sentence": "I have <em>just finished</em> my lunch.",
              "note": "Just = a short time ago"
            },
            {
              "sentence": "Don't forget to pay the bill! — I've <em>already paid</em> it.",
              "note": "Already"
            },
            {
              "sentence": "Has it stopped raining <em>yet</em>?",
              "note": "Yet ở cuối câu"
            }
          ]
        },
        {
          "title": "Bài 3: Present Perfect 3 — For & Since (Khoảng thời gian & Mốc thời gian)",
          "explanation": "For + khoảng thời gian (for 5 years, for 2 hours); Since + mốc thời gian (since 2018, since Monday).",
          "examples": [
            {
              "sentence": "She has lived here <em>for 10 years</em>.",
              "note": "Khoảng thời gian"
            },
            {
              "sentence": "They have been friends <em>since high school</em>.",
              "note": "Mốc thời gian"
            }
          ]
        },
        {
          "title": "Bài 4: Present Perfect Continuous — Quá khứ hoàn thành tiếp diễn",
          "explanation": "Have/Has been + V-ing: Nhấn mạnh quá trình/sự kéo dài liên tục của hành động kéo dài đến hiện tại.",
          "examples": [
            {
              "sentence": "It <em>has been raining</em> all morning.",
              "note": "Vẫn đang mưa hoặc vừa dừng"
            },
            {
              "sentence": "How long have you <em>been waiting</em>?",
              "note": "Hỏi thời lượng"
            }
          ]
        },
        {
          "title": "Bài 5: Present Perfect Simple vs Continuous (How much vs How long)",
          "explanation": "Simple nhấn mạnh kết quả/số lượng (How many/much); Continuous nhấn mạnh quá trình/thời lượng (How long).",
          "examples": [
            {
              "sentence": "I have <em>written 3 letters</em> today.",
              "note": "Kết quả/Số lượng (Simple)"
            },
            {
              "sentence": "I have <em>been writing</em> letters all morning.",
              "note": "Quá trình (Continuous)"
            }
          ]
        },
        {
          "title": "Bài 6: Present Perfect vs Past Simple (Thời gian mở vs Thời gian xác định)",
          "explanation": "Present Perfect dùng khi thời gian chưa kết thúc (today, this week); Past Simple dùng khi thời gian đã kết thúc (yesterday, in 2020).",
          "examples": [
            {
              "sentence": "I <em>lost</em> my key yesterday.",
              "note": "Thời gian đã xong (Past Simple)"
            },
            {
              "sentence": "I <em>have lost</em> my key. I can't enter.",
              "note": "Kết quả ảnh hưởng hiện tại (Present Perfect)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I have seen him yesterday.",
          "correct": "I saw him yesterday.",
          "tip": "Có \"yesterday\" (thời gian quá khứ xác định) phải chia Past Simple."
        },
        {
          "wrong": "She has lived here since 5 years.",
          "correct": "She has lived here for 5 years.",
          "tip": "Dùng \"for\" với khoảng thời gian."
        }
      ]
    }
  },
  {
    "id": "beg-passive",
    "level": "beginner",
    "title": "Passive",
    "subtitle": "2 bài về động từ tobe bị động",
    "icon": "🌱",
    "order": 104,
    "murphyUnit": "Units 21–22",
    "content": {
      "overview": "2 bài về Câu bị động cơ bản trong hiện tại và quá khứ đơn (am/is/are + V3 & was/were + V3).",
      "rules": [
        {
          "title": "Bài 1: Present Simple Passive (is / am / are + V3/ed)",
          "explanation": "Dùng khi đối tượng nhận hành động quan trọng hơn người thực hiện hành động.",
          "examples": [
            {
              "sentence": "This house <em>is cleaned</em> every day.",
              "note": "Hiện tại bị động"
            },
            {
              "sentence": "Butter <em>is made</em> from milk.",
              "note": "Sự thật/Quy trình"
            }
          ]
        },
        {
          "title": "Bài 2: Past Simple Passive (was / were + V3/ed) & Tác nhân By",
          "explanation": "Cấu trúc bị động ở quá khứ. Dùng \"by + tân ngữ\" để nêu người/vật thực hiện hành động.",
          "examples": [
            {
              "sentence": "The Mona Lisa <em>was painted</em> by Leonardo da Vinci.",
              "note": "Tác nhân By"
            },
            {
              "sentence": "Many houses <em>were destroyed</em> by the storm.",
              "note": "Quá khứ bị động"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The car was steal yesterday.",
          "correct": "The car was stolen yesterday.",
          "tip": "Động từ trong câu bị động luôn chia ở dạng V3/Past Participle."
        }
      ]
    }
  },
  {
    "id": "beg-verb-forms",
    "level": "beginner",
    "title": "Verb forms",
    "subtitle": "2 bài về các dạng từ trong hiện tại, quá khứ đến tần suất",
    "icon": "🌱",
    "order": 105,
    "murphyUnit": "Units 23–24",
    "content": {
      "overview": "2 bài tổng hợp về các dạng biến đổi của động từ (V1, V2, V3, V-ing) và vị trí động từ trong câu.",
      "rules": [
        {
          "title": "Bài 1: 4 Dạng cơ bản của Động từ (Base, Past, Participle, -ing)",
          "explanation": "Nắm vững 4 dạng: V1 (nguyên thể), V2 (quá khứ), V3 (quá khứ phân từ), V-ing (hiện tại phân từ).",
          "table": {
            "headers": [
              "V1 (Base)",
              "V2 (Past Simple)",
              "V3 (Past Participle)",
              "V-ing (Present Participle)"
            ],
            "rows": [
              [
                "do",
                "did",
                "done",
                "doing"
              ],
              [
                "see",
                "saw",
                "seen",
                "seeing"
              ],
              [
                "make",
                "made",
                "made",
                "making"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "I <em>see</em> him every day.",
              "note": "V1"
            },
            {
              "sentence": "I <em>saw</em> him yesterday.",
              "note": "V2"
            },
            {
              "sentence": "I have <em>seen</em> him twice.",
              "note": "V3"
            }
          ]
        },
        {
          "title": "Bài 2: Động từ đi kèm Trợ động từ & Động từ khuyết thiếu",
          "explanation": "Động từ theo sau do/does/did/will/can/must luôn ở dạng Nguyên thể không \"to\" (Bare Infinitive).",
          "examples": [
            {
              "sentence": "She <em>can speak</em> French.",
              "note": "Can + V1"
            },
            {
              "sentence": "Did you <em>go</em> out last night?",
              "note": "Did + V1"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He can speaks English.",
          "correct": "He can speak English.",
          "tip": "Sau trợ động từ khuyết thiếu, động từ giữ nguyên dạng."
        }
      ]
    }
  },
  {
    "id": "beg-future",
    "level": "beginner",
    "title": "Future",
    "subtitle": "4 bài về thì tương lai với cách dùng trợ động từ",
    "icon": "🌱",
    "order": 106,
    "murphyUnit": "Units 25–28",
    "content": {
      "overview": "4 bài về các cách diễn đạt tương lai trong tiếng Anh: Present Continuous cho lịch trình cá nhân, Be going to cho dự định & bằng chứng, Will cho quyết định bộc phát & Shall.",
      "rules": [
        {
          "title": "Bài 1: Present Continuous chỉ tương lai (Arrangements)",
          "explanation": "Dùng Present Continuous cho các kế hoạch đã sắp xếp lịch hẹn cụ thể với người khác.",
          "examples": [
            {
              "sentence": "I <em>am meeting</em> Peter at 3 PM tomorrow.",
              "note": "Lịch hẹn đã chốt"
            },
            {
              "sentence": "We <em>are flying</em> to Paris next Monday.",
              "note": "Đã mua vé"
            }
          ]
        },
        {
          "title": "Bài 2: Be Going To — Dự định & Dự đoán có bằng chứng",
          "explanation": "Dùng \"be going to + V1\" khi đã có ý định từ trước hoặc có dấu hiệu/bằng chứng rõ ràng ở hiện tại.",
          "examples": [
            {
              "sentence": "I <em>am going to buy</em> a new laptop next month.",
              "note": "Ý định cá nhân"
            },
            {
              "sentence": "Look at those dark clouds! It <em>is going to rain</em>.",
              "note": "Bằng chứng hiện tại"
            }
          ]
        },
        {
          "title": "Bài 3: Will / Shall 1 — Quyết định tức thì, Lời hứa, Lời đề nghị",
          "explanation": "Dùng \"Will + V1\" cho quyết định đưa ra ngay lúc nói; \"Shall I/we...?\" cho lời đề nghị giúp đỡ.",
          "examples": [
            {
              "sentence": "What would you like to drink? — I <em>will have</em> an orange juice.",
              "note": "Quyết định bộc phát"
            },
            {
              "sentence": "<em>Shall I open</em> the window for you?",
              "note": "Lời đề nghị trợ giúp"
            }
          ]
        },
        {
          "title": "Bài 4: Will vs Be Going To (So sánh toàn diện)",
          "explanation": "Will = chưa lên kế hoạch trước / dự đoán chủ quan; Be going to = đã có dự định / có bằng chứng.",
          "examples": [
            {
              "sentence": "Phone ringing: \"I <em>will answer</em> it!\"",
              "note": "Will (tức thì)"
            },
            {
              "sentence": "Why are you holding a bucket? — I <em>am going to wash</em> the car.",
              "note": "Going to (ý định có sẵn)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I will to call you later.",
          "correct": "I will call you later.",
          "tip": "Sau \"will\" dùng động từ nguyên thể không \"to\"."
        }
      ]
    }
  },
  {
    "id": "beg-modal-imperative",
    "level": "beginner",
    "title": "Modal, imperative",
    "subtitle": "8 bài về các động từ khuyết thiếu",
    "icon": "🌱",
    "order": 107,
    "murphyUnit": "Units 29–36",
    "content": {
      "overview": "8 bài chi tiết về các động từ khuyết thiếu cơ bản (Can, Could, Must, Should, May, Might, Needn't) và Câu mệnh lệnh (Imperatives).",
      "rules": [
        {
          "title": "Bài 1: Can & Could — Khả năng & Xin phép",
          "explanation": "Can = khả năng ở hiện tại; Could = khả năng trong quá khứ hoặc yêu cầu lịch sự.",
          "examples": [
            {
              "sentence": "I <em>can swim</em> fast.",
              "note": "Khả năng hiện tại"
            },
            {
              "sentence": "When I was young, I <em>could run</em> 10 km.",
              "note": "Khả năng quá khứ"
            },
            {
              "sentence": "<em>Could you</em> open the door, please?",
              "note": "Yêu cầu lịch sự"
            }
          ]
        },
        {
          "title": "Bài 2: Must & Mustn't — Bắt buộc & Cấm đoán",
          "explanation": "Must = bắt buộc phải làm; Mustn't = tuyệt đối không được làm (cấm đoán).",
          "examples": [
            {
              "sentence": "You <em>must wear</em> a seatbelt.",
              "note": "Bắt buộc"
            },
            {
              "sentence": "You <em>mustn't smoke</em> here.",
              "note": "Cấm đoán"
            }
          ]
        },
        {
          "title": "Bài 3: Don't have to & Needn't — Không cần thiết",
          "explanation": "Diễn tả việc KHÔNG bắt buộc phải làm (thích làm thì làm, không làm cũng không sao).",
          "examples": [
            {
              "sentence": "Tomorrow is Sunday, so I <em>don't have to get up</em> early.",
              "note": "Không cần thiết"
            },
            {
              "sentence": "You <em>needn't hurry</em>. We have plenty of time.",
              "note": "Không cần gấp"
            }
          ]
        },
        {
          "title": "Bài 4: Should — Lời khuyên & Ý kiến",
          "explanation": "Dùng \"should / shouldn't + V1\" để đưa ra lời khuyên nên làm gì.",
          "examples": [
            {
              "sentence": "You look tired. You <em>should go</em> to bed.",
              "note": "Lời khuyên"
            },
            {
              "sentence": "You <em>shouldn't eat</em> so much sugar.",
              "note": "Khuyên không nên"
            }
          ]
        },
        {
          "title": "Bài 5: May & Might — Khả năng có thể xảy ra (Possibility)",
          "explanation": "Diễn tả điều gì đó có thể xảy ra ở hiện tại hoặc tương lai (không chắc chắn 100%).",
          "examples": [
            {
              "sentence": "Take an umbrella. It <em>might rain</em> later.",
              "note": "Có thể mưa"
            },
            {
              "sentence": "I <em>may go</em> to the cinema tonight.",
              "note": "Có thể đi"
            }
          ]
        },
        {
          "title": "Bài 6: Would like & Would rather — Sở thích & Sự lựa chọn",
          "explanation": "Would like + to V (muốn); Would rather + V1 (thích... hơn).",
          "examples": [
            {
              "sentence": "I <em>would like</em> a cup of coffee, please.",
              "note": "Yêu cầu lịch sự"
            },
            {
              "sentence": "I <em>would rather stay</em> at home tonight than go out.",
              "note": "Thích ở nhà hơn"
            }
          ]
        },
        {
          "title": "Bài 7: Imperatives — Câu mệnh lệnh & Hướng dẫn",
          "explanation": "Bắt đầu bằng V1 (khẳng định) hoặc Don't + V1 (phủ định) để ra lệnh, hướng dẫn, mời.",
          "examples": [
            {
              "sentence": "<em>Open</em> your books at page 20.",
              "note": "Mệnh lệnh"
            },
            {
              "sentence": "<em>Don't touch</em> that wire!",
              "note": "Cấm/Cảnh báo"
            },
            {
              "sentence": "<em>Have</em> a piece of cake!",
              "note": "Lời mời"
            }
          ]
        },
        {
          "title": "Bài 8: Modals in Politeness — Cách giao tiếp lịch sự",
          "explanation": "Sử dụng Would you mind..., Could you..., May I... trong giao tiếp hàng ngày.",
          "examples": [
            {
              "sentence": "<em>Would you mind closing</em> the window?",
              "note": "Lịch sự (V-ing)"
            },
            {
              "sentence": "<em>May I ask</em> a question?",
              "note": "Xin phép lịch sự"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "You mustn't work on Sunday.",
          "correct": "You don't have to work on Sunday.",
          "tip": "Mustn't là cấm đoán, Don't have to là không cần làm."
        }
      ]
    }
  },
  {
    "id": "beg-there-it",
    "level": "beginner",
    "title": "There and it",
    "subtitle": "3 bài về các dạng từ there",
    "icon": "🌱",
    "order": 108,
    "murphyUnit": "Units 37–39",
    "content": {
      "overview": "3 bài học về chủ ngữ giả \"There\" và \"It\": cách chỉ sự tồn tại, thời tiết, thời gian, khoảng cách và so sánh giữa chúng.",
      "rules": [
        {
          "title": "Bài 1: There is / There are (Hiện tại & Quá khứ)",
          "explanation": "Dùng \"There + be\" để nói về sự tồn tại của người hoặc vật tại một vị trí.",
          "table": {
            "headers": [
              "Thì",
              "Số ít / Không đếm được",
              "Số nhiều"
            ],
            "rows": [
              [
                "Hiện tại",
                "There is a book / water",
                "There are three books"
              ],
              [
                "Quá khứ",
                "There was a party yesterday",
                "There were many people"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "<em>There is</em> a dog in the garden.",
              "note": "Hiện tại số ít"
            },
            {
              "sentence": "<em>There were</em> 50 students in the class.",
              "note": "Quá khứ số nhiều"
            }
          ]
        },
        {
          "title": "Bài 2: Subject \"It\" — Thời gian, Thời tiết, Khoảng cách",
          "explanation": "Dùng \"It\" làm chủ ngữ giả cho thời gian, ngày tháng, thời tiết và khoảng cách.",
          "examples": [
            {
              "sentence": "<em>It is</em> 10 o'clock.",
              "note": "Thời gian"
            },
            {
              "sentence": "<em>It is raining</em> heavily.",
              "note": "Thời tiết"
            },
            {
              "sentence": "<em>It is</em> 5 kilometers from here to the station.",
              "note": "Khoảng cách"
            }
          ]
        },
        {
          "title": "Bài 3: So sánh \"There\" vs \"It\"",
          "explanation": "There = chỉ sự tồn tại lần đầu; It = nhắc lại vật/người đó hoặc làm chủ ngữ giả.",
          "examples": [
            {
              "sentence": "<em>There is</em> a new book on the table. <em>It</em> is very interesting.",
              "note": "There chỉ sự tồn tại, It thay thế cho cuốn sách"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "It has a lot of people here.",
          "correct": "There are a lot of people here.",
          "tip": "Chỉ sự tồn tại dùng \"There is/are\", không dùng \"It has\"."
        }
      ]
    }
  },
  {
    "id": "beg-aux-verbs",
    "level": "beginner",
    "title": "Auxiliary verbs",
    "subtitle": "4 bài riêng về trợ động từ",
    "icon": "🌱",
    "order": 109,
    "murphyUnit": "Units 40–43",
    "content": {
      "overview": "4 bài học về vai trò của trợ động từ (Be, Do, Have): câu trả lời ngắn, câu hỏi đuôi (question tags), và sự đồng tán thành (So do I / Neither do I).",
      "rules": [
        {
          "title": "Bài 1: Trợ động từ trong thì và câu hỏi",
          "explanation": "Ba trợ động từ chính: BE (thì tiếp diễn/bị động), DO (thì đơn), HAVE (thì hoàn thành).",
          "examples": [
            {
              "sentence": "She <em>is</em> working. (BE)",
              "note": "Hiện tại tiếp diễn"
            },
            {
              "sentence": "<em>Do</em> you like coffee? (DO)",
              "note": "Hiện tại đơn"
            },
            {
              "sentence": "They <em>have</em> finished. (HAVE)",
              "note": "Hiện tại hoàn thành"
            }
          ]
        },
        {
          "title": "Bài 2: Short Answers — Câu trả lời ngắn",
          "explanation": "Dùng trợ động từ tương ứng với thì của câu hỏi để trả lời ngắn gọn.",
          "examples": [
            {
              "sentence": "Are you tired? — Yes, I <em>am</em>. / No, I'm <em>not</em>.",
              "note": "Trả lời với Be"
            },
            {
              "sentence": "Did he call? — Yes, he <em>did</em>.",
              "note": "Trả lời với Did"
            }
          ]
        },
        {
          "title": "Bài 3: Basic Question Tags — Câu hỏi đuôi cơ bản",
          "explanation": "Mệnh đề khẳng định -> Đuôi phủ định; Mệnh đề phủ định -> Đuôi khẳng định.",
          "examples": [
            {
              "sentence": "You are a student, <em>aren't you</em>?",
              "note": "Khẳng định -> Đuôi phủ định"
            },
            {
              "sentence": "She doesn't like tea, <em>does she</em>?",
              "note": "Phủ định -> Đuôi khẳng định"
            }
          ]
        },
        {
          "title": "Bài 4: Đồng tán thành với \"So do I\" & \"Neither do I\"",
          "explanation": "So + trợ động từ + S (Đồng ý câu khẳng định); Neither + trợ động từ + S (Đồng ý câu phủ định).",
          "examples": [
            {
              "sentence": "I love football. — <em>So do I</em>.",
              "note": "Đồng ý khẳng định"
            },
            {
              "sentence": "I can't swim. — <em>Neither can I</em>.",
              "note": "Đồng ý phủ định"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I don't like coffee. — So do I.",
          "correct": "I don't like coffee. — Neither do I.",
          "tip": "Đồng ý với mệnh đề phủ định dùng Neither, không dùng So."
        }
      ]
    }
  },
  {
    "id": "beg-questions",
    "level": "beginner",
    "title": "Questions",
    "subtitle": "6 bài về các dạng câu hỏi khác nhau như wh, do…",
    "icon": "🌱",
    "order": 110,
    "murphyUnit": "Units 44–49",
    "content": {
      "overview": "6 bài toàn diện về cấu trúc đặt câu hỏi: Yes/No questions, Wh-questions, Câu hỏi chủ ngữ vs tân ngữ, Giới từ trong câu hỏi, và Indirect questions.",
      "rules": [
        {
          "title": "Bài 1: Yes/No Questions với Be và Do/Does/Did",
          "explanation": "Đảo trợ động từ lên trước chủ ngữ: Trợ động từ + S + V?",
          "examples": [
            {
              "sentence": "<em>Is</em> she at home?",
              "note": "Với Be"
            },
            {
              "sentence": "<em>Does</em> he play tennis?",
              "note": "Với Does"
            },
            {
              "sentence": "<em>Did</em> you buy the car?",
              "note": "Với Did"
            }
          ]
        },
        {
          "title": "Bài 2: Wh- Questions (Từ để hỏi)",
          "explanation": "Wh-word + trợ động từ + S + V? Các từ: Who, What, Where, When, Why, How, Which.",
          "examples": [
            {
              "sentence": "<em>Where do</em> you live?",
              "note": "Hỏi nơi chốn"
            },
            {
              "sentence": "<em>Why are</em> you crying?",
              "note": "Hỏi lý do"
            }
          ]
        },
        {
          "title": "Bài 3: Subject vs Object Questions (Hỏi Chủ ngữ vs Tân ngữ)",
          "explanation": "Khi từ để hỏi (Who/What) làm chủ ngữ -> KHÔNG dùng do/does/did; làm tân ngữ -> CÓ dùng do/does/did.",
          "examples": [
            {
              "sentence": "<em>Who saw</em> you? (Someone saw you -> Who is subject)",
              "note": "Hỏi chủ ngữ"
            },
            {
              "sentence": "<em>Who did</em> you see? (You saw someone -> Who is object)",
              "note": "Hỏi tân ngữ"
            }
          ]
        },
        {
          "title": "Bài 4: Prepositions at the end of Questions (Giới từ ở cuối câu hỏi)",
          "explanation": "Trong giao tiếp tự nhiên, giới từ thường đứng ở cuối câu hỏi.",
          "examples": [
            {
              "sentence": "What are you listening <em>to</em>?",
              "note": "Listen to"
            },
            {
              "sentence": "Where are you from <em>from</em>?",
              "note": "From"
            }
          ]
        },
        {
          "title": "Bài 5: Indirect Questions — Câu hỏi gián tiếp",
          "explanation": "Dùng \"Do you know...\" hoặc \"Could you tell me...\". Sau từ để hỏi, trật tự từ trở lại dạng khẳng định (S + V).",
          "examples": [
            {
              "sentence": "Direct: Where is the bank?",
              "note": "Câu hỏi trực tiếp"
            },
            {
              "sentence": "Indirect: Do you know <em>where the bank is</em>?",
              "note": "Trật tự S + V"
            }
          ]
        },
        {
          "title": "Bài 6: How long / How far / How often / How much",
          "explanation": "Các cụm từ hỏi với \"How\" chỉ độ dài thời gian, khoảng cách, tần suất và giá cả/số lượng.",
          "examples": [
            {
              "sentence": "<em>How long does</em> it take?",
              "note": "Thời lượng"
            },
            {
              "sentence": "<em>How often do</em> you exercise?",
              "note": "Tần suất"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Do you know where is the museum?",
          "correct": "Do you know where the museum is?",
          "tip": "Trong câu hỏi gián tiếp, chủ ngữ đứng trước động từ."
        }
      ]
    }
  },
  {
    "id": "beg-reported-speech",
    "level": "beginner",
    "title": "Reported Speech",
    "subtitle": "1 bài riêng về dạng tường thuật",
    "icon": "🌱",
    "order": 111,
    "murphyUnit": "Unit 50",
    "content": {
      "overview": "1 bài cơ bản về cách tường thuật lại câu nói của người khác (Reported Speech / Indirect Speech) với Said và Told.",
      "rules": [
        {
          "title": "Bài 1: Quy tắc lùi thì & Phân biệt Said vs Told",
          "explanation": "Khi động từ tường thuật ở quá khứ (said/told), thì trong câu trực tiếp lùi 1 thì về quá khứ. Said + (that); Told + tân ngữ + (that).",
          "table": {
            "headers": [
              "Trực tiếp (Direct)",
              "Gián tiếp (Reported)"
            ],
            "rows": [
              [
                "Present Simple (am/is/are/V1)",
                "Past Simple (was/were/V2)"
              ],
              [
                "Present Continuous (am/is/are + V-ing)",
                "Past Continuous (was/were + V-ing)"
              ],
              [
                "Will / Can",
                "Would / Could"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "Direct: Paul said, \"I am tired.\"",
              "note": "Trực tiếp"
            },
            {
              "sentence": "Reported: Paul <em>said that he was tired</em>.",
              "note": "Lùi thì (is -> was)"
            },
            {
              "sentence": "She <em>told me that</em> she loved coffee.",
              "note": "Told + me"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She told that she was ready.",
          "correct": "She said that she was ready. / She told me that she was ready.",
          "tip": "Told phải có tân ngữ chỉ người nghe (told someone)."
        }
      ]
    }
  },
  {
    "id": "beg-ing-to",
    "level": "beginner",
    "title": "Ing and to",
    "subtitle": "4 bài riêng với đuôi – ing và dùng to",
    "icon": "🌱",
    "order": 112,
    "murphyUnit": "Units 51–54",
    "content": {
      "overview": "4 bài về danh động từ (V-ing) và động từ nguyên thể có \"to\" (To-infinitive): cấu trúc Verb + V-ing, Verb + to V, Verb + Object + to V và Preposition + V-ing.",
      "rules": [
        {
          "title": "Bài 1: Verb + -ing (enjoy, mind, stop, finish)",
          "explanation": "Một số động từ theo sau bắt buộc là V-ing: enjoy, mind, stop, finish, suggest, keep, avoid.",
          "examples": [
            {
              "sentence": "I <em>enjoy listening</em> to music.",
              "note": "Enjoy + V-ing"
            },
            {
              "sentence": "Would you <em>mind opening</em> the window?",
              "note": "Mind + V-ing"
            }
          ]
        },
        {
          "title": "Bài 2: Verb + to-infinitive (want, hope, decide, offer)",
          "explanation": "Một số động từ theo sau bắt buộc là To + V1: want, hope, decide, offer, promise, plan, refuse.",
          "examples": [
            {
              "sentence": "We <em>decided to buy</em> a new house.",
              "note": "Decide + to V"
            },
            {
              "sentence": "She <em>wants to become</em> a doctor.",
              "note": "Want + to V"
            }
          ]
        },
        {
          "title": "Bài 3: Verb + Object + to-infinitive (want somebody to do)",
          "explanation": "Cấu trúc: Động từ + Tân ngữ + To V (want sb to do, tell sb to do, ask sb to do, advise sb to do).",
          "examples": [
            {
              "sentence": "My doctor <em>advised me to exercise</em> more.",
              "note": "Advise + object + to V"
            },
            {
              "sentence": "I <em>want you to be</em> happy.",
              "note": "Want + object + to V"
            }
          ]
        },
        {
          "title": "Bài 4: Preposition + -ing (Giới từ + V-ing)",
          "explanation": "Sau tất cả các giới từ (in, at, on, of, for, about, before, after, without) động từ LUÔN chia dạng V-ing.",
          "examples": [
            {
              "sentence": "Are you interested <em>in learning</em> English?",
              "note": "In + V-ing"
            },
            {
              "sentence": "He left <em>without saying</em> goodbye.",
              "note": "Without + V-ing"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I enjoy to play football.",
          "correct": "I enjoy playing football.",
          "tip": "Sau \"enjoy\" dùng V-ing."
        },
        {
          "wrong": "Thank you for help me.",
          "correct": "Thank you for helping me.",
          "tip": "Sau giới từ \"for\" phải dùng V-ing."
        }
      ]
    }
  },
  {
    "id": "beg-go-get-do",
    "level": "beginner",
    "title": "Go, get, do, make and have",
    "subtitle": "4 bài riêng về các động từ này",
    "icon": "🌱",
    "order": 113,
    "murphyUnit": "Units 55–58",
    "content": {
      "overview": "4 bài học sâu về 5 động từ tần suất cao nhất trong tiếng Anh: GO, GET, DO, MAKE và HAVE.",
      "rules": [
        {
          "title": "Bài 1: GO — Cụm từ và cấu trúc thông dụng",
          "explanation": "Go + -ing (hoạt động thể thao/giao lưu: go swimming, go shopping); Go to + nơi chốn; Go home / Go abroad (không có to).",
          "examples": [
            {
              "sentence": "Let's <em>go shopping</em> this afternoon.",
              "note": "Go + V-ing"
            },
            {
              "sentence": "I must <em>go home</em> now.",
              "note": "Go home (không dùng to)"
            }
          ]
        },
        {
          "title": "Bài 2: GET — Đa nghĩa (Biến đổi, Nhận được, Đến nơi, Phương tiện)",
          "explanation": "Get + Adj (trở nên: get tired); Get + Noun (nhận/mua: get a letter); Get to (đến: get to work); Get on/off (lên/xuống xe).",
          "examples": [
            {
              "sentence": "It is <em>getting dark</em>.",
              "note": "Biến đổi trạng thái (+ Adj)"
            },
            {
              "sentence": "I <em>got an email</em> this morning.",
              "note": "Nhận được"
            }
          ]
        },
        {
          "title": "Bài 3: DO vs MAKE — Phân biệt chuẩn xác",
          "explanation": "DO = công việc, nghĩa vụ, hành động chung (do homework, do business, do laundry); MAKE = tạo ra cái mới, sản xuất, nấu nướng (make a cake, make a mistake, make money).",
          "table": {
            "headers": [
              "Đi với DO",
              "Đi với MAKE"
            ],
            "rows": [
              [
                "do homework / do research",
                "make coffee / make tea"
              ],
              [
                "do housework / do dishes",
                "make a mistake / make noise"
              ],
              [
                "do business / do a favor",
                "make money / make a decision"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "I have to <em>do my homework</em>.",
              "note": "Dùng DO"
            },
            {
              "sentence": "Don't <em>make a mistake</em>!",
              "note": "Dùng MAKE"
            }
          ]
        },
        {
          "title": "Bài 4: HAVE — Thói quen, Bữa ăn, Hoạt động",
          "explanation": "Quy tắc & Cấu trúc chính: Have breakfast/lunch/dinner, have a shower, have a good time, have a break, have a baby.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "We <em>had a great time</em> at the party.",
              "note": "Hoạt động trải nghiệm"
            },
            {
              "sentence": "I <em>have a shower</em> every morning.",
              "note": "Thói quen"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I made my homework.",
          "correct": "I did my homework.",
          "tip": "Bài tập nhà dùng \"do homework\"."
        },
        {
          "wrong": "I am going to to home.",
          "correct": "I am going home.",
          "tip": "Không dùng \"to\" trước \"home\"."
        }
      ]
    }
  },
  {
    "id": "beg-pronouns",
    "level": "beginner",
    "title": "Pronouns and possessives",
    "subtitle": "6 bài về các dạng động từ, trợ động từ",
    "icon": "🌱",
    "order": 114,
    "murphyUnit": "Units 59–64",
    "content": {
      "overview": "6 bài về hệ thống Đại từ & Sở hữu trong tiếng Anh: Đại từ nhân xưng, Tính từ sở hữu, Đại từ sở hữu, Đại từ phản xạ, Sở hữu cách ('s) và Chỉ định từ.",
      "rules": [
        {
          "title": "Bài 1: Subject & Object Pronouns (Đại từ làm Chủ ngữ & Tân ngữ)",
          "explanation": "Chủ ngữ (I, you, he, she, it, we, they) đứng trước V; Tân ngữ (me, you, him, her, it, us, them) đứng sau V hoặc giới từ.",
          "examples": [
            {
              "sentence": "<em>He</em> loves <em>her</em>, but <em>she</em> doesn't love <em>him</em>.",
              "note": "Chủ ngữ & Tân ngữ"
            }
          ]
        },
        {
          "title": "Bài 2: Possessive Adjectives (Tính từ sở hữu: my, your, his, her, its, our, their)",
          "explanation": "Luôn đứng TRƯỚC danh từ để chỉ sở hữu.",
          "examples": [
            {
              "sentence": "This is <em>my car</em> and that is <em>her house</em>.",
              "note": "Tính từ sở hữu + Noun"
            }
          ]
        },
        {
          "title": "Bài 3: Possessive Pronouns (Đại từ sở hữu: mine, yours, his, hers, ours, theirs)",
          "explanation": "Đứng ĐỘC LẬP thay thế cho \"Tính từ sở hữu + Danh từ\" để tránh lặp từ.",
          "examples": [
            {
              "sentence": "This shirt is <em>mine</em>, not <em>yours</em>.",
              "note": "Mine = my shirt"
            }
          ]
        },
        {
          "title": "Bài 4: Reflexive Pronouns (Đại từ phản xạ: myself, yourself, himself, themselves)",
          "explanation": "Dùng khi chủ ngữ và tân ngữ là cùng một người/vật.",
          "examples": [
            {
              "sentence": "He cut <em>himself</em> while cooking.",
              "note": "Chủ ngữ & Tân ngữ cùng là \"he\""
            }
          ]
        },
        {
          "title": "Bài 5: Possessive 's / s' (Sở hữu cách người)",
          "explanation": "Danh từ số ít + 's (John's car); Danh từ số nhiều có -s + ' (my parents' house).",
          "examples": [
            {
              "sentence": "This is <em>Mary's coat</em>.",
              "note": "Số ít + 's"
            },
            {
              "sentence": "The <em>students' bags</em> are here.",
              "note": "Số nhiều + '"
            }
          ]
        },
        {
          "title": "Bài 6: Demonstratives — This, That, These, Those",
          "explanation": "This/These (ở gần); That/Those (ở xa).",
          "examples": [
            {
              "sentence": "<em>This</em> is my book (gần), <em>that</em> is yours (xa).",
              "note": "Chỉ định số ít"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "This coat is my.",
          "correct": "This coat is mine. / This is my coat.",
          "tip": "Không dùng tính từ sở hữu \"my\" đứng một mình ở cuối câu."
        }
      ]
    }
  },
  {
    "id": "beg-a-the",
    "level": "beginner",
    "title": "A and the",
    "subtitle": "9 bài riêng về dạng mạo từ này",
    "icon": "🌱",
    "order": 115,
    "murphyUnit": "Units 65–73",
    "content": {
      "overview": "9 bài chuyên sâu về Mạo từ bất định (A/An) và Mạo từ xác định (The) trong tiếng Anh.",
      "rules": [
        {
          "title": "Bài 1: Mạo từ A / An — Cách dùng chuẩn phát âm",
          "explanation": "A + nguyên âm phát âm là phụ âm (a book, a university); An + nguyên âm phát âm là nguyên âm (an apple, an hour).",
          "examples": [
            {
              "sentence": "I bought <em>a university</em> guide and <em>an hour</em> ago.",
              "note": "Phát âm /juː/ dùng a; /aʊə/ dùng an"
            }
          ]
        },
        {
          "title": "Bài 2: A/An vs The — Lần đầu xuất hiện vs Đã xác định",
          "explanation": "Lần đầu nhắc tới dùng A/An; nhắc lại lần thứ hai hoặc cả 2 người đều biết rõ dùng The.",
          "examples": [
            {
              "sentence": "I saw <em>a cat</em>. <em>The cat</em> was sitting on the fence.",
              "note": "Lần 1: a -> Lần 2: the"
            }
          ]
        },
        {
          "title": "Bài 3: The — Các đối tượng duy nhất & Tình huống cụ thể",
          "explanation": "Dùng \"The\" với vật duy nhất (the sun, the moon, the sky, the internet, the earth).",
          "examples": [
            {
              "sentence": "<em>The sun</em> rises in the east.",
              "note": "Vật duy nhất"
            }
          ]
        },
        {
          "title": "Bài 4: Zero Article — Không dùng mạo từ với Danh từ chung",
          "explanation": "KHÔNG dùng \"the\" khi nói chung chung về danh từ số nhiều hoặc không đếm được.",
          "examples": [
            {
              "sentence": "I love <em>music</em> and <em>dogs</em>.",
              "note": "Nói chung chung (Không dùng the)"
            }
          ]
        },
        {
          "title": "Bài 5: The với Địa danh 1 — Sông, Biển, Đại dương, Dãy núi",
          "explanation": "Dùng \"The\" với sông, biển, đại dương, dãy núi, đảo quần thể (the Nile, the Pacific, the Alps).",
          "examples": [
            {
              "sentence": "<em>The Amazon</em> flows into <em>the Atlantic Ocean</em>.",
              "note": "Sông & Đại dương"
            }
          ]
        },
        {
          "title": "Bài 6: The với Địa danh 2 — Quốc gia & Thành phố",
          "explanation": "Thành phố/Quốc gia thường KHÔNG dùng the (Vietnam, Tokyo), TRỪ các quốc gia có Republic, Kingdom, States, số nhiều (the UK, the USA, the Netherlands).",
          "examples": [
            {
              "sentence": "I live in <em>Vietnam</em>, but he lives in <em>the United States</em>.",
              "note": "Quy tắc tên quốc gia"
            }
          ]
        },
        {
          "title": "Bài 7: School, Hospital, Prison, Bed, Work, Home",
          "explanation": "Đến với mục đích chính (học, chữa bệnh, đi ngủ) -> KHÔNG dùng the; đến như vị trí/thăm -> CÓ dùng the.",
          "examples": [
            {
              "sentence": "Ken is in <em>hospital</em>. (Học/điều trị)",
              "note": "Bệnh nhân"
            },
            {
              "sentence": "His wife went to <em>the hospital</em> to visit him.",
              "note": "Người thăm"
            }
          ]
        },
        {
          "title": "Bài 8: The với So sánh nhất & Số thứ tự",
          "explanation": "Luôn có \"the\" trước So sánh nhất (the best) và Số thứ tự (the first, the second).",
          "examples": [
            {
              "sentence": "He is <em>the tallest</em> boy in <em>the first</em> row.",
              "note": "So sánh nhất & Số thứ tự"
            }
          ]
        },
        {
          "title": "Bài 9: Các cụm từ chỉ thời gian cố định đi với mạo từ",
          "explanation": "In the morning / afternoon / evening; At night (không the); Last week / Next year (không the).",
          "examples": [
            {
              "sentence": "I work <em>in the morning</em> and study <em>at night</em>.",
              "note": "Cụm cố định"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The life is beautiful.",
          "correct": "Life is beautiful.",
          "tip": "Khái niệm chung chung \"Life\" không dùng mạo từ \"the\"."
        }
      ]
    }
  },
  {
    "id": "beg-determiners",
    "level": "beginner",
    "title": "Determiners and pronouns",
    "subtitle": "11 bài về dạng từ xác định và đại từ",
    "icon": "🌱",
    "order": 116,
    "murphyUnit": "Units 74–84",
    "content": {
      "overview": "11 bài học về Từ định lượng & Từ xác định: Some, Any, No, None, Much, Many, Little, Few, All, Every, Both, Either, Neither, Another, Other.",
      "rules": [
        {
          "title": "Bài 1: Some & Any",
          "explanation": "Some trong câu khẳng định / lời mời; Any trong câu phủ định & câu hỏi.",
          "examples": [
            {
              "sentence": "I have <em>some money</em>.",
              "note": "Khẳng định"
            },
            {
              "sentence": "Do you have <em>any questions</em>?",
              "note": "Nghi vấn"
            },
            {
              "sentence": "Would you like <em>some coffee</em>?",
              "note": "Lời mời lịch sự"
            }
          ]
        },
        {
          "title": "Bài 2: Any vs No / None",
          "explanation": "No + Noun (bằng negative verb + any); None đứng một mình thay danh từ.",
          "examples": [
            {
              "sentence": "I have <em>no money</em>. = I don't have <em>any money</em>.",
              "note": "No vs Any"
            },
            {
              "sentence": "How much money do you have? — <em>None</em>.",
              "note": "None đứng độc lập"
            }
          ]
        },
        {
          "title": "Bài 3: Much, Many, A lot of",
          "explanation": "Much + N đếm được số ít/không đếm được; Many + N đếm được số nhiều; A lot of + Cả hai.",
          "examples": [
            {
              "sentence": "There isn't <em>much water</em> left.",
              "note": "Không đếm được"
            },
            {
              "sentence": "Are there <em>many students</em>?",
              "note": "Đếm được số nhiều"
            }
          ]
        },
        {
          "title": "Bài 4: (A) Little & (A) Few",
          "explanation": "A little / A few = một chút/ít (hướng tích cực); Little / Few = hầu như không có (hướng tiêu cực).",
          "examples": [
            {
              "sentence": "I have <em>a little money</em>, enough for coffee.",
              "note": "Tích cực"
            },
            {
              "sentence": "He has <em>few friends</em>, he feels lonely.",
              "note": "Tiêu cực (rất ít)"
            }
          ]
        },
        {
          "title": "Bài 5: All, Most, Some, None + of",
          "explanation": "Cấu trúc: Quantifier + of + the / my / them + Noun.",
          "examples": [
            {
              "sentence": "<em>Most of the students</em> passed the exam.",
              "note": "Most of + the + N"
            }
          ]
        },
        {
          "title": "Bài 6: Both, Either, Neither (Cho 2 đối tượng)",
          "explanation": "Both = cả hai; Either = 1 trong 2; Neither = không ai/cái nào trong 2.",
          "examples": [
            {
              "sentence": "<em>Both sisters</em> are tall.",
              "note": "Cả hai"
            },
            {
              "sentence": "<em>Neither of</em> the answers is correct.",
              "note": "Không cái nào"
            }
          ]
        },
        {
          "title": "Bài 7: Every & Each",
          "explanation": "Every = tất cả (xem như nhóm); Each = từng cá thể riêng biệt. Đều đi với N số ít.",
          "examples": [
            {
              "sentence": "<em>Every student</em> has a book.",
              "note": "Số ít"
            },
            {
              "sentence": "<em>Each person</em> was given a gift.",
              "note": "Từng cá thể"
            }
          ]
        },
        {
          "title": "Bài 8: Another vs Other vs Others",
          "explanation": "Another + N số ít (thêm 1 cái nữa); Other + N số nhiều; Others = đại từ số nhiều.",
          "examples": [
            {
              "sentence": "Would you like <em>another cup</em> of tea?",
              "note": "Another + singular N"
            },
            {
              "sentence": "Some people like red, <em>others</em> prefer blue.",
              "note": "Others (đại từ)"
            }
          ]
        },
        {
          "title": "Bài 9: All vs Every vs Everybody / Everything",
          "explanation": "Everybody / Everything đi với động từ số ít; All đứng trước danh từ.",
          "examples": [
            {
              "sentence": "<em>Everybody is</em> ready.",
              "note": "Is (số ít)"
            }
          ]
        },
        {
          "title": "Bài 10: Indefinite Pronouns — Someone, Anything, Nowhere",
          "explanation": "Các đại từ bất định đi với động từ số ít và tính từ đứng sau chúng.",
          "examples": [
            {
              "sentence": "Is there <em>anything interesting</em> on TV?",
              "note": "Tính từ đứng sau"
            }
          ]
        },
        {
          "title": "Bài 11: Quantitative Determiners Summary",
          "explanation": "Bảng tổng hợp cách dùng từ xác định theo loại danh từ.",
          "table": {
            "headers": [
              "Loại Danh từ",
              "Từ Xác định Phù hợp"
            ],
            "rows": [
              [
                "Danh từ đếm được số ít",
                "a/an, every, each, another, this, that"
              ],
              [
                "Danh từ đếm được số nhiều",
                "many, (a) few, both, several, these, those, other"
              ],
              [
                "Danh từ không đếm được",
                "much, (a) little, a great deal of, an amount of"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Every students have books.",
          "correct": "Every student has a book.",
          "tip": "Every đi với danh từ số ít và động từ số ít."
        }
      ]
    }
  },
  {
    "id": "beg-adjectives",
    "level": "beginner",
    "title": "Adjectives and adverbs",
    "subtitle": "8 bài về dạng tính từ và trạng từ",
    "icon": "🌱",
    "order": 117,
    "murphyUnit": "Units 85–92",
    "content": {
      "overview": "8 bài chi tiết về Tính từ & Trạng từ: vị trí, trật tự tính từ, tính từ đuôi -ed/-ing, trạng từ thể cách (-ly), so sánh hơn và so sánh nhất.",
      "rules": [
        {
          "title": "Bài 1: Vị trí & Trật tự Tính từ (Adjective Position & Order)",
          "explanation": "Tính từ đứng trước danh từ hoặc sau To Be / Linking Verbs. Trật tự: Ý kiến -> Kích thước -> Tuổi -> Màu sắc -> Nguồn gốc -> Chất liệu.",
          "examples": [
            {
              "sentence": "A <em>beautiful small old black Italian leather</em> bag.",
              "note": "Trật tự tính từ"
            }
          ]
        },
        {
          "title": "Bài 2: Tính từ đuôi -ed vs -ing",
          "explanation": "-ed = cảm xúc của con người; -ing = tính chất của vật/sự việc.",
          "examples": [
            {
              "sentence": "I am <em>bored</em> with this <em>boring</em> movie.",
              "note": "Bored (cảm xúc) vs Boring (tính chất)"
            }
          ]
        },
        {
          "title": "Bài 3: Trạng từ chỉ thể cách (Adverbs of Manner: -ly)",
          "explanation": "Tính từ + -ly = Trạng từ (quick -> quickly, careful -> carefully). Bổ nghĩa cho động từ.",
          "examples": [
            {
              "sentence": "He drives <em>carefully</em>.",
              "note": "Bổ nghĩa cho drives"
            }
          ]
        },
        {
          "title": "Bài 4: Trạng từ bất quy tắc (Fast, Hard, Late, Well)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "She is a <em>good</em> swimmer. She swims <em>well</em>.",
              "note": "Good (adj) vs Well (adv)"
            }
          ]
        },
        {
          "title": "Bài 5: So sánh hơn (Comparatives: -er / more)",
          "explanation": "Tính từ ngắn + -er + than; More + Tính từ dài + than.",
          "examples": [
            {
              "sentence": "A car is <em>faster than</em> a bicycle.",
              "note": "Short adj (-er)"
            },
            {
              "sentence": "Health is <em>more important than</em> money.",
              "note": "Long adj (more)"
            }
          ]
        },
        {
          "title": "Bài 6: So sánh ngang bằng (As... as) & Không bằng",
          "explanation": "As + adj/adv + as (bằng); Not as / Not so + adj/adv + as (không bằng).",
          "examples": [
            {
              "sentence": "He is <em>as tall as</em> his father.",
              "note": "So sánh bằng"
            }
          ]
        },
        {
          "title": "Bài 7: So sánh nhất (Superlatives: -est / most)",
          "explanation": "The + tính từ ngắn-est; The most + tính từ dài.",
          "examples": [
            {
              "sentence": "Everest is <em>the highest</em> mountain in the world.",
              "note": "Short adj (-est)"
            }
          ]
        },
        {
          "title": "Bài 8: Trạng từ chỉ mức độ (Very, Really, Quite, Too, Enough)",
          "explanation": "Too + Adj (quá... không thể làm); Adj + Enough (đủ... để làm).",
          "examples": [
            {
              "sentence": "The box is <em>too heavy to lift</em>.",
              "note": "Too + adj"
            },
            {
              "sentence": "He is <em>strong enough to carry</em> it.",
              "note": "Adj + enough"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He drives very fastly.",
          "correct": "He drives very fast.",
          "tip": "\"Fast\" vừa là tính từ vừa là trạng từ, không có \"fastly\"."
        }
      ]
    }
  },
  {
    "id": "beg-word-order",
    "level": "beginner",
    "title": "Word order",
    "subtitle": "4 bài về sắp xếp trật tự từ",
    "icon": "🌱",
    "order": 118,
    "murphyUnit": "Units 93–96",
    "content": {
      "overview": "4 bài về trật tự từ chuẩn trong câu tiếng Anh: Cấu trúc S-V-O, Trật tự Nơi chốn & Thời gian, Tân ngữ trực tiếp vs Gián tiếp, và Vị trí trạng từ.",
      "rules": [
        {
          "title": "Bài 1: Trật tự S-V-O (Subject + Verb + Object)",
          "explanation": "Không chen trạng từ hoặc từ khác vào giữa Động từ và Tân ngữ.",
          "examples": [
            {
              "sentence": "❌ I like very much coffee.",
              "note": "Sai"
            },
            {
              "sentence": "✅ I <em>like coffee</em> very much.",
              "note": "Đúng (S + V + O)"
            }
          ]
        },
        {
          "title": "Bài 2: Trật tự Nơi chốn trước Thời gian (Place before Time)",
          "explanation": "Trong câu có cả vị trí và thời gian, Nơi chốn (Place) xếp trước Thời gian (Time).",
          "examples": [
            {
              "sentence": "We arrived <em>at the airport</em> (Place) <em>at 7 o'clock</em> (Time).",
              "note": "Place before Time"
            }
          ]
        },
        {
          "title": "Bài 3: Tân ngữ Trực tiếp & Gián tiếp (Direct & Indirect Objects)",
          "explanation": "Quy tắc & Cấu trúc chính: Give / Send / Buy: Verb + Sb + St (Give me the book) OR Verb + St + to/for + Sb (Give the book to me).. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "He gave <em>her a flower</em>.",
              "note": "Verb + Sb + St"
            },
            {
              "sentence": "He gave <em>a flower to her</em>.",
              "note": "Verb + St + to Sb"
            }
          ]
        },
        {
          "title": "Bài 4: Vị trí Trạng từ tần suất & Trạng từ câu",
          "explanation": "Trạng từ tần suất đứng trước V thường, sau To Be, và giữa Trợ V + V chính.",
          "examples": [
            {
              "sentence": "I have <em>always remembered</em> your advice.",
              "note": "Giữa trợ V và V chính"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I go every day to school.",
          "correct": "I go to school every day.",
          "tip": "Nơi chốn (to school) đứng trước thời gian (every day)."
        }
      ]
    }
  },
  {
    "id": "beg-conjunctions",
    "level": "beginner",
    "title": "Conjunctions and clauses",
    "subtitle": "6 bài về từ liên kết và mệnh đề trong câu",
    "icon": "🌱",
    "order": 119,
    "murphyUnit": "Units 97–102",
    "content": {
      "overview": "6 bài về Liên từ & Mệnh đề: And, But, Or, So, Because, When, While, Before, After, Although, If.",
      "rules": [
        {
          "title": "Bài 1: And, But, Or, So (Liên từ đẳng lập)",
          "explanation": "And (bổ sung), But (tương phản), Or (lựa chọn), So (kết quả).",
          "examples": [
            {
              "sentence": "It was raining, <em>so</em> I took an umbrella.",
              "note": "Chỉ kết quả (so)"
            }
          ]
        },
        {
          "title": "Bài 2: Because, As, Since (Mệnh đề nguyên nhân)",
          "explanation": "Dùng để nêu lý do, nguyên nhân tại sao hành động xảy ra.",
          "examples": [
            {
              "sentence": "I stayed at home <em>because</em> I felt sick.",
              "note": "Chỉ nguyên nhân"
            }
          ]
        },
        {
          "title": "Bài 3: When, While, Before, After, Until (Mệnh đề thời gian)",
          "explanation": "Sau các từ nối thời gian chỉ tương lai, dùng thì Hiện tại đơn (không dùng Will).",
          "examples": [
            {
              "sentence": "I will call you <em>when I arrive</em> at the station.",
              "note": "When + Present Simple"
            }
          ]
        },
        {
          "title": "Bài 4: Although, Even though vs In spite of (Mệnh đề nhượng bộ)",
          "explanation": "Liên từ và từ nối giúp gắn kết các từ, mệnh đề để thể hiện quan hệ logic: FANBOYS cho mệnh đề ngang hàng; because/although cho mệnh đề phụ thuộc; however/therefore cho liên kết câu.",
          "examples": [
            {
              "sentence": "<em>Although it rained</em>, we went out.",
              "note": "Although + Clause"
            },
            {
              "sentence": "<em>In spite of the rain</em>, we went out.",
              "note": "In spite of + Noun"
            }
          ]
        },
        {
          "title": "Bài 5: If clauses (Câu điều kiện Loại 0 & Loại 1)",
          "explanation": "Type 0: If + Present, Present (sự thật); Type 1: If + Present, Will + V1 (tương lai có thể xảy ra).",
          "examples": [
            {
              "sentence": "If you <em>study hard</em>, you <em>will pass</em> the exam.",
              "note": "Điều kiện Loại 1"
            }
          ]
        },
        {
          "title": "Bài 6: To-infinitive & So that chỉ mục đích (Purpose)",
          "explanation": "To + V1 (để làm gì); So that + S + can/could + V1.",
          "examples": [
            {
              "sentence": "I went to the shop <em>to buy</em> milk.",
              "note": "To + V1"
            },
            {
              "sentence": "I saved money <em>so that I could buy</em> a bike.",
              "note": "So that + Clause"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Although it rained, but we went out.",
          "correct": "Although it rained, we went out.",
          "tip": "Không dùng cả \"Although\" và \"but\" trong cùng một câu."
        }
      ]
    }
  },
  {
    "id": "int-present-past",
    "level": "intermediate",
    "title": "Present and past",
    "subtitle": "6 bài về thì hiện tại và quá khứ, thì tiếp diễn",
    "icon": "📚",
    "order": 120,
    "murphyUnit": "Intermediate Units 1–6",
    "content": {
      "overview": "6 bài nâng cao so sánh liên thì giữa Present & Past, các thể tiếp diễn, động từ trạng thái trong ngữ cảnh phức tạp.",
      "rules": [
        {
          "title": "Bài 1: Present Continuous vs Present Simple (Chuyên sâu)",
          "explanation": "Phân tích các trường hợp đặc biệt: thói quen tạm thời, xu hướng hiện tại và các động từ cảm xúc.",
          "examples": [
            {
              "sentence": "You are <em>being</em> very unreasonable today.",
              "note": "Tạm thời hành xử khác thường"
            },
            {
              "sentence": "He <em>is always forgetting</em> his password!",
              "note": "Tần suất phàn nàn"
            }
          ]
        },
        {
          "title": "Bài 2: Past Simple vs Past Continuous trong Văn kể (Narrative)",
          "explanation": "Dùng Past Continuous dựng bối cảnh không gian; Past Simple cho chuỗi sự kiện chính.",
          "examples": [
            {
              "sentence": "The sun <em>was shining</em> and birds <em>were singing</em>. Suddenly, a strange sound <em>echoed</em>.",
              "note": "Bối cảnh vs Sự kiện"
            }
          ]
        },
        {
          "title": "Bài 3: Present Perfect vs Past Simple (Góc nhìn Thời gian)",
          "explanation": "Present Perfect kết nối quá khứ với hiện tại (vẫn còn tác động); Past Simple bị cắt đứt khỏi hiện tại.",
          "examples": [
            {
              "sentence": "Shakespeare <em>wrote</em> 37 plays.",
              "note": "Tác giả đã mất (Past Simple)"
            },
            {
              "sentence": "J.K. Rowling <em>has written</em> many books.",
              "note": "Tác giả còn sống (Present Perfect)"
            }
          ]
        },
        {
          "title": "Bài 4: Stative vs Dynamic Verbs trong thì Tiếp diễn",
          "explanation": "Phân tích sâu các động từ think, look, taste, smell, feel, enjoy, see khi chuyển sang dạng tiếp diễn.",
          "examples": [
            {
              "sentence": "This soup <em>tastes</em> delicious. (State)",
              "note": "Vị của món ăn"
            },
            {
              "sentence": "The chef <em>is tasting</em> the soup. (Dynamic)",
              "note": "Hành động nếm"
            }
          ]
        },
        {
          "title": "Bài 5: Thói quen Quá khứ: Used to vs Would vs Past Simple",
          "explanation": "Used to (hành động & trạng thái cũ); Would (chỉ hành động lặp đi lặp lại trong quá khứ, KHÔNG dùng cho trạng thái); Past Simple (sự kiện đơn lẻ).",
          "table": {
            "headers": [
              "Cấu trúc",
              "Hành động quá khứ",
              "Trạng thái quá khứ"
            ],
            "rows": [
              [
                "Used to",
                "✅ I used to swim every day",
                "✅ I used to live in Paris"
              ],
              [
                "Would",
                "✅ We would visit grandma on Sundays",
                "❌ I would have long hair (SAI)"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "Every summer we <em>would go</em> to the beach.",
              "note": "Would cho hành động quá khứ"
            }
          ]
        },
        {
          "title": "Bài 6: Continuous Aspect for Annoyance (Khó chịu với Always)",
          "explanation": "Diễn tả sự khó chịu lặp đi lặp lại trong quá khứ (was/were always V-ing) và hiện tại (is/are always V-ing).",
          "examples": [
            {
              "sentence": "My roommate <em>was always leaving</em> dirty dishes in the sink.",
              "note": "Bực bội quá khứ"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "When I was young, I would have a dog.",
          "correct": "When I was young, I used to have a dog.",
          "tip": "Would không dùng cho trạng thái hay sở hữu trong quá khứ."
        }
      ]
    }
  },
  {
    "id": "int-present-perfect-past",
    "level": "intermediate",
    "title": "Present perfect and past",
    "subtitle": "12 bài về thì dạng thì hiện tại và quá khứ hoàn thành",
    "icon": "📚",
    "order": 121,
    "murphyUnit": "Intermediate Units 7–18",
    "content": {
      "overview": "12 bài chuyên sâu về thì Hoàn thành (Present Perfect Simple/Continuous, Past Perfect Simple/Continuous) và các cấu trúc đi kèm.",
      "rules": [
        {
          "title": "Bài 1: Present Perfect Simple vs Continuous (Thời lượng vs Kết quả)",
          "explanation": "Công thức: S + have/has + V3/ed. Diễn tả trải nghiệm sống, sự việc vừa mới xảy ra hoặc trạng thái kéo dài từ quá khứ đến hiện tại (thường đi với for/since/just/already/yet).",
          "examples": [
            {
              "sentence": "She has <em>been painting</em> the room all day.",
              "note": "Tập trung vào quá trình"
            },
            {
              "sentence": "She has <em>painted</em> three walls.",
              "note": "Tập trung vào kết quả hoàn thành"
            }
          ]
        },
        {
          "title": "Bài 2: Past Perfect Simple (Had + V3)",
          "explanation": "Xảy ra và hoàn thành TRƯỚC một thời điểm hoặc hành động khác trong quá khứ.",
          "examples": [
            {
              "sentence": "When I arrived at the party, Tom <em>had already gone</em> home.",
              "note": "Xảy ra trước khi I arrived"
            }
          ]
        },
        {
          "title": "Bài 3: Past Perfect Continuous (Had been + V-ing)",
          "explanation": "Diễn tả quá trình kéo dài liên tục trước một thời điểm quá khứ.",
          "examples": [
            {
              "sentence": "We <em>had been walking</em> for two hours when it started to snow.",
              "note": "Quá trình trước quá khứ"
            }
          ]
        },
        {
          "title": "Bài 4: Past Perfect vs Past Simple (Trật tự thời gian)",
          "explanation": "Sử dụng Past Perfect khi đảo trật tự kể chuyện hoặc nhấn mạnh tính trước sau.",
          "examples": [
            {
              "sentence": "I <em>lost</em> my key (1st action). I couldn't get in because I <em>had lost</em> my key.",
              "note": "Lý do xảy ra trước"
            }
          ]
        },
        {
          "title": "Bài 5: Present Perfect với \"This is the first time...\"",
          "explanation": "Cấu trúc: It / This is the first / second time + S + have/has + V3.",
          "examples": [
            {
              "sentence": "This is the first time I <em>have driven</em> a sports car.",
              "note": "Present Perfect"
            }
          ]
        },
        {
          "title": "Bài 6: Past Perfect với \"It was the first time...\"",
          "explanation": "Cấu trúc: It / This was the first time + S + had + V3.",
          "examples": [
            {
              "sentence": "It was the first time she <em>had flown</em> on an airplane.",
              "note": "Past Perfect"
            }
          ]
        },
        {
          "title": "Bài 7: Have been to vs Have gone to",
          "explanation": "Have been to = đã đi và đã trở về; Have gone to = đã đi và chưa về (đang ở đó).",
          "examples": [
            {
              "sentence": "Bill is on holiday. He has <em>gone to</em> Spain.",
              "note": "Đang ở Spain"
            },
            {
              "sentence": "Mary is back home. She has <em>been to</em> Spain.",
              "note": "Đã quay về"
            }
          ]
        },
        {
          "title": "Bài 8: Time words trong Hoàn thành: Already, Yet, Still, Just",
          "explanation": "Still (vẫn chưa - thể hiện sự kinh ngạc/bực bội); Just/Already đứng giữa trợ V và V3.",
          "examples": [
            {
              "sentence": "I sent him an email a week ago, but he <em>still hasn't replied</em>.",
              "note": "Still trong phủ định"
            }
          ]
        },
        {
          "title": "Bài 9: For, Since, Ago, How long trong chuỗi thì",
          "explanation": "For + khoảng; Since + mốc; Ago + Past Simple; How long + Present Perfect.",
          "examples": [
            {
              "sentence": "How long <em>have you known</em> each other?",
              "note": "Present Perfect"
            }
          ]
        },
        {
          "title": "Bài 10: Present Perfect vs Past Simple 2 (Khoảng thời gian chưa xong vs Đã xong)",
          "explanation": "This morning (nếu bây giờ vẫn là buổi sáng -> Present Perfect; nếu đã là buổi chiều -> Past Simple).",
          "examples": [
            {
              "sentence": "I <em>have drunk</em> 3 cups of coffee this morning. (Bây giờ là 10 AM)",
              "note": "Chưa hết buổi sáng"
            },
            {
              "sentence": "I <em>drank</em> 3 cups of coffee this morning. (Bây giờ là 3 PM)",
              "note": "Đã qua buổi sáng"
            }
          ]
        },
        {
          "title": "Bài 11: Hardley... when / No sooner... than với Past Perfect",
          "explanation": "Cấu trúc đảo ngữ nhấn mạnh hai hành động xảy ra nối tiếp nhau ngay lập tức.",
          "examples": [
            {
              "sentence": "Hardly <em>had I stepped</em> out when it started raining.",
              "note": "Hardly + Past Perfect + when"
            },
            {
              "sentence": "No sooner <em>had he left</em> than she arrived.",
              "note": "No sooner + Past Perfect + than"
            }
          ]
        },
        {
          "title": "Bài 12: Future Perfect vs Past Perfect (Đối sánh mốc thời gian)",
          "explanation": "Past Perfect = trước một mốc quá khứ; Future Perfect = trước một mốc tương lai (By next year, I will have finished...).",
          "examples": [
            {
              "sentence": "By the time you arrive tomorrow, I <em>will have finished</em> the report.",
              "note": "Future Perfect"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "When I arrived, the train left.",
          "correct": "When I arrived, the train had left.",
          "tip": "Tàu chạy trước khi tôi tới -> phải dùng Past Perfect."
        }
      ]
    }
  },
  {
    "id": "int-future",
    "level": "intermediate",
    "title": "Future",
    "subtitle": "7 bài về dạng thì tương lai",
    "icon": "📚",
    "order": 122,
    "murphyUnit": "Intermediate Units 19–25",
    "content": {
      "overview": "7 bài chuyên sâu về tất cả các cấu trúc Tương lai (Simple, Continuous, Perfect, Perfect Continuous, Time clauses, Be about to / Be to).",
      "rules": [
        {
          "title": "Bài 1: Present Continuous & Present Simple cho Tương lai",
          "explanation": "Present Continuous (lịch cá nhân); Present Simple (thời gian biểu công cộng, tàu xe, lịch học).",
          "examples": [
            {
              "sentence": "The train <em>leaves</em> at 7:30 tomorrow morning.",
              "note": "Lịch trình tàu xe (Simple)"
            },
            {
              "sentence": "I <em>am seeing</em> the dentist at 4 PM.",
              "note": "Cuộc hẹn cá nhân (Continuous)"
            }
          ]
        },
        {
          "title": "Bài 2: Will vs Be Going To (Phân tích Ngữ cảnh Phức tạp)",
          "explanation": "Dự đoán: Will (dựa vào nhận định/kinh nghiệm); Be going to (dựa vào dấu hiệu trực quan ngay trước mắt).",
          "examples": [
            {
              "sentence": "I think AI <em>will change</em> the world.",
              "note": "Dự đoán ý kiến"
            },
            {
              "sentence": "Look! That wall <em>is going to fall</em>!",
              "note": "Dấu hiệu hiện tại"
            }
          ]
        },
        {
          "title": "Bài 3: Future Continuous (Will be + V-ing)",
          "explanation": "Diễn tả hành động sẽ đang diễn ra tại một điểm thời điểm cụ thể trong tương lai.",
          "examples": [
            {
              "sentence": "This time next week, I <em>will be lying</em> on a beach in Hawaii.",
              "note": "Hành động đang diễn ra trong tương lai"
            }
          ]
        },
        {
          "title": "Bài 4: Future Perfect (Will have + V3)",
          "explanation": "Hành động sẽ hoàn tất TRƯỚC một mốc thời gian trong tương lai (By + time).",
          "examples": [
            {
              "sentence": "By 2030, scientists <em>will have found</em> a cure for cancer.",
              "note": "Hoàn thành trước mốc 2030"
            }
          ]
        },
        {
          "title": "Bài 5: Future Perfect Continuous (Will have been + V-ing)",
          "explanation": "Nhấn mạnh khoảng thời gian kéo dài của hành động tính đến một điểm trong tương lai.",
          "examples": [
            {
              "sentence": "By December, I <em>will have been working</em> here for 5 years.",
              "note": "Tính thời lượng đến mốc tương lai"
            }
          ]
        },
        {
          "title": "Bài 6: Subordinate Time Clauses for Future (When, As soon as, Until)",
          "explanation": "Trong mệnh đề chỉ thời gian tương lai, KHÔNG dùng Will, phải dùng Present Simple hoặc Present Perfect.",
          "examples": [
            {
              "sentence": "I will call you as soon as I <em>arrive</em> (NOT will arrive).",
              "note": "As soon as + Present Simple"
            }
          ]
        },
        {
          "title": "Bài 7: Expressions of Future: Be about to / Be due to / Be to",
          "explanation": "Be about to + V1 (sắp sửa); Be due to + V1 (theo kế hoạch/dự kiến); Be to + V1 (mệnh lệnh/chỉ thị chính thức).",
          "examples": [
            {
              "sentence": "Hurry up! The plane <em>is about to take off</em>.",
              "note": "Sắp sửa xảy ra ngay"
            },
            {
              "sentence": "The President <em>is to visit</em> Vietnam next month.",
              "note": "Thông báo chính thức"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I will call you when I will reach home.",
          "correct": "I will call you when I reach home.",
          "tip": "Không dùng \"will\" trong mệnh đề chỉ thời gian sau when, as soon as."
        }
      ]
    }
  },
  {
    "id": "int-modals",
    "level": "intermediate",
    "title": "Modals verb",
    "subtitle": "7 bài chi tiết theo từng dạng từ khuyết thiếu",
    "icon": "📚",
    "order": 123,
    "murphyUnit": "Intermediate Units 26–32",
    "content": {
      "overview": "7 bài học toàn diện về Động từ khuyết thiếu trung cấp: Khả năng (Ability), Bắt buộc (Obligation), Lời khuyên, Khả năng xảy ra và Suy đoán quá khứ.",
      "rules": [
        {
          "title": "Bài 1: Ability — Can, Could, Be able to",
          "explanation": "Can/Could (khả năng chung); Was/Were able to (thực hiện thành công trong tình huống cụ thể).",
          "examples": [
            {
              "sentence": "Although the fire was big, everyone <em>was able to escape</em>.",
              "note": "Thành công trong tình huống cụ thể"
            }
          ]
        },
        {
          "title": "Bài 2: Obligation & Necessity — Must, Have to, Need to",
          "explanation": "Must (bắt buộc từ bản thân/chủ quan); Have to (bắt buộc từ luật lệ/khách quan).",
          "examples": [
            {
              "sentence": "I <em>must study</em> harder. (Tôi tự thấy thế)",
              "note": "Bắt buộc chủ quan"
            },
            {
              "sentence": "In the UK, drivers <em>have to drive</em> on the left.",
              "note": "Luật lệ khách quan"
            }
          ]
        },
        {
          "title": "Bài 3: Absence of Obligation & Prohibition — Mustn't vs Don't have to vs Needn't",
          "explanation": "Mustn't = cấm đoán; Don't have to / Needn't = không bắt buộc.",
          "examples": [
            {
              "sentence": "You <em>mustn't tell</em> anyone. It's a secret.",
              "note": "Cấm"
            },
            {
              "sentence": "You <em>don't have to pay</em> now. You can pay later.",
              "note": "Tùy chọn"
            }
          ]
        },
        {
          "title": "Bài 4: Advice & Duty — Should, Ought to, Had better",
          "explanation": "Had better + V1 (nên làm, nếu không sẽ có hậu quả xấu).",
          "examples": [
            {
              "sentence": "You <em>had better leave</em> now or you'll miss the bus.",
              "note": "Had better"
            }
          ]
        },
        {
          "title": "Bài 5: Possibility — May, Might, Could (Hiện tại & Tương lai)",
          "explanation": "May / Might / Could + V1 diễn tả khả năng 30-50% điều gì đó xảy ra.",
          "examples": [
            {
              "sentence": "It <em>might rain</em> later, take a raincoat.",
              "note": "Có thể"
            }
          ]
        },
        {
          "title": "Bài 6: Modals of Deduction (Hiện tại) — Must, Can't, Could",
          "explanation": "Must be (chắc chắn đúng 99%); Can't be (chắc chắn sai/không thể 99%).",
          "examples": [
            {
              "sentence": "He has 3 cars. He <em>must be</em> rich.",
              "note": "Suy đoán 99% đúng"
            },
            {
              "sentence": "She just ate. She <em>can't be</em> hungry already.",
              "note": "Suy đoán 99% không thể"
            }
          ]
        },
        {
          "title": "Bài 7: Modals of Deduction (Quá khứ) — Must have, Can't have, Should have",
          "explanation": "Must have + V3 (chắc là đã); Can't have + V3 (chắc là đã không); Should have + V3 (lẽ ra nên làm nhưng không làm).",
          "examples": [
            {
              "sentence": "The ground is wet. It <em>must have rained</em> last night.",
              "note": "Suy đoán quá khứ"
            },
            {
              "sentence": "You <em>should have told</em> me the truth!",
              "note": "Trách móc/Tiếc nuối quá khứ"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "You should to go home.",
          "correct": "You should go home.",
          "tip": "Sau modal verbs (can, must, should) không dùng \"to\"."
        }
      ]
    }
  },
  {
    "id": "int-if-wish",
    "level": "intermediate",
    "title": "If and wish",
    "subtitle": "4 bài chi tiết riêng về if – wish",
    "icon": "📚",
    "order": 124,
    "murphyUnit": "Intermediate Units 38–41",
    "content": {
      "overview": "4 bài nâng cao về Câu điều kiện (Type 1, Type 2, Type 3, Mixed) và Cấu trúc Ước ước (Wish & If only).",
      "rules": [
        {
          "title": "Bài 1: Conditionals Type 1 & Type 2 (Thực tế vs Trái với thực tế hiện tại)",
          "explanation": "Câu điều kiện diễn tả mối quan hệ giữa điều kiện và kết quả: Loại 0 (chân lý), Loại 1 (có thật ở hiện tại/tương lai), Loại 2 (giả định trái hiện tại), Loại 3 (giả định trái quá khứ).",
          "examples": [
            {
              "sentence": "If I <em>have</em> time, I <em>will visit</em> you.",
              "note": "Loại 1 (Có thật)"
            },
            {
              "sentence": "If I <em>were</em> rich, I <em>would buy</em> an island.",
              "note": "Loại 2 (Giả định hiện tại)"
            }
          ]
        },
        {
          "title": "Bài 2: Conditional Type 3 (Trái ngược quá khứ)",
          "explanation": "Cấu trúc: If + Past Perfect (had + V3), Would have + V3.",
          "examples": [
            {
              "sentence": "If I <em>had studied</em> harder, I <em>would have passed</em> the exam.",
              "note": "Giả định trái quá khứ"
            }
          ]
        },
        {
          "title": "Bài 3: Mixed Conditionals (Câu điều kiện hỗn hợp)",
          "explanation": "Quá khứ ảnh hưởng Hiện tại: If + Had + V3, Would + V1; Hiện tại ảnh hưởng Quá khứ: If + Past Simple, Would have + V3.",
          "examples": [
            {
              "sentence": "If I <em>had taken</em> the map (Past), I <em>wouldn't be</em> lost now (Present).",
              "note": "Hỗn hợp 3 - 2"
            }
          ]
        },
        {
          "title": "Bài 4: Wish & If only (Ước cho Hiện tại, Quá khứ & Thói quen)",
          "explanation": "Wish + Past Simple (ước cho hiện tại); Wish + Past Perfect (tiếc nuối quá khứ); Wish + Would + V1 (muốn ai thay đổi thói quen).",
          "examples": [
            {
              "sentence": "I wish I <em>spoke</em> French.",
              "note": "Ước cho hiện tại"
            },
            {
              "sentence": "I wish I <em>hadn't bought</em> that car.",
              "note": "Tiếc nuối quá khứ"
            },
            {
              "sentence": "I wish you <em>would stop</em> smoking!",
              "note": "Yêu cầu thay đổi thói quen"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "If I will see him, I will give him the note.",
          "correct": "If I see him, I will give him the note.",
          "tip": "Không dùng \"will\" trong mệnh đề IF."
        }
      ]
    }
  },
  {
    "id": "int-passive",
    "level": "intermediate",
    "title": "Passive",
    "subtitle": "6 bài về câu bị động",
    "icon": "📚",
    "order": 125,
    "murphyUnit": "Intermediate Units 42–46",
    "content": {
      "overview": "6 bài chuyên sâu về Câu bị động ở các thì phức tạp, bị động với động từ khuyết thiếu, bị động 2 tân ngữ, bị động truyền dụng (Have/Get done) và Bị động gián tiếp.",
      "rules": [
        {
          "title": "Bài 1: Passive in Continuous & Perfect Tenses",
          "explanation": "Công thức bị động: S + be + V3/ed (+ by tác nhân). Dùng khi đối tượng chịu tác động hoặc bản thân hành động quan trọng hơn người thực hiện.",
          "examples": [
            {
              "sentence": "The house <em>is being painted</em> right now.",
              "note": "Hiện tại tiếp diễn bị động"
            },
            {
              "sentence": "The application <em>has been approved</em>.",
              "note": "Hiện tại hoàn thành bị động"
            }
          ]
        },
        {
          "title": "Bài 2: Passive with Modal Verbs",
          "explanation": "Động từ khuyết thiếu (Can, Could, Must, Should, May, Might) bổ sung ý nghĩa về khả năng, sự cho phép, nghĩa vụ bắt buộc, lời khuyên hoặc sự suy đoán logic. Theo sau luôn là động từ nguyên mẫu không 'to'.",
          "examples": [
            {
              "sentence": "The form <em>must be filled</em> in ink.",
              "note": "Must be + V3"
            },
            {
              "sentence": "The report <em>should have been sent</em> yesterday.",
              "note": "Should have been + V3"
            }
          ]
        },
        {
          "title": "Bài 3: Passives with Two Objects (2 Tân ngữ)",
          "explanation": "Verbs like give, send, show, pay, offer: Ưu tiên đưa tân ngữ chỉ người lên làm chủ ngữ bị động.",
          "examples": [
            {
              "sentence": "Active: They gave me a reward.",
              "note": "Chủ động"
            },
            {
              "sentence": "Passive 1: I <em>was given</em> a reward. (Ưu tiên)",
              "note": "Bị động chỉ người"
            },
            {
              "sentence": "Passive 2: A reward <em>was given to</em> me.",
              "note": "Bị động chỉ vật"
            }
          ]
        },
        {
          "title": "Bài 4: Impersonal & Reporting Passives (It is said that...)",
          "explanation": "Cấu trúc: It is reported/said/believed that + Clause OR Subject + is reported/said + to-infinitive.",
          "examples": [
            {
              "sentence": "<em>It is believed that</em> the company is expanding.",
              "note": "Cấu trúc It is said..."
            },
            {
              "sentence": "The company <em>is believed to be expanding</em>.",
              "note": "Chủ ngữ + to-infinitive"
            }
          ]
        },
        {
          "title": "Bài 5: Causative Passive — Have / Get something done",
          "explanation": "Nhờ hoặc thuê ai đó làm gì cho mình: Have / Get + Tân ngữ vật + V3/ed.",
          "examples": [
            {
              "sentence": "I <em>had my car repaired</em> yesterday.",
              "note": "Thuê thợ sửa xe"
            },
            {
              "sentence": "She <em>is getting her hair cut</em> tomorrow.",
              "note": "Đi cắt tóc"
            }
          ]
        },
        {
          "title": "Bài 6: Passive Prepositions & Verbs without Passive",
          "explanation": "Phân biệt \"by + tác nhân thực hiện\" và \"with + công cụ/nguyên liệu\". Động từ nội công (happen, die, arrive) KHÔNG có dạng bị động.",
          "examples": [
            {
              "sentence": "The door was opened <em>with a key</em> by John.",
              "note": "With + công cụ, By + người"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "An accident was happened yesterday.",
          "correct": "An accident happened yesterday.",
          "tip": "Nội động từ \"happen\" không chia bị động."
        }
      ]
    }
  },
  {
    "id": "int-reported-speech",
    "level": "intermediate",
    "title": "Reported speech",
    "subtitle": "2 bài về câu tường thuật",
    "icon": "📚",
    "order": 126,
    "murphyUnit": "Intermediate Units 47–48",
    "content": {
      "overview": "2 bài chuyên sâu về Câu tường thuật: Quy tắc lùi thì phức tạp, Tường thuật câu hỏi, Mệnh lệnh và Động từ tường thuật chuyên biệt (Reporting Verbs).",
      "rules": [
        {
          "title": "Bài 1: Tường thuật Mệnh đề & Câu hỏi (Reported Questions)",
          "explanation": "Hỏi Yes/No: dùng If / Whether; Hỏi Wh-: giữ nguyên từ để hỏi. Đưa về trật tự khẳng định S + V (không đảo trợ V).",
          "examples": [
            {
              "sentence": "Direct: \"Where do you live?\"",
              "note": "Trực tiếp"
            },
            {
              "sentence": "Reported: He asked me <em>where I lived</em>.",
              "note": "Trật tự S + V"
            },
            {
              "sentence": "Direct: \"Are you hungry?\" -> He asked <em>if I was hungry</em>.",
              "note": "Dùng If"
            }
          ]
        },
        {
          "title": "Bài 2: Advanced Reporting Verbs (Động từ tường thuật phân loại)",
          "explanation": "Bảng cấu trúc các động từ tường thuật đặc biệt.",
          "table": {
            "headers": [
              "Cấu trúc",
              "Động từ tường thuật đi kèm"
            ],
            "rows": [
              [
                "Verb + to-infinitive",
                "offer, promise, refuse, agree, threaten"
              ],
              [
                "Verb + object + to-infinitive",
                "advise, encourage, invite, remind, warn, order"
              ],
              [
                "Verb + -ing",
                "admit, deny, suggest, recommend"
              ],
              [
                "Verb + preposition + -ing",
                "apologize for, insist on, accuse sb of"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "He <em>promised to call</em> me later.",
              "note": "Promise + to V"
            },
            {
              "sentence": "She <em>suggested going</em> to the beach.",
              "note": "Suggest + V-ing"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He suggested me to go home.",
          "correct": "He suggested that I should go home. / He suggested going home.",
          "tip": "Suggest không dùng dạng suggest + obj + to-infinitive."
        }
      ]
    }
  },
  {
    "id": "int-questions-aux",
    "level": "intermediate",
    "title": "Questions and auxiliary verbs",
    "subtitle": "4 bài riêng về từng dạng câu hỏi",
    "icon": "📚",
    "order": 127,
    "murphyUnit": "Intermediate Units 49–52",
    "content": {
      "overview": "4 bài về Đặt câu hỏi nâng cao: Câu hỏi lồng (Embedded questions), Câu hỏi đuôi (Question tags phức tạp), Câu đáp trợ động từ và Ngữ điệu.",
      "rules": [
        {
          "title": "Bài 1: Embedded Questions (Câu hỏi lồng / Gián tiếp)",
          "explanation": "Khi câu hỏi đứng sau I wonder, Could you tell me, Do you have any idea: dùng trật tự khẳng định S + V.",
          "examples": [
            {
              "sentence": "I wonder <em>why she was late</em>.",
              "note": "S + V"
            },
            {
              "sentence": "Could you tell me <em>what time the train leaves</em>?",
              "note": "S + V"
            }
          ]
        },
        {
          "title": "Bài 2: Advanced Question Tags (Câu hỏi đuôi nâng cao)",
          "explanation": "Trường hợp đặc biệt: I am -> aren't I?; Let's -> shall we?; Imperative -> will you?; Nobody/Someone -> they.",
          "table": {
            "headers": [
              "Mệnh đề chính",
              "Đuôi tương ứng"
            ],
            "rows": [
              [
                "I am right",
                "..., aren't I?"
              ],
              [
                "Let's go",
                "..., shall we?"
              ],
              [
                "Open the door",
                "..., will you / would you?"
              ],
              [
                "Nobody phoned",
                "..., did they?"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "I'm late, <em>aren't I</em>?",
              "note": "Aren't I"
            },
            {
              "sentence": "Nobody came, <em>did they</em>?",
              "note": "Nobody -> positive tag + they"
            }
          ]
        },
        {
          "title": "Bài 3: Echo Questions & Expressing Surprise",
          "explanation": "Dùng câu hỏi lặp lại trợ động từ để thể hiện sự bất ngờ hoặc quan tâm (You do? Did she?).",
          "examples": [
            {
              "sentence": "I got married yesterday. — <em>Did you?</em> Congratulations!",
              "note": "Trợ V nhấn mạnh"
            }
          ]
        },
        {
          "title": "Bài 4: Negative Questions (Câu hỏi phủ định)",
          "explanation": "Dùng Don't / Haven't / Isn't ở đầu câu hỏi để thể hiện sự ngạc nhiên hoặc mong đợi sự đồng ý.",
          "examples": [
            {
              "sentence": "<em>Haven't you seen</em> that film yet? It's famous!",
              "note": "Thể hiện ngạc nhiên"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Do you know what is his name?",
          "correct": "Do you know what his name is?",
          "tip": "Giữ trật tự S + V trong câu hỏi lồng."
        }
      ]
    }
  },
  {
    "id": "int-ing-to",
    "level": "intermediate",
    "title": "Ing and to",
    "subtitle": "16 bài về dạng từ theo đuôi ing và to",
    "icon": "📚",
    "order": 128,
    "murphyUnit": "Intermediate Units 53–68",
    "content": {
      "overview": "16 bài toàn diện nhất về Gerunds (-ing) & Infinitives (To-V / Bare V), sự thay đổi nghĩa của động từ, thành ngữ đi kèm V-ing và Phân từ (Participles).",
      "rules": [
        {
          "title": "Bài 1: Verb + -ing (Gerunds làm tân ngữ)",
          "explanation": "Các động từ: enjoy, mind, stop, finish, suggest, avoid, fancy, consider, admit, deny, postpone, risk.",
          "examples": [
            {
              "sentence": "Have you <em>considered studying</em> abroad?",
              "note": "Consider + V-ing"
            }
          ]
        },
        {
          "title": "Bài 2: Verb + to-infinitive",
          "explanation": "Các động từ: offer, decide, hope, deserve, promise, agree, plan, manage, afford, threaten, refuse.",
          "examples": [
            {
              "sentence": "We can't <em>afford to buy</em> a new car.",
              "note": "Afford + to V"
            }
          ]
        },
        {
          "title": "Bài 3: Verb + Object + to-infinitive",
          "explanation": "Cấu trúc: Verb + sb + to V: advise, allow, enable, encourage, invite, order, remind, warn, expect.",
          "examples": [
            {
              "sentence": "Her father <em>encouraged her to study</em> law.",
              "note": "Encourage + sb + to V"
            }
          ]
        },
        {
          "title": "Bài 4: Verb + Bare Infinitive (Make, Let, See, Hear)",
          "explanation": "Make sb do st, Let sb do st; See / Hear / Watch sb do st (thấy toàn bộ hành động).",
          "examples": [
            {
              "sentence": "Hot weather <em>makes me feel</em> tired.",
              "note": "Make + bare V"
            },
            {
              "sentence": "Let me <em>help</em> you.",
              "note": "Let + bare V"
            }
          ]
        },
        {
          "title": "Bài 5: Verb + -ing hoặc To-infinitive (NGHĨA KHÔNG ĐỔI)",
          "explanation": "Begin, start, continue, intend, bother: có thể dùng cả V-ing lẫn To-V mà không đổi nghĩa.",
          "examples": [
            {
              "sentence": "It started <em>raining</em>. = It started <em>to rain</em>.",
              "note": "Giống nghĩa"
            }
          ]
        },
        {
          "title": "Bài 6: Group Đổi Nghĩa 1 — Remember / Forget",
          "explanation": "Remember/Forget + V-ing (nhớ/quên việc ĐÃ làm trong quá khứ); Remember/Forget + To V (nhớ/quên việc PHẢI làm).",
          "examples": [
            {
              "sentence": "I remember <em>locking</em> the door. (Đã khóa)",
              "note": "V-ing (quá khứ)"
            },
            {
              "sentence": "Remember <em>to lock</em> the door! (Phải khóa)",
              "note": "To V (nhiệm vụ)"
            }
          ]
        },
        {
          "title": "Bài 7: Group Đổi Nghĩa 2 — Regret / Stop / Try",
          "explanation": "Regret + V-ing (hối hận việc đã làm); Regret + to say/inform (lấy làm tiếc phải nói); Stop + V-ing (dừng hẳn việc đang làm); Stop + to V (dừng lại ĐỂ làm việc khác); Try + V-ing (thử nghiệm); Try + to V (cố gắng).",
          "examples": [
            {
              "sentence": "I stopped <em>smoking</em> 3 years ago. (Bỏ thuốc)",
              "note": "Stop + V-ing"
            },
            {
              "sentence": "He stopped <em>to tie</em> his shoelaces. (Dừng lại để buộc dây)",
              "note": "Stop + to V"
            }
          ]
        },
        {
          "title": "Bài 8: Group Đổi Nghĩa 3 — Mean / Need / Go on",
          "explanation": "Mean + to V (có ý định); Mean + V-ing (có nghĩa là/dẫn đến); Need + to V (chủ động); Need + V-ing (bị động = need to be done).",
          "examples": [
            {
              "sentence": "The car needs <em>washing</em>. (= needs to be washed)",
              "note": "Need + V-ing (Bị động)"
            }
          ]
        },
        {
          "title": "Bài 9: Prefer vs Would rather vs Would prefer",
          "explanation": "Quy tắc & Cấu trúc chính: Prefer V-ing to V-ing; Would prefer to V rather than V; Would rather V than V.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "I <em>prefer reading to watching</em> TV.",
              "note": "Prefer V-ing to V-ing"
            },
            {
              "sentence": "I <em>would rather stay</em> home <em>than go</em> out.",
              "note": "Would rather V than V"
            }
          ]
        },
        {
          "title": "Bài 10: Preposition + -ing (Cụm động từ + Giới từ)",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "I am <em>looking forward to meeting</em> you.",
              "note": "Look forward to + V-ing (to là giới từ)"
            }
          ]
        },
        {
          "title": "Bài 11: Thành ngữ đi với -ing (It's no use, Worth, Point)",
          "explanation": "Quy tắc & Cấu trúc chính: It's no use V-ing, It's no good V-ing, There's no point in V-ing, Be worth V-ing.. Hãy chú ý áp dụng đúng dạng từ, sự phối thì và ngữ cảnh khi đặt câu.",
          "examples": [
            {
              "sentence": "It's no use <em>crying</em> over spilt milk.",
              "note": "Cấu trúc cố định"
            },
            {
              "sentence": "This book is <em>worth reading</em>.",
              "note": "Worth + V-ing"
            }
          ]
        },
        {
          "title": "Bài 12: Adjective + to-infinitive",
          "explanation": "Tính từ cảm xúc & đánh giá: easy, difficult, hard, impossible, glad, pleased, disappointed + To V.",
          "examples": [
            {
              "sentence": "It is <em>difficult to learn</em> Japanese.",
              "note": "Adj + to V"
            }
          ]
        },
        {
          "title": "Bài 13: To-infinitive chỉ Mục đích (Purpose)",
          "explanation": "To V / In order to V / So as to V (chỉ mục đích làm gì).",
          "examples": [
            {
              "sentence": "He got up early <em>in order to catch</em> the first train.",
              "note": "Mục đích"
            }
          ]
        },
        {
          "title": "Bài 14: Continuous, Perfect & Passive Infinitives",
          "explanation": "To be doing (tiếp diễn), To have done (hoàn thành), To be done (bị động).",
          "examples": [
            {
              "sentence": "He seems <em>to be working</em> hard.",
              "note": "To be V-ing"
            },
            {
              "sentence": "I am glad <em>to have met</em> you.",
              "note": "To have V3"
            }
          ]
        },
        {
          "title": "Bài 15: Participle Clauses (-ing & -ed Clauses)",
          "explanation": "Rút gọn mệnh đề dùng V-ing (chủ động) hoặc V3/ed (bị động) khi 2 mệnh đề cùng chủ ngữ.",
          "examples": [
            {
              "sentence": "<em>Feeling tired</em>, I went to bed early.",
              "note": "V-ing clause"
            },
            {
              "sentence": "<em>Built in 1920</em>, the house needs repair.",
              "note": "Past participle clause"
            }
          ]
        },
        {
          "title": "Bài 16: Gerund as Subject & Complement",
          "explanation": "Danh động từ làm chủ ngữ (Learning grammar is useful) hoặc làm vị ngữ (My hobby is collecting stamps).",
          "examples": [
            {
              "sentence": "<em>Swimming</em> is great exercise.",
              "note": "Gerund làm chủ ngữ"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "I am looking forward to see you.",
          "correct": "I am looking forward to seeing you.",
          "tip": "Trong \"look forward to\", \"to\" là giới từ nên động từ đi sau là V-ing."
        }
      ]
    }
  },
  {
    "id": "int-articles-nouns",
    "level": "intermediate",
    "title": "Articles and nouns",
    "subtitle": "13 bài riêng về mạo từ và danh từ",
    "icon": "📚",
    "order": 129,
    "murphyUnit": "Intermediate Units 69–81",
    "content": {
      "overview": "13 bài chuyên sâu về Danh từ đếm được/không đếm được, Mạo từ A/An/The phức tạp, Danh từ ghép và Danh từ tập hợp.",
      "rules": [
        {
          "title": "Bài 1: Danh từ Đếm được vs Không đếm được (Chuyên sâu)",
          "explanation": "Danh từ không đếm được thông dụng: advice, information, news, baggage, furniture, weather, traffic, accommodation, progress.",
          "examples": [
            {
              "sentence": "He gave me a valuable piece of <em>advice</em>.",
              "note": "Piece of advice"
            }
          ]
        },
        {
          "title": "Bài 2: Danh từ Vừa đếm được Vừa không đếm được (Đổi nghĩa)",
          "explanation": "Coffee (cà phê nói chung vs 1 tách cà phê); Paper (giấy vs tờ báo/bài báo); Glass (thủy tinh vs cái ly).",
          "examples": [
            {
              "sentence": "I need some <em>paper</em> to write on. (Uncountable)",
              "note": "Giấy"
            },
            {
              "sentence": "I bought a <em>paper</em>. (Countable = a newspaper)",
              "note": "Tờ báo"
            }
          ]
        },
        {
          "title": "Bài 3: Danh từ Số ít có Động từ Số nhiều (Collective Nouns)",
          "explanation": "Government, team, family, audience, staff có thể chia số nhiều nếu coi là từng cá nhân.",
          "examples": [
            {
              "sentence": "The team <em>are wearing</em> their new uniforms.",
              "note": "Từng thành viên"
            }
          ]
        },
        {
          "title": "Bài 4: Compound Nouns & Possessive ('s vs Of)",
          "explanation": "Vật + Vật: Dùng danh từ ghép (bus stop) hoặc Of (the roof of the house); Người + Vật: Dùng 's (Tom's car).",
          "examples": [
            {
              "sentence": "The <em>leg of the table</em> was broken.",
              "note": "Vật + Of + Vật"
            }
          ]
        },
        {
          "title": "Bài 5: A/An vs The trong Ngữ cảnh Phức tạp",
          "explanation": "A/An để phân loại nghề nghiệp hoặc tính chất; The dùng khi đối tượng được xác định bởi mệnh đề theo sau.",
          "examples": [
            {
              "sentence": "The man <em>who called you</em> is outside.",
              "note": "Được xác định bởi who clause"
            }
          ]
        },
        {
          "title": "Bài 6: Mạo từ với Tên Địa danh & Đại lý",
          "explanation": "Quy tắc dùng The với oceans, seas, rivers, canals, deserts, island groups, mountain ranges.",
          "examples": [
            {
              "sentence": "<em>The Alps</em> are in Europe.",
              "note": "Dãy núi"
            }
          ]
        },
        {
          "title": "Bài 7: Institutions — School, Prison, Hospital, University, Church",
          "explanation": "Phân biệt đi học/đi chữa bệnh (không the) và đi làm việc khác tại tòa nhà đó (có the).",
          "examples": [
            {
              "sentence": "He went to <em>university</em> at 18.",
              "note": "Học đại học"
            }
          ]
        },
        {
          "title": "Bài 8: Khái niệm Khái quát không mạo từ vs Cụ thể có The",
          "explanation": "Life / History / Music / Art khi nói khái quát KHÔNG dùng the.",
          "examples": [
            {
              "sentence": "I love <em>classical music</em>.",
              "note": "Khái quát"
            },
            {
              "sentence": "I didn't like <em>the music played</em> at the party.",
              "note": "Cụ thể"
            }
          ]
        },
        {
          "title": "Bài 9: Quantifiers với Danh từ — Much, Many, Plenty of, A great deal of",
          "explanation": "Quy tắc dùng mạo từ: Dùng 'a/an' cho danh từ đếm được số ít nói chung chung ('a' trước phụ âm, 'an' trước nguyên âm); dùng 'the' cho đối tượng cụ thể mà cả hai bên đều đã biết.",
          "examples": [
            {
              "sentence": "He spent a <em>great deal of money</em>.",
              "note": "Uncountable"
            }
          ]
        },
        {
          "title": "Bài 10: Nuance giữa A few / Few & A little / Little",
          "explanation": "Few/Little nhấn mạnh sự thiếu hụt (tiêu cực); A few/A little nhấn mạnh có một ít (tích cực).",
          "examples": [
            {
              "sentence": "Unfortunately, I have <em>few friends</em> here.",
              "note": "Ít bạn (cảm thấy cô đơn)"
            }
          ]
        },
        {
          "title": "Bài 11: Plural of Irregular & Foreign Nouns",
          "explanation": "Danh từ gốc Latinh/Hy Lạp: phenomenon -> phenomena, criterion -> criteria, analysis -> analyses.",
          "examples": [
            {
              "sentence": "These <em>criteria</em> are very strict.",
              "note": "Plural of criterion"
            }
          ]
        },
        {
          "title": "Bài 12: Abstract Nouns & Article Usage",
          "explanation": "Danh từ trừu tượng (knowledge, beauty, courage) thường không dùng mạo từ trừ khi được mô tả cụ thể.",
          "examples": [
            {
              "sentence": "She has <em>a good knowledge</em> of grammar.",
              "note": "Cụ thể hóa + A"
            }
          ]
        },
        {
          "title": "Bài 13: Summary Table of Articles and Noun Types",
          "explanation": "Bảng quy tắc mạo từ áp dụng cho từng loại danh từ.",
          "table": {
            "headers": [
              "Loại Danh từ",
              "Cụ thể (Known)",
              "Khái quát (General)"
            ],
            "rows": [
              [
                "Đếm được số ít",
                "the book",
                "a book"
              ],
              [
                "Đếm được số nhiều",
                "the books",
                "books (no article)"
              ],
              [
                "Không đếm được",
                "the water",
                "water (no article)"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He gave me a good advice.",
          "correct": "He gave me good advice. / a piece of good advice.",
          "tip": "Advice là danh từ không đếm được, không dùng mạo từ \"a\"."
        }
      ]
    }
  },
  {
    "id": "int-pronouns-det",
    "level": "intermediate",
    "title": "Pronouns and determiners",
    "subtitle": "12 bài về đại từ nhân xưng và định từ",
    "icon": "📚",
    "order": 130,
    "murphyUnit": "Intermediate Units 82–93",
    "content": {
      "overview": "12 bài chi tiết về Đại từ Phản xạ, Đại từ Thay thế (One/Ones, So), Quantifiers + of, Each vs Every, Another/Other và Đại từ Bất định.",
      "rules": [
        {
          "title": "Bài 1: Reflexive Pronouns & Emphatic Use",
          "explanation": "Nhấn mạnh chính ai đó làm việc gì mà không có trợ giúp (I built it myself).",
          "examples": [
            {
              "sentence": "The CEO <em>himself</em> signed the contract.",
              "note": "Đại từ nhấn mạnh"
            }
          ]
        },
        {
          "title": "Bài 2: Each other vs One another",
          "explanation": "Dùng cho mối quan hệ qua lại giữa 2 hoặc nhiều người.",
          "examples": [
            {
              "sentence": "They looked at <em>each other</em> and smiled.",
              "note": "Tương hỗ"
            }
          ]
        },
        {
          "title": "Bài 3: All, Most, Some, Any, No, None + OF",
          "explanation": "Khi đứng trước the, my, this, custom determiners -> BẮT BUỘC có \"of\".",
          "examples": [
            {
              "sentence": "<em>Some of my friends</em> live abroad.",
              "note": "Some of + my + N"
            }
          ]
        },
        {
          "title": "Bài 4: Both, Either, Neither + OF",
          "explanation": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
          "examples": [
            {
              "sentence": "<em>Neither of my parents</em> speaks English.",
              "note": "Neither of + Plural N + Singular V"
            }
          ]
        },
        {
          "title": "Bài 5: Phân biệt Chi tiết Each vs Every",
          "explanation": "Each dùng khi nghĩ về từng cá thể (từ 2 trở lên); Every nghĩ về tổng thể (từ 3 trở lên).",
          "examples": [
            {
              "sentence": "Study <em>each sentence</em> carefully.",
              "note": "Từng câu một"
            }
          ]
        },
        {
          "title": "Bài 6: Substitute Words — One / Ones",
          "explanation": "Dùng \"one\" (số ít) hoặc \"ones\" (số nhiều) để tránh lặp lại danh từ đã nhắc trước.",
          "examples": [
            {
              "sentence": "Which cup is yours? — The <em>blue one</em>.",
              "note": "One = cup"
            }
          ]
        },
        {
          "title": "Bài 7: Another vs Other vs The other vs Others",
          "explanation": "Bảng tổng hợp cách dùng từ phân biệt.",
          "table": {
            "headers": [
              "Từ",
              "Loại",
              "Ý nghĩa"
            ],
            "rows": [
              [
                "another",
                "Determiner/Pronoun",
                "thêm 1 cái khác (số ít)"
              ],
              [
                "other",
                "Determiner",
                "những cái khác (số nhiều + N)"
              ],
              [
                "others",
                "Pronoun",
                "những người/cái khác (thay N)"
              ],
              [
                "the other",
                "Determiner/Pronoun",
                "cái còn lại (trong nhóm 2)"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "I have two brothers. One is a doctor, <em>the other</em> is a teacher.",
              "note": "Cái còn lại"
            }
          ]
        },
        {
          "title": "Bài 8: Indefinite Pronouns + Singular Verb",
          "explanation": "Someone, Anybody, Everything, Nothing luôn chia động từ ở dạng Số ít.",
          "examples": [
            {
              "sentence": "<em>Everything is</em> going according to plan.",
              "note": "Is (số ít)"
            }
          ]
        },
        {
          "title": "Bài 9: Whatever, Whoever, Wherever, Whenever",
          "explanation": "Bất cứ cái gì, bất cứ ai, bất cứ đâu, bất cứ khi nào (thể hiện sự tự do/không quan trọng).",
          "examples": [
            {
              "sentence": "You can sit <em>wherever you like</em>.",
              "note": "Wherever"
            }
          ]
        },
        {
          "title": "Bài 10: Demonstratives in Text Reference (This / That)",
          "explanation": "This (dùng cho ý tưởng sắp đề cập); That (dùng cho ý tưởng vừa nói xong).",
          "examples": [
            {
              "sentence": "He failed the exam. <em>That</em> is why he is sad.",
              "note": "That thay cho cả mệnh đề trước"
            }
          ]
        },
        {
          "title": "Bài 11: Substitutes: So & Not (I hope so / I fear not)",
          "explanation": "Dùng \"so\" hoặc \"not\" để thay thế cho cả mệnh đề sau các động từ think, hope, suppose, expect.",
          "examples": [
            {
              "sentence": "Is it going to rain? — I <em>hope not</em>.",
              "note": "Hope not = hope it won't rain"
            }
          ]
        },
        {
          "title": "Bài 12: Order of Determiners before Nouns",
          "explanation": "Đại từ nhân xưng thay thế cho danh từ để tránh lặp từ. Đại từ làm Chủ ngữ (I, you, he...) đứng trước động từ; đại từ làm Tân ngữ (me, him, her...) đứng sau động từ hoặc giới từ.",
          "examples": [
            {
              "sentence": "My <em>first two</em> books.",
              "note": "Trật tự determiner"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Neither of them are ready.",
          "correct": "Neither of them is ready.",
          "tip": "Neither of + Plural N đi với động từ số ít trong tiếng Anh chuẩn."
        }
      ]
    }
  },
  {
    "id": "int-relative",
    "level": "intermediate",
    "title": "Relative clause",
    "subtitle": "6 bài về mệnh đề quan hệ",
    "icon": "📚",
    "order": 131,
    "murphyUnit": "Intermediate Units 92–97",
    "content": {
      "overview": "6 bài về Mệnh đề quan hệ: Xác định & Không xác định, Lược bỏ đại từ, Giới từ trong mệnh đề quan hệ, Whose, Where, và Mệnh đề rút gọn.",
      "rules": [
        {
          "title": "Bài 1: Defining Relative Clauses (Who, Which, That)",
          "explanation": "Mệnh đề xác định cung cấp thông tin bắt buộc. KHÔNG dùng dấu phẩy. Có thể dùng \"that\" thay cho who/which.",
          "examples": [
            {
              "sentence": "The woman <em>who lives next door</em> is a doctor.",
              "note": "Bắt buộc để biết người nào"
            }
          ]
        },
        {
          "title": "Bài 2: Omission of Relative Pronouns (Lược bỏ Đại từ Quan hệ)",
          "explanation": "Có thể LƯỢC BỎ who/which/that khi chúng làm TÂN NGỮ trong mệnh đề xác định.",
          "examples": [
            {
              "sentence": "The book <em>(that) I bought yesterday</em> is interesting.",
              "note": "I bought the book -> Object -> Lược bỏ được"
            }
          ]
        },
        {
          "title": "Bài 3: Non-defining Relative Clauses (Mệnh đề Không xác định)",
          "explanation": "Cung cấp thông tin bổ sung. BẮT BUỘC có dấu phẩy. KHÔNG dùng \"that\", KHÔNG được lược bỏ đại từ.",
          "examples": [
            {
              "sentence": "My brother, <em>who lives in London</em>, is a software engineer.",
              "note": "Bổ sung thêm thông tin"
            }
          ]
        },
        {
          "title": "Bài 4: Prepositions in Relative Clauses (Giới từ trong mệnh đề quan hệ)",
          "explanation": "Trang trọng: Giới từ + Whom / Which (The man to whom I spoke); Tự nhiên: Giới từ ở cuối (The man I spoke to).",
          "examples": [
            {
              "sentence": "The hotel <em>at which we stayed</em> was clean.",
              "note": "Trang trọng"
            },
            {
              "sentence": "The hotel <em>we stayed at</em> was clean.",
              "note": "Tự nhiên"
            }
          ]
        },
        {
          "title": "Bài 5: Whose, Where, When, Why",
          "explanation": "Whose (sở hữu); Where (nơi chốn = in/at which); When (thời gian = on/in which).",
          "examples": [
            {
              "sentence": "A widow is a woman <em>whose husband is dead</em>.",
              "note": "Whose (sở hữu)"
            }
          ]
        },
        {
          "title": "Bài 6: Reduced Relative Clauses (Rút gọn Mệnh đề Quan hệ)",
          "explanation": "Chủ động -> V-ing; Bị động -> V3/ed; Đầu tiên/Cuối cùng -> To V.",
          "examples": [
            {
              "sentence": "The man <em>standing by the door</em> is my uncle. (= who is standing)",
              "note": "V-ing"
            },
            {
              "sentence": "The painting <em>stolen from the museum</em> was found. (= which was stolen)",
              "note": "V3/ed"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "My father, that is 60, has retired.",
          "correct": "My father, who is 60, has retired.",
          "tip": "Không bao giờ dùng \"that\" trong mệnh đề quan hệ không xác định (có dấu phẩy)."
        }
      ]
    }
  },
  {
    "id": "int-adj-adv",
    "level": "intermediate",
    "title": "Adjective and adverbs",
    "subtitle": "15 bài về danh từ và trạng từ",
    "icon": "📚",
    "order": 132,
    "murphyUnit": "Intermediate Units 98–112",
    "content": {
      "overview": "15 bài chuyên sâu về Tính từ & Trạng từ: Trật tự OSASCOMP, Gradable vs Absolute Adjectives, So sánh phức hợp (The... the...), Trạng từ câu và Đảo ngữ.",
      "rules": [
        {
          "title": "Bài 1: Adjective Order — Cấu trúc OSASCOMP chuẩn",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "An <em>expensive large modern round red Italian leather dining</em> table.",
              "note": "OSASCOMP"
            }
          ]
        },
        {
          "title": "Bài 2: Gradable vs Non-gradable (Extreme) Adjectives",
          "explanation": "Gradable (cold, big) đi với VERY / FAIRLY; Non-gradable (freezing, huge, ancient) đi với ABSOLUTELY / TOTALLY.",
          "table": {
            "headers": [
              "Tính từ Thường (Gradable)",
              "Tính từ Tuyệt đối (Extreme)"
            ],
            "rows": [
              [
                "very cold",
                "absolutely freezing"
              ],
              [
                "very tired",
                "absolutely exhausted"
              ],
              [
                "very big",
                "absolutely huge / enormous"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "❌ It is very freezing outside.",
              "note": "Sai"
            },
            {
              "sentence": "✅ It is <em>absolutely freezing</em> outside.",
              "note": "Đúng"
            }
          ]
        },
        {
          "title": "Bài 3: Participle Adjectives (-ed vs -ing trong miêu tả)",
          "explanation": "Frightened (bị hoảng sợ) vs Frightening (gây hoảng sợ); Interested vs Interesting.",
          "examples": [
            {
              "sentence": "I was <em>surprised</em> by the <em>surprising</em> news.",
              "note": "-ed vs -ing"
            }
          ]
        },
        {
          "title": "Bài 4: Double Adverbs (Fast, Hard, Late, Hardly, Lately)",
          "explanation": "Hard (chăm chỉ/cứng) vs Hardly (hầu như không); Late (trễ) vs Lately (gần đây).",
          "examples": [
            {
              "sentence": "He works <em>hard</em>.",
              "note": "Hard = chăm chỉ"
            },
            {
              "sentence": "He <em>hardly</em> works.",
              "note": "Hardly = hầu như không làm"
            }
          ]
        },
        {
          "title": "Bài 5: So sánh hơn Nâng cao (Far / Much / A lot / Slightly + Comparative)",
          "explanation": "Dùng far, much, a lot, slightly, a bit để nhấn mạnh mức độ so sánh.",
          "examples": [
            {
              "sentence": "This laptop is <em>much more expensive</em> than that one.",
              "note": "Nhấn mạnh mức độ"
            }
          ]
        },
        {
          "title": "Bài 6: So sánh nhất Nâng cao (The second best / By far the most)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "Tokyo is <em>by far the largest</em> city in Japan.",
              "note": "By far + Superlative"
            }
          ]
        },
        {
          "title": "Bài 7: Comparative Patterns — As... as & Twice as... as",
          "explanation": "Cấu trúc bội số: Multiplier + as + Adj/Adv + as (twice as expensive as, three times as big as).",
          "examples": [
            {
              "sentence": "This house is <em>twice as large as</em> mine.",
              "note": "Bội số so sánh"
            }
          ]
        },
        {
          "title": "Bài 8: Cấu trúc So sánh kép \"The... the...\"",
          "explanation": "The + Comparative S + V, The + Comparative S + V (Càng... thì càng...).",
          "examples": [
            {
              "sentence": "<em>The more</em> you learn, <em>the wiser</em> you become.",
              "note": "Càng... càng..."
            }
          ]
        },
        {
          "title": "Bài 9: Position of Adverbs (Manner, Place, Time)",
          "explanation": "Trật tự cuối câu: Manner (Cách thức) -> Place (Nơi chốn) -> Time (Thời gian).",
          "examples": [
            {
              "sentence": "She sang <em>beautifully</em> (Manner) <em>at the concert</em> (Place) <em>last night</em> (Time).",
              "note": "M - P - T"
            }
          ]
        },
        {
          "title": "Bài 10: Degree Adverbs — Extremely, Incredibly, Fairly, Quite, Rather",
          "explanation": "Rather có sắc thái tiêu cực hoặc bất ngờ hơn Quite; Extremely / Incredibly nhấn mạnh rất cao.",
          "examples": [
            {
              "sentence": "The exam was <em>rather difficult</em>.",
              "note": "Rather"
            }
          ]
        },
        {
          "title": "Bài 11: Adverbs Modifying Adjectives & Other Adverbs",
          "explanation": "Trạng từ đứng trước tính từ hoặc trạng từ khác để bổ nghĩa (badly injured, highly successful).",
          "examples": [
            {
              "sentence": "He is a <em>highly successful</em> businessman.",
              "note": "Adv + Adj"
            }
          ]
        },
        {
          "title": "Bài 12: Too vs Enough (Chi tiết vị trí & Mẫu câu)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "This shirt is <em>too small for me to wear</em>.",
              "note": "Too... to V"
            }
          ]
        },
        {
          "title": "Bài 13: Linking Verbs + Adjectives (Look, Sound, Smell, Taste, Feel)",
          "explanation": "Sau động từ nối (feel, look, sound, smell, taste, seem, appear) phải dùng TÍNH TỪ, không dùng trạng từ.",
          "examples": [
            {
              "sentence": "The food <em>smells delicious</em> (NOT deliciously).",
              "note": "Smell + Adj"
            }
          ]
        },
        {
          "title": "Bài 14: Compound Adjectives (Tính từ ghép)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "We stayed at a <em>five-star hotel</em>.",
              "note": "Tính từ ghép không có -s"
            }
          ]
        },
        {
          "title": "Bài 15: Inversion after Negative Adverbs (Đảo ngữ cơ bản)",
          "explanation": "Khi Seldom, Rarely, Never, Hardly đứng đầu câu -> Đảo trợ động từ lên trước chủ ngữ.",
          "examples": [
            {
              "sentence": "Never <em>have I seen</em> such a beautiful sunset.",
              "note": "Đảo ngữ với Never"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The soup tastes deliciously.",
          "correct": "The soup tastes delicious.",
          "tip": "Sau động từ nối \"taste\" phải dùng tính từ \"delicious\"."
        }
      ]
    }
  },
  {
    "id": "int-conj-prep",
    "level": "intermediate",
    "title": "Conjunctions and prepositions",
    "subtitle": "24 bài về câu liên kết và giới từ",
    "icon": "📚",
    "order": 133,
    "murphyUnit": "Intermediate Units 113–136",
    "content": {
      "overview": "24 bài toàn diện nhất về Giới từ (Thời gian, Vị trí, Đi chuyển, Tính từ/Động từ/Danh từ đi kèm) và Liên từ nối câu (Tương phản, Nguyên nhân, Kết quả, Mục đích, Điều kiện).",
      "rules": [
        {
          "title": "Bài 1: Prepositions of Place (In vs At vs On)",
          "explanation": "In (không gian 3D/thành phố/quốc gia); At (địa điểm cụ thể/sự kiện); On (bề mặt/tầng nhà/con đường).",
          "examples": [
            {
              "sentence": "In Paris, at the station, on the 3rd floor.",
              "note": "In / At / On"
            }
          ]
        },
        {
          "title": "Bài 2: Prepositions of Time (In vs At vs On vs By vs Until)",
          "explanation": "At (giờ, lễ); On (ngày, thứ); In (tháng, năm, mùa); By (trước mốc); Until (cho tới khi).",
          "examples": [
            {
              "sentence": "I must finish the work <em>by 5 PM</em>.",
              "note": "By = no later than"
            }
          ]
        },
        {
          "title": "Bài 3: Prepositions of Movement (Into, Onto, Off, Towards, Through)",
          "explanation": "Into (vào trong); Onto (lên trên); Through (xuyên qua không gian 3D); Across (băng qua bề mặt).",
          "examples": [
            {
              "sentence": "We walked <em>through the forest</em> and <em>across the bridge</em>.",
              "note": "Through vs Across"
            }
          ]
        },
        {
          "title": "Bài 4: Prepositions with Adjectives 1 (Afraid of, Good at, Interested in)",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "She is <em>famous for</em> her singing.",
              "note": "Famous for"
            }
          ]
        },
        {
          "title": "Bài 5: Prepositions with Adjectives 2 (Disappointed with, Kind to, Married to)",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "She is <em>married to</em> a doctor.",
              "note": "Married to (NOT with)"
            }
          ]
        },
        {
          "title": "Bài 6: Prepositions with Verbs 1 (Listen to, Depend on, Belong to)",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "It <em>depends on</em> the weather.",
              "note": "Depend on"
            }
          ]
        },
        {
          "title": "Bài 7: Prepositions with Verbs 2 (Accuse of, Prevent from, Protect from)",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "Rain <em>prevented us from playing</em> tennis.",
              "note": "Prevent from V-ing"
            }
          ]
        },
        {
          "title": "Bài 8: Prepositions with Nouns (In my opinion, On purpose, By mistake)",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "I took your umbrella <em>by mistake</em>.",
              "note": "By mistake"
            }
          ]
        },
        {
          "title": "Bài 9: During vs For vs While",
          "explanation": "During + Noun (trong suốt dịp/sự kiện); For + khoảng thời gian; While + S + V.",
          "examples": [
            {
              "sentence": "I fell asleep <em>during the movie</em>.",
              "note": "During + Noun"
            }
          ]
        },
        {
          "title": "Bài 10: By vs Until / Till",
          "explanation": "By = hành động hoàn thành tại hoặc trước mốc; Until = hành động kéo dài liên tục cho tới mốc.",
          "examples": [
            {
              "sentence": "I will wait <em>until 5 PM</em>.",
              "note": "Wait (liên tục tới 5 PM)"
            }
          ]
        },
        {
          "title": "Bài 11: As vs Like (Phân biệt Vai trò vs So sánh)",
          "explanation": "As + Noun (với tư cách là/vai trò thật); Like + Noun (giống như - so sánh).",
          "examples": [
            {
              "sentence": "He works <em>as a teacher</em>. (Anh ấy là giáo viên)",
              "note": "Vai trò thực tế"
            },
            {
              "sentence": "He sings <em>like a professional</em>.",
              "note": "So sánh giống như"
            }
          ]
        },
        {
          "title": "Bài 12: Although, Even though, Though (Mệnh đề Tương phản)",
          "explanation": "Although / Even though / Though + Mệnh đề (S + V). Even though mạnh hơn Although.",
          "examples": [
            {
              "sentence": "<em>Even though he was tired</em>, he kept working.",
              "note": "Mệnh đề tương phản"
            }
          ]
        },
        {
          "title": "Bài 13: In spite of & Despite (Cụm từ Tương phản)",
          "explanation": "In spite of / Despite + Noun / Noun Phrase / V-ing. KHÔNG có \"of\" sau Despite.",
          "examples": [
            {
              "sentence": "<em>Despite the heavy traffic</em>, we arrived on time.",
              "note": "Despite + Noun"
            }
          ]
        },
        {
          "title": "Bài 14: Because / As / Since vs Because of / Due to",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "The flight was cancelled <em>due to bad weather</em>.",
              "note": "Due to + Noun"
            }
          ]
        },
        {
          "title": "Bài 15: Result Clauses — So... that & Such... that",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "She was <em>so tired that</em> she fell asleep instantly.",
              "note": "So + Adj + that"
            },
            {
              "sentence": "It was <em>such a good movie that</em> I watched it twice.",
              "note": "Such + a + Adj + N + that"
            }
          ]
        },
        {
          "title": "Bài 16: Purpose Clauses — In order that / So that",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "I turned down the music <em>so that my baby could sleep</em>.",
              "note": "So that + Clause"
            }
          ]
        },
        {
          "title": "Bài 17: Condition Connectors — Unless, As long as, Provided that",
          "explanation": "Unless = If not; As long as / Provided that = Chỉ khi / Miễn là.",
          "examples": [
            {
              "sentence": "You can go out <em>as long as you finish</em> your homework.",
              "note": "Miễn là"
            }
          ]
        },
        {
          "title": "Bài 18: In case vs If",
          "explanation": "In case = phòng khi (chuẩn bị trước); If = nếu (chỉ làm khi xảy ra).",
          "examples": [
            {
              "sentence": "Take an umbrella <em>in case it rains</em>.",
              "note": "Phòng khi (mang ô sẵn)"
            }
          ]
        },
        {
          "title": "Bài 19: Whereas, While, On the other hand",
          "explanation": "Dùng để đối chiếu hai khía cạnh trái ngược nhau của vấn đề.",
          "examples": [
            {
              "sentence": "Some people love city life, <em>whereas others prefer</em> the countryside.",
              "note": "Whereas"
            }
          ]
        },
        {
          "title": "Bài 20: Transition Words — Therefore, However, Furthermore, In addition",
          "explanation": "Từ nối giữa 2 câu (đứng đầu câu mới hoặc sau dấu chấm phẩy, đi kèm dấu phẩy).",
          "examples": [
            {
              "sentence": "The task was difficult. <em>However</em>, they completed it on time.",
              "note": "Transition"
            }
          ]
        },
        {
          "title": "Bài 21: Besides, Except (for), Apart from",
          "explanation": "Besides = ngoài ra còn có thêm; Except (for) = trừ ra, ngoại trừ.",
          "examples": [
            {
              "sentence": "Everyone came <em>except for</em> John.",
              "note": "Ngoại trừ"
            }
          ]
        },
        {
          "title": "Bài 22: As if / As though (Như thể là)",
          "explanation": "As if / As though + Past Tense (diễn tả điều không có thật ở hiện tại).",
          "examples": [
            {
              "sentence": "He talks <em>as if he knew</em> everything.",
              "note": "Như thể là (không thật)"
            }
          ]
        },
        {
          "title": "Bài 23: Prepositional Phrases of Place & Time",
          "explanation": "At the end of (ở cuối của); In the end (cuối cùng/kết cục); In the middle of.",
          "examples": [
            {
              "sentence": "At the end of the street.",
              "note": "At the end of + N"
            }
          ]
        },
        {
          "title": "Bài 24: Verb + Object + Preposition Patterns Summary",
          "explanation": "Bảng tổng hợp các dạng Động từ + Tân ngữ + Giới từ phổ biến.",
          "table": {
            "headers": [
              "Mẫu cấu trúc",
              "Ví dụ động từ"
            ],
            "rows": [
              [
                "Verb + Sb + WITH + St",
                "provide sb with st, supply sb with st"
              ],
              [
                "Verb + Sb + FOR + St",
                "blame sb for st, praise sb for st"
              ],
              [
                "Verb + St + TO + Sb",
                "explain st to sb, describe st to sb"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Despite of the rain, we went out.",
          "correct": "Despite the rain, we went out. / In spite of the rain...",
          "tip": "Không có \"of\" sau Despite."
        }
      ]
    }
  },
  {
    "id": "int-phrasal-verbs",
    "level": "intermediate",
    "title": "Phrasal verbs",
    "subtitle": "9 bài về các cụm động từ",
    "icon": "📚",
    "order": 134,
    "murphyUnit": "Intermediate Units 137–145",
    "content": {
      "overview": "9 bài chuyên sâu về Cụm động từ (Phrasal Verbs): Phân loại, Cụm tách được/không tách được, Cụm 3 từ và Phrasal Verbs theo chủ đề cuộc sống & công việc.",
      "rules": [
        {
          "title": "Bài 1: Phân loại Phrasal Verbs (Separable vs Inseparable)",
          "explanation": "Nội động từ (Intransitive - không tân ngữ); Ngoại động từ tách được (Separable); Ngoại động từ không tách được (Inseparable).",
          "examples": [
            {
              "sentence": "The car <em>broke down</em>. (Intransitive)",
              "note": "Không có tân ngữ"
            }
          ]
        },
        {
          "title": "Bài 2: Phrasal Verbs Type 1 — Intransitive (Nội động từ)",
          "explanation": "Wake up, get up, break down, take off (máy bay cất cánh), grow up, show up.",
          "examples": [
            {
              "sentence": "The plane <em>took off</em> on time.",
              "note": "Máy bay cất cánh"
            }
          ]
        },
        {
          "title": "Bài 3: Phrasal Verbs Type 2 — Separable (Ngoại động từ tách được)",
          "explanation": "Nếu tân ngữ là ĐẠI TỪ (it/them/me) -> BẮT BUỘC đứng ở GIỮA: Turn it off (NOT turn off it).",
          "examples": [
            {
              "sentence": "Turn off the light. = Turn the light off.",
              "note": "Tân ngữ là danh từ"
            },
            {
              "sentence": "Turn <em>it</em> off. (NOT Turn off it)",
              "note": "Tân ngữ là đại từ (bắt buộc ở giữa)"
            }
          ]
        },
        {
          "title": "Bài 4: Phrasal Verbs Type 3 — Inseparable (Không tách được)",
          "explanation": "Cụm động từ (Phrasal Verbs) = Động từ + Giới từ/Tiểu từ, mang nghĩa thành ngữ mới. Lưu ý với phrasal verbs tách được, đại từ tân ngữ (it, them) BẮT BUỘC phải đứng ở giữa.",
          "examples": [
            {
              "sentence": "She <em>looks after her mother</em>.",
              "note": "Không thể tách look her mother after"
            }
          ]
        },
        {
          "title": "Bài 5: Three-part Phrasal Verbs (Cụm động từ 3 từ)",
          "explanation": "Cụm động từ (Phrasal Verbs) = Động từ + Giới từ/Tiểu từ, mang nghĩa thành ngữ mới. Lưu ý với phrasal verbs tách được, đại từ tân ngữ (it, them) BẮT BUỘC phải đứng ở giữa.",
          "examples": [
            {
              "sentence": "I can't <em>put up with</em> this noise any longer.",
              "note": "Put up with = chịu đựng"
            }
          ]
        },
        {
          "title": "Bài 6: Phrasal Verbs for Daily Routines (Sinh hoạt hàng ngày)",
          "explanation": "Get up, put on (mặc vào), take off (cởi ra), turn on/off, clean up, call back.",
          "examples": [
            {
              "sentence": "Put on your coat, it's cold outside.",
              "note": "Mặc áo vào"
            }
          ]
        },
        {
          "title": "Bài 7: Phrasal Verbs for Travel & Movement (Du lịch & Di chuyển)",
          "explanation": "Set off (khởi hành), check in, check out, drop off, pick up, speed up, slow down.",
          "examples": [
            {
              "sentence": "We <em>set off</em> early in the morning.",
              "note": "Khởi hành"
            }
          ]
        },
        {
          "title": "Bài 8: Phrasal Verbs for Social Life (Giao tiếp & Đời sống)",
          "explanation": "Hang out, call off (hủy), put off (hoãn), catch up with, get along with, break up.",
          "examples": [
            {
              "sentence": "The meeting was <em>called off</em> due to rain.",
              "note": "Called off = cancelled"
            }
          ]
        },
        {
          "title": "Bài 9: Phrasal Verbs for Work & Business (Công việc & Kinh doanh)",
          "explanation": "Fill in (điền mẫu), carry out (thực hiện), work out (tìm ra giải pháp/tập thể dục), set up (thành lập), take over (tiếp quản).",
          "examples": [
            {
              "sentence": "The team <em>carried out</em> the research successfully.",
              "note": "Carry out = thực hiện"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Please turn off it.",
          "correct": "Please turn it off.",
          "tip": "Khi tân ngữ là đại từ (it, them), phải đứng giữa động từ và tiểu từ."
        }
      ]
    }
  },
  {
    "id": "adv-tenses",
    "level": "advanced",
    "title": "Tenses",
    "subtitle": "8 bài học với 8 thì cơ bản",
    "icon": "🎓",
    "order": 135,
    "murphyUnit": "Advanced Units 1–8",
    "content": {
      "overview": "8 bài học cao cấp chuyên sâu về bình diện Thời thể (Tense & Aspect): Sắc thái thời gian trong báo chí, văn chương, Stative verbs nâng cao, Aspectual nuances và Tense Harmony.",
      "rules": [
        {
          "title": "Bài 1: Present Simple & Continuous trong Ngữ cảnh Cao cấp",
          "explanation": "Dùng Present Simple cho tiêu đề báo chí (Newspaper Headlines), tóm tắt cốt truyện phim/sách; Present Continuous cho sự thay đổi mang tính học thuật.",
          "examples": [
            {
              "sentence": "Headline: <em>Prime Minister Resigns</em> After Scandal.",
              "note": "Báo chí (Headline Present)"
            },
            {
              "sentence": "The global climate <em>is deteriorating</em> at an unprecedented rate.",
              "note": "Biến đổi học thuật"
            }
          ]
        },
        {
          "title": "Bài 2: Past Simple & Continuous trong Nghệ thuật Kể chuyện (Narrative Nuance)",
          "explanation": "Tạo lập tiền cảnh (Foreground) với Past Simple và hậu cảnh (Background) với Past Continuous & Participles.",
          "examples": [
            {
              "sentence": "As tension <em>was escalating</em> in the capital, the cabinet <em>convened</em> an emergency session.",
              "note": "Background vs Foreground"
            }
          ]
        },
        {
          "title": "Bài 3: Present Perfect Simple & Continuous cho Thành tựu & Báo cáo",
          "explanation": "Phân tích kết quả lâu dài (Permanent result) vs trạng thái mở (Open timeframe) trong các báo cáo khoa học.",
          "examples": [
            {
              "sentence": "Researchers <em>have uncovered</em> a novel mechanism.",
              "note": "Phát kiến khoa học (Present Perfect)"
            }
          ]
        },
        {
          "title": "Bài 4: Past Perfect Simple & Continuous trong Cấu trúc Câu Phức",
          "explanation": "Dùng Past Perfect thiết lập điều kiện nền tảng (Background conditions) và sự kiện có tính hệ quả trước quá khứ.",
          "examples": [
            {
              "sentence": "Having failed to secure funding, the startup <em>had been operating</em> on a skeleton budget.",
              "note": "Quá trình kéo dài trước quá khứ"
            }
          ]
        },
        {
          "title": "Bài 5: Thể Tiếp diễn với Động từ Trạng thái (Advanced Stative Nuance)",
          "explanation": "Dùng Continuous với stative verbs (feel, think, love, weigh, measure, represent) để thể hiện sự cảm nhận nhất thời hoặc thái độ ứng xử.",
          "examples": [
            {
              "sentence": "I <em>am loving</em> every minute of this conference.",
              "note": "Tận hưởng nhất thời"
            },
            {
              "sentence": "He <em>is being</em> extraordinarily generous.",
              "note": "Thái độ nhất thời"
            }
          ]
        },
        {
          "title": "Bài 6: Simple vs Continuous Aspectual Nuances (Thể Hoàn thành & Tiếp diễn)",
          "explanation": "Sự khác biệt giữa tính trọn vẹn (Completeness) của Simple Aspect và tính kéo dài/chưa hoàn tất (Incompleteness) của Continuous Aspect.",
          "examples": [
            {
              "sentence": "I <em>read</em> the report. (Đã đọc xong toàn bộ)",
              "note": "Simple (Completeness)"
            },
            {
              "sentence": "I <em>was reading</em> the report. (Đang đọc dở)",
              "note": "Continuous (Incompleteness)"
            }
          ]
        },
        {
          "title": "Bài 7: Perfective vs Imperfective Aspect trong Văn kể nâng cao",
          "explanation": "So sánh góc nhìn hoàn thành trọn vẹn (Perfective) và góc nhìn tiến trình nội tại (Imperfective).",
          "examples": [
            {
              "sentence": "The empire <em>collapsed</em> in 476 AD. (Perfective view)",
              "note": "Nhìn như 1 sự kiện trọn gói"
            }
          ]
        },
        {
          "title": "Bài 8: Tense Harmony & Backshifting trong Câu Phức Nhiều Mệnh đề",
          "explanation": "Quy tắc hòa hợp thì (Sequence of tenses) trong các văn bản luật pháp, học thuật và báo cáo gián tiếp phức tạp.",
          "examples": [
            {
              "sentence": "The director maintained that had the board known the risks, they would not have authorized the merger.",
              "note": "Hòa hợp thì nhiều mệnh đề"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The climate changes rapidly these years.",
          "correct": "The climate is changing rapidly these years.",
          "tip": "Xu hướng đang diễn ra kéo dài dùng thể tiếp diễn."
        }
      ]
    }
  },
  {
    "id": "adv-future",
    "level": "advanced",
    "title": "The Future",
    "subtitle": "6 bài học về thì tương lai và các từ dùng cho thì tương lai",
    "icon": "🎓",
    "order": 136,
    "murphyUnit": "Advanced Units 9–14",
    "content": {
      "overview": "6 bài học cao cấp về Các phương thức biểu đạt tương lai (Future Expressions) trong văn phong trang trọng, báo cáo dự phóng và hợp đồng.",
      "rules": [
        {
          "title": "Bài 1: Formal Predictions & Plans — Will vs Be Going To trong Văn phong Trang trọng",
          "explanation": "Trong văn bản trang trọng, Will được ưu tiên dùng cho các dự báo chính thức; Be going to dùng khi có dữ liệu thực nghiệm.",
          "examples": [
            {
              "sentence": "Analysts predict that inflation <em>will stabilize</em> by Q4.",
              "note": "Dự báo trang trọng"
            }
          ]
        },
        {
          "title": "Bài 2: Future Continuous & Future Perfect trong Báo cáo Dự phóng (Projections)",
          "explanation": "Diễn tả trạng thái sẽ đang diễn ra hoặc đã hoàn tất tại các mốc chiến lược trong tương lai.",
          "examples": [
            {
              "sentence": "By next decade, renewable energy <em>will have surpassed</em> fossil fuels.",
              "note": "Dự phóng Future Perfect"
            }
          ]
        },
        {
          "title": "Bài 3: Be to + Infinitive, Be about to & Be on the verge of",
          "explanation": "Be to + V1 dùng trong thông cáo báo chí/mệnh lệnh trang trọng; Be on the verge/brink of + V-ing (trên bờ vực).",
          "examples": [
            {
              "sentence": "The treaty <em>is to be signed</em> tomorrow in Geneva.",
              "note": "Be to + V1"
            },
            {
              "sentence": "The company is <em>on the verge of bankruptcy</em>.",
              "note": "On the verge of"
            }
          ]
        },
        {
          "title": "Bài 4: Be due to, Be bound to, Be likely / unlikely to",
          "explanation": "Cấu trúc tiên đoán mức độ chắc chắn: Bound to (tất yếu 100%); Due to (theo lịch trình); Likely to (rất có khả năng).",
          "examples": [
            {
              "sentence": "Prices are <em>bound to rise</em> after the tax increase.",
              "note": "Tất yếu xảy ra"
            }
          ]
        },
        {
          "title": "Bài 5: Subordinate Time Clauses with Future Reference (Present Perfect)",
          "explanation": "Dùng Present Perfect trong mệnh đề thời gian để nhấn mạnh việc hành động 1 BẮT BUỘC xong xuôi rồi mới đến hành động 2.",
          "examples": [
            {
              "sentence": "We will issue the statement once the auditor <em>has completed</em> the report.",
              "note": "Present Perfect trong time clause"
            }
          ]
        },
        {
          "title": "Bài 6: Timetables & Formal Schedules (Present Simple)",
          "explanation": "Sử dụng Present Simple cho các sự kiện tương lai tuân theo quy luật, lịch trình cố định của tổ chức.",
          "examples": [
            {
              "sentence": "The fiscal year <em>ends</em> on March 31st.",
              "note": "Lịch tài chính"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The treaty will be to sign tomorrow.",
          "correct": "The treaty is to be signed tomorrow.",
          "tip": "Cấu trúc \"Be to + V\" dùng am/is/are/was/were, không dùng \"will be to\"."
        }
      ]
    }
  },
  {
    "id": "adv-modals",
    "level": "advanced",
    "title": "Modals and semi – modals",
    "subtitle": "6 bài về động từ khuyết thiếu",
    "icon": "🎓",
    "order": 137,
    "murphyUnit": "Advanced Units 15–20",
    "content": {
      "overview": "6 bài cao cấp về Động từ khuyết thiếu & Bán khuyết thiếu (Semi-modals): Sắc thái nghĩa trang trọng, Epistemic Modality, Suy đoán quá khứ và Giả định.",
      "rules": [
        {
          "title": "Bài 1: Modals of Necessity & Obligation in Legal/Academic Registers",
          "explanation": "Sự khác biệt giữa Must, Shall (trong hợp đồng pháp lý), Ought to và Need trong văn bản chính thức.",
          "examples": [
            {
              "sentence": "The tenant <em>shall pay</em> the rent on the first day of each month.",
              "note": "Shall trong hợp đồng"
            }
          ]
        },
        {
          "title": "Bài 2: Modals of Permission & Willingness — Polite & Subdued Style",
          "explanation": "Sử dụng May, Might, Would trong các yêu cầu ngoại giao, hội nghị quốc tế và văn thư thương mại.",
          "examples": [
            {
              "sentence": "<em>Might I suggest</em> an alternative solution?",
              "note": "Ngoại giao cực kỳ lịch sự"
            }
          ]
        },
        {
          "title": "Bài 3: Epistemic Modality — Suy đoán & Đánh giá Bằng chứng",
          "explanation": "Dùng Must have, Can't have, Couldn't have, May have, Might have để đánh giá độ tin cậy của bằng chứng lịch sử/khoa học.",
          "examples": [
            {
              "sentence": "The artifact <em>must have been crafted</em> during the Bronze Age.",
              "note": "Suy đoán lịch sử"
            }
          ]
        },
        {
          "title": "Bài 4: Semi-modals & Quasi-modals — Need, Dare, Used to, Ought to",
          "explanation": "Cách dùng Need & Dare như động từ khuyết thiếu (Need I say more? / How dare you speak!).",
          "examples": [
            {
              "sentence": "You <em>need not submit</em> the physical copy.",
              "note": "Need not + bare V"
            }
          ]
        },
        {
          "title": "Bài 5: Unfulfilled Past Intentions — Should have / Was to have done",
          "explanation": "Diễn tả dự định hoặc nghĩa vụ lẽ ra phải làm trong quá khứ nhưng đã KHÔNG xảy ra.",
          "examples": [
            {
              "sentence": "The summit <em>was to have taken place</em> in Kyoto, but was postponed.",
              "note": "Dự định không thành"
            }
          ]
        },
        {
          "title": "Bài 6: Modals in Hypothesizing — Would vs Could vs Might",
          "explanation": "Sử dụng Would, Could, Might trong lập luận giả thuyết kinh tế và khoa học.",
          "examples": [
            {
              "sentence": "A drop in interest rates <em>might stimulate</em> investment, but <em>could also induce</em> inflation.",
              "note": "Lập luận đa chiều"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He needs not to come.",
          "correct": "He need not come. / He doesn't need to come.",
          "tip": "Need not đi trực tiếp với bare infinitive."
        }
      ]
    }
  },
  {
    "id": "adv-linking",
    "level": "advanced",
    "title": "Linkings verbs, passives, question",
    "subtitle": "7 bài học về từ nối, động từ bị động, câu hỏi",
    "icon": "🎓",
    "order": 138,
    "murphyUnit": "Advanced Units 21–27",
    "content": {
      "overview": "7 bài học về Động từ liên kết (Copular Verbs), Thể bị động trong văn phong Viết học thuật (Academic Writing) và Cấu trúc câu hỏi nâng cao.",
      "rules": [
        {
          "title": "Bài 1: Copular / Linking Verbs (Seem, Appear, Turn, Prove, Remain)",
          "explanation": "Các động từ chỉ sự duy trì hoặc biến đổi trạng thái + Tính từ / Danh từ mệnh đề.",
          "examples": [
            {
              "sentence": "The theory <em>proved to be correct</em>.",
              "note": "Proved + to be + Adj"
            },
            {
              "sentence": "He <em>remained silent</em> throughout the trial.",
              "note": "Remain + Adj"
            }
          ]
        },
        {
          "title": "Bài 2: Passive Voice in Academic & Objective Discourse",
          "explanation": "Triệt tiêu tác nhân (Agentless Passive) và Danh từ hóa (Nominalization) để tạo tính khách quan khoa học.",
          "examples": [
            {
              "sentence": "Samples <em>were collected</em> and <em>analyzed</em> under sterile conditions.",
              "note": "Văn phong khoa học"
            }
          ]
        },
        {
          "title": "Bài 3: Passives with Complex Transitive Verbs",
          "explanation": "Cấu trúc bị động với động từ có tân ngữ + bổ ngữ (consider, elect, appoint, make, regard as).",
          "examples": [
            {
              "sentence": "Dr. Aris <em>was appointed Director</em> of the institute.",
              "note": "Bị động + Bổ ngữ"
            }
          ]
        },
        {
          "title": "Bài 4: Impersonal Passives — It is reported / He is thought to...",
          "explanation": "Dạng bị động gián tiếp với động từ chỉ ý kiến (allege, believe, claim, expect, report, rumor).",
          "examples": [
            {
              "sentence": "He <em>is alleged to have embezzled</em> millions.",
              "note": "Phân từ hoàn thành bị động"
            }
          ]
        },
        {
          "title": "Bài 5: Causative & Passivized Structures (Make -> Be made to)",
          "explanation": "Chủ động: make sb do st -> Bị động: be made TO do st; see sb do -> be seen TO do st.",
          "examples": [
            {
              "sentence": "Active: They made him sign.",
              "note": "Chủ động"
            },
            {
              "sentence": "Passive: He <em>was made to sign</em> the confession.",
              "note": "Bị động có TO"
            }
          ]
        },
        {
          "title": "Bài 6: Advanced Question Forms — Rhetorical & Negative Questions",
          "explanation": "Câu hỏi tu từ (Rhetorical Questions) và Câu hỏi phủ định nhằm thuyết phục trong diễn văn.",
          "examples": [
            {
              "sentence": "<em>Is it not time</em> we addressed the root cause of inequality?",
              "note": "Câu hỏi thuyết phục"
            }
          ]
        },
        {
          "title": "Bài 7: Fronted Prepositions in Wh- Questions (Formal Style)",
          "explanation": "Đưa giới từ lên trước đại từ nghi vấn trong văn phong trang trọng (To whom, With which).",
          "examples": [
            {
              "sentence": "<em>To whom</em> was the letter addressed?",
              "note": "Trang trọng (To whom)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "He was made sign the document.",
          "correct": "He was made to sign the document.",
          "tip": "Ở dạng bị động của \"make\", động từ sau nó phải có \"to\" (be made to do)."
        }
      ]
    }
  },
  {
    "id": "adv-verb-comp",
    "level": "advanced",
    "title": "Verb complementations",
    "subtitle": "4 bài về động từ liên kết",
    "icon": "🎓",
    "order": 139,
    "murphyUnit": "Advanced Units 28–31",
    "content": {
      "overview": "4 bài cao cấp về Bổ ngữ cho động từ (Verb Complementations): Ngữ nghĩa Gerund vs Infinitive, Thức giả định (Subjunctive), và Cấu trúc Tri giác.",
      "rules": [
        {
          "title": "Bài 1: Complex Semantic Differences (-ing vs To-Infinitive)",
          "explanation": "Phân tích tinh tế giữa Mean to do (dự định) vs Mean doing (có nghĩa là); Regret to say vs Regret doing.",
          "examples": [
            {
              "sentence": "Raising taxes <em>means reducing</em> disposable income.",
              "note": "Mean + V-ing = có nghĩa là"
            }
          ]
        },
        {
          "title": "Bài 2: Subjunctive Mood after Suggest, Demand, Insist, Recommend",
          "explanation": "Cấu trúc Thức giả định: Verb + that + S + V-bare (không chia theo thì hay chủ ngữ).",
          "examples": [
            {
              "sentence": "The committee recommended that he <em>resign</em> immediately.",
              "note": "Subjunctive (resign, not resigns)"
            },
            {
              "sentence": "It is essential that she <em>be</em> informed.",
              "note": "Subjunctive với Be"
            }
          ]
        },
        {
          "title": "Bài 3: Verbs of Perception — Bare Infinitive vs Participle (-ing)",
          "explanation": "See / Hear / Watch / Feel + Sb + V-bare (thấy toàn bộ quá trình) vs V-ing (thấy 1 phần/đang diễn ra).",
          "examples": [
            {
              "sentence": "I saw him <em>cross</em> the street. (Thấy từ đầu bên này sang bên kia)",
              "note": "V-bare (toàn bộ)"
            },
            {
              "sentence": "I saw him <em>crossing</em> the street. (Thấy khi đang bước đi dở)",
              "note": "V-ing (một phần)"
            }
          ]
        },
        {
          "title": "Bài 4: Prepositional Verb Complementations & Noun Clauses",
          "explanation": "Cấu trúc Động từ + Giới từ + Mệnh đề Noun Clause (insist on what..., object to how...).",
          "examples": [
            {
              "sentence": "They strongly objected to <em>how the test was conducted</em>.",
              "note": "Preposition + Wh- clause"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The doctor suggested that he lies down.",
          "correct": "The doctor suggested that he lie down.",
          "tip": "Trong thức giả định (subjunctive), động từ giữ nguyên thể (lie, not lies)."
        }
      ]
    }
  },
  {
    "id": "adv-reporting",
    "level": "advanced",
    "title": "Reporting",
    "subtitle": "8 bài về câu tường thuật",
    "icon": "🎓",
    "order": 140,
    "murphyUnit": "Advanced Units 32–39",
    "content": {
      "overview": "8 bài học nâng cao về Câu tường thuật (Reporting) trong văn phong học thuật, báo chí, Thức giả định gián tiếp, Paraphrasing và Khoảng cách quan điểm.",
      "rules": [
        {
          "title": "Bài 1: Syntactic Patterns of Advanced Reporting Verbs",
          "explanation": "Phân loại 5 mẫu cú pháp tường thuật cao cấp (verb + that clause, verb + obj + to V, verb + -ing, verb + prep + -ing, verb + clause).",
          "examples": [
            {
              "sentence": "The report <em>highlighted the need for reform</em>.",
              "note": "Tường thuật tổng quát"
            }
          ]
        },
        {
          "title": "Bài 2: Subjunctive & Modal Shifts in Indirect Speech",
          "explanation": "Xử lý động từ khuyết thiếu và thức giả định khi chuyển sang tường thuật gián tiếp.",
          "examples": [
            {
              "sentence": "Direct: \"You should leave.\"",
              "note": "Trực tiếp"
            },
            {
              "sentence": "Reported: He advised that I <em>should leave</em> / I <em>leave</em>.",
              "note": "Subjunctive shift"
            }
          ]
        },
        {
          "title": "Bài 3: Academic Summarizing & Reporting Statements",
          "explanation": "Sử dụng các động từ: argue, assert, contend, claim, maintain, demonstrate, indicate trong tổng thuật văn liệu (Literature Review).",
          "examples": [
            {
              "sentence": "Smith (2020) <em>argues that</em> capital investment drives growth.",
              "note": "Trích dẫn học thuật"
            }
          ]
        },
        {
          "title": "Bài 4: Paraphrasing & Distancing Techniques",
          "explanation": "Sử dụng \"allegedly\", \"reportedly\", \"it is claimed that\" để tạo khoảng cách khách quan, tránh quy kết trách nhiệm pháp lý.",
          "examples": [
            {
              "sentence": "The suspect <em>allegedly fled</em> the country.",
              "note": "Tạo khoảng cách (allegedly)"
            }
          ]
        },
        {
          "title": "Bài 5: Exceptions to Backshift Rules in Reporting",
          "explanation": "Không lùi thì khi sự thật vẫn còn đúng ở hiện tại hoặc khi hành động vừa mới xảy ra xong.",
          "examples": [
            {
              "sentence": "The teacher explained that the Earth <em>revolves</em> around the Sun.",
              "note": "Sự thật vĩnh cửu (Không lùi thì)"
            }
          ]
        },
        {
          "title": "Bài 6: Reporting Commands, Offers, Suggestions & Requests",
          "explanation": "Tổng hợp cấu trúc tường thuật câu hỏi, mệnh lệnh, lời hứa, lời đe dọa.",
          "examples": [
            {
              "sentence": "He <em>threatened to resign</em> if his demands were not met.",
              "note": "Threaten + to V"
            }
          ]
        },
        {
          "title": "Bài 7: Register Shift — Formal vs Informal Reporting",
          "explanation": "So sánh giữa tường thuật hội thoại hàng ngày và tường thuật báo chí chính luận.",
          "examples": [
            {
              "sentence": "Informal: He said he was sorry.",
              "note": "Hàng ngày"
            },
            {
              "sentence": "Formal: He <em>expressed regret for his actions</em>.",
              "note": "Trang trọng"
            }
          ]
        },
        {
          "title": "Bài 8: Indirect Speech with Complex Conditional Sentences",
          "explanation": "Tường thuật câu điều kiện loại 2 và loại 3 (Giữ nguyên thì điều kiện giả định).",
          "examples": [
            {
              "sentence": "Direct: \"If I were you, I would accept.\"",
              "note": "Trực tiếp"
            },
            {
              "sentence": "Reported: She said that <em>if she were me, she would accept</em>.",
              "note": "Giữ nguyên loại 2"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Smith claimed that he has solved the problem (in 1990).",
          "correct": "Smith claimed that he had solved the problem.",
          "tip": "Sự kiện học thuật quá khứ vẫn cần tuân thủ lùi thì thích hợp."
        }
      ]
    }
  },
  {
    "id": "adv-nouns",
    "level": "advanced",
    "title": "Nouns",
    "subtitle": "4 bài danh từ nâng cao với động từ và chủ ngữ",
    "icon": "🎓",
    "order": 141,
    "murphyUnit": "Advanced Units 40–43",
    "content": {
      "overview": "4 bài nâng cao về Danh từ: Sự hòa hợp Chủ ngữ - Động từ phức tạp (Subject-Verb Agreement), Danh từ khối, Danh từ hóa (Nominalization) và Tiền bổ ngữ.",
      "rules": [
        {
          "title": "Bài 1: Advanced Subject-Verb Agreement",
          "explanation": "Sự hòa hợp khi chủ ngữ chứa: Neither... nor, Either... or, Along with, As well as, Fraction/Percentage, Plural Noun with Singular Meaning (news, physics, economics).",
          "examples": [
            {
              "sentence": "Neither the manager nor the employees <em>were</em> satisfied.",
              "note": "Chia theo chủ ngữ gần nhất (employees)"
            },
            {
              "sentence": "Economics <em>is</em> my favorite subject.",
              "note": "Môn học chia số ít"
            }
          ]
        },
        {
          "title": "Bài 2: Special Countable & Uncountable Noun Nuances",
          "explanation": "Phân tích danh từ chỉ vật liệu, phạm trù chuyên ngành (criteria/criterion, phenomena/phenomenon, strata/stratum).",
          "examples": [
            {
              "sentence": "Social <em>media are</em> influencing public opinion.",
              "note": "Media (số nhiều gốc Latinh)"
            }
          ]
        },
        {
          "title": "Bài 3: Nominalization in Academic & Formal Writing",
          "explanation": "Chuyển đổi Động từ/Tính từ thành Cụm danh từ để tăng tính súc tích và trang trọng cho bài viết.",
          "examples": [
            {
              "sentence": "Informal: We analyzed the data quickly.",
              "note": "Cụm động từ"
            },
            {
              "sentence": "Formal: A rapid <em>analysis of the data</em> was conducted.",
              "note": "Nominalization"
            }
          ]
        },
        {
          "title": "Bài 4: Complex Noun Pre-modifiers & Genitives ('s vs Of)",
          "explanation": "Trật tự tiền bổ ngữ danh từ phức hợp (a state-of-the-art research facility) và chọn lựa 's vs of.",
          "examples": [
            {
              "sentence": "A <em>cutting-edge technology company</em>.",
              "note": "Tiền bổ ngữ danh từ"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The president as well as his advisors were present.",
          "correct": "The president as well as his advisors was present.",
          "tip": "Khi có \"as well as\", động từ chia theo chủ ngữ chính đầu tiên (president)."
        }
      ]
    }
  },
  {
    "id": "adv-articles",
    "level": "advanced",
    "title": "Articles, determiners, quantifiers",
    "subtitle": "8 bài về a,an, one, some…",
    "icon": "🎓",
    "order": 142,
    "murphyUnit": "Advanced Units 44–51",
    "content": {
      "overview": "8 bài chuyên sâu về Mạo từ & Từ định lượng nâng cao: Qui chiếu đại quát (Generic reference), Mạo từ zero, Quantifier Stacking, và Sự kết hợp từ.",
      "rules": [
        {
          "title": "Bài 1: Generic Reference with Articles (The vs A vs Plural)",
          "explanation": "Qui chiếu đại quát đại diện cho cả loài/thể loại: \"The + N số ít\" (trang trọng/khoa học), \"A + N số ít\" (bất kỳ đại diện nào), \"N số nhiều\" (thông dụng nhất).",
          "examples": [
            {
              "sentence": "<em>The blue whale</em> is the largest mammal.",
              "note": "Trang trọng khoa học (The)"
            },
            {
              "sentence": "<em>A whale</em> needs to breathe air.",
              "note": "Đại diện bất kỳ (A)"
            },
            {
              "sentence": "<em>Whales</em> are intelligent creatures.",
              "note": "Số nhiều thông dụng"
            }
          ]
        },
        {
          "title": "Bài 2: The with Proper Nouns & Unique Institutions",
          "explanation": "Sử dụng The với tên bảo tàng, báo chí, tổ chức, tàu thuyền, tác phẩm nghệ thuật nổi tiếng.",
          "examples": [
            {
              "sentence": "<em>The Louvre</em>, <em>The Times</em>, <em>The United Nations</em>.",
              "note": "Tổ chức & Thể chế"
            }
          ]
        },
        {
          "title": "Bài 3: Zero Article in Abstract & Academic Contexts",
          "explanation": "Không dùng mạo từ trước các danh từ khái niệm trừu tượng: society, nature, space, history, progress, technology.",
          "examples": [
            {
              "sentence": "<em>Technology</em> is transforming <em>society</em>.",
              "note": "Trừu tượng (Zero article)"
            }
          ]
        },
        {
          "title": "Bài 4: Advanced Quantifiers — Each, Every, All, Both, Neither, Either",
          "explanation": "Sự hòa hợp cú pháp và ngữ nghĩa khi đi kèm của \"All of\", \"Both of\", \"Neither of\".",
          "examples": [
            {
              "sentence": "<em>Neither of the proposed solutions</em> is viable.",
              "note": "Neither of + Plural N + Singular V"
            }
          ]
        },
        {
          "title": "Bài 5: Quantifiers with \"Of\" (A great deal of, A large proportion of)",
          "explanation": "Cách dùng tỉ lệ phần trăm, phân số và các cụm chỉ lượng lớn trong báo cáo thống kê.",
          "examples": [
            {
              "sentence": "A substantial <em>proportion of the budget</em> was allocated to R&D.",
              "note": "Proportion of"
            }
          ]
        },
        {
          "title": "Bài 6: Determiner Stack Order & Co-occurrence Restrictions",
          "explanation": "Trật tự xếp chồng Determiner: Predeterminer (all, both, double) -> Central (the, my) -> Postdeterminer (first, two, other).",
          "examples": [
            {
              "sentence": "<em>All my other three</em> projects.",
              "note": "Pre -> Central -> Post"
            }
          ]
        },
        {
          "title": "Bài 7: Indefinite Scope in Conditional & Negative Contexts",
          "explanation": "Cách dùng Any / Some trong câu điều kiện và câu khẳng định với ý nghĩa \"bất kỳ ai/cái nào\".",
          "examples": [
            {
              "sentence": "<em>Any candidate</em> who fails the test will be disqualified.",
              "note": "Any = bất kỳ ai"
            }
          ]
        },
        {
          "title": "Bài 8: Articles in Idiomatic & Fixed Prepositional Phrases",
          "explanation": "Bảng tổng hợp các cụm từ cố định đi kèm hoặc không đi kèm mạo từ (in the end, at last, by car, on foot, in demand).",
          "table": {
            "headers": [
              "Có Mạo từ (The/A)",
              "Không Mạo từ (Zero)"
            ],
            "rows": [
              [
                "in the long run / at the moment",
                "at night / by train / on foot"
              ],
              [
                "make a living / take a break",
                "take action / pay attention / make sense"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The technology is advancing fast.",
          "correct": "Technology is advancing fast.",
          "tip": "Khi nói chung về công nghệ (Technology), không dùng \"the\"."
        }
      ]
    }
  },
  {
    "id": "adv-relative",
    "level": "advanced",
    "title": "Relative clauses",
    "subtitle": "7 bài về mệnh đề quan hệ và những loại câu khác",
    "icon": "🎓",
    "order": 143,
    "murphyUnit": "Advanced Units 52–58",
    "content": {
      "overview": "7 bài học cao cấp về Mệnh đề quan hệ: Formal relative pronouns, Sentential relative clauses, Nominal relatives, Quantifier + of + relative, và Cleft sentences.",
      "rules": [
        {
          "title": "Bài 1: Formal Relative Pronouns with Prepositions (Whom / Which)",
          "explanation": "Đặt giới từ lên đầu mệnh đề quan hệ trong văn phong học thuật (in which, to whom, for whose).",
          "examples": [
            {
              "sentence": "The conditions <em>under which the experiment was conducted</em> were controlled.",
              "note": "Preposition + Which"
            }
          ]
        },
        {
          "title": "Bài 2: Sentential Relative Clauses (Which thay cho cả mệnh đề)",
          "explanation": "Dùng \", which\" ở cuối câu để đưa ra lời nhận xét/đánh giá về toàn bộ hành động/ý tưởng phía trước.",
          "examples": [
            {
              "sentence": "He passed the exam with distinction, <em>which surprised everyone</em>.",
              "note": "Which thay cho cả mệnh đề trước"
            }
          ]
        },
        {
          "title": "Bài 3: Reduced Relative Clauses with Participles & Adjectives",
          "explanation": "Rút gọn mệnh đề quan hệ phức tạp thành cụm Phân từ (Present/Past Participle) hoặc cụm Tính từ.",
          "examples": [
            {
              "sentence": "The candidates <em>eligible for the scholarship</em> will be notified.",
              "note": "Rút gọn thành Cụm tính từ"
            }
          ]
        },
        {
          "title": "Bài 4: Nominal Relative Clauses (What / Whoever / Whatever)",
          "explanation": "Mệnh đề quan hệ danh từ đóng vai trò làm Chủ ngữ hoặc Tân ngữ (What you need is rest / Take whatever you want).",
          "examples": [
            {
              "sentence": "<em>What concerns me most</em> is the lack of preparation.",
              "note": "What clause làm chủ ngữ"
            }
          ]
        },
        {
          "title": "Bài 5: Quantifier + OF + Relative Pronoun",
          "explanation": "Cấu trúc: Many of whom, Most of which, Neither of whose, Two of which.",
          "examples": [
            {
              "sentence": "She published 5 papers, <em>three of which</em> were featured in Nature.",
              "note": "Three of which"
            }
          ]
        },
        {
          "title": "Bài 6: Whose with Inanimate Nouns vs Of Which",
          "explanation": "Dùng \"whose\" cho cả vật trong câu trang trọng nhẹ nhàng (a company whose strategy changed) hoặc \"of which\".",
          "examples": [
            {
              "sentence": "It is a policy <em>whose consequences</em> are far-reaching.",
              "note": "Whose chỉ vật"
            }
          ]
        },
        {
          "title": "Bài 7: Relative Clauses vs Appositives (Mệnh đề đồng vị)",
          "explanation": "Phân biệt mệnh đề quan hệ (The news which he heard) và mệnh đề đồng vị giải thích (The news that he died).",
          "examples": [
            {
              "sentence": "The fact <em>that the earth is round</em> is undisputed.",
              "note": "Mệnh đề đồng vị (Appositive)"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "She has two sons, both of them are doctors.",
          "correct": "She has two sons, both of whom are doctors.",
          "tip": "Nối 2 mệnh đề độc lập phải dùng \"both of whom\", không dùng \"both of them\"."
        }
      ]
    }
  },
  {
    "id": "adv-pronouns",
    "level": "advanced",
    "title": "Pronouns, substitution, leaving out words",
    "subtitle": "6 bài về Đại từ nhân xưng, từ liên kết",
    "icon": "🎓",
    "order": 144,
    "murphyUnit": "Advanced Units 59–64",
    "content": {
      "overview": "6 bài học về Đại từ & Cấu trúc Lược bỏ (Ellipsis & Substitution): Lược bỏ từ lặp, Đại từ thay thế Do so / One / That, và Extraposition.",
      "rules": [
        {
          "title": "Bài 1: Ellipsis in Coordination & Comparison (Lược bỏ từ)",
          "explanation": "Lược bỏ thành phần trùng lặp trong câu nối và câu so sánh để tránh lặp từ (She can play piano and [she can] sing).",
          "examples": [
            {
              "sentence": "John cooked dinner and Mary [cooked] dessert.",
              "note": "Lược bỏ V trùng"
            }
          ]
        },
        {
          "title": "Bài 2: Substitution with \"Do so\", \"So\", \"That / Those\"",
          "explanation": "Dùng \"do so\" thay cho cụm động từ; \"that/those\" thay cho cụm danh từ trong văn viết trang trọng.",
          "examples": [
            {
              "sentence": "Applicants must sign the form; failure to <em>do so</em> will invalidate the application.",
              "note": "Do so"
            },
            {
              "sentence": "The climate of Vietnam is warmer than <em>that of</em> Canada.",
              "note": "That of = the climate of"
            }
          ]
        },
        {
          "title": "Bài 3: Extraposition with Dummy \"It\"",
          "explanation": "Chuyển mệnh đề chủ ngữ dài ra đằng sau bằng chủ ngữ giả \"It\" (It is vital that we maintain high standards).",
          "examples": [
            {
              "sentence": "<em>It is obvious that</em> further research is required.",
              "note": "Extraposition"
            }
          ]
        },
        {
          "title": "Bài 4: Disambiguation of Pronoun Reference in Academic Prose",
          "explanation": "Xử lý tính mơ hồ của đại từ (Pronoun Ambiguity) trong văn phong nghiên cứu khoa học.",
          "examples": [
            {
              "sentence": "Unclear: Tom told John that he won.",
              "note": "Mơ hồ (he là ai?)"
            },
            {
              "sentence": "Clear: Tom informed John of John's victory.",
              "note": "Rõ ràng"
            }
          ]
        },
        {
          "title": "Bài 5: Omission of Auxiliary Verbs & Relative Pronouns in Reduced Clauses",
          "explanation": "Quy tắc tiêu biến trợ động từ trong các câu rút gọn mệnh đề song song.",
          "examples": [
            {
              "sentence": "Some guests ordered tea, others [ordered] coffee.",
              "note": "Lược bỏ trợ V/động từ"
            }
          ]
        },
        {
          "title": "Bài 6: Reciprocal & Emphatic Pronouns in Formal Register",
          "explanation": "Sử dụng đại từ tương hỗ và đại từ nhấn mạnh trong các văn kiện ngoại giao/pháp lý.",
          "examples": [
            {
              "sentence": "The contracting parties pledge to support <em>one another</em>.",
              "note": "One another trong văn bản"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The salary of a manager is higher than a worker.",
          "correct": "The salary of a manager is higher than that of a worker.",
          "tip": "So sánh lương với lương, phải có \"that of\" để thay cho \"the salary of\"."
        }
      ]
    }
  },
  {
    "id": "adv-adjectives",
    "level": "advanced",
    "title": "Adjectives and adverbs",
    "subtitle": "13 bài về tính từ và trạng từ",
    "icon": "🎓",
    "order": 145,
    "murphyUnit": "Advanced Units 65–77",
    "content": {
      "overview": "13 bài cao cấp nhất về Tính từ & Trạng từ: Attributive vs Predicative, Gradability, Danh từ hóa Tính từ, Trạng từ thái độ (Stance Adverbs) và Đảo ngữ nâng cao.",
      "rules": [
        {
          "title": "Bài 1: Attributive vs Predicative Adjectives",
          "explanation": "Attributive (chỉ đứng trước N: main, chief, total, utter); Predicative (chỉ đứng sau To Be: afraid, asleep, alone, alive, aware).",
          "examples": [
            {
              "sentence": "The child is <em>asleep</em>. (NOT an asleep child)",
              "note": "Predicative only"
            },
            {
              "sentence": "This is the <em>main</em> reason. (NOT the reason is main)",
              "note": "Attributive only"
            }
          ]
        },
        {
          "title": "Bài 2: Advanced Adjective Order & Cumulative Adjectives",
          "explanation": "Phân biệt tính từ phối hợp (Coordinating - có dấu phẩy/and) và tính từ cộng dồn (Cumulative - không phẩy).",
          "examples": [
            {
              "sentence": "A long, dark, cold night.",
              "note": "Coordinating adjectives"
            }
          ]
        },
        {
          "title": "Bài 3: Gradable vs Absolute Adjectives & Degree Modifiers",
          "explanation": "Tuyệt đối: unique, perfect, impossible, dead. Đi kèm: utterly, completely, entirely, perfectly.",
          "examples": [
            {
              "sentence": "It is <em>utterly impossible</em> to complete.",
              "note": "Utterly + absolute adj"
            }
          ]
        },
        {
          "title": "Bài 4: Nominalized Adjectives (\"The\" + Adjective)",
          "explanation": "Dùng \"The + Adj\" để chỉ một nhóm người mang đặc điểm đó (The rich, the poor, the elderly, the unemployed) -> Chia động từ SỐ NHIỀU.",
          "examples": [
            {
              "sentence": "<em>The elderly are</em> more vulnerable to extreme weather.",
              "note": "The elderly + Plural V"
            }
          ]
        },
        {
          "title": "Bài 5: Advanced Participle Adjectives in Descriptive Prose",
          "explanation": "Tính từ phân từ tạo hiệu ứng miêu tả hình ảnh sống động (a glittering diamond, a shattered dream).",
          "examples": [
            {
              "sentence": "The <em>shattered window</em> offered no protection.",
              "note": "Participle adjective"
            }
          ]
        },
        {
          "title": "Bài 6: Position of Sentence & Stance Adverbs",
          "explanation": "Admittedly, Surprisingly, Frankly, Regrettably, Undeniably đứng đầu câu để thể hiện thái độ người nói.",
          "examples": [
            {
              "sentence": "<em>Admittedly</em>, the project faced initial setbacks.",
              "note": "Stance adverb"
            }
          ]
        },
        {
          "title": "Bài 7: Discourse & Comment Adverbs (Furthermore, Consequently)",
          "explanation": "Phân loại các trạng từ định hướng lập luận trong văn viết chính luận.",
          "examples": [
            {
              "sentence": "<em>Consequently</em>, the policy was repealed.",
              "note": "Comment adverb"
            }
          ]
        },
        {
          "title": "Bài 8: Inversion after Negative & Restrictive Adverbs (Đảo ngữ nâng cao)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "Under no circumstances <em>should you reveal</em> the password.",
              "note": "Đảo ngữ với Under no circumstances"
            }
          ]
        },
        {
          "title": "Bài 9: Complex Comparative Structures (As... as, The... the...)",
          "explanation": "Cấu trúc so sánh kết hợp mệnh đề (As much as I admire his work, I disagree with his conclusions).",
          "examples": [
            {
              "sentence": "<em>As much as I like</em> the idea, it is impractical.",
              "note": "As much as + Clause"
            }
          ]
        },
        {
          "title": "Bài 10: Superlatives with Advanced Modifiers",
          "explanation": "Quy tắc so sánh: So sánh hơn (Comparatives) dùng cho 2 đối tượng (short adj-er / more + long adj + than); So sánh nhất (Superlatives) dùng cho 3 đối tượng trở lên (the short adj-est / the most + long adj).",
          "examples": [
            {
              "sentence": "He is <em>arguably the greatest</em> physicist of our time.",
              "note": "Arguably + Superlative"
            }
          ]
        },
        {
          "title": "Bài 11: Compound Adjectives & Hyphenation Rules",
          "explanation": "Quy tắc dùng dấu gạch nối trong tính từ ghép (user-friendly, high-density, well-established).",
          "examples": [
            {
              "sentence": "A <em>well-established theory</em>.",
              "note": "Hyphenated compound"
            }
          ]
        },
        {
          "title": "Bài 12: Adverbial Modification of Clauses & Prepositional Phrases",
          "explanation": "Trạng từ bổ nghĩa cho cụm giới từ (right through the wall, straight to the point).",
          "examples": [
            {
              "sentence": "He walked <em>straight into the office</em>.",
              "note": "Straight bổ nghĩa cho into..."
            }
          ]
        },
        {
          "title": "Bài 13: Adjectives with Fixed Prepositions & Infinitives",
          "explanation": "Bảng tổng hợp tính từ cao cấp đi kèm giới từ (prone to, susceptible to, immune to, exempt from).",
          "table": {
            "headers": [
              "Tính từ",
              "Giới từ đi kèm",
              "Ý nghĩa"
            ],
            "rows": [
              [
                "prone to",
                "to (+ N/V-ing)",
                "dễ bị (bệnh/tai nạn)"
              ],
              [
                "susceptible to",
                "to (+ N)",
                "nhạy cảm/dễ bị ảnh hưởng"
              ],
              [
                "exempt from",
                "from (+ N)",
                "được miễn"
              ]
            ]
          },
          "examples": [
            {
              "sentence": "Old cars are <em>prone to breaking down</em>.",
              "note": "Prone to + V-ing"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "The rich is getting richer.",
          "correct": "The rich are getting richer.",
          "tip": "Cấu trúc \"The + Adj\" chỉ một nhóm người luôn chia động từ số nhiều."
        }
      ]
    }
  },
  {
    "id": "adv-adverbial",
    "level": "advanced",
    "title": "Adverbial clauses and conjunctions",
    "subtitle": "9 bài về mệnh đề và liên từ",
    "icon": "🎓",
    "order": 146,
    "murphyUnit": "Advanced Units 78–86",
    "content": {
      "overview": "9 bài chuyên sâu về Mệnh đề Trạng ngữ (Adverbial Clauses): Thời gian, Nguyên nhân, Mục đích, Kết quả, Nhượng bộ, Điều kiện nâng cao và Đảo ngữ điều kiện.",
      "rules": [
        {
          "title": "Bài 1: Time Clauses & Advanced Temporal Markers",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "<em>The moment (that) I heard</em> the news, I called him.",
              "note": "The moment that"
            }
          ]
        },
        {
          "title": "Bài 2: Clauses of Reason & Cause (In view of, Seeing that)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "<em>Seeing that it is raining</em>, we should postpone the game.",
              "note": "Seeing that = because"
            }
          ]
        },
        {
          "title": "Bài 3: Clauses of Purpose (Lest, For fear that, So as to)",
          "explanation": "Lest / For fear that + S + should + V1 (phòng ngừa việc xấu xảy ra).",
          "examples": [
            {
              "sentence": "He checked the document again <em>lest he should make</em> a mistake.",
              "note": "Lest + S + should V"
            }
          ]
        },
        {
          "title": "Bài 4: Clauses of Result (With the result that)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "examples": [
            {
              "sentence": "Sales dropped sharply, <em>with the result that</em> staff were laid off.",
              "note": "With the result that"
            }
          ]
        },
        {
          "title": "Bài 5: Clauses of Concession (Much as, However, Whatever)",
          "explanation": "Much as + S + V (Dù cho rất...: Much as I respect him, I disagree); Adj + as/though + S + V (Hard as he tried...).",
          "examples": [
            {
              "sentence": "<em>Much as I would like to help</em>, I am unable to.",
              "note": "Much as = Although very much"
            },
            {
              "sentence": "<em>Hard as he tried</em>, he couldn't open the safe.",
              "note": "Adj + as + S + V"
            }
          ]
        },
        {
          "title": "Bài 6: Inverted Conditionals (Đảo ngữ Câu Điều kiện)",
          "explanation": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ. Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Hầu hết trạng từ được tạo bằng cách thêm đuôi -ly vào tính từ.",
          "table": {
            "headers": [
              "Loại Điều kiện",
              "Câu Chuẩn",
              "Đảo Ngữ Trang Trọng"
            ],
            "rows": [
              [
                "Loại 1",
                "If you need help...",
                "Should you need help..."
              ],
              [
                "Loại 2",
                "If I were rich...",
                "Were I rich..."
              ],
              [
                "Loại 3",
                "If I had known...",
                "Had I known..."
              ]
            ]
          },
          "examples": [
            {
              "sentence": "<em>Had I known</em> about the traffic, I would have taken the metro.",
              "note": "Đảo ngữ Loại 3"
            }
          ]
        },
        {
          "title": "Bài 7: Manner & Comparison Clauses (As if / As though)",
          "explanation": "Phân biệt mệnh đề chỉ thể cách thật (Present) vs giả định (Past Subjunctive).",
          "examples": [
            {
              "sentence": "He looks as if he <em>has seen</em> a ghost. (Có vẻ vừa thấy thật)",
              "note": "Hiện tại"
            },
            {
              "sentence": "He behaves as if he <em>were</em> the king. (Giả định không thật)",
              "note": "Past Subjunctive"
            }
          ]
        },
        {
          "title": "Bài 8: Reduced Adverbial Participle Clauses",
          "explanation": "Rút gọn mệnh đề trạng ngữ đồng chủ ngữ: Having finished the report, he submitted it.",
          "examples": [
            {
              "sentence": "<em>Having completed the survey</em>, the team analyzed the responses.",
              "note": "Having + V3 clause"
            }
          ]
        },
        {
          "title": "Bài 9: Transition & Discourse Connectors Matrix",
          "explanation": "Bảng phân loại toàn bộ các từ nối theo nhóm chức năng logic trong văn bản.",
          "table": {
            "headers": [
              "Chức năng",
              "Từ nối / Mệnh đề trạng ngữ"
            ],
            "rows": [
              [
                "Tương phản",
                "although, whereas, in spite of, nonetheless, converseley"
              ],
              [
                "Nguyên nhân",
                "because, since, owing to, seeing that, on account of"
              ],
              [
                "Bổ sung",
                "furthermore, in addition, moreover, besides, along with"
              ]
            ]
          }
        }
      ],
      "commonMistakes": [
        {
          "wrong": "Had I knew the truth, I would have told you.",
          "correct": "Had I known the truth, I would have told you.",
          "tip": "Đảo ngữ loại 3 dùng Had + S + V3 (known, not knew)."
        }
      ]
    }
  },
  {
    "id": "adv-prepositions",
    "level": "advanced",
    "title": "Prepositions",
    "subtitle": "7 bài về Giới từ",
    "icon": "🎓",
    "order": 147,
    "murphyUnit": "Advanced Units 87–93",
    "content": {
      "overview": "7 bài cao cấp về Giới từ: Complex prepositions, Prepositional phrases as modifiers, Dependent prepositions và Postposed prepositions (Preposition stranding).",
      "rules": [
        {
          "title": "Bài 1: Complex Multi-word Prepositions",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "<em>In light of recent events</em>, we have updated our policy.",
              "note": "In light of"
            }
          ]
        },
        {
          "title": "Bài 2: Prepositional Phrases as Post-modifiers in Noun Phrases",
          "explanation": "Dùng cụm giới từ làm bổ ngữ sau danh từ (the man with the yellow hat, the problem of global warming).",
          "examples": [
            {
              "sentence": "The issue <em>under discussion</em> is critical.",
              "note": "Post-modifier"
            }
          ]
        },
        {
          "title": "Bài 3: Advanced Verbs with Fixed Prepositions",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "He <em>attributed his success to</em> hard work.",
              "note": "Attribute... to"
            }
          ]
        },
        {
          "title": "Bài 4: Advanced Adjectives with Fixed Prepositions",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "His statement was <em>tantamount to an admission of guilt</em>.",
              "note": "Tantamount to"
            }
          ]
        },
        {
          "title": "Bài 5: Prepositions vs Conjunctions Contrast Matrix",
          "explanation": "Ma trận phân biệt giới từ (cần Noun) vs Liên từ (cần Mệnh đề): During/While, Due to/Because, Despite/Although.",
          "examples": [
            {
              "sentence": "We stayed indoors <em>owing to the storm</em>.",
              "note": "Giới từ + Noun"
            }
          ]
        },
        {
          "title": "Bài 6: Preposition Stranding (Giới từ treo ở cuối câu)",
          "explanation": "Hiện tượng giới từ đứng ở cuối câu trong mệnh đề quan hệ, câu bị động và câu hỏi.",
          "examples": [
            {
              "sentence": "That is the house which I spent my childhood <em>in</em>.",
              "note": "Preposition stranding"
            }
          ]
        },
        {
          "title": "Bài 7: Idiomatic Prepositional Metaphors in Business & Law",
          "explanation": "Giới từ thời gian và nơi chốn: AT dùng cho giờ/mốc cụ thể (at 5 PM, at the station); ON dùng cho ngày/bề mặt (on Monday, on the desk); IN dùng cho tháng/năm/không gian khép kín (in July, in 2024, in the room).",
          "examples": [
            {
              "sentence": "The event was held <em>under the auspices of the UN</em>.",
              "note": "Thành ngữ giới từ"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "In accordance to the rules.",
          "correct": "In accordance with the rules.",
          "tip": "Cụm từ chuẩn là \"in accordance with\"."
        }
      ]
    }
  },
  {
    "id": "adv-organising",
    "level": "advanced",
    "title": "Organising information",
    "subtitle": "6 bài về các cấu trúc sắp xếp thông tin",
    "icon": "🎓",
    "order": 148,
    "murphyUnit": "Advanced Units 94–100",
    "content": {
      "overview": "6 bài học nghệ thuật Viết nâng cao: Cấu trúc Tiền đề (Fronting), Đảo ngữ nghệ thuật (Inversion), Câu chẻ (Cleft Sentences), Bao gói thông tin (Information Packaging) và Đã biết vs Mới (Given vs New Information).",
      "rules": [
        {
          "title": "Bài 1: Fronting & Topicalization (Tiền đề hóa)",
          "explanation": "Đưa tân ngữ, cụm giới từ hoặc bổ ngữ lên đầu câu để tạo sự chú ý hoặc liên kết văn bản.",
          "examples": [
            {
              "sentence": "Standard: I cannot tolerate such behavior.",
              "note": "Chuẩn"
            },
            {
              "sentence": "Fronted: <em>Such behavior I cannot tolerate</em>.",
              "note": "Tiền đề hóa nhấn mạnh"
            }
          ]
        },
        {
          "title": "Bài 2: Subject-Verb Inversion for Literary Effect",
          "explanation": "Đảo động từ chính lên trước chủ ngữ khi mệnh đề bắt đầu bằng từ chỉ phương hướng/vị trí (Into the room walked a stranger).",
          "examples": [
            {
              "sentence": "On the top of the hill <em>stood an ancient castle</em>.",
              "note": "Đảo ngữ vị trí (Place inversion)"
            }
          ]
        },
        {
          "title": "Bài 3: Cleft Sentences — It-clefts & Wh-clefts (Câu chẻ)",
          "explanation": "It is/was... that... (nhấn mạnh 1 thành phần cụ thể); What... is/was... (nhấn mạnh hành động/ý niệm).",
          "examples": [
            {
              "sentence": "<em>It was John who</em> broke the window.",
              "note": "It-cleft"
            },
            {
              "sentence": "<em>What we need is</em> a clear strategy.",
              "note": "Wh-cleft / Pseudo-cleft"
            }
          ]
        },
        {
          "title": "Bài 4: Passive Voice for Information Packaging (Given vs New)",
          "explanation": "Đặt thông tin cũ/đã biết (Given info) ở đầu câu và thông tin mới/quan trọng (New info) ở cuối câu.",
          "examples": [
            {
              "sentence": "The theory was proposed by Einstein in 1905. <em>This theory was later validated</em> by experimental data.",
              "note": "Given -> New flow"
            }
          ]
        },
        {
          "title": "Bài 5: Extraposition of Heavy Clauses (Đưa mệnh đề dài ra sau)",
          "explanation": "Di chuyển mệnh đề chủ ngữ hoặc tân ngữ quá dài về cuối câu để câu cân đối (Weight Principle).",
          "examples": [
            {
              "sentence": "<em>It surprised everyone that</em> a small firm won the tender.",
              "note": "Extraposition"
            }
          ]
        },
        {
          "title": "Bài 6: Parallelism & Rhetorical Balance in Sentence Structure",
          "explanation": "Cấu trúc song song (Parallelism) tạo nhịp điệu và sự cân bằng nghệ thuật trong văn phong diễn thuyết.",
          "examples": [
            {
              "sentence": "Not only did he <em>inspire the team</em>, but he also <em>secured the funding</em>.",
              "note": "Song song cấu trúc"
            }
          ]
        }
      ],
      "commonMistakes": [
        {
          "wrong": "It was John which broke the window.",
          "correct": "It was John who/that broke the window.",
          "tip": "Trong It-cleft chỉ người, dùng \"who\" hoặc \"that\", không dùng \"which\"."
        }
      ]
    }
  }
];

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



// Helper functions
export function getTopicsByLevel(level) {
  return GRAMMAR_TOPICS.filter(t => t.level === level).sort((a, b) => a.order - b.order);
}

export function getTopicById(id) {
  return GRAMMAR_TOPICS.find(t => t.id === id);
}

export function getLevelInfo(levelId) {
  return LEVELS.find(l => l.id === levelId);
}

export function getAllTopics() {
  return GRAMMAR_TOPICS;
}

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
