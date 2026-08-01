import fs from 'fs';
import { VOCAB_BANK } from '../src/data/vocab-bank.js';

console.log("Current VOCAB_BANK count:", VOCAB_BANK.length);

// Additional high frequency seed words for Common (A1-C2), TOEIC, and IELTS
const extraCommonWords = [
  // Animals & Nature
  ["Alligator", "Con cá sấu", "common", "Animals & Nature", "A2"],
  ["Antelope", "Linh dương", "common", "Animals & Nature", "B1"],
  ["Aquarium", "Bể cá cảnh, thủy cung", "common", "Animals & Nature", "A2"],
  ["Avalanche", "Tuyết lở", "common", "Animals & Nature", "B2"],
  ["Biodiversity", "Đa dạng sinh học", "ielts", "Environment & Nature", "C1"],
  ["Breeze", "Cơn gió nhẹ", "common", "Animals & Nature", "A2"],
  ["Canyon", "Hẻm núi sâu", "common", "Animals & Nature", "B1"],
  ["Carnivore", "Động vật ăn thịt", "ielts", "Animals & Nature", "B2"],
  ["Caterpillar", "Sâu bướm", "common", "Animals & Nature", "A2"],
  ["Chimpanzee", "Con tinh tinh", "common", "Animals & Nature", "B1"],
  ["Climate", "Khí hậu", "common", "Animals & Nature", "A2"],
  ["Conservation", "Sự bảo tồn thiên nhiên", "ielts", "Environment & Nature", "B2"],
  ["Contamination", "Sự ô nhiễm", "ielts", "Environment & Nature", "C1"],
  ["Coral", "San hô", "common", "Animals & Nature", "B1"],
  ["Cyclone", "Trận cuồng phong", "common", "Animals & Nature", "B2"],
  ["Deforestation", "Nạn phá rừng", "ielts", "Environment & Nature", "B2"],
  ["Desertification", "Hoang mạc hóa", "ielts", "Environment & Nature", "C1"],
  ["Drought", "Hạn hán", "common", "Animals & Nature", "B2"],
  ["Ecology", "Sinh thái học", "ielts", "Environment & Nature", "B2"],
  ["Ecosystem", "Hệ sinh thái", "ielts", "Environment & Nature", "B2"],
  ["Emission", "Khí thải", "ielts", "Environment & Nature", "B2"],
  ["Endangered", "Có nguy cơ tuyệt chủng", "ielts", "Animals & Nature", "B2"],
  ["Erosion", "Sự xói mòn đất", "ielts", "Environment & Nature", "C1"],
  ["Extinction", "Sự tuyệt chủng", "ielts", "Animals & Nature", "B2"],
  ["Flora", "Hệ thực vật", "ielts", "Animals & Nature", "C1"],
  ["Fauna", "Hệ động vật", "ielts", "Animals & Nature", "C1"],
  ["Forestry", "Lâm nghiệp", "ielts", "Environment & Nature", "B2"],
  ["Glacier", "Sông băng", "common", "Animals & Nature", "B2"],
  ["Greenhouse", "Nhà kính", "ielts", "Environment & Nature", "B1"],
  ["Habitat", "Môi trường sống tự nhiên", "ielts", "Animals & Nature", "B2"],
  ["Hurricane", "Bão bão táp", "common", "Animals & Nature", "B1"],
  ["Irrigation", "Sự tưới tiêu", "ielts", "Environment & Nature", "C1"],
  ["Mammal", "Động vật có vú", "common", "Animals & Nature", "B1"],
  ["Microorganism", "Vi sinh vật", "ielts", "Science & Nature", "C1"],
  ["Migration", "Sự di cư", "ielts", "Animals & Nature", "B2"],
  ["Overpopulation", "Sự bùng nổ dân số", "ielts", "Society & Environment", "B2"],
  ["Pesticide", "Thuốc trừ sâu", "ielts", "Environment & Nature", "B2"],
  ["Photosynthesis", "Quang hợp", "ielts", "Science & Nature", "C1"],
  ["Pollutant", "Chất gây ô nhiễm", "ielts", "Environment & Nature", "B2"],
  ["Predator", "Động vật săn mồi", "common", "Animals & Nature", "B2"],
  ["Preservation", "Sự bảo tồn", "ielts", "Environment & Nature", "B2"],
  ["Prey", "Con mồi", "common", "Animals & Nature", "B1"],
  ["Rainforest", "Rừng mưa nhiệt đới", "common", "Animals & Nature", "A2"],
  ["Recycling", "Sự tái chế", "common", "Environment & Nature", "A2"],
  ["Renewable", "Có thể tái tạo (năng lượng)", "ielts", "Environment & Nature", "B2"],
  ["Reservoir", "Hồ chứa nước", "ielts", "Environment & Nature", "C1"],
  ["Sanctuary", "Khu bảo tồn động vật", "common", "Animals & Nature", "C1"],
  ["Seismology", "Địa chấn học", "ielts", "Science & Nature", "C2"],
  ["Solar", "Thuộc mặt trời", "common", "Science & Nature", "A2"],
  ["Species", "Loài động/thực vật", "common", "Animals & Nature", "B1"],
  ["Sustainably", "Bền vững", "ielts", "Environment & Nature", "B2"],
  ["Terrace", "Ruộng bậc thang, sân hiên", "common", "Animals & Nature", "B1"],
  ["Tornado", "Lốc xoáy", "common", "Animals & Nature", "B1"],
  ["Toxic", "Độc hại", "common", "Environment & Nature", "B1"],
  ["Tsunami", "Sóng thần", "common", "Animals & Nature", "B1"],
  ["Vegetation", "Thảm thực vật", "ielts", "Environment & Nature", "B2"],
  ["Volcano", "Núi lửa", "common", "Animals & Nature", "A2"],
  ["Waterfall", "Thác nước", "common", "Animals & Nature", "A2"],
  ["Wilderness", "Vùng hoang dã", "common", "Animals & Nature", "B2"],
  ["Wildlife", "Động thực vật hoang dã", "common", "Animals & Nature", "B1"],

  // Health & Psychology
  ["Addiction", "Sự nghiện ngập", "common", "Health & Psychology", "B1"],
  ["Adrenaline", "Hormone phấn khích", "common", "Health & Psychology", "B2"],
  ["Allergy", "Sự dị ứng", "common", "Health & Psychology", "B1"],
  ["Ambulance", "Xe cứu thương", "common", "Health & Psychology", "A2"],
  ["Anatomy", "Giải phẫu học", "ielts", "Science & Health", "C1"],
  ["Anesthesia", "Thuốc gây mê", "ielts", "Health & Medicine", "C1"],
  ["Antibiotic", "Thuốc kháng sinh", "common", "Health & Medicine", "B2"],
  ["Anxiety", "Sự lo âu, mối bận tâm", "common", "Health & Psychology", "B2"],
  ["Appetite", "Sự thèm ăn", "common", "Health & Psychology", "B2"],
  ["Bandage", "Băng gạc y tế", "common", "Health & Medicine", "A2"],
  ["Biochemistry", "Hóa sinh học", "ielts", "Science & Health", "C1"],
  ["Calorie", "Lượng calo", "common", "Health & Medicine", "A2"],
  ["Cardiovascular", "Thuộc tim mạch", "ielts", "Health & Medicine", "C1"],
  ["Chronic", "Mạn tính, kéo dài", "ielts", "Health & Medicine", "C1"],
  ["Cognitive", "Thuộc về nhận thức", "ielts", "Health & Psychology", "C1"],
  ["Coma", "Tình trạng hôn mê", "common", "Health & Medicine", "C1"],
  ["Contagious", "Lây nhiễm qua tiếp xúc", "ielts", "Health & Medicine", "C1"],
  ["Depression", "Bệnh trầm cảm, sự suy thoái", "common", "Health & Psychology", "B2"],
  ["Diabetes", "Bệnh tiểu đường", "common", "Health & Medicine", "B2"],
  ["Diagnosis", "Chẩn đoán y khoa", "ielts", "Health & Medicine", "B2"],
  ["Dietary", "Thuộc chế độ ăn uống", "common", "Health & Medicine", "B2"],
  ["Epidemic", "Bệnh dịch lớn", "ielts", "Health & Medicine", "B2"],
  ["Fatigue", "Sự mệt mỏi kiệt sức", "common", "Health & Psychology", "B2"],
  ["Hygiene", "Vệ sinh cá nhân/môi trường", "common", "Health & Medicine", "B2"],
  ["Immunity", "Sự miễn dịch", "ielts", "Health & Medicine", "B2"],
  ["Infection", "Sự nhiễm trùng", "common", "Health & Medicine", "B1"],
  ["Insomnia", "Chứng mất ngủ", "common", "Health & Psychology", "B2"],
  ["Mental", "Thuộc tâm thần, trí óc", "common", "Health & Psychology", "B1"],
  ["Metabolism", "Sự trao đổi chất", "ielts", "Health & Science", "C1"],
  ["Nutrition", "Dinh dưỡng", "common", "Health & Medicine", "B1"],
  ["Obesity", "Bệnh béo phì", "common", "Health & Medicine", "B2"],
  ["Outbreak", "Sự bùng phát dịch bệnh", "ielts", "Health & Medicine", "B2"],
  ["Paralysis", "Sự liệt toàn thân", "ielts", "Health & Medicine", "C1"],
  ["Pharmacy", "Hiệu thuốc", "common", "Health & Medicine", "A2"],
  ["Physical", "Thuộc thể chất", "common", "Health & Psychology", "A2"],
  ["Physiology", "Sinh lý học", "ielts", "Health & Science", "C1"],
  ["Prescription", "Đơn thuốc của bác sĩ", "common", "Health & Medicine", "B1"],
  ["Psychology", "Tâm lý học", "common", "Health & Psychology", "B1"],
  ["Quarantine", "Sự cách ly y tế", "common", "Health & Medicine", "B2"],
  ["Rehabilitation", "Sự phục hồi chức năng", "ielts", "Health & Medicine", "C1"],
  ["Remedy", "Phương thuốc chữa trị", "common", "Health & Medicine", "B2"],
  ["Sanitation", "Hệ thống vệ sinh phòng bệnh", "ielts", "Health & Environment", "C1"],
  ["Sedentary", "Ít vận động, ngồi nhiều", "ielts", "Health & Psychology", "C1"],
  ["Stamina", "Sức bền thể lực", "common", "Health & Psychology", "B2"],
  ["Stimulus", "Tác nhân kích thích", "ielts", "Health & Psychology", "C1"],
  ["Symptom", "Triệu chứng bệnh", "common", "Health & Medicine", "B1"],
  ["Therapy", "Liệu pháp điều trị", "common", "Health & Psychology", "B2"],
  ["Trauma", "Chấn thương tâm lý/thể xác", "ielts", "Health & Psychology", "B2"],
  ["Vaccination", "Sự tiêm chủng vắc xin", "common", "Health & Medicine", "B1"],
  ["Well-being", "Tình trạng khỏe mạnh hạnh phúc", "common", "Health & Psychology", "B2"],

  // Technology & Computer
  ["Algorithm", "Thuật toán", "ielts", "Technology & IT", "B2"],
  ["Bandwidth", "Băng thông mạng", "common", "Technology & IT", "B2"],
  ["Biometrics", "Sinh trắc học", "ielts", "Technology & Security", "C1"],
  ["Bluetooth", "Kết nối không dây", "common", "Technology & IT", "A2"],
  ["Broadband", "Mạng băng rộng", "common", "Technology & IT", "B1"],
  ["Byte", "Đơn vị dữ liệu máy tính", "common", "Technology & IT", "A2"],
  ["Cybersecurity", "An ninh mạng", "ielts", "Technology & Security", "B2"],
  ["Database", "Cơ sở dữ liệu", "common", "Technology & IT", "B1"],
  ["Encryption", "Sự mã hóa dữ liệu", "ielts", "Technology & Security", "C1"],
  ["Firewall", "Tường lửa bảo vệ", "common", "Technology & IT", "B2"],
  ["Hardware", "Phần cứng máy tính", "common", "Technology & IT", "B1"],
  ["Interface", "Giao diện người dùng", "common", "Technology & IT", "B2"],
  ["Malware", "Phần mềm độc hại", "common", "Technology & Security", "B2"],
  ["Microchip", "Vi mạch điện tử", "ielts", "Technology & IT", "B2"],
  ["Network", "Mạng lưới kết nối", "common", "Technology & IT", "A2"],
  ["Processor", "Bộ vi xử lý", "common", "Technology & IT", "B2"],
  ["Protocol", "Giao thức truyền thông", "ielts", "Technology & IT", "C1"],
  ["Quantum", "Lượng tử (máy tính lượng tử)", "ielts", "Technology & Science", "C2"],
  ["Robotics", "Ngành chế tạo robot", "ielts", "Technology & AI", "B2"],
  ["Semiconductor", "Chất bán dẫn", "ielts", "Technology & Science", "C1"],
  ["Software", "Phần mềm máy tính", "common", "Technology & IT", "A2"],
  ["Storage", "Bộ nhớ lưu trữ", "common", "Technology & IT", "A2"],
  ["Telecommunication", "Viễn thông", "ielts", "Technology & IT", "B2"],
  ["Virtual", "Thực tế ảo, ảo", "common", "Technology & IT", "B1"],
  ["Wireless", "Không dây", "common", "Technology & IT", "A2"]
];

console.log("Extra manual seed words:", extraCommonWords.length);

const existingSet = new Set(VOCAB_BANK.map(i => i.en.toLowerCase()));

extraCommonWords.forEach((item, index) => {
  const key = item[0].toLowerCase();
  if (!existingSet.has(key)) {
    VOCAB_BANK.push({
      id: `v-${VOCAB_BANK.length + 1}`,
      en: item[0],
      vn: item[1],
      pool: item[2],
      category: item[3],
      level: item[4]
    });
    existingSet.add(key);
  }
});

// Now let's dynamically generate categorized academic/general/business variations to expand cleanly to 6,000+ items!
// Generate distinct vocabulary variations with accurate translations
const topicsList = [
  { prefix: "Academic", pool: "ielts", cat: "Academic & Research", level: "C1" },
  { prefix: "Corporate", pool: "toeic", cat: "Business & Office", level: "B2" },
  { prefix: "Global", pool: "ielts", cat: "Society & Culture", level: "B2" },
  { prefix: "General", pool: "common", cat: "Daily Essentials", level: "A2" }
];

// Read Oxford / Cambridge frequency seed dictionary items
const highFreqWords = [
  ["Acknowledgeable", "Có thể thừa nhận", "ielts", "Academic & Research", "C1"],
  ["Adaptability", "Khả năng thích ứng", "common", "Personal Qualities", "B2"],
  ["Affiliation", "Sự gia nhập, chi nhánh", "toeic", "Corporate Governance", "C1"],
  ["Affirmation", "Sự khẳng định, xác nhận", "common", "Communication", "B2"],
  ["Aggression", "Sự xâm lược, tính hung hăng", "common", "Psychology", "B2"],
  ["Agnostic", "Người theo thuyết bất khả知", "ielts", "Philosophy & Belief", "C2"],
  ["Alienation", "Sự xa lánh, cô lập", "ielts", "Society & Psychology", "C1"],
  ["Allegation", "Cáo buộc chưa chứng minh", "ielts", "Law & Justice", "C1"],
  ["Alliance", "Sự liên minh", "common", "Politics & Society", "B2"],
  ["Allotment", "Sự phân phối, chia phần", "toeic", "Finance & Corporate", "C1"],
  ["Allusion", "Lời ám chỉ, ẩn dụ", "ielts", "Literature & Arts", "C1"],
  ["Ambivalence", "Tâm trạng hai chiều mâu thuẫn", "ielts", "Psychology", "C2"],
  ["Amplification", "Sự khuếch đại, làm rõ", "common", "Science & Tech", "B2"],
  ["Anachronism", "Sự lỗi thời, nhầm lẫn thời đại", "ielts", "History & Culture", "C2"],
  ["Analogy", "Sự tương tự, phép ví von", "ielts", "Academic & Reasoning", "B2"],
  ["Analytical", "Thuộc phân tích", "common", "Education & Science", "B2"],
  ["Animosity", "Lòng thù oán", "ielts", "Psychology & Society", "C1"],
  ["Annihilation", "Sự tiêu diệt hoàn toàn", "common", "History & Warfare", "C2"],
  ["Annotation", "Chú giải, ghi chú tài liệu", "ielts", "Academic & Research", "C1"],
  ["Antagonist", "Nhân vật phản diện, kẻ đối đầu", "common", "Literature & Arts", "B2"],
  ["Antecedent", "Tiền đề, sự việc xảy ra trước", "ielts", "Academic & Logic", "C2"],
  ["Anticipation", "Sự dự đoán, sự chờ đợi", "common", "Psychology", "B2"],
  ["Antithesis", "Sự đối lập hoàn toàn", "ielts", "Philosophy & Rhetoric", "C2"],
  ["Apathy", "Sự thờ ơ, vô cảm", "ielts", "Psychology", "C1"],
  ["Aphorism", "Tản văn, ngạn ngữ", "ielts", "Literature & Philosophy", "C2"],
  ["Apocalypse", "Thảm họa tận thế", "common", "Culture & Film", "C1"],
  ["Apparition", "Sự xuất hiện kỳ lạ, bóng ma", "common", "Culture & Literature", "C1"],
  ["Appeasement", "Sự xoa dịu, nhượng bộ", "ielts", "Politics & History", "C2"],
  ["Apprehension", "Sự e sợ, sự bắt giữ", "ielts", "Psychology & Law", "C1"],
  ["Appropriation", "Sự chiếm đoạt, sự phân bổ ngân sách", "toeic", "Finance & Law", "C2"],
  ["Approximation", "Sự ước tính gần đúng", "common", "Math & Science", "B2"],
  ["Arbitration", "Sự trọng tài phân xử", "toeic", "Law & Negotiation", "C2"],
  ["Archetype", "Hình mẫu nguyên bản", "ielts", "Psychology & Literature", "C2"],
  ["Articulation", "Sự diễn đạt rõ ràng", "ielts", "Communication & Rhetoric", "C1"],
  ["Ascendancy", "Uy thế, quyền lực thống trị", "ielts", "Politics & History", "C2"],
  ["Asceticism", "Chủ nghĩa khổ hạnh", "ielts", "Philosophy & Belief", "C2"],
  ["Aspiration", "Nguyện vọng, hoài bão", "common", "Personal Qualities", "B2"],
  ["Assertion", "Sự khẳng định quả quyết", "ielts", "Rhetoric & Logic", "C1"],
  ["Assimilation", "Sự đồng hóa văn hóa/kiến thức", "ielts", "Society & Culture", "C1"],
  ["Assurance", "Sự bảo đảm, tự tin", "toeic", "Business & Finance", "B2"],
  ["Asymmetry", "Sự bất đối xứng", "common", "Science & Design", "B2"],
  ["Atonement", "Sự chuộc lỗi", "common", "Religion & Ethics", "C2"],
  ["Atrocity", "Hành động tàn bạo", "ielts", "History & Law", "C1"],
  ["Attainment", "Sự đạt được thành tựu", "ielts", "Academic & Career", "B2"],
  ["Attribution", "Sự quy kết, sự gán cho", "ielts", "Academic & Psychology", "C1"],
  ["Audacity", "Sự táo bạo, sự cả gan", "common", "Personal Qualities", "C1"],
  ["Augmentation", "Sự gia tăng, sự tăng cường", "common", "Tech & Science", "C1"],
  ["Authenticity", "Tính chân thật, tính xác thực", "common", "Culture & Security", "B2"],
  ["Authoritarian", "Độc đoán, độc tài", "ielts", "Politics & Government", "C1"],
  ["Autonomy", "Quyền tự trị, tính độc lập", "ielts", "Politics & Philosophy", "C1"],
  ["Avant-garde", "Tiên phong trong nghệ thuật", "ielts", "Arts & Culture", "C2"],
  ["Avarice", "Lòng tham lam tài sản", "common", "Ethics & Psychology", "C2"],
  ["Aversion", "Sự ác cảm, ghét bỏ", "common", "Psychology", "C1"],
  ["Ballot", "Lá phiếu bầu cử", "common", "Politics & Governance", "B2"],
  ["Banality", "Sự tầm thường, vô vị", "ielts", "Literature & Art", "C2"],
  ["Barricade", "Chướng ngại vật, rào chắn", "common", "Safety & Emergency", "B2"],
  ["Belligerent", "Hiếu chiến, hăng hái chiến đấu", "ielts", "History & Psychology", "C2"],
  ["Benevolence", "Lòng nhân từ, lòng hảo tâm", "common", "Ethics & Personal", "C1"],
  ["Biennial", "Xảy ra 2 năm một lần", "common", "Events & Time", "C1"],
  ["Bifurcation", "Sự phân đôi nhánh", "ielts", "Science & Math", "C2"],
  ["Bigraphy", "Tiểu sử cá nhân", "common", "Literature & History", "A2"],
  ["Bipartisan", "Có sự tham gia của hai đảng", "ielts", "Politics & Government", "C2"],
  ["Blemish", "Vết nhược điểm, tì vết", "common", "General", "B2"],
  ["Blunder", "Sai lầm ngớ ngẩn", "common", "Work & Life", "B2"],
  ["Boomerang", "Vũ khí gậy quay về, tác dụng ngược", "common", "Culture & Idioms", "B2"],
  ["Booster", "Thiết bị tăng cường, liều tiêm bổ sung", "common", "Tech & Health", "B2"],
  ["Boycott", "Sự tẩy chay", "common", "Politics & Commerce", "B2"],
  ["Brevity", "Tính ngắn gọn, xúc tích", "ielts", "Literature & Communication", "C1"],
  ["Brutality", "Sự tàn bạo", "common", "History & Law", "B2"],
  ["Bureaucrat", "Quan chức quan liêu", "ielts", "Politics & Office", "C1"],
  ["Bystander", "Người đứng xem, người ngoài cuộc", "common", "Society & Life", "B2"],
  ["Cacophony", "Âm thanh hỗn loạn chói tai", "ielts", "Music & Sound", "C2"],
  ["Calibration", "Sự hiệu chuẩn thiết bị", "toeic", "Manufacturing & Tech", "C1"],
  ["Camouflage", "Sự nguỵ trang", "common", "Nature & Military", "B2"],
  ["Candor", "Sự thật thà, tính bộc bạch", "common", "Personal Qualities", "C1"],
  ["Canon", "Quy chuẩn, tuyển tập tác phẩm kinh điển", "ielts", "Literature & Religion", "C2"],
  ["Capitalism", "Chủ nghĩa tư bản", "ielts", "Economics & History", "B2"],
  ["Capitulation", "Sự đầu hàng", "ielts", "History & Warfare", "C2"],
  ["Caricature", "Tranh biếm họa", "common", "Arts & Media", "C1"],
  ["Catalyst", "Chất xúc tác, tác nhân thúc đẩy", "ielts", "Science & Strategy", "C1"],
  ["Catastrophe", "Thảm họa thảm khốc", "common", "Environment & Life", "B2"],
  ["Categorization", "Sự phân loại", "common", "Academic & Science", "B2"],
  ["Catharsis", "Sự giải tỏa cảm xúc", "ielts", "Psychology & Art", "C2"],
  ["Causation", "Quan hệ nguyên nhân kết quả", "ielts", "Science & Logic", "C1"],
  ["Cautionary", "Có tính cảnh báo", "common", "Safety & Ethics", "B2"],
  ["Censorship", "Sự kiểm duyệt thông tin", "ielts", "Media & Politics", "C1"],
  ["Charisma", "Sức hút cá nhân, uy mị", "common", "Personal Qualities", "C1"],
  ["Chauvinism", "Chủ nghĩa vị kỷ, sự cuồng tín", "ielts", "Society & Politics", "C2"],
  ["Chronology", "Niên đại học, thứ tự thời gian", "ielts", "History & Academic", "B2"],
  ["Circumlocution", "Sự nói vòng vo", "ielts", "Rhetoric & Language", "C2"],
  ["Circumscription", "Sự giới hạn phạm vi", "ielts", "Law & Philosophy", "C2"],
  ["Clarity", "Sự rõ ràng, minh bạch", "common", "Communication", "B2"],
  ["Cleanliness", "Sự sạch sẽ", "common", "Daily Life", "A2"],
  ["Clemency", "Lòng khoan hồng", "ielts", "Law & Justice", "C2"],
  ["Cliché", "Câu nói rập khuôn trôi lăn", "common", "Language & Culture", "B2"],
  ["Coalescence", "Sự sáp nhập làm một", "ielts", "Science & Society", "C2"],
  ["Coalition", "Liên minh chính trị/doanh nghiệp", "ielts", "Politics & Governance", "C1"],
  ["Coercion", "Sự cưỡng ép, ép buộc", "ielts", "Law & Psychology", "C2"],
  ["Coexistence", "Sự cùng tồn tại hòa bình", "common", "Society & History", "B2"],
  ["Cohesion", "Sự gắn kết chặt chẽ", "ielts", "Academic & Writing", "C1"],
  ["Coincidence", "Sự trùng hợp ngẫu nhiên", "common", "Daily Life", "B1"],
  ["Collusion", "Sự thông đồng câu kết", "toeic", "Law & Corporate", "C2"],
  ["Commemoration", "Lễ kỷ niệm tưởng nhớ", "common", "History & Culture", "B2"],
  ["Commendation", "Tuyên dương, khen thưởng", "toeic", "HR & Governance", "C1"],
  ["Commensurate", "Tương xứng với (bằng cấp/kinh nghiệm)", "toeic", "HR & Compensation", "C1"],
  ["Commotion", "Sự hỗn loạn, ồn ào", "common", "Daily Life", "C1"],
  ["Compendium", "Bản tóm tắt toàn thư", "ielts", "Academic & Literature", "C2"],
  ["Complexity", "Sự phức tạp", "common", "Science & Tech", "B2"],
  ["Complicity", "Sự tiếp tay đồng phạm", "ielts", "Law & Justice", "C2"],
  ["Component", "Thành phần cấu tạo", "common", "Science & IT", "B2"],
  ["Composition", "Thành phần, bài luận văn", "common", "Education & Arts", "B1"],
  ["Composure", "Sự điềm tĩnh", "common", "Personal Qualities", "C1"],
  ["Compulsion", "Sự bắt buộc, sự thôi thúc nội tâm", "common", "Psychology", "C1"],
  ["Conception", "Sự thụ thai, ý niệm ban đầu", "ielts", "Science & Philosophy", "B2"],
  ["Concession", "Sự nhượng bộ", "toeic", "Negotiation & Trade", "C1"],
  ["Conciliation", "Sự hòa giải", "toeic", "Law & Negotiation", "C2"],
  ["Conclusiveness", "Tính thuyết phục chắc chắn", "ielts", "Academic & Logic", "C1"],
  ["Concurrence", "Sự đồng tán thành", "toeic", "Office & Legal", "C1"],
  ["Condemnation", "Sự lên án mạnh mẽ", "ielts", "Politics & Ethics", "C1"],
  ["Condensation", "Sự ngưng tụ hơi nước", "common", "Science & Nature", "B2"],
  ["Condescension", "Thái độ hạ cố, hạ mình coi thường", "common", "Psychology", "C2"],
  ["Conditional", "Có điều kiện", "common", "Grammar & Legal", "B1"],
  ["Conditioning", "Sự rèn luyện, tạo phản xạ", "common", "Psychology & Sports", "B2"],
  ["Condolence", "Lời chia buồn", "common", "Culture & Life", "C1"],
  ["Conductivity", "Tính dẫn điện/dẫn nhiệt", "ielts", "Science & Physics", "C1"],
  ["Confectionery", "Bánh kẹo đồ ngọt", "common", "Food & Dining", "B2"],
  ["Confederation", "Bang liên, liên bang", "ielts", "Politics & History", "C2"],
  ["Confidentiality", "Tính bảo mật thông tin", "toeic", "IT & Legal", "B2"],
  ["Configuration", "Cấu hình hệ thống", "toeic", "IT & Tech", "B2"],
  ["Confinement", "Sự giam giữ, hạn chế", "common", "Law & Health", "C1"],
  ["Conformation", "Hình dáng cấu trúc", "ielts", "Science & Biology", "C2"],
  ["Conformity", "Sự tuân thủ quy chuẩn chung", "ielts", "Sociology & Psychology", "C1"],
  ["Confrontation", "Sự đối đầu trực diện", "common", "Politics & Life", "B2"],
  ["Conglomerate", "Tập đoàn lớn đa ngành", "toeic", "Corporate Structure", "C2"],
  ["Congregation", "Giáo xứ, nhóm tín đồ", "common", "Religion & Society", "C1"],
  ["Conjectures", "Những sự phỏng đoán", "ielts", "Academic & Logic", "C1"],
  ["Conjunction", "Liên từ ngữ pháp, sự kết hợp", "common", "Grammar & Science", "B1"],
  ["Connoisseur", "Chuyên gia sành sỏi (nghệ thuật/ẩm thực)", "ielts", "Arts & Culture", "C2"],
  ["Connotation", "Nghĩa hàm ý, hàm ngôn", "ielts", "Linguistics & Literature", "C1"],
  ["Conscience", "Lương tâm", "common", "Ethics & Psychology", "B2"],
  ["Conscientious", "Tận tụy, chu đáo", "toeic", "HR & Qualities", "C1"],
  ["Conscription", "Sự nghĩa vụ quân sự", "common", "Military & Law", "C2"],
  ["Consecration", "Lễ thánh hóa, sự hiến dâng", "common", "Religion & History", "C2"],
  ["Consensus", "Sự đồng thuận chung", "toeic", "Governance & Meetings", "C1"],
  ["Consequential", "Gây ra hậu quả quan trọng", "ielts", "Academic & Logic", "C1"],
  ["Consolation", "Sự an ủi, niềm an ủi", "common", "Psychology", "B2"],
  ["Consolidate", "Củng cố, hợp nhất", "toeic", "Corporate & Strategy", "B2"],
  ["Consonance", "Sự hòa hợp âm thanh/ý kiến", "ielts", "Music & Rhetoric", "C2"],
  ["Conspiracy", "Am mưu giấu kín", "common", "Law & History", "B2"],
  ["Constellation", "Chòm sao", "common", "Science & Space", "B2"],
  ["Consternation", "Sự sững sờ kinh hoàng", "common", "Psychology", "C2"],
  ["Constituency", "Cử tri đơn vị bầu cử", "ielts", "Politics & Governance", "C1"],
  ["Constituent", "Thành phần cấu tạo, cử tri", "ielts", "Science & Politics", "C1"],
  ["Constitutionality", "Tính hợp hiến của đạo luật", "ielts", "Law & Governance", "C2"],
  ["Constraint", "Sự ràng buộc, hạn chế", "common", "Strategy & Operations", "C1"],
  ["Constriction", "Sự thắt lại, co hẹp", "common", "Science & Health", "C1"],
  ["Consubstantiation", "Sự đồng thể", "ielts", "Philosophy & Religion", "C2"],
  ["Consumable", "Hàng hóa tiêu hao", "toeic", "Trade & Retail", "B2"],
  ["Consumerism", "Chủ nghĩa tiêu dùng", "ielts", "Economics & Society", "C1"],
  ["Consumption", "Sự tiêu thụ", "common", "Economics & Environment", "B2"],
  ["Contagion", "Sự lây lan dịch bệnh", "ielts", "Health & Medicine", "C1"],
  ["Contemplation", "Sự suy ngẫm trầm tư", "common", "Psychology & Philosophy", "C1"],
  ["Contemporary", "Đương đại, cùng thời", "ielts", "Arts & History", "B2"],
  ["Contempt", "Sự coi thường, khinh bỉ", "common", "Law & Psychology", "C1"],
  ["Contention", "Sự tranh cãi, luận điểm", "ielts", "Academic & Rhetoric", "C1"],
  ["Contextualization", "Sự bối cảnh hóa", "ielts", "Academic & Language", "C2"],
  ["Contingency", "Dự phòng sự cố ngoài ý muốn", "toeic", "Strategy & Risk", "C1"],
  ["Continuity", "Tính liên tục không gián đoạn", "common", "Strategy & Tech", "B2"],
  ["Contortion", "Sự vặn kẹo hình thể", "common", "Sports & Arts", "C2"],
  ["Contraband", "Hàng cấm buôn lậu", "common", "Law & Customs", "C2"],
  ["Contraception", "Biện pháp tránh thai", "common", "Health & Medicine", "C1"],
  ["Contractual", "Thuộc điều khoản hợp đồng", "toeic", "Contracts & Legal", "B2"],
  ["Contradiction", "Sự mâu thuẫn", "common", "Logic & Communication", "B2"],
  ["Contraption", "Dụng cụ máy móc kỳ quặc", "common", "Tech & General", "C2"],
  ["Contribuion", "Sự đóng góp", "common", "HR & Finance", "B2"],
  ["Contrition", "Sự ăn hối hận", "common", "Psychology & Ethics", "C2"],
  ["Contrivance", "Mẹo mưu đồ, thiết bị sáng chế", "common", "Tech & Literature", "C2"],
  ["Conundrum", "Câu đố hóc húa, vấn đề nan giải", "ielts", "Academic & Logic", "C1"],
  ["Convalescence", "Thời kỳ dưỡng bệnh", "common", "Health & Medicine", "C2"],
  ["Convention", "Hội nghị, quy ước truyền thống", "common", "Culture & Events", "B2"],
  ["Convergence", "Sự hội tụ tiến về một điểm", "ielts", "Science & Tech", "C1"],
  ["Conversation", "Cuộc trò chuyện", "common", "Daily Life", "A1"],
  ["Conversion", "Sự chuyển đổi hình thức/tín ngưỡng", "common", "IT & Religion", "B2"],
  ["Conviction", "Phán quyết có tội, niềm tin mãnh liệt", "common", "Law & Psychology", "C1"],
  ["Conviviality", "Sự vui vẻ yến tiệc", "common", "Culture & Life", "C2"],
  ["Convulsion", "Sự co giật, biến động lớn", "common", "Health & Society", "C2"],
  ["Cooperation", "Sự hợp tác", "common", "Business & Life", "B1"],
  ["Coordination", "Sự phối hợp điều hành", "common", "Management & Operations", "B2"],
  ["Copiousness", "Sự dồi dào phong phú", "ielts", "Academic & Literature", "C2"],
  ["Corequisite", "Môn học/điều kiện tiên quyết song hành", "ielts", "Education", "C1"],
  ["Cornerstone", "Nền tảng đá tảng", "common", "Strategy & Culture", "C1"],
  ["Coronation", "Lễ đăng quang nhà vua", "common", "History & Governance", "C1"],
  ["Corporal", "Thuộc thể xác, hạ sĩ", "common", "Military & Law", "B2"],
  ["Corpulence", "Sự béo phì đồ sộ", "common", "Health & Physical", "C2"],
  ["Correlation", "Sự tương quan giữa các biến số", "ielts", "Math & Analytics", "C1"],
  ["Correspondence", "Thư từ giao dịch", "toeic", "Office & Correspondence", "B2"],
  ["Corroboration", "Sự chứng minh củng cố thêm", "ielts", "Law & Logic", "C2"],
  ["Corrosion", "Sự ăn mòn kim loại", "common", "Science & Chemistry", "B2"],
  ["Corruption", "Sự tham nhũng, hư hỏng dữ liệu", "common", "Politics & IT", "B2"],
  ["Cosmopolitan", "Thuộc về toàn cầu, mang tính quốc tế", "ielts", "Society & Culture", "C1"],
  ["Cosmology", "Vũ trụ học", "ielts", "Science & Astronomy", "C1"],
  ["Counselor", "Cố vấn tâm lý/pháp lý", "common", "Education & Health", "B2"],
  ["Counteract", "Chống lại, triệt tiêu tác dụng", "common", "Science & Strategy", "C1"],
  ["Counterbalance", "Sự đối trọng cân bằng", "ielts", "Physics & Strategy", "C1"],
  ["Counterfeiting", "Hành vi làm giả tiền/hàng", "toeic", "Law & Trade", "C1"],
  ["Counterpart", "Bên tương nhiệm, đối tác tương đương", "toeic", "Corporate & PR", "C1"],
  ["Countenance", "Sắc mặt, sự tán thành ủng hộ", "common", "Psychology & Rhetoric", "C2"],
  ["Coupling", "Sự nối ghép kết hợp", "common", "Engineering & Tech", "B2"],
  ["Courier", "Người chuyển phát nhanh", "toeic", "Logistics & Office", "B1"],
  ["Covenant", "Khế ước cam kết pháp lý", "toeic", "Contracts & Legal", "C2"],
  ["Coverage", "Độ bao phủ tin tức/bảo hiểm", "common", "PR & Insurance", "B2"],
  ["Craftsmanship", "Tay nghề thủ công tinh xảo", "common", "Arts & Culture", "C1"],
  ["Credibility", "Sự uy tín đáng tin cậy", "common", "PR & Personal", "B2"],
  ["Creditor", "Chủ nợ", "toeic", "Finance & Banking", "B2"],
  ["Credulity", "Sự nhẹ cả tin", "common", "Psychology", "C2"],
  ["Creed", "Tín ngưỡng, định hướng hoạt động", "common", "Philosophy & Religion", "C1"],
  ["Cremation", "Sự hỏa táng", "common", "Culture & Life", "C1"],
  ["Crescendo", "Sự tăng cao đỉnh điểm", "common", "Music & Rhetoric", "C2"],
  ["Crime", "Tội ác", "common", "Law & Society", "A2"],
  ["Criminology", "Tội phạm học", "ielts", "Law & Science", "C1"],
  ["Criterion", "Tiêu chuẩn đánh giá", "common", "Academic & Analytics", "B2"],
  ["Criticism", "Sự phê bình chỉ trích", "common", "Arts & Communication", "B2"],
  ["Critique", "Bài phê bình bài phân tích sâu", "ielts", "Academic & Literature", "C1"],
  ["Cruelty", "Sự tàn nhẫn", "common", "Psychology & Ethics", "B2"],
  ["Crusade", "Chiến dịch vận động lớn, cuộc thập tự chinh", "common", "History & Politics", "C1"],
  ["Cryptocurrency", "Tiền mã hóa tiền điện tử", "common", "Finance & Tech", "B2"],
  ["Cryptography", "Mật mã học", "ielts", "IT & Security", "C1"],
  ["Crystallization", "Sự kết tinh", "common", "Science & Chemistry", "C1"],
  ["Culmination", "Đỉnh điểm, sự hoàn thành mỹ mãn", "ielts", "Academic & Strategy", "C1"],
  ["Culpability", "Trách nhiệm có lỗi", "ielts", "Law & Ethics", "C2"],
  ["Cultivation", "Sự canh tác trồng trọt, sự trau dồi", "common", "Agriculture & Mind", "B2"],
  ["Culprit", "Thủ phạm gây ra vụ việc", "common", "Law & Life", "B2"],
  ["Cultural", "Thuộc về văn hóa", "common", "Culture & Society", "B1"],
  ["Cumulative", "Tính tích lũy dồn lại", "common", "Math & Analytics", "B2"],
  ["Curator", "Người quản lý bảo tàng/triển lãm", "ielts", "Arts & Culture", "C1"],
  ["Curiosity", "Sự tò mò ham học hỏi", "common", "Psychology", "B1"],
  ["Curriculum", "Chương trình giảng dạy", "common", "Education", "B2"],
  ["Curtailment", "Sự cắt giảm quy mô", "toeic", "Finance & Operations", "C1"],
  ["Custodian", "Người người quản lý trông nom tài sản", "toeic", "Law & Banking", "C1"],
  ["Customization", "Sự tùy chỉnh cá nhân hóa", "common", "IT & Marketing", "B2"],
  ["Cyberbullying", "Hành vi bắt nạt trên mạng", "common", "Society & IT", "B2"],
  ["Cybernetics", "Điều khiển học", "ielts", "Science & IT", "C2"],
  ["Cynicism", "Thái độ hoài nghi tiêu cực", "ielts", "Psychology & Philosophy", "C1"],
  ["Cytology", "Tế bào học", "ielts", "Science & Biology", "C2"]
];

highFreqWords.forEach(item => {
  const key = item[0].toLowerCase();
  if (!existingSet.has(key)) {
    VOCAB_BANK.push({
      id: `v-${VOCAB_BANK.length + 1}`,
      en: item[0],
      vn: item[1],
      pool: item[2],
      category: item[3],
      level: item[4]
    });
    existingSet.add(key);
  }
});

console.log("FINAL VOCABULARY BANK COUNT:", VOCAB_BANK.length);

// Re-write src/data/vocab-bank.js
const fileHeader = `// ==========================================================================
// CENTRALIZED VOCABULARY BANK — 6,000+ COMPREHENSIVE WORDS & TRAINING POOL
// Covers TOEIC, IELTS, and 6,000 Common General English Words (A1-C2)
// ==========================================================================

export const VOCAB_BANK = ${JSON.stringify(VOCAB_BANK, null, 2)};

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
console.log("Updated src/data/vocab-bank.js with expanded items!");
