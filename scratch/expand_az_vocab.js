import fs from 'fs';

console.log("=== EXPANDING A-Z VOCABULARY BANK TO 6000+ FULL UNIQUE ITEMS ===");

const masterMap = new Map();

function cleanString(str) {
  if (!str) return '';
  return String(str).trim();
}

function addWord(en, vn, pool = 'common', category = 'General', level = 'B1') {
  const cleanEn = cleanString(en);
  let cleanVn = cleanString(vn).replace(/^(v:|n:|adj:|adv:)\s*/i, '');

  if (!cleanEn || !cleanVn) return;
  if (cleanEn.length < 2 || cleanEn.length > 40) return;
  if (cleanEn.includes('...') || cleanEn.startsWith('✅') || cleanEn.startsWith('❌') || cleanEn.includes(' — ') || cleanEn.includes('___')) return;

  const displayEn = cleanEn.charAt(0).toUpperCase() + cleanEn.slice(1);
  const displayVn = cleanVn.charAt(0).toUpperCase() + cleanVn.slice(1);
  const key = cleanEn.toLowerCase();

  let assignedPool = pool || 'common';
  let assignedLevel = level || 'B1';
  let assignedCat = category || 'General';

  const lowerCat = assignedCat.toLowerCase();
  if (assignedPool === 'toeic' || lowerCat.includes('toeic') || lowerCat.includes('business') || lowerCat.includes('office') || lowerCat.includes('finance') || lowerCat.includes('work') || lowerCat.includes('contract')) {
    assignedPool = 'toeic';
  } else if (assignedPool === 'ielts' || lowerCat.includes('ielts') || lowerCat.includes('academic') || lowerCat.includes('science') || lowerCat.includes('environment') || lowerCat.includes('psychology') || lowerCat.includes('law')) {
    assignedPool = 'ielts';
  }

  if (!masterMap.has(key)) {
    masterMap.set(key, { en: displayEn, vn: displayVn, pool: assignedPool, category: assignedCat, level: assignedLevel });
  } else {
    const existing = masterMap.get(key);
    if (existing.pool === 'common' && assignedPool !== 'common') {
      existing.pool = assignedPool;
      existing.category = assignedCat;
      existing.level = assignedLevel;
    }
  }
}

// Read current vocab-bank.js
try {
  const currentBank = JSON.parse(fs.readFileSync('./src/data/vocab-bank.js', 'utf8').match(/export const VOCAB_BANK = (\[[\s\S]*?\]);/)[1]);
  currentBank.forEach(item => {
    addWord(item.en, item.vn, item.pool, item.category, item.level);
  });
} catch(e) {}

// Alphabetical A-Z Elementary & Intermediate Vocabulary Boosters (A1 - B2)
const azWords = [
  // A
  ["Air", "Không khí", "common", "Nature", "A1"],
  ["Airport", "Sân bay", "common", "Travel", "A1"],
  ["Animal", "Động vật", "common", "Nature", "A1"],
  ["Answer", "Câu trả lời, trả lời", "common", "Communication", "A1"],
  ["Arm", "Cánh tay", "common", "Health & Body", "A1"],
  ["Art", "Nghệ thuật", "common", "Arts & Culture", "A1"],
  ["Artist", "Họa sĩ, nghệ sĩ", "common", "Arts & Career", "A1"],
  ["Ask", "Hỏi, yêu cầu", "common", "Communication", "A1"],
  ["Aunt", "Cô, dì, bác gái", "common", "Family", "A1"],
  ["Autumn", "Mùa thu", "common", "Nature & Seasons", "A1"],
  // B
  ["Baby", "Em bé", "common", "Family", "A1"],
  ["Ball", "Quả bóng", "common", "Sports", "A1"],
  ["Bank", "Ngân hàng", "common", "Finance", "A1"],
  ["Beach", "Bãi biển", "common", "Travel & Nature", "A1"],
  ["Bear", "Con gấu", "common", "Animals", "A1"],
  ["Beautiful", "Đẹp đẽ", "common", "Adjectives", "A1"],
  ["Bedroom", "Phòng ngủ", "common", "Home", "A1"],
  ["Beer", "Rượu bia", "common", "Food & Dining", "A1"],
  ["Before", "Trước khi", "common", "Time", "A1"],
  ["Behind", "Phía sau", "common", "Directions", "A1"],
  ["Bird", "Con chim", "common", "Animals", "A1"],
  ["Birthday", "Ngày sinh nhật", "common", "Culture", "A1"],
  ["Black", "Màu đen", "common", "Colors", "A1"],
  ["Blue", "Màu xanh dương", "common", "Colors", "A1"],
  ["Boat", "Con thuyền", "common", "Travel", "A1"],
  ["Body", "Cơ thể", "common", "Health & Body", "A1"],
  ["Bone", "Xương", "common", "Health & Body", "A1"],
  ["Bottle", "Chai, lọ", "common", "Home", "A1"],
  ["Box", "Cái hộp", "common", "Home", "A1"],
  ["Bread", "Bánh mì", "common", "Food", "A1"],
  ["Bridge", "Cây cầu", "common", "Architecture", "A1"],
  ["Brother", "Anh/em trai", "common", "Family", "A1"],
  ["Brown", "Màu nâu", "common", "Colors", "A1"],
  ["Build", "Xây dựng", "common", "Construction", "A1"],
  ["Bus", "Xe buýt", "common", "Transport", "A1"],
  ["Busy", "Bận rộn", "common", "Daily Life", "A1"],
  ["Buy", "Mua", "common", "Shopping", "A1"],
  // C
  ["Cake", "Bánh ngọt", "common", "Food", "A1"],
  ["Call", "Gọi điện, tiếng gọi", "common", "Communication", "A1"],
  ["Camera", "Máy ảnh", "common", "Tech", "A1"],
  ["Camp", "Trại, cắm trại", "common", "Travel", "A1"],
  ["Candle", "Ngọn nến", "common", "Home", "A1"],
  ["Candy", "Kẹo ngọt", "common", "Food", "A1"],
  ["Capital", "Thủ đô, vốn tiền", "common", "Geography & Finance", "A2"],
  ["Captain", "Đội trưởng, thuyền trưởng", "common", "Leadership", "A2"],
  ["Card", "Thẻ, thiệp", "common", "Daily Life", "A1"],
  ["Careful", "Cẩn thận", "common", "Qualities", "A1"],
  ["Carry", "Mang, vác", "common", "Daily Life", "A1"],
  ["Castle", "Lâu đài", "common", "History", "A1"],
  ["Cat", "Con mèo", "common", "Animals", "A1"],
  ["Center", "Trung tâm", "common", "General", "A1"],
  ["Century", "Thế kỷ (100 năm)", "common", "Time & History", "A2"],
  ["Chair", "Cái ghế", "common", "Furniture", "A1"],
  ["Chance", "Cơ hội, sự may mắn", "common", "General", "A2"],
  ["Change", "Thay đổi, tiền lẻ", "common", "General", "A1"],
  ["Cheap", "Rẻ tiền", "common", "Shopping", "A1"],
  ["Cheese", "Phô mai", "common", "Food", "A1"],
  ["Chef", "Đầu bếp", "common", "Career", "A1"],
  ["Chicken", "Thịt gà, con gà", "common", "Food & Animals", "A1"],
  ["Child", "Đứa trẻ", "common", "Family", "A1"],
  ["Chocolate", "Sô-cô-la", "common", "Food", "A1"],
  ["Church", "Nhà thờ", "common", "Architecture", "A1"],
  ["Circle", "Hình tròn", "common", "Math & Shape", "A1"],
  ["City", "Thành phố", "common", "Geography", "A1"],
  ["Clean", "Sạch sẻ, dọn dẹp", "common", "Daily Life", "A1"],
  ["Clever", "Thông minh, khéo léo", "common", "Qualities", "A1"],
  ["Clock", "Đồng hồ treo tường", "common", "Home", "A1"],
  ["Close", "Đóng lại, gần gũi", "common", "General", "A1"],
  ["Clothes", "Quần áo", "common", "Fashion", "A1"],
  ["Cloud", "Đám mây", "common", "Weather", "A1"],
  ["Coat", "Áo khoác dài", "common", "Fashion", "A1"],
  ["Coffee", "Cà phê", "common", "Food & Dining", "A1"],
  ["Coin", "Đồng tiền xu", "common", "Finance", "A1"],
  ["Cold", "Lạnh lẽo", "common", "Weather", "A1"],
  ["Color", "Màu sắc", "common", "Arts", "A1"],
  ["Company", "Công ty", "toeic", "Work & Business", "A2"],
  ["Computer", "Máy tính", "common", "IT & Tech", "A1"],
  ["Cook", "Nấu ăn, người nấu", "common", "Food", "A1"],
  ["Cool", "Mát mẻ, ngầu", "common", "Weather & Lifestyle", "A1"],
  ["Corn", "Ngô, bắp", "common", "Food", "A1"],
  ["Corner", "Góc đường, góc phòng", "common", "Directions", "A1"],
  ["Cost", "Chi phí, giá cả", "common", "Finance", "A1"],
  ["Country", "Đất nước, vùng quê", "common", "Geography", "A1"],
  ["Cousin", "Anh chị em họ", "common", "Family", "A1"],
  ["Cow", "Con bò", "common", "Animals", "A1"],
  ["Crowd", "Đám đông", "common", "Society", "A2"],
  ["Cry", "Khóc, tiếng la", "common", "Emotions", "A1"],
  ["Cup", "Cái tách, cúp thưởng", "common", "Home & Sports", "A1"],
  // D
  ["Dance", "Nhảy múa, điệu nhảy", "common", "Arts", "A1"],
  ["Danger", "Sự nguy hiểm", "common", "Safety", "A1"],
  ["Dangerous", "Nguy hiểm", "common", "Safety", "A1"],
  ["Dark", "Bóng tối, tối màu", "common", "Weather & Colors", "A1"],
  ["Daughter", "Con gái", "common", "Family", "A1"],
  ["Day", "Ban ngày, ngày", "common", "Time", "A1"],
  ["Deep", "Sâu thẳm", "common", "Nature", "A2"],
  ["Delicious", "Thơm ngon", "common", "Food", "A1"],
  ["Dentist", "Bác sĩ nha khoa", "common", "Health & Career", "A1"],
  ["Desert", "Sa mạc", "common", "Geography", "A2"],
  ["Desk", "Bàn học, bàn làm việc", "common", "Furniture", "A1"],
  ["Dictionary", "Từ điển", "common", "Education", "A1"],
  ["Dinner", "Bữa ăn tối", "common", "Food", "A1"],
  ["Dirty", "Bẩn thỉu", "common", "Daily Life", "A1"],
  ["Doctor", "Bác sĩ", "common", "Health", "A1"],
  ["Dog", "Con chó", "common", "Animals", "A1"],
  ["Doll", "Búp bê", "common", "Toys", "A1"],
  ["Dollar", "Đô la", "common", "Finance", "A1"],
  ["Door", "Cửa ra vào", "common", "Home", "A1"],
  ["Dragon", "Con rồng", "common", "Culture", "A2"],
  ["Dream", "Giấc mơ, mơ ước", "common", "Psychology", "A1"],
  ["Dress", "Váy dài, mặc đồ", "common", "Fashion", "A1"],
  ["Drink", "Đồ uống, uống", "common", "Food", "A1"],
  ["Drive", "Lái xe", "common", "Travel", "A1"],
  ["Driver", "Tài xế", "common", "Travel & Career", "A1"],
  ["Duck", "Con vịt", "common", "Animals", "A1"],
  // E
  ["Eagle", "Chim đại bàng", "common", "Animals", "A2"],
  ["Ear", "Lỗ tai", "common", "Health & Body", "A1"],
  ["Early", "Sớm", "common", "Time", "A1"],
  ["Earth", "Trái đất, mặt đất", "common", "Nature & Space", "A1"],
  ["East", "Phía Đông", "common", "Directions", "A1"],
  ["Easy", "Dễ dàng", "common", "Adjectives", "A1"],
  ["Eat", "Ăn uống", "common", "Food", "A1"],
  ["Egg", "Quả trứng", "common", "Food", "A1"],
  ["Eight", "Số 8", "common", "Math", "A1"],
  ["Elephant", "Con voi", "common", "Animals", "A1"],
  ["Email", "Thư điện tử", "common", "IT & Office", "A1"],
  ["Empty", "Trống rỗng", "common", "Adjectives", "A1"],
  ["Engine", "Động cơ", "toeic", "Engineering & Auto", "A2"],
  ["Engineer", "Kỹ sư", "toeic", "Career", "A2"],
  ["English", "Tiếng Anh", "common", "Education", "A1"],
  ["Evening", "Buổi tối", "common", "Time", "A1"],
  ["Everyday", "Hàng ngày", "common", "Time", "A1"],
  ["Exact", "Chính xác", "common", "Math & Analytics", "A2"],
  ["Exam", "Kỳ thi", "common", "Education", "A1"],
  ["Exciting", "Hào hứng, thú vị", "common", "Psychology", "A1"],
  ["Expensive", "Đắt tiền", "common", "Shopping", "A1"],
  ["Eye", "Mắt", "common", "Health & Body", "A1"],
  // F
  ["Face", "Khuôn mặt", "common", "Health & Body", "A1"],
  ["Factory", "Nhà máy", "toeic", "Manufacturing", "A2"],
  ["Fall", "Mùa thu, sự rơi ngã", "common", "Nature & Action", "A1"],
  ["Family", "Gia đình", "common", "Family", "A1"],
  ["Famous", "Nổi tiếng", "common", "Culture", "A1"],
  ["Fan", "Cái quạt, người hâm mộ", "common", "Home & Sports", "A1"],
  ["Farm", "Trang trại", "common", "Agriculture", "A1"],
  ["Farmer", "Nông dân", "common", "Agriculture & Career", "A1"],
  ["Fast", "Nhanh chóng", "common", "Adjectives", "A1"],
  ["Father", "Người bố", "common", "Family", "A1"],
  ["Favorite", "Được yêu thích nhất", "common", "Preferences", "A1"],
  ["Feather", "Lông vũ", "common", "Animals", "A2"],
  ["Feeling", "Cảm xúc, cảm giác", "common", "Psychology", "A1"],
  ["Field", "Cánh đồng, lĩnh vực", "common", "Nature & Work", "A2"],
  ["Fifteen", "Số 15", "common", "Math", "A1"],
  ["Fifty", "Số 50", "common", "Math", "A1"],
  ["Fight", "Cuộc chiến, chiến đấu", "common", "Action", "A1"],
  ["Finger", "Ngón tay", "common", "Health & Body", "A1"],
  ["Fire", "Ngọn lửa, sa thải", "common", "Nature & HR", "A1"],
  ["First", "Đầu tiên, thứ nhất", "common", "Order", "A1"],
  ["Fish", "Con cá", "common", "Animals & Food", "A1"],
  ["Fisherman", "Ngư dân", "common", "Career", "A2"],
  ["Flag", "Lá cờ", "common", "Culture", "A1"],
  ["Floor", "Sàn nhà, tầng", "common", "Home", "A1"],
  ["Flower", "Bông hoa", "common", "Nature", "A1"],
  ["Fly", "Bay, con ruồi", "common", "Action & Animals", "A1"],
  ["Food", "Thức ăn", "common", "Food", "A1"],
  ["Foot", "Bàn chân", "common", "Health & Body", "A1"],
  ["Football", "Môn bóng đá", "common", "Sports", "A1"],
  ["Forest", "Khu rừng", "common", "Nature", "A1"],
  ["Fork", "Cái nĩa ăn", "common", "Food", "A1"],
  ["Four", "Số 4", "common", "Math", "A1"],
  ["Free", "Miễn phí, tự do", "common", "General", "A1"],
  ["Fresh", "Tươi mới", "common", "Food & Nature", "A1"],
  ["Friday", "Thứ Sáu", "common", "Time", "A1"],
  ["Friend", "Người bạn", "common", "Relationships", "A1"],
  ["Frog", "Con ếch", "common", "Animals", "A1"],
  ["Fruit", "Trái cây", "common", "Food", "A1"],
  ["Full", "Đầy đủ, no bụng", "common", "General", "A1"],
  ["Fun", "Trò vui, niềm vui", "common", "Entertainment", "A1"],
  ["Funny", "Hài hước", "common", "Psychology", "A1"],
  ["Future", "Tương lai", "common", "Time", "A2"],
  // G
  ["Game", "Trò chơi", "common", "Entertainment", "A1"],
  ["Garden", "Khu vườn", "common", "Home & Nature", "A1"],
  ["Garlic", "Củ tỏi", "common", "Food", "A2"],
  ["Gas", "Khí gas, xăng", "common", "Energy & Auto", "A1"],
  ["Gate", "Cổng ra vào", "common", "Home & Travel", "A1"],
  ["Gift", "Món quà", "common", "Culture", "A1"],
  ["Giraffe", "Con hươu cao cổ", "common", "Animals", "A1"],
  ["Girl", "Cô bé", "common", "Family", "A1"],
  ["Give", "Cho, tặng", "common", "Action", "A1"],
  ["Glass", "Cái ly thủy tinh, kính", "common", "Home", "A1"],
  ["Glasses", "Kính đeo mắt", "common", "Fashion", "A1"],
  ["Glove", "Găng tay", "common", "Fashion", "A1"],
  ["Go", "Đi", "common", "Action", "A1"],
  ["Goal", "Mục tiêu, bàn thắng", "common", "Sports & Strategy", "A2"],
  ["Goat", "Con dê", "common", "Animals", "A1"],
  ["Gold", "Vàng", "common", "Materials & Finance", "A1"],
  ["Goldfish", "Con cá vàng", "common", "Animals", "A1"],
  ["Golf", "Môn đánh gôn", "common", "Sports", "A2"],
  ["Good", "Tốt, giỏi", "common", "Adjectives", "A1"],
  ["Goodbye", "Tạm biệt", "common", "Communication", "A1"],
  ["Goose", "Con ngỗng", "common", "Animals", "A2"],
  ["Grape", "Quả nho", "common", "Food", "A1"],
  ["Grass", "Bãi cỏ", "common", "Nature", "A1"],
  ["Great", "Tuyệt vời, to lớn", "common", "Adjectives", "A1"],
  ["Green", "Màu xanh lá", "common", "Colors", "A1"],
  ["Group", "Nhóm, tập thể", "common", "Society", "A1"],
  ["Grow", "Phát triển, trồng cây", "common", "Nature & Business", "A1"],
  ["Guitar", "Đàn ghi-ta", "common", "Music", "A1"],
  // H
  ["Hair", "Mái tóc", "common", "Health & Body", "A1"],
  ["Half", "Một nửa", "common", "Math", "A1"],
  ["Hall", "Hành lang, hội trường", "common", "Architecture", "A2"],
  ["Ham", "Thịt dăm bông", "common", "Food", "A1"],
  ["Hamburger", "Bánh kẹp thịt", "common", "Food", "A1"],
  ["Hammer", "Cái búa", "common", "Tools", "A2"],
  ["Hand", "Bàn tay", "common", "Health & Body", "A1"],
  ["Handbag", "Túi xách tay", "common", "Fashion", "A1"],
  ["Happy", "Hạnh phúc, vui vẻ", "common", "Psychology", "A1"],
  ["Harbor", "Bến cảng", "toeic", "Shipping & Travel", "B1"],
  ["Hard", "Khó khăn, cứng cáp", "common", "Adjectives", "A1"],
  ["Hat", "Cái mũ", "common", "Fashion", "A1"],
  ["Hate", "Ghét bỏ", "common", "Emotions", "A1"],
  ["Head", "Cái đầu, người đứng đầu", "common", "Health & Body", "A1"],
  ["Headache", "Cơn đau đầu", "common", "Health", "A1"],
  ["Headphones", "Tai nghe", "common", "Tech", "A1"],
  ["Health", "Sức khỏe", "common", "Health", "A2"],
  ["Healthy", "Khỏe mạnh", "common", "Health", "A1"],
  ["Heart", "Trái tim", "common", "Health & Body", "A1"],
  ["Heavy", "Nặng nề", "common", "Adjectives", "A1"],
  ["Height", "Chiều cao", "common", "Math & Body", "A2"],
  ["Helicopter", "Máy bay trực thăng", "common", "Transport", "A2"],
  ["Help", "Giúp đỡ, sự trợ giúp", "common", "Daily Life", "A1"],
  ["Hen", "Con gà mái", "common", "Animals", "A1"],
  ["Here", "Ở đây", "common", "Directions", "A1"],
  ["Hero", "Anh hùng", "common", "Culture", "A2"],
  ["Hide", "Che giấu, trốn", "common", "Action", "A1"],
  ["High", "Cao", "common", "Adjectives", "A1"],
  ["Hill", "Ngọn đồi", "common", "Nature & Geography", "A1"],
  ["Hippo", "Con hà mã", "common", "Animals", "A1"],
  ["History", "Môn lịch sử", "common", "Education", "A2"],
  ["Hobby", "Sở thích", "common", "Hobbies", "A1"],
  ["Hold", "Cầm, giữ", "common", "Action", "A1"],
  ["Hole", "Cái lỗ, hố", "common", "Nature", "A2"],
  ["Holiday", "Kỳ nghỉ lễ", "common", "Travel", "A1"],
  ["Home", "Ngôi nhà thân yêu", "common", "Home", "A1"],
  ["Homework", "Bài tập về nhà", "common", "Education", "A1"],
  ["Honey", "Mật ong, người yêu dấu", "common", "Food & Family", "A1"],
  ["Hope", "Hy vọng", "common", "Psychology", "A1"],
  ["Horse", "Con ngựa", "common", "Animals", "A1"],
  ["Hospital", "Bệnh viện", "common", "Health", "A1"],
  ["Hot", "Nóng bức", "common", "Weather", "A1"],
  ["Hotel", "Khách sạn", "common", "Travel & Hospitality", "A1"],
  ["Hour", "Giờ đồng hồ", "common", "Time", "A1"],
  ["House", "Ngôi nhà", "common", "Home", "A1"],
  ["Hug", "Cái ôm, ôm chặt", "common", "Family & Emotion", "A1"],
  ["Huge", "Khổng lồ", "common", "Adjectives", "A2"],
  ["Human", "Con người", "common", "Society", "A2"],
  ["Hungry", "Đói bụng", "common", "Health", "A1"],
  ["Hunt", "Săn bắt", "common", "Nature", "A2"],
  ["Hurry", "Nhanh lên, vội vã", "common", "Action", "A1"],
  ["Husband", "Người chồng", "common", "Family", "A1"],
  // I
  ["Ice", "Nước đá, băng", "common", "Weather & Nature", "A1"],
  ["Icecream", "Kem lạnh", "common", "Food", "A1"],
  ["Idea", "Ý tưởng", "common", "Mind", "A1"],
  ["Identification", "Giấy tờ căn cước, sự nhận diện", "toeic", "Security & HR", "B1"],
  ["Illness", "Căn bệnh", "common", "Health", "A2"],
  ["Image", "Hình ảnh", "common", "Arts & IT", "A2"],
  ["Important", "Quan trọng", "common", "General", "A1"],
  ["Income", "Thu nhập tiền lương", "toeic", "Finance", "B1"],
  ["Increase", "Sự gia tăng, tăng lên", "toeic", "Business & Analytics", "A2"],
  ["Insect", "Côn trùng", "common", "Animals & Nature", "A1"],
  ["Inside", "Bên trong", "common", "Directions", "A1"],
  ["Insurance", "Bảo hiểm", "toeic", "Finance & Insurance", "B1"],
  ["Interesting", "Thú vị", "common", "Psychology", "A1"],
  ["Internet", "Mạng internet", "common", "IT & Tech", "A1"],
  ["Interview", "Phỏng vấn", "toeic", "HR & Work", "A2"],
  ["Invent", "Phát minh", "common", "Science", "A2"],
  ["Invention", "Sự phát minh", "common", "Science", "A2"],
  ["Invitation", "Lời mời, thiệp mời", "common", "Events", "A2"],
  ["Invite", "Mời", "common", "Events", "A1"],
  ["Island", "Hòn đảo", "common", "Geography", "A1"],
  // J
  ["Jacket", "Áo khoác ngắn", "common", "Fashion", "A1"],
  ["Jam", "Mứt trái cây, sự tắc nghẽn", "common", "Food & Traffic", "A1"],
  ["January", "Tháng Một", "common", "Time", "A1"],
  ["Jeans", "Quần bò, quần jean", "common", "Fashion", "A1"],
  ["Job", "Công việc", "common", "Career", "A1"],
  ["Join", "Tham gia, kết nối", "common", "Action", "A1"],
  ["Joke", "Lời nói đùa, trò đùa", "common", "Entertainment", "A1"],
  ["Journalist", "Nhà báo", "common", "Media & Career", "A2"],
  ["Journey", "Chuyến hành trình", "common", "Travel", "A2"],
  ["Juice", "Nước ép trái cây", "common", "Food", "A1"],
  ["July", "Tháng Bảy", "common", "Time", "A1"],
  ["Jump", "Nhảy lên", "common", "Sports & Action", "A1"],
  ["June", "Tháng Sáu", "common", "Time", "A1"],
  ["Jungle", "Khu rừng nhiệt đới", "common", "Nature", "A2"],
  // K
  ["Kangaroo", "Con chuột túi", "common", "Animals", "A1"],
  ["Keep", "Giữ giữ gìn", "common", "Action", "A1"],
  ["Key", "Chìa khóa, phím bấm", "common", "Home & IT", "A1"],
  ["Keyboard", "Bàn phím máy tính/đàn", "common", "IT & Music", "A1"],
  ["Kick", "Cú đá, đá bóng", "common", "Sports", "A1"],
  ["Kid", "Đứa trẻ, nói đùa", "common", "Family", "A1"],
  ["Kilogram", "Ký, cân", "common", "Math & Shopping", "A1"],
  ["King", "Đức vua", "common", "History", "A1"],
  ["Kiss", "Nụ hôn, hôn", "common", "Relationships", "A1"],
  ["Kitchen", "Căn bếp", "common", "Home", "A1"],
  ["Kite", "Con diều", "common", "Toys & Sports", "A1"],
  ["Kitten", "Mèo con", "common", "Animals", "A1"],
  ["Knee", "Đầu gối", "common", "Health & Body", "A1"],
  ["Knife", "Con dao", "common", "Food & Tools", "A1"],
  ["Know", "Biết, hiểu rõ", "common", "Mind", "A1"],
  ["Knowledge", "Kiến thức, sự hiểu biết", "common", "Education", "A2"],
  // L
  ["Ladder", "Cái thang leo", "common", "Tools & Home", "A2"],
  ["Lady", "Quý bà, người phụ nữ", "common", "Society", "A1"],
  ["Lake", "Hồ nước", "common", "Nature & Geography", "A1"],
  ["Lamb", "Con cừu non, thịt cừu", "common", "Animals & Food", "A1"],
  ["Lamp", "Cái đèn", "common", "Home", "A1"],
  ["Language", "Ngôn ngữ", "common", "Education", "A1"],
  ["Laptop", "Máy tính xách tay", "common", "IT & Tech", "A1"],
  ["Large", "Rộng lớn", "common", "Adjectives", "A1"],
  ["Last", "Cuối cùng, vừa qua", "common", "Order & Time", "A1"],
  ["Late", "Trễ, muộn", "common", "Time", "A1"],
  ["Laugh", "Tiếng cười, cười to", "common", "Emotions", "A1"],
  ["Law", "Luật pháp", "common", "Law & Society", "A2"],
  ["Lawyer", "Luật sư", "common", "Law & Career", "A2"],
  ["Leaf", "Chiếc lá cây", "common", "Nature", "A1"],
  ["Learn", "Học tập", "common", "Education", "A1"],
  ["Lemon", "Quả chanh", "common", "Food", "A1"],
  ["Lemonade", "Nước chanh ép", "common", "Food", "A1"],
  ["Lesson", "Bài học", "common", "Education", "A1"],
  ["Letter", "Bức thư, chữ cái", "common", "Communication", "A1"],
  ["Library", "Thư viện", "common", "Education", "A1"],
  ["Life", "Cuộc sống, sự sống", "common", "General", "A1"],
  ["Light", "Ánh sáng, nhẹ nhàng", "common", "Physics & Adjectives", "A1"],
  ["Lion", "Con sư tử", "common", "Animals", "A1"],
  ["Lip", "Bờ môi", "common", "Health & Body", "A1"],
  ["Listen", "Lắng nghe", "common", "Communication", "A1"],
  ["Little", "Nhỏ bé, một ít", "common", "Adjectives", "A1"],
  ["Live", "Sống, trực tiếp", "common", "Daily Life", "A1"],
  ["Lizard", "Con thằn lằn", "common", "Animals", "A1"],
  ["Location", "Vị trí địa điểm", "toeic", "Geography & Business", "A2"],
  ["Lock", "Ổ khóa, khóa cửa", "common", "Home & Security", "A1"],
  ["Long", "Dài lâu", "common", "Adjectives", "A1"],
  ["Look", "Nhìn, vẻ ngoài", "common", "Action", "A1"],
  ["Love", "Tình yêu, yêu mến", "common", "Emotions", "A1"],
  ["Lunch", "Bữa ăn trưa", "common", "Food", "A1"],
  // M
  ["Machine", "Cỗ máy", "toeic", "Engineering & Tech", "A2"],
  ["Magazine", "Tạp chí", "common", "Media & Books", "A1"],
  ["Mail", "Thư từ, bưu kiện", "toeic", "Office & Correspondence", "A1"],
  ["Make", "Làm, tạo ra", "common", "Action", "A1"],
  ["Manager", "Người quản lý", "toeic", "HR & Work", "A2"],
  ["Mango", "Quả xoài", "common", "Food", "A1"],
  ["Map", "Bản đồ", "common", "Travel & Geography", "A1"],
  ["March", "Tháng Ba, diễu hành", "common", "Time & Action", "A1"],
  ["Market", "Khu chợ, thị trường", "toeic", "Shopping & Business", "A1"],
  ["Married", "Đã kết hôn", "common", "Family", "A1"],
  ["Match", "Trận đấu, que diêm, nối ghép", "common", "Sports & Games", "A1"],
  ["Math", "Môn toán học", "common", "Education", "A1"],
  ["May", "Tháng Năm, có thể", "common", "Time & Grammar", "A1"],
  ["Meal", "Bữa ăn", "common", "Food", "A1"],
  ["Meat", "Thịt ăn", "common", "Food", "A1"],
  ["Medicine", "Thuốc chữa bệnh, ngành y", "common", "Health & Medicine", "A2"],
  ["Meeting", "Cuộc họp", "toeic", "Office & Meetings", "A1"],
  ["Melon", "Quả dưa lưới", "common", "Food", "A1"],
  ["Member", "Thành viên", "common", "Society", "A2"],
  ["Memory", "Ký ức, bộ nhớ", "common", "Psychology & IT", "A2"],
  ["Menu", "Thực đơn món ăn", "common", "Food & Dining", "A1"],
  ["Message", "Tin nhắn", "common", "Communication", "A1"],
  ["Milk", "Sữa tươi", "common", "Food", "A1"],
  ["Minute", "Phút đồng hồ", "common", "Time", "A1"],
  ["Mirror", "Gương soi", "common", "Home", "A1"],
  ["Miss", "Bỏ lỡ, nhớ nhung, cô gái", "common", "Daily Life", "A1"],
  ["Mistake", "Lỗi sai", "common", "Daily Life", "A1"],
  ["Mobile", "Di động", "common", "IT & Tech", "A1"],
  ["Model", "Mô hình, người mẫu", "common", "Arts & Tech", "A2"],
  ["Modern", "Hiện đại", "common", "Architecture & Design", "A2"],
  ["Mom", "Mẹ", "common", "Family", "A1"],
  ["Monday", "Thứ Hai", "common", "Time", "A1"],
  ["Money", "Tiền bạc", "common", "Finance", "A1"],
  ["Monkey", "Con khỉ", "common", "Animals", "A1"],
  ["Month", "Tháng", "common", "Time", "A1"],
  ["Moon", "Mặt trăng", "common", "Nature & Space", "A1"],
  ["Morning", "Buổi sáng", "common", "Time", "A1"],
  ["Mosquito", "Con muỗi", "common", "Animals", "A1"],
  ["Mother", "Người mẹ", "common", "Family", "A1"],
  ["Motorbike", "Xe máy", "common", "Transport", "A1"],
  ["Mountain", "Ngọn núi", "common", "Geography & Nature", "A1"],
  ["Mouse", "Con chuột", "common", "Animals & IT", "A1"],
  ["Mouth", "Cái miệng", "common", "Health & Body", "A1"],
  ["Movie", "Bộ phim", "common", "Entertainment", "A1"],
  ["Museum", "Bảo tàng", "common", "History & Culture", "A1"],
  ["Music", "Âm nhạc", "common", "Arts", "A1"],
  ["Musician", "Nhạc sĩ", "common", "Music & Career", "A2"],
  // N
  ["Name", "Tên gọi", "common", "General", "A1"],
  ["Napkin", "Khăn ăn", "common", "Food & Dining", "A2"],
  ["Nature", "Thiên nhiên", "common", "Nature", "A2"],
  ["Neck", "Cái cổ", "common", "Health & Body", "A1"],
  ["Necklace", "Vòng cổ trang sức", "common", "Fashion", "A1"],
  ["Neighbor", "Hàng xóm", "common", "Society", "A2"],
  ["Neighborhood", "Khu xóm nhỏ", "common", "City & Housing", "A2"],
  ["Nephew", "Cháu trai", "common", "Family", "A2"],
  ["Nervous", "Lo lắng hồi hộp", "common", "Psychology", "A2"],
  ["Nest", "Tổ chim", "common", "Animals & Nature", "A2"],
  ["Net", "Cái lưới, mạng lưới", "common", "Sports & IT", "A1"],
  ["New", "Mới mẻ", "common", "Adjectives", "A1"],
  ["Newspaper", "Tờ báo tin tức", "common", "Media", "A1"],
  ["Nice", "Đẹp đẽ, tốt bụng", "common", "Adjectives", "A1"],
  ["Niece", "Cháu gái", "common", "Family", "A2"],
  ["Night", "Ban đêm", "common", "Time", "A1"],
  ["Nine", "Số 9", "common", "Math", "A1"],
  ["Noise", "Tiếng ồn", "common", "Sound", "A1"],
  ["Noisy", "Ồn ào", "common", "Sound", "A1"],
  ["Noodle", "Mì, hủ tiếu", "common", "Food", "A1"],
  ["Noon", "Buổi trưa", "common", "Time", "A1"],
  ["North", "Phía Bắc", "common", "Directions", "A1"],
  ["Nose", "Cái mũi", "common", "Health & Body", "A1"],
  ["Notebook", "Cuốn sổ tay", "common", "Education & Office", "A1"],
  ["Notice", "Thông báo, chú ý", "toeic", "Office & PR", "A2"],
  ["November", "Tháng Mười Một", "common", "Time", "A1"],
  ["Number", "Con số", "common", "Math", "A1"],
  ["Nurse", "Y tá", "common", "Health & Career", "A1"],
  ["Nut", "Hạt sấy khô, đai ốc", "common", "Food & Engineering", "A1"],
  // O
  ["Ocean", "Đại dương", "common", "Nature & Geography", "A1"],
  ["October", "Tháng Mười", "common", "Time", "A1"],
  ["Octopus", "Con bạch tuộc", "common", "Animals", "A1"],
  ["Office", "Văn phòng", "toeic", "Office & Workplace", "A1"],
  ["Officer", "Sĩ quan, cán bộ", "common", "Career & Government", "A2"],
  ["Oil", "Dầu ăn, dầu mỏ", "common", "Food & Energy", "A1"],
  ["Old", "Cũ, già", "common", "Adjectives", "A1"],
  ["Omelet", "Món trứng chiên", "common", "Food", "A1"],
  ["Onion", "Củ hành tây", "common", "Food", "A1"],
  ["Open", "Mở ra, cởi mở", "common", "Action", "A1"],
  ["Orange", "Quả cam, màu cam", "common", "Food & Colors", "A1"],
  ["Order", "Đơn hàng, trật tự, gọi món", "toeic", "Commerce & Food", "A1"],
  ["Ostrich", "Chim đà điểu", "common", "Animals", "A2"],
  ["Out", "Phía ngoài", "common", "Directions", "A1"],
  ["Oven", "Lò nướng", "common", "Home & Kitchen", "A2"],
  ["Owl", "Con chim cú mèo", "common", "Animals", "A1"],
  ["Owner", "Chủ sở hữu", "toeic", "Business & Law", "A2"],
  ["Ox", "Con bò đực", "common", "Animals", "A2"],
  // P
  ["Package", "Gói hàng, bưu kiện", "toeic", "Logistics & Shipping", "A2"],
  ["Page", "Trang sách/web", "common", "Books & IT", "A1"],
  ["Pain", "Cơn đau", "common", "Health", "A2"],
  ["Painter", "Họa sĩ, thợ sơn", "common", "Arts & Career", "A1"],
  ["Painting", "Bức tranh vẽ", "common", "Arts", "A1"],
  ["Pajamas", "Bộ đồ ngủ", "common", "Fashion", "A1"],
  ["Palace", "Cung điện", "common", "Architecture & History", "A2"],
  ["Panda", "Con gấu trúc", "common", "Animals", "A1"],
  ["Pants", "Quần dài", "common", "Fashion", "A1"],
  ["Paper", "Tờ giấy", "common", "Materials & Office", "A1"],
  ["Parrot", "Con chim vẹt", "common", "Animals", "A1"],
  ["Party", "Bữa tiệc, đảng phái", "common", "Culture & Politics", "A1"],
  ["Passport", "Hộ chiếu du lịch", "common", "Travel & Security", "A1"],
  ["Past", "Quá khứ", "common", "Time", "A1"],
  ["Path", "Con đường nhỏ", "common", "Nature & Travel", "A2"],
  ["Patient", "Bệnh nhân, kiên nhẫn", "common", "Health & Personal", "A2"],
  ["Pay", "Thanh toán, tiền lương", "toeic", "Finance & HR", "A1"],
  ["Peach", "Quả đào", "common", "Food", "A1"],
  ["Peacock", "Con chim công", "common", "Animals", "A2"],
  ["Peanut", "Hạt đậu phụng", "common", "Food", "A1"],
  ["Pear", "Quả lê", "common", "Food", "A1"],
  ["Pen", "Bút mực", "common", "Office & Education", "A1"],
  ["Pencil", "Bút chì", "common", "Office & Education", "A1"],
  ["Penguin", "Chim cánh cụt", "common", "Animals", "A1"],
  ["People", "Con người, nhân dân", "common", "Society", "A1"],
  ["Pepper", "Hạt tiêu, quả ớt chuông", "common", "Food", "A1"],
  ["Perfect", "Hoàn hảo", "common", "Adjectives", "A1"],
  ["Person", "Một cá nhân", "common", "Society", "A1"],
  ["Pet", "Thú cưng", "common", "Animals", "A1"],
  ["Pharmacy", "Hiệu thuốc tây", "common", "Health & Shopping", "A2"],
  ["Phone", "Điện thoại", "common", "Tech", "A1"],
  ["Photo", "Bức ảnh", "common", "Arts & Photography", "A1"],
  ["Piano", "Đàn dương cầm", "common", "Music", "A1"],
  ["Picnic", "Buổi dã ngoại", "common", "Travel & Life", "A1"],
  ["Picture", "Bức tranh, hình ảnh", "common", "Arts", "A1"],
  ["Pie", "Bánh nướng nhân ngọt/mặn", "common", "Food", "A1"],
  ["Pig", "Con heo", "common", "Animals", "A1"],
  ["Pillow", "Cái gối nằm", "common", "Home", "A1"],
  ["Pilot", "Phi công", "common", "Aviation & Career", "A2"],
  ["Pineapple", "Quả dứa, thơm", "common", "Food", "A1"],
  ["Pink", "Màu hồng", "common", "Colors", "A1"],
  ["Pipe", "Ống dẫn nước/khí, tẩu thuốc", "common", "Engineering & Home", "A2"],
  ["Pirate", "Cướp biển", "common", "History & Movies", "A2"],
  ["Pizza", "Bánh pi-za", "common", "Food", "A1"],
  ["Place", "Địa điểm, nơi chốn", "common", "General", "A1"],
  ["Plane", "Máy bay", "common", "Travel", "A1"],
  ["Planet", "Hành tinh", "common", "Science & Space", "A2"],
  ["Plant", "Cây trồng, nhà máy sản xuất", "toeic", "Nature & Manufacturing", "A1"],
  ["Plastic", "Chất nhựa chất dẻo", "common", "Materials", "A1"],
  ["Plate", "Đĩa ăn", "common", "Food & Kitchen", "A1"],
  ["Play", "Chơi đùa, vở kịch", "common", "Sports & Arts", "A1"],
  ["Player", "Người chơi, cầu thủ", "common", "Sports & Games", "A1"],
  ["Playground", "Sân chơi trẻ em", "common", "School & City", "A1"],
  ["Plum", "Quả mận", "common", "Food", "A1"],
  ["Pocket", "Túi quần áo", "common", "Fashion", "A1"],
  ["Poem", "Bài thơ", "common", "Literature", "A2"],
  ["Poet", "Nhà thơ", "common", "Literature & Career", "A2"],
  ["Poison", "Chất độc", "common", "Health & Safety", "A2"],
  ["Police", "Cảnh sát", "common", "Law & Safety", "A1"],
  ["Polite", "Lịch sự", "common", "Qualities", "A1"],
  ["Pollution", "Sự ô nhiễm", "common", "Environment", "A2"],
  ["Pond", "Aao nước nhỏ", "common", "Nature", "A2"],
  ["Pool", "Hồ bơi, bể tích hợp", "common", "Sports & General", "A1"],
  ["Poor", "Nghèo khó, yếu kém", "common", "Society & Quality", "A1"],
  ["Popcorn", "Bắp răng bơ", "common", "Food & Movies", "A1"],
  ["Popular", "Phổ biến, được ưa thích", "common", "Culture", "A1"],
  ["Pork", "Thịt lợn", "common", "Food", "A1"],
  ["Post", "Bưu điện, đăng bài", "common", "IT & Office", "A1"],
  ["Postcard", "Bưu thiếp", "common", "Travel & PR", "A1"],
  ["Poster", "Tấm áp phích quảng cáo", "common", "PR & Design", "A1"],
  ["Pot", "Nồi nấu ăn, chậu cây", "common", "Kitchen & Nature", "A1"],
  ["Potato", "Củ khoai tây", "common", "Food", "A1"],
  ["Power", "Năng lượng, quyền lực", "common", "Energy & Politics", "A2"],
  ["Practice", "Luyện tập, sự thực hành", "common", "Education", "A1"],
  ["Presenter", "Người dẫn chương trình", "common", "Media & Career", "A2"],
  ["President", "Chủ tịch, tổng thống", "toeic", "Politics & Corporate", "A2"],
  ["Price", "Giá cả", "common", "Shopping & Finance", "A1"],
  ["Prince", "Hoàng tử", "common", "History", "A1"],
  ["Princess", "Công chúa", "common", "History", "A1"],
  ["Printer", "Máy in", "toeic", "IT & Office", "A1"],
  ["Problem", "Vấn đề, bài toán", "common", "General", "A1"],
  ["Program", "Chương trình", "common", "IT & Media", "A1"],
  ["Project", "Dự án", "toeic", "Business & Strategy", "A2"],
  ["Promise", "Lời hứa, hứa hẹn", "common", "Relationships", "A2"],
  ["Protect", "Bảo vệ", "common", "Safety & Nature", "A2"],
  ["Public", "Công cộng, công chúng", "common", "Society", "A2"],
  ["Pudding", "Món bánh tráng miệng pudding", "common", "Food", "A1"],
  ["Pumpkin", "Quả bí đỏ", "common", "Food", "A1"],
  ["Puppy", "Chó con", "common", "Animals", "A1"],
  ["Purple", "Màu tím", "common", "Colors", "A1"],
  ["Purse", "Ví tiền nữ", "common", "Fashion", "A1"],
  ["Puzzle", "Trò chơi câu đố ghép hình", "common", "Games", "A1"],
  // Q
  ["Queen", "Nữ hoàng", "common", "History", "A1"],
  ["Question", "Câu hỏi", "common", "Education", "A1"],
  ["Quick", "Nhanh chóng", "common", "Adjectives", "A1"],
  ["Quiet", "Yên tĩnh", "common", "Sound", "A1"],
  ["Rabbit", "Con thỏ", "common", "Animals", "A1"],
  // R
  ["Race", "Cuộc đua, chủng tộc", "common", "Sports & Society", "A2"],
  ["Radio", "Đài phát thanh", "common", "Media", "A1"],
  ["Radish", "Củ cải đỏ", "common", "Food", "A2"],
  ["Railway", "Đường sắt", "common", "Transport", "A2"],
  ["Rain", "Cơn mưa", "common", "Weather", "A1"],
  ["Rainbow", "Cầu vồng", "common", "Weather & Nature", "A1"],
  ["Raincoat", "Áo mưa", "common", "Fashion & Weather", "A1"],
  ["Rat", "Con chuột lớn", "common", "Animals", "A1"],
  ["Read", "Đọc sách", "common", "Education", "A1"],
  ["Reader", "Độc giả, người đọc", "common", "Books", "A1"],
  ["Ready", "Sẵn sàng", "common", "Daily Life", "A1"],
  ["Real", "Thực tế, chân thật", "common", "General", "A2"],
  ["Receipt", "Hóa đơn thanh toán", "toeic", "Finance & Shopping", "A2"],
  ["Receive", "Nhận được", "toeic", "Communication", "A2"],
  ["Recent", "Gần đây", "common", "Time", "A2"],
  ["Red", "Màu đỏ", "common", "Colors", "A1"],
  ["Refrigerator", "Tủ lạnh", "common", "Home", "A2"],
  ["Rent", "Tiền thuê, thuê nhà", "toeic", "Real Estate & Finance", "A2"],
  ["Repair", "Sửa chữa", "toeic", "Engineering & Maintenance", "A2"],
  ["Report", "Báo cáo", "toeic", "Office & Media", "A2"],
  ["Reporter", "Phóng viên", "common", "Media & Career", "A2"],
  ["Rest", "Nghỉ ngơi, phần còn lại", "common", "Health & General", "A1"],
  ["Restaurant", "Nhà hàng", "common", "Food & Hospitality", "A1"],
  ["Result", "Kết quả", "common", "Analytics", "A2"],
  ["Rice", "Cơm, gạo", "common", "Food", "A1"],
  ["Rich", "Giàu có, phong phú", "common", "Finance", "A1"],
  ["Ride", "Cưỡi xe, đi nhờ", "common", "Travel", "A1"],
  ["Right", "Bên phải, đúng đắn", "common", "Directions & Ethics", "A1"],
  ["Ring", "Chiếc nhẫn, tiếng chuông", "common", "Jewelry & Sound", "A1"],
  ["River", "Dòng sông", "common", "Nature & Geography", "A1"],
  ["Road", "Con đường", "common", "Transport", "A1"],
  ["Robot", "Người máy", "common", "Tech", "A1"],
  ["Rock", "Hòn đá, nhạc rock", "common", "Nature & Music", "A1"],
  ["Rocket", "Tên lửa", "common", "Science & Space", "A2"],
  ["Roof", "Mái nhà", "common", "Home", "A1"],
  ["Room", "Căn phòng", "common", "Home", "A1"],
  ["Rooster", "Con gà trống", "common", "Animals", "A1"],
  ["Rose", "Hoa hồng", "common", "Nature", "A1"],
  ["Rope", "Dây thừng", "common", "Tools", "A2"],
  ["Round", "Hình tròn, vòng đấu", "common", "Shape & Sports", "A1"],
  ["Ruler", "Thước kẻ, thước đo", "common", "Education & Tools", "A1"],
  ["Run", "Chạy bộ", "common", "Sports & Action", "A1"],
  ["Runner", "Vận động viên chạy bộ", "common", "Sports", "A1"],
  // S
  ["Sad", "Buồn rầu", "common", "Emotions", "A1"],
  ["Safe", "An toàn, két sắt", "common", "Safety & Security", "A2"],
  ["Safety", "Sự an toàn", "common", "Safety", "A2"],
  ["Salad", "Món rau trộn", "common", "Food", "A1"],
  ["Salary", "Tiền lương hàng tháng", "toeic", "HR & Finance", "B1"],
  ["Sales", "Doanh số bán hàng", "toeic", "Sales & Marketing", "A2"],
  ["Salt", "Muối ăn", "common", "Food", "A1"],
  ["Salty", "Có vị mặn", "common", "Food", "A1"],
  ["Same", "Giống nhau", "common", "General", "A1"],
  ["Sand", "Bãi cát", "common", "Nature", "A1"],
  ["Sandwich", "Bánh mì kẹp", "common", "Food", "A1"],
  ["Sauce", "Nước sốt", "common", "Food", "A1"],
  ["Sausage", "Xúc xích", "common", "Food", "A1"],
  ["Save", "Lưu trữ, tiết kiệm", "common", "IT & Finance", "A1"],
  ["Say", "Nói", "common", "Communication", "A1"],
  ["Scarf", "Khăn quàng cổ", "common", "Fashion", "A1"],
  ["School", "Trường học", "common", "Education", "A1"],
  ["Science", "Môn khoa học", "common", "Science", "A1"],
  ["Scientist", "Nhà khoa học", "common", "Science & Career", "A2"],
  ["Scissors", "Cái kéo", "common", "Tools", "A1"],
  ["Scooter", "Xe tay ga, xe xe đẩy chân", "common", "Transport", "A1"],
  ["Screen", "Màn hình", "common", "Tech & IT", "A1"],
  ["Sea", "Biển cả", "common", "Nature", "A1"],
  ["Seafood", "Hải sản", "common", "Food", "A1"],
  ["Seagull", "Chim hải âu", "common", "Animals", "A2"],
  ["Seal", "Con hải cẩu, con dấu niêm phong", "common", "Animals & Law", "A2"],
  ["Season", "Mùa trong năm", "common", "Nature & Time", "A1"],
  ["Seat", "Chỗ ngồi", "common", "Travel & Furniture", "A1"],
  ["Second", "Giây đồng hồ, thứ hai", "common", "Time & Order", "A1"],
  ["Secret", "Bí mật", "common", "General", "A2"],
  ["Secretary", "Thư ký văn phòng", "toeic", "Office & Career", "A2"],
  ["Security", "An ninh, sự bảo mật", "toeic", "Security & HR", "B1"],
  ["See", "Nhìn thấy", "common", "Action", "A1"],
  ["Seed", "Hạt giống", "common", "Nature & Agriculture", "A2"],
  ["Sell", "Bán hàng", "common", "Shopping & Commerce", "A1"],
  ["Send", "Gửi đi", "common", "Communication", "A1"],
  ["Sentence", "Câu văn, bản án", "common", "Grammar & Law", "A1"],
  ["September", "Tháng Chín", "common", "Time", "A1"],
  ["Seven", "Số 7", "common", "Math", "A1"],
  ["Shampoo", "Dầu gội đầu", "common", "Beauty & Home", "A1"],
  ["Shark", "Con cá mập", "common", "Animals", "A1"],
  ["Sheep", "Con cừu", "common", "Animals", "A1"],
  ["Shelf", "Kệ sách, giá để đồ", "common", "Home & Office", "A1"],
  ["Shell", "Vỏ sò, vỏ ốc", "common", "Nature", "A1"],
  ["Ship", "Tàu thủy lớn", "toeic", "Shipping & Travel", "A1"],
  ["Shirt", "Áo sơ mi", "common", "Fashion", "A1"],
  ["Shoes", "Đôi giày", "common", "Fashion", "A1"],
  ["Shop", "Cửa tiệm", "common", "Shopping", "A1"],
  ["Shopping", "Hoạt động mua sắm", "common", "Shopping", "A1"],
  ["Short", "Ngắn, thấp", "common", "Adjectives", "A1"],
  ["Shorts", "Quần đùi", "common", "Fashion", "A1"],
  ["Shoulder", "Bờ vai", "common", "Health & Body", "A1"],
  ["Shout", "Hét to, la lên", "common", "Sound", "A1"],
  ["Show", "Show diễn, cho xem", "common", "Entertainment", "A1"],
  ["Shower", "Vòi hoa sen, trận mưa rào", "common", "Home & Weather", "A1"],
  ["Shrimp", "Con tôm", "common", "Food & Animals", "A1"],
  ["Shut", "Đóng lại", "common", "Action", "A1"],
  ["Shy", "E ngại, rút rè", "common", "Psychology", "A1"],
  ["Sick", "Bị ốm, bệnh", "common", "Health", "A1"],
  ["Side", "Mặt bên, phía", "common", "Directions", "A1"],
  ["Sign", "Biển báo, ký tên", "toeic", "Office & Travel", "A1"],
  ["Signature", "Chữ ký", "toeic", "Contracts & Legal", "A2"],
  ["Silver", "Bạc", "common", "Materials", "A1"],
  ["Simple", "Đơn giản", "common", "General", "A1"],
  ["Sing", "Hát", "common", "Arts & Music", "A1"],
  ["Singer", "Ca sĩ", "common", "Music & Career", "A1"],
  ["Single", "Độc thân, đơn lẻ", "common", "Relationships & General", "A1"],
  ["Sink", "Bồn rửa mặt/bát, chìm xuống", "common", "Home & Action", "A2"],
  ["Sister", "Chị/em gái", "common", "Family", "A1"],
  ["Sit", "Ngồi xuống", "common", "Action", "A1"],
  ["Six", "Số 6", "common", "Math", "A1"],
  ["Size", "Kích cỡ", "common", "Shopping", "A1"],
  ["Skate", "Trượt băng, giày trượt", "common", "Sports", "A1"],
  ["Skateboard", "Ván trượt", "common", "Sports", "A1"],
  ["Ski", "Trượt tuyết", "common", "Sports", "A1"],
  ["Skin", "Làn da", "common", "Health & Body", "A1"],
  ["Skirt", "Chân váy", "common", "Fashion", "A1"],
  ["Sky", "Bầu trời", "common", "Nature", "A1"],
  ["Sleep", "Giấc ngủ, ngủ", "common", "Daily Life", "A1"],
  ["Sleepy", "Buồn ngủ", "common", "Health", "A1"],
  ["Slice", "Lát cắt (bánh/thịt)", "common", "Food", "A2"],
  ["Slide", "Cầu trượt, trang trình chiếu", "common", "Play & Office", "A1"],
  ["Slow", "Chậm chạp", "common", "Adjectives", "A1"],
  ["Small", "Nhỏ bé", "common", "Adjectives", "A1"],
  ["Smart", "Thông minh", "common", "Qualities", "A1"],
  ["Smell", "Mùi hương, ngửi", "common", "Senses", "A1"],
  ["Smile", "Nụ cười, mỉm cười", "common", "Emotions", "A1"],
  ["Smoke", "Khói, hút thuốc", "common", "Health & Environment", "A1"],
  ["Snake", "Con rắn", "common", "Animals", "A1"],
  ["Sneakers", "Giày thể thao", "common", "Fashion & Sports", "A1"],
  ["Snow", "Tuyết rơi", "common", "Weather", "A1"],
  ["Snowman", "Người tuyết", "common", "Culture", "A1"],
  ["Soap", "Xà phòng", "common", "Daily Life", "A1"],
  ["Soccer", "Môn bóng đá", "common", "Sports", "A1"],
  ["Sock", "Tất, vớ", "common", "Fashion", "A1"],
  ["Sofa", "Ghế sofa", "common", "Furniture", "A1"],
  ["Soft", "Mềm mại", "common", "Adjectives", "A1"],
  ["Soil", "Đất trồng", "common", "Nature & Agriculture", "A2"],
  ["Soldier", "Người quân nhân, người lính", "common", "Military & Career", "A2"],
  ["Solve", "Giải quyết (vấn đề)", "common", "Math & Strategy", "A2"],
  ["Son", "Con trai", "common", "Family", "A1"],
  ["Song", "Bài hát", "common", "Music", "A1"],
  ["Soon", "Sớm thôi", "common", "Time", "A1"],
  ["Soup", "Món súp", "common", "Food", "A1"],
  ["Sour", "Vị chua", "common", "Food", "A1"],
  ["South", "Phía Nam", "common", "Directions", "A1"],
  ["Space", "Không gian, vũ trụ", "common", "Science & Space", "A2"],
  ["Spaceship", "Tàu vũ trụ", "common", "Space & Tech", "A2"],
  ["Spaghetti", "Mì Ý spaghetti", "common", "Food", "A1"],
  ["Speak", "Nói chuyện", "common", "Communication", "A1"],
  ["Speaker", "Loa phát thanh, người nói", "common", "Tech & Office", "A2"],
  ["Special", "Đặc biệt", "common", "General", "A1"],
  ["Speed", "Tốc độ", "common", "Physics & Auto", "A2"],
  ["Spell", "Đánh vần, phép thuật", "common", "Education", "A1"],
  ["Spend", "Dành thời gian/tiền bạc", "common", "Finance & Life", "A1"],
  ["Spider", "Con nhện", "common", "Animals", "A1"],
  ["Spinach", "Rau chân vịt, cải bó xôi", "common", "Food", "A2"],
  ["Spoon", "Cái muỗng", "common", "Food", "A1"],
  ["Sport", "Thể thao", "common", "Sports", "A1"],
  ["Spring", "Mùa xuân, lò xo", "common", "Nature & Tech", "A1"],
  ["Square", "Hình vuông, quảng trường", "common", "Shape & Geography", "A1"],
  ["Squid", "Con mực biển", "common", "Animals & Food", "A1"],
  ["Squirrel", "Con sóc", "common", "Animals", "A1"],
  ["Stadium", "Sân vận động", "common", "Sports & Architecture", "A2"],
  ["Staff", "Đội ngũ nhân viên", "toeic", "HR & Workplace", "A2"],
  ["Stage", "Sân khấu, giai đoạn", "common", "Arts & Project", "A2"],
  ["Stairs", "Cầu thang bộ", "common", "Home", "A1"],
  ["Stamp", "Tem thư, đóng dấu", "common", "Communication", "A1"],
  ["Stand", "Đứng dậy, quầy hàng", "common", "Action & Retail", "A1"],
  ["Star", "Ngôi sao", "common", "Space & Movies", "A1"],
  ["Start", "Bắt đầu", "common", "Action", "A1"],
  ["Station", "Nhà ga, trạm phát", "common", "Travel & Transport", "A1"],
  ["Steak", "Bít tết bò", "common", "Food", "A1"],
  ["Steal", "Trộm cắp", "common", "Law & Crime", "A2"],
  ["Steam", "Hơi nước", "common", "Science", "A2"],
  ["Steel", "Thép", "common", "Materials & Engineering", "A2"],
  ["Step", "Bước chân, công đoạn", "common", "Daily Life", "A1"],
  ["Sticker", "Hình dán", "common", "Toys", "A1"],
  ["Sticky", "Dính, nhớt", "common", "Adjectives", "A1"],
  ["Still", "Vẫn còn, yên tĩnh", "common", "Time", "A1"],
  ["Stomach", "Dạ dày, bụng", "common", "Health & Body", "A1"],
  ["Stone", "Hòn đá", "common", "Nature", "A1"],
  ["Stop", "Dừng lại, trạm dừng", "common", "Action & Travel", "A1"],
  ["Store", "Cửa hàng, lưu trữ", "common", "Shopping & Retail", "A1"],
  ["Storm", "Cơn bão", "common", "Weather", "A1"],
  ["Story", "Câu chuyện", "common", "Books & Media", "A1"],
  ["Stove", "Bếp nấu", "common", "Home & Kitchen", "A1"],
  ["Straight", "Thẳng tắp", "common", "Directions", "A1"],
  ["Strawberry", "Quả dâu tây", "common", "Food", "A1"],
  ["Street", "Con đường phố", "common", "City", "A1"],
  ["Stress", "Căng thẳng", "common", "Health & Mind", "A2"],
  ["Strong", "Mạnh mẽ", "common", "Adjectives", "A1"],
  ["Student", "Học sinh", "common", "Education", "A1"],
  ["Study", "Học tập, nghiên cứu", "common", "Education", "A1"],
  ["Subway", "Tàu điện ngầm", "common", "Travel & Transport", "A1"],
  ["Sugar", "Đường ăn", "common", "Food", "A1"],
  ["Suit", "Bộ comple, phù hợp", "toeic", "Fashion & Work", "A2"],
  ["Suitcase", "Vali du lịch", "toeic", "Travel", "A2"],
  ["Summer", "Mùa hè", "common", "Nature & Seasons", "A1"],
  ["Sun", "Mặt trời", "common", "Nature & Space", "A1"],
  ["Sunday", "Chủ Nhật", "common", "Time", "A1"],
  ["Sunflower", "Hoa hướng dương", "common", "Nature", "A1"],
  ["Sunglasses", "Kính râm", "common", "Fashion", "A1"],
  ["Supermarket", "Siêu thị", "common", "Shopping", "A1"],
  ["Supper", "Bữa ăn tối nhẹ", "common", "Food", "A1"],
  ["Support", "Sự hỗ trợ, ủng hộ", "toeic", "HR & Strategy", "A2"],
  ["Surf", "Lướt sóng, lướt web", "common", "Sports & IT", "A1"],
  ["Surface", "Bề mặt", "common", "Science & Geography", "A2"],
  ["Surprise", "Sự ngạc nhiên", "common", "Emotions", "A1"],
  ["Sweater", "Áo len", "common", "Fashion", "A1"],
  ["Sweet", "Ngọt ngào, kẹo ngọt", "common", "Food & Taste", "A1"],
  ["Swim", "Bơi lội", "common", "Sports", "A1"],
  ["Swimming", "Bộ môn bơi lội", "common", "Sports", "A1"],
  ["Swing", "Xích đu, đung đưa", "common", "Play & Action", "A1"],
  ["Sword", "Thanh kiếm cổ", "common", "History", "A2"],
  ["System", "Hệ thống", "toeic", "IT & Tech", "A2"],
  // T
  ["Table", "Cái bàn", "common", "Furniture", "A1"],
  ["Tag", "Nhãn mác, thẻ đính", "common", "Shopping & IT", "A1"],
  ["Tail", "Cái đuôi", "common", "Animals", "A1"],
  ["Talk", "Trò chuyện", "common", "Communication", "A1"],
  ["Tall", "Cao lớn", "common", "Adjectives", "A1"],
  ["Tape", "Băng dính, băng đĩa", "common", "Tools & Media", "A1"],
  ["Taste", "Mùi vị, nếm thử", "common", "Food & Taste", "A1"],
  ["Tax", "Thuế", "toeic", "Finance & Law", "B1"],
  ["Taxi", "Xe tắc xi", "common", "Transport", "A1"],
  ["Tea", "Trà", "common", "Food", "A1"],
  ["Teacher", "Giáo viên", "common", "Education", "A1"],
  ["Team", "Đội ngũ, nhóm", "common", "Sports & Workplace", "A1"],
  ["Teapot", "Ấm pha trà", "common", "Home & Kitchen", "A1"],
  ["Tear", "Nước mắt, xé rách", "common", "Emotions & Action", "A2"],
  ["Technology", "Công nghệ", "common", "Tech", "A2"],
  ["Teddy", "Gấu bông", "common", "Toys", "A1"],
  ["Tooth", "Răng", "common", "Health & Body", "A1"],
  ["Toothbrush", "Bàn chải đánh răng", "common", "Daily Life", "A1"],
  ["Toothpaste", "Kem đánh răng", "common", "Daily Life", "A1"],
  ["Top", "Đỉnh cao, áo thun nữ", "common", "General & Fashion", "A1"],
  ["Topic", "Chủ đề bài học", "common", "Education", "A1"],
  ["Towel", "Khăn tắm", "common", "Home", "A1"],
  ["Tower", "Tòa tháp", "common", "Architecture", "A2"],
  ["Town", "Thị trấn", "common", "Geography", "A1"],
  ["Toy", "Đồ chơi", "common", "Toys", "A1"],
  ["Track", "Đường đua, vết chân", "common", "Sports & Nature", "A2"],
  ["Tractor", "Xe máy kéo nông nghiệp", "common", "Agriculture", "A2"],
  ["Trade", "Thương mại, buôn bán", "toeic", "Trade & Commerce", "B1"],
  ["Tradition", "Truyền thống", "common", "Culture", "A2"],
  ["Traffic", "Giao thông", "common", "Transport", "A1"],
  ["Train", "Tàu hỏa, huấn luyện", "common", "Travel & Education", "A1"],
  ["Trainer", "Huấn luyện viên, giày thể thao", "common", "Sports & Fashion", "A2"],
  ["Training", "Khóa đào tạo", "toeic", "HR & Education", "A2"],
  ["Trauma", "Chấn thương tâm lý/thể xác", "common", "Health & Psychology", "B2"],
  ["Travel", "Du lịch, đi lại", "common", "Travel", "A1"],
  ["Tree", "Cây cối", "common", "Nature", "A1"],
  ["Trip", "Chuyến đi", "common", "Travel", "A1"],
  ["Trophy", "Cúp vô địch", "common", "Sports", "A1"],
  ["Truck", "Xe tải", "common", "Transport", "A1"],
  ["Trumpet", "Kèn trôm-pét", "common", "Music", "A1"],
  ["Truth", "Sự thật", "common", "Ethics & Mind", "A2"],
  ["T-shirt", "Áo thun", "common", "Fashion", "A1"],
  ["Tube", "Ống tròn, tàu điện ngầm London", "common", "Engineering & Travel", "A2"],
  ["Tuna", "Cá ngừ", "common", "Food & Animals", "A1"],
  ["Tunnel", "Đường hầm", "common", "Engineering & Transport", "A2"],
  ["Turkey", "Thịt gà tây, nước Thổ Nhĩ Kỳ", "common", "Food & Geography", "A1"],
  ["Turtle", "Con rùa biển", "common", "Animals", "A1"],
  ["TV", "Tivi", "common", "Tech & Media", "A1"],
  ["Twice", "Hai lần", "common", "Math & Frequency", "A1"],
  ["Twin", "Anh chị em sinh đôi", "common", "Family", "A1"],
  ["Type", "Loại hình, gõ phím", "common", "IT & Analytics", "A1"],
  // U
  ["UGLY", "Xấu xí", "common", "Adjectives", "A1"],
  ["Umbrella", "Cây dù, ô che mưa", "common", "Weather & Fashion", "A1"],
  ["Uncle", "Chú, bác, cậu", "common", "Family", "A1"],
  ["Underground", "Dưới mặt đất, hệ thống tàu ngầm", "common", "Transport & Geography", "A2"],
  ["Uniform", "Bộ đồng phục", "common", "School & Fashion", "A1"],
  ["University", "Trường đại học", "common", "Education", "A1"],
  ["Unlock", "Mở khóa", "common", "IT & Home", "A1"],
  ["User", "Người sử dụng", "toeic", "IT & Tech", "A1"],
  // V
  ["Vacation", "Kỳ nghỉ hè/lễ", "common", "Travel", "A1"],
  ["Vaccine", "Vắc-xin phòng bệnh", "common", "Health & Medicine", "A2"],
  ["Valley", "Thung lũng", "common", "Geography & Nature", "A2"],
  ["Vanilla", "Hương vani thơm", "common", "Food", "A1"],
  ["Vase", "Bình hoa", "common", "Home & Furniture", "A1"],
  ["Vegetable", "Rau củ quả", "common", "Food", "A1"],
  ["Vehicle", "Phương tiện giao thông", "toeic", "Auto & Transport", "A2"],
  ["Vest", "Áo gile", "common", "Fashion", "A1"],
  ["Veterinarian", "Bác sĩ thú y", "common", "Health & Career", "A2"],
  ["Video", "Đoạn phim", "common", "Tech & Media", "A1"],
  ["Village", "Ngôi làng", "common", "Geography", "A1"],
  ["Violin", "Đàn vi-ô-lông", "common", "Music", "A1"],
  ["Visit", "Thăm viếng", "common", "Travel & Daily Life", "A1"],
  ["Visitor", "Khách viếng thăm", "toeic", "Travel & PR", "A1"],
  ["Voice", "Giọng nói", "common", "Sound & Communication", "A1"],
  ["Volcano", "Ngọn núi lửa", "common", "Nature & Hazards", "A2"],
  ["Volleyball", "Môn bóng chuyền", "common", "Sports", "A1"],
  // W
  ["Waffle", "Bánh tổ ong waffle", "common", "Food", "A1"],
  ["Wait", "Chờ đợi", "common", "Action", "A1"],
  ["Waiter", "Bồi bàn nam", "common", "Food & Career", "A1"],
  ["Waitress", "Nữ phục vụ bàn", "common", "Food & Career", "A1"],
  ["Walk", "Đi bộ", "common", "Action", "A1"],
  ["Wall", "Bức tường", "common", "Home", "A1"],
  ["Wallet", "Ví tiền", "common", "Fashion", "A1"],
  ["Walnut", "Hạt óc chó", "common", "Food", "A2"],
  ["Want", "Muốn có", "common", "Mind", "A1"],
  ["War", "Chiến tranh", "common", "History & Military", "A2"],
  ["Warm", "Ấm áp", "common", "Weather", "A1"],
  ["Wash", "Rửa, giặt đồ", "common", "Daily Life", "A1"],
  ["Wasp", "Con tò vò, ong vò vẽ", "common", "Animals", "A2"],
  ["Waste", "Lãng phí, rác thải", "common", "Environment", "A2"],
  ["Watch", "Đồng hồ đeo tay, theo dõi", "common", "Tech & Daily Life", "A1"],
  ["Water", "Nước uống", "common", "Daily Life", "A1"],
  ["Waterfall", "Thác nước", "common", "Nature", "A1"],
  ["Watermelon", "Quả dưa hấu", "common", "Food", "A1"],
  ["Wave", "Sóng biển, vẫy tay", "common", "Nature & Action", "A1"],
  ["Way", "Con đường, cách thức", "common", "General", "A1"],
  ["Weather", "Thời tiết", "common", "Weather", "A1"],
  ["Web", "Mạng nhện, mạng internet", "common", "IT & Nature", "A1"],
  ["Website", "Trang tin điện tử", "common", "IT & Tech", "A1"],
  ["Wedding", "Lễ kết hôn", "common", "Culture & Family", "A1"],
  ["Wednesday", "Thứ Tư", "common", "Time", "A1"],
  ["Week", "Tuần lễ", "common", "Time", "A1"],
  ["Weekend", "Cuối tuần", "common", "Time", "A1"],
  ["Welcome", "Chào đón", "common", "Communication", "A1"],
  ["West", "Phía Tây", "common", "Directions", "A1"],
  ["Wet", "Ẩm ướt", "common", "Weather & Adjectives", "A1"],
  ["Whale", "Con cá voi", "common", "Animals", "A1"],
  ["Wheel", "Bánh xe", "common", "Auto & Tools", "A1"],
  ["White", "Màu trắng", "common", "Colors", "A1"],
  ["Wind", "Cơn gió", "common", "Weather", "A1"],
  ["Window", "Cửa sổ", "common", "Home", "A1"],
  ["Windy", "Trời nhiều gió", "common", "Weather", "A1"],
  ["Wine", "Rượu vang", "common", "Food & Beverage", "A1"],
  ["Wing", "Cánh chim/máy bay", "common", "Animals & Aviation", "A1"],
  ["Winner", "Người chiến thắng", "common", "Sports & Games", "A1"],
  ["Winter", "Mùa đông", "common", "Nature & Seasons", "A1"],
  ["Wipe", "Lau chùi", "common", "Home & Work", "A1"],
  ["Wire", "Dây điện", "common", "Engineering & Tech", "A2"],
  ["Wisdom", "Trí khôn, sự khôn ngoan", "common", "Psychology & Mind", "A2"],
  ["Wish", "Ước nguyện, lời chúc", "common", "Emotions", "A1"],
  ["Wolf", "Con chim sói", "common", "Animals", "A1"],
  ["Woman", "Người phụ nữ", "common", "Family", "A1"],
  ["Wood", "Gỗ cây", "common", "Materials & Nature", "A1"],
  ["Word", "Từ ngữ", "common", "Language", "A1"],
  ["Work", "Làm việc, tác phẩm", "common", "Career & Work", "A1"],
  ["Worker", "Người công nhân", "toeic", "HR & Work", "A1"],
  ["Workplace", "Nơi làm việc", "toeic", "Work & Office", "A2"],
  ["World", "Thế giới", "common", "Geography", "A1"],
  ["Worm", "Con sâu, con giun", "common", "Animals", "A1"],
  ["Write", "Viết lách", "common", "Education", "A1"],
  ["Writer", "Nhà văn", "common", "Books & Career", "A1"],
  // X, Y, Z
  ["Xylophone", "Mộc cầm (đàn gõ gỗ)", "common", "Music", "A1"],
  ["Yacht", "Du thuyền sang trọng", "common", "Travel & Ocean", "A2"],
  ["Yak", "Con bò Tây Tạng", "common", "Animals", "A2"],
  ["Yard", "Sân nhà, đơn vị thước yard", "common", "Home & Math", "A1"],
  ["Year", "Năm", "common", "Time", "A1"],
  ["Yellow", "Màu vàng", "common", "Colors", "A1"],
  ["Yogurt", "Sữa chua", "common", "Food", "A1"],
  ["Yolk", "Lòng đỏ trứng", "common", "Food", "A2"],
  ["Young", "Trẻ tuổi", "common", "Adjectives", "A1"],
  ["Zebra", "Con ngựa vằn", "common", "Animals", "A1"],
  ["Zero", "Số 0", "common", "Math", "A1"],
  ["Zoo", "Sở thú", "common", "Travel & Animals", "A1"],
  ["Zucchini", "Quả bí ngòi", "common", "Food", "A2"]
];

azWords.forEach(item => {
  addWord(item[0], item[1], item[2], item[3], item[4]);
});

console.log("Count after adding A-Z words:", masterMap.size);

const finalVocabList = [];
let idCounter = 1;
let stats = {
  toeic: 0,
  ielts: 0,
  common: 0,
  levels: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }
};

for (const item of masterMap.values()) {
  const vocabObj = {
    id: `v-${idCounter++}`,
    en: item.en,
    vn: item.vn,
    pool: item.pool,
    category: item.category,
    level: item.level || 'B1'
  };
  finalVocabList.push(vocabObj);

  if (vocabObj.pool === 'toeic') stats.toeic++;
  else if (vocabObj.pool === 'ielts') stats.ielts++;
  else stats.common++;

  if (stats.levels[vocabObj.level] !== undefined) {
    stats.levels[vocabObj.level]++;
  } else {
    stats.levels['B1']++;
  }
}

console.log("=========================================");
console.log(`TOTAL VOCABULARY BANK ITEMS: ${finalVocabList.length}`);
console.log("DISTRIBUTION BY POOL:", {
  TOEIC: stats.toeic,
  IELTS: stats.ielts,
  COMMON_6000: stats.common
});
console.log("DISTRIBUTION BY LEVEL:", stats.levels);
console.log("=========================================");

const fileHeader = `// ==========================================================================
// CENTRALIZED VOCABULARY BANK — COMPREHENSIVE VOCABULARY & TRAINING POOL
// Covers TOEIC, IELTS, and 6,000 Common General English Words (A1-C2)
// ==========================================================================

export const VOCAB_BANK = ${JSON.stringify(finalVocabList, null, 2)};

/**
 * Fisher-Yates Uniform Shuffle Algorithm
 */
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Filter vocabulary by Pool, Level, Category, and Count
 */
export function getVocabPool({ pool = 'all', level = 'all', category = 'all', count = null } = {}) {
  let filtered = VOCAB_BANK;

  // Pool Filtering
  if (pool && pool !== 'all') {
    filtered = filtered.filter(item => item.pool === pool);
  }

  // Level Filtering with Range Matching
  if (level && level !== 'all') {
    const lvl = level.toUpperCase();
    if (lvl === 'A1-A2') {
      filtered = filtered.filter(item => item.level === 'A1' || item.level === 'A2');
    } else if (lvl === 'B1-B2') {
      filtered = filtered.filter(item => item.level === 'B1' || item.level === 'B2');
    } else if (lvl === 'C1-C2') {
      filtered = filtered.filter(item => item.level === 'C1' || item.level === 'C2');
    } else {
      filtered = filtered.filter(item => item.level.toUpperCase() === lvl);
    }
  }

  // Category Filtering
  if (category && category !== 'all') {
    filtered = filtered.filter(item => item.category && item.category.toLowerCase().includes(category.toLowerCase()));
  }

  // Fallback Protection: If level+pool filter yields fewer than 12 items, fall back to pool filter so game never breaks!
  if (filtered.length < 12) {
    if (pool && pool !== 'all') {
      filtered = VOCAB_BANK.filter(item => item.pool === pool);
    } else {
      filtered = VOCAB_BANK;
    }
  }

  if (count && typeof count === 'number' && count > 0) {
    return shuffleArray(filtered).slice(0, count);
  }

  return shuffleArray(filtered);
}

/**
 * Get pairs for Speed Word Match Game
 */
export function getSpeedMatchPairs({ pool = 'all', level = 'all', category = 'all', count = 10 } = {}) {
  const poolItems = getVocabPool({ pool, level, category, count });
  return poolItems.map(item => ({
    id: item.id,
    en: item.en,
    vn: item.vn,
    pool: item.pool,
    category: item.category,
    level: item.level
  }));
}

/**
 * Get Databank Stats Summary
 */
export function getVocabStats() {
  const total = VOCAB_BANK.length;
  const toeic = VOCAB_BANK.filter(item => item.pool === 'toeic').length;
  const ielts = VOCAB_BANK.filter(item => item.pool === 'ielts').length;
  const common = VOCAB_BANK.filter(item => item.pool === 'common').length;

  const levels = {
    A1: VOCAB_BANK.filter(i => i.level === 'A1').length,
    A2: VOCAB_BANK.filter(i => i.level === 'A2').length,
    B1: VOCAB_BANK.filter(i => i.level === 'B1').length,
    B2: VOCAB_BANK.filter(i => i.level === 'B2').length,
    C1: VOCAB_BANK.filter(i => i.level === 'C1').length,
    C2: VOCAB_BANK.filter(i => i.level === 'C2').length,
  };

  return { total, toeic, ielts, common, levels };
}

/**
 * Get Available Categories for a Pool
 */
export function getAvailableCategories(pool = 'all') {
  let items = VOCAB_BANK;
  if (pool !== 'all') {
    items = items.filter(i => i.pool === pool);
  }
  const cats = new Set();
  items.forEach(i => {
    if (i.category) cats.add(i.category);
  });
  return Array.from(cats).sort();
}
`;

fs.writeFileSync('./src/data/vocab-bank.js', fileHeader, 'utf8');
console.log("Successfully generated updated src/data/vocab-bank.js!");
