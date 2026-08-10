// ==========================================================================
// YouTube Dual-Subtitle English Learning Database
// ==========================================================================

export const YOUTUBE_CATEGORIES = [
  { id: 'all', name: 'All Videos', icon: '🎬' },
  { id: 'speeches', name: 'Inspiring Speeches', icon: '🎤' },
  { id: 'education', name: 'Science, Tech & AI', icon: '🧠' },
  { id: 'daily', name: 'Daily Life & Living', icon: '💬' },
  { id: 'business', name: 'Business & Career', icon: '💼' },
  { id: 'health', name: 'Health & Mindset', icon: '🏥' },
  { id: 'culture', name: 'Travel & History', icon: '✈️' },
  { id: 'nature', name: 'Nature & Planet', icon: '🌿' }
];

export const YOUTUBE_VIDEOS = [
  {
    id: 'steve-jobs-stanford',
    youtubeId: 'UF8uR6Z6KLc',
    title: 'Steve Jobs\' 2005 Stanford Commencement Address',
    channel: 'Stanford University',
    category: 'speeches',
    level: 'Intermediate',
    duration: '15:04',
    thumbnail: 'https://img.youtube.com/vi/UF8uR6Z6KLc/hqdefault.jpg',
    description: 'Steve Jobs urges graduates to pursue their dreams and see the opportunities in life\'s setbacks — including death itself.',
    subtitles: [
      { start: 0, end: 5, en: "I am honored to be with you today at your commencement from one of the finest universities in the world.", vi: "Tôi rất vinh dự được có mặt cùng các bạn hôm nay tại lễ tốt nghiệp từ một trong những trường đại học tốt nhất thế giới." },
      { start: 5, end: 11, en: "I never graduated from college. Truth be told, this is the closest I've ever gotten to a college graduation.", vi: "Tôi chưa bao giờ tốt nghiệp đại học. Thú thật, đây là lần tôi đến gần một lễ tốt nghiệp đại học nhất." },
      { start: 11, end: 16, en: "Today I want to tell you three stories from my life. That's it. No big deal. Just three stories.", vi: "Hôm nay tôi muốn kể cho các bạn nghe ba câu chuyện từ cuộc đời tôi. Chỉ vậy thôi. Không có gì to tát. Chỉ ba câu chuyện." },
      { start: 16, end: 22, en: "The first story is about connecting the dots.", vi: "Câu chuyện đầu tiên là về việc kết nối các điểm mốc." },
      { start: 22, end: 28, en: "I dropped out of Reed College after the first 6 months, but then stayed around as a drop-in for another 18 months before I really quit.", vi: "Tôi đã bỏ học tại Trường Reed sau 6 tháng đầu tiên, nhưng sau đó vẫn ở lại dự thính thêm 18 tháng trước khi thực sự nghỉ hẳn." },
      { start: 28, end: 33, en: "So why did I drop out?", vi: "Vậy tại sao tôi lại bỏ học?" },
      { start: 33, end: 40, en: "It started before I was born. My biological mother was a young, unwed college graduate student.", vi: "Mọi chuyện bắt đầu trước khi tôi sinh ra. Mẹ ruột của tôi là một sinh viên cao học trẻ tuổi, chưa lập gia đình." },
      { start: 40, end: 46, en: "She decided to put me up for adoption.", vi: "Bà quyết định cho tôi làm con nuôi." },
      { start: 46, end: 53, en: "She felt very strongly that I should be adopted by college graduates.", vi: "Bà cảm nhận rất mạnh mẽ rằng tôi nên được nhận nuôi bởi những người đã tốt nghiệp đại học." },
      { start: 53, end: 60, en: "You can't connect the dots looking forward; you can only connect them looking backward.", vi: "Bạn không thể kết nối các điểm mốc khi nhìn về phía trước; bạn chỉ có thể kết nối chúng khi nhìn lại quá khứ." },
      { start: 60, end: 67, en: "So you have to trust that the dots will somehow connect in your future.", vi: "Vì vậy, bạn phải tin rằng các điểm mốc bằng cách nào đó sẽ kết nối với nhau trong tương lai của bạn." },
      { start: 67, end: 74, en: "You have to trust in something — your gut, destiny, life, karma, whatever.", vi: "Bạn phải tin vào một điều gì đó — bản năng, số phận, cuộc sống, nhân quả, hay bất cứ điều gì." },
      { start: 74, end: 82, en: "This approach has never let me down, and it has made all the difference in my life.", vi: "Cách tiếp cận này chưa bao giờ làm tôi thất vọng, và nó đã tạo nên tất cả sự khác biệt trong cuộc đời tôi." }
    ]
  },
  {
    id: 'ted-ed-memory',
    youtubeId: 'TUoJc06ZUwg',
    title: 'How Memories Form and How We Forget Them',
    channel: 'TED-Ed',
    category: 'education',
    level: 'Beginner',
    duration: '04:56',
    thumbnail: 'https://img.youtube.com/vi/TUoJc06ZUwg/hqdefault.jpg',
    description: 'Explore the fascinating neurology behind how human memory works, short-term vs long-term storage, and why we forget.',
    subtitles: [
      { start: 0, end: 6, en: "How do memories form in the human brain, and why do we forget them?", vi: "Ký ức hình thành như thế nào trong não người, và tại sao chúng ta lại quên chúng?" },
      { start: 6, end: 12, en: "Every moment of your life creates neural connections that shape who you are.", vi: "Mọi khoảnh khắc trong cuộc sống của bạn đều tạo ra các kết nối thần kinh định hình nên con người bạn." },
      { start: 12, end: 18, en: "First, sensory information enters your short-term memory through your eyes, ears, and hands.", vi: "Đầu tiên, thông tin cảm giác đi vào trí nhớ ngắn hạn của bạn thông qua mắt, tai và tay." },
      { start: 18, end: 25, en: "The hippocampus acts as a sorting center, deciding which memories are important enough to keep.", vi: "Vùng hải mã (hippocampus) đóng vai trò là trung tâm phân loại, quyết định ký ức nào đủ quan trọng để giữ lại." },
      { start: 25, end: 32, en: "Sleep plays a vital role in consolidating these memories into long-term storage.", vi: "Giấc ngủ đóng vai trò thiết yếu trong việc củng cố những ký ức này vào bộ nhớ dài hạn." },
      { start: 32, end: 39, en: "When we repeat or practice information, the neural pathways become stronger.", vi: "Khi chúng ta lặp lại hoặc thực hành thông tin, các con đường thần kinh sẽ trở nên mạnh mẽ hơn." },
      { start: 39, end: 46, en: "That is why active recall and repetition are the secrets to effective learning.", vi: "Đó là lý do tại sao việc chủ động gợi nhớ và lặp lại là bí quyết để học tập hiệu quả." }
    ]
  },
  {
    id: 'bbc-coffee-english',
    youtubeId: '1Lp-JsmS930',
    title: 'Ordering Coffee & Snacks in Everyday English',
    channel: 'BBC Learning English',
    category: 'daily',
    level: 'Beginner',
    duration: '06:12',
    thumbnail: 'https://img.youtube.com/vi/1Lp-JsmS930/hqdefault.jpg',
    description: 'Learn natural English phrases for ordering coffee, asking for modifications, and paying at cafes.',
    subtitles: [
      { start: 0, end: 4, en: "Hi there! Welcome to 6 Minute English from BBC Learning English.", vi: "Xin chào! Chào mừng bạn đến với chương trình 6 Phút Tiếng Anh từ BBC Learning English." },
      { start: 4, end: 9, en: "Today we are talking about something many of us love: coffee!", vi: "Hôm nay chúng ta sẽ nói về một thứ mà nhiều người trong chúng ta yêu thích: cà phê!" },
      { start: 9, end: 15, en: "When you go into a cafe in London, what phrases should you use?", vi: "Khi bạn vào một quán cà phê ở London, bạn nên sử dụng những cụm từ nào?" },
      { start: 15, end: 21, en: "Instead of saying 'I want coffee', native speakers usually say 'Could I get an iced latte, please?'", vi: "Thay vì nói 'I want coffee', người bản xứ thường nói 'Could I get an iced latte, please?'" },
      { start: 21, end: 27, en: "Or 'Can I have a cappuccino with oat milk, to go?'", vi: "Hoặc 'Can I have a cappuccino with oat milk, to go?' (Cho tôi một cốc cappuccino sữa yến mạch mang đi được không?)" },
      { start: 27, end: 34, en: "'To go' means takeaway, while 'for here' means you will drink it in the cafe.", vi: "'To go' có nghĩa là mang đi, trong khi 'for here' có nghĩa là bạn sẽ uống tại quán." },
      { start: 34, end: 40, en: "Let's practice these polite phrases together step by step.", vi: "Chúng ta hãy cùng nhau thực hành từng bước những cụm từ lịch sự này." }
    ]
  },
  {
    id: 'business-job-interview',
    youtubeId: 'HG68Ymazo18',
    title: 'How to Answer "Tell Me About Yourself" in Job Interviews',
    channel: 'CareerVidz',
    category: 'business',
    level: 'Advanced',
    duration: '08:45',
    thumbnail: 'https://img.youtube.com/vi/HG68Ymazo18/hqdefault.jpg',
    description: 'Master the perfect formula for answering the most common job interview question in professional English.',
    subtitles: [
      { start: 0, end: 6, en: "In this video, I will show you how to answer 'Tell me about yourself' in a job interview.", vi: "Trong video này, tôi sẽ hướng dẫn bạn cách trả lời câu hỏi 'Hãy giới thiệu về bản thân bạn' trong phỏng vấn xin việc." },
      { start: 6, end: 12, en: "This is almost always the very first question the hiring manager will ask you.", vi: "Đây gần như luôn là câu hỏi đầu tiên mà người quản lý tuyển dụng sẽ hỏi bạn." },
      { start: 12, end: 18, en: "Use the SEAT formula: Skills, Educational background, Achievements, and Type of person you are.", vi: "Hãy sử dụng công thức SEAT: Kỹ năng (Skills), Học vấn (Educational), Thành tựu (Achievements) và Tính cách con người bạn (Type)." },
      { start: 18, end: 25, en: "Keep your response focused on professional achievements rather than personal life details.", vi: "Hãy giữ cho câu trả lời của bạn tập trung vào thành tựu chuyên môn thay vì chi tiết cuộc sống cá nhân." },
      { start: 25, end: 32, en: "For example: 'I am a dedicated software developer with over 4 years of experience building scalable web apps.'", vi: "Ví dụ: 'Tôi là một nhà phát triển phần mềm tận tâm với hơn 4 năm kinh nghiệm xây dựng ứng dụng web có thể mở rộng.'" },
      { start: 32, end: 40, en: "Finish strong by explaining why you are excited about this specific company.", vi: "Kết thúc thật ấn tượng bằng cách giải thích tại sao bạn lại hào hứng với công ty cụ thể này." }
    ]
  },
  {
    id: 'bbc-spicy-food',
    youtubeId: 'bV6-f6-M0nE',
    title: '"My whole head was on fire!" 🌶️🤬 Real Easy English with Neil and Georgie',
    channel: 'BBC Learning English',
    category: 'daily',
    level: 'Elementary',
    duration: '05:42',
    thumbnail: 'https://img.youtube.com/vi/bV6-f6-M0nE/hqdefault.jpg',
    description: 'Learn everyday English expressions for talking about spicy food with Neil and Georgie from BBC Learning English.',
    subtitles: [
      { start: 0, end: 6, en: "Welcome to Real Easy English from BBC Learning English!", vi: "Chào mừng các bạn đến với Real Easy English từ BBC Learning English!" },
      { start: 6, end: 12, en: "Today we are talking about spicy food and extreme flavors.", vi: "Hôm nay chúng ta sẽ nói về đồ ăn cay và các hương vị đậm đà." },
      { start: 12, end: 18, en: "Neil said 'My whole head was on fire!' after eating a hot chili pepper.", vi: "Neil nói 'Cả đầu tôi như bốc cháy!' sau khi ăn một quả ớt cay." },
      { start: 18, end: 24, en: "Notice how we use idiom expressions to exaggerate feelings in English.", vi: "Hãy chú ý cách chúng ta dùng các thành ngữ để nói quá cảm xúc trong tiếng Anh." }
    ]
  },
  {
    id: 'bbc-climate-predictions',
    youtubeId: 'W1YmZ6K9Kk4',
    title: 'How do climate scientists make predictions? ⏱️ 6 Minute English',
    channel: 'BBC Learning English',
    category: 'education',
    level: 'Intermediate',
    duration: '06:16',
    thumbnail: 'https://img.youtube.com/vi/W1YmZ6K9Kk4/hqdefault.jpg',
    description: 'Climate change models predict future weather patterns. Neil and Sam discuss the science in 6 minutes of English vocabulary.',
    subtitles: [
      { start: 0, end: 7, en: "Hello and welcome to 6 Minute English from BBC Learning English.", vi: "Xin chào và chào mừng bạn đến với 6 Minute English từ BBC Learning English." },
      { start: 7, end: 14, en: "How do climate scientists know what the weather will be like in 50 years?", vi: "Làm thế nào các nhà khoa học khí hậu biết thời tiết sẽ ra sao trong 50 năm nữa?" },
      { start: 14, end: 21, en: "They use supercomputers and complex mathematical models to make predictions.", vi: "Họ sử dụng siêu máy tính và các mô hình toán học phức tạp để đưa ra dự báo." }
    ]
  },
  {
    id: 'bbc-migrants-news',
    youtubeId: 'Z_rQY2sL2n4',
    title: '60,000 migrants cross Spanish border: BBC Learning English from the News',
    channel: 'BBC Learning English',
    category: 'culture',
    level: 'Upper-Intermediate',
    duration: '08:04',
    thumbnail: 'https://img.youtube.com/vi/Z_rQY2sL2n4/hqdefault.jpg',
    description: 'Learn news vocabulary and formal English reporting terms with BBC Learning English from the News.',
    subtitles: [
      { start: 0, end: 6, en: "This is BBC Learning English from the News.", vi: "Đây là chương trình Học tiếng Anh qua tin tức của BBC." },
      { start: 6, end: 13, en: "We look at key headlines and break down useful vocabulary for English learners.", vi: "Chúng tôi điểm qua các tiêu đề chính và phân tích từ vựng hữu ích cho người học." }
    ]
  },
  {
    id: 'bbc-box-set-psychology',
    youtubeId: 'K9j1gL8vQ4m',
    title: 'BOX SET: 6 Minute English - \'Psychology\' English mega-class!',
    channel: 'BBC Learning English',
    category: 'education',
    level: 'Intermediate',
    duration: '30:32',
    thumbnail: 'https://img.youtube.com/vi/K9j1gL8vQ4m/hqdefault.jpg',
    description: '30 minutes of new vocabulary focused on psychology, human behavior, and mental health from BBC Learning English.',
    subtitles: [
      { start: 0, end: 8, en: "Welcome to this 6 Minute English mega-class on Psychology!", vi: "Chào mừng các bạn đến với lớp học 6 Minute English chuyên đề Tâm lý học!" },
      { start: 8, end: 15, en: "In this compilation, we explore how human minds process emotions and decisions.", vi: "Trong tuyển tập này, chúng ta sẽ khám phá cách trí óc con người xử lý cảm xúc và quyết định." }
    ]
  },
  {
    id: 'bbc-pros-cons-city',
    youtubeId: 'L8m9aP2vQ6X',
    title: 'What are the pros and cons of living in a city? 🏙️ Real Easy English',
    channel: 'BBC Learning English',
    category: 'daily',
    level: 'Elementary',
    duration: '05:42',
    thumbnail: 'https://img.youtube.com/vi/L8m9aP2vQ6X/hqdefault.jpg',
    description: 'Discussing city life vs countryside living with Real Easy English from BBC Learning English.',
    subtitles: [
      { start: 0, end: 6, en: "Living in a big city has both advantages and disadvantages.", vi: "Sống ở thành phố lớn có cả ưu điểm lẫn nhược điểm." },
      { start: 6, end: 12, en: "Let's learn how to debate pros and cons in natural everyday English.", vi: "Hãy cùng học cách thảo luận về ưu và nhược điểm bằng tiếng Anh tự nhiên." }
    ]
  }
];

export function getYouTubeVideoById(id) {
  if (!id) return YOUTUBE_VIDEOS[0];
  const found = YOUTUBE_VIDEOS.find(v => v.id === id || v.youtubeId === id);
  if (found) return found;

  const cleanId = extractYouTubeId(id) || id;
  return {
    id: cleanId,
    youtubeId: cleanId,
    title: `Custom YouTube Video (${cleanId})`,
    channel: 'YouTube Video',
    category: 'custom',
    level: 'Custom',
    duration: '10:00',
    thumbnail: `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`,
    description: 'Custom loaded YouTube video with automatic bilingual transcript support.',
    subtitles: [
      { start: 0, end: 10, en: "Welcome to this YouTube video! Click 'Auto-Sub with AI' to generate full subtitles.", vi: "Chào mừng bạn đến với video YouTube này! Nhấp 'Auto-Sub with AI' để tạo phụ đề tự động." },
      { start: 10, end: 20, en: "You can click any line in the transcript to jump to that timestamp.", vi: "Bạn có thể nhấp vào bất kỳ dòng nào trong bản phiên âm để nhảy đến mốc thời gian đó." },
      { start: 20, end: 30, en: "Practice shadowing by repeating key sentences over and over.", vi: "Luyện tập shadowing bằng cách lặp đi lặp lại các câu quan trọng." }
    ]
  };
}

export function extractYouTubeId(urlOrId) {
  if (!urlOrId) return null;
  const clean = urlOrId.trim();
  if (clean.length === 11 && !clean.includes('/')) return clean;

  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = clean.match(regExp);
  return (match && match[2] && match[2].length === 11) ? match[2] : null;
}

export const POPULAR_YOUTUBERS = [
  { id: 'bbc', handle: '@bbclearningenglish', name: 'BBC Learning English', url: 'https://www.youtube.com/@bbclearningenglish', icon: '🇬🇧', tag: 'Everyday English' },
  { id: 'teded', handle: '@TEDEd', name: 'TED-Ed', url: 'https://www.youtube.com/@TEDEd', icon: '🧠', tag: 'Science & Ideas' },
  { id: 'rachel', handle: '@RachelsEnglish', name: "Rachel's English", url: 'https://www.youtube.com/@RachelsEnglish', icon: '🗣️', tag: 'American Accent' },
  { id: 'vanessa', handle: '@SpeakEnglishWithVanessa', name: 'Speak English With Vanessa', url: 'https://www.youtube.com/@SpeakEnglishWithVanessa', icon: '💬', tag: 'Conversational' },
  { id: 'kurzgesagt', handle: '@kurzgesagt', name: 'Kurzgesagt – In a Nutshell', url: 'https://www.youtube.com/@kurzgesagt', icon: '🔬', tag: 'Science & World' },
  { id: 'careervidz', handle: '@CareerVidz', name: 'CareerVidz', url: 'https://www.youtube.com/@CareerVidz', icon: '💼', tag: 'Job Interview' },
  { id: 'lukesenglish', handle: '@LukesEnglishPodcast', name: "Luke's English Podcast", url: 'https://www.youtube.com/@LukesEnglishPodcast', icon: '🎙️', tag: 'British English' },
  { id: 'english101', handle: '@EnglishClass101', name: 'EnglishClass101', url: 'https://www.youtube.com/@EnglishClass101', icon: '🌐', tag: 'Grammar & Vocab' }
];

export function extractChannelQuery(input) {
  if (!input) return '';
  let str = input.trim();

  // If user pasted a full URL
  if (str.includes('youtube.com/') || str.includes('youtu.be/')) {
    // 1. @handle format: https://www.youtube.com/@bbclearningenglish or https://www.youtube.com/@bbclearningenglish/videos
    const handleMatch = str.match(/youtube\.com\/@([a-zA-Z0-9_\-\.]+)/i);
    if (handleMatch) return `@${handleMatch[1]}`;

    // 2. /channel/ ID format: https://www.youtube.com/channel/UCsooa4yRKGN_zEE8iknghZA
    const channelMatch = str.match(/youtube\.com\/channel\/([a-zA-Z0-9_\-]+)/i);
    if (channelMatch) return channelMatch[1];

    // 3. /c/ or /user/ format: https://www.youtube.com/c/TEDEd or https://www.youtube.com/user/TEDEd
    const cMatch = str.match(/youtube\.com\/(?:c|user)\/([a-zA-Z0-9_\-\.]+)/i);
    if (cMatch) return cMatch[1];

    // 4. Any trailing path segment
    const parts = str.split('youtube.com/')[1];
    if (parts) {
      const seg = parts.split('/')[0].replace(/^\/+|\/+$/g, '');
      if (seg) return seg;
    }
  }

  return str;
}

export function getChannelVideosByQuery(query) {
  if (!query) return YOUTUBE_VIDEOS;
  const extracted = extractChannelQuery(query);
  const clean = extracted.trim().toLowerCase().replace('@', '');

  const matched = YOUTUBE_VIDEOS.filter(v => 
    v.channel.toLowerCase().includes(clean) ||
    v.title.toLowerCase().includes(clean) ||
    v.description.toLowerCase().includes(clean)
  );

  return matched.length > 0 ? matched : YOUTUBE_VIDEOS;
}
