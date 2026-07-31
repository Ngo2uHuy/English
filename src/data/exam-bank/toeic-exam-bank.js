// ==========================================================================
// 20 Authentic TOEIC Mock Exam Papers
// ==========================================================================
export const TOEIC_EXAM_PAPERS = [
  {
    "id": "toeic-paper-01",
    "title": "TOEIC Official Practice Exam #01: International Business Expansion & Logistics",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t1-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about international business expansion & logistics]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t1-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Singapore]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t1-p2-q1",
              "audioText": "When is the final report on international business expansion & logistics scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t1-p2-q2",
              "audioText": "Who will be leading the presentation regarding supply-chain?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on international business expansion & logistics?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for supply-chain training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t1-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding International Business Expansion & Logistics",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding International Business Expansion & Logistics",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t1-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for supply-chain training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for supply-chain training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on international business expansion & logistics in Singapore. Over the past fiscal year, our organization achieved remarkable growth by focusing on supply-chain. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t1-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t1-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on supply-chain",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on supply-chain",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t1-p5-q1",
              "sentence": "The committee agreed that strict adherence to supply-chain guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t1-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of International Business Expansion & Logistics\n\nPlease be advised that our new operational protocols regarding international business expansion & logistics will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Singapore. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t1-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t1-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — INTERNATIONAL BUSINESS EXPANSION & LOGISTICS\nPublished by Global Market Insights Group (Singapore)\n\nOver the past three years, advancements in international business expansion & logistics have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of supply-chain reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t1-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t1-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-02",
    "title": "TOEIC Official Practice Exam #02: Renewable Energy Grid Modernization",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t2-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about renewable energy grid modernization]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t2-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Germany]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t2-p2-q1",
              "audioText": "When is the final report on renewable energy grid modernization scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t2-p2-q2",
              "audioText": "Who will be leading the presentation regarding photovoltaic?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on renewable energy grid modernization?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for photovoltaic training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t2-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Renewable Energy Grid Modernization",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Renewable Energy Grid Modernization",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t2-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for photovoltaic training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for photovoltaic training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on renewable energy grid modernization in Germany. Over the past fiscal year, our organization achieved remarkable growth by focusing on photovoltaic. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t2-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t2-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on photovoltaic",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on photovoltaic",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t2-p5-q1",
              "sentence": "The committee agreed that strict adherence to photovoltaic guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t2-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Renewable Energy Grid Modernization\n\nPlease be advised that our new operational protocols regarding renewable energy grid modernization will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Germany. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t2-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t2-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — RENEWABLE ENERGY GRID MODERNIZATION\nPublished by Global Market Insights Group (Germany)\n\nOver the past three years, advancements in renewable energy grid modernization have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of photovoltaic reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t2-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t2-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-03",
    "title": "TOEIC Official Practice Exam #03: Artificial Intelligence in Medical Imaging",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t3-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about artificial intelligence in medical imaging]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t3-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Japan]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t3-p2-q1",
              "audioText": "When is the final report on artificial intelligence in medical imaging scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t3-p2-q2",
              "audioText": "Who will be leading the presentation regarding diagnostics?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on artificial intelligence in medical imaging?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for diagnostics training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t3-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Artificial Intelligence in Medical Imaging",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Artificial Intelligence in Medical Imaging",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t3-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for diagnostics training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for diagnostics training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on artificial intelligence in medical imaging in Japan. Over the past fiscal year, our organization achieved remarkable growth by focusing on diagnostics. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t3-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t3-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on diagnostics",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on diagnostics",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t3-p5-q1",
              "sentence": "The committee agreed that strict adherence to diagnostics guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t3-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Artificial Intelligence in Medical Imaging\n\nPlease be advised that our new operational protocols regarding artificial intelligence in medical imaging will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Japan. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t3-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t3-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — ARTIFICIAL INTELLIGENCE IN MEDICAL IMAGING\nPublished by Global Market Insights Group (Japan)\n\nOver the past three years, advancements in artificial intelligence in medical imaging have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of diagnostics reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t3-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t3-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-04",
    "title": "TOEIC Official Practice Exam #04: E-Commerce Consumer Rights & Data Privacy",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t4-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about e-commerce consumer rights & data privacy]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t4-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in UK]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t4-p2-q1",
              "audioText": "When is the final report on e-commerce consumer rights & data privacy scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t4-p2-q2",
              "audioText": "Who will be leading the presentation regarding encryption?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on e-commerce consumer rights & data privacy?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for encryption training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t4-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding E-Commerce Consumer Rights & Data Privacy",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding E-Commerce Consumer Rights & Data Privacy",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t4-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for encryption training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for encryption training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on e-commerce consumer rights & data privacy in UK. Over the past fiscal year, our organization achieved remarkable growth by focusing on encryption. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t4-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t4-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on encryption",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on encryption",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t4-p5-q1",
              "sentence": "The committee agreed that strict adherence to encryption guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t4-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of E-Commerce Consumer Rights & Data Privacy\n\nPlease be advised that our new operational protocols regarding e-commerce consumer rights & data privacy will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in UK. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t4-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t4-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — E-COMMERCE CONSUMER RIGHTS & DATA PRIVACY\nPublished by Global Market Insights Group (UK)\n\nOver the past three years, advancements in e-commerce consumer rights & data privacy have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of encryption reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t4-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t4-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-05",
    "title": "TOEIC Official Practice Exam #05: Urban High-Speed Rail Infrastructure",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t5-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about urban high-speed rail infrastructure]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t5-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in France]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t5-p2-q1",
              "audioText": "When is the final report on urban high-speed rail infrastructure scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t5-p2-q2",
              "audioText": "Who will be leading the presentation regarding transit?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on urban high-speed rail infrastructure?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for transit training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t5-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Urban High-Speed Rail Infrastructure",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Urban High-Speed Rail Infrastructure",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t5-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for transit training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for transit training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on urban high-speed rail infrastructure in France. Over the past fiscal year, our organization achieved remarkable growth by focusing on transit. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t5-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t5-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on transit",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on transit",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t5-p5-q1",
              "sentence": "The committee agreed that strict adherence to transit guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t5-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Urban High-Speed Rail Infrastructure\n\nPlease be advised that our new operational protocols regarding urban high-speed rail infrastructure will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in France. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t5-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t5-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — URBAN HIGH-SPEED RAIL INFRASTRUCTURE\nPublished by Global Market Insights Group (France)\n\nOver the past three years, advancements in urban high-speed rail infrastructure have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of transit reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t5-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t5-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-06",
    "title": "TOEIC Official Practice Exam #06: Hospitality & Luxury Hotel Guest Services",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t6-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about hospitality & luxury hotel guest services]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t6-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Switzerland]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t6-p2-q1",
              "audioText": "When is the final report on hospitality & luxury hotel guest services scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t6-p2-q2",
              "audioText": "Who will be leading the presentation regarding concierge?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on hospitality & luxury hotel guest services?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for concierge training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t6-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Hospitality & Luxury Hotel Guest Services",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Hospitality & Luxury Hotel Guest Services",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t6-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for concierge training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for concierge training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on hospitality & luxury hotel guest services in Switzerland. Over the past fiscal year, our organization achieved remarkable growth by focusing on concierge. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t6-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t6-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on concierge",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on concierge",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t6-p5-q1",
              "sentence": "The committee agreed that strict adherence to concierge guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t6-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Hospitality & Luxury Hotel Guest Services\n\nPlease be advised that our new operational protocols regarding hospitality & luxury hotel guest services will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Switzerland. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t6-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t6-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — HOSPITALITY & LUXURY HOTEL GUEST SERVICES\nPublished by Global Market Insights Group (Switzerland)\n\nOver the past three years, advancements in hospitality & luxury hotel guest services have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of concierge reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t6-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t6-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-07",
    "title": "TOEIC Official Practice Exam #07: Corporate Financial Audit & Risk Governance",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t7-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about corporate financial audit & risk governance]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t7-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in USA]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t7-p2-q1",
              "audioText": "When is the final report on corporate financial audit & risk governance scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t7-p2-q2",
              "audioText": "Who will be leading the presentation regarding compliance?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on corporate financial audit & risk governance?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for compliance training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t7-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Corporate Financial Audit & Risk Governance",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Corporate Financial Audit & Risk Governance",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t7-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for compliance training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for compliance training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on corporate financial audit & risk governance in USA. Over the past fiscal year, our organization achieved remarkable growth by focusing on compliance. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t7-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t7-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on compliance",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on compliance",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t7-p5-q1",
              "sentence": "The committee agreed that strict adherence to compliance guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t7-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Corporate Financial Audit & Risk Governance\n\nPlease be advised that our new operational protocols regarding corporate financial audit & risk governance will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in USA. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t7-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t7-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — CORPORATE FINANCIAL AUDIT & RISK GOVERNANCE\nPublished by Global Market Insights Group (USA)\n\nOver the past three years, advancements in corporate financial audit & risk governance have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of compliance reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t7-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t7-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-08",
    "title": "TOEIC Official Practice Exam #08: Aerospace Engineering & Satellite Systems",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t8-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about aerospace engineering & satellite systems]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t8-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Canada]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t8-p2-q1",
              "audioText": "When is the final report on aerospace engineering & satellite systems scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t8-p2-q2",
              "audioText": "Who will be leading the presentation regarding telemetry?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on aerospace engineering & satellite systems?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for telemetry training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t8-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Aerospace Engineering & Satellite Systems",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Aerospace Engineering & Satellite Systems",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t8-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for telemetry training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for telemetry training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on aerospace engineering & satellite systems in Canada. Over the past fiscal year, our organization achieved remarkable growth by focusing on telemetry. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t8-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t8-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on telemetry",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on telemetry",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t8-p5-q1",
              "sentence": "The committee agreed that strict adherence to telemetry guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t8-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Aerospace Engineering & Satellite Systems\n\nPlease be advised that our new operational protocols regarding aerospace engineering & satellite systems will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Canada. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t8-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t8-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — AEROSPACE ENGINEERING & SATELLITE SYSTEMS\nPublished by Global Market Insights Group (Canada)\n\nOver the past three years, advancements in aerospace engineering & satellite systems have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of telemetry reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t8-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t8-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-09",
    "title": "TOEIC Official Practice Exam #09: Sustainable Ecotourism & Marine Conservation",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t9-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about sustainable ecotourism & marine conservation]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t9-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Australia]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t9-p2-q1",
              "audioText": "When is the final report on sustainable ecotourism & marine conservation scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t9-p2-q2",
              "audioText": "Who will be leading the presentation regarding biodiversity?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on sustainable ecotourism & marine conservation?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for biodiversity training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t9-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Sustainable Ecotourism & Marine Conservation",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Sustainable Ecotourism & Marine Conservation",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t9-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for biodiversity training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for biodiversity training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on sustainable ecotourism & marine conservation in Australia. Over the past fiscal year, our organization achieved remarkable growth by focusing on biodiversity. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t9-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t9-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on biodiversity",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on biodiversity",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t9-p5-q1",
              "sentence": "The committee agreed that strict adherence to biodiversity guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t9-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Sustainable Ecotourism & Marine Conservation\n\nPlease be advised that our new operational protocols regarding sustainable ecotourism & marine conservation will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Australia. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t9-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t9-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — SUSTAINABLE ECOTOURISM & MARINE CONSERVATION\nPublished by Global Market Insights Group (Australia)\n\nOver the past three years, advancements in sustainable ecotourism & marine conservation have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of biodiversity reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t9-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t9-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-10",
    "title": "TOEIC Official Practice Exam #10: Agile Software Development & DevOps",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t10-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about agile software development & devops]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t10-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Sweden]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t10-p2-q1",
              "audioText": "When is the final report on agile software development & devops scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t10-p2-q2",
              "audioText": "Who will be leading the presentation regarding deployment?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on agile software development & devops?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for deployment training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t10-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Agile Software Development & DevOps",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Agile Software Development & DevOps",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t10-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for deployment training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for deployment training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on agile software development & devops in Sweden. Over the past fiscal year, our organization achieved remarkable growth by focusing on deployment. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t10-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t10-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on deployment",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on deployment",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t10-p5-q1",
              "sentence": "The committee agreed that strict adherence to deployment guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t10-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Agile Software Development & DevOps\n\nPlease be advised that our new operational protocols regarding agile software development & devops will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Sweden. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t10-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t10-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — AGILE SOFTWARE DEVELOPMENT & DEVOPS\nPublished by Global Market Insights Group (Sweden)\n\nOver the past three years, advancements in agile software development & devops have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of deployment reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t10-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t10-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-11",
    "title": "TOEIC Official Practice Exam #11: Commercial Real Estate Property Valuation",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t11-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about commercial real estate property valuation]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t11-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Netherlands]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t11-p2-q1",
              "audioText": "When is the final report on commercial real estate property valuation scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t11-p2-q2",
              "audioText": "Who will be leading the presentation regarding appreciation?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on commercial real estate property valuation?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for appreciation training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t11-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Commercial Real Estate Property Valuation",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Commercial Real Estate Property Valuation",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t11-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for appreciation training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for appreciation training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on commercial real estate property valuation in Netherlands. Over the past fiscal year, our organization achieved remarkable growth by focusing on appreciation. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t11-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t11-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on appreciation",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on appreciation",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t11-p5-q1",
              "sentence": "The committee agreed that strict adherence to appreciation guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t11-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Commercial Real Estate Property Valuation\n\nPlease be advised that our new operational protocols regarding commercial real estate property valuation will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Netherlands. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t11-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t11-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — COMMERCIAL REAL ESTATE PROPERTY VALUATION\nPublished by Global Market Insights Group (Netherlands)\n\nOver the past three years, advancements in commercial real estate property valuation have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of appreciation reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t11-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t11-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-12",
    "title": "TOEIC Official Practice Exam #12: Automobile Electric Vehicle Battery Tech",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t12-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about automobile electric vehicle battery tech]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t12-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in South Korea]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t12-p2-q1",
              "audioText": "When is the final report on automobile electric vehicle battery tech scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t12-p2-q2",
              "audioText": "Who will be leading the presentation regarding lithium?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on automobile electric vehicle battery tech?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for lithium training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t12-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Automobile Electric Vehicle Battery Tech",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Automobile Electric Vehicle Battery Tech",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t12-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for lithium training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for lithium training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on automobile electric vehicle battery tech in South Korea. Over the past fiscal year, our organization achieved remarkable growth by focusing on lithium. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t12-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t12-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on lithium",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on lithium",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t12-p5-q1",
              "sentence": "The committee agreed that strict adherence to lithium guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t12-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Automobile Electric Vehicle Battery Tech\n\nPlease be advised that our new operational protocols regarding automobile electric vehicle battery tech will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in South Korea. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t12-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t12-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — AUTOMOBILE ELECTRIC VEHICLE BATTERY TECH\nPublished by Global Market Insights Group (South Korea)\n\nOver the past three years, advancements in automobile electric vehicle battery tech have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of lithium reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t12-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t12-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-13",
    "title": "TOEIC Official Practice Exam #13: Pharmaceutical Clinical Trials & Biotech",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t13-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about pharmaceutical clinical trials & biotech]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t13-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Denmark]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t13-p2-q1",
              "audioText": "When is the final report on pharmaceutical clinical trials & biotech scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t13-p2-q2",
              "audioText": "Who will be leading the presentation regarding efficacy?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on pharmaceutical clinical trials & biotech?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for efficacy training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t13-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Pharmaceutical Clinical Trials & Biotech",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Pharmaceutical Clinical Trials & Biotech",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t13-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for efficacy training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for efficacy training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on pharmaceutical clinical trials & biotech in Denmark. Over the past fiscal year, our organization achieved remarkable growth by focusing on efficacy. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t13-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t13-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on efficacy",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on efficacy",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t13-p5-q1",
              "sentence": "The committee agreed that strict adherence to efficacy guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t13-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Pharmaceutical Clinical Trials & Biotech\n\nPlease be advised that our new operational protocols regarding pharmaceutical clinical trials & biotech will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Denmark. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t13-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t13-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — PHARMACEUTICAL CLINICAL TRIALS & BIOTECH\nPublished by Global Market Insights Group (Denmark)\n\nOver the past three years, advancements in pharmaceutical clinical trials & biotech have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of efficacy reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t13-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t13-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-14",
    "title": "TOEIC Official Practice Exam #14: Higher Education Digital Distance Learning",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t14-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about higher education digital distance learning]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t14-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in New Zealand]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t14-p2-q1",
              "audioText": "When is the final report on higher education digital distance learning scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t14-p2-q2",
              "audioText": "Who will be leading the presentation regarding pedagogy?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on higher education digital distance learning?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for pedagogy training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t14-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Higher Education Digital Distance Learning",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Higher Education Digital Distance Learning",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t14-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for pedagogy training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for pedagogy training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on higher education digital distance learning in New Zealand. Over the past fiscal year, our organization achieved remarkable growth by focusing on pedagogy. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t14-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t14-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on pedagogy",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on pedagogy",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t14-p5-q1",
              "sentence": "The committee agreed that strict adherence to pedagogy guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t14-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Higher Education Digital Distance Learning\n\nPlease be advised that our new operational protocols regarding higher education digital distance learning will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in New Zealand. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t14-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t14-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — HIGHER EDUCATION DIGITAL DISTANCE LEARNING\nPublished by Global Market Insights Group (New Zealand)\n\nOver the past three years, advancements in higher education digital distance learning have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of pedagogy reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t14-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t14-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-15",
    "title": "TOEIC Official Practice Exam #15: Agricultural Water Management & Hydroponics",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t15-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about agricultural water management & hydroponics]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t15-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Israel]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t15-p2-q1",
              "audioText": "When is the final report on agricultural water management & hydroponics scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t15-p2-q2",
              "audioText": "Who will be leading the presentation regarding irrigation?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on agricultural water management & hydroponics?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for irrigation training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t15-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Agricultural Water Management & Hydroponics",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Agricultural Water Management & Hydroponics",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t15-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for irrigation training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for irrigation training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on agricultural water management & hydroponics in Israel. Over the past fiscal year, our organization achieved remarkable growth by focusing on irrigation. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t15-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t15-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on irrigation",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on irrigation",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t15-p5-q1",
              "sentence": "The committee agreed that strict adherence to irrigation guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t15-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Agricultural Water Management & Hydroponics\n\nPlease be advised that our new operational protocols regarding agricultural water management & hydroponics will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Israel. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t15-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t15-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — AGRICULTURAL WATER MANAGEMENT & HYDROPONICS\nPublished by Global Market Insights Group (Israel)\n\nOver the past three years, advancements in agricultural water management & hydroponics have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of irrigation reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t15-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t15-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-16",
    "title": "TOEIC Official Practice Exam #16: International Trade Agreements & Tariffs",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t16-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about international trade agreements & tariffs]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t16-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Belgium]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t16-p2-q1",
              "audioText": "When is the final report on international trade agreements & tariffs scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t16-p2-q2",
              "audioText": "Who will be leading the presentation regarding customs?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on international trade agreements & tariffs?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for customs training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t16-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding International Trade Agreements & Tariffs",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding International Trade Agreements & Tariffs",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t16-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for customs training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for customs training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on international trade agreements & tariffs in Belgium. Over the past fiscal year, our organization achieved remarkable growth by focusing on customs. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t16-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t16-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on customs",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on customs",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t16-p5-q1",
              "sentence": "The committee agreed that strict adherence to customs guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t16-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of International Trade Agreements & Tariffs\n\nPlease be advised that our new operational protocols regarding international trade agreements & tariffs will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Belgium. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t16-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t16-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — INTERNATIONAL TRADE AGREEMENTS & TARIFFS\nPublished by Global Market Insights Group (Belgium)\n\nOver the past three years, advancements in international trade agreements & tariffs have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of customs reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t16-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t16-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-17",
    "title": "TOEIC Official Practice Exam #17: Media Broadcasting & Citizen Journalism",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t17-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about media broadcasting & citizen journalism]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t17-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in undefined]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t17-p2-q1",
              "audioText": "When is the final report on media broadcasting & citizen journalism scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t17-p2-q2",
              "audioText": "Who will be leading the presentation regarding impartiality?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on media broadcasting & citizen journalism?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for impartiality training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t17-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Media Broadcasting & Citizen Journalism",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Media Broadcasting & Citizen Journalism",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t17-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for impartiality training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for impartiality training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on media broadcasting & citizen journalism in undefined. Over the past fiscal year, our organization achieved remarkable growth by focusing on impartiality. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t17-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t17-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on impartiality",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on impartiality",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t17-p5-q1",
              "sentence": "The committee agreed that strict adherence to impartiality guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t17-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Media Broadcasting & Citizen Journalism\n\nPlease be advised that our new operational protocols regarding media broadcasting & citizen journalism will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in undefined. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t17-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t17-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — MEDIA BROADCASTING & CITIZEN JOURNALISM\nPublished by Global Market Insights Group (undefined)\n\nOver the past three years, advancements in media broadcasting & citizen journalism have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of impartiality reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t17-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t17-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-18",
    "title": "TOEIC Official Practice Exam #18: Municipal Emergency Fire & Seismic Preparedness",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t18-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about municipal emergency fire & seismic preparedness]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t18-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Chile]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t18-p2-q1",
              "audioText": "When is the final report on municipal emergency fire & seismic preparedness scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t18-p2-q2",
              "audioText": "Who will be leading the presentation regarding retrofitting?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on municipal emergency fire & seismic preparedness?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for retrofitting training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t18-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Municipal Emergency Fire & Seismic Preparedness",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Municipal Emergency Fire & Seismic Preparedness",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t18-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for retrofitting training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for retrofitting training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on municipal emergency fire & seismic preparedness in Chile. Over the past fiscal year, our organization achieved remarkable growth by focusing on retrofitting. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t18-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t18-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on retrofitting",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on retrofitting",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t18-p5-q1",
              "sentence": "The committee agreed that strict adherence to retrofitting guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t18-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Municipal Emergency Fire & Seismic Preparedness\n\nPlease be advised that our new operational protocols regarding municipal emergency fire & seismic preparedness will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Chile. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t18-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t18-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — MUNICIPAL EMERGENCY FIRE & SEISMIC PREPAREDNESS\nPublished by Global Market Insights Group (Chile)\n\nOver the past three years, advancements in municipal emergency fire & seismic preparedness have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of retrofitting reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t18-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t18-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-19",
    "title": "TOEIC Official Practice Exam #19: Fintech Mobile Payment Systems & Security",
    "type": "mini",
    "timeLimitMinutes": 45,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t19-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about fintech mobile payment systems & security]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t19-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Finland]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t19-p2-q1",
              "audioText": "When is the final report on fintech mobile payment systems & security scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t19-p2-q2",
              "audioText": "Who will be leading the presentation regarding contactless?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on fintech mobile payment systems & security?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for contactless training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t19-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Fintech Mobile Payment Systems & Security",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Fintech Mobile Payment Systems & Security",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t19-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for contactless training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for contactless training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on fintech mobile payment systems & security in Finland. Over the past fiscal year, our organization achieved remarkable growth by focusing on contactless. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t19-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t19-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on contactless",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on contactless",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t19-p5-q1",
              "sentence": "The committee agreed that strict adherence to contactless guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t19-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Fintech Mobile Payment Systems & Security\n\nPlease be advised that our new operational protocols regarding fintech mobile payment systems & security will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Finland. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t19-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t19-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — FINTECH MOBILE PAYMENT SYSTEMS & SECURITY\nPublished by Global Market Insights Group (Finland)\n\nOver the past three years, advancements in fintech mobile payment systems & security have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of contactless reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t19-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t19-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "toeic-paper-20",
    "title": "TOEIC Official Practice Exam #20: Architectural Preservation & UNESCO Heritage",
    "type": "full",
    "timeLimitMinutes": 120,
    "listeningSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 1,
          "name": "Part 1: Photographs",
          "instruction": "Select the statement that best describes the image.",
          "questions": [
            {
              "id": "t20-p1-q1",
              "imageDescription": "[Image: Professionals in a meeting room reviewing charts about architectural preservation & unesco heritage]",
              "options": [
                "A. They are discussing data projections on a display screen.",
                "B. They are repairing an electronic printer.",
                "C. They are boarding a commuter train.",
                "D. They are packing boxes in a warehouse."
              ],
              "answer": "A. They are discussing data projections on a display screen.",
              "explanation": "The professionals are reviewing presentation charts in a conference room."
            },
            {
              "id": "t20-p1-q2",
              "imageDescription": "[Image: An inspector wearing safety gear inspecting equipment in Italy]",
              "options": [
                "A. The technician is inspecting industrial equipment.",
                "B. The worker is painting an office wall.",
                "C. Customers are standing in a long checkout line.",
                "D. The manager is signing a paper contract."
              ],
              "answer": "A. The technician is inspecting industrial equipment.",
              "explanation": "The technician is conducting a safety inspection."
            }
          ]
        },
        {
          "part": 2,
          "name": "Part 2: Question-Response",
          "instruction": "Listen to the question and choose the best response.",
          "questions": [
            {
              "id": "t20-p2-q1",
              "audioText": "When is the final report on architectural preservation & unesco heritage scheduled to be published?",
              "options": [
                "A. Next Friday afternoon by 5:00 PM.",
                "B. Yes, the printer is out of paper.",
                "C. In the third floor conference room."
              ],
              "answer": "A. Next Friday afternoon by 5:00 PM.",
              "explanation": "The question asks 'When', requiring a date/time response."
            },
            {
              "id": "t20-p2-q2",
              "audioText": "Who will be leading the presentation regarding restoration?",
              "options": [
                "A. About fifty miles away.",
                "B. Ms. Robertson from the strategy team.",
                "C. I already signed the receipt."
              ],
              "answer": "B. Ms. Robertson from the strategy team.",
              "explanation": "The question asks 'Who', requiring a person's name or department."
            }
          ]
        },
        {
          "part": 3,
          "name": "Part 3: Short Conversations",
          "instruction": "Read the conversation and answer the questions.",
          "transcript": "Man: Hello Ms. Vance, have you reviewed the proposal for our upcoming initiative on architectural preservation & unesco heritage?\nWoman: Yes, I examined it this morning. The strategy is solid, but we need to allocate additional funds for restoration training.\nMan: Good point. I will update the budget schedule and send the revised document to the director before 3 PM.",
          "questions": [
            {
              "id": "t20-p3-q1",
              "question": "What topic are the speakers discussing?",
              "options": [
                "A. Proposals regarding Architectural Preservation & UNESCO Heritage",
                "B. Booking flight tickets for a conference",
                "C. Hiring new security guards",
                "D. Ordering office stationery supplies"
              ],
              "answer": "A. Proposals regarding Architectural Preservation & UNESCO Heritage",
              "explanation": "The speakers discuss the proposal related to the initiative."
            },
            {
              "id": "t20-p3-q2",
              "question": "What concern does the woman raise?",
              "options": [
                "A. Allocating extra funds for restoration training",
                "B. Changing the meeting room location",
                "C. Postponing the event until next month",
                "D. Replacing the catering vendor"
              ],
              "answer": "A. Allocating extra funds for restoration training",
              "explanation": "She highlights the need for additional budget for training."
            }
          ]
        },
        {
          "part": 4,
          "name": "Part 4: Short Talks",
          "instruction": "Listen to the talk and answer the questions.",
          "transcript": "Speaker: Welcome to today's executive briefing on architectural preservation & unesco heritage in Italy. Over the past fiscal year, our organization achieved remarkable growth by focusing on restoration. Moving forward, our primary objective is to expand our presence across international markets while maintaining top-tier quality standards.",
          "questions": [
            {
              "id": "t20-p4-q1",
              "question": "Who is most likely the speaker?",
              "options": [
                "A. A company executive leading a briefing",
                "B. A taxi driver giving directions",
                "C. A hotel receptionist checking in guests",
                "D. A flight attendant demonstrating safety"
              ],
              "answer": "A. A company executive leading a briefing",
              "explanation": "The speaker opens with 'Welcome to today's executive briefing'."
            },
            {
              "id": "t20-p4-q2",
              "question": "What key factor contributed to the organization's growth?",
              "options": [
                "A. Focusing on restoration",
                "B. Cutting employee salaries",
                "C. Closing regional branch offices",
                "D. Reducing research expenditure"
              ],
              "answer": "A. Focusing on restoration",
              "explanation": "The speaker attributes growth to focusing on the key strategy."
            }
          ]
        }
      ]
    },
    "readingSection": {
      "totalQuestions": 20,
      "parts": [
        {
          "part": 5,
          "name": "Part 5: Incomplete Sentences",
          "instruction": "Select the correct option to complete each sentence.",
          "questions": [
            {
              "id": "t20-p5-q1",
              "sentence": "The committee agreed that strict adherence to restoration guidelines is ------- for project success.",
              "options": [
                "A. essential",
                "B. essentially",
                "C. essence",
                "D. essentiality"
              ],
              "answer": "A. essential",
              "explanation": "An adjective 'essential' is required following the linking verb 'is'."
            },
            {
              "id": "t20-p5-q2",
              "sentence": "All regional managers must ------- their quarterly expenditure reports prior to the Friday audit.",
              "options": [
                "A. submit",
                "B. submission",
                "C. submissive",
                "D. submitting"
              ],
              "answer": "A. submit",
              "explanation": "Modal verb 'must' requires a base form verb 'submit'."
            }
          ]
        },
        {
          "part": 6,
          "name": "Part 6: Text Completion",
          "instruction": "Choose the best option for each blank in the memo.",
          "passage": "MEMORANDUM\nTO: Regional Staff\nFROM: Operations Management\nDATE: November 10\nSUBJECT: Implementation of Architectural Preservation & UNESCO Heritage\n\nPlease be advised that our new operational protocols regarding architectural preservation & unesco heritage will take effect next Monday. All department supervisors are ------- (1) to ensure full compliance.\nWe anticipate that these changes will significantly enhance efficiency in Italy. Thank you for your ------- (2).",
          "questions": [
            {
              "id": "t20-p6-q1",
              "blankNumber": 1,
              "options": [
                "A. required",
                "B. requiring",
                "C. requirement",
                "D. requires"
              ],
              "answer": "A. required",
              "explanation": "Passive verb structure 'are required'."
            },
            {
              "id": "t20-p6-q2",
              "blankNumber": 2,
              "options": [
                "A. cooperation",
                "B. cooperate",
                "C. cooperative",
                "D. cooperatively"
              ],
              "answer": "A. cooperation",
              "explanation": "Possessive pronoun 'your' is followed by the noun 'cooperation'."
            }
          ]
        },
        {
          "part": 7,
          "name": "Part 7: Reading Comprehension",
          "instruction": "Read the passage and answer the questions.",
          "passage": "EXECUTIVE SUMMARY — ARCHITECTURAL PRESERVATION & UNESCO HERITAGE\nPublished by Global Market Insights Group (Italy)\n\nOver the past three years, advancements in architectural preservation & unesco heritage have transformed operational benchmarks across multiple industries. Organizations that prioritized early adoption of restoration reported a 28% increase in productivity alongside a 15% reduction in overhead expenditures.\n\nLooking ahead, industry analysts project that global investment in this sector will exceed $45 billion by 2030. Companies seeking to remain competitive are strongly advised to update their infrastructure and invest in comprehensive staff training programs.",
          "questions": [
            {
              "id": "t20-p7-q1",
              "question": "What benefit did early adopters of the strategy experience?",
              "options": [
                "A. A 28% increase in productivity",
                "B. A complete shutdown of regional operations",
                "C. A doubling of annual tax liabilities",
                "D. A decline in consumer satisfaction"
              ],
              "answer": "A. A 28% increase in productivity",
              "explanation": "The passage notes a 28% increase in productivity for early adopters."
            },
            {
              "id": "t20-p7-q2",
              "question": "What is projected for global investment by 2030?",
              "options": [
                "A. Exceeding $45 billion",
                "B. Dropping to zero",
                "C. Remaining under $1 million",
                "D. Stabilizing at 2010 levels"
              ],
              "answer": "A. Exceeding $45 billion",
              "explanation": "Analysts project global investment will exceed $45 billion by 2030."
            }
          ]
        }
      ]
    }
  }
];
