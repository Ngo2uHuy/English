import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// Comprehensive 24 Life Topics
const TOPICS = [
  { id: 'family', name: 'Family & Relationships', vn: 'Gia đình & Mối quan hệ' },
  { id: 'routine', name: 'Daily Routine & Home Life', vn: 'Thói quen & Cuộc sống nhà ở' },
  { id: 'emotions', name: 'Emotions & Psychology', vn: 'Cảm xúc & Tâm lý học' },
  { id: 'ambitions', name: 'Future Goals & Ambitions', vn: 'Tương lai & Ước mơ' },
  { id: 'pets', name: 'Pets & Animal Kingdom', vn: 'Thú cưng & Thế giới động vật' },
  { id: 'workplace', name: 'Career & Workplace', vn: 'Công việc & Sự nghiệp' },
  { id: 'education', name: 'Education & Academic Life', vn: 'Giáo dục & Học tập' },
  { id: 'finance', name: 'Money, Finance & Banking', vn: 'Tài chính & Quản lý tiền bạc' },
  { id: 'debate', name: 'Public Speaking & Debates', vn: 'Thuyết trình & Tranh luận' },
  { id: 'travel', name: 'Travel & Cultures', vn: 'Du lịch & Văn hóa thế giới' },
  { id: 'culinary', name: 'Food, Cooking & Dining', vn: 'Ẩm thực & Nấu nướng' },
  { id: 'health', name: 'Health, Medicine & Fitness', vn: 'Sức khỏe & Y tế' },
  { id: 'fashion', name: 'Shopping & Fashion', vn: 'Mua sắm & Thời trang' },
  { id: 'sports', name: 'Sports, Hobbies & Games', vn: 'Thể thao & Sở thích' },
  { id: 'festivals', name: 'Festivals & Traditions', vn: 'Lễ hội & Truyền thống' },
  { id: 'tech', name: 'Technology & AI', vn: 'Công nghệ & Trí tuệ nhân tạo' },
  { id: 'space', name: 'Science & Space Exploration', vn: 'Khoa học & Vũ trụ' },
  { id: 'environment', name: 'Environment & Climate Change', vn: 'Môi trường & Khí hậu' },
  { id: 'arts', name: 'Arts, Cinema & Literature', vn: 'Nghệ thuật, Phim ảnh & Văn học' },
  { id: 'media', name: 'News, Media & Society', vn: 'Tin tức & Xã hội' },
  { id: 'ethics', name: 'Law, Justice & Ethics', vn: 'Pháp luật & Đạo đức' },
  { id: 'history', name: 'History & World Places', vn: 'Lịch sử & Địa lý thế giới' },
  { id: 'emergency', name: 'Emergency, Safety & Survival', vn: 'An toàn & Cấp cứu' },
  { id: 'philosophy', name: 'Philosophy & Life Values', vn: 'Triết học & Giá trị sống' }
];

// Complete Dictionary of Unique Real-World Subtopics for ALL 24 Topics
const DOMAIN_SUBTOPICS = {
  'Family & Relationships': [
    { title: 'Intergenerational Communication Gaps', keyword: 'empathy', question: 'How can generations bridge communication gaps?', ans: 'Through active listening and mutual respect.' },
    { title: 'Digital Age Parenting & Screen Time', keyword: 'boundaries', question: 'What is a major challenge for modern parents?', ans: 'Balancing screen time with face-to-face family bonding.' },
    { title: 'Nurturing Long-Distance Friendships', keyword: 'reciprocity', question: 'What sustains long-distance friendships?', ans: 'Consistent effort and emotional reciprocity.' },
    { title: 'Household Conflict Resolution Strategies', keyword: 'compromise', question: 'What helps resolve family disputes constructively?', ans: 'Open dialogue and willing compromise.' },
    { title: 'The Role of Extended Family Support Networks', keyword: 'kinship', question: 'How does extended family benefit households?', ans: 'By providing shared childcare and emotional security.' },
    { title: 'Work-Life Harmony for Busy Couples', keyword: 'prioritization', question: 'What keeps busy partners connected?', ans: 'Setting aside dedicated uninterrupted quality time.' },
    { title: 'Fostering Independence in Adolescents', keyword: 'autonomy', question: 'Why is adolescent autonomy important?', ans: 'It builds self-reliance and decision-making skills.' },
    { title: 'Caring for Aging Family Members', keyword: 'compassion', question: 'What is vital when caring for elderly relatives?', ans: 'Providing compassionate healthcare and social inclusion.' },
    { title: 'Blended Family Integration Challenges', keyword: 'patience', question: 'What facilitates smooth blended family integration?', ans: 'Patience, clear boundaries, and gradual adaptation.' },
    { title: 'Celebrating Family Traditions Across Generations', keyword: 'heritage', question: 'Why are family rituals valuable?', ans: 'They reinforce shared identity and cultural heritage.' },
    { title: 'The Dynamics of Sibling Relationships', keyword: 'camaraderie', question: 'What shapes positive sibling dynamics?', ans: 'Shared experiences and mutual encouragement.' }
  ],
  'Daily Routine & Home Life': [
    { title: 'Optimizing Morning Productivity Rituals', keyword: 'mindfulness', question: 'What boosts morning productivity?', ans: 'A structured routine starting with hydration and focus.' },
    { title: 'Home Organization & Minimalism Principles', keyword: 'decluttering', question: 'What is the primary benefit of decluttering?', ans: 'It creates a calm, functional living space.' },
    { title: 'Smart Home Energy Efficiency Automation', keyword: 'automation', question: 'How do smart thermostats save power?', ans: 'By adjusting climate settings based on occupancy.' },
    { title: 'Meal Prep & Kitchen Time Management', keyword: 'efficiency', question: 'Why is weekly meal planning helpful?', ans: 'It saves cooking time and minimizes food waste.' },
    { title: 'Ergonomic Home Workspace Setup', keyword: 'posture', question: 'What reduces strain in home offices?', ans: 'Adjustable chairs and proper monitor eye-level alignment.' },
    { title: 'Evening Wind-down Routines for Better Sleep', keyword: 'relaxation', question: 'What improves nocturnal sleep quality?', ans: 'Avoiding digital screens and keeping the bedroom dark.' },
    { title: 'Sustainable Household Waste Sorting', keyword: 'recycling', question: 'How can households cut landfill waste?', ans: 'By composting organic food scraps and sorting recyclables.' },
    { title: 'Indoor Gardening and Air Purification', keyword: 'botanical', question: 'Why keep indoor house plants?', ans: 'They improve air quality and enhance mood.' },
    { title: 'Budget-friendly Home Maintenance Skills', keyword: 'upkeep', question: 'Why is preventive home maintenance crucial?', ans: 'It prevents costly emergency structural repairs.' },
    { title: 'Designing Shared Living Spaces in Urban Flats', keyword: 'cohabitation', question: 'What aids smooth shared apartment living?', ans: 'Clear house rules and shared chores schedules.' },
    { title: 'Creating Restorative Quiet Zones at Home', keyword: 'sanctuary', question: 'What makes a quiet zone effective?', ans: 'Low noise levels and comfortable minimal decor.' }
  ],
  'Emotions & Psychology': [
    { title: 'Understanding Cognitive Biases in Decision Making', keyword: 'heuristics', question: 'What are cognitive heuristics?', ans: 'Mental shortcuts used to make rapid choices.' },
    { title: 'Emotional Intelligence and Empathy in Leadership', keyword: 'self-awareness', question: 'What underpins high emotional intelligence?', ans: 'Deep self-awareness and empathetic social skills.' },
    { title: 'Overcoming Imposter Syndrome in Professional Life', keyword: 'self-efficacy', question: 'How can one counteract imposter syndrome?', ans: 'By documenting objective achievements and reframing self-doubt.' },
    { title: 'Stress Resilience & Cortisol Management Techniques', keyword: 'resilience', question: 'What physiological change signals stress reduction?', ans: 'A drop in cortisol levels through deep breathing.' },
    { title: 'Cognitive Behavioral Reframing of Negative Thoughts', keyword: 'restructuring', question: 'What is cognitive restructuring?', ans: 'Identifying irrational thoughts and substituting balanced views.' },
    { title: 'The Psychology of Habit Formation and Cue Loops', keyword: 'repetition', question: 'How are long-term habits established?', ans: 'Through consistent cue-routine-reward feedback loops.' },
    { title: 'Navigating Grief and Emotional Recovery', keyword: 'processing', question: 'What supports healthy emotional recovery after loss?', ans: 'Allowing time to process grief with supportive counseling.' },
    { title: 'Cultivating Gratitude for Psychological Well-being', keyword: 'appreciation', question: 'What benefit does a gratitude journal offer?', ans: 'It shifts focus toward positive daily experiences.' },
    { title: 'The Social Dynamics of Peer Pressure', keyword: 'conformity', question: 'Why do individuals conform under peer pressure?', ans: 'Due to the psychological desire for social acceptance.' },
    { title: 'Introversion vs Extroversion Energy Dynamics', keyword: 'recharging', question: 'How do introverts replenish their energy?', ans: 'Through solitary reflection and quiet environments.' },
    { title: 'Managing Perfectionism & Procrastination Loops', keyword: 'acceptance', question: 'How can perfectionists beat procrastination?', ans: 'By adopting an iterative "good enough" mindset.' }
  ],
  'Future Goals & Ambitions': [
    { title: 'The SMART Framework for Strategic Goal Setting', keyword: 'actionable', question: 'What makes a goal SMART?', ans: 'Being specific, measurable, achievable, relevant, and time-bound.' },
    { title: 'Lifelong Learning & Skill Diversification Pathways', keyword: 'adaptability', question: 'Why is lifelong learning vital today?', ans: 'It ensures career adaptability in a rapidly changing economy.' },
    { title: 'Designing a Portfolio Career Strategy', keyword: 'diversification', question: 'What is a portfolio career?', ans: 'Combining multiple freelance roles or income streams.' },
    { title: 'Overcoming Chronic Procrastination via Timeboxing', keyword: 'discipline', question: 'How does timeboxing boost focus?', ans: 'By allocating fixed time blocks to single priority tasks.' },
    { title: 'Vision Mapping and Milestone Tracking', keyword: 'visualization', question: 'Why are interim milestones essential?', ans: 'They provide measurable progress and sustain motivation.' },
    { title: 'Building a Strong Professional Personal Brand', keyword: 'credibility', question: 'What establishes personal brand credibility?', ans: 'Consistently sharing domain expertise and valuable insights.' },
    { title: 'Transitioning Careers: Risk Assessment & Re-skilling', keyword: 'pivoting', question: 'What is key when switching industries?', ans: 'Identifying transferable skills and completing targeted re-skilling.' },
    { title: 'Mentorship and Professional Networking Strategy', keyword: 'guidance', question: 'How does mentorship accelerate career growth?', ans: 'By providing experienced guidance and industry connections.' },
    { title: 'Developing Long-term Financial Independence Goals', keyword: 'compounding', question: 'What drives long-term wealth accumulation?', ans: 'Consistent savings and the power of compound interest.' },
    { title: 'Setting Boundaries to Protect Strategic Ambitions', keyword: 'focus', question: 'Why say "no" to low-priority requests?', ans: 'To preserve time for high-value strategic goals.' },
    { title: 'Embracing Failure as a Stepping Stone to Success', keyword: 'perseverance', question: 'How should failure be viewed in goal pursuit?', ans: 'As constructive feedback for iterative improvement.' }
  ],
  'Pets & Animal Kingdom': [
    { title: 'Domestic Pet Canine Nutrition & Health', keyword: 'balanced-diet', question: 'What ensures long-term pet vitality?', ans: 'Nutrient-rich balanced diets and regular vet checkups.' },
    { title: 'Wildlife Conservation Corridors and Ecosystems', keyword: 'fragmentation', question: 'Why are wildlife corridors built?', ans: 'To connect fragmented habitats and allow safe migration.' },
    { title: 'Animal Cognition Studies: Cetacean & Avian Intelligence', keyword: 'problem-solving', question: 'What reveals animal intelligence?', ans: 'Tool usage and complex social communication.' },
    { title: 'Protecting Coral Reef Marine Biodiversity', keyword: 'symbiosis', question: 'Why are coral reefs essential to marine life?', ans: 'They provide nursery grounds for 25% of oceanic species.' },
    { title: 'Urban Wildlife Adaptation in Modern Cities', keyword: 'coexistence', question: 'How do urban animals adapt to city sprawl?', ans: 'By modifying foraging habits and nesting sites.' },
    { title: 'Ethical Pet Ownership and Rescue Adoption', keyword: 'responsibility', question: 'Why adopt shelter animals?', ans: 'It reduces pet homelessness and encourages ethical breeding.' },
    { title: 'Avian Migration Patterns & Magnetic Orientation', keyword: 'navigation', question: 'How do migratory birds navigate thousands of miles?', ans: 'Using Earth\'s magnetic field and celestial cues.' },
    { title: 'Endangered Species Breeding Programs in Sanctuaries', keyword: 'genetics', question: 'What is the goal of captive breeding programs?', ans: 'Preserving genetic diversity for reintroduction into the wild.' },
    { title: 'Ecosystem Balance and Apex Predators Role', keyword: 'trophic-cascade', question: 'What happens when apex predators are removed?', ans: 'Herbivore overpopulation disrupts plant biodiversity.' },
    { title: 'Equine Training and Human-Horse Bonding', keyword: 'equestrian', question: 'What forms the foundation of horse training?', ans: 'Trust, clear body language, and positive reinforcement.' },
    { title: 'Insect Pollinators and Agricultural Food Security', keyword: 'pollination', question: 'Why are bees critical to human food supplies?', ans: 'They pollinate one-third of the crops we consume daily.' }
  ],
  'Career & Workplace': [
    { title: 'Remote Work Collaboration & Asynchronous Tools', keyword: 'synchronous', question: 'What facilitates effective remote work?', ans: 'Cloud platforms and clear asynchronous documentation.' },
    { title: 'Agile Project Management & Sprint Execution', keyword: 'iteration', question: 'What defines an Agile sprint?', ans: 'Short iterative cycles focused on continuous value delivery.' },
    { title: 'Cross-Cultural Corporate Leadership Strategies', keyword: 'inclusivity', question: 'Why is inclusive leadership vital globally?', ans: 'It leverages diverse cultural perspectives effectively.' },
    { title: 'Navigating Workplace Burnout & Work-Life Balance', keyword: 'boundaries', question: 'How can professionals mitigate workplace stress?', ans: 'By enforcing clear work-life boundaries.' },
    { title: 'The Future of AI Automation in Office Workflows', keyword: 'upskilling', question: 'What should office workers prioritize as AI advances?', ans: 'Upskilling in complex problem-solving and strategy.' },
    { title: 'Corporate Social Responsibility & Ethical Business', keyword: 'sustainability', question: 'What drives modern Corporate Social Responsibility?', ans: 'Balancing corporate profits with environmental stewardship.' },
    { title: 'Effective Negotiation Techniques in Salary Review', keyword: 'leverage', question: 'What strengthens salary negotiation positions?', ans: 'Documented performance metrics and market benchmark data.' },
    { title: 'Building High-performing Cross-functional Teams', keyword: 'synergy', question: 'What characterizes high-performing teams?', ans: 'Psychological safety, mutual trust, and clear alignment.' },
    { title: 'Managing Organizational Change & Stakeholder Buy-in', keyword: 'transparency', question: 'How can managers ease corporate restructuring?', ans: 'Through transparent communication and ongoing training.' },
    { title: 'Data-driven Performance Appraisal Systems', keyword: 'benchmarks', question: 'Why use data in annual reviews?', ans: 'To ensure objective evaluation free from personal bias.' },
    { title: 'Fostering Innovation Culture in Established Companies', keyword: 'experimentation', question: 'How can traditional firms spark innovation?', ans: 'By encouraging safe experimentation and learning from errors.' }
  ],
  'Education & Academic Life': [
    { title: 'STEM vs STEAM: Integrating Arts into Science', keyword: 'interdisciplinary', question: 'Why add Arts to STEM education?', ans: 'It fosters creative design thinking and innovation.' },
    { title: 'Active Recall and Spaced Repetition Study Methods', keyword: 'retention', question: 'Why is active recall superior to passive reading?', ans: 'It strengthens memory retrieval pathways effectively.' },
    { title: 'Critical Thinking Pedagogy in Secondary Schools', keyword: 'inquiry', question: 'How do teachers cultivate critical thinking?', ans: 'By encouraging open inquiry and evaluating source bias.' },
    { title: 'The Rise of Micro-credentials and Online Learning', keyword: 'flexibility', question: 'Why choose online micro-credentials?', ans: 'They offer targeted skill acquisition at an affordable cost.' },
    { title: 'University Academic Research Grant Procurement', keyword: 'peer-review', question: 'What secures competitive university research funding?', ans: 'Rigorously peer-reviewed proposals with high societal impact.' },
    { title: 'Blended Classroom Learning & Flip Teaching Models', keyword: 'engagement', question: 'What is a flipped classroom model?', ans: 'Students watch lectures at home and solve problems in class.' },
    { title: 'Overcoming Test Anxiety with Mindfulness', keyword: 'calmness', question: 'How can students manage exam stress?', ans: 'Through breathing exercises and positive cognitive framing.' },
    { title: 'Inclusive Education for Diverse Learning Needs', keyword: 'accessibility', question: 'What characterizes inclusive classrooms?', ans: 'Tailored learning tools accessible to all ability levels.' },
    { title: 'The Role of Academic Integrity & Plagiarism Detection', keyword: 'ethics', question: 'Why enforce academic integrity codes?', ans: 'To maintain scholarship standards and intellectual honesty.' },
    { title: 'Early Childhood Play-Based Learning Models', keyword: 'developmental', question: 'What benefits does play-based learning provide?', ans: 'It enhances social cooperation and fine motor skills.' },
    { title: 'Study Abroad Programs & Cultural Exchange', keyword: 'immersion', question: 'What do international exchange students gain?', ans: 'Global perspectives, language fluency, and independence.' }
  ],
  'Money, Finance & Banking': [
    { title: 'Personal Financial Planning and Budgeting 101', keyword: 'emergency-fund', question: 'How large should an emergency savings fund be?', ans: 'Three to six months of essential living expenses.' },
    { title: 'Understanding Stock Market Volatility & Index Funds', keyword: 'diversification', question: 'How can retail investors reduce market risk?', ans: 'By investing in low-cost diversified index funds.' },
    { title: 'Fintech Revolution: Mobile Wallets & Peer Payments', keyword: 'frictionless', question: 'Why have mobile payment apps exploded in use?', ans: 'They offer instant, contactless, and low-fee transactions.' },
    { title: 'Decentralized Finance (DeFi) & Smart Contracts', keyword: 'blockchain', question: 'What powers automated DeFi transactions?', ans: 'Self-executing smart contracts hosted on blockchain.' },
    { title: 'Inflation Dynamics and Purchasing Power Protection', keyword: 'hedging', question: 'How does inflation affect cash holdings?', ans: 'It reduces purchasing power over time unless hedged.' },
    { title: 'Real Estate Investment & Property Valuation', keyword: 'appreciation', question: 'What determines long-term property appreciation?', ans: 'Location quality, infrastructure growth, and demand.' },
    { title: 'Corporate Bond Markets vs Equity Financing', keyword: 'capital', question: 'How do corporations raise debt capital?', ans: 'By issuing corporate bonds with regular interest payments.' },
    { title: 'Understanding Credit Scores and Debt Management', keyword: 'utilization', question: 'What improves credit scores over time?', ans: 'Paying bills on time and keeping credit utilization low.' },
    { title: 'Venture Capital Financing for Tech Startups', keyword: 'equity', question: 'What do venture capitalists receive for funding startups?', ans: 'Equity stakes and board governance rights.' },
    { title: 'Central Bank Interest Rate Policy & Economy', keyword: 'liquidity', question: 'Why do central banks raise interest rates?', ans: 'To cool down overheating economies and curb inflation.' },
    { title: 'Tax Planning Strategies & Wealth Preservation', keyword: 'compliance', question: 'What is legal tax optimization?', ans: 'Utilizing government tax deductions while maintaining full compliance.' }
  ],
  'Public Speaking & Debates': [
    { title: 'Structuring Persuasive Speeches via Monroe Motivated Sequence', keyword: 'persuasion', question: 'What is the goal of Monroe Motivated Sequence?', ans: 'Moving an audience from attention to direct action.' },
    { title: 'Overcoming Glossophobia & Public Speaking Anxiety', keyword: 'desensitization', question: 'How can speakers overcome stage fright?', ans: 'Through thorough preparation and gradual public exposure.' },
    { title: 'Mastering Non-Verbal Body Language & Gestures', keyword: 'posture', question: 'How does body language impact speech delivery?', ans: 'An open posture enhances speaker authority and connection.' },
    { title: 'Rhetorical Devices: Ethos, Pathos, and Logos', keyword: 'rhetoric', question: 'What does Pathos appeal to in debate?', ans: 'Emotions, values, and shared human experiences.' },
    { title: 'Constructive Rebuttal Techniques in Formal Debates', keyword: 'counter-argument', question: 'What makes a debate rebuttal effective?', ans: 'Directly dismantling opponents\' evidence with counter-data.' },
    { title: 'Vocal Modulation, Tone, and Strategic Pauses', keyword: 'articulation', question: 'Why use strategic pauses during lectures?', ans: 'To emphasize key points and allow processing time.' },
    { title: 'Handling Q&A Panels & Hostile Audience Questions', keyword: 'composure', question: 'How should speakers handle aggressive questions?', ans: 'Maintain composure, reframe politely, and stick to facts.' },
    { title: 'Crafting Memorable Storytelling for Keynote Talks', keyword: 'narrative', question: 'Why is narrative storytelling impactful?', ans: 'It makes complex abstract ideas relatable and memorable.' },
    { title: 'Impoptu Speaking Strategies under Time Pressure', keyword: 'framework', question: 'How to structure an impromptu speech quickly?', ans: 'Use a simple Point-Reason-Example-Point structure.' },
    { title: 'Microphone Technique & Stage Presence Management', keyword: 'acoustics', question: 'What ensures crisp sound audio during speeches?', ans: 'Maintaining proper mic distance and steady vocal projection.' },
    { title: 'Debating Policy Issues with Empirical Data', keyword: 'evidence', question: 'What strengthens policy debate proposals?', ans: 'Citing verifiable statistics from independent research bodies.' }
  ],
  'Travel & Cultures': [
    { title: 'Sustainable Ecotourism & Minimizing Travel Footprints', keyword: 'conservation', question: 'What defines sustainable ecotourism?', ans: 'Traveling responsibly to conserve natural environments.' },
    { title: 'Navigating International Airport Security & Customs', keyword: 'logistics', question: 'How to expedite airport security procedures?', ans: 'Having documents ready and following baggage liquid guidelines.' },
    { title: 'Cultural Etiquette & Respecting Local Traditions', keyword: 'courtesy', question: 'Why research local etiquette before traveling?', ans: 'To show respect and avoid causing unintentional offense.' },
    { title: 'UNESCO World Heritage Site Preservation Efforts', keyword: 'conservation', question: 'Why protect UNESCO heritage sites?', ans: 'To safeguard cultural treasures for future generations.' },
    { title: 'Solo Travel Safety Guidelines & Urban Awareness', keyword: 'vigilance', question: 'What is essential for solo travelers?', ans: 'Staying vigilant, sharing itineraries, and trusting instincts.' },
    { title: 'Language Barrier Strategies for International Tourists', keyword: 'phrasebook', question: 'How can travelers communicate without knowing the language?', ans: 'Using translation apps, gestures, and basic greetings.' },
    { title: 'Backpacking on a Shoestring Budget', keyword: 'resourcefulness', question: 'How do backpackers travel cheaply?', ans: 'By staying in hostels, cooking meals, and using local transit.' },
    { title: 'Experiencing Local Festivals Across South America', keyword: 'pageantry', question: 'What characterizes cultural festivals?', ans: 'Vibrant parades, music, traditional costumes, and food.' },
    { title: 'The Impact of Mass Tourism on Coastal Cities', keyword: 'overtourism', question: 'What negative effect can overtourism cause?', ans: 'Overcrowding, elevated rents, and strain on public infrastructure.' },
    { title: 'Culinary Tourism: Exploring Authentic Local Dishes', keyword: 'gastronomy', question: 'Why is culinary tourism growing?', ans: 'Food offers deep insights into a region\'s history and agriculture.' },
    { title: 'Off-the-beaten-path Alpine Hiking Adventures', keyword: 'mountaineering', question: 'What preparation is required for alpine hiking?', ans: 'Checking weather forecasts, carrying navigation gear, and proper boots.' }
  ],
  'Food, Cooking & Dining': [
    { title: 'The Bio-chemical Science of Food Fermentation', keyword: 'probiotics', question: 'What health benefit do fermented foods offer?', ans: 'They supply beneficial probiotics for digestive gut health.' },
    { title: 'Farm-to-Table Culinary Movement and Fresh Sourcing', keyword: 'sustainability', question: 'What is the goal of farm-to-table dining?', ans: 'Sourcing fresh seasonal ingredients directly from local farms.' },
    { title: 'Plant-based Diets & Complete Protein Combinations', keyword: 'nutrition', question: 'How can vegans get complete proteins?', ans: 'By combining grains and legumes like rice and beans.' },
    { title: 'International Street Food Culture & Hygiene Safety', keyword: 'sanitation', question: 'What ensures safe street food dining?', ans: 'Choosing busy stalls with fresh high-turnover cooking.' },
    { title: 'The Art of Coffee Roasting and Espresso Extraction', keyword: 'barista', question: 'What affects espresso coffee flavor quality?', ans: 'Water temperature, grind size, and extraction time.' },
    { title: 'French Classical Cooking Techniques: Sauces & Broths', keyword: 'gastronomy', question: 'What are French mother sauces?', ans: 'Five foundational sauces serving as bases for classical cuisine.' },
    { title: 'Baking Science: Yeast Reaction & Gluten Networks', keyword: 'fermentation', question: 'What role does yeast play in bread making?', ans: 'It produces carbon dioxide gas that makes dough rise.' },
    { title: 'Sommelier Wine Pairing Principles with Regional Meals', keyword: 'acidity', question: 'How should food and wine be paired?', ans: 'Match wine intensity and acidity with dish richness.' },
    { title: 'Reducing Food Waste through Creative Upcycling', keyword: 'upcycling', question: 'How can kitchen scraps be utilized?', ans: 'Boiling vegetable peels into rich homemade stocks.' },
    { title: 'The Rising Popularity of Artisanal Sourdough Bread', keyword: 'starter', question: 'What creates sourdough\'s signature tang?', ans: 'Lactic acid bacteria in the wild yeast starter.' },
    { title: 'Nutritional Balance in Mediterranean Diets', keyword: 'antioxidants', question: 'Why is the Mediterranean diet praised by doctors?', ans: 'It emphasizes olive oil, whole grains, fish, and veggies.' }
  ],
  'Health, Medicine & Fitness': [
    { title: 'Neurological Benefits of Cardiovascular Exercise', keyword: 'neurogenesis', question: 'How does aerobic workout benefit the brain?', ans: 'It stimulates neurogenesis and sharpens memory.' },
    { title: 'Gut Microbiome, Probiotics, and Immune Health', keyword: 'microbiota', question: 'Why is gut microbiota diversity vital?', ans: 'It regulates digestion and trains immune defenses.' },
    { title: 'Mental Health & Daily Mindfulness Practices', keyword: 'neuroplasticity', question: 'What physiological effect does meditation have?', ans: 'It lowers stress hormones and rewires brain focus.' },
    { title: 'Sleep Hygiene, Blue Light & Melatonin Regulation', keyword: 'circadian', question: 'What suppresses evening melatonin release?', ans: 'Exposure to blue light from smartphones and laptops.' },
    { title: 'Preventive Healthcare Screenings & Early Detection', keyword: 'diagnostics', question: 'Why are routine health checkups crucial?', ans: 'They catch medical issues early when treatment is easiest.' },
    { title: 'Strength Training & Bone Density Retention', keyword: 'hypertrophy', question: 'Why is weightlifting recommended for adults?', ans: 'It builds muscle mass and preserves bone density.' },
    { title: 'Hydration Science & Electrolyte Balance in Athletes', keyword: 'osmosis', question: 'Why do endurance athletes need electrolytes?', ans: 'To prevent muscle cramping and maintain fluid balance.' },
    { title: 'Understanding Vaccine Immunology & Herd Protection', keyword: 'antibodies', question: 'How do vaccines protect communities?', ans: 'By stimulating antibody production without causing illness.' },
    { title: 'Ergonomic Desk Habits & Spinal Alignment', keyword: 'lumbar', question: 'What prevents chronic back pain for office workers?', ans: 'Using lumbar support chairs and taking frequent movement breaks.' },
    { title: 'Holistic Stress Reduction: Yoga & Deep Breathing', keyword: 'parasympathetic', question: 'How does deep diaphragmatic breathing work?', ans: 'It activates the parasympathetic nervous system to calm mind.' },
    { title: 'Managing Diabetes through Glycemic Index Diets', keyword: 'insulin', question: 'Why choose low glycemic index foods?', ans: 'They cause gradual glucose release, keeping blood sugar stable.' }
  ],
  'Shopping & Fashion': [
    { title: 'Sustainable Fast Fashion Alternatives & Thrift', keyword: 'upcycling', question: 'Why opt for secondhand thrift shopping?', ans: 'It reduces textile waste and cuts demand for fast fashion.' },
    { title: 'E-Commerce Personalization & Recommendation Engines', keyword: 'algorithms', question: 'How do online stores personalize recommendations?', ans: 'By analyzing user browsing history and purchase patterns.' },
    { title: 'Ethical Garment Manufacturing & Fair Trade Standards', keyword: 'compliance', question: 'What guarantees fair trade apparel certification?', ans: 'Fair living wages, safe factories, and zero child labor.' },
    { title: 'Minimalist Capsule Wardrobes & Wardrobe Audits', keyword: 'versatility', question: 'What is a capsule wardrobe?', ans: 'A small collection of versatile, timeless clothing items.' },
    { title: 'Consumer Rights, Warranties, and Refund Policies', keyword: 'protection', question: 'Why understand consumer protection laws?', ans: 'To ensure recourse when purchasing defective merchandise.' },
    { title: 'Luxury Brand Marketing & Perceived Value Creation', keyword: 'exclusivity', question: 'What drives luxury product pricing?', ans: 'Craftsmanship heritage, brand prestige, and artificial scarcity.' },
    { title: 'The Environmental Cost of Synthetic Textile Microfibers', keyword: 'polyester', question: 'Why are synthetic fabrics like polyester problematic?', ans: 'They shed microplastics into oceans during washing.' },
    { title: 'Smart Retail Fabrics & Wearable Health Tech', keyword: 'biometrics', question: 'What do smart garments measure?', ans: 'Heart rate, posture, body temperature, and athletic effort.' },
    { title: 'The Growth of Local Craftsmanship & Artisan Markets', keyword: 'provenance', question: 'Why buy from local artisans?', ans: 'It supports community economies and yields unique goods.' },
    { title: 'Navigating Black Friday Sales without Impulse Spending', keyword: 'discipline', question: 'How to avoid impulse buying during sales?', ans: 'Make a strict shopping list and set spending limits.' },
    { title: 'Circular Textile Recycling & Closed-loop Garments', keyword: 'sustainability', question: 'What is closed-loop garment recycling?', ans: 'Turning discarded clothes directly back into new yarn.' }
  ],
  'Sports, Hobbies & Games': [
    { title: 'Tactical Positional Strategy in Championship Chess', keyword: 'calculation', question: 'What separates grandmasters in chess?', ans: 'Deep tactical calculation and positional foresight.' },
    { title: 'Marathon Endurance Training & Pacing Strategy', keyword: 'aerobic', question: 'How should marathon runners pace themselves?', ans: 'Maintain steady aerobic pace to conserve glycogen stores.' },
    { title: 'The Professionalization of eSports Tournaments', keyword: 'broadcasting', question: 'Why has eSports grown into a major industry?', ans: 'Global streaming platforms and massive prize pools.' },
    { title: 'Outdoor Rock Climbing Equipment & Safety Belays', keyword: 'anchor', question: 'What is the primary safety rule in rock climbing?', ans: 'Double-checking harness knots and belay anchor systems.' },
    { title: 'Amateur Community Sports Leagues & Social Health', keyword: 'camaraderie', question: 'Why join community adult sports leagues?', ans: 'It promotes physical fitness, fun, and neighborhood friendship.' },
    { title: 'The Physics of Aerodynamics in Competitive Cycling', keyword: 'drag-reduction', question: 'Why do cyclists ride in pacelines?', ans: 'Riding drafting behind others cuts wind resistance up to 30%.' },
    { title: 'Mindfulness and Focus in Archery & Shooting Sports', keyword: 'steadiness', question: 'What key skill is required in archery accuracy?', ans: 'Breath control, posture steadiness, and mental calm.' },
    { title: 'Scuba Diving Safety Protocols & Pressure Equalization', keyword: 'buoyancy', question: 'Why must divers equalize ear pressure while descending?', ans: 'To prevent barotrauma caused by increasing water pressure.' },
    { title: 'Board Game Renaissance & Tabletop Game Design', keyword: 'mechanics', question: 'Why are modern board games experiencing a boom?', ans: 'Innovative game mechanics and offline social face-to-face play.' },
    { title: 'Youth Gymnastics: Flexibility & Core Stability', keyword: 'kinesthetic', question: 'What physical foundation does gymnastics build?', ans: 'Exceptional balance, core strength, and body awareness.' },
    { title: 'The Psychological Resilience of Professional Golfers', keyword: 'composure', question: 'How do golfers handle high-stress putts?', ans: 'Using pre-shot routines and maintaining steady composure.' }
  ],
  'Festivals & Traditions': [
    { title: 'Mid-Autumn Lunar Celebrations & Mooncakes', keyword: 'reunion', question: 'What does the Mid-Autumn Festival signify?', ans: 'Family reunion, harvest gratitude, and moon worship.' },
    { title: 'Carnival Traditions in Rio & Cultural Pageantry', keyword: 'samba', question: 'What defines the Rio de Janeiro Carnival?', ans: 'Elaborate samba parades, music, vibrant costumes, and joy.' },
    { title: 'Harvest Festivals & Thanksgiving Agricultural Heritage', keyword: 'gratitude', question: 'Why were harvest festivals historically celebrated?', ans: 'To give thanks for a bountiful crop before winter.' },
    { title: 'UNESCO Intangible Cultural Heritage Safeguarding', keyword: 'preservation', question: 'What is UNESCO Intangible Cultural Heritage?', ans: 'Traditions, oral histories, performing arts, and rituals.' },
    { title: 'New Year Rituals and Symbolism of Renewal', keyword: 'auspicious', question: 'Why do cultures sweep homes before New Year?', ans: 'To clear away old bad luck and welcome good fortune.' },
    { title: 'Diwali: The Festival of Lights Symbolism', keyword: 'triumph', question: 'What does lighting lamps during Diwali represent?', ans: 'The triumph of light over darkness and knowledge over ignorance.' },
    { title: 'Day of the Dead (Día de los Muertos) Remembrance', keyword: 'ancestral', question: 'How is Día de los Muertos celebrated in Mexico?', ans: 'Building altars with photos, marigolds, and food for ancestors.' },
    { title: 'Traditional Japanese Tea Ceremony (Chanoyu) Etiquette', keyword: 'harmony', question: 'What are the four principles of Chanoyu?', ans: 'Harmony, respect, purity, and tranquility.' },
    { title: 'Scottish Highland Games & Celtic Cultural Athleticism', keyword: 'heritage', question: 'What events feature in Highland Games?', ans: 'Traditional athletics like caber tossing and bagpipe music.' },
    { title: 'Songkran Water Festival & Buddhist Cleansing Rituals', keyword: 'cleansing', question: 'What does water splashing symbolize in Songkran?', ans: 'Washing away sins and bad luck for the upcoming year.' },
    { title: 'Venetian Masquerade Carnival Ball History', keyword: 'artistry', question: 'Why were masks worn during Venice Carnival historically?', ans: 'To hide social status and allow all citizens to mingle.' }
  ],
  'Technology & AI': [
    { title: 'Ethical Guidelines for Autonomous AI Decision Systems', keyword: 'accountability', question: 'What is a major ethical concern in autonomous AI?', ans: 'Assigning legal responsibility and preventing biased outcomes.' },
    { title: 'Quantum Computing Superposition & Cryptography', keyword: 'qubit', question: 'How do quantum computers process information?', ans: 'Using qubits that exist in superposition of states.' },
    { title: 'Machine Learning in Medical Diagnostics & Radiology', keyword: 'precision', question: 'How does AI assist hospital radiologists?', ans: 'By scanning medical images rapidly to flag tumors with high precision.' },
    { title: 'Cybersecurity Zero-Trust Architecture Implementation', keyword: 'verification', question: 'What is the core rule of Zero-Trust cybersecurity?', ans: 'Never trust automatically; always verify identity every request.' },
    { title: 'Generative AI Content Creation & Provenance Watermarks', keyword: 'authenticity', question: 'Why use watermarks on AI-generated images?', ans: 'To track content origin and combat deepfake misinformation.' },
    { title: 'Natural Language Processing & Transformer Networks', keyword: 'attention', question: 'What enables modern LLMs to process text context?', ans: 'Self-attention mechanisms in transformer neural architectures.' },
    { title: 'Cloud Edge Computing for Low-Latency IoT Networks', keyword: 'bandwidth', question: 'Why process data at the network edge?', ans: 'To slash latency and conserve cloud bandwidth for IoT devices.' },
    { title: 'Robotics Automation in Supply Chain Warehouses', keyword: 'logistics', question: 'How do automated guided vehicles benefit warehouses?', ans: 'They pick items rapidly with zero fatigue or error.' },
    { title: 'Virtual Reality (VR) Simulations in Medical Surgery', keyword: 'immersion', question: 'How do surgeons train with VR?', ans: 'By practicing delicate operations in realistic risk-free 3D simulations.' },
    { title: '5G Telecommunication Infrastructure & Network Slicing', keyword: 'throughput', question: 'What advantage does 5G offer over 4G?', ans: 'Ultra-fast throughput and minimal network latency.' },
    { title: 'Augmented Reality (AR) in Industrial Maintenance', keyword: 'overlay', question: 'How does AR help field technicians?', ans: 'By overlaying digital repair manuals onto physical machinery.' }
  ],
  'Science & Space Exploration': [
    { title: 'The James Webb Space Telescope & Deep Field Astronomy', keyword: 'infrared', question: 'Why does JWST observe space in infrared light?', ans: 'To peer through cosmic dust and see ancient early galaxies.' },
    { title: 'CRISPR-Cas9 Gene Editing Breakthroughs in Genetics', keyword: 'precision', question: 'What makes CRISPR revolutionary in medicine?', ans: 'Its capability to edit specific DNA sequences precisely.' },
    { title: 'Nuclear Fusion Energy Milestones & Net Power Gain', keyword: 'ignition', question: 'Why is nuclear fusion the ultimate clean energy goal?', ans: 'It produces zero carbon emissions and no long-lived waste.' },
    { title: 'Mars Colonization Challenges: Radiation & Soil Farming', keyword: 'habitat', question: 'What is a severe hazard for astronauts on Mars?', ans: 'Solar cosmic radiation due to Mars\' thin atmosphere.' },
    { title: 'Quantum Entanglement & Quantum Teleportation Experiments', keyword: 'non-locality', question: 'What did Einstein call quantum entanglement?', ans: '"Spooky action at a distance" due to instantaneous connection.' },
    { title: 'Exoplanet Atmospheric Analysis in Search for Biosignatures', keyword: 'spectroscopy', question: 'How do astronomers detect water on distant exoplanets?', ans: 'Analyzing starlight passing through exoplanet atmospheres.' },
    { title: 'Deep Sea Hydrothermal Vents & Extremophile Biology', keyword: 'chemosynthesis', question: 'How do hydrothermal vent creatures survive without sunlight?', ans: 'Using chemosynthesis powered by chemical geothermal vents.' },
    { title: 'Gravitational Waves Detection via LIGO Interferometers', keyword: 'spacetime', question: 'What creates gravitational waves in deep space?', ans: 'Collisions of massive black holes warping spacetime fabric.' },
    { title: 'Particle Physics at CERN Large Hadron Collider', keyword: 'boson', question: 'What fundamental particle was confirmed at CERN in 2012?', ans: 'The Higgs Boson, which imparts mass to other particles.' },
    { title: 'The Artemis Lunar Mission & Sustainable Moon Outposts', keyword: 'gateway', question: 'What is the goal of NASA\'s Artemis program?', ans: 'Establishing a permanent human presence and Gateway space station on the Moon.' },
    { title: 'Asteroid Deflection Strategy: NASA DART Spacecraft', keyword: 'impact', question: 'How did DART change the asteroid\'s orbit?', ans: 'By intentionally crashing a probe into it at high speed.' }
  ],
  'Environment & Climate Change': [
    { title: 'Renewable Energy Transition in Smart Cities', keyword: 'photovoltaics', question: 'What accelerates clean urban power adoption?', ans: 'Rooftop solar photovoltaics and battery storage integration.' },
    { title: 'Ocean Plastic Pollution Solutions & Cleanup Array', keyword: 'microplastics', question: 'Why are ocean microplastics dangerous?', ans: 'They absorb toxins and enter the marine food web.' },
    { title: 'Biodiversity Restoration via Forest Rewilding', keyword: 'canopy', question: 'What role do keystone species play in rewilding?', ans: 'They restore natural ecosystem balances and species diversity.' },
    { title: 'Direct Air Carbon Capture Infrastructure Tech', keyword: 'sequestration', question: 'Where is captured atmospheric CO2 stored?', ans: 'Injected deep underground into basalt rock formations.' },
    { title: 'Circular Economy Models & Zero-Waste Cities', keyword: 'sustainability', question: 'How does a circular economy eliminate waste?', ans: 'By designing products for infinite reuse, repair, and recycling.' },
    { title: 'Glacial Melt and Sea Level Rise Projections', keyword: 'cryosphere', question: 'What causes global sea level rise?', ans: 'Thermal expansion of seawater and melting polar ice sheets.' },
    { title: 'Mangrove Coastal Protection & Blue Carbon Storage', keyword: 'mangroves', question: 'Why are coastal mangrove forests vital?', ans: 'They trap carbon 4x faster than rainforests and buffer storm surges.' },
    { title: 'Sustainable Agriculture: No-till Farming & Soil Health', keyword: 'humus', question: 'Why is no-till farming ecologically beneficial?', ans: 'It prevents soil erosion and preserves organic carbon in soil.' },
    { title: 'Urban Heat Island Mitigation with Green Roofs', keyword: 'albedo', question: 'How do green roofs cool urban neighborhoods?', ans: 'Through plant evapotranspiration and higher surface albedo.' },
    { title: 'Deforestation Impact on Amazon Basin Climate', keyword: 'transpiration', question: 'How does Amazon deforestation affect rainfall?', ans: 'It disrupts water vapor transpiration, causing regional droughts.' },
    { title: 'International Climate Treaties & Paris Agreement Goals', keyword: 'emissions', question: 'What is the core target of the Paris Climate Agreement?', ans: 'Limiting global temperature rise to well below 2°C.' }
  ],
  'Arts, Cinema & Literature': [
    { title: 'Cinematic Lighting Techniques & Storytelling Psychology', keyword: 'chiaroscuro', question: 'What mood does high-contrast chiaroscuro lighting convey?', ans: 'Suspense, mystery, and dramatic tension.' },
    { title: 'French Impressionism Painting & Light Capture', keyword: 'plein-air', question: 'How did Impressionist painters work differently?', ans: 'They painted outdoors (en plein air) to capture shifting light.' },
    { title: 'Contemporary Sustainable Architecture & Green Design', keyword: 'biophilic', question: 'What is biophilic architectural design?', ans: 'Integrating natural light, ventilation, and living plants into buildings.' },
    { title: 'Literary Symbolism in 19th Century Classic Novels', keyword: 'metaphor', question: 'Why do authors use recurring literary motifs?', ans: 'To subtly convey deeper thematic themes without explicit statement.' },
    { title: 'The Evolution of Jazz Improvisation & Bebop', keyword: 'syncopation', question: 'What defines jazz musical improvisation?', ans: 'Spontaneous melodic creation over complex chord progressions.' },
    { title: 'The Golden Age of Television & Character Arcs', keyword: 'antihero', question: 'Why have complex TV drama series gained acclaim?', ans: 'Nuanced character development and antihero story arcs.' },
    { title: 'Minimalist Sculpture Movements & Spatial Perception', keyword: 'form', question: 'What characterizes minimalist sculpture?', ans: 'Geometric simplicity, raw industrial materials, and clean lines.' },
    { title: 'Shakespearean Tragedy Analysis & Dramatic Irony', keyword: 'flaw', question: 'What drives Shakespearean tragic heroes down?', ans: 'A fatal inner flaw (hamartia) combined with fate.' },
    { title: 'Folk Music Storytelling & Cultural Oral History', keyword: 'ballad', question: 'How did traditional folk ballads preserve history?', ans: 'By passing down historical events through catchy acoustic songs.' },
    { title: 'The Art of Motion Picture Editing & Continuity', keyword: 'montage', question: 'What is the purpose of film montage editing?', ans: 'Juxtaposing shots to compress time or evoke emotional ideas.' },
    { title: 'Surrealist Art Movement: Dreams & Unconscious Mind', keyword: 'juxtaposition', question: 'What inspired Surrealist artists like Salvador Dalí?', ans: 'Dream imagery, Freudian psychoanalysis, and bizarre symbolism.' }
  ],
  'News, Media & Society': [
    { title: 'Media Literacy in the Age of Fake News & Algorithms', keyword: 'fact-checking', question: 'How can citizens verify suspicious news stories?', ans: 'By cross-referencing reliable non-partisan fact-checking sources.' },
    { title: 'Investigative Journalism Ethics & Source Protection', keyword: 'whistleblower', question: 'Why protect confidential whistleblowers?', ans: 'To encourage exposure of corruption without fear of retaliation.' },
    { title: 'Social Media Algorithmic Echo Chambers & Polarization', keyword: 'echo-chamber', question: 'What is an algorithmic echo chamber?', ans: 'An environment where feeds show only content agreeing with user bias.' },
    { title: 'The Role of Public Service Broadcasting in Democracy', keyword: 'impartiality', question: 'What distinguishes public service broadcasters?', ans: 'A mandate for editorial independence, educational content, and balance.' },
    { title: 'Citizen Journalism via Mobile Live-Streaming', keyword: 'grassroots', question: 'How has mobile technology altered news reporting?', ans: 'Eyewitnesses can broadcast breaking news events instantly worldwide.' },
    { title: 'Press Freedom Index & Global Freedom of Speech', keyword: 'censorship', question: 'Why measure press freedom globally?', ans: 'Free media is essential to hold governments accountable.' },
    { title: 'Clickbait Headlines & Attention Economy Dynamics', keyword: 'sensationalism', question: 'Why do media outlets publish clickbait headlines?', ans: 'To maximize web traffic clicks and ad revenue.' },
    { title: 'The Digital Divide in Rural Infrastructure Access', keyword: 'connectivity', question: 'What is the digital divide?', ans: 'The gap between communities with high-speed internet and those without.' },
    { title: 'Data Privacy in Targeted Social Advertising', keyword: 'monetization', question: 'How do free social networks generate revenue?', ans: 'By monetizing user demographic data for targeted advertising.' },
    { title: 'Media Framing Effects on Public Opinion', keyword: 'narrative', question: 'What is news media framing?', ans: 'Presenting an issue from a specific angle to shape audience perception.' },
    { title: 'The Decline of Print Newspapers & Digital Subscriptions', keyword: 'paywall', question: 'How are news outlets surviving digital transition?', ans: 'By shifting to digital subscription models and paywalls.' }
  ],
  'Law, Justice & Ethics': [
    { title: 'Data Privacy Regulations: GDPR & Consumer Rights', keyword: 'consent', question: 'What key right does GDPR grant citizens?', ans: 'The right to request data erasure and control digital privacy consent.' },
    { title: 'International Human Rights Law & Global Conventions', keyword: 'dignity', question: 'What is the goal of Universal Human Rights Law?', ans: 'Protecting fundamental human dignity and freedoms globally.' },
    { title: 'Corporate Governance & Anti-Corruption Compliance', keyword: 'whistleblowing', question: 'What maintains ethical corporate governance?', ans: 'Independent auditing, transparent financial records, and compliance codes.' },
    { title: 'Environmental Protection Law & Polluter-Pays Principle', keyword: 'liability', question: 'What is the "polluter-pays" legal principle?', ans: 'Factories polluting environments must bear cleanup and damage costs.' },
    { title: 'Intellectual Property Rights: Patents vs Copyrights', keyword: 'infringement', question: 'What does a patent protect?', ans: 'New technological inventions, manufacturing processes, and designs.' },
    { title: 'Restorative Justice vs Retributive Prison Models', keyword: 'rehabilitation', question: 'What is the goal of restorative justice?', ans: 'Repairing victim harm and rehabilitating offenders back into society.' },
    { title: 'Bioethics in Human Genome Editing & Cloning', keyword: 'consent', question: 'What is a central concern in medical bioethics?', ans: 'Ensuring patient informed consent and preventing genetic exploitation.' },
    { title: 'Cybercrime Law & Cross-Border Extradition Treaties', keyword: 'jurisdiction', question: 'Why is international cooperation needed in cybercrime?', ans: 'Hackers operate across borders outside single police jurisdiction.' },
    { title: 'Labor Law & Workplace Safety Standard Regulations', keyword: 'arbitration', question: 'What protection do labor laws guarantee workers?', ans: 'Minimum wage, safe working environments, and fair dispute arbitration.' },
    { title: 'The Rule of Law & Judicial Independence Principles', keyword: 'impartiality', question: 'Why must the judiciary remain independent?', ans: 'To guarantee impartial justice without political interference.' },
    { title: 'Whistleblower Protection Laws in Government Agencies', keyword: 'immunity', question: 'Why grant whistleblowers legal immunity?', ans: 'To protect insiders revealing unlawful activity from prosecution.' }
  ],
  'History & World Places': [
    { title: 'The Silk Road Trade Routes & Cultural Diffusion', keyword: 'commerce', question: 'What was exchanged along the ancient Silk Road?', ans: 'Silk, spices, ideas, technology, and religions across Eurasia.' },
    { title: 'The Industrial Revolution & Steam Power Innovation', keyword: 'urbanization', question: 'How did steam engines transform human society?', ans: 'By driving mass factory production and rapid urban growth.' },
    { title: 'The Ancient Library of Alexandria & Lost Knowledge', keyword: 'scholarship', question: 'Why was the Library of Alexandria famous?', ans: 'It assembled the ancient world\'s largest collection of scrolls.' },
    { title: 'The Italian Renaissance & Humanist Flourishing', keyword: 'patronage', question: 'What sparked the Italian Renaissance?', ans: 'Rediscovery of classical learning, wealthy patron support, and art.' },
    { title: 'Maritime Exploration Epochs & Global Navigation Maps', keyword: 'cartography', question: 'How did 15th century cartography advance travel?', ans: 'Accurate sea maps enabled transoceanic trade routes.' },
    { title: 'The Construction of the Great Wall of China', keyword: 'fortification', question: 'Why was the Great Wall built?', ans: 'To protect northern imperial borders from nomadic invasions.' },
    { title: 'Ancient Mesopotamian Cuneiform & Earliest Writing Systems', keyword: 'cuneiform', question: 'What was Cuneiform originally used for?', ans: 'Recording grain transactions, trade logs, and legal codes.' },
    { title: 'The Fall of the Roman Empire & Barbaric Migrations', keyword: 'decentralization', question: 'What contributed to the decline of Western Rome?', ans: 'Economic instability, political corruption, and external invasions.' },
    { title: 'The Space Race & Cold War Geopolitical Dynamics', keyword: 'technological', question: 'What drove the 1960s Moon landing race?', ans: 'Geopolitical rivalry and scientific prestige between superpowers.' },
    { title: 'Ancient Egyptian Pyramid Engineering & Astronomy', keyword: 'monumental', question: 'How were Giza pyramids aligned precisely?', ans: 'Using sophisticated astronomical observations of circumpolar stars.' },
    { title: 'The Construction of the Panama Canal Logistics', keyword: 'lock-system', question: 'How does the Panama Canal lift ships over mountains?', ans: 'Using a series of water locks powered by gravity.' }
  ],
  'Emergency, Safety & Survival': [
    { title: 'Earthquake Building Retrofitting & Seismic Safety', keyword: 'damping', question: 'How do base isolators protect buildings during quakes?', ans: 'They absorb seismic shockwaves and reduce structural shaking.' },
    { title: 'Wilderness Survival First Aid & Hypothermia Prevention', keyword: 'shelter', question: 'What is the top priority in wilderness emergencies?', ans: 'Building insulating shelter to maintain core body temperature.' },
    { title: 'Urban High-Rise Fire Safety Systems & Evacuation', keyword: 'sprinklers', question: 'Why rely on stairwell pressurization in fires?', ans: 'It keeps smoke out of escape routes during building evacuation.' },
    { title: 'Coastal Tsunami Early Warning Buoys & Sirens', keyword: 'seismology', question: 'How do ocean warning buoys detect tsunamis?', ans: 'By measuring deep sea pressure changes caused by underwater quakes.' },
    { title: 'Disaster Relief Logistics & Emergency Supply Chains', keyword: 'triage', question: 'What is first priority in disaster response?', ans: 'Delivering clean water, medical triage, and emergency shelter.' },
    { title: 'Wildfire Prevention & Defensible Space Creation', keyword: 'flammable', question: 'How to protect homes from forest wildfires?', ans: 'Clearing flammable vegetation 30 feet around structures.' },
    { title: 'Aviation Emergency Landing Protocols & Water Ditching', keyword: 'evacuation', question: 'Why do flight attendants demonstrate life vests?', ans: 'To ensure rapid passenger evacuation in case of emergency landing.' },
    { title: 'Industrial Chemical Leak Containment & PPE Protocols', keyword: 'decontamination', question: 'What is step one in toxic chemical spills?', ans: 'Evacuating upwind and donning hazardous material PPE suits.' },
    { title: 'Severe Hurricane Preparedness & Window Boarding', keyword: 'evacuation-route', question: 'How should coastal residents prepare for Category 4 storms?', ans: 'Boarding windows, stocking non-perishable food, and following evacuation orders.' },
    { title: 'First Aid CPR & Automated External Defibrillator (AED) Use', keyword: 'resuscitation', question: 'What does an AED do during sudden cardiac arrest?', ans: 'It analyzes heart rhythm and delivers an electric shock if needed.' },
    { title: 'Search and Rescue Canine Units in Collapse Ruins', keyword: 'scent-detection', question: 'Why train rescue dogs for earthquake rubble?', ans: 'Their keen scent detection locates trapped survivors quickly.' }
  ],
  'Philosophy & Life Values': [
    { title: 'Stoic Philosophy in Managing Modern Stress', keyword: 'equanimity', question: 'What is the core lesson of Stoicism?', ans: 'Focusing on what you control and accepting what you cannot.' },
    { title: 'Utilitarianism vs Deontological Ethical Frameworks', keyword: 'morality', question: 'What determines morality in Utilitarianism?', ans: 'Maximizing overall happiness and good for the greatest number.' },
    { title: 'The Pursuit of Meaning: The Concept of Ikigai', keyword: 'purpose', question: 'What four elements intersect to form Ikigai?', ans: 'What you love, what you\'re good at, what the world needs, and what pays.' },
    { title: 'Environmental Ethics & Intergenerational Justice', keyword: 'stewardship', question: 'Why consider future generations in environmental ethics?', ans: 'We have a moral duty to leave a healthy planet for those unborn.' },
    { title: 'Socratic Questioning Methods for Critical Inquiry', keyword: 'dialectic', question: 'How does the Socratic method work?', ans: 'Asking disciplined questions to expose underlying assumptions.' },
    { title: 'Existentialism & Personal Responsibility (Sartre)', keyword: 'authenticity', question: 'What does Sartre mean by "existence precedes essence"?', ans: 'Humans are born free and define their own purpose through actions.' },
    { title: 'Eastern Philosophy: Taoist Non-action (Wu Wei)', keyword: 'harmony', question: 'What is Wu Wei in Taoist philosophy?', ans: 'Effortless action in harmony with natural flow.' },
    { title: 'The Ethics of Technological Singularity & AI Alignment', keyword: 'alignment', question: 'What is the AI alignment problem?', ans: 'Ensuring advanced AI goals stay aligned with human survival and values.' },
    { title: 'Virtue Ethics & Character Building (Aristotle)', keyword: 'eudaimonia', question: 'How does Aristotle define human flourishing (Eudaimonia)?', ans: 'Living a life of active virtue and moral excellence.' },
    { title: 'The Social Contract Theory (Hobbes, Locke, Rousseau)', keyword: 'governance', question: 'What is the basis of political authority in Social Contract Theory?', ans: 'Consent of the governed trading some liberty for collective security.' },
    { title: 'Minimalism as a Philosophy of Living Consciously', keyword: 'intentionality', question: 'What is the core philosophy of minimalism?', ans: 'Removing non-essentials to make space for what truly matters.' }
  ]
};

// Helper to get subtopic deterministically for every exercise index
function getSubtopic(topicName, index) {
  const list = DOMAIN_SUBTOPICS[topicName];
  if (list && list.length > 0) {
    return list[index % list.length];
  }
  return {
    title: `${topicName} Insights #${index + 1}`,
    keyword: 'innovation',
    question: `What is the key insight regarding ${topicName.toLowerCase()}?`,
    ans: 'Continuous practice and structured adaptation yield steady success.'
  };
}

const SPEAKERS = [
  'Dr. Sarah Jenkins - Lead Researcher',
  'Prof. Alexander Wright - Senior Fellow',
  'Elena Rostova - Industry Strategist',
  'Marcus Vance - Tech Ethicist',
  'Sophia Chen - Environmental Specialist',
  'David Miller - Executive Coach',
  'Dr. Liam O\'Connor - Cognitive Psychologist',
  'Amara Okafor - Global Economist'
];

// ---------------------------------------------------------------------------
// 1. GENERATE 250 TRULY UNIQUE LISTENING EXERCISES
// ---------------------------------------------------------------------------
console.log('Generating 250 Completely Unique Listening Exercises...');

const listeningExercises = [];
for (let i = 1; i <= 250; i++) {
  const topicObj = TOPICS[(i - 1) % TOPICS.length];
  const topic = topicObj.name;
  const level = LEVELS[(i - 1) % LEVELS.length];
  const topicRepIndex = Math.floor((i - 1) / TOPICS.length);
  const sub = getSubtopic(topic, topicRepIndex);
  const speaker = SPEAKERS[i % SPEAKERS.length];

  const title = `${sub.title} (${level})`;
  const transcript = `Welcome to this presentation on ${sub.title.toLowerCase()} within the field of ${topic.toLowerCase()}. Today, specialists focus on ${sub.keyword} as a fundamental driver of progress. When learners at ${level} proficiency examine these principles, active engagement and structured practice play crucial roles. By reviewing key evidence and reflecting on real-world applications, one can master complex challenges in ${topic.toLowerCase()}.`;

  listeningExercises.push({
    id: `list-${String(i).padStart(3, '0')}`,
    title: title,
    topic: topic,
    level: level,
    speaker: speaker,
    transcript: transcript,
    blanks: [
      { id: 1, word: sub.keyword, hint: `Core vocabulary item related to ${topicObj.vn}` },
      { id: 2, word: "principles", hint: "Fundamental truths or rules of conduct" },
      { id: 3, word: "challenges", hint: "Tasks that test ability or resolution" }
    ],
    questions: [
      {
        id: 1,
        question: sub.question,
        options: [sub.ans, "Relying purely on unverified assumptions", "Ignoring expert consensus", "Avoiding structured review"],
        answer: sub.ans,
        explanation: `The speaker explains: ${sub.ans}`
      },
      {
        id: 2,
        question: `What approach is recommended for ${level} level learners studying ${topic.toLowerCase()}?`,
        options: ["Active engagement and structured practice", "Passive memorization only", "Skipping fundamental concepts", "Delayed practice"],
        answer: "Active engagement and structured practice",
        explanation: "The audio transcript explicitly highlights active engagement and structured practice."
      }
    ],
    shadowingScript: [
      { text: `Focusing on ${sub.keyword} is essential for ${topic.toLowerCase()}.`, ipa: `/ˈfəʊ.kəs.ɪŋ ɒn ${sub.keyword} ɪz ɪˈsen.ʃəl fɔː ${topic.toLowerCase()}/` },
      { text: "Structured practice and active review lead to lasting progress.", ipa: "/ˈstrʌk.tʃəd ˈpræk.tɪs ænd ˈæk.tɪv rɪˈvjuː liːd tuː ˈlɑː.stɪŋ ˈprəʊ.ɡres/" }
    ]
  });
}

// ---------------------------------------------------------------------------
// 2. GENERATE 250 TRULY UNIQUE SPEAKING EXERCISES
// ---------------------------------------------------------------------------
console.log('Generating 250 Completely Unique Speaking Exercises...');

const speakingModes = ['Pronunciation & Rhythm', 'Cue Card', 'Roleplay'];

const speakingExercises = [];
for (let i = 1; i <= 250; i++) {
  const topicObj = TOPICS[(i - 1) % TOPICS.length];
  const topic = topicObj.name;
  const level = LEVELS[(i - 1) % LEVELS.length];
  const topicRepIndex = Math.floor((i - 1) / TOPICS.length);
  const sub = getSubtopic(topic, topicRepIndex);
  const cat = speakingModes[i % speakingModes.length];

  let prompt = '';
  let sampleResponse = '';
  let cueCardPoints = null;
  let roleplayContext = null;

  if (cat === 'Cue Card') {
    prompt = `Describe a situation or project where you explored ${sub.title.toLowerCase()}. Speak for 1-2 minutes.`;
    cueCardPoints = [
      `What the situation was regarding ${topic}`,
      "When and where it took place",
      "Who you shared this experience with",
      `Explain why focusing on ${sub.keyword} was memorable or impactful`
    ];
    sampleResponse = `I would like to speak about my experience with ${sub.title}. It occurred during a significant period when I was actively engaged in ${topic.toLowerCase()}. Prioritizing ${sub.keyword} proved crucial to achieving a successful outcome, giving me strong confidence for future projects.`;
  } else if (cat === 'Roleplay') {
    prompt = `Roleplay Scenario: Discussing ${sub.title} with a colleague or mentor.`;
    roleplayContext = `Scenario: You are consulting an expert regarding ${sub.title} in ${topic.toLowerCase()}. Share your perspective clearly and request their feedback.`;
    sampleResponse = `Good morning! I wanted to get your thoughts on ${sub.title}. From my perspective, incorporating ${sub.keyword} is essential for achieving long-term excellence in ${topic.toLowerCase()}. How do you recommend we organize our strategy?`;
  } else {
    prompt = `Articulation & Rhythm Drill: Speak aloud key expressions from ${sub.title}, maintaining natural pause markers and sentence stress.`;
    sampleResponse = `Developing speech fluency regarding ${topic.toLowerCase()} involves clear articulation of key terminology like ${sub.keyword}. Focus on steady pacing and accurate intonation.`;
  }

  speakingExercises.push({
    id: `spk-${String(i).padStart(3, '0')}`,
    title: `${sub.title} (${cat})`,
    topic: topic,
    level: level,
    category: cat,
    prompt: prompt,
    sampleResponse: sampleResponse,
    targetPhrases: [
      `In terms of ${sub.keyword}`,
      "From my point of view",
      "It is important to emphasize that",
      "Taking all factors into consideration"
    ],
    ipaScript: [
      { sentence: `Communicating ideas about ${topic.toLowerCase()} clearly is vital.`, ipa: `/kəˈmjuː.nɪ.keɪ.tɪŋ aɪˈdɪəz əˈbaʊt ${topic.toLowerCase()} ˈklɪə.li ɪz ˈvaɪ.təl/` },
      { sentence: `Pay attention to word stress on ${sub.keyword} and fluent connected speech.`, ipa: `/peɪ əˈten.ʃən tuː wɜːd stres ɒn ${sub.keyword} ænd ˈfluː.ənt kəˈnek.tɪd spiːtʃ/` }
    ],
    ...(cueCardPoints ? { cueCardPoints } : {}),
    ...(roleplayContext ? { roleplayContext } : {})
  });
}

// ---------------------------------------------------------------------------
// 3. GENERATE 250 TRULY UNIQUE READING EXERCISES
// ---------------------------------------------------------------------------
console.log('Generating 250 Completely Unique Reading Exercises...');

const readingExercises = [];
for (let i = 1; i <= 250; i++) {
  const topicObj = TOPICS[(i - 1) % TOPICS.length];
  const topic = topicObj.name;
  const level = LEVELS[(i - 1) % LEVELS.length];
  const topicRepIndex = Math.floor((i - 1) / TOPICS.length);
  const sub = getSubtopic(topic, topicRepIndex);

  const passage = `The study of ${sub.title.toLowerCase()} provides essential insights into contemporary ${topic.toLowerCase()}. Scholars and industry professionals at ${level} level agree that concepts such as ${sub.keyword} play a central role in driving modern developments.\n\nHistorically, early approaches in this field were restricted by limited tools and data. However, recent empirical research has reshaped how experts evaluate progress. By combining systematic observation with data analysis, researchers can optimize performance and minimize risks.\n\nIn conclusion, as ${topic.toLowerCase()} evolves globally, mastering ${sub.title.toLowerCase()} remains indispensable for anyone aiming for professional mastery and creative innovation.`;

  readingExercises.push({
    id: `read-${String(i).padStart(3, '0')}`,
    title: `${sub.title} (${level})`,
    topic: topic,
    level: level,
    readTimeMin: 2 + (i % 4),
    passage: passage,
    summary: `An in-depth article exploring ${sub.title}, highlighting historical developments, empirical research, and future directions in ${topicObj.vn}.`,
    vocabulary: [
      { word: sub.keyword, definition: `Key terminology in ${topic}`, vietnamese: `từ vựng cốt lõi trong ${topicObj.vn}` },
      { word: "empirical", definition: "Based on testing, observation, or experiment", vietnamese: "thực nghiệm" },
      { word: "indispensable", definition: "Absolutely necessary or essential", vietnamese: "rất quan trọng, không thể thiếu" }
    ],
    questions: [
      {
        id: 1,
        question: `What plays a central role in driving modern developments in ${topic.toLowerCase()}?`,
        options: [sub.keyword, "Outdated theories", "Random guessing", "Unverified claims"],
        answer: sub.keyword,
        explanation: `Paragraph 1 states that concepts like ${sub.keyword} play a central role.`
      },
      {
        id: 2,
        question: "How has empirical research reshaped the field?",
        options: [
          "By combining systematic observation with data analysis to optimize performance",
          "By halting all new research projects",
          "By relying strictly on ancient tradition",
          "By increasing operational risk"
        ],
        answer: "By combining systematic observation with data analysis to optimize performance",
        explanation: "Paragraph 2 explains how systematic observation and data analysis optimize performance."
      }
    ]
  });
}

// ---------------------------------------------------------------------------
// 4. GENERATE 250 TRULY UNIQUE WRITING EXERCISES
// ---------------------------------------------------------------------------
console.log('Generating 250 Completely Unique Writing Exercises...');

const writingTypes = [
  'IELTS Task 2',
  'IELTS Task 1 - Chart Analysis',
  'Business Email',
  'Opinion Essay',
  'Personal Journal Entry',
  'Cover Letter',
  'Report Writing',
  'Formal Proposal'
];

const writingExercises = [];
for (let i = 1; i <= 250; i++) {
  const topicObj = TOPICS[(i - 1) % TOPICS.length];
  const topic = topicObj.name;
  const level = LEVELS[(i - 1) % LEVELS.length];
  const topicRepIndex = Math.floor((i - 1) / TOPICS.length);
  const sub = getSubtopic(topic, topicRepIndex);
  const type = writingTypes[i % writingTypes.length];

  let prompt = '';
  let minWords = 250;

  if (type === 'Business Email') {
    prompt = `Write a formal business email discussing ${sub.title.toLowerCase()} in relation to ${topic.toLowerCase()}. Detail project objectives, proposed deadlines, and key terms like ${sub.keyword}.`;
    minWords = 150;
  } else if (type === 'Cover Letter') {
    prompt = `Write a professional cover letter applying for a specialist role in ${topic.toLowerCase()}, highlighting your achievements in ${sub.title.toLowerCase()}.`;
    minWords = 200;
  } else if (type === 'Report Writing') {
    prompt = `Write an executive report evaluating ${sub.title.toLowerCase()} and recommending actionable improvements for ${topic.toLowerCase()}.`;
    minWords = 220;
  } else {
    prompt = `Many experts contend that ${sub.title.toLowerCase()} is vital for the advancement of ${topic.toLowerCase()}, while others argue its impact is limited. Discuss both views and share your perspective (${level} level).`;
    minWords = 250;
  }

  writingExercises.push({
    id: `write-${String(i).padStart(3, '0')}`,
    title: `${sub.title} (${type})`,
    topic: topic,
    level: level,
    category: type,
    prompt: prompt,
    minWords: minWords,
    outline: [
      "Introduction: Introduce topic context + state thesis stance clearly.",
      `Body Paragraph 1: Analyze key arguments concerning ${sub.keyword} with relevant examples.`,
      "Body Paragraph 2: Discuss alternative viewpoints + offer constructive rebuttal.",
      "Conclusion: Summarize primary arguments and present a final perspective."
    ],
    keyVocab: [
      sub.keyword,
      "empirical evidence",
      "substantive improvement",
      "mitigate potential risks",
      "strategic execution"
    ],
    sampleModelEssay: `In modern discussions concerning ${topic.toLowerCase()}, ${sub.title.toLowerCase()} has emerged as a central theme. While some critics argue its overall impact is exaggerated, I firmly believe that integrating principles like ${sub.keyword} yields profound benefits.\n\nOn the one hand, implementing new standards in ${topic.toLowerCase()} can present initial operational challenges. For individuals and organizations at ${level} level, adapting to revised frameworks requires time and dedicated effort.\n\nOn the other hand, the substantive advantages are undeniable. Research consistently demonstrates that prioritizing ${sub.keyword} enhances strategic execution, reduces errors, and fosters long-term growth.\n\nIn conclusion, despite temporary adjustments, the positive impact of ${sub.title.toLowerCase()} on ${topic.toLowerCase()} is clear and enduring.`
  });
}

// ---------------------------------------------------------------------------
// SAVE FILES TO src/data/exercise-bank/
// ---------------------------------------------------------------------------
const outputDir = path.join(__dirname);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'listening-bank.js'),
  `// 🎧 250 DISTINCT LISTENING EXERCISES BANK\nexport const BANK_LISTENING_EXERCISES = ${JSON.stringify(listeningExercises, null, 2)};\n`
);

fs.writeFileSync(
  path.join(outputDir, 'speaking-bank.js'),
  `// 🗣️ 250 DISTINCT SPEAKING EXERCISES BANK\nexport const BANK_SPEAKING_EXERCISES = ${JSON.stringify(speakingExercises, null, 2)};\n`
);

fs.writeFileSync(
  path.join(outputDir, 'reading-bank.js'),
  `// 📖 250 DISTINCT READING EXERCISES BANK\nexport const BANK_READING_EXERCISES = ${JSON.stringify(readingExercises, null, 2)};\n`
);

fs.writeFileSync(
  path.join(outputDir, 'writing-bank.js'),
  `// ✍️ 250 DISTINCT WRITING EXERCISES BANK\nexport const BANK_WRITING_EXERCISES = ${JSON.stringify(writingExercises, null, 2)};\n`
);

console.log('✅ Successfully generated all 1000 unique exercises across 24 real-world topic domains!');
