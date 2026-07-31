import { BANK_LISTENING_EXERCISES } from './exercise-bank/listening-bank.js';
import { BANK_SPEAKING_EXERCISES } from './exercise-bank/speaking-bank.js';
import { BANK_READING_EXERCISES } from './exercise-bank/reading-bank.js';
import { BANK_WRITING_EXERCISES } from './exercise-bank/writing-bank.js';

// 🎧 25 PRESET LISTENING EXERCISES
const PRESET_LISTENING_EXERCISES = [
  {
    id: "list-01",
    title: "Morning Routine and Time Management",
    topic: "Daily Routine & Home Life",
    level: "A2",
    speaker: "Emma - Productivity Coach",
    transcript: "Starting your day with a structured morning routine can boost your productivity significantly. Every morning, I wake up at six o'clock, drink a glass of warm water, and spend fifteen minutes meditating. Afterwards, I outline my top three priorities for the workday. Planning early prevents stress and keeps you focused on what truly matters.",
    blanks: [
      { id: 1, word: "routine", hint: "A regular pattern of activities" },
      { id: 2, word: "productivity", hint: "Efficiency in producing results" },
      { id: 3, word: "priorities", hint: "Things that are most important" }
    ],
    questions: [
      {
        id: 1,
        question: "What time does Emma wake up every morning?",
        options: ["5:00 AM", "6:00 AM", "7:00 AM", "6:30 AM"],
        answer: "6:00 AM",
        explanation: "Emma states: 'Every morning, I wake up at six o'clock'."
      },
      {
        id: 2,
        question: "How long does Emma spend meditating?",
        options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"],
        answer: "15 minutes",
        explanation: "She mentions spending fifteen minutes meditating."
      }
    ],
    shadowingScript: [
      { text: "Starting your day with a structured morning routine can boost your productivity.", ipa: "/ˈstɑː.tɪŋ jɔː deɪ wɪð ə ˈstrʌk.tʃəd ˈmɔː.nɪŋ ruːˈtiːn kæn buːst jɔː ˌprɒd.ʌkˈtɪv.ə.ti/" },
      { text: "Planning early prevents stress and keeps you focused.", ipa: "/ˈplæn.ɪŋ ˈɜː.li prɪˈvents stres ænd kiːps juː ˈfəʊ.kəst/" }
    ]
  },
  {
    id: "list-02",
    title: "Navigating a Job Interview",
    topic: "Career & Workplace",
    level: "B1",
    speaker: "David - Senior HR Manager",
    transcript: "When preparing for a job interview, researching the company culture is essential. Candidates should highlight their problem-solving skills and demonstrate how their past experiences align with the position. Remember to maintain eye contact, answer questions concisely, and prepare thoughtful questions for the interviewer at the end.",
    blanks: [
      { id: 1, word: "interview", hint: "Formal meeting for employment evaluation" },
      { id: 2, word: "experiences", hint: "Knowledge or skill gained from events" },
      { id: 3, word: "concisely", hint: "In a brief and clear manner" }
    ],
    questions: [
      {
        id: 1,
        question: "What should candidates research before an interview?",
        options: ["Salary figures", "Company culture", "Office address", "Competitor names"],
        answer: "Company culture",
        explanation: "David mentions: 'researching the company culture is essential'."
      },
      {
        id: 2,
        question: "What should candidates prepare for the end of the interview?",
        options: ["A resume copy", "Thoughtful questions", "A portfolio", "References"],
        answer: "Thoughtful questions",
        explanation: "He advises to 'prepare thoughtful questions for the interviewer at the end'."
      }
    ],
    shadowingScript: [
      { text: "Researching the company culture is essential for job applicants.", ipa: "/rɪˈsɜː.tʃɪŋ ðə ˈkʌm.pə.ni ˈkʌl.tʃər ɪz ɪˈsen.ʃəl/" }
    ]
  },
  {
    id: "list-03",
    title: "Sustainable Urban Travel",
    topic: "Travel & Cultures",
    level: "B2",
    speaker: "Sophia - Environmental Urbanist",
    transcript: "Sustainable urban transit systems are revolutionizing modern cities. High-speed electric trains, extensive bicycle lanes, and walkable pedestrian zones reduce carbon emissions while enhancing residents' quality of life. European capitals like Copenhagen leading the shift demonstrate that eco-friendly commuting is both practical and economical.",
    blanks: [
      { id: 1, word: "transit", hint: "System of transporting passengers" },
      { id: 2, word: "emissions", hint: "Discharges of gas into the atmosphere" },
      { id: 3, word: "economical", hint: "Giving good value or saving money" }
    ],
    questions: [
      {
        id: 1,
        question: "Which city is cited as a leading example of eco-friendly commuting?",
        options: ["London", "Copenhagen", "Berlin", "Paris"],
        answer: "Copenhagen",
        explanation: "The transcript explicitly notes 'European capitals like Copenhagen leading the shift'."
      }
    ]
  },
  {
    id: "list-04",
    title: "The Ethics of Artificial Intelligence",
    topic: "Technology & AI",
    level: "C1",
    speaker: "Prof. Marcus Vance - Tech Ethicist",
    transcript: "As machine learning algorithms become deeply integrated into healthcare and finance, ethical governance is non-negotiable. Developers must eliminate algorithmic bias, ensure data transparency, and establish regulatory frameworks that prioritize user privacy without stifling technological innovation.",
    blanks: [
      { id: 1, word: "algorithms", hint: "Rules followed in problem-solving by computer" },
      { id: 2, word: "transparency", hint: "Condition of being open and easily understood" },
      { id: 3, word: "privacy", hint: "State of being free from unwanted intrusion" }
    ],
    questions: [
      {
        id: 1,
        question: "What must developers eliminate in AI models according to Prof. Vance?",
        options: ["User accounts", "Algorithmic bias", "Code updates", "Hardware limitations"],
        answer: "Algorithmic bias",
        explanation: "The transcript states developers must 'eliminate algorithmic bias'."
      }
    ]
  },
  {
    id: "list-05",
    title: "Mindfulness and Mental Wellbeing",
    topic: "Health, Medicine & Fitness",
    level: "B1",
    speaker: "Dr. Rachel Green",
    transcript: "Practicing mindfulness daily helps regulate stress hormones and improves focus. Taking short breaks to perform deep breathing exercises resets your nervous system, allowing you to react to challenges with calm clarity rather than impulsive emotion.",
    blanks: [
      { id: 1, word: "mindfulness", hint: "State of conscious awareness of the present" },
      { id: 2, word: "hormones", hint: "Chemical messengers in the body" },
      { id: 3, word: "clarity", hint: "Quality of being clear and logical" }
    ],
    questions: [
      {
        id: 1,
        question: "What physical benefit does deep breathing offer?",
        options: ["Builds muscle mass", "Resets the nervous system", "Increases body temperature", "Prevents fatigue"],
        answer: "Resets the nervous system",
        explanation: "Dr. Green states taking short breaks resets your nervous system."
      }
    ]
  },
  {
    id: "list-06",
    title: "Budgeting for Young Professionals",
    topic: "Money, Finance & Banking",
    level: "B1",
    speaker: "Liam - Financial Consultant",
    transcript: "The 50/30/20 budgeting rule is a simple framework for financial security. Allocate fifty percent of your income to needs like housing, thirty percent to personal wants, and save the remaining twenty percent for emergency funds or retirement investments.",
    blanks: [
      { id: 1, word: "budgeting", hint: "Planning how to spend money" },
      { id: 2, word: "allocate", hint: "Distribute resources for a purpose" },
      { id: 3, word: "emergency", hint: "Urgent unforeseen situation" }
    ],
    questions: [
      {
        id: 1,
        question: "Under the 50/30/20 rule, what percentage goes towards saving?",
        options: ["50%", "30%", "20%", "10%"],
        answer: "20%",
        explanation: "The remaining twenty percent is saved for emergencies or investments."
      }
    ]
  },
  {
    id: "list-07",
    title: "The Magic of Culinary Traditions",
    topic: "Food, Cooking & Dining",
    level: "A2",
    speaker: "Chef Mario",
    transcript: "Cooking traditional recipes connects families across generations. Using fresh herbs, seasonal vegetables, and authentic spices brings out vibrant flavors that restaurant dining often fails to match. Sharing home-cooked meals fosters bonding.",
    blanks: [
      { id: 1, word: "recipes", hint: "Set of instructions for preparing food" },
      { id: 2, word: "seasonal", hint: "Available at specific times of the year" },
      { id: 3, word: "flavors", hint: "Distinctive taste of food" }
    ],
    questions: [
      {
        id: 1,
        question: "What ingredients does Chef Mario emphasize for vibrant flavor?",
        options: ["Canned fruits", "Fresh herbs and seasonal vegetables", "Artificial flavorings", "Frozen meats"],
        answer: "Fresh herbs and seasonal vegetables",
        explanation: "Chef Mario highlights fresh herbs and seasonal vegetables."
      }
    ]
  },
  {
    id: "list-08",
    title: "Renewable Energy Transition",
    topic: "Environment & Climate Change",
    level: "B2",
    speaker: "Elena Rossi - Clean Tech Analyst",
    transcript: "Transitioning from fossil fuels to renewable energy sources like solar and wind power is critical to halting global warming. Grid modernization and grid-scale battery storage are vital technologies required to ensure a stable supply of green electricity.",
    blanks: [
      { id: 1, word: "renewable", hint: "Energy from a source that does not deplete" },
      { id: 2, word: "storage", hint: "Action of storing energy for later use" },
      { id: 3, word: "stable", hint: "Not likely to change or fail" }
    ],
    questions: [
      {
        id: 1,
        question: "What two energy sources are explicitly mentioned?",
        options: ["Nuclear and Coal", "Solar and Wind", "Hydro and Geothermal", "Gas and Biomass"],
        answer: "Solar and Wind",
        explanation: "Elena explicitly mentions 'solar and wind power'."
      }
    ]
  },
  {
    id: "list-09",
    title: "Mastering Public Speaking",
    topic: "Public Speaking & Debates",
    level: "B2",
    speaker: "James Whitmore - Keynote Speaker",
    transcript: "Effective public speaking is less about perfection and more about connection. Open your speech with a compelling story to captivate your audience, vary your vocal pitch to avoid monotony, and pause purposefully after important statements.",
    blanks: [
      { id: 1, word: "compelling", hint: "Evoking interest or attention" },
      { id: 2, word: "monotony", hint: "Lack of variety and interest in sound" },
      { id: 3, word: "purposefully", hint: "With a clear intent or objective" }
    ],
    questions: [
      {
        id: 1,
        question: "How does James recommend opening a speech?",
        options: ["With a list of statistics", "With a compelling story", "With an apology", "With a loud shout"],
        answer: "With a compelling story",
        explanation: "He states: 'Open your speech with a compelling story'."
      }
    ]
  },
  {
    id: "list-10",
    title: "The Psychology of Emotion",
    topic: "Emotions & Psychology",
    level: "C1",
    speaker: "Dr. Anita Roy - Cognitive Psychologist",
    transcript: "Emotional intelligence involves identifying and regulating one's own emotions while understanding others' perspectives. Developing empathy enhances interpersonal relationships and allows leaders to navigate conflict with diplomatic finesse.",
    blanks: [
      { id: 1, word: "intelligence", hint: "Capacity for understanding and logic" },
      { id: 2, word: "perspectives", hint: "Particular attitudes toward something" },
      { id: 3, word: "diplomatic", hint: "Tactful in dealing with people" }
    ],
    questions: [
      {
        id: 1,
        question: "What core skill helps leaders navigate conflict diplomatically?",
        options: ["Financial analysis", "Empathy", "Publicity", "Strict rules"],
        answer: "Empathy",
        explanation: "Developing empathy enhances relationships and aids conflict resolution."
      }
    ]
  },
  {
    id: "list-11",
    title: "Exploring Ancient Civilizations",
    topic: "History & World Places",
    level: "B1",
    speaker: "Prof. Arthur Pendelton",
    transcript: "Ancient Mesopotamia is widely acknowledged as the cradle of civilization. Early inhabitants developed the cuneiform writing system, constructed impressive ziggurats, and pioneered irrigation techniques that revolutionized agricultural yield.",
    blanks: [
      { id: 1, word: "civilization", hint: "Advanced human society and culture" },
      { id: 2, word: "writing", hint: "System of marks representing speech" },
      { id: 3, word: "agricultural", hint: "Relating to farming" }
    ],
    questions: [
      {
        id: 1,
        question: "What early writing system did Mesopotamians invent?",
        options: ["Hieroglyphics", "Cuneiform", "Latin Alphabet", "Runes"],
        answer: "Cuneiform",
        explanation: "The transcript cites 'the cuneiform writing system'."
      }
    ]
  },
  {
    id: "list-12",
    title: "Pet Care and Animal Empathy",
    topic: "Pets & Animal Kingdom",
    level: "A2",
    speaker: "Dr. Susan Pet Vet",
    transcript: "Owning a pet brings joy and teaches responsibility. Dogs require daily walks and obedience training, while cats enjoy quiet environments and mental stimulation. Regular veterinary check-ups are essential to catch health issues early.",
    blanks: [
      { id: 1, word: "responsibility", hint: "State of being accountable" },
      { id: 2, word: "stimulation", hint: "Encouragement of activity or thought" },
      { id: 3, word: "veterinary", hint: "Relating to animal medical care" }
    ],
    questions: [
      {
        id: 1,
        question: "Why are regular veterinary check-ups recommended?",
        options: ["To buy pet accessories", "To catch health issues early", "To reduce pet weight", "To meet other owners"],
        answer: "To catch health issues early",
        explanation: "Dr. Susan notes check-ups catch health issues early."
      }
    ]
  },
  {
    id: "list-13",
    title: "Fitness & Physical Conditioning",
    topic: "Health, Medicine & Fitness",
    level: "B1",
    speaker: "Coach Brian",
    transcript: "Combining aerobic cardiovascular exercises with resistance strength training offers maximum health benefits. Staying hydrated before, during, and after workouts prevents muscle cramps and maintains peak physical endurance.",
    blanks: [
      { id: 1, word: "cardiovascular", hint: "Relating to heart and blood vessels" },
      { id: 2, word: "hydrated", hint: "Supplied with adequate water" },
      { id: 3, word: "endurance", hint: "Capacity to withstand hardship or stress" }
    ],
    questions: [
      {
        id: 1,
        question: "What combination of exercises does Coach Brian recommend?",
        options: ["Yoga and Pilates", "Aerobic cardio and resistance strength training", "Swimming and Running", "Stretching only"],
        answer: "Aerobic cardio and resistance strength training",
        explanation: "Combining cardio and strength training yields maximum benefit."
      }
    ]
  },
  {
    id: "list-14",
    title: "Smart Shopping and Consumer Rights",
    topic: "Shopping & Fashion",
    level: "B1",
    speaker: "Karen - Consumer Advocate",
    transcript: "Before making major purchases, buyers should compare product reviews and verify warranty policies. Understanding consumer protection laws ensures you can request refunds or replacements for defective items without hassle.",
    blanks: [
      { id: 1, word: "warranty", hint: "Written guarantee of quality" },
      { id: 2, word: "protection", hint: "Defense against unfair practice" },
      { id: 3, word: "defective", hint: "Faulty or not working properly" }
    ],
    questions: [
      {
        id: 1,
        question: "What benefit does knowing consumer laws provide?",
        options: ["Cheaper prices", "Refunds or replacements for defective items", "Free shipping", "Voucher codes"],
        answer: "Refunds or replacements for defective items",
        explanation: "It ensures buyers can get refunds or replacements for defective goods."
      }
    ]
  },
  {
    id: "list-15",
    title: "The Future of Space Exploration",
    topic: "Science & Space Exploration",
    level: "B2",
    speaker: "Dr. Neil Harrison",
    transcript: "Lunar base construction and Mars colonization missions are no longer science fiction. International space agencies and private aerospace companies are collaborating to develop reusable rockets and closed-loop life support systems for long-duration interplanetary travel.",
    blanks: [
      { id: 1, word: "colonization", hint: "Establishing a colony in a new place" },
      { id: 2, word: "collaborating", hint: "Working jointly together" },
      { id: 3, word: "interplanetary", hint: "Between planets" }
    ],
    questions: [
      {
        id: 1,
        question: "What key technology enables long-duration interplanetary travel?",
        options: ["Nuclear subs", "Closed-loop life support systems", "Solar sails", "Jet engines"],
        answer: "Closed-loop life support systems",
        explanation: "Dr. Harrison highlights reusable rockets and closed-loop life support systems."
      }
    ]
  },
  {
    id: "list-16",
    title: "Cinema and Visual Storytelling",
    topic: "Arts, Cinema & Literature",
    level: "B2",
    speaker: "Claire Bennet - Film Critic",
    transcript: "Cinematography uses lighting, color contrast, and camera angles to convey emotion without spoken words. A director's choice of framing can make a character feel powerful or vulnerable, creating a subtle psychological connection with the audience.",
    blanks: [
      { id: 1, word: "cinematography", hint: "Art of photography and camera work in film" },
      { id: 2, word: "vulnerable", hint: "Exposed to possibility of harm" },
      { id: 3, word: "psychological", hint: "Relating to the mental and emotional state" }
    ],
    questions: [
      {
        id: 1,
        question: "How can framing affect how a character is perceived?",
        options: ["Makes them talk faster", "Makes them feel powerful or vulnerable", "Changes their voice pitch", "Changes movie length"],
        answer: "Makes them feel powerful or vulnerable",
        explanation: "Framing makes characters feel powerful or vulnerable."
      }
    ]
  },
  {
    id: "list-17",
    title: "Digital Journalism and Misinformation",
    topic: "News, Media & Society",
    level: "B2",
    speaker: "Mark Vance - Journalist",
    transcript: "In an era of rapid digital news broadcasting, media literacy is crucial. Readers must evaluate news sources, cross-reference statistics, and identify clickbait headlines designed to evoke emotional outrage rather than inform.",
    blanks: [
      { id: 1, word: "literacy", hint: "Ability to read, evaluate and analyze" },
      { id: 2, word: "statistics", hint: "Numerical data collection" },
      { id: 3, word: "outrage", hint: "Fierce anger or shock" }
    ],
    questions: [
      {
        id: 1,
        question: "What is clickbait headline designed to evoke?",
        options: ["Boredom", "Emotional outrage", "Financial donations", "Laughter"],
        answer: "Emotional outrage",
        explanation: "Clickbait is designed to provoke emotional outrage rather than inform."
      }
    ]
  },
  {
    id: "list-18",
    title: "First Aid and Emergency Preparedness",
    topic: "Emergency, Safety & Survival",
    level: "A2",
    speaker: "Paramedic John",
    transcript: "Knowing basic CPR and first aid can save lives during unexpected medical emergencies. Always keep a well-stocked first aid kit in your home and vehicle, including sterile bandages, antiseptic wipes, and emergency contact numbers.",
    blanks: [
      { id: 1, word: "emergencies", hint: "Serious unexpected dangerous situations" },
      { id: 2, word: "bandages", hint: "Strips of material used to bind wounds" },
      { id: 3, word: "antiseptic", hint: "Substance preventing infection" }
    ],
    questions: [
      {
        id: 1,
        question: "Where should first aid kits be kept?",
        options: ["In locked safes", "In home and vehicle", "At the police station", "In grocery stores"],
        answer: "In home and vehicle",
        explanation: "John advises keeping first aid kits in home and vehicle."
      }
    ]
  },
  {
    id: "list-19",
    title: "Philosophy of Minimalist Living",
    topic: "Philosophy & Life Values",
    level: "B2",
    speaker: "Hannah - Author",
    transcript: "Minimalism is not about living with nothing, but about making space for what truly matters. By decluttering physical possessions and commitments, individuals regain mental clarity, financial freedom, and deeper appreciation for relationships.",
    blanks: [
      { id: 1, word: "minimalism", hint: "Practice of living with minimal possessions" },
      { id: 2, word: "decluttering", hint: "Removing unnecessary items" },
      { id: 3, word: "commitments", hint: "Pledges or obligations" }
    ],
    questions: [
      {
        id: 1,
        question: "What is the true purpose of minimalism according to Hannah?",
        options: ["To throw away all books", "To make space for what truly matters", "To save energy", "To live in tiny houses"],
        answer: "To make space for what truly matters",
        explanation: "Minimalism is about making space for what truly matters."
      }
    ]
  },
  {
    id: "list-20",
    title: "Global Eco-Tourism Trends",
    topic: "Travel & Cultures",
    level: "B1",
    speaker: "Lucas - Travel Guide",
    transcript: "Eco-tourism encourages travelers to minimize their environmental footprint while supporting local indigenous communities. Activities like wildlife conservation volunteering and staying at solar-powered lodges promote sustainable exploration.",
    blanks: [
      { id: 1, word: "footprint", hint: "Impact left by human activities" },
      { id: 2, word: "indigenous", hint: "Native or originating naturally in a regional place" },
      { id: 3, word: "conservation", hint: "Protection of natural environments" }
    ],
    questions: [
      {
        id: 1,
        question: "What does eco-tourism encourage travelers to do?",
        options: ["Fly on private jets", "Minimize environmental footprint", "Avoid local food", "Buy luxury souvenirs"],
        answer: "Minimize environmental footprint",
        explanation: "Eco-tourism focuses on minimizing environmental impact."
      }
    ]
  },
  {
    id: "list-21",
    title: "Building Career Resilience",
    topic: "Career & Workplace",
    level: "B2",
    speaker: "Sarah Jenkins - Career Coach",
    transcript: "Career adaptability is vital in an era of rapid industrial change. Professionals who continuously upgrade their technical skill sets and build professional networks are far better prepared for unexpected economic shifts.",
    blanks: [
      { id: 1, word: "adaptability", hint: "Ability to adjust to new conditions" },
      { id: 2, word: "networks", hint: "Group of interconnected contacts" },
      { id: 3, word: "economic", hint: "Relating to economy and trade" }
    ],
    questions: [
      {
        id: 1,
        question: "What prepares professionals for economic shifts?",
        options: ["Working longer hours", "Upgrading skill sets and building networks", "Changing jobs every month", "Avoiding technology"],
        answer: "Upgrading skill sets and building networks",
        explanation: "Upgrading skills and building networks builds career resilience."
      }
    ]
  },
  {
    id: "list-22",
    title: "Understanding Climate Physics",
    topic: "Science & Space Exploration",
    level: "C1",
    speaker: "Dr. Kenneth Clark",
    transcript: "The greenhouse effect occurs when atmospheric gases trap thermal infrared radiation emitted from Earth's surface. Elevated concentrations of methane and carbon dioxide intensify this thermal envelope, raising global mean temperatures.",
    blanks: [
      { id: 1, word: "radiation", hint: "Emission of energy as electromagnetic waves" },
      { id: 2, word: "concentrations", hint: "Relative amount of a substance in space" },
      { id: 3, word: "envelope", hint: "Surrounding layer or atmosphere" }
    ],
    questions: [
      {
        id: 1,
        question: "What type of radiation is trapped by greenhouse gases?",
        options: ["Ultraviolet radiation", "Thermal infrared radiation", "Gamma rays", "Microwaves"],
        answer: "Thermal infrared radiation",
        explanation: "The text specifies thermal infrared radiation."
      }
    ]
  },
  {
    id: "list-23",
    title: "The Evolution of Music Genres",
    topic: "Arts, Cinema & Literature",
    level: "B1",
    speaker: "Ray - Musicologist",
    transcript: "Jazz music originated in New Orleans, blending African rhythm traditions with European harmonic structures. Its emphasis on improvisation gave musicians unprecedented creative freedom and influenced modern rock, pop, and hip-hop.",
    blanks: [
      { id: 1, word: "harmonic", hint: "Relating to musical harmony" },
      { id: 2, word: "improvisation", hint: "Spontaneous unscripted performance" },
      { id: 3, word: "creative", hint: "Involving imagination and original ideas" }
    ],
    questions: [
      {
        id: 1,
        question: "Where did Jazz music originate?",
        options: ["Chicago", "New Orleans", "New York", "Memphis"],
        answer: "New Orleans",
        explanation: "The text states Jazz originated in New Orleans."
      }
    ]
  },
  {
    id: "list-24",
    title: "Child Education and Play",
    topic: "Education & Academic Life",
    level: "A2",
    speaker: "Laura - Primary Educator",
    transcript: "Play-based learning fosters social skills and creativity in early childhood development. When children build blocks or participate in role-play games, they develop problem-solving abilities, spatial awareness, and emotional regulation naturally.",
    blanks: [
      { id: 1, word: "creativity", hint: "Use of imagination to create" },
      { id: 2, word: "spatial", hint: "Relating to physical space" },
      { id: 3, word: "regulation", hint: "Control or monitoring of emotion" }
    ],
    questions: [
      {
        id: 1,
        question: "What skills does play-based learning foster?",
        options: ["Test taking", "Social skills and creativity", "Speed reading", "Accounting"],
        answer: "Social skills and creativity",
        explanation: "Play-based learning fosters social skills and creativity."
      }
    ]
  },
  {
    id: "list-25",
    title: "Cybersecurity Best Practices",
    topic: "Technology & AI",
    level: "B2",
    speaker: "Alex - Security Analyst",
    transcript: "Protecting sensitive personal data requires multi-factor authentication and strong, unique passwords. Never click untrusted email links or connect to unencrypted public Wi-Fi networks without a virtual private network (VPN).",
    blanks: [
      { id: 1, word: "authentication", hint: "Verification of identity" },
      { id: 2, word: "unencrypted", hint: "Not converted into secure code" },
      { id: 3, word: "virtual", hint: "Simulated digitally via computer" }
    ],
    questions: [
      {
        id: 1,
        question: "What tool should be used when connecting to public Wi-Fi?",
        options: ["Antivirus software", "Virtual Private Network (VPN)", "Firewall disabled", "Ad blocker"],
        answer: "Virtual Private Network (VPN)",
        explanation: "Connecting to public Wi-Fi safely requires a VPN."
      }
    ]
  }
];

// 🗣️ 25 PRESET SPEAKING EXERCISES
const PRESET_SPEAKING_EXERCISES = [
  {
    id: "speak-01",
    topic: "Family & Relationships",
    level: "B1",
    title: "Describe a family member who has influenced you greatly",
    cueCard: "You should say:\n- Who this person is\n- What kind of person they are\n- What special memories you share with them\n- And explain why they have influenced your life",
    keywords: ["inspiration", "role model", "guidance", "unconditional support", "resilience"],
    sampleAnswer: "I would like to speak about my grandmother, who has been a pillar of strength throughout my upbringing. She raised four children while working as a schoolteacher, demonstrating incredible resilience. Her passion for lifelong learning inspired me to pursue higher education and overcome personal setbacks with optimism.",
    followUpQuestions: [
      "In what ways have family structures changed in your country over recent decades?",
      "Do you think younger generations place the same value on family advice as older generations did?"
    ],
    pronunciationTargets: [
      { text: "Pillar of strength", ipa: "/ˈpɪl.ər əv streŋθ/" },
      { text: "Lifelong learning", ipa: "/ˈlaɪf.lɒŋ ˈlɜː.nɪŋ/" }
    ]
  },
  {
    id: "speak-02",
    topic: "Career & Workplace",
    level: "B2",
    title: "Describe your ideal career or dream job",
    cueCard: "You should say:\n- What job it is\n- What qualifications or skills are needed\n- What daily responsibilities it involves\n- And explain why this is your dream career",
    keywords: ["fulfillment", "professional growth", "innovative environment", "work-life balance"],
    sampleAnswer: "My dream career is to work as an AI Ethics Researcher for a global tech institution. This role requires a strong foundation in computer science and philosophy. I want to ensure technology serves humanity equitably, balancing professional growth with meaningful social impact.",
    followUpQuestions: [
      "What factors do people consider most important when choosing a career path?",
      "How is automation reshaping employment prospects for future graduates?"
    ],
    pronunciationTargets: [
      { text: "Meaningful social impact", ipa: "/ˈmiː.nɪŋ.fʊl ˈsəʊ.ʃəl ˈɪm.pækt/" }
    ]
  },
  {
    id: "speak-03",
    topic: "Travel & Cultures",
    level: "B2",
    title: "Describe a memorable journey or travel experience",
    cueCard: "You should say:\n- Where you traveled\n- Who you went with\n- What memorable activities you did\n- And explain why this journey was unforgettable",
    keywords: ["breathtaking scenery", "cultural immersion", "hospitality", "broaden horizons"],
    sampleAnswer: "Two years ago, I trekked through Sapa in northern Vietnam. The breathtaking rice terraces and warm hospitality of the local Hmong community offered an enriching cultural immersion. It broadened my horizons and instilled a deep appreciation for sustainable travel.",
    followUpQuestions: [
      "Why is international travel becoming increasingly popular among young adults?",
      "How can tourism benefit local economies without damaging indigenous heritage?"
    ]
  },
  {
    id: "speak-04",
    topic: "Technology & AI",
    level: "C1",
    title: "Talk about a technological device you cannot live without",
    cueCard: "You should say:\n- What the device is\n- How often you use it\n- What tasks you perform with it\n- And explain how it has impacted your lifestyle",
    keywords: ["indispensable", "streamline workflow", "connectivity", "digital dependency"],
    sampleAnswer: "My laptop is undoubtedly an indispensable tool in my daily workflow. I use it for software engineering, academic research, and communicating with global peers. While it streamlines my productivity, I strive to maintain digital detox periods to avoid overdependence.",
    followUpQuestions: [
      "Does reliance on digital communication diminish face-to-face social skills?",
      "What ethical standards should tech companies adopt regarding user data?"
    ]
  },
  {
    id: "speak-05",
    topic: "Environment & Climate Change",
    level: "B2",
    title: "Describe an environmental initiative in your community",
    cueCard: "You should say:\n- What the initiative is\n- Who organized it\n- What actions were taken\n- And explain how effective it has been",
    keywords: ["sustainability", "grassroots campaign", "waste segregation", "ecological awareness"],
    sampleAnswer: "Our community launched a grassroots recycling campaign aimed at reducing single-use plastics. Volunteers organized weekly cleanups and set up color-coded waste segregation stations in public parks, dramatically improving ecological awareness among residents.",
    followUpQuestions: [
      "Should governments impose stricter fines on corporate polluters?",
      "How can schools educate children to become environmentally conscious citizens?"
    ]
  },
  {
    id: "speak-06",
    topic: "Education & Academic Life",
    level: "B1",
    title: "Describe a subject or skill you enjoyed learning",
    cueCard: "You should say:\n- What subject or skill it was\n- Who taught you or how you learned it\n- What challenges you faced\n- And explain why you enjoyed it so much",
    keywords: ["curiosity", "interactive learning", "perseverance", "mastery"],
    sampleAnswer: "I thoroughly enjoyed learning conversational Spanish through an interactive mobile application and language exchange meetups. Practicing regularly with native speakers helped me overcome pronunciation hesitation and build fluency.",
    followUpQuestions: [
      "Do online courses provide the same quality of education as traditional universities?",
      "What skills will be most critical for students entering the modern workforce?"
    ]
  },
  {
    id: "speak-07",
    topic: "Health, Medicine & Fitness",
    level: "A2",
    title: "Describe a healthy habit you practice regularly",
    cueCard: "You should say:\n- What the habit is\n- When and how often you do it\n- How you started this habit\n- And explain how it benefits your health",
    keywords: ["stamina", "vitality", "consistency", "mental clarity"],
    sampleAnswer: "I make it a habit to go jogging for thirty minutes every morning before breakfast. Starting my day with physical movement boosts my stamina, releases endorphins, and sets a positive tone for the rest of the day.",
    followUpQuestions: [
      "Why do many people find it difficult to maintain a healthy lifestyle?",
      "What role can employers play in promoting employee wellness?"
    ]
  },
  {
    id: "speak-08",
    topic: "Food, Cooking & Dining",
    level: "B1",
    title: "Describe a traditional dish from your country",
    cueCard: "You should say:\n- What the dish is called\n- What ingredients are used\n- How it is prepared\n- And explain when people usually eat it",
    keywords: ["culinary heritage", "savory broth", "aromatic herbs", "festive tradition"],
    sampleAnswer: "Pho is Vietnam's signature noodle soup, featuring aromatic beef broth simmering for hours with cinnamon, star anise, and fresh herbs. It represents our rich culinary heritage and is enjoyed for breakfast or comforting dinners.",
    followUpQuestions: [
      "How has fast food impacted traditional dining customs globally?",
      "Why is cooking considered an important life skill for young adults?"
    ]
  },
  {
    id: "speak-09",
    topic: "Future Goals & Ambitions",
    level: "B2",
    title: "Describe an ambitious goal you hope to accomplish",
    cueCard: "You should say:\n- What the goal is\n- When you hope to achieve it\n- What steps you are taking\n- And explain why this goal is meaningful to you",
    keywords: ["milestone", "dedication", "overcome obstacles", "self-fulfillment"],
    sampleAnswer: "My primary goal over the next three years is to establish an educational non-profit providing free digital literacy workshops for underprivileged youth. Achieving this milestone requires securing mentorship and refining our curriculum.",
    followUpQuestions: [
      "Is setting long-term plans still practical in a rapidly changing world?",
      "How do people's aspirations evolve as they get older?"
    ]
  },
  {
    id: "speak-10",
    topic: "Arts, Cinema & Literature",
    level: "B2",
    title: "Describe a book or movie that left a deep impression on you",
    cueCard: "You should say:\n- What book or movie it was\n- What the main story was about\n- When you read/watched it\n- And explain why it made such an impression on you",
    keywords: ["thought-provoking", "compelling storyline", "character development", "profound message"],
    sampleAnswer: "The movie 'Interstellar' left an indelible impression on me due to its thought-provoking exploration of love, sacrifice, and quantum physics. The visually stunning cinematography and emotional soundtrack created a captivating cinematic experience.",
    followUpQuestions: [
      "Do movies have a responsibility to reflect real-world social issues?",
      "Why do some people prefer reading physical books over watching films?"
    ]
  },
  {
    id: "speak-11",
    topic: "Public Speaking & Debates",
    level: "B2",
    title: "Describe a presentation or speech you gave",
    cueCard: "You should say:\n- When and where you gave it\n- What the topic was\n- How you prepared for it\n- And explain how you felt afterwards",
    keywords: ["keynote speaker", "stage fright", "engaging delivery", "audience reaction"],
    sampleAnswer: "I presented a keynote speech on renewable energy at our university summit. Although I experienced nervous stage fright initially, practicing my speech multiple times helped me deliver a confident presentation that received positive feedback.",
    followUpQuestions: [
      "What makes a speaker persuasive during a debate?",
      "How can schools help timid students overcome fear of public speaking?"
    ]
  },
  {
    id: "speak-12",
    topic: "Money, Finance & Banking",
    level: "B1",
    title: "Describe something expensive you bought recently",
    cueCard: "You should say:\n- What you bought\n- Why you bought it\n- How long you saved for it\n- And explain if you are happy with the purchase",
    keywords: ["investment", "financial discipline", "value for money", "utility"],
    sampleAnswer: "I recently purchased an ergonomic office chair after saving for three months. Since I work long hours at my desk, investing in posture support significantly reduced back strain and enhanced my daily productivity.",
    followUpQuestions: [
      "Are modern consumers influenced too heavily by social media advertising?",
      "What are the advantages of using digital cashless payments?"
    ]
  },
  {
    id: "speak-13",
    topic: "Pets & Animal Kingdom",
    level: "A2",
    title: "Describe your favorite wild or domestic animal",
    cueCard: "You should say:\n- What animal it is\n- Where it lives\n- What it looks like or how it behaves\n- And explain why you admire this animal",
    keywords: ["intelligence", "loyalty", "habitat", "wildlife protection"],
    sampleAnswer: "I have always admired dolphins for their extraordinary intelligence and social playful nature. They live in marine environments and communicate through complex clicks and whistles, demonstrating remarkable empathy toward humans.",
    followUpQuestions: [
      "Why is preserving natural wildlife habitats urgent?",
      "What benefits do companion pets bring to elderly people living alone?"
    ]
  },
  {
    id: "speak-14",
    topic: "Emotions & Psychology",
    level: "B2",
    title: "Describe a time when you had to manage a stressful situation",
    cueCard: "You should say:\n- What the situation was\n- What caused the stress\n- How you handled it\n- And explain what you learned from the experience",
    keywords: ["composure", "problem-solving", "resilience", "adaptability"],
    sampleAnswer: "During my final year project, our team faced a severe system crash hours before deadline. Maintaining composure, we systematically restored backups and completed testing. It taught me the value of structured problem-solving under pressure.",
    followUpQuestions: [
      "How does chronic stress affect human physical health over time?",
      "What effective coping mechanisms can individuals use to prevent burnout?"
    ]
  },
  {
    id: "speak-15",
    topic: "Festivals & Traditions",
    level: "B1",
    title: "Describe a traditional festival celebrated in your country",
    cueCard: "You should say:\n- What festival it is\n- When it occurs\n- What special activities or foods are involved\n- And explain why this festival is important",
    keywords: ["cultural celebration", "family reunion", "festive atmosphere", "heritage"],
    sampleAnswer: "Lunar New Year, or Tet, is Vietnam's grandest festival. Families gather to clean ancestor altars, cook traditional Chung cakes, and exchange lucky red envelopes. It symbolizes fresh starts and family reunions.",
    followUpQuestions: [
      "Why is preserving traditional festivals important in a globalized world?",
      "How are modern festival celebrations different from past generations?"
    ]
  },
  {
    id: "speak-16",
    topic: "Sports, Hobbies & Games",
    level: "A2",
    title: "Describe a sport or game you enjoy playing or watching",
    cueCard: "You should say:\n- What sport or game it is\n- How often you play or watch it\n- Who you play with\n- And explain why you find it exciting",
    keywords: ["teamwork", "competitive spirit", "recreation", "physical fitness"],
    sampleAnswer: "I enjoy playing badminton every weekend with my colleagues. It requires agility, quick reflexes, and strategic placement, making it a fantastic recreational workout after a busy work week.",
    followUpQuestions: [
      "What qualities make a successful professional athlete?",
      "Should governments invest more money in community sports facilities?"
    ]
  },
  {
    id: "speak-17",
    topic: "Shopping & Fashion",
    level: "B1",
    title: "Describe your personal clothing style or shopping preferences",
    cueCard: "You should say:\n- What kind of clothes you prefer to wear\n- Where you usually buy your clothes\n- How your style has changed over time\n- And explain why you choose this style",
    keywords: ["minimalist aesthetic", "comfort", "sustainable fashion", "versatility"],
    sampleAnswer: "I prefer a casual minimalist style consisting of neutral t-shirts, tailored trousers, and comfortable sneakers. I prioritize sustainable clothing brands that offer durable, versatile wardrobe staples.",
    followUpQuestions: [
      "What negative environmental impacts does fast fashion cause?",
      "Why do people judge others based on their choice of attire?"
    ]
  },
  {
    id: "speak-18",
    topic: "News, Media & Society",
    level: "B2",
    title: "Describe an important news story you followed recently",
    cueCard: "You should say:\n- What the news story was about\n- How you heard about it\n- Why it captured public attention\n- And explain your opinion on this news item",
    keywords: ["global event", "media coverage", "societal impact", "journalistic integrity"],
    sampleAnswer: "I closely followed news coverage of global renewable energy treaties signed at the international climate summit. The commitments made by nations to triple green energy investments offer hopeful momentum against climate change.",
    followUpQuestions: [
      "How has social media altered how citizens consume daily news?",
      "What safeguards should be implemented to combat fake news?"
    ]
  },
  {
    id: "speak-19",
    topic: "Law, Justice & Ethics",
    level: "C1",
    title: "Discuss a rule or law that you think is very effective",
    cueCard: "You should say:\n- What the law or rule is\n- Who must follow it\n- What consequences occur if broken\n- And explain why you believe it is effective",
    keywords: ["public safety", "enforcement", "legal compliance", "social order"],
    sampleAnswer: "Mandatory seatbelt and helmet laws have proven exceptionally effective in reducing traffic fatalities. Strict enforcement and public awareness campaigns have established a safety culture that protects all road users.",
    followUpQuestions: [
      "What makes a legal system fair and equitable for all socioeconomic classes?",
      "Should laws evolve quickly in response to technological developments?"
    ]
  },
  {
    id: "speak-20",
    topic: "History & World Places",
    level: "B2",
    title: "Describe a historical site you have visited or wish to visit",
    cueCard: "You should say:\n- Where the site is located\n- What historical significance it holds\n- What visitors can see there\n- And explain why you are interested in this site",
    keywords: ["archaeological marvel", "ancient heritage", "preservation", "historical landmark"],
    sampleAnswer: "I would love to visit the ancient city of Petra in Jordan. Carved into red sandstone cliffs by the Nabataeans, this archaeological marvel showcases extraordinary ancient engineering and trade history.",
    followUpQuestions: [
      "Why is preserving historical monuments essential for future generations?",
      "How can historical tourism be balanced with physical site protection?"
    ]
  },
  {
    id: "speak-21",
    topic: "Daily Routine & Home Life",
    level: "A2",
    title: "Describe your favorite room in your home",
    cueCard: "You should say:\n- Which room it is\n- What furniture or objects are inside\n- How much time you spend there\n- And explain why it is your favorite space",
    keywords: ["cozy atmosphere", "sanctuary", "natural light", "relaxation"],
    sampleAnswer: "My favorite room is my study room, which receives abundant natural sunlight. It features a spacious wooden desk, bookshelves filled with literature, and comfortable seating, serving as my quiet sanctuary for reading and focus.",
    followUpQuestions: [
      "How does interior design influence a person's mood and productivity?",
      "What changes are taking place in modern housing architecture?"
    ]
  },
  {
    id: "speak-22",
    topic: "Emergency, Safety & Survival",
    level: "B1",
    title: "Describe a time when you or someone you know experienced an emergency",
    cueCard: "You should say:\n- What the emergency was\n- Where and when it happened\n- What actions were taken to handle it\n- And explain what you learned from it",
    keywords: ["quick response", "first aid", "calm under pressure", "preparedness"],
    sampleAnswer: "When my neighbor slipped and fractured their wrist in the garden, I immediately applied cold compresses, immobilized the joint, and called emergency medical services. The event highlighted the necessity of basic emergency training.",
    followUpQuestions: [
      "What emergency training should be mandatory in schools and workplaces?",
      "How can cities improve emergency response infrastructure during disasters?"
    ]
  },
  {
    id: "speak-23",
    topic: "Philosophy & Life Values",
    level: "C1",
    title: "Discuss a core life value that guides your decisions",
    cueCard: "You should say:\n- What value it is (e.g., honesty, empathy, perseverance)\n- Who taught you this value\n- How it influences your choices\n- And explain why it is fundamental to your life",
    keywords: ["moral compass", "integrity", "authenticity", "ethical principles"],
    sampleAnswer: "Integrity is the core value that governs my personal and professional decisions. Doing what is right even when unobserved ensures authenticity, fosters trust, and maintains self-respect in every endeavor.",
    followUpQuestions: [
      "How do ethical values shape organizational culture in business?",
      "Can moral principles be taught, or are they developed through life experience?"
    ]
  },
  {
    id: "speak-24",
    topic: "Public Speaking & Debates",
    level: "B2",
    title: "Describe an debate topic you feel passionately about",
    cueCard: "You should say:\n- What the debate topic is\n- What the different viewpoints are\n- What your perspective is\n- And explain why this topic matters to society",
    keywords: ["constructive debate", "evidence-based argument", "policy reform", "societal impact"],
    sampleAnswer: "I am passionate about debating the implementation of a universal basic income. Proponents argue it reduces poverty and supports worker autonomy, while critics question fiscal sustainability. I advocate for pilot programs to collect empirical data.",
    followUpQuestions: [
      "Why is open dialogue vital for democratic policymaking?",
      "How can media outlets promote constructive public debates without toxicity?"
    ]
  },
  {
    id: "speak-25",
    topic: "Science & Space Exploration",
    level: "C1",
    title: "Describe a scientific discovery that fascinated you",
    cueCard: "You should say:\n- What the discovery was\n- Who made it or how it was found\n- What impact it has on human knowledge\n- And explain why it fascinated you",
    keywords: ["groundbreaking research", "paradigm shift", "CRISPR gene editing", "biomedical breakthrough"],
    sampleAnswer: "The discovery of CRISPR-Cas9 gene editing fascinated me due to its revolutionary potential in curing genetic diseases. Being able to precisely modify DNA sequences marks a monumental paradigm shift in modern biotechnology.",
    followUpQuestions: [
      "What ethical limits should be placed on genetic engineering in humans?",
      "How can governments inspire young students to pursue careers in STEM science?"
    ]
  }
];

// 📖 25 PRESET READING EXERCISES
const PRESET_READING_EXERCISES = [
  {
    id: "read-01",
    topic: "Technology & AI",
    level: "B2",
    title: "The Architecture of Neural Networks",
    wordCount: 265,
    content: "Artificial Neural Networks (ANNs) are computational models inspired by the biological neural structures of the human brain. Composed of interconnected layers of artificial nodes, or neurons, these algorithms process complex data inputs to identify patterns, make predictions, and adapt through continuous learning cycles.\n\nAt the core of an ANN is the input layer, which receives raw data signals such as pixel values in an image or text strings in a document. This data is passed through hidden layers where mathematical weights and biases are applied to transform the signal. The output layer then generates the final classification or continuous prediction.\n\nTraining neural networks relies on backpropagation, a mathematical mechanism that calculates prediction errors and adjusts network parameters iteratively. Through backpropagation and vast datasets, deep learning models achieve high accuracy in image recognition, natural language processing, and medical diagnostics.",
    keyVocab: [
      { word: "computational", ipa: "/ˌkɒm.pjʊˈteɪ.ʃən.əl/", translation: "Tính toán", definition: "Relating to or using computers or calculation." },
      { word: "backpropagation", ipa: "/ˈbækˌprɒp.əˈɡeɪ.ʃən/", translation: "Lan truyền ngược", definition: "Algorithm for training neural networks by calculating error gradients." },
      { word: "iteratively", ipa: "/ˈɪt.ər.ə.tɪv.li/", translation: "Lặp đi lặp lại", definition: "In a repetitive manner to achieve a desired goal." }
    ],
    questions: [
      {
        id: 1,
        question: "What biological structure inspired Artificial Neural Networks?",
        options: ["Human muscular system", "Human brain neural structures", "Plant vascular systems", "DNA double helix"],
        answer: "Human brain neural structures",
        explanation: "Paragraph 1 states ANNs are inspired by biological neural structures of the human brain."
      },
      {
        id: 2,
        question: "What is the function of backpropagation in deep learning?",
        options: ["Store raw data", "Calculate errors and adjust parameters iteratively", "Display final images", "Delete unnecessary files"],
        answer: "Calculate errors and adjust parameters iteratively",
        explanation: "Paragraph 3 explains backpropagation calculates prediction errors and adjusts network parameters iteratively."
      }
    ]
  },
  {
    id: "read-02",
    topic: "Emotions & Psychology",
    level: "B2",
    title: "Understanding Cognitive Biases",
    wordCount: 280,
    content: "Cognitive biases are systematic deviations from rational judgment that occur as the human brain attempts to simplify complex information processing. Coined by psychologists Daniel Kahneman and Amos Tversky, these mental shortcuts—known as heuristics—help individuals make swift decisions, though often at the cost of objective accuracy.\n\nOne prevalent bias is confirmation bias, where people selectively seek, interpret, and remember information that validates their pre-existing beliefs while disregarding contradictory evidence. In an age of algorithmic social media feeds, confirmation bias often creates echo chambers that reinforce polarized worldviews.\n\nAnother common phenomenon is the availability heuristic, where people assess the frequency or probability of an event based on how easily examples come to mind. For instance, vivid news coverage of rare airplane crashes leads many to overestimate flight dangers while ignoring statistically riskier daily activities like driving.",
    keyVocab: [
      { word: "heuristics", ipa: "/hjʊəˈrɪs.tɪks/", translation: "Phương pháp phán đoán tắt", definition: "Mental shortcuts used to make decisions quickly." },
      { word: "confirmation bias", ipa: "/ˌkɒn.fəˈmeɪ.ʃən ˈbaɪ.əs/", translation: "Thiên kiến xác nhận", definition: "Tendency to favor information that confirms prior beliefs." },
      { word: "echo chambers", ipa: "/ˈek.əʊ ˌtʃeɪm.bəz/", translation: "Phòng vang thông tin", definition: "Environments where beliefs are amplified by repetition." }
    ],
    questions: [
      {
        id: 1,
        question: "Who coined the term cognitive biases according to the text?",
        options: ["Sigmund Freud and Carl Jung", "Daniel Kahneman and Amos Tversky", "Ivan Pavlov and B.F. Skinner", "Albert Bandura"],
        answer: "Daniel Kahneman and Amos Tversky",
        explanation: "The text credits psychologists Daniel Kahneman and Amos Tversky."
      },
      {
        id: 2,
        question: "What causes people to overestimate airplane crash risks in the availability heuristic?",
        options: ["Statistical charts", "Vivid news coverage", "Flight ticket prices", "Pilot training requirements"],
        answer: "Vivid news coverage",
        explanation: "Paragraph 3 notes vivid news coverage of crashes makes examples come to mind easily."
      }
    ]
  },
  {
    id: "read-03",
    topic: "Environment & Climate Change",
    level: "B2",
    title: "Ocean Acidification and Marine Ecosystems",
    wordCount: 250,
    content: "Ocean acidification, often termed the 'other carbon problem', is the ongoing decline in pH levels of Earth's oceans caused by the uptake of anthropogenic carbon dioxide emissions. As carbon dioxide dissolves in seawater, it forms carbonic acid, reducing the concentration of carbonate ions essential for marine calcifying organisms.\n\nCoral reefs, shellfish, and plankton rely on carbonate ions to build calcium carbonate shells and skeletal structures. Weakened coral reefs become vulnerable to storm erosion, jeopardizing marine biodiversity and coastal flood protection for millions of coastal residents.\n\nRestoring ocean health requires reducing atmospheric carbon emissions, establishing marine protected areas, and investing in coastal wetland restoration to sequester carbon naturally.",
    keyVocab: [
      { word: "anthropogenic", ipa: "/ˌæn.θrə.pəˈdʒen.ɪk/", translation: "Do con người gây ra", definition: "Originating in human activity." },
      { word: "acidification", ipa: "/əˌsɪd.ɪ.fɪˈkeɪ.ʃən/", translation: "Sự axit hóa", definition: "Process of becoming acidic." },
      { word: "sequester", ipa: "/sɪˈkwes.tər/", translation: "Cô lập / lưu trữ carbon", definition: "To isolate or hide away carbon dioxide." }
    ],
    questions: [
      {
        id: 1,
        question: "What causes ocean acidification?",
        options: ["Oil spills", "Uptake of anthropogenic carbon dioxide", "Plastics pollution", "Warm surface winds"],
        answer: "Uptake of anthropogenic carbon dioxide",
        explanation: "Paragraph 1 specifies ocean acidification is caused by human-generated CO2 uptake."
      }
    ]
  },
  {
    id: "read-04",
    topic: "Health, Medicine & Fitness",
    level: "B1",
    title: "The Circadian Rhythm and Sleep Hygiene",
    wordCount: 240,
    content: "The circadian rhythm is an internal 24-hour biological clock that regulates sleepiness, hormone release, and metabolic functions. Controlled by the suprachiasmatic nucleus in the brain's hypothalamus, this biological clock responds directly to environmental light cues.\n\nExposure to bright natural sunlight in the morning triggers the release of cortisol, promoting alertness. Conversely, darkness stimulates the pineal gland to secrete melatonin, inducing restful sleep. Disrupting this natural cycle through blue light from smartphones or irregular shift work impairs cognitive performance and weakens immunity.\n\nPracticing consistent sleep hygiene—such as turning off screens one hour before bedtime and maintaining a cool bedroom environment—restores circadian harmony.",
    keyVocab: [
      { word: "circadian rhythm", ipa: "/sɜːˈkeɪ.di.ən ˈrɪð.əm/", translation: "Nhịp sinh học", definition: "Natural 24-hour cycle of biological processes." },
      { word: "melatonin", ipa: "/ˌmel.əˈtəʊ.nɪn/", translation: "Hormone điều hòa giấc ngủ", definition: "Hormone regulating sleep-wake cycles." }
    ],
    questions: [
      {
        id: 1,
        question: "What hormone induces sleep when darkness occurs?",
        options: ["Cortisol", "Melatonin", "Adrenaline", "Insulin"],
        answer: "Melatonin",
        explanation: "The text states darkness stimulates the pineal gland to secrete melatonin."
      }
    ]
  },
  {
    id: "read-05",
    topic: "Money, Finance & Banking",
    level: "C1",
    title: "Central Bank Digital Currencies (CBDCs)",
    wordCount: 275,
    content: "Central Bank Digital Currencies (CBDCs) represent a sovereign digital form of fiat currency issued and regulated directly by a country's monetary authority. Unlike decentralized cryptocurrencies, CBDCs are backed by state reserves, offering legal tender status and price stability.\n\nProponents argue that CBDCs lower payment clearing costs, expand financial inclusion for unbanked populations, and enhance real-time cross-border settlements. By eliminating intermediary commercial banking friction, central banks can execute targeted monetary policy with high precision.\n\nHowever, opponents highlight significant privacy concerns and cybersecurity risks. Direct central bank accounts could enable government surveillance of citizen transactions and increase systemic bank run risks during financial panics.",
    keyVocab: [
      { word: "sovereign", ipa: "/ˈsɒv.rɪn/", translation: "Chủ quyền quốc gia", definition: "Possessing supreme power and ultimate authority." },
      { word: "legal tender", ipa: "/ˌliː.ɡəl ˈten.dər/", translation: "Tiền tệ hợp pháp", definition: "Official medium of payment recognized by law." }
    ],
    questions: [
      {
        id: 1,
        question: "How do CBDCs differ from decentralized cryptocurrencies?",
        options: ["They are illegal", "They are backed by state reserves and monetary authorities", "They have no value", "They use paper bills"],
        answer: "They are backed by state reserves and monetary authorities",
        explanation: "Paragraph 1 highlights CBDCs are backed by state reserves and central banks."
      }
    ]
  },
  {
    id: "read-06",
    topic: "Education & Academic Life",
    level: "B2",
    title: "Active Recall and Spaced Repetition in Learning",
    wordCount: 260,
    content: "Cognitive science has demonstrated that traditional passive study methods, such as re-reading textbooks or highlighting sentences, produce an illusion of competence rather than long-term memory consolidation. Instead, retrieval practice—specifically active recall and spaced repetition—is far superior for durable learning.\n\nActive recall forces the brain to retrieve information from memory without looking at notes, strengthening neural pathways associated with that knowledge. Flashcards and self-testing are effective examples of active recall.\n\nWhen combined with spaced repetition—reviewing material at expanding time intervals—learners counteract the natural Ebbinghaus forgetting curve, moving knowledge efficiently from short-term memory to long-term storage.",
    keyVocab: [
      { word: "consolidation", ipa: "/kənˌsɒl.ɪˈdeɪ.ʃən/", translation: "Sự củng cố ghi nhớ", definition: "Process by which memories become stable." },
      { word: "active recall", ipa: "/ˈæk.tɪv rɪˈkɔːl/", translation: "Chủ động gợi nhớ", definition: "Retrieving information from memory actively." }
    ],
    questions: [
      {
        id: 1,
        question: "Why is re-reading textbooks considered ineffective compared to active recall?",
        options: ["It takes too long", "It produces an illusion of competence without memory consolidation", "It causes physical fatigue", "It damages eye focus"],
        answer: "It produces an illusion of competence without memory consolidation",
        explanation: "Passive re-reading creates an illusion of competence without strengthening memory pathways."
      }
    ]
  },
  {
    id: "read-07",
    topic: "Travel & Cultures",
    level: "B1",
    title: "The Silk Road and Cultural Synthesis",
    wordCount: 250,
    content: "The Silk Road was an ancient network of overland trade routes connecting East Asia with the Mediterranean world. Stretching across deserts and mountain ranges, it facilitated not only the commercial exchange of silk, spices, and precious metals, but also profound cultural synthesis.\n\nReligions, architectural styles, and artistic techniques traveled alongside merchants. Mahayana Buddhism spread along Central Asian oases into China, while paper-making technology moved from East to West, transforming European literacy.\n\nThe legacy of the Silk Road highlights how trade routes foster global interconnection, diplomacy, and shared human innovation.",
    keyVocab: [
      { word: "facilitated", ipa: "/fəˈsɪl.ɪ.teɪ.tɪd/", translation: "Tạo điều kiện thuận lợi", definition: "Made an action or process easy or easier." },
      { word: "synthesis", ipa: "/ˈsɪn.θə.sɪs/", translation: "Sự tổng hợp / giao thoa", definition: "Combination of ideas or cultures into a connected whole." }
    ],
    questions: [
      {
        id: 1,
        question: "What spread from East Asia to Europe along the Silk Road?",
        options: ["Steam engines", "Paper-making technology", "Printing press", "Gunpowder artillery"],
        answer: "Paper-making technology",
        explanation: "The passage specifies paper-making technology moved from East to West."
      }
    ]
  },
  {
    id: "read-08",
    topic: "Career & Workplace",
    level: "B2",
    title: "The Rise of Hybrid Work Models",
    wordCount: 260,
    content: "The global shift toward hybrid work has fundamentally reshaped corporate culture and employee expectations. Combining remote telecommuting with scheduled office collaboration, hybrid models offer staff autonomy while preserving team cohesion.\n\nProponents highlight increased job satisfaction, reduced commute times, and lower office overhead costs. Employees report improved work-life balance and enhanced focus during solitary work tasks.\n\nHowever, managers face challenge maintaining equitable promotion tracks and preventing proximity bias—the subconscious tendency to favor co-workers who are physically present in the office.",
    keyVocab: [
      { word: "proximity bias", ipa: "/prɒkˈsɪm.ə.ti ˈbaɪ.əs/", translation: "Thiên kiến khoảng cách", definition: "Favoring employees who are physically present nearby." },
      { word: "autonomy", ipa: "/ɔːˈtɒn.ə.mi/", translation: "Sự tự chủ", definition: "Freedom from external control or influence." }
    ],
    questions: [
      {
        id: 1,
        question: "What is proximity bias in the workplace?",
        options: ["Preferring younger workers", "Favoring workers physically present in the office", "Hiring remote workers only", "Paying higher salaries to managers"],
        answer: "Favoring workers physically present in the office",
        explanation: "Proximity bias is favoring co-workers who are physically present."
      }
    ]
  },
  {
    id: "read-09",
    topic: "Science & Space Exploration",
    level: "C1",
    title: "Exoplanet Atmospheres and Biosignatures",
    wordCount: 270,
    content: "Astrophysicists are utilizing transmission spectroscopy on space observatories to analyze the chemical compositions of exoplanetary atmospheres. When an exoplanet transits across its host star, starlight filters through the planet's atmospheric fringe, absorbing specific wavelengths.\n\nBy measuring these absorption spectra, astronomers can detect atmospheric gases such as water vapor, methane, ozone, and carbon dioxide. Detecting disequilibrium gas combinations—such as methane combined with oxygen—could serve as compelling biosignatures indicating extraterrestrial biological activity.\n\nWhile identifying biosignatures remains challenging, upcoming space missions promise unprecedented precision in searching for habitable alien worlds.",
    keyVocab: [
      { word: "spectroscopy", ipa: "/spekˈtrɒs.kə.pi/", translation: "Quang phổ học", definition: "Branch of science concerned with investigation of spectra." },
      { word: "biosignatures", ipa: "/ˈbaɪ.əʊˌsɪɡ.nə.tʃəz/", translation: "Dấu hiệu sự sống", definition: "Substance providing scientific evidence of past or present life." }
    ],
    questions: [
      {
        id: 1,
        question: "How do astronomers measure exoplanet atmospheric compositions during transits?",
        options: ["Sending space probes", "Measuring absorption spectra of filtered starlight", "Taking high-definition photographs", "Listening to radio signals"],
        answer: "Measuring absorption spectra of filtered starlight",
        explanation: "They analyze absorption spectra of starlight filtering through the exoplanet atmosphere."
      }
    ]
  },
  {
    id: "read-10",
    topic: "Arts, Cinema & Literature",
    level: "B2",
    title: "Literary Realism and Social Critique",
    wordCount: 255,
    content: "19th-century Literary Realism emerged as a reaction against Romantic idealization, seeking to depict middle and lower-class life with unvarnished fidelity. Authors like Charles Dickens, Gustave Flaubert, and George Eliot focused on ordinary characters navigating complex economic realities.\n\nBy exposing the harsh conditions of industrial factories, legal corruption, and social rigidities, realist novels functioned as potent catalysts for societal reform. Narrative techniques emphasized psychological depth, dialogue fidelity, and detailed environment settings.\n\nRealism transformed literature into an empathetic mirror reflecting human struggles and ethical dilemmas.",
    keyVocab: [
      { word: "fidelity", ipa: "/fɪˈdel.ə.ti/", translation: "Độ trung thực / chính xác", definition: "Accuracy and faithfulness in detail." },
      { word: "catalysts", ipa: "/ˈkæt.əl.ɪsts/", translation: "Chất xúc tác / động lực", definition: "Events or persons causing significant change." }
    ],
    questions: [
      {
        id: 1,
        question: "What did 19th-century Literary Realism emerge as a reaction against?",
        options: ["Science fiction", "Romantic idealization", "Ancient Greek mythology", "Modern poetry"],
        answer: "Romantic idealization",
        explanation: "Literary Realism emerged as a reaction against Romantic idealization."
      }
    ]
  },
  {
    id: "read-11",
    topic: "Food, Cooking & Dining",
    level: "B1",
    title: "Fermentation in Culinary History",
    wordCount: 245,
    content: "Fermentation is one of humanity's oldest food preservation techniques, utilizing beneficial microorganisms like bacteria and yeast to transform raw ingredients. Beyond preventing spoilage, fermentation enhances food safety, digestibility, and flavor complexity.\n\nFamous fermented foods—such as Korean kimchi, sourdough bread, yogurt, and kombucha—contain probiotic cultures that nourish the human gut microbiome. Modern nutrition science confirms that gut health directly influences immune strength and mood regulation.\n\nIncorporating traditional fermented foods into daily diets supports digestive health and offers unique umami flavor profiles.",
    keyVocab: [
      { word: "microorganisms", ipa: "/ˌmaɪ.krəʊˈɔː.ɡən.ɪ.zəmz/", translation: "Vi sinh vật", definition: "Microscopic organisms such as bacteria or fungi." },
      { word: "probiotic", ipa: "/ˌprəʊ.baɪˈɒt.ɪk/", translation: "Men vi sinh", definition: "Live microorganisms providing health benefits." }
    ],
    questions: [
      {
        id: 1,
        question: "What health benefit do fermented foods provide according to the passage?",
        options: ["Build bone density", "Nourish gut microbiome and support digestive health", "Prevent tooth decay", "Lower body height"],
        answer: "Nourish gut microbiome and support digestive health",
        explanation: "Fermented foods contain probiotics that nourish the gut microbiome."
      }
    ]
  },
  {
    id: "read-12",
    topic: "News, Media & Society",
    level: "B2",
    title: "Algorithmic Curation and Information Echoes",
    wordCount: 260,
    content: "Modern social media platforms utilize machine learning algorithms designed to maximize user engagement. By tracking clicks, watch time, and interaction rates, algorithms dynamically curate personalized news feeds tailored to individual user preferences.\n\nWhile personalized content delivery increases user retention, it often exacerbates confirmation bias and creates echo chambers. Users are predominantly exposed to viewpoints that mirror their own, insulating them from opposing perspectives and deepening political polarization.\n\nMedia literacy education and algorithmic transparency policies are critical measures to ensure digital public discourse remains balanced.",
    keyVocab: [
      { word: "polarization", ipa: "/ˌpəʊ.lə.raɪˈzeɪ.ʃən/", translation: "Sự phân cực xã hội", definition: "Division into two contrasting groups or sets of opinions." }
    ],
    questions: [
      {
        id: 1,
        question: "What metric do social media algorithms maximize?",
        options: ["Educational accuracy", "User engagement", "Server speed", "Grammar correctness"],
        answer: "User engagement",
        explanation: "Platforms use algorithms designed to maximize user engagement."
      }
    ]
  },
  {
    id: "read-13",
    topic: "Law, Justice & Ethics",
    level: "C1",
    title: "Restorative Justice vs Retributive Justice",
    wordCount: 270,
    content: "Traditional legal frameworks operate primarily on retributive justice, which focuses on punishing offenders proportionally to the severity of their crime. The primary objective is legal compliance through deterrence and state-administered sanctions.\n\nIn contrast, restorative justice prioritizes repairing harm caused to victims and communities. Through mediated dialogues, offenders actively acknowledge accountability, offer restitution, and participate in rehabilitation plans overseen by affected stakeholders.\n\nEmpirical studies demonstrate that restorative justice programs lower recidivism rates and provide higher victim satisfaction compared to purely punitive prison sentences.",
    keyVocab: [
      { word: "recidivism", ipa: "/rɪˈsɪd.ɪ.vɪ.zəm/", translation: "Tái phạm tội", definition: "Tendency of a convicted criminal to reoffend." },
      { word: "retribution", ipa: "/ˌret.rɪˈbjuː.ʃən/", translation: "Sự trừng phạt", definition: "Punishment inflicted on someone as vengeance for a wrong act." }
    ],
    questions: [
      {
        id: 1,
        question: "What is the primary focus of restorative justice?",
        options: ["Fining state agencies", "Repairing harm caused to victims and communities", "Increasing prison terms", "Building more courtrooms"],
        answer: "Repairing harm caused to victims and communities",
        explanation: "Restorative justice prioritizes repairing harm caused to victims and communities."
      }
    ]
  },
  {
    id: "read-14",
    topic: "Philosophy & Life Values",
    level: "B2",
    title: "Stoicism and Internal Control",
    wordCount: 250,
    content: "Stoicism, an ancient Hellenistic philosophy founded by Zeno of Citium, offers practical principles for resilience and tranquility. The core Stoic premise divides all life events into things within our control and things outside our control.\n\nAccording to Stoic thinkers like Epictetus and Marcus Aurelius, external circumstances—such as economic shifts, weather, or others' opinions—are outside our control. True emotional peace is achieved by mastering our internal responses, judgements, and moral choices.\n\nBy focusing energy solely on internal character and emotional regulation, individuals cultivate unshakeable mental fortitude regardless of external adversity.",
    keyVocab: [
      { word: "tranquility", ipa: "/træŋˈkwɪl.ə.ti/", translation: "Sự thanh thản tâm hồn", definition: "Quality or state of being tranquil; calm." },
      { word: "fortitude", ipa: "/ˈfɔː.tɪ.tʃuːd/", translation: "Sự kiên cường", definition: "Courage in pain or adversity." }
    ],
    questions: [
      {
        id: 1,
        question: "According to Stoicism, what achieves true emotional peace?",
        options: ["Controlling weather", "Mastering internal responses and moral choices", "Accumulating wealth", "Winning debates"],
        answer: "Mastering internal responses and moral choices",
        explanation: "True peace comes from mastering our internal responses and judgements."
      }
    ]
  },
  {
    id: "read-15",
    topic: "Pets & Animal Kingdom",
    level: "B1",
    title: "Avian Intelligence and Tool Fabrication",
    wordCount: 240,
    content: "For decades, tool creation was considered a unique defining trait of human species. However, ethological research has revealed extraordinary cognitive sophistication in the corvid family, which includes crows, ravens, and jays.\n\nNew Caledonian crows demonstrate advanced tool fabrication by trimming thorny leaves to fashion hooks for extracting grubs from tree bark. Furthermore, ravens demonstrate causal reasoning by solving complex multi-step puzzles requiring sequential tool selection.\n\nThese discoveries challenge traditional assumptions regarding brain size and avian intelligence, proving bird brains possess remarkable cognitive versatility.",
    keyVocab: [
      { word: "ethological", ipa: "/ˌiː.θəˈlɒdʒ.ɪ.kəl/", translation: "Thuộc tập tính học động vật", definition: "Relating to the study of animal behavior." },
      { word: "corvid", ipa: "/ˈkɔː.vɪd/", translation: "Họ nhà quạ", definition: "Member of the crow bird family." }
    ],
    questions: [
      {
        id: 1,
        question: "How do New Caledonian crows construct hooks?",
        options: ["Using metal wire", "Trimming thorny leaves", "Using animal bones", "Plucking bird feathers"],
        answer: "Trimming thorny leaves",
        explanation: "Paragraph 2 notes they trim thorny leaves to fashion hooks."
      }
    ]
  },
  {
    id: "read-16",
    topic: "Shopping & Fashion",
    level: "B2",
    title: "Circular Economy in Sustainable Fashion",
    wordCount: 255,
    content: "The traditional linear fashion model—extract, produce, discard—generates immense landfill waste and carbon pollution. In response, the apparel industry is adopting circular economy principles designed to eliminate waste and keep materials in continuous utility.\n\nCircular fashion strategies focus on designing garments using bio-degradable organic fibers, creating closed-loop textile recycling systems, and expanding garment resale or rental marketplaces.\n\nBy extending garment lifespans through repair services and upcycling, circular fashion drastically reduces raw material consumption while preserving aesthetic elegance.",
    keyVocab: [
      { word: "upcycling", ipa: "/ˈʌpˌsaɪ.klɪŋ/", translation: "Tái chế nâng cấp", definition: "Reusing discarded objects to create a product of higher quality." }
    ],
    questions: [
      {
        id: 1,
        question: "What is the primary objective of circular fashion?",
        options: ["Increase plastic production", "Eliminate waste and keep materials in utility", "Sell cheaper clothes", "Close retail stores"],
        answer: "Eliminate waste and keep materials in utility",
        explanation: "Circular economy principles aim to eliminate waste and keep materials in utility."
      }
    ]
  },
  {
    id: "read-17",
    topic: "Public Speaking & Debates",
    level: "B2",
    title: "Rhetorical Triad: Ethos, Pathos, and Logos",
    wordCount: 260,
    content: "Aristotle's classical treatise on rhetoric identifies three foundational modes of persuasion: Ethos, Pathos, and Logos. Mastering these modes allows speakers to construct persuasive speeches that resonate intellectually and emotionally.\n\nEthos establishes speaker credibility, authority, and moral integrity. Pathos appeals to the audience's emotions, empathy, and core values through vivid storytelling. Logos engages logical reasoning, employing empirical statistics, structured arguments, and sound evidence.\n\nAn effective speech balances all three elements seamlessly, instilling trust while delivering logically compelling arguments.",
    keyVocab: [
      { word: "rhetoric", ipa: "/ˈret.ər.ɪk/", translation: "Nghệ thuật hùng biện", definition: "Art of effective or persuasive speaking or writing." }
    ],
    questions: [
      {
        id: 1,
        question: "Which mode of persuasion relies on logical reasoning and empirical statistics?",
        options: ["Ethos", "Pathos", "Logos", "Mythos"],
        answer: "Logos",
        explanation: "Logos engages logical reasoning, statistics, and sound evidence."
      }
    ]
  },
  {
    id: "read-18",
    topic: "History & World Places",
    level: "B2",
    title: "The Industrial Revolution and Urbanization",
    wordCount: 265,
    content: "The 18th-century Industrial Revolution transformed agrarian societies into industrialized urban powerhouses. Driven by steam power, mechanization, and factory production, millions of rural workers migrated to growing cities seeking factory employment.\n\nRapid urban growth spurred infrastructure innovations, including railway expansion, gas lighting, and municipal water supply systems. However, rapid population density initially resulted in overcrowded housing, poor sanitation, and air pollution.\n\nOver time, civic activism and legislative reforms established workplace safety standards and modern urban planning.",
    keyVocab: [
      { word: "agrarian", ipa: "/əˈɡreə.ri.ən/", translation: "Nông nghiệp", definition: "Relating to cultivated land or landed property." }
    ],
    questions: [
      {
        id: 1,
        question: "What powered the early machines of the Industrial Revolution?",
        options: ["Solar power", "Steam power", "Nuclear energy", "Wind turbines"],
        answer: "Steam power",
        explanation: "The transformation was driven by steam power and mechanization."
      }
    ]
  },
  {
    id: "read-19",
    topic: "Emergency, Safety & Survival",
    level: "B1",
    title: "Disaster Preparedness and Community Resilience",
    wordCount: 245,
    content: "Disaster preparedness involves forecasting, planning, and building community resilience against natural hazards such as floods, earthquakes, and typhoons. Proactive preparation significantly minimizes human casualty rates and property damage.\n\nKey components include installing early warning sirens, retrofitting infrastructure, and conducting community evacuation drills. Families should assemble emergency kits containing non-perishable food, water, flashlights, and portable radio equipment.\n\nEffective disaster response relies on seamless coordination between municipal emergency services, volunteer groups, and informed citizens.",
    keyVocab: [
      { word: "retrofitting", ipa: "/ˈret.rəʊˌfɪt.ɪŋ/", translation: "Gia cố nâng cấp cấu trúc", definition: "Adding new technology or features to older systems." }
    ],
    questions: [
      {
        id: 1,
        question: "What should family emergency kits contain?",
        options: ["Luxury clothes", "Non-perishable food, water, flashlights", "Laptops and game consoles", "Furniture tools"],
        answer: "Non-perishable food, water, flashlights",
        explanation: "Kits should contain non-perishable food, water, flashlights, and emergency radios."
      }
    ]
  },
  {
    id: "read-20",
    topic: "Daily Routine & Home Life",
    level: "A2",
    title: "The Health Benefits of Domestic Cooking",
    wordCount: 235,
    content: "Preparing meals at home offers significant nutritional and financial benefits compared to dining at restaurants. Home cooking allows individuals to control ingredient quality, reduce sodium and refined sugar intake, and manage portion sizes effectively.\n\nFurthermore, cooking together fosters family bonding and provides practical life skills for young children. Simple weekly meal planning reduces food waste and ensures balanced nutrition for the whole household.",
    keyVocab: [
      { word: "sodium", ipa: "/ˈsəʊ.di.əm/", translation: "Muối natri", definition: "Chemical element found in common table salt." }
    ],
    questions: [
      {
        id: 1,
        question: "What dietary element can be controlled by cooking at home?",
        options: ["Vitamin sunlight", "Sodium and refined sugar intake", "Air oxygen levels", "Water purity only"],
        answer: "Sodium and refined sugar intake",
        explanation: "Home cooking lets people control sodium and refined sugar intake."
      }
    ]
  },
  {
    id: "read-21",
    topic: "Sports, Hobbies & Games",
    level: "B1",
    title: "Chess and Strategic Cognition",
    wordCount: 245,
    content: "Chess is an ancient strategy board game that exercises critical thinking, pattern recognition, and long-term planning. Playing chess regularly stimulates both brain hemispheres, improving memory retention and problem-solving agility.\n\nGrandmasters evaluate hundreds of potential move sequences using visualization and calculation skills. Research indicates chess training enhances academic concentration and spatial reasoning among young students.",
    keyVocab: [
      { word: "hemispheres", ipa: "/ˈhem.ɪ.sfɪəz/", translation: "Bán cầu (não)", definition: "Halves of the brain structure." }
    ],
    questions: [
      {
        id: 1,
        question: "What cognitive skills does playing chess stimulate?",
        options: ["Vocal pitch", "Critical thinking, pattern recognition, long-term planning", "Handwriting speed", "Color identification"],
        answer: "Critical thinking, pattern recognition, long-term planning",
        explanation: "Chess exercises critical thinking, pattern recognition, and planning."
      }
    ]
  },
  {
    id: "read-22",
    topic: "Festivals & Traditions",
    level: "B1",
    title: "Mid-Autumn Festival and Lunar Folklore",
    wordCount: 240,
    content: "The Mid-Autumn Festival is a cherished harvest celebration across East and Southeast Asia. Occurring on the 15th day of the 8th lunar month under a full moon, the festival symbolizes harvest thanksgiving and family reunion.\n\nChildren carry vibrant lit lanterns through streets, while families share traditional mooncakes filled with lotus paste and salted egg yolks. Folklore legends like the Moon Goddess Chang'e enrich the festive cultural atmosphere.",
    keyVocab: [
      { word: "folklore", ipa: "/ˈfəʊk.lɔːr/", translation: "Văn học dân gian", definition: "Traditional beliefs and stories of a community." }
    ],
    questions: [
      {
        id: 1,
        question: "When is the Mid-Autumn Festival celebrated?",
        options: ["1st day of January", "15th day of the 8th lunar month", "31st of October", "Summer solstice"],
        answer: "15th day of the 8th lunar month",
        explanation: "It occurs on the 15th day of the 8th lunar month."
      }
    ]
  },
  {
    id: "read-23",
    topic: "Future Goals & Ambitions",
    level: "B2",
    title: "Goal-Setting Theory and SMART Framework",
    wordCount: 255,
    content: "Psychological goal-setting theory demonstrates that specific, challenging goals yield higher performance than vague intentions. Developed by Edwin Locke and Gary Latham, the SMART framework ensures goals are Specific, Measurable, Achievable, Relevant, and Time-bound.\n\nSetting specific milestones provides clear direction and feedback mechanisms. Breaking ambitious long-term goals into smaller weekly action items maintains motivation and prevents psychological overwhelm.",
    keyVocab: [
      { word: "framework", ipa: "/ˈfreɪm.wɜːk/", translation: "Khung cấu trúc / phương pháp", definition: "Basic structure underlying a system or concept." }
    ],
    questions: [
      {
        id: 1,
        question: "What does the letter 'M' stand for in the SMART goal framework?",
        options: ["Modern", "Measurable", "Mandatory", "Meaningful"],
        answer: "Measurable",
        explanation: "SMART stands for Specific, Measurable, Achievable, Relevant, Time-bound."
      }
    ]
  },
  {
    id: "read-24",
    topic: "Public Speaking & Debates",
    level: "C1",
    title: "Overcoming Stage Fright with Cognitive Reframing",
    wordCount: 260,
    content: "Glossophobia, or public speaking anxiety, triggers a physiological fight-or-flight response including elevated heart rate, muscle tension, and shallow breathing. Cognitive reframing is an effective psychological technique used to re-interpret these physiological arousal signals as positive excitement rather than paralyzing fear.\n\nBy reframing adrenaline surges as performance energy, speakers maintain cognitive control. Combined with diaphragmatic breathing and visualization, cognitive reframing transforms anxiety into confident presentation charisma.",
    keyVocab: [
      { word: "glossophobia", ipa: "/ˌɡlɒs.əˈfəʊ.bi.ə/", translation: "Hội chứng sợ nói trước đám đông", definition: "Fear of public speaking." }
    ],
    questions: [
      {
        id: 1,
        question: "What does cognitive reframing do to physiological arousal signals?",
        options: ["Ignores them completely", "Re-interprets them as positive excitement", "Stops the heart rate", "Creates panic"],
        answer: "Re-interprets them as positive excitement",
        explanation: "Cognitive reframing re-interprets arousal signals as positive excitement."
      }
    ]
  },
  {
    id: "read-25",
    topic: "Environment & Climate Change",
    level: "C1",
    title: "Restoring Biodiversity through Rewilding",
    wordCount: 270,
    content: "Rewilding is a progressive ecological restoration strategy aimed at restoring natural ecosystem processes and reintroducing apex keystone species into degraded landscapes. Unlike traditional conservation, which requires intensive human management, rewilding enables nature to repair itself with minimal human intervention.\n\nReintroducing keystone predators—such as wolves in Yellowstone National Park—initiates trophic cascades. Apex predators regulate herbivore populations, allowing vegetation to recover, stabilizing riverbanks, and boosting bird and insect biodiversity.\n\nRewilding projects demonstrate that ecosystem recovery is resilient when key ecological drivers are restored.",
    keyVocab: [
      { word: "rewilding", ipa: "/riːˈwaɪl.dɪŋ/", translation: "Tái hoang dã sinh thái", definition: "Restoring natural ecosystem processes and wildlife." },
      { word: "keystone", ipa: "/ˈkiː.stəʊn/", translation: "Loài đá đỉnh / quan trọng nhất", definition: "Species on which other species in an ecosystem depend." }
    ],
    questions: [
      {
        id: 1,
        question: "How does rewilding differ from traditional conservation management?",
        options: ["Requires more pesticides", "Enables nature to repair itself with minimal human intervention", "Focuses on zoo breeding only", "Cuts down forests"],
        answer: "Enables nature to repair itself with minimal human management.",
        explanation: "Rewilding allows nature to repair itself with minimal human management."
      }
    ]
  }
];

// ✍️ 25 PRESET WRITING EXERCISES
const PRESET_WRITING_EXERCISES = [
  {
    id: "write-01",
    category: "IELTS Task 2",
    topic: "Technology & AI",
    level: "B2",
    title: "Impact of Artificial Intelligence on Employment",
    prompt: "Some people believe that artificial intelligence will replace human jobs, leading to widespread unemployment. Others argue that AI will create new career opportunities. Discuss both views and give your opinion.",
    minWords: 250,
    outline: [
      "Introduction: Paraphrase prompt statement + State thesis (AI automates routine labor but opens innovative career fields).",
      "Body Paragraph 1: Arguments for job displacement (automation of manufacturing, customer service, data entry).",
      "Body Paragraph 2: Arguments for job creation (demand for AI engineers, data analysts, tech ethicists).",
      "Conclusion: Reiterate opinion (proactive upskilling enables workforce to thrive alongside AI)."
    ],
    keyVocab: ["automation", "job displacement", "upskilling", "technological paradigm", "indispensable"],
    sampleModelEssay: "In recent years, the rapid advancement of artificial intelligence has sparked intense debate regarding its impact on global employment. While critics fear that automation will cause mass joblessness, proponents contend that AI will generate novel industries. In my view, although routine tasks will be automated, AI will ultimately cultivate higher-value employment opportunities.\n\nOn the one hand, automation presents legitimate concerns for traditional labor markets. Algorithms and robotics are capable of performing repetitive tasks with superior precision and zero fatigue. For instance, automated customer support systems and robotic assembly lines have already reduced demand for manual data entry clerks and factory workers. If workers fail to adapt, widespread structural unemployment could occur.\n\nOn the other hand, technological revolutions historically create more jobs than they destroy. The rise of AI necessitates skilled professionals to design, manage, and govern these intelligent systems. New career paths such as machine learning engineering, data architecture, and AI ethics consulting have emerged rapidly. Furthermore, AI tools free human workers from mundane tasks, allowing them to focus on creative, strategic, and empathetic endeavors that machines cannot replicate.\n\nIn conclusion, while AI will inevitably render certain manual occupations obsolete, it will simultaneously catalyze new career sectors. Governments and educational institutions must focus on lifelong upskilling programs to prepare the workforce for this technological evolution."
  },
  {
    id: "write-02",
    category: "Business Email",
    topic: "Career & Workplace",
    level: "B1",
    title: "Formal Project Delay Notification",
    prompt: "Write a formal email to a project manager explaining a two-week delay in delivering a software module. State the reasons, outline corrective measures, and suggest an updated timeline.",
    minWords: 150,
    outline: [
      "Subject Line: Professional & clear topic reference.",
      "Opening: Formal greeting + Purpose statement.",
      "Body 1: Technical reasons for delay (unexpected integration bug).",
      "Body 2: Corrective measures + Revised milestone schedule.",
      "Closing: Apology + Offer for follow-up call."
    ],
    keyVocab: ["unforeseen technical issue", "mitigation plan", "revised timeline", "assurance", "at your earliest convenience"],
    sampleModelEssay: "Subject: Project Milestone Update: Revised Delivery Schedule for Payment Module\n\nDear Mr. Henderson,\n\nI am writing to formally update you regarding the delivery schedule for the payment gateway integration module of Project Alpha.\n\nDuring our final quality assurance testing this week, our engineering team discovered an unforeseen technical vulnerability related to third-party API authentication. To ensure our deployment meets strict security compliance standards, we must perform comprehensive code refactoring.\n\nConsequently, the completion date for this module will be extended by two weeks, moving the final delivery from October 15th to October 29th. We have allocated additional senior developers to expedite testing.\n\nWe sincerely apologize for any inconvenience this adjustment may cause. Please let me know if you would like to schedule a brief call tomorrow to discuss the revised timeline in detail.\n\nSincerely,\n\nAlex Mercer\nLead Systems Engineer"
  },
  {
    id: "write-03",
    category: "IELTS Task 1 - Chart",
    topic: "Environment & Climate Change",
    level: "B2",
    title: "Renewable Energy Consumption Comparison",
    prompt: "The chart illustrates renewable energy consumption (solar, wind, hydro) across three regions between 2010 and 2024. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    minWords: 150,
    outline: [
      "Introduction: Paraphrase chart description & units.",
      "Overview: Key trend (overall surge in solar & wind across all regions).",
      "Body Paragraph 1: Detailed figures for Solar and Wind growth.",
      "Body Paragraph 2: Detailed figures for Hydro power stability."
    ],
    keyVocab: ["upward trajectory", "exponential increase", "stabilized", "predominant source", "in comparison"],
    sampleModelEssay: "The bar chart compares the consumption of three distinct renewable energy sources—solar, wind, and hydroelectric power—in Europe, North America, and Asia-Pacific from 2010 to 2024.\n\nOverall, renewable energy consumption experienced a substantial upward trajectory across all three regions over the 14-year period. Solar and wind power recorded the most dramatic growth, whereas hydroelectric power remained relatively stable as a foundational energy source.\n\nIn 2010, hydroelectricity was the predominant green energy source, accounting for approximately 150 gigawatts (GW) in North America and 120 GW in Europe. By 2024, hydroelectric output experienced modest gains, rising to 170 GW and 140 GW respectively.\n\nConversely, solar energy witnessed exponential growth. In Asia-Pacific, solar consumption surged from a mere 15 GW in 2010 to an impressive 310 GW in 2024, surpassing all other sources. Similarly, wind power in Europe expanded threefold, escalating from 80 GW to 240 GW by the end of the period."
  },
  {
    id: "write-04",
    category: "Opinion Essay",
    topic: "Education & Academic Life",
    level: "B2",
    title: "Should Higher Education Be Free for Everyone?",
    prompt: "Many people argue that university education should be completely free for all students, funded by public taxes. Do you agree or disagree with this statement?",
    minWords: 250,
    outline: [
      "Introduction: Re-state debate + Stance (Strongly agree that free university education boosts economic equality).",
      "Body 1: Equal opportunity & elimination of student debt burden.",
      "Body 2: Long-term economic returns for society (skilled workforce & innovation).",
      "Conclusion: Reiterate position & policy recommendation."
    ],
    keyVocab: ["equal opportunity", "meritocracy", "debt burden", "taxpayer investment", "socioeconomic mobility"],
    sampleModelEssay: "The question of whether tertiary education should be fully subsidized by the state remains a central topic in public policy. I strongly agree that university tuition should be free for all qualified students, as it promotes social mobility and yields immense long-term economic dividends for society.\n\nFirstly, removing tuition fees ensures that higher education is based on academic merit rather than financial privilege. In many nations, exorbitant university fees discourage talented individuals from lower socioeconomic backgrounds from pursuing higher degrees. Consequently, young graduates carry crushing student loan debts into their early careers, delaying homeownership and financial independence. State-funded tuition creates an equitable meritocracy where every student has the opportunity to achieve their potential.\n\nSecondly, public investment in university education generates substantial economic returns. Modern knowledge economies require highly skilled engineers, medical professionals, and researchers to drive innovation. Countries that offer free tertiary education, such as Finland and Germany, cultivate a well-educated workforce that attracts foreign direct investment and generates higher tax revenues over graduates' lifetimes, ultimately offsetting initial government expenditures.\n\nIn conclusion, making university education free is not a financial drain, but a crucial strategic investment in human capital. Governments should prioritize funding higher education to foster equality and national prosperity."
  },
  {
    id: "write-05",
    category: "Cover Letter",
    topic: "Career & Workplace",
    level: "B2",
    title: "Application for Digital Marketing Specialist",
    prompt: "Write a professional cover letter applying for a Senior Digital Marketing Manager position at a tech company. Highlight your experience in SEO, campaign ROI, and leadership.",
    minWords: 200,
    outline: [
      "Salutation: Formal addressing to Hiring Director.",
      "Opening: Express enthusiasm for position + summary of core qualification.",
      "Body 1: Proven achievements in digital campaigns & ROI growth.",
      "Body 2: Leadership experience & strategic alignment with company goals.",
      "Closing: Call to action for interview + Professional sign-off."
    ],
    keyVocab: ["demonstrated track record", "search engine optimization", "data-driven strategy", "cross-functional leadership", "enclose resume"],
    sampleModelEssay: "Dear Hiring Manager,\n\nI am writing to express my strong enthusiasm for the Senior Digital Marketing Manager position at NexaTech Solutions. With over six years of experience executing data-driven digital campaigns and driving brand growth in the SaaS sector, I am confident in my ability to elevate NexaTech's market presence.\n\nIn my previous role as Marketing Lead at Horizon Media, I spearheaded a comprehensive search engine optimization (SEO) and content restructuring strategy that increased organic website traffic by 140% within twelve months. Furthermore, by optimizing paid acquisition funnels, my team improved campaign return on investment (ROI) by 35% while reducing customer acquisition costs.\n\nBeyond technical marketing skills, I am an experienced team leader passionate about mentoring cross-functional creative and analytical talent. NexaTech's commitment to AI-driven products aligns perfectly with my professional expertise and strategic vision.\n\nI have enclosed my resume for your review and look forward to the opportunity to discuss how my skill set can contribute to NexaTech's continued expansion.\n\nSincerely,\n\nJessica Miller"
  },
  {
    id: "write-06",
    category: "Report Writing",
    topic: "Money, Finance & Banking",
    level: "C1",
    title: "Corporate Sustainability and Renewable Finance Report",
    prompt: "Write a formal corporate report evaluating the adoption of green finance and sustainable investment practices across your organization over the past fiscal year.",
    minWords: 250,
    outline: [
      "Title & Executive Summary",
      "Section 1: Assessment of Current Green Investment Allocations",
      "Section 2: Carbon Offsetting & Energy Efficiency Results",
      "Section 3: Strategic Recommendations for Next Fiscal Year"
    ],
    keyVocab: ["executive summary", "capital expenditure", "ESG criteria", "carbon neutrality", "sustainable portfolio"],
    sampleModelEssay: "Executive Summary\nThis report evaluates the integration of Environmental, Social, and Governance (ESG) criteria into the corporation's treasury and investment framework during Fiscal Year 2023-2024.\n\n1. Green Investment Allocations\nOver the past 12 months, capital expenditure toward sustainable financial instruments expanded by 45%. The company successfully allocated $12 million into certified green bonds, prioritizing solar power infrastructure and energy-efficient building upgrades.\n\n2. Performance & Emission Impact\nEnergy efficiency audits across regional operational headquarters recorded a 22% reduction in overall kilowatt-hour consumption. Transitioning 60% of corporate vehicle fleets to electric vehicles prevented an estimated 420 metric tons of carbon emissions.\n\n3. Recommendations\nTo achieve complete carbon neutrality by 2030, the treasury committee recommends:\n- Increasing sustainable investment portfolio allocations to 35% of total reserves.\n- Mandatory carbon footprint auditing for all tier-1 supply chain vendors."
  },
  {
    id: "write-07",
    category: "IELTS Task 2",
    topic: "Travel & Cultures",
    level: "B2",
    title: "Impact of Mass Tourism on Historical Sites",
    prompt: "Mass tourism causes significant damage to famous historical monuments and local natural environments. What problems does mass tourism cause, and what solutions can governments implement?",
    minWords: 250,
    outline: [
      "Introduction: Define mass tourism issue + State essay scope (problems & solutions).",
      "Body 1: Problems (physical erosion, litter, rising cost of living for locals).",
      "Body 2: Solutions (visitor quotas, eco-taxes, promoting off-peak travel).",
      "Conclusion: Reiterate that regulated tourism balances preservation and economic growth."
    ],
    keyVocab: ["overtourism", "physical erosion", "visitor cap", "eco-levy", "sustainable preservation"],
    sampleModelEssay: "The boom in global travel has made historic landmarks accessible to millions, yet overtourism poses severe threats to cultural heritage and local ecosystems. This essay will examine the primary hazards associated with mass tourism and propose actionable government interventions.\n\nThe main issue stemming from unrestricted tourist volumes is physical degradation. Historical sites such as Machu Picchu and the Colosseum suffer from severe erosion due to millions of footsteps wearing down fragile ancient masonry. Furthermore, excessive waste accumulation and pollution strain municipal infrastructure, destroying natural habitats and driving up local housing prices to the detriment of residents.\n\nTo mitigate these issues, governments must implement strict regulatory policies. Firstly, authorities should introduce daily visitor quotas and mandatory advance reservation systems to control crowd density at delicate sites. Secondly, implementing targeted eco-levies on tourist entries can generate dedicated revenue for historical restoration and waste management. Finally, promoting lesser-known regional destinations diverts foot traffic away from congested urban centers.\n\nIn conclusion, while tourism provides vital revenue, unregulated visitor numbers endanger historical heritage. By enforcing visitor caps and investing eco-taxes into conservation, governments can preserve irreplaceable monuments for future generations."
  },
  {
    id: "write-08",
    category: "Formal Proposal",
    topic: "Health, Medicine & Fitness",
    level: "B2",
    title: "Workplace Employee Wellness Program Proposal",
    prompt: "Write a formal proposal to company executives recommending the implementation of a comprehensive employee wellness program.",
    minWords: 200,
    outline: [
      "Proposal Title & Purpose Statement",
      "Current Problem: Employee burnout & absenteeism rates.",
      "Proposed Interventions: Gym subsidies, mental health days, ergonomic desks.",
      "Expected ROI & Budget Summary"
    ],
    keyVocab: ["burnout reduction", "absenteeism", "return on investment", "wellness initiative", "ergonomic"],
    sampleModelEssay: "Proposal: Implementation of Corporate Employee Wellness Initiative\n\n1. Purpose & Rationale\nRecent internal HR surveys indicate a 15% increase in workplace stress and absenteeism over the past year. Introducing a structured wellness program will enhance workforce morale, reduce healthcare costs, and increase employee retention.\n\n2. Key Program Components\n- Physical Health Subsidies: Provide a monthly $50 fitness stipend for gym memberships or yoga classes.\n- Mental Health Resources: Offer confidential counseling sessions and quarterly stress management workshops.\n- Ergonomic Desk Upgrades: Replace traditional workstations with adjustable standing desks.\n\n3. Financial Investment & Expected Outcomes\nWe estimate an initial annual budget of $25,000. Based on industry benchmarks, reduced absenteeism and increased productivity will yield an estimated 3:1 return on investment within 18 months."
  },
  {
    id: "write-09",
    category: "Personal Journal",
    topic: "Emotions & Psychology",
    level: "A2",
    title: "Reflecting on Personal Growth and Mindfulness",
    prompt: "Write a personal journal entry reflecting on how starting a daily gratitude practice helped you manage stress during a difficult week.",
    minWords: 150,
    outline: [
      "Date & Opening thought.",
      "Reflecting on recent stress factors.",
      "How writing down 3 daily gratitudes shifted perspective.",
      "Concluding commitment to self-care."
    ],
    keyVocab: ["gratitude journal", "mindful moment", "perspective shift", "calmness", "inner peace"],
    sampleModelEssay: "October 14th, 2024\n\nThis week was incredibly intense at work with tight deadlines and endless meetings. Normally, I would feel overwhelmed and anxious by Thursday evening. However, starting my daily gratitude journal ten days ago has made a remarkable difference in my mindset.\n\nEvery night before sleeping, I write down three specific things I am grateful for—such as a warm cup of morning coffee, a kind message from a friend, or completing a tough project step. This simple habit forced my brain to focus on positive moments rather than dwelling on stressful events.\n\nI feel much more grounded and calm tonight. I am committed to continuing this practice every day."
  },
  {
    id: "write-10",
    category: "IELTS Task 2",
    topic: "News, Media & Society",
    level: "C1",
    title: "Regulation of Social Media Platforms",
    prompt: "Social media platforms have become the primary source of news for many citizens. Some people argue governments should regulate content to prevent misinformation, while others believe regulation violates freedom of speech. Discuss both sides and give your opinion.",
    minWords: 250,
    outline: [
      "Introduction: State topic complexity + Thesis (Balancing misinformation prevention with free speech protection requires independent oversight).",
      "Body 1: Arguments for regulation (preventing fake news, hate speech, election interference).",
      "Body 2: Arguments against regulation (risk of state censorship & suppression of political dissent).",
      "Conclusion: Propose independent non-partisan regulatory bodies."
    ],
    keyVocab: ["censorship", "misinformation", "disinformation", "free speech", "non-partisan oversight"],
    sampleModelEssay: "The rise of social media as a primary news distribution channel has transformed public discourse, giving rise to fierce debate regarding state regulation. While advocates argue that government oversight is necessary to halt harmful misinformation, opponents warn that content regulation threatens freedom of expression. In my view, content oversight is essential, but must be managed by independent non-partisan bodies rather than politicians.\n\nOn the one hand, unregulated social media algorithms frequently amplify sensationalized fake news and hate speech to maximize user engagement. Unverified health rumors and coordinated political disinformation campaigns can incite violence and destabilize democratic elections. Without strict legal accountability for digital platforms, malicious actors can exploit public channels to spread harmful falsehoods unchecked.\n\nOn the other hand, granting governments direct authority to censor online content creates dangerous precedents for authoritarian abuse. State officials could easily label legitimate political criticism or investigative reporting as 'disinformation' to silence opposition. Total state control over online speech threatens civil liberties and undermines journalistic freedom.\n\nIn conclusion, mitigating social media misinformation requires regulatory frameworks that avoid government censorship. Establishing independent, transparent media councils to enforce truthfulness standards offers a balanced solution that protects both public truth and free speech."
  },
  {
    id: "write-11",
    category: "Opinion Essay",
    topic: "Food, Cooking & Dining",
    level: "B1",
    title: "Taxing Unhealthy Fast Food",
    prompt: "To combat rising obesity levels, some governments propose placing higher taxes on sugary drinks and fast food. Do you think this is an effective measure?",
    minWords: 200,
    outline: [
      "Introduction: Introduce sugar tax proposal + State opinion (Effective alongside nutritional education).",
      "Body 1: Financial deterrence of sugar taxes (similar to tobacco taxes).",
      "Body 2: Need for complementary measures (subsidizing fresh produce).",
      "Conclusion: Reiterate recommendation."
    ],
    keyVocab: ["pigouvian tax", "financial deterrent", "obesity epidemic", "subsidize", "public health"],
    sampleModelEssay: "Rising rates of obesity and diabetes pose severe challenges to global healthcare systems. To tackle this crisis, several governments have proposed implementing higher taxes on sugary beverages and fast food. I believe sugar taxes are an effective financial deterrent when combined with subsidies for healthy fresh produce.\n\nFirstly, imposing higher taxes raises retail prices, encouraging consumers to choose healthier alternatives. Similar to tobacco taxes, higher costs discourage daily consumption of soft drinks and processed snacks, particularly among teenagers and budget-conscious shoppers.\n\nSecondly, revenue generated from junk food taxes can directly fund public health campaigns and subsidize fresh fruits and vegetables in low-income neighborhoods, making nutritious food affordable for everyone.\n\nIn conclusion, taxing unhealthy food is an effective strategy to reduce junk food consumption and generate funds for public health initiatives."
  },
  {
    id: "write-12",
    category: "IELTS Task 2",
    topic: "Law, Justice & Ethics",
    level: "C1",
    title: "Rehabilitation vs Imprisonment for Criminals",
    prompt: "Should prisons focus primarily on punishing criminals or rehabilitating them through education and vocational training?",
    minWords: 250,
    outline: [
      "Introduction: Define penal philosophy contrast + State thesis (Rehabilitation reduces reoffending and benefits society).",
      "Body 1: Limitations of purely punitive prison systems (high recidivism, anger).",
      "Body 2: Advantages of vocational rehabilitation (job skills, smooth re-entry).",
      "Conclusion: Summary statement advocating reform."
    ],
    keyVocab: ["rehabilitation", "recidivism", "punitive measures", "vocational training", "social reintegration"],
    sampleModelEssay: "The core purpose of the penal system remains a contentious issue in modern legal ethics. While traditional views advocate for harsh punishment to deter crime, modern criminologists argue that prisons should prioritize rehabilitation. I firmly believe that focusing on education and vocational training is far more effective in reducing long-term crime.\n\nPurely punitive incarceration often fails to reform criminal behavior. Confining offenders in harsh environments without constructive guidance fosters resentment and exposes non-violent offenders to hardened criminal networks. Consequently, upon release, individuals with criminal records face severe employment discrimination, forcing many to re-offend out of economic desperation.\n\nIn contrast, rehabilitative prison programs equip inmates with practical job skills, literacy, and psychological counseling. Countries like Norway that prioritize rehabilitation record the lowest recidivism rates globally. When former convicts possess legitimate qualifications, they can secure employment and become productive members of society upon release.\n\nIn conclusion, while prisons must maintain justice, prioritizing rehabilitation over punishment creates a safer society."
  },
  {
    id: "write-13",
    category: "Business Email",
    topic: "Shopping & Fashion",
    level: "B1",
    title: "Supplier Price Negotiation Email",
    prompt: "Write a business email to a fabric supplier negotiating a 10% discount on a large wholesale order of organic cotton.",
    minWords: 150,
    outline: [
      "Subject line & Greeting.",
      "Reference previous successful orders.",
      "Propose 10% discount for bulk order.",
      "Closing & Next steps."
    ],
    keyVocab: ["bulk order", "wholesale rate", "long-term partnership", "competitive pricing", "prompt payment"],
    sampleModelEssay: "Subject: Wholesale Order Inquiry & Bulk Pricing Discussion - Organic Cotton Line\n\nDear Ms. Davis,\n\nI hope this email finds you well. Our team has been very pleased with the quality of organic cotton supplied by your company for our autumn fashion collection.\n\nWe are preparing to place a major order for 5,000 meters of premium organic cotton for our upcoming spring line. Given the substantial volume of this order, we would like to inquire whether you could offer a 10% volume discount on the unit price.\n\nSecuring this competitive pricing will allow us to establish your company as our primary fabric vendor for the entire fiscal year. We are prepared to finalize payment immediately upon contract approval.\n\nThank you for your consideration. I look forward to your response.\n\nBest regards,\n\nMark Stevens\nProcurement Manager"
  },
  {
    id: "write-14",
    category: "IELTS Task 2",
    topic: "Environment & Climate Change",
    level: "B2",
    title: "Individual Responsibility vs Government Action on Climate",
    prompt: "Some people believe individuals can do little to prevent climate change and only governments and large corporations can make a difference. To what extent do you agree or disagree?",
    minWords: 250,
    outline: [
      "Introduction: State debate + Opinion (Governments hold primary power, but consumer demand drives policy).",
      "Body 1: Why government regulation is indispensable (industrial policy, green grid investments).",
      "Body 2: Why individual consumer choices matter (market demand shifts).",
      "Conclusion: Unified effort needed."
    ],
    keyVocab: ["industrial regulation", "carbon footprint", "policy enforcement", "consumer demand", "collective responsibility"],
    sampleModelEssay: "Addressing global climate change requires massive economic and structural shifts. While some argue that individual efforts are negligible compared to government policy, I believe that while state action is paramount, individual consumer behavior plays a vital supportive role.\n\nOn the one hand, governments and multinational corporations control the primary drivers of carbon emissions. Only legislative bodies can mandate carbon taxes, regulate industrial pollution, and fund national renewable energy infrastructure. For instance, replacing coal power plants with wind farms requires billions in public capital investment that individuals cannot execute alone.\n\nOn the other hand, collective individual choices exert powerful market pressure on corporate behavior. When consumers switch to plant-based diets, reduce single-use plastics, and purchase electric vehicles, corporations are forced to adapt their product lines to remain profitable. Individual civic engagement also pressures politicians to pass ambitious climate legislation.\n\nIn conclusion, while systemic government regulation is indispensable, individual choices remain essential drivers of ecological change."
  },
  {
    id: "write-15",
    category: "Opinion Essay",
    topic: "Philosophy & Life Values",
    level: "B2",
    title: "Does Wealth Guarantee Happiness?",
    prompt: "It is often said that 'money cannot buy happiness'. Do you agree or disagree with this statement?",
    minWords: 200,
    outline: [
      "Introduction: State common adage + Thesis (Money provides security up to a threshold, but inner fulfillment depends on non-material factors).",
      "Body 1: Financial security relieves survival anxiety.",
      "Body 2: Non-material sources of happiness (relationships, health, purpose).",
      "Conclusion: Balanced summary."
    ],
    keyVocab: ["financial security", "baseline comfort", "hedonic treadmill", "fulfillment", "interpersonal relationships"],
    sampleModelEssay: "The age-old proverb 'money cannot buy happiness' remains a subject of philosophical and psychological debate. I partially agree with this statement; while financial security eliminates survival stress, true emotional fulfillment stems from non-material aspects of life.\n\nUndeniably, money provides baseline comfort and eliminates financial anxiety. Having sufficient income to afford quality healthcare, comfortable housing, and nutritious food is essential for emotional peace. Studies show that increasing income improves happiness up to the point where basic needs and security are met.\n\nHowever, beyond financial security, additional wealth yields diminishing emotional returns. Material luxury cannot purchase genuine friendships, physical health, or meaningful life purpose. Many wealthy individuals suffer from chronic isolation or stress on the constant pursuit of more assets.\n\nIn conclusion, while money is necessary to satisfy physical security, lasting happiness is cultivated through health, strong relationships, and personal purpose."
  },
  {
    id: "write-16",
    category: "IELTS Task 1 - Chart",
    topic: "Arts, Cinema & Literature",
    level: "B2",
    title: "Global Music Streaming Industry Revenue",
    prompt: "The line graph shows revenues generated by digital music streaming, physical vinyl/CD sales, and digital downloads from 2005 to 2023. Summarize the main trends.",
    minWords: 150,
    outline: [
      "Introduction: Describe graph parameters.",
      "Overview: Shift from physical sales to digital streaming dominance.",
      "Body 1: Decline of physical formats and digital downloads.",
      "Body 2: Surge of streaming platform subscriptions."
    ],
    keyVocab: ["sharp decline", "surge", "dominant market share", "downward trajectory", "surpass"],
    sampleModelEssay: "The line graph details revenue trends across three formats of music distribution—physical media, digital downloads, and music streaming—between 2005 and 2023.\n\nOverall, the music industry underwent a dramatic transformation. Physical sales and digital downloads experienced steep declines, whereas streaming revenues experienced exponential growth, becoming the dominant market revenue stream by 2023.\n\nIn 2005, physical sales generated over $18 billion globally, while streaming revenue was virtually non-existent. Over the next decade, physical format sales dropped precipitously to below $3 billion by 2023. Digital downloads rose briefly to a peak of $4 billion in 2012 before falling into a downward trajectory.\n\nConversely, music streaming began its meteoric rise in 2014, surpassing digital downloads in 2016 and physical sales in 2018. By 2023, streaming generated an unprecedented $17.5 billion globally."
  },
  {
    id: "write-17",
    category: "Cover Letter",
    topic: "Education & Academic Life",
    level: "B2",
    title: "Application for University Academic Advisor",
    prompt: "Write a cover letter applying for an Academic Advisor position at an international university, highlighting student counseling experience.",
    minWords: 200,
    outline: [
      "Formal greeting & Position title.",
      "Relevant counseling qualifications & student retention achievements.",
      "Intercultural communication skills.",
      "Formal interview request."
    ],
    keyVocab: ["academic guidance", "student retention", "intercultural communication", "advising", "holistic development"],
    sampleModelEssay: "Dear Selection Committee,\n\nI am writing to apply for the Academic Advisor position at Global International University. With five years of experience providing holistic academic guidance and career counseling to diverse student populations, I am eager to contribute to your university's student success initiatives.\n\nIn my current role at Westlake College, I advise over 300 undergraduate students per semester, assisting them with course selection, degree progress auditing, and academic probation recovery. By implementing proactive check-in systems, my department increased second-year student retention by 12%.\n\nMy background in intercultural communication enables me to connect effectively with international students, helping them navigate cultural transitions and university expectations seamlessly.\n\nThank you for considering my application. I look forward to discussing how my counseling experience aligns with GIU's academic standards.\n\nSincerely,\n\nRobert Vance"
  },
  {
    id: "write-18",
    category: "IELTS Task 2",
    topic: "Public Speaking & Debates",
    level: "B2",
    title: "Public Speaking Education in School Curricula",
    prompt: "Some educators believe public speaking and debate should be mandatory subjects in all secondary schools. Do you agree or disagree?",
    minWords: 250,
    outline: [
      "Introduction: Introduce proposal + State agreement (Mandatory debate builds critical thinking and communication confidence).",
      "Body 1: Benefits of public speaking (confidence, articulation, overcoming anxiety).",
      "Body 2: Benefits of debate (research skills, analyzing multiple perspectives).",
      "Conclusion: Reiterate recommendation for curriculum reform."
    ],
    keyVocab: ["mandatory curriculum", "articulation", "critical thinking", "rhetorical skills", "empowerment"],
    sampleModelEssay: "Effective oral communication is one of the most vital life skills in modern professional environments. I fully agree that public speaking and debate should be mandatory components of secondary school curricula.\n\nFirstly, formal public speaking instruction helps adolescents overcome social anxiety and articulate their ideas clearly. Many intelligent students struggle in higher education and job interviews simply because they have never been taught vocal projection, body language, and speech structuring. Regular classroom presentation practice builds self-confidence early in life.\n\nSecondly, competitive debate fosters rigorous critical thinking and empathy. To debate effectively, students must research complex topics, evaluate evidence, and understand opposing viewpoints. This process teaches young people to construct logical arguments rather than relying on emotional reaction.\n\nIn conclusion, making public speaking mandatory prepares students for academic and professional success by developing clear communication and analytical skills."
  },
  {
    id: "write-19",
    category: "Formal Proposal",
    topic: "Technology & AI",
    level: "C1",
    title: "Proposal for Cloud Infrastructure Migration",
    prompt: "Write a proposal to IT department heads advocating for migrating local company servers to a secure cloud platform.",
    minWords: 220,
    outline: [
      "Executive Summary & Current Server Bottlenecks.",
      "Benefits of Cloud Migration (scalability, security, disaster recovery).",
      "Implementation Roadmap & Cost Estimate."
    ],
    keyVocab: ["cloud migration", "scalability", "uptime guarantee", "disaster recovery", "cost optimization"],
    sampleModelEssay: "Proposal: Cloud Infrastructure Migration for Enhanced Enterprise Security\n\n1. Executive Summary\nOur current on-premises server infrastructure is reaching end-of-life status, leading to frequent maintenance downtime and limited scalability. Migrating to an enterprise cloud provider will guarantee 99.99% uptime and reduce operational IT maintenance costs by 28%.\n\n2. Key Operational Advantages\n- Scalability: Instantly allocate server bandwidth during peak business periods without hardware purchases.\n- Automated Disaster Recovery: Encrypted continuous cloud backups ensure instant data restoration in case of cyber incidents.\n- Security Compliance: Advanced zero-trust cloud architecture protects sensitive client databases.\n\n3. Phased Implementation Plan\nPhase 1 (Month 1): Security audit and cloud environment setup.\nPhase 2 (Month 2): Data migration and employee training.\nPhase 3 (Month 3): On-premises server decommissioning."
  },
  {
    id: "write-20",
    category: "Personal Journal",
    topic: "Travel & Cultures",
    level: "B1",
    title: "Journal Entry: First Day in a Foreign Country",
    prompt: "Write a journal entry describing your impressions, feelings, and cultural observations on your first day arriving in Tokyo, Japan.",
    minWords: 160,
    outline: [
      "Date & Arrival details.",
      "Sensory observations of Tokyo (politeness, efficient transit, neon lights).",
      "Personal feelings of wonder and excitement."
    ],
    keyVocab: ["sensory overload", "impeccable politeness", "seamless transit", "cultural fascination"],
    sampleModelEssay: "Tokyo - April 5th, 2024\n\nI finally landed in Tokyo today after a long ten-hour flight. Stepping out of Shinjuku Station was an unforgettable sensory experience. Neon lights illuminated the evening sky, and despite the massive crowds, everything operated with incredible order and silence.\n\nWhat struck me most was the impeccable politeness of everyone I met, from airport staff to convenience store clerks. Navigating the train system was smooth thanks to clear signage. I had a steaming bowl of authentic ramen at a quiet alleyway shop before heading to my hotel.\n\nI feel a mix of exhaustion and intense wonder. I cannot wait to explore the historic temples of Kyoto later this week."
  },
  {
    id: "write-21",
    category: "IELTS Task 2",
    topic: "Family & Relationships",
    level: "B2",
    title: "Nuclear Families vs Extended Family Living",
    prompt: "In many countries, multi-generational extended families living together is decreasing, while nuclear families living independently is rising. Is this a positive or negative development?",
    minWords: 250,
    outline: [
      "Introduction: Trend statement + Stance (Contains benefits of independence, but negative overall due to loss of family support).",
      "Body 1: Positives of nuclear family living (privacy, autonomy).",
      "Body 2: Negatives (childcare burden, isolation of elderly relatives).",
      "Conclusion: Reiterate balanced stance."
    ],
    keyVocab: ["multi-generational household", "nuclear family", "childcare burden", "filial piety", "social isolation"],
    sampleModelEssay: "In recent decades, urbanization and economic changes have led to a decline in multi-generational households. While living in independent nuclear families offers personal autonomy, I believe this shift is overall a negative development due to the loss of family support networks.\n\nOn the one hand, nuclear family living provides greater privacy and independence. Young couples can make financial and lifestyle decisions without interference from elders. Additionally, living near city business centers allows parents to shorten work commutes.\n\nOn the other hand, the erosion of extended family co-living creates severe social disadvantages. In traditional multi-generational homes, grandparents provide reliable childcare, relieving financial pressure on working parents. Furthermore, elderly family members in nuclear setups often suffer from acute social isolation and depression, whereas living with family ensures constant companionship and care.\n\nIn conclusion, while nuclear families enjoy greater independence, the loss of intergenerational emotional and financial support makes this trend largely negative."
  },
  {
    id: "write-22",
    category: "Business Email",
    topic: "Customer Service & Ethics",
    level: "B1",
    title: "Formal Customer Complaint Resolution",
    prompt: "Write a customer service resolution email addressing a customer whose package was damaged during delivery, offering a replacement and gift voucher.",
    minWords: 150,
    outline: [
      "Formal apology + Acknowledgment of damaged shipment.",
      "Offer immediate free replacement.",
      "Provide $25 store credit voucher as goodwill gesture.",
      "Closing commitment to quality service."
    ],
    keyVocab: ["sincere apologies", "replacement shipment", "goodwill voucher", "expedited shipping"],
    sampleModelEssay: "Dear Ms. Parker,\n\nThank you for contacting customer support. We sincerely apologize that your order #8492 arrived with damaged packaging.\n\nWe hold our delivery standards to the highest level, and we deeply regret the frustration this caused. I have arranged an immediate replacement shipment of your ceramic vase set, which will be dispatched today via expedited shipping at no extra charge. Your tracking number is CX-9204-JP.\n\nAs a gesture of our goodwill, we have also credited your store account with a $25 gift voucher for future purchases.\n\nPlease let us know if we can assist you with anything further.\n\nWarm regards,\n\nEmily Chen\nCustomer Relations Manager"
  },
  {
    id: "write-23",
    category: "IELTS Task 2",
    topic: "Sports, Hobbies & Games",
    level: "B2",
    title: "Should Commercial Sponsorship of Sports Be Banned?",
    prompt: "Large corporations spend millions sponsoring major sporting events. Some argue this commercializes sports excessively, while others believe it is essential for athletic growth. Discuss both views.",
    minWords: 250,
    outline: [
      "Introduction: State topic + Scope.",
      "Body 1: Drawbacks of commercialization (over-advertising, unethical alcohol/gambling sponsors).",
      "Body 2: Advantages of corporate funding (stadium infrastructure, athlete salaries, youth programs).",
      "Conclusion: Regulated sponsorship is necessary."
    ],
    keyVocab: ["commercialization", "corporate sponsorship", "sports infrastructure", "ethical advertising"],
    sampleModelEssay: "Commercial sponsorship has become an integral feature of modern international athletics. While critics argue that corporate funding distracts from true sporting values, I believe financial sponsorship is vital for sustaining professional sports infrastructure.\n\nOn the one hand, excessive commercialization can undermine the integrity of sports. Stadiums bombarded with corporate logos and constant commercial breaks alienate traditional fans. Moreover, accepting sponsorship deals from gambling or fast-food companies sends contradictory health messages to young viewers.\n\nOn the other hand, corporate sponsorship provides indispensable funding. Major tournaments like the Olympics require billions of dollars for stadium construction, security, and broadcast technology. Furthermore, corporate funding provides professional athletes with salaries and funds grassroots youth training academies.\n\nIn conclusion, while corporate sponsorship must be ethically regulated, it remains essential for the global growth of sports."
  },
  {
    id: "write-24",
    category: "Opinion Essay",
    topic: "Arts, Cinema & Literature",
    level: "C1",
    title: "Government Funding for the Arts",
    prompt: "Some people argue that government funding should focus exclusively on public services like healthcare and education, rather than funding museums and arts. Do you agree or disagree?",
    minWords: 250,
    outline: [
      "Introduction: Introduce debate + Disagree (Arts enrich national culture and boost tourism revenues).",
      "Body 1: Importance of arts funding for cultural identity and historical preservation.",
      "Body 2: Economic returns of arts (museum tourism, creative jobs).",
      "Conclusion: Arts funding should be maintained alongside healthcare."
    ],
    keyVocab: ["cultural preservation", "public subsidy", "artistic heritage", "economic spin-off", "civic pride"],
    sampleModelEssay: "In times of fiscal restraint, public expenditure on arts and cultural institutions is frequently questioned. While basic services like healthcare and education require substantial funding, I strongly disagree that state support for the arts should be eliminated.\n\nFirstly, the arts preserve national heritage and foster civic pride. Museums, art galleries, and public theater companies safeguard cultural identity. Without government subsidies, non-profit historical exhibits and traditional performing arts would disappear, leaving cultural enrichment accessible only to the wealthy.\n\nSecondly, public investment in the arts generates significant economic spin-offs. Cultural tourism attracts millions of international visitors who spend money in local hotels, restaurants, and transportation. The creative economy generates thousands of skilled jobs in design, architecture, and media.\n\nIn conclusion, government support for the arts is not a luxury, but a vital investment in society's cultural identity and economy."
  },
  {
    id: "write-25",
    category: "Report Writing",
    topic: "Emergency, Safety & Survival",
    level: "B2",
    title: "Municipal Earthquake Preparedness Audit",
    prompt: "Write a safety audit report assessing the earthquake preparedness of public school buildings in a coastal district.",
    minWords: 220,
    outline: [
      "Title & Scope of Audit.",
      "Findings: Structural retrofitting status & evacuation route signage.",
      "Key Recommendations for Immediate Action."
    ],
    keyVocab: ["safety audit", "seismic retrofitting", "structural integrity", "evacuation drill", "compliance"],
    sampleModelEssay: "Municipal Structural Safety Audit: Regional School Earthquake Readiness\n\n1. Scope of Audit\nThis report assesses the seismic structural integrity and disaster readiness of 14 public school facilities in the Eastern District following updated municipal safety regulations.\n\n2. Core Audit Findings\n- Structural Integrity: 10 out of 14 school buildings have completed mandatory seismic retrofitting. However, 4 older facilities built prior to 1995 exhibit unreinforced masonry walls requiring immediate reinforcement.\n- Evacuation Infrastructure: 85% of classrooms feature clear evacuation route signage. However, emergency alarm batteries in 3 facilities were found to be depleted.\n\n3. Urgent Recommendations\n- Immediately allocate emergency funds to retrofit unreinforced masonry walls in the 4 flagged older schools.\n- Conduct mandatory monthly earthquake drills across all district schools beginning next month."
  }
];

// Merged 1000+ Exercise Data Bank Exports
export const LISTENING_EXERCISES = [...PRESET_LISTENING_EXERCISES, ...BANK_LISTENING_EXERCISES];
export const SPEAKING_EXERCISES = [...PRESET_SPEAKING_EXERCISES, ...BANK_SPEAKING_EXERCISES];
export const READING_EXERCISES = [...PRESET_READING_EXERCISES, ...BANK_READING_EXERCISES];
export const WRITING_EXERCISES = [...PRESET_WRITING_EXERCISES, ...BANK_WRITING_EXERCISES];

export const ALL_1000_EXERCISES = [
  ...LISTENING_EXERCISES,
  ...SPEAKING_EXERCISES,
  ...READING_EXERCISES,
  ...WRITING_EXERCISES
];

// Helper to retrieve preset items by skill & ID or topic
export function getPresetExercisesBySkill(skill) {
  switch (skill) {
    case 'listening': return LISTENING_EXERCISES;
    case 'speaking': return SPEAKING_EXERCISES;
    case 'reading': return READING_EXERCISES;
    case 'writing': return WRITING_EXERCISES;
    default: return ALL_1000_EXERCISES;
  }
}

export function getRandomPresetExercise(skill) {
  const list = getPresetExercisesBySkill(skill);
  if (!list || list.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

