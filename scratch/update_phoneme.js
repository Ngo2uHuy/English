import fs from 'fs';

const filePath = 'd:/Practice/English/src/data/games-data.js';
let content = fs.readFileSync(filePath, 'utf8');

const newData = `export const PHONEME_BLITZ_DATA = [
  // ==========================================
  // 1. High Front Vowels /ɪ/ (short i) vs /iː/ (long ee)
  // ==========================================
  {
    soundHint: "Nghĩa: Con tàu (Thuyền lớn)",
    audioText: "ship",
    wordTarget: "ship",
    distractor: "sheep",
    translation: "Con tàu, thuyền lớn",
    meaningTarget: "Con tàu (/ʃɪp/ - i ngắn)",
    meaningDistractor: "Con cừu (/ʃiːp/ - i dài)"
  },
  {
    soundHint: "Nghĩa: Con cừu",
    audioText: "sheep",
    wordTarget: "sheep",
    distractor: "ship",
    translation: "Con cừu",
    meaningTarget: "Con cừu (/ʃiːp/ - i dài)",
    meaningDistractor: "Con tàu (/ʃɪp/ - i ngắn)"
  },
  {
    soundHint: "Nghĩa: Ngồi xuống",
    audioText: "sit",
    wordTarget: "sit",
    distractor: "seat",
    translation: "Ngồi",
    meaningTarget: "Động từ: Ngồi (/sɪt/)",
    meaningDistractor: "Danh từ: Chỗ ngồi (/siːt/)"
  },
  {
    soundHint: "Nghĩa: Chỗ ngồi, ghế ngồi",
    audioText: "seat",
    wordTarget: "seat",
    distractor: "sit",
    translation: "Chỗ ngồi",
    meaningTarget: "Danh từ: Chỗ ngồi (/siːt/)",
    meaningDistractor: "Động từ: Ngồi (/sɪt/)"
  },
  {
    soundHint: "Nghĩa: Vừa vặn, phù hợp",
    audioText: "fit",
    wordTarget: "fit",
    distractor: "feet",
    translation: "Vừa vặn",
    meaningTarget: "Vừa vặn (/fɪt/)",
    meaningDistractor: "Đôi chân (/fiːt/)"
  },
  {
    soundHint: "Nghĩa: Đôi bàn chân",
    audioText: "feet",
    wordTarget: "feet",
    distractor: "fit",
    translation: "Đôi bàn chân",
    meaningTarget: "Đôi bàn chân (/fiːt/)",
    meaningDistractor: "Vừa vặn (/fɪt/)"
  },
  {
    soundHint: "Nghĩa: Đánh, đập, nhịp điệu",
    audioText: "beat",
    wordTarget: "beat",
    distractor: "bit",
    translation: "Đánh, nhịp điệu",
    meaningTarget: "Nhịp đập, đánh (/biːt/)",
    meaningDistractor: "Một chút (/bɪt/)"
  },
  {
    soundHint: "Nghĩa: Một chút, một ít",
    audioText: "bit",
    wordTarget: "bit",
    distractor: "beat",
    translation: "Một chút",
    meaningTarget: "Một chút (/bɪt/)",
    meaningDistractor: "Nhịp đập (/biːt/)"
  },
  {
    soundHint: "Nghĩa: Đánh, va chạm",
    audioText: "hit",
    wordTarget: "hit",
    distractor: "heat",
    translation: "Đánh, va chạm",
    meaningTarget: "Đánh (/hɪt/)",
    meaningDistractor: "Sức nóng, nhiệt lượng (/hiːt/)"
  },
  {
    soundHint: "Nghĩa: Sức nóng, nhiệt độ",
    audioText: "heat",
    wordTarget: "heat",
    distractor: "hit",
    translation: "Sức nóng, nhiệt độ",
    meaningTarget: "Sức nóng (/hiːt/)",
    meaningDistractor: "Đánh (/hɪt/)"
  },
  {
    soundHint: "Nghĩa: Trượt chân, trượt ngã",
    audioText: "slip",
    wordTarget: "slip",
    distractor: "sleep",
    translation: "Trượt chân",
    meaningTarget: "Trượt chân (/slɪp/)",
    meaningDistractor: "Giấc ngủ (/sliːp/)"
  },
  {
    soundHint: "Nghĩa: Ngủ, giấc ngủ",
    audioText: "sleep",
    wordTarget: "sleep",
    distractor: "slip",
    translation: "Giấc ngủ",
    meaningTarget: "Giấc ngủ (/sliːp/)",
    meaningDistractor: "Trượt chân (/slɪp/)"
  },
  {
    soundHint: "Nghĩa: Rẻ tiền, giá rẻ",
    audioText: "cheap",
    wordTarget: "cheap",
    distractor: "chip",
    translation: "Rẻ tiền",
    meaningTarget: "Rẻ tiền (/tʃiːp/)",
    meaningDistractor: "Miếng khoai tây, vi mạch (/tʃɪp/)"
  },
  {
    soundHint: "Nghĩa: Miếng khoai tây chiên, vi mạch",
    audioText: "chip",
    wordTarget: "chip",
    distractor: "cheap",
    translation: "Miếng chip/khoai tây",
    meaningTarget: "Miếng khoai tây, vi mạch (/tʃɪp/)",
    meaningDistractor: "Rẻ tiền (/tʃiːp/)"
  },
  {
    soundHint: "Nghĩa: Sống, sinh sống",
    audioText: "live",
    wordTarget: "live",
    distractor: "leave",
    translation: "Sinh sống",
    meaningTarget: "Sinh sống (/lɪv/)",
    meaningDistractor: "Rời đi (/liːv/)"
  },
  {
    soundHint: "Nghĩa: Rời đi, bỏ lại",
    audioText: "leave",
    wordTarget: "leave",
    distractor: "live",
    translation: "Rời đi",
    meaningTarget: "Rời đi (/liːv/)",
    meaningDistractor: "Sinh sống (/lɪv/)"
  },
  {
    soundHint: "Nghĩa: Giàu có, phong phú",
    audioText: "rich",
    wordTarget: "rich",
    distractor: "reach",
    translation: "Giàu có",
    meaningTarget: "Giàu có (/rɪtʃ/)",
    meaningDistractor: "Vươn tới (/riːtʃ/)"
  },
  {
    soundHint: "Nghĩa: Vươn tới, đạt tới",
    audioText: "reach",
    wordTarget: "reach",
    distractor: "rich",
    translation: "Vươn tới",
    meaningTarget: "Vươn tới (/riːtʃ/)",
    meaningDistractor: "Giàu có (/rɪtʃ/)"
  },
  {
    soundHint: "Nghĩa: Quả đào",
    audioText: "peach",
    wordTarget: "peach",
    distractor: "pitch",
    translation: "Quả đào",
    meaningTarget: "Quả đào (/piːtʃ/)",
    meaningDistractor: "Sân bóng, tông giọng (/pɪtʃ/)"
  },
  {
    soundHint: "Nghĩa: Thùng rác",
    audioText: "bin",
    wordTarget: "bin",
    distractor: "been",
    translation: "Thùng rác",
    meaningTarget: "Thùng rác (/bɪn/)",
    meaningDistractor: "Đã từng (/biːn/)"
  },
  {
    soundHint: "Nghĩa: Lấp đầy, điền vào",
    audioText: "fill",
    wordTarget: "fill",
    distractor: "feel",
    translation: "Lấp đầy",
    meaningTarget: "Lấp đầy (/fɪl/)",
    meaningDistractor: "Cảm thấy (/fiːl/)"
  },
  {
    soundHint: "Nghĩa: Cảm thấy, cảm giác",
    audioText: "feel",
    wordTarget: "feel",
    distractor: "fill",
    translation: "Cảm thấy",
    meaningTarget: "Cảm thấy (/fiːl/)",
    meaningDistractor: "Lấp đầy (/fɪl/)"
  },
  {
    soundHint: "Nghĩa: Bãi biển",
    audioText: "beach",
    wordTarget: "beach",
    distractor: "bitch",
    translation: "Bãi biển",
    meaningTarget: "Bãi biển (/biːtʃ/)",
    meaningDistractor: "Từ nhạy cảm (/bɪtʃ/)"
  },
  {
    soundHint: "Nghĩa: Nụ cười tươi",
    audioText: "grin",
    wordTarget: "grin",
    distractor: "green",
    translation: "Nụ cười tươi",
    meaningTarget: "Nụ cười tươi (/ɡrɪn/)",
    meaningDistractor: "Màu xanh lá (/ɡriːn/)"
  },
  {
    soundHint: "Nghĩa: Gà con, chim nhỏ",
    audioText: "chick",
    wordTarget: "chick",
    distractor: "cheek",
    translation: "Gà con",
    meaningTarget: "Gà con (/tʃɪk/)",
    meaningDistractor: "Gò má (/tʃiːk/)"
  },
  {
    soundHint: "Nghĩa: Gò má",
    audioText: "cheek",
    wordTarget: "cheek",
    distractor: "chick",
    translation: "Gò má",
    meaningTarget: "Gò má (/tʃiːk/)",
    meaningDistractor: "Gà con (/tʃɪk/)"
  },
  {
    soundHint: "Nghĩa: Vẫn, vẫn còn",
    audioText: "still",
    wordTarget: "still",
    distractor: "steal",
    translation: "Vẫn còn",
    meaningTarget: "Vẫn còn (/stɪl/)",
    meaningDistractor: "Trộm cắp (/stiːl/)"
  },
  {
    soundHint: "Nghĩa: Trộm cắp, lấy cắp",
    audioText: "steal",
    wordTarget: "steal",
    distractor: "still",
    translation: "Trộm cắp",
    meaningTarget: "Trộm cắp (/stiːl/)",
    meaningDistractor: "Vẫn còn (/stɪl/)"
  },
  {
    soundHint: "Nghĩa: Bệnh tật, ốm đau",
    audioText: "sick",
    wordTarget: "sick",
    distractor: "seek",
    translation: "Ốm đau",
    meaningTarget: "Ốm đau (/sɪk/)",
    meaningDistractor: "Tìm kiếm (/siːk/)"
  },
  {
    soundHint: "Nghĩa: Tìm kiếm, truy tìm",
    audioText: "seek",
    wordTarget: "seek",
    distractor: "sick",
    translation: "Tìm kiếm",
    meaningTarget: "Tìm kiếm (/siːk/)",
    meaningDistractor: "Ốm đau (/sɪk/)"
  },

  // ==========================================
  // 2. Front Mid Vowels /e/ vs /æ/
  // ==========================================
  {
    soundHint: "Nghĩa: Cái bút viết",
    audioText: "pen",
    wordTarget: "pen",
    distractor: "pan",
    translation: "Cái bút",
    meaningTarget: "Cái bút (/pen/)",
    meaningDistractor: "Cái chảo rán (/pæn/)"
  },
  {
    soundHint: "Nghĩa: Cái chảo rán",
    audioText: "pan",
    wordTarget: "pan",
    distractor: "pen",
    translation: "Cái chảo rán",
    meaningTarget: "Cái chảo rán (/pæn/)",
    meaningDistractor: "Cái bút (/pen/)"
  },
  {
    soundHint: "Nghĩa: Người đàn ông (số ít)",
    audioText: "man",
    wordTarget: "man",
    distractor: "men",
    translation: "Người đàn ông",
    meaningTarget: "Số ít: Người đàn ông (/mæn/)",
    meaningDistractor: "Số nhiều: Những người đàn ông (/men/)"
  },
  {
    soundHint: "Nghĩa: Những người đàn ông (số nhiều)",
    audioText: "men",
    wordTarget: "men",
    distractor: "man",
    translation: "Những người đàn ông",
    meaningTarget: "Số nhiều: Những người đàn ông (/men/)",
    meaningDistractor: "Số ít: Người đàn ông (/mæn/)"
  },
  {
    soundHint: "Nghĩa: Cái giường nằm",
    audioText: "bed",
    wordTarget: "bed",
    distractor: "bad",
    translation: "Cái giường",
    meaningTarget: "Cái giường (/bed/)",
    meaningDistractor: "Tồi tệ, xấu (/bæd/)"
  },
  {
    soundHint: "Nghĩa: Tồi tệ, xấu xa",
    audioText: "bad",
    wordTarget: "bad",
    distractor: "bed",
    translation: "Tồi tệ, xấu",
    meaningTarget: "Tồi tệ, xấu (/bæd/)",
    meaningDistractor: "Cái giường (/bed/)"
  },
  {
    soundHint: "Nghĩa: Đã nói (Quá khứ say)",
    audioText: "said",
    wordTarget: "said",
    distractor: "sad",
    translation: "Đã nói",
    meaningTarget: "Đã nói (/sed/)",
    meaningDistractor: "U buồn, đau thương (/sæd/)"
  },
  {
    soundHint: "Nghĩa: Buồn rầu, đau thương",
    audioText: "sad",
    wordTarget: "sad",
    distractor: "said",
    translation: "Buồn rầu",
    meaningTarget: "Buồn rầu (/sæd/)",
    meaningDistractor: "Đã nói (/sed/)"
  },
  {
    soundHint: "Nghĩa: Cái đầu",
    audioText: "head",
    wordTarget: "head",
    distractor: "had",
    translation: "Cái đầu",
    meaningTarget: "Cái đầu (/hed/)",
    meaningDistractor: "Đã có (/hæd/)"
  },
  {
    soundHint: "Nghĩa: Gửi đi, chuyển đi",
    audioText: "send",
    wordTarget: "send",
    distractor: "sand",
    translation: "Gửi đi",
    meaningTarget: "Gửi đi (/send/)",
    meaningDistractor: "Bãi cát (/sænd/)"
  },
  {
    soundHint: "Nghĩa: Bãi cát, hạt cát",
    audioText: "sand",
    wordTarget: "sand",
    distractor: "send",
    translation: "Bãi cát",
    meaningTarget: "Bãi cát (/sænd/)",
    meaningDistractor: "Gửi đi (/send/)"
  },
  {
    soundHint: "Nghĩa: Cầu xin, ăn xin",
    audioText: "beg",
    wordTarget: "beg",
    distractor: "bag",
    translation: "Cầu xin",
    meaningTarget: "Cầu xin (/beɡ/)",
    meaningDistractor: "Túi xách (/bæɡ/)"
  },
  {
    soundHint: "Nghĩa: Cái túi xách",
    audioText: "bag",
    wordTarget: "bag",
    distractor: "beg",
    translation: "Cái túi xách",
    meaningTarget: "Túi xách (/bæɡ/)",
    meaningDistractor: "Cầu xin (/beɡ/)"
  },
  {
    soundHint: "Nghĩa: Mứt trái cây / Kẹt xe",
    audioText: "jam",
    wordTarget: "jam",
    distractor: "gem",
    translation: "Mứt trái cây",
    meaningTarget: "Mứt / Kẹt xe (/dʒæm/)",
    meaningDistractor: "Viên ngọc quý (/dʒem/)"
  },
  {
    soundHint: "Nghĩa: Viên ngọc quý",
    audioText: "gem",
    wordTarget: "gem",
    distractor: "jam",
    translation: "Viên ngọc quý",
    meaningTarget: "Viên ngọc quý (/dʒem/)",
    meaningDistractor: "Mứt / Kẹt xe (/dʒæm/)"
  },
  {
    soundHint: "Nghĩa: Đã chết, qua đời",
    audioText: "dead",
    wordTarget: "dead",
    distractor: "dad",
    translation: "Đã chết",
    meaningTarget: "Đã chết (/ded/)",
    meaningDistractor: "Người bố (/dæd/)"
  },
  {
    soundHint: "Nghĩa: Bố, cha",
    audioText: "dad",
    wordTarget: "dad",
    distractor: "dead",
    translation: "Bố, cha",
    meaningTarget: "Người bố (/dæd/)",
    meaningDistractor: "Đã chết (/ded/)"
  },
  {
    soundHint: "Nghĩa: Thú cưng",
    audioText: "pet",
    wordTarget: "pet",
    distractor: "pat",
    translation: "Thú cưng",
    meaningTarget: "Thú cưng (/pet/)",
    meaningDistractor: "Vỗ nhẹ (/pæt/)"
  },
  {
    soundHint: "Nghĩa: Cho vay, cho mượn",
    audioText: "lend",
    wordTarget: "lend",
    distractor: "land",
    translation: "Cho vay",
    meaningTarget: "Cho vay (/lend/)",
    meaningDistractor: "Đất liền (/lænd/)"
  },
  {
    soundHint: "Nghĩa: Đất liền, vùng đất",
    audioText: "land",
    wordTarget: "land",
    distractor: "lend",
    translation: "Đất liền",
    meaningTarget: "Đất liền (/lænd/)",
    meaningDistractor: "Cho vay (/lend/)"
  },
  {
    soundHint: "Nghĩa: Sự hỗn xộn, bừa bộn",
    audioText: "mess",
    wordTarget: "mess",
    distractor: "mass",
    translation: "Bừa bộn",
    meaningTarget: "Bừa bộn (/mes/)",
    meaningDistractor: "Khối lượng lớn (/mæs/)"
  },

  // ==========================================
  // 3. Short /ʌ/ vs /ɒ/ or /æ/ or /əʊ/
  // ==========================================
  {
    soundHint: "Nghĩa: Tách trà, tách cà phê",
    audioText: "cup",
    wordTarget: "cup",
    distractor: "cap",
    translation: "Tách trà",
    meaningTarget: "Tách trà (/kʌp/)",
    meaningDistractor: "Mũ lưỡi trai (/kæp/)"
  },
  {
    soundHint: "Nghĩa: Mũ lưỡi trai",
    audioText: "cap",
    wordTarget: "cap",
    distractor: "cup",
    translation: "Mũ lưỡi trai",
    meaningTarget: "Mũ lưỡi trai (/kæp/)",
    meaningDistractor: "Tách trà (/kʌp/)"
  },
  {
    soundHint: "Nghĩa: Cắt, thái",
    audioText: "cut",
    wordTarget: "cut",
    distractor: "cat",
    translation: "Cắt",
    meaningTarget: "Cắt (/kʌt/)",
    meaningDistractor: "Con mèo (/kæt/)"
  },
  {
    soundHint: "Nghĩa: Con mèo",
    audioText: "cat",
    wordTarget: "cat",
    distractor: "cut",
    translation: "Con mèo",
    meaningTarget: "Con mèo (/kæt/)",
    meaningDistractor: "Cắt (/kʌt/)"
  },
  {
    soundHint: "Nghĩa: Sự may mắn",
    audioText: "luck",
    wordTarget: "luck",
    distractor: "lock",
    translation: "Sự may mắn",
    meaningTarget: "Sự may mắn (/lʌk/)",
    meaningDistractor: "Ổ khóa (/lɒk/)"
  },
  {
    soundHint: "Nghĩa: Ổ khóa, khóa cửa",
    audioText: "lock",
    wordTarget: "lock",
    distractor: "luck",
    translation: "Ổ khóa",
    meaningTarget: "Ổ khóa (/lɒk/)",
    meaningDistractor: "Sự may mắn (/lʌk/)"
  },
  {
    soundHint: "Nghĩa: Con vịt",
    audioText: "duck",
    wordTarget: "duck",
    distractor: "dock",
    translation: "Con vịt",
    meaningTarget: "Con vịt (/dʌk/)",
    meaningDistractor: "Bến tàu (/dɒk/)"
  },
  {
    soundHint: "Nghĩa: Bến tàu",
    audioText: "dock",
    wordTarget: "dock",
    distractor: "duck",
    translation: "Bến tàu",
    meaningTarget: "Bến tàu (/dɒk/)",
    meaningDistractor: "Con vịt (/dʌk/)"
  },
  {
    soundHint: "Nghĩa: Đóng lại, khép lại",
    audioText: "shut",
    wordTarget: "shut",
    distractor: "shot",
    translation: "Đóng lại",
    meaningTarget: "Đóng lại (/ʃʌt/)",
    meaningDistractor: "Phát bắn, cú sút (/ʃɒt/)"
  },
  {
    soundHint: "Nghĩa: Xe tải",
    audioText: "truck",
    wordTarget: "truck",
    distractor: "track",
    translation: "Xe tải",
    meaningTarget: "Xe tải (/trʌk/)",
    meaningDistractor: "Đường ray (/træk/)"
  },
  {
    soundHint: "Nghĩa: Hạt cây, quả hạch",
    audioText: "nut",
    wordTarget: "nut",
    distractor: "not",
    translation: "Hạt cây",
    meaningTarget: "Hạt cây (/nʌt/)",
    meaningDistractor: "Không (/nɒt/)"
  },
  {
    soundHint: "Nghĩa: Xe buýt",
    audioText: "bus",
    wordTarget: "bus",
    distractor: "boss",
    translation: "Xe buýt",
    meaningTarget: "Xe buýt (/bʌs/)",
    meaningDistractor: "Ông chủ (/bɒs/)"
  },
  {
    soundHint: "Nghĩa: Ông chủ",
    audioText: "boss",
    wordTarget: "boss",
    distractor: "bus",
    translation: "Ông chủ",
    meaningTarget: "Ông chủ (/bɒs/)",
    meaningDistractor: "Xe buýt (/bʌs/)"
  },
  {
    soundHint: "Nghĩa: Vui vẻ, cuộc vui",
    audioText: "fun",
    wordTarget: "fun",
    distractor: "fan",
    translation: "Vui vẻ",
    meaningTarget: "Cuộc vui (/fʌn/)",
    meaningDistractor: "Cái quạt / Người hâm mộ (/fæn/)"
  },
  {
    soundHint: "Nghĩa: Bùn đất, lầy lội",
    audioText: "mud",
    wordTarget: "mud",
    distractor: "mad",
    translation: "Bùn lầy",
    meaningTarget: "Bùn lầy (/mʌd/)",
    meaningDistractor: "Tức giận (/mæd/)"
  },

  // ==========================================
  // 4. Consonants /b/ vs /v/
  // ==========================================
  {
    soundHint: "Nghĩa: Quả mọng (dâu, việt quất)",
    audioText: "berry",
    wordTarget: "berry",
    distractor: "very",
    translation: "Quả mọng",
    meaningTarget: "Quả mọng (/ˈberi/)",
    meaningDistractor: "Rất (/ˈveri/)"
  },
  {
    soundHint: "Nghĩa: Rất, cực kỳ",
    audioText: "very",
    wordTarget: "very",
    distractor: "berry",
    translation: "Rất",
    meaningTarget: "Rất (/ˈveri/)",
    meaningDistractor: "Quả mọng (/ˈberi/)"
  },
  {
    soundHint: "Nghĩa: Tốt nhất, tuyệt nhất",
    audioText: "best",
    wordTarget: "best",
    distractor: "vest",
    translation: "Tốt nhất",
    meaningTarget: "Tốt nhất (/best/)",
    meaningDistractor: "Áo gile (/vest/)"
  },
  {
    soundHint: "Nghĩa: Áo gile",
    audioText: "vest",
    wordTarget: "vest",
    distractor: "best",
    translation: "Áo gile",
    meaningTarget: "Áo gile (/vest/)",
    meaningDistractor: "Tốt nhất (/best/)"
  },
  {
    soundHint: "Nghĩa: Con thuyền",
    audioText: "boat",
    wordTarget: "boat",
    distractor: "vote",
    translation: "Con thuyền",
    meaningTarget: "Con thuyền (/bəʊt/)",
    meaningDistractor: "Bỏ phiếu (/vəʊt/)"
  },
  {
    soundHint: "Nghĩa: Bỏ phiếu, bình chọn",
    audioText: "vote",
    wordTarget: "vote",
    distractor: "boat",
    translation: "Bỏ phiếu",
    meaningTarget: "Bỏ phiếu (/vəʊt/)",
    meaningDistractor: "Con thuyền (/bəʊt/)"
  },
  {
    soundHint: "Nghĩa: Lệnh cấm, cấm đoán",
    audioText: "ban",
    wordTarget: "ban",
    distractor: "van",
    translation: "Lệnh cấm",
    meaningTarget: "Lệnh cấm (/bæn/)",
    meaningDistractor: "Xe tải nhỏ (/væn/)"
  },
  {
    soundHint: "Nghĩa: Xe tải nhỏ",
    audioText: "van",
    wordTarget: "van",
    distractor: "ban",
    translation: "Xe tải nhỏ",
    meaningTarget: "Xe tải nhỏ (/væn/)",
    meaningDistractor: "Lệnh cấm (/bæn/)"
  },
  {
    soundHint: "Nghĩa: Cá cược",
    audioText: "bet",
    wordTarget: "bet",
    distractor: "vet",
    translation: "Cá cược",
    meaningTarget: "Cá cược (/bet/)",
    meaningDistractor: "Bác sĩ thú y (/vet/)"
  },
  {
    soundHint: "Nghĩa: Bác sĩ thú y",
    audioText: "vet",
    wordTarget: "vet",
    distractor: "bet",
    translation: "Bác sĩ thú y",
    meaningTarget: "Bác sĩ thú y (/vet/)",
    meaningDistractor: "Cá cược (/bet/)"
  },

  // ==========================================
  // 5. Consonants /l/ vs /r/
  // ==========================================
  {
    soundHint: "Nghĩa: Ánh sáng, ngọn đèn",
    audioText: "light",
    wordTarget: "light",
    distractor: "right",
    translation: "Ánh sáng",
    meaningTarget: "Ánh sáng (/laɪt/)",
    meaningDistractor: "Bên phải, chính xác (/raɪt/)"
  },
  {
    soundHint: "Nghĩa: Chính xác, bên phải",
    audioText: "right",
    wordTarget: "right",
    distractor: "light",
    translation: "Chính xác",
    meaningTarget: "Bên phải, chính xác (/raɪt/)",
    meaningDistractor: "Ánh sáng (/laɪt/)"
  },
  {
    soundHint: "Nghĩa: Dẫn dắt, lãnh đạo",
    audioText: "lead",
    wordTarget: "lead",
    distractor: "read",
    translation: "Dẫn dắt",
    meaningTarget: "Dẫn dắt (/liːd/)",
    meaningDistractor: "Đọc sách (/riːd/)"
  },
  {
    soundHint: "Nghĩa: Đọc sách, đọc báo",
    audioText: "read",
    wordTarget: "read",
    distractor: "lead",
    translation: "Đọc sách",
    meaningTarget: "Đọc sách (/riːd/)",
    meaningDistractor: "Dẫn dắt (/liːd/)"
  },
  {
    soundHint: "Nghĩa: Dài, lâu",
    audioText: "long",
    wordTarget: "long",
    distractor: "wrong",
    translation: "Dài",
    meaningTarget: "Dài (/lɒŋ/)",
    meaningDistractor: "Sai lầm (/rɒŋ/)"
  },
  {
    soundHint: "Nghĩa: Sai lầm, không đúng",
    audioText: "wrong",
    wordTarget: "wrong",
    distractor: "long",
    translation: "Sai lầm",
    meaningTarget: "Sai lầm (/rɒŋ/)",
    meaningDistractor: "Dài (/lɒŋ/)"
  },
  {
    soundHint: "Nghĩa: Bay (Động từ)",
    audioText: "fly",
    wordTarget: "fly",
    distractor: "fry",
    translation: "Bay",
    meaningTarget: "Bay (/flaɪ/)",
    meaningDistractor: "Rán, chiên (/fraɪ/)"
  },
  {
    soundHint: "Nghĩa: Rán, chiên thức ăn",
    audioText: "fry",
    wordTarget: "fry",
    distractor: "fly",
    translation: "Rán, chiên",
    meaningTarget: "Rán, chiên (/fraɪ/)",
    meaningDistractor: "Bay (/flaɪ/)"
  },
  {
    soundHint: "Nghĩa: Chơi thể thao/trò chơi",
    audioText: "play",
    wordTarget: "play",
    distractor: "pray",
    translation: "Chơi",
    meaningTarget: "Chơi (/pleɪ/)",
    meaningDistractor: "Cầu nguyện (/preɪ/)"
  },
  {
    soundHint: "Nghĩa: Cầu nguyện",
    audioText: "pray",
    wordTarget: "pray",
    distractor: "play",
    translation: "Cầu nguyện",
    meaningTarget: "Cầu nguyện (/preɪ/)",
    meaningDistractor: "Chơi (/pleɪ/)"
  },
  {
    soundHint: "Nghĩa: Sưu tầm, thu gom",
    audioText: "collect",
    wordTarget: "collect",
    distractor: "correct",
    translation: "Sưu tầm",
    meaningTarget: "Sưu tầm (/kəˈlekt/)",
    meaningDistractor: "Chính xác (/kəˈrekt/)"
  },
  {
    soundHint: "Nghĩa: Chính xác, chuẩn xác",
    audioText: "correct",
    wordTarget: "correct",
    distractor: "collect",
    translation: "Chính xác",
    meaningTarget: "Chính xác (/kəˈrekt/)",
    meaningDistractor: "Sưu tầm (/kəˈlekt/)"
  },
  {
    soundHint: "Nghĩa: Muộn, trễ giờ",
    audioText: "late",
    wordTarget: "late",
    distractor: "rate",
    translation: "Muộn",
    meaningTarget: "Muộn (/leɪt/)",
    meaningDistractor: "Tỷ lệ, đánh giá (/reɪt/)"
  },
  {
    soundHint: "Nghĩa: Tấm kính, ly thủy tinh",
    audioText: "glass",
    wordTarget: "glass",
    distractor: "grass",
    translation: "Tấm kính",
    meaningTarget: "Tấm kính (/ɡlɑːs/)",
    meaningDistractor: "Bãi cỏ (/ɡrɑːs/)"
  },
  {
    soundHint: "Nghĩa: Bãi cỏ",
    audioText: "grass",
    wordTarget: "grass",
    distractor: "glass",
    translation: "Bãi cỏ",
    meaningTarget: "Bãi cỏ (/ɡrɑːs/)",
    meaningDistractor: "Tấm kính (/ɡlɑːs/)"
  },

  // ==========================================
  // 6. Consonants /θ/ vs /t/ or /s/
  // ==========================================
  {
    soundHint: "Nghĩa: Suy nghĩ, ngẫm nghĩ",
    audioText: "think",
    wordTarget: "think",
    distractor: "sink",
    translation: "Suy nghĩ",
    meaningTarget: "Suy nghĩ (/θɪŋk/)",
    meaningDistractor: "Bồn rửa mặt / Chìm (/sɪŋk/)"
  },
  {
    soundHint: "Nghĩa: Bồn rửa mặt / Chìm xuống",
    audioText: "sink",
    wordTarget: "sink",
    distractor: "think",
    translation: "Bồn rửa mặt",
    meaningTarget: "Bồn rửa mặt (/sɪŋk/)",
    meaningDistractor: "Suy nghĩ (/θɪŋk/)"
  },
  {
    soundHint: "Nghĩa: Đã nghĩ (Quá khứ think)",
    audioText: "thought",
    wordTarget: "thought",
    distractor: "taught",
    translation: "Đã nghĩ",
    meaningTarget: "Đã nghĩ (/θɔːt/)",
    meaningDistractor: "Đã dạy (/tɔːt/)"
  },
  {
    soundHint: "Nghĩa: Số ba",
    audioText: "three",
    wordTarget: "three",
    distractor: "tree",
    translation: "Số ba",
    meaningTarget: "Số ba (/θriː/)",
    meaningDistractor: "Cái cây (/triː/)"
  },
  {
    soundHint: "Nghĩa: Cái cây",
    audioText: "tree",
    wordTarget: "tree",
    distractor: "three",
    translation: "Cái cây",
    meaningTarget: "Cái cây (/triː/)",
    meaningDistractor: "Số ba (/θriː/)"
  },
  {
    soundHint: "Nghĩa: Mỏng, gầy",
    audioText: "thin",
    wordTarget: "thin",
    distractor: "tin",
    translation: "Mỏng, gầy",
    meaningTarget: "Mỏng (/θɪn/)",
    meaningDistractor: "Hộp thiếc (/tɪn/)"
  },
  {
    soundHint: "Nghĩa: Con đường, lối đi",
    audioText: "path",
    wordTarget: "path",
    distractor: "pass",
    translation: "Con đường",
    meaningTarget: "Con đường (/pɑːθ/)",
    meaningDistractor: "Vượt qua (/pɑːs/)"
  },

  // ==========================================
  // 7. Consonants /ʃ/ vs /s/ vs /tʃ/
  // ==========================================
  {
    soundHint: "Nghĩa: Chiếc giày",
    audioText: "shoe",
    wordTarget: "shoe",
    distractor: "sue",
    translation: "Chiếc giày",
    meaningTarget: "Chiếc giày (/ʃuː/)",
    meaningDistractor: "Kiện tụng ra tòa (/suː/)"
  },
  {
    soundHint: "Nghĩa: Cú sốc, ngạc nhiên",
    audioText: "shock",
    wordTarget: "shock",
    distractor: "sock",
    translation: "Cú sốc",
    meaningTarget: "Cú sốc (/ʃɒk/)",
    meaningDistractor: "Chiếc tất chân (/sɒk/)"
  },
  {
    soundHint: "Nghĩa: Chiếc tất chân",
    audioText: "sock",
    wordTarget: "sock",
    distractor: "shock",
    translation: "Chiếc tất chân",
    meaningTarget: "Chiếc tất (/sɒk/)",
    meaningDistractor: "Cú sốc (/ʃɒk/)"
  },
  {
    soundHint: "Nghĩa: Sự xấu hổ",
    audioText: "shame",
    wordTarget: "shame",
    distractor: "same",
    translation: "Sự xấu hổ",
    meaningTarget: "Sự xấu hổ (/ʃeɪm/)",
    meaningDistractor: "Giống nhau (/seɪm/)"
  },
  {
    soundHint: "Nghĩa: Cái ghế tựa",
    audioText: "chair",
    wordTarget: "chair",
    distractor: "share",
    translation: "Cái ghế",
    meaningTarget: "Cái ghế (/tʃeə/)",
    meaningDistractor: "Chia sẻ (/ʃeə/)"
  },
  {
    soundHint: "Nghĩa: Chia sẻ",
    audioText: "share",
    wordTarget: "share",
    distractor: "chair",
    translation: "Chia sẻ",
    meaningTarget: "Chia sẻ (/ʃeə/)",
    meaningDistractor: "Cái ghế (/tʃeə/)"
  },

  // ==========================================
  // 8. Consonants /p/ vs /f/
  // ==========================================
  {
    soundHint: "Nghĩa: Chiếc ghim bấm",
    audioText: "pin",
    wordTarget: "pin",
    distractor: "fin",
    translation: "Chiếc ghim",
    meaningTarget: "Chiếc ghim (/pɪn/)",
    meaningDistractor: "Vây cá (/fɪn/)"
  },
  {
    soundHint: "Nghĩa: Vây cá",
    audioText: "fin",
    wordTarget: "fin",
    distractor: "pin",
    translation: "Vây cá",
    meaningTarget: "Vây cá (/fɪn/)",
    meaningDistractor: "Chiếc ghim (/pɪn/)"
  },
  {
    soundHint: "Nghĩa: Hồ bơi, bể bơi",
    audioText: "pool",
    wordTarget: "pool",
    distractor: "fool",
    translation: "Hồ bơi",
    meaningTarget: "Hồ bơi (/puːl/)",
    meaningDistractor: "Kẻ ngốc (/fuːl/)"
  },
  {
    soundHint: "Nghĩa: Kẻ ngốc, dại khờ",
    audioText: "fool",
    wordTarget: "fool",
    distractor: "pool",
    translation: "Kẻ ngốc",
    meaningTarget: "Kẻ ngốc (/fuːl/)",
    meaningDistractor: "Hồ bơi (/puːl/)"
  },
  {
    soundHint: "Nghĩa: Bản sao, sao chép",
    audioText: "copy",
    wordTarget: "copy",
    distractor: "coffee",
    translation: "Bản sao",
    meaningTarget: "Bản sao (/ˈkɒpi/)",
    meaningDistractor: "Cà phê (/ˈkɒfi/)"
  },
  {
    soundHint: "Nghĩa: Cà phê",
    audioText: "coffee",
    wordTarget: "coffee",
    distractor: "copy",
    translation: "Cà phê",
    meaningTarget: "Cà phê (/ˈkɒfi/)",
    meaningDistractor: "Bản sao (/ˈkɒpi/)"
  },
  {
    soundHint: "Nghĩa: Cặp đôi, một đôi",
    audioText: "pair",
    wordTarget: "pair",
    distractor: "fair",
    translation: "Cặp đôi",
    meaningTarget: "Cặp đôi (/peə/)",
    meaningDistractor: "Công bằng / Hội chợ (/feə/)"
  },
  {
    soundHint: "Nghĩa: Thịt heo (lợn)",
    audioText: "pork",
    wordTarget: "pork",
    distractor: "fork",
    translation: "Thịt heo",
    meaningTarget: "Thịt heo (/pɔːk/)",
    meaningDistractor: "Cái nĩa (/fɔːk/)"
  },
  {
    soundHint: "Nghĩa: Cái nĩa ăn cơm",
    audioText: "fork",
    wordTarget: "fork",
    distractor: "pork",
    translation: "Cái nĩa",
    meaningTarget: "Cái nĩa (/fɔːk/)",
    meaningDistractor: "Thịt heo (/pɔːk/)"
  },

  // ==========================================
  // 9. Homophones & Easily Confused TOEIC/IELTS Words
  // ==========================================
  {
    soundHint: "Nghĩa: Sa mạc nắng nóng",
    audioText: "desert",
    wordTarget: "desert",
    distractor: "dessert",
    translation: "Sa mạc",
    meaningTarget: "Sa mạc (/ˈdezət/)",
    meaningDistractor: "Món tráng miệng (/dɪˈzɜːt/)"
  },
  {
    soundHint: "Nghĩa: Món tráng miệng ngọt",
    audioText: "dessert",
    wordTarget: "dessert",
    distractor: "desert",
    translation: "Món tráng miệng",
    meaningTarget: "Món tráng miệng (/dɪˈzɜːt/)",
    meaningDistractor: "Sa mạc (/ˈdezət/)"
  },
  {
    soundHint: "Nghĩa: Lỏng lẻo, không chặt",
    audioText: "loose",
    wordTarget: "loose",
    distractor: "lose",
    translation: "Lỏng lẻo",
    meaningTarget: "Lỏng lẻo (/luːs/)",
    meaningDistractor: "Đánh mất / Thất bại (/luːz/)"
  },
  {
    soundHint: "Nghĩa: Đánh mất, thất bại",
    audioText: "lose",
    wordTarget: "lose",
    distractor: "loose",
    translation: "Đánh mất",
    meaningTarget: "Đánh mất (/luːz/)",
    meaningDistractor: "Lỏng lẻo (/luːs/)"
  },
  {
    soundHint: "Nghĩa: Danh từ: Lời khuyên",
    audioText: "advice",
    wordTarget: "advice",
    distractor: "advise",
    translation: "Lời khuyên",
    meaningTarget: "Danh từ: Lời khuyên (/ədˈvaɪs/)",
    meaningDistractor: "Động từ: Khuyên bảo (/ədˈvaɪz/)"
  },
  {
    soundHint: "Nghĩa: Động từ: Khuyên bảo",
    audioText: "advise",
    wordTarget: "advise",
    distractor: "advice",
    translation: "Khuyên bảo",
    meaningTarget: "Động từ: Khuyên bảo (/ədˈvaɪz/)",
    meaningDistractor: "Danh từ: Lời khuyên (/ədˈvaɪs/)"
  },
  {
    soundHint: "Nghĩa: Động từ: Tác động, ảnh hưởng",
    audioText: "affect",
    wordTarget: "affect",
    distractor: "effect",
    translation: "Tác động",
    meaningTarget: "Động từ: Tác động (/əˈfekt/)",
    meaningDistractor: "Danh từ: Hiệu ứng (/ɪˈfekt/)"
  },
  {
    soundHint: "Nghĩa: Danh từ: Hiệu ứng, kết quả",
    audioText: "effect",
    wordTarget: "effect",
    distractor: "affect",
    translation: "Hiệu ứng",
    meaningTarget: "Danh từ: Hiệu ứng (/ɪˈfekt/)",
    meaningDistractor: "Động từ: Tác động (/əˈfekt/)"
  },
  {
    soundHint: "Nghĩa: Vay mượn (từ người khác)",
    audioText: "borrow",
    wordTarget: "borrow",
    distractor: "lend",
    translation: "Vay mượn",
    meaningTarget: "Vay mượn (/ˈbɒrəʊ/)",
    meaningDistractor: "Cho vay (/lend/)"
  },
  {
    soundHint: "Nghĩa: Nâng lên, gia tăng (Động từ)",
    audioText: "raise",
    wordTarget: "raise",
    distractor: "rise",
    translation: "Nâng lên",
    meaningTarget: "Nâng lên (/reɪz/)",
    meaningDistractor: "Tăng lên, mọc lên (/raɪz/)"
  },
  {
    soundHint: "Nghĩa: Tự gia tăng, mọc lên (Mặt trời)",
    audioText: "rise",
    wordTarget: "rise",
    distractor: "raise",
    translation: "Mọc lên, gia tăng",
    meaningTarget: "Mọc lên, gia tăng (/raɪz/)",
    meaningDistractor: "Nâng lên (/reɪz/)"
  },
  {
    soundHint: "Nghĩa: Hiệu trưởng / Chính yếu",
    audioText: "principal",
    wordTarget: "principal",
    distractor: "principle",
    translation: "Hiệu trưởng",
    meaningTarget: "Hiệu trưởng (/ˈprɪnsəpl/)",
    meaningDistractor: "Nguyên tắc (/ˈprɪnsəpl/)"
  },
  {
    soundHint: "Nghĩa: Nguyên tắc, quy luật",
    audioText: "principle",
    wordTarget: "principle",
    distractor: "principal",
    translation: "Nguyên tắc",
    meaningTarget: "Nguyên tắc (/ˈprɪnsəpl/)",
    meaningDistractor: "Hiệu trưởng (/ˈprɪnsəpl/)"
  },
  {
    soundHint: "Nghĩa: Đứng yên một chỗ",
    audioText: "stationary",
    wordTarget: "stationary",
    distractor: "stationery",
    translation: "Đứng yên",
    meaningTarget: "Đứng yên (/ˈsteɪʃnri/)",
    meaningDistractor: "Văn phòng phẩm (/ˈsteɪʃnri/)"
  },
  {
    soundHint: "Nghĩa: Văn phòng phẩm (bút, giấy)",
    audioText: "stationery",
    wordTarget: "stationery",
    distractor: "stationary",
    translation: "Văn phòng phẩm",
    meaningTarget: "Văn phòng phẩm (/ˈsteɪʃnri/)",
    meaningDistractor: "Đứng yên (/ˈsteɪʃnri/)"
  },
  {
    soundHint: "Nghĩa: Chấp nhận, đồng ý",
    audioText: "accept",
    wordTarget: "accept",
    distractor: "except",
    translation: "Chấp nhận",
    meaningTarget: "Chấp nhận (/əkˈsept/)",
    meaningDistractor: "Ngoại trừ (/ɪkˈsept/)"
  },
  {
    soundHint: "Nghĩa: Ngoại trừ, loại trừ",
    audioText: "except",
    wordTarget: "except",
    distractor: "accept",
    translation: "Ngoại trừ",
    meaningTarget: "Ngoại trừ (/ɪkˈsept/)",
    meaningDistractor: "Chấp nhận (/əkˈsept/)"
  },
  {
    soundHint: "Nghĩa: Thời tiết",
    audioText: "weather",
    wordTarget: "weather",
    distractor: "whether",
    translation: "Thời tiết",
    meaningTarget: "Thời tiết (/ˈweðə/)",
    meaningDistractor: "Liệu có hay không (/ˈweðə/)"
  },
  {
    soundHint: "Nghĩa: Phanh xe, thắng xe",
    audioText: "brake",
    wordTarget: "brake",
    distractor: "break",
    translation: "Phanh xe",
    meaningTarget: "Phanh xe (/breɪk/)",
    meaningDistractor: "Làm vỡ / Giờ giải lao (/breɪk/)"
  },
  {
    soundHint: "Nghĩa: Đơn giản, rõ ràng / Đồng bằng",
    audioText: "plain",
    wordTarget: "plain",
    distractor: "plane",
    translation: "Đơn giản / Đồng bằng",
    meaningTarget: "Đơn giản / Đồng bằng (/pleɪn/)",
    meaningDistractor: "Máy bay (/pleɪn/)"
  },
  {
    soundHint: "Nghĩa: Bậc cầu thang",
    audioText: "stair",
    wordTarget: "stair",
    distractor: "stare",
    translation: "Cầu thang",
    meaningTarget: "Bậc cầu thang (/steə/)",
    meaningDistractor: "Nhìn chằm chằm (/steə/)"
  },
  {
    soundHint: "Nghĩa: Cái đuôi (con vật)",
    audioText: "tail",
    wordTarget: "tail",
    distractor: "tale",
    translation: "Cái đuôi",
    meaningTarget: "Cái đuôi (/teɪl/)",
    meaningDistractor: "Câu chuyện cổ tích (/teɪl/)"
  },
  {
    soundHint: "Nghĩa: Vòng eo, thắt lưng",
    audioText: "waist",
    wordTarget: "waist",
    distractor: "waste",
    translation: "Vòng eo",
    meaningTarget: "Vòng eo (/weɪst/)",
    meaningDistractor: "Lãng phí / Rác thải (/weɪst/)"
  },
  {
    soundHint: "Nghĩa: Hòa bình, bình yên",
    audioText: "peace",
    wordTarget: "peace",
    distractor: "piece",
    translation: "Hòa bình",
    meaningTarget: "Hòa bình (/piːs/)",
    meaningDistractor: "Mảnh, mẩu (/piːs/)"
  },
  {
    soundHint: "Nghĩa: Mảnh, mẩu, miếng",
    audioText: "piece",
    wordTarget: "piece",
    distractor: "peace",
    translation: "Mảnh, miếng",
    meaningTarget: "Mảnh, miếng (/piːs/)",
    meaningDistractor: "Hòa bình (/piːs/)"
  },
  {
    soundHint: "Nghĩa: Công bằng / Hội chợ",
    audioText: "fair",
    wordTarget: "fair",
    distractor: "fare",
    translation: "Công bằng",
    meaningTarget: "Công bằng (/feə/)",
    meaningDistractor: "Tiền xe, cước phí (/feə/)"
  },
  {
    soundHint: "Nghĩa: Tiền xe, tiền vé",
    audioText: "fare",
    wordTarget: "fare",
    distractor: "fair",
    translation: "Tiền xe",
    meaningTarget: "Tiền vé (/feə/)",
    meaningDistractor: "Công bằng (/feə/)"
  },
  {
    soundHint: "Nghĩa: Bột mì",
    audioText: "flour",
    wordTarget: "flour",
    distractor: "flower",
    translation: "Bột mì",
    meaningTarget: "Bột mì (/flaʊə/)",
    meaningDistractor: "Bông hoa (/flaʊə/)"
  },
  {
    soundHint: "Nghĩa: Bông hoa",
    audioText: "flower",
    wordTarget: "flower",
    distractor: "flour",
    translation: "Bông hoa",
    meaningTarget: "Bông hoa (/flaʊə/)",
    meaningDistractor: "Bột mì (/flaʊə/)"
  },
  {
    soundHint: "Nghĩa: Yên tĩnh, êm đềm",
    audioText: "quiet",
    wordTarget: "quiet",
    distractor: "quite",
    translation: "Yên tĩnh",
    meaningTarget: "Yên tĩnh (/ˈkwaɪət/)",
    meaningDistractor: "Khá là (/kwaɪt/)"
  },
  {
    soundHint: "Nghĩa: Khá là, tương đối",
    audioText: "quite",
    wordTarget: "quite",
    distractor: "quiet",
    translation: "Khá là",
    meaningTarget: "Khá là (/kwaɪt/)",
    meaningDistractor: "Yên tĩnh (/ˈkwaɪət/)"
  }
];`;

const startIdx = content.indexOf('export const PHONEME_BLITZ_DATA =');
const endIdx = content.indexOf('export const SYNONYM_ANTONYM_DATA =');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.slice(0, startIdx) + newData + '\n\n' + content.slice(endIdx);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('PHONEME_BLITZ_DATA updated with 120+ Minimal Pairs!');
} else {
  console.error('Boundaries not found');
}
