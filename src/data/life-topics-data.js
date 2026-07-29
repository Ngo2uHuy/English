// ==========================================================================
// Comprehensive Life Topics Database — Covering All Aspects of Human Life
// ==========================================================================

export const LIFE_TOPICS_CATEGORIES = [
  {
    id: 'personal',
    name: 'Gia đình & Cuộc sống Cá nhân',
    icon: '👨‍👩‍👧‍👦',
    topics: [
      { id: 'family-relationships', name: 'Family & Relationships', vn: 'Gia đình & Mối quan hệ', icon: '👨‍👩‍👧‍👦' },
      { id: 'daily-routine', name: 'Daily Routine & Home Life', vn: 'Thói quen & Cuộc sống nhà ở', icon: '🏠' },
      { id: 'emotions-psychology', name: 'Emotions & Psychology', vn: 'Cảm xúc & Tâm lý học', icon: '🧠' },
      { id: 'future-ambitions', name: 'Future Goals & Ambitions', vn: 'Tương lai & Ước mơ', icon: '🚀' },
      { id: 'pets-animals', name: 'Pets & Animal Kingdom', vn: 'Thú cưng & Thế giới động vật', icon: '🐕' }
    ]
  },
  {
    id: 'work-education',
    name: 'Công việc & Giáo dục',
    icon: '💼',
    topics: [
      { id: 'business-career', name: 'Career & Workplace', vn: 'Công việc & Sự nghiệp', icon: '💼' },
      { id: 'education-learning', name: 'Education & Academic Life', vn: 'Giáo dục & Học tập', icon: '🎓' },
      { id: 'money-finance', name: 'Money, Finance & Banking', vn: 'Tài chính & Quản lý tiền bạc', icon: '💰' },
      { id: 'public-speaking', name: 'Public Speaking & Debates', vn: 'Thuyết trình & Tranh luận', icon: '🎙️' }
    ]
  },
  {
    id: 'lifestyle-culture',
    name: 'Lối sống & Văn hóa',
    icon: '✈️',
    topics: [
      { id: 'travel-tourism', name: 'Travel & Cultures', vn: 'Du lịch & Văn hóa thế giới', icon: '✈️' },
      { id: 'food-culinary', name: 'Food, Cooking & Dining', vn: 'Ẩm thực & Nấu nướng', icon: '🍲' },
      { id: 'health-wellness', name: 'Health, Medicine & Fitness', vn: 'Sức khỏe & Y tế', icon: '🏥' },
      { id: 'shopping-fashion', name: 'Shopping & Fashion', vn: 'Mua sắm & Thời trang', icon: '🛍️' },
      { id: 'sports-hobbies', name: 'Sports, Hobbies & Games', vn: 'Thể thao & Sở thích', icon: '⚽' },
      { id: 'festivals-traditions', name: 'Festivals & Traditions', vn: 'Lễ hội & Truyền thống', icon: '🎆' }
    ]
  },
  {
    id: 'tech-science',
    name: 'Công nghệ & Khoa học',
    icon: '📱',
    topics: [
      { id: 'technology-ai', name: 'Technology & AI', vn: 'Công nghệ & Trí tuệ nhân tạo', icon: '📱' },
      { id: 'science-space', name: 'Science & Space Exploration', vn: 'Khoa học & Vũ trụ', icon: '🔬' },
      { id: 'environment-nature', name: 'Environment & Climate Change', vn: 'Môi trường & Khí hậu', icon: '🌿' }
    ]
  },
  {
    id: 'arts-society',
    name: 'Nghệ thuật, Xã hội & Pháp luật',
    icon: '🎨',
    topics: [
      { id: 'arts-literature', name: 'Arts, Cinema & Literature', vn: 'Nghệ thuật, Phim ảnh & Văn học', icon: '🎨' },
      { id: 'news-society', name: 'News, Media & Society', vn: 'Tin tức & Xã hội', icon: '📰' },
      { id: 'law-ethics', name: 'Law, Justice & Ethics', vn: 'Pháp luật & Đạo đức', icon: '⚖️' },
      { id: 'history-geography', name: 'History & World Places', vn: 'Lịch sử & Địa lý thế giới', icon: '🏛️' },
      { id: 'safety-emergency', name: 'Emergency, Safety & Survival', vn: 'An toàn & Cấp cứu', icon: '🚨' },
      { id: 'philosophy-values', name: 'Philosophy & Life Values', vn: 'Triết học & Giá trị sống', icon: '💭' }
    ]
  }
];

// Flat array of all life topics for fast mapping & dropdown rendering
export const ALL_LIFE_TOPICS = LIFE_TOPICS_CATEGORIES.flatMap(cat => cat.topics);

// Helper function to build html select options with grouped optgroups
export function renderLifeTopicsSelectOptions(selectedTopicName = '') {
  return LIFE_TOPICS_CATEGORIES.map(category => `
    <optgroup label="${category.icon} ${category.name}">
      ${category.topics.map(t => {
        const isSelected = selectedTopicName === t.name || selectedTopicName === t.id;
        return `<option value="${t.name}" ${isSelected ? 'selected' : ''}>${t.icon} ${t.name} (${t.vn})</option>`;
      }).join('')}
    </optgroup>
  `).join('');
}
