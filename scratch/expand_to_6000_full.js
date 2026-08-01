import fs from 'fs';

console.log("=== EXPANDING VOCABULARY BANK TO 6,000+ FULL UNIQUE ITEMS ===");

const masterMap = new Map();

function addWord(en, vn, pool = 'common', category = 'General', level = 'B1') {
  if (!en || !vn) return;
  let cleanEn = String(en).trim();
  let cleanVn = String(vn).trim().replace(/^(v:|n:|adj:|adv:)\s*/i, '');

  if (cleanEn.length < 2 || cleanEn.length > 35) return;
  if (cleanEn.includes('...') || cleanEn.startsWith('✅') || cleanEn.startsWith('❌') || cleanEn.includes(' — ') || cleanEn.includes('___')) return;

  // Capitalize display
  cleanEn = cleanEn.charAt(0).toUpperCase() + cleanEn.slice(1);
  cleanVn = cleanVn.charAt(0).toUpperCase() + cleanVn.slice(1);

  const key = cleanEn.toLowerCase();

  let assignedPool = pool || 'common';
  let assignedLevel = level || 'B1';
  let assignedCat = category || 'General';

  const lowerCat = assignedCat.toLowerCase();
  if (assignedPool === 'toeic' || lowerCat.includes('toeic') || lowerCat.includes('business') || lowerCat.includes('office') || lowerCat.includes('finance') || lowerCat.includes('work') || lowerCat.includes('contract')) {
    assignedPool = 'toeic';
    if (!assignedLevel || assignedLevel === 'B1') assignedLevel = 'B2';
  } else if (assignedPool === 'ielts' || lowerCat.includes('ielts') || lowerCat.includes('academic') || lowerCat.includes('science') || lowerCat.includes('environment') || lowerCat.includes('psychology') || lowerCat.includes('law')) {
    assignedPool = 'ielts';
    if (!assignedLevel || assignedLevel === 'B1') assignedLevel = 'C1';
  }

  if (!masterMap.has(key)) {
    masterMap.set(key, { en: cleanEn, vn: cleanVn, pool: assignedPool, category: assignedCat, level: assignedLevel });
  } else {
    // If existing item has generic pool 'common' but new item is 'toeic' or 'ielts', upgrade!
    const existing = masterMap.get(key);
    if (existing.pool === 'common' && assignedPool !== 'common') {
      existing.pool = assignedPool;
      existing.category = assignedCat;
      existing.level = assignedLevel;
    }
  }
}

// 1. Read existing vocab-bank.js
try {
  const currentBank = JSON.parse(fs.readFileSync('./src/data/vocab-bank.js', 'utf8').match(/export const VOCAB_BANK = (\[[\s\S]*?\]);/)[1]);
  currentBank.forEach(item => {
    addWord(item.en, item.vn, item.pool, item.category, item.level);
  });
} catch(e) {}

console.log("Loaded from current vocab-bank.js:", masterMap.size);

// 2. Read from all scratch files
const scratchFiles = fs.readdirSync('./scratch');
scratchFiles.forEach(file => {
  if (file.endsWith('.json')) {
    try {
      const data = JSON.parse(fs.readFileSync(`./scratch/${file}`, 'utf8'));
      if (Array.isArray(data)) {
        data.forEach(item => {
          addWord(item.en || item.word, item.vn || item.translation || item.meaning, item.pool, item.category || item.cat, item.level);
        });
      }
    } catch(e) {}
  }
});

console.log("Loaded after scratch JSON files:", masterMap.size);

// 3. Read from games-data.js
try {
  const content = fs.readFileSync('./src/data/games-data.js', 'utf8');
  const regex = /{\s*"en":\s*"([^"]+)",\s*"vn":\s*"([^"]+)"(?:,\s*"category":\s*"([^"]+)")?/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    addWord(m[1], m[2], 'common', m[3] || 'General', 'B1');
  }
} catch(e) {}

console.log("Loaded after games-data.js:", masterMap.size);

// 4. Generate systematic Oxford & CEFR vocabulary expansion to reach > 6000 high-quality entries
const expansionSeeds = [
  // B
  ["Background", "Lý lịch, nền tảng", "common", "Daily Life", "A2"],
  ["Backpack", "Balo du lịch", "common", "Travel & Tourism", "A1"],
  ["Backward", "Về phía sau, lạc hậu", "common", "General", "B1"],
  ["Bacterium", "Vi khuẩn", "ielts", "Science & Health", "B2"],
  ["Badminton", "Môn cầu lông", "common", "Sports & Hobbies", "A1"],
  ["Baggage", "Hành lý", "common", "Travel & Tourism", "A2"],
  ["Baking", "Nướng bánh", "common", "Food & Dining", "A2"],
  ["Balanced", "Cân bằng, hài hòa", "common", "Health & Mind", "B1"],
  ["Balcony", "Ban công", "common", "Home & Living", "A2"],
  ["Ballot", "Lá phiếu bầu cử", "ielts", "Politics & Society", "B2"],
  ["Ballroom", "Phòng khiêu vũ", "common", "Arts & Culture", "B2"],
  ["Bamboo", "Cây tre", "common", "Nature & Environment", "A2"],
  ["Banality", "Sự tầm thường", "ielts", "Literature & Arts", "C2"],
  ["Bandage", "Băng gạc y tế", "common", "Health & Medicine", "A2"],
  ["Bandwidth", "Băng thông mạng", "toeic", "IT & Tech", "B2"],
  ["Banker", "Nhà ngân hàng", "toeic", "Finance & Banking", "B1"],
  ["Banking", "Ngành ngân hàng", "toeic", "Finance & Banking", "B1"],
  ["Bankrupt", "Phá sản", "toeic", "Finance & Corporate", "B2"],
  ["Bankruptcy", "Tình trạng phá sản", "toeic", "Finance & Corporate", "B2"],
  ["Banner", "Băng rôn quảng cáo", "common", "Marketing & PR", "A2"],
  ["Banquet", "Tiệc lớn, yến tiệc", "toeic", "Hospitality & Events", "B2"],
  ["Barbarian", "Kẻ man rợ", "common", "History & Culture", "C1"],
  ["Barefoot", "Chân đất", "common", "Daily Life", "B1"],
  ["Bargain", "Món hời, sự thương lượng", "common", "Sales & Shopping", "A2"],
  ["Bark", "Vỏ cây, tiếng chó sủa", "common", "Nature & Animals", "B1"],
  ["Barley", "Lúa mạch", "common", "Agriculture & Food", "B2"],
  ["Barometer", "Khí áp kế, thước đo", "ielts", "Science & Analytics", "C1"],
  ["Baron", "Trùm kinh doanh, nam tước", "toeic", "Business & History", "C2"],
  ["Barracks", "Trại quân sự", "common", "Military & Architecture", "B2"],
  ["Barrage", "Trận bão táp, đập ngăn", "ielts", "Warfare & Nature", "C2"],
  ["Barricade", "Rào chắn chướng ngại vật", "common", "Safety & Law", "B2"],
  ["Barrier", "Rào cản", "common", "General", "B1"],
  ["Barrister", "Luật sư tranh tụng", "toeic", "Law & Justice", "C1"],
  ["Bartender", "Nhân viên pha chế", "common", "Hospitality & Career", "A2"],
  ["Basement", "Tầng hầm", "common", "Home & Housing", "A2"],
  ["Baseline", "Vạch xuất phát, điểm mốc nền", "toeic", "Analytics & Sports", "B2"],
  ["Bashful", "E ấp, rụt rè", "common", "Psychology", "C1"],
  ["Basin", "Lưu vực sông, bồn rửa", "common", "Geography & Nature", "B2"],
  ["Basket", "Cái rổ, giỏ hàng", "common", "Shopping & Home", "A1"],
  ["Basketball", "Môn bóng rổ", "common", "Sports & Hobbies", "A1"],
  ["Bat", "Gậy bóng chày, con dơi", "common", "Sports & Animals", "A2"],
  ["Bathtub", "Bồn tắm", "common", "Home & Living", "A1"],
  ["Battery", "Pin, ắc quy", "common", "Tech & Daily Life", "A2"],
  ["Battlefield", "Chiến trường", "common", "History & Military", "B1"],
  ["Battleship", "Tàu chiến lớn", "common", "Military & Navy", "B2"],
  ["Bay", "Vịnh biển", "common", "Geography & Nature", "A2"],
  ["Bazaar", "Khu chợ phiên", "common", "Culture & Shopping", "B2"],
  ["Beacon", "Hải đăng, ngọn đèn tín hiệu", "common", "Navigation & Tech", "B2"],
  ["Bead", "Hạt cườm, giọt nước", "common", "Arts & Daily Life", "B1"],
  ["Beak", "Mỏ chim", "common", "Animals & Nature", "B1"],
  ["Beam", "Chùm sáng, xà nhà", "common", "Science & Architecture", "B2"],
  ["Bean", "Hạt đỗ, hạt đậu", "common", "Food & Agriculture", "A1"],
  ["Bearable", "Có thể chịu đựng được", "common", "Psychology", "B2"],
  ["Bearing", "Thái độ, vòng bi", "toeic", "Engineering & Mind", "B2"],
  ["Beast", "Quái thú, dã thú", "common", "Nature & Movies", "B1"],
  ["Beating", "Trận đòn, nhịp đập", "common", "Daily Life", "B1"],
  ["Beautify", "Làm đẹp, tô điểm", "common", "Arts & Lifestyle", "B2"],
  ["Beauty", "Vẻ đẹp, người đẹp", "common", "Daily Life", "A1"],
  ["Bedbug", "Con rệp giường", "common", "Animals & Health", "B2"],
  ["Bedtime", "Giờ đi ngủ", "common", "Daily Life", "A1"],
  ["Beef", "Thịt bò", "common", "Food & Dining", "A1"],
  ["Beetle", "Con bọ cánh cứng", "common", "Animals & Nature", "B1"],
  ["Beforehand", "Trước, chuẩn bị trước", "toeic", "Time & Management", "B2"],
  ["Befriend", "Kết bạn với", "common", "Relationships", "B1"],
  ["Beggar", "Người ăn xin", "common", "Society", "B1"],
  ["Beginner", "Người mới bắt đầu", "common", "Education", "A1"],
  ["Beginning", "Phần đầu, sự bắt đầu", "common", "Daily Life", "A1"],
  ["Behalf", "Thay mặt, nhân danh", "toeic", "Office & Correspondence", "B2"],
  ["Behavior", "Hành vi, cư xử", "common", "Psychology & Society", "A2"],
  ["Behavioral", "Thuộc về hành vi", "ielts", "Psychology & Science", "B2"],
  ["Behead", "Trảm quyết, chặt đầu", "common", "History & Law", "C2"],
  ["Belated", "Đến muộn, trễ hạn", "common", "Time & Daily Life", "B2"],
  ["Belief", "Niềm tin, tín ngưỡng", "common", "Psychology & Religion", "A2"],
  ["Believable", "Đáng tin tin được", "common", "Daily Life", "B1"],
  ["Believer", "Tín đồ, người tin tưởng", "common", "Religion & Mind", "B1"],
  ["Belittle", "Coi nhẹ, hạ thấp giá trị", "common", "Communication", "C1"],
  ["Belongings", "Đồ dùng cá nhân", "common", "Daily Life", "B1"],
  ["Beloved", "Được yêu thương sâu sắc", "common", "Relationships", "B2"],
  ["Benchmark", "Standard mốc đối sánh", "toeic", "Analytics & Strategy", "C1"],
  ["Benefactor", "Nhà hảo tâm, người bảo trợ", "common", "Society & Ethics", "C1"],
  ["Beneficial", "Có lợi, bổ ích", "common", "Health & Strategy", "B1"],
  ["Beneficiary", "Người thụ hưởng bảo hiểm/tài sản", "toeic", "Finance & Law", "C1"],
  ["Benefit", "Lợi ích, phúc lợi", "common", "HR & Daily Life", "A2"],
  ["Benevolence", "Lòng nhân từ", "common", "Ethics & Personal", "C1"],
  ["Benevolent", "Nhân từ, rộng lượng", "common", "Personal Qualities", "C1"],
  ["Benign", "Lành tính (khối u), ôn hòa", "ielts", "Medicine & Nature", "C1"],
  ["Bequeath", "Để lại tài sản thừa kế", "toeic", "Law & Finance", "C2"],
  ["Bequest", "Di sản thừa kế", "toeic", "Law & Finance", "C2"],
  ["Bereavement", "Nỗi đau mất người thân", "common", "Psychology & Health", "C2"],
  ["Beseech", "Văn xin, khẩn cầu", "common", "Literature & Rhetoric", "C2"],
  ["Besiege", "Bao vây, vây hãm", "common", "History & Military", "C1"],
  ["Bestow", "Tặng cho, ban tặng", "common", "Culture & Governance", "C1"],
  ["Betrayal", "Sự phản bội", "common", "Relationships & History", "B2"],
  ["Betrayer", "Kẻ phản bội", "common", "Relationships", "B2"],
  ["Beverage", "Đồ uống, thức uống", "toeic", "Food & Hospitality", "B1"],
  ["Bewilderment", "Sự bối rối hoang mang", "common", "Psychology", "C1"],
  ["Bias", "Thành kiến, thiên vị", "ielts", "Analytics & Psychology", "B2"],
  ["Biased", "Có thiên vị", "ielts", "Analytics & Society", "B2"],
  ["Bibliography", "Thư mục tài liệu tham khảo", "ielts", "Academic & Writing", "B2"],
  ["Bicentennial", "Lễ kỷ niệm 200 năm", "common", "History & Events", "C2"],
  ["Bicycle", "Xe đạp", "common", "Travel & Transport", "A1"],
  ["Bidding", "Sự đấu thầu, sự ra giá", "toeic", "Contracts & Finance", "C1"],
  ["Bilingual", "Song ngữ", "common", "Education & Language", "B1"],
  ["Bilingualism", "Khả năng sử dụng song ngữ", "ielts", "Language & Education", "B2"],
  ["Billfold", "Ví tiền nam", "common", "Fashion & Retail", "A2"],
  ["Billionaire", "Tỷ phú", "common", "Finance & Wealth", "A2"],
  ["Binoculars", "Ống nhòm", "common", "Travel & Science", "A2"],
  ["Biochemist", "Nhà hóa sinh học", "ielts", "Science & Research", "C1"],
  ["Biochemistry", "Hóa sinh học", "ielts", "Science & Research", "C1"],
  ["Biodegradable", "Phân hủy sinh học được", "ielts", "Environment & Nature", "B2"],
  ["Biodiversity", "Đa dạng sinh học", "ielts", "Environment & Nature", "C1"],
  ["Biographer", "Nhà viết viết tiểu sử", "common", "Books & Literature", "B2"],
  ["Biography", "Tiểu sử", "common", "Books & Literature", "A2"],
  ["Biological", "Thuộc sinh học", "common", "Science & Nature", "B1"],
  ["Biologist", "Nhà sinh học", "common", "Science & Career", "B1"],
  ["Biology", "Môn sinh học", "common", "Science & Education", "A2"],
  ["Biomass", "Sinh khối năng lượng", "ielts", "Environment & Energy", "C1"],
  ["Biometrics", "Sinh trắc học", "toeic", "Security & Tech", "C1"],
  ["Biophysics", "Vật lý sinh học", "ielts", "Science & Research", "C1"],
  ["Biopsy", "Sinh thiết y khoa", "ielts", "Medicine & Health", "C2"],
  ["Biosphere", "Sinh quyển trái đất", "ielts", "Environment & Geography", "C1"],
  ["Biotechnology", "Công nghệ sinh học", "ielts", "Science & Tech", "B2"],
  ["Bipartisan", "Có hai đảng tham gia", "ielts", "Politics & Governance", "C2"],
  ["Birch", "Cây bạch dương", "common", "Nature & Trees", "B2"],
  ["Birdcage", "Lồng chim", "common", "Home & Animals", "A2"],
  ["Birthmark", "Vết bớt bẩm sinh", "common", "Health & Body", "B1"],
  ["Birthplace", "Nơi sinh", "common", "Daily Life", "A2"],  ["Biscuit", "Bánh quy", "common", "Food & Dining", "A1"],
  ["Bishop", "Giám mục, quân tượng bàn cờ", "common", "Religion & Games", "B2"],
  ["Bite-sized", "Kích thước nhỏ vừa miếng", "common", "Food & Design", "B2"],
  ["Bitterness", "Vị đắng, sự cay đắng", "common", "Psychology & Food", "B2"],
  ["Bizarre", "Kỳ quái, kỳ lạ", "common", "General", "B2"],
  ["Blackboard", "Bảng đen", "common", "Education", "A1"],  ["Blackmail", "Sự tống tiền", "common", "Law & Crime", "B2"],
  ["Blacksmith", "Thợ rèn", "common", "History & Crafts", "B2"],
  ["Bladder", "Bóng bàng quang, túi hơi", "common", "Health & Anatomy", "B2"],
  ["Blanket", "Cái chăn, lớp bao phủ", "common", "Home & Living", "A1"],
  ["Blasphemy", "Tội báng bổ tôn giáo", "common", "Religion & Law", "C2"],
  ["Blast", "Vụ nổ, luồng gió mạnh", "common", "Safety & Nature", "B2"],
  ["Blatant", "Trắng trợn, hiển nhiên", "ielts", "Communication & Law", "C1"],
  ["Bleach", "Thanh tẩy, thuốc tẩy", "common", "Home & Chemicals", "B2"],
  ["Bleak", "U ám, ảm đạm", "common", "Weather & Psychology", "C1"],
  ["Bleeding", "Sự chảy máu", "common", "Health & Safety", "B1"],
  ["Blemish", "Vết nhược điểm tì vết", "common", "General & Beauty", "B2"],
  ["Blend", "Phối trộn, hỗn hợp", "common", "Food & Arts", "B1"],
  ["Blender", "Máy máy sinh tố", "common", "Home & Appliances", "A2"],
  ["Blessing", "Phước lành, sự ban phúc", "common", "Religion & Life", "B1"],
  ["Blight", "Tai họa, bệnh thối cây", "common", "Agriculture & Society", "C2"],
  ["Blindfold", "Băng đeo che mắt", "common", "Daily Life & Games", "B2"],
  ["Blindness", "Sự mù lòa", "common", "Health & Mind", "B2"],
  ["Blissful", "Hạnh phúc tràn ngập", "common", "Psychology", "C1"],
  ["Blister", "Vết phồng rộp da", "common", "Health & Body", "B2"],
  ["Blizzard", "Trận bão tuyết", "common", "Weather & Hazards", "B2"],
  ["Blockade", "Sự phong tỏa quân sự/thương mại", "common", "Military & Trade", "C1"],
  ["Blockbuster", "Phim bom tấn hit lớn", "common", "Movies & Culture", "B1"],
  ["Bloodstream", "Dòng máu trong cơ thể", "common", "Health & Science", "B2"],
  ["Bloodvessel", "Mạch máu", "common", "Health & Anatomy", "B2"],
  ["Blossom", "Hoa nở, sự phát triển rực rỡ", "common", "Nature & Life", "B1"],
  ["Blouse", "Áo sơ mi nữ", "common", "Fashion & Style", "A1"],
  ["Blowout", "Sự nổ lốp xe, tiệc lớn", "common", "Auto & Life", "B2"],
  ["Blueprint", "Bản thiết kế chi tiết", "toeic", "Architecture & Strategy", "B2"],
  ["Bluff", "Lời đe dọa suông, vách đá dựng đứng", "common", "Psychology & Nature", "C1"],
  ["Blunder", "Sai lầm ngớ ngẩn", "common", "Work & Daily Life", "B2"],
  ["Bluntness", "Tính thẳng thừng thô ráp", "common", "Communication", "C1"],
  ["Blurry", "Mờ nhạt, không rõ nét", "common", "Daily Life & Tech", "A2"],
  ["Boarding", "Sự lên tàu/máy bay", "toeic", "Travel & Aviation", "B1"],
  ["Boardroom", "Phòng họp hội đồng quản trị", "toeic", "Office & Corporate", "B2"],
  ["Boastful", "Khoe khoang khoác khoác", "common", "Personal Qualities", "B2"],
  ["Bodyguard", "Vệ sĩ bảo vệ", "common", "Safety & Security", "A2"],
  ["Boiler", "Nồi hơi công nghiệp", "toeic", "Manufacturing & Energy", "B2"],
  ["Boisterous", "Háo hức huyên náo", "common", "Psychology", "C1"],
  ["Boldness", "Sự táo bạo, sự dũng cảm", "common", "Personal Qualities", "B2"],
  ["Bolster", "Củng cố, gối ôm dài", "ielts", "Strategy & Governance", "C1"],
  ["Bombardment", "Trận nã pháo dồn dập", "common", "Warfare & Media", "C1"],
  ["Bombshell", "Tin chấn động đột ngột", "common", "News & Culture", "C1"],
  ["Bondage", "Sự nô dịch, xiềng xích", "common", "History & Law", "C2"],
  ["Bookcase", "Tủ sách", "common", "Home & Furniture", "A1"],
  ["Bookkeeper", "Nhân viên ghi sổ kế toán", "toeic", "Finance & Accounting", "B2"],
  ["Bookkeeping", "Sự ghi sổ kế toán", "toeic", "Finance & Accounting", "B2"],
  ["Booklet", "Cuốn sách nhỏ hướng dẫn", "toeic", "Office & PR", "A2"],
  ["Bookmark", "Thẻ đánh dấu trang sách", "common", "Books & IT", "A1"],
  ["Bookstore", "Hiệu sách", "common", "Shopping & Books", "A1"],
  ["Boomerang", "Gậy quay về, tác dụng ngược", "common", "Culture & Strategy", "B2"],
  ["Boosting", "Sự thúc đẩy gia tăng", "common", "Marketing & Strategy", "B1"],
  ["Bootcamp", "Trại huấn luyện cấp tốc", "toeic", "Education & IT", "B2"],
  ["Bootleg", "Hàng lậu đĩa lậu", "common", "Commerce & Law", "C1"],
  ["Borderline", "Ranh giới mơ hồ", "common", "Psychology & Analytics", "B2"],
  ["Boredom", "Sự buồn chán", "common", "Psychology", "A2"],
  ["Borough", "Quận thị trấn tự trị", "common", "City & Geography", "B2"],
  ["Botanist", "Nhà thực vật học", "common", "Science & Nature", "B2"],
  ["Botanical", "Thuộc về thực vật", "ielts", "Science & Nature", "B2"],
  ["Botany", "Thực vật học", "ielts", "Science & Nature", "B2"],
  ["Bottleneck", "Điểm nghẽn tiến độ/giao thông", "toeic", "Logistics & Strategy", "C1"],
  ["Bottomless", "Không đáy, vô tận", "common", "General", "B2"],
  ["Boulder", "Tảng đá lớn tròn", "common", "Nature & Geology", "B2"],
  ["Boulevard", "Đại lộ rộng lớn", "common", "City & Travel", "B1"],
  ["Bounciness", "Độ đàn hồi nẩy", "common", "Sports & Physics", "B2"],
  ["Boundary", "Ranh giới biên giới", "common", "Geography & Strategy", "B1"],
  ["Bountiful", "Dồi dào phong phú", "common", "Nature & Agriculture", "C1"],
  ["Bounty", "Tiền thưởng hậu tạ, sự dồi dào", "common", "Law & Nature", "B2"],
  ["Bouquet", "Bó hoa tươi", "common", "Culture & Events", "B1"],
  ["Bourgeoisie", "Giai cấp tư sản", "ielts", "History & Sociology", "C2"],
  ["Boutique", "Cửa hàng thời trang nhỏ", "common", "Shopping & Fashion", "B1"],
  ["Bovine", "Thuộc họ bò, chậm chạp", "common", "Animals & Nature", "C2"],
  ["Bowler", "Cầu thủ ném bóng kịch/nón dạ", "common", "Sports & Fashion", "B2"],
  ["Boxing", "Môn quyền anh", "common", "Sports & Hobbies", "A1"],
  ["Boycott", "Cuộc tẩy chay", "common", "Commerce & Politics", "B2"],
  ["Boyhood", "Thời thơ ấu nam", "common", "Life & Family", "B1"],
  ["Bracelet", "Vòng tay trang sức", "common", "Fashion & Style", "A2"],
  ["Bracket", "Dấu ngoặc đơn, khung hạng mức", "toeic", "Finance & IT", "B2"],
  ["Braiding", "Sự tết tóc/dây", "common", "Fashion & Crafts", "B2"],
  ["Brainchild", "Ý tưởng phát minh độc đáo", "toeic", "Innovation & Business", "C1"],
  ["Brainstorming", "Buổi động não tìm ý tưởng", "toeic", "Office & Strategy", "B1"],
  ["Brainwash", "Sự tẩy não", "common", "Psychology & Politics", "B2"],
  ["Brainwave", "Ý tưởng bất ngờ lóe sáng", "common", "Psychology & Mind", "B2"],
  ["Braking", "Sự phanh xe", "common", "Auto & Safety", "B1"],
  ["Bramble", "Bụi cây gai", "common", "Nature & Plants", "B2"],
  ["Branded", "Mang thương hiệu độc quyền", "toeic", "Marketing & Trade", "B1"],
  ["Brand-name", "Hàng hiệu có tiếng", "common", "Shopping & Style", "A2"],
  ["Brat", "Đứa trẻ hỗn xược", "common", "Daily Life", "C1"],
  ["Bravado", "Sự phô trương dũng cảm giả tạo", "common", "Psychology", "C2"],
  ["Bravery", "Sự dũng cảm ngoan cường", "common", "Personal Qualities", "B1"],
  ["Brawling", "Vụ ẩu đả ồn ào", "common", "Law & Society", "C1"],
  ["Brazenness", "Thái độ trơ tráo trơ chẽn", "common", "Psychology", "C2"],
  ["Breakdown", "Sự hỏng hóc máy, sự sụp đổ", "common", "Tech & Health", "B1"],
  ["Breakthrough", "Bước đột phá lớn", "common", "Science & Strategy", "B2"],
  ["Breakup", "Sự chia tay, sự tan rã", "common", "Relationships", "A2"],
  ["Breakwater", "Đê đập chắn sóng", "common", "Engineering & Ocean", "B2"],
  ["Breastfeed", "Cho con bú sữa mẹ", "common", "Health & Family", "B2"],
  ["Breathable", "Thoáng khí (vải)", "common", "Fashion & Sports", "B2"],
  ["Breathless", "Nín thở, hổn hển", "common", "Daily Life", "B1"],
  ["Breathtaking", "Đẹp ngoạn mục ngạt thở", "common", "Nature & Travel", "B2"],
  ["Breed", "Giống loài, nhân giống", "common", "Animals & Nature", "B2"],
  ["Breeder", "Người phối nhân giống vật nuôi", "common", "Animals & Business", "B2"],
  ["Breeding", "Sự sinh sản nhân giống", "common", "Animals & Nature", "B2"],
  ["Breeze", "Cơn gió nhẹ", "common", "Weather & Nature", "A2"],
  ["Brevity", "Tính ngắn gọn súc tích", "ielts", "Writing & Language", "C1"],
  ["Brewery", "Nhà máy nấu bia", "common", "Industry & Food", "B2"],
  ["Bribery", "Hành vi hối lộ", "toeic", "Law & Ethics", "B2"],
  ["Bricklayer", "Thợ phụ thợ xây", "common", "Construction & Work", "B2"],
  ["Bridegroom", "Chú rể", "common", "Family & Culture", "B1"],
  ["Bridle", "Cương ngựa, sự kiềm chế", "common", "Animals & Mind", "C1"],
  ["Briefcase", "Cặp táp văn phòng", "toeic", "Office Supplies", "A2"],
  ["Briefing", "Buổi họp hướng dẫn nhanh", "toeic", "Office & Operations", "B2"],
  ["Brightness", "Độ sáng, sự thông minh", "common", "Tech & Mind", "B1"],
  ["Brilliance", "Sự tài cao xuất chúng, độ sáng rực", "common", "Mind & Arts", "B2"],
  ["Brimming", "Tràn đầy tới miệng", "common", "Daily Life", "C1"],
  ["Brine", "Nước muối biển", "common", "Science & Food", "B2"],
  ["Briskness", "Sự nhanh nhẹn tươi tắn", "common", "Personal Qualities", "B2"],
  ["Broadband", "Mạng internet băng thông rộng", "common", "IT & Tech", "B1"],
  ["Broadcasting", "Ngành phát thanh truyền hình", "common", "Media & Tech", "B2"],
  ["Broadsheet", "Báo khổ lớn chính thống", "ielts", "Media & Publishing", "C1"],
  ["Brochure", "Cuốn sách nhỏ quảng cáo", "toeic", "Marketing & PR", "B1"],
  ["Brokerage", "Công ty dịch vụ môi giới", "toeic", "Finance & Trading", "C1"],
  ["Bronchitis", "Bệnh viêm phế quản", "common", "Health & Medicine", "B2"],
  ["Bronze", "Đồng thau, huy chương đồng", "common", "Sports & History", "A2"],
  ["Brooch", "Trâm cài áo trang sức", "common", "Fashion & Style", "B2"],
  ["Brood", "Đàn con (chim/gà), sự trăn trở", "common", "Animals & Mind", "C1"],
  ["Brotherhood", "Tình anh em, hội huynh đệ", "common", "Society & Life", "B2"],
  ["Browbeat", "Đe dọa ép buộc", "common", "Psychology", "C2"],
  ["Brownie", "Bánh sô-cô-la mềm", "common", "Food & Dining", "A2"],
  ["Browsing", "Sự duyệt web, đọc lướt", "common", "IT & Shopping", "A2"],
  ["Bruise", "Vết bầm tím", "common", "Health & Safety", "B1"],
  ["Brutality", "Sự tàn bạo dã man", "common", "History & Law", "B2"],
  ["Bubble", "Bong bóng, bong bóng kinh tế", "common", "Finance & Daily Life", "A2"],
  ["Buckle", "Cái khóa dây lưng", "common", "Fashion & Auto", "B1"],
  ["Budgetary", "Thuộc về ngân sách", "toeic", "Finance & Accounting", "B2"],
  ["Buffet", "Tiệc ăn tự chọn", "common", "Food & Hospitality", "A2"],
  ["Buggy", "Xe đẩy em bé, xe địa hình nhỏ", "common", "Family & Auto", "B1"],
  ["Bulbil", "Chồi củ nhỏ", "common", "Nature & Plants", "C2"],
  ["Bulging", "Phồng to trô ra", "common", "General", "B2"],
  ["Bulkhead", "Vách ngăn trên tàu/máy bay", "common", "Aviation & Ocean", "C1"],
  ["Bulky", "Cồng kềnh to lớn", "common", "Logistics & Shipping", "B2"],
  ["Bullion", "Vàng thỏi, bạc thỏi", "toeic", "Finance & Banking", "C2"],
  ["Bullseye", "Vòng tròn tâm điểm mục tiêu", "common", "Sports & Games", "B2"],
  ["Bullshit", "Lời nhảm nhí xàm ngôn", "common", "Slang & Daily Life", "C1"],
  ["Bully", "Kẻ hay bắt nạt", "common", "School & Society", "B1"],
  ["Bullying", "Hành vi bắt nạt", "common", "School & Society", "B1"],
  ["Bulwark", "Bức tường thành bảo vệ", "common", "History & Strategy", "C2"],
  ["Bumper", "Cản trước xe ô tô, được mùa lớn", "common", "Auto & Agriculture", "B2"],
  ["Bungalow", "Nhà gỗ một tầng", "common", "Real Estate & Travel", "B1"],
  ["Bungling", "Thực hiện vụng về làm hỏng", "common", "Work & Life", "C1"],
  ["Bunk", "Giường tầng", "common", "Home & Furniture", "A2"],
  ["Bunker", "Hầm công sự quân sự", "common", "Military & Architecture", "B2"],
  ["Buoyancy", "Sức nổi, sự hưng phấn thị trường", "common", "Physics & Finance", "C1"],
  ["Buoyant", "Có sức nổi, thị trường tươi sáng", "toeic", "Finance & Markets", "C1"],
  ["Burden", "Gánh nặng trách nhiệm", "common", "Psychology & Strategy", "B2"],
  ["Burdensome", "Nặng nề phiền phức", "common", "Work & Strategy", "C1"],
  ["Bureau", "Cục, vụ, văn phòng đại lý", "toeic", "Government & Office", "B2"],
  ["Bureaucracy", "Bộ máy quan liêu", "ielts", "Politics & Governance", "C1"],
  ["Bureaucrat", "Quan chức hành chính", "common", "Government", "C1"],
  ["Bureaucratic", "Mang tính quan liêu thủ tục", "ielts", "Politics & Governance", "C1"],
  ["Burglar", "Kẻ trộm đột nhập", "common", "Law & Crime", "B1"],
  ["Burglary", "Vụ trộm đột nhập", "common", "Law & Crime", "B1"],
  ["Burial", "Lễ an táng", "common", "Culture & Life", "B2"],
  ["Burlap", "Vải bao tải gai", "common", "Textile & Materials", "B2"],
  ["Burlesque", "Kịch trào phúng", "common", "Arts & Culture", "C2"],
  ["Burly", "Vạm vỡ lực lưỡng", "common", "Personal Qualities", "C1"],
  ["Burnout", "Sự kiệt sức vì công việc", "toeic", "HR & Health", "B2"],
  ["Burrow", "Hang động vật đào dưới đất", "common", "Animals & Nature", "B2"],
  ["Bustle", "Sự hối hả nhộn nhịp", "common", "City & Life", "B2"],
  ["Butcher", "Gã đồ tể, người bán thịt", "common", "Food & Career", "A2"],
  ["Buttery", "Có vị bơ, béo ngậy", "common", "Food & Taste", "B1"],
  ["Bystander", "Người đứng ngoài cuộc chứng kiến", "common", "Society & Life", "B2"],
  ["Byte", "Đơn vị dữ liệu máy tính", "common", "IT & Tech", "A2"],
  ["Byzantine", "Phức tạp chằng chịt", "ielts", "History & Strategy", "C2"]
];

expansionSeeds.forEach(item => {
  addWord(item[0], item[1], item[2], item[3], item[4]);
});

console.log("Master count after expansion seeds:", masterMap.size);

// Re-generate numerical indexed array
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
 * Filter vocabulary by Pool, Level, Category, and Count
 */
export function getVocabPool({ pool = 'all', level = 'all', category = 'all', count = null } = {}) {
  let filtered = VOCAB_BANK;

  if (pool && pool !== 'all') {
    filtered = filtered.filter(item => item.pool === pool);
  }

  if (level && level !== 'all') {
    filtered = filtered.filter(item => item.level.toLowerCase() === level.toLowerCase());
  }

  if (category && category !== 'all') {
    filtered = filtered.filter(item => item.category && item.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (count && typeof count === 'number' && count > 0) {
    return [...filtered].sort(() => 0.5 - Math.random()).slice(0, count);
  }

  return filtered;
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
console.log("Successfully generated src/data/vocab-bank.js!");
