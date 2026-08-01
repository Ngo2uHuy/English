import fs from 'fs';
import path from 'path';

console.log("=== COMPREHENSIVE SCAN AND PURGE SCRIPT ===");

// 1. Load dictionary of real English words or build clean list
const vocabBankPath = './src/data/vocab-bank.js';
const gamesDataPath = './src/data/games-data.js';

const vocabContent = fs.readFileSync(vocabBankPath, 'utf8');
const gamesContent = fs.readFileSync(gamesDataPath, 'utf8');

// Synthetic pattern matcher
const isSyntheticVn = (vn) => {
  if (!vn) return false;
  return /^(Anti|Counter|Post|Pre|Sub|Dis|Re|Un|Pro|Inter|Super|Under|Over|Mis)\s+[a-zà-ỹ]/i.test(vn.trim());
};

const isFakeEnWord = (en) => {
  if (!en) return false;
  const lower = en.trim().toLowerCase();
  const fakeList = [
    'antiable', 'antiactive', 'counterable', 'counteractive', 'disactive',
    'interable', 'interacceptable', 'interaffected', 'interapplied', 'interbalanced',
    'intercertified', 'intercombined', 'intereducated', 'interemployed', 'interenabled',
    'interendorsed', 'interenhanced', 'unactive', 'unadapted', 'unadjusted', 'unaligned',
    'unallocated', 'unaltered', 'unanalyzed'
  ];
  return fakeList.includes(lower);
};

// Common word fix map for words that ARE real English words but got bad synthetic translations
const realWordFixes = {
  'unable': 'Không thể, không có khả năng',
  'unacceptable': 'Không thể chấp nhận',
  'unaffected': 'Không bị ảnh hưởng',
  'unallocated': 'Chưa phân bổ',
  'unaltered': 'Chưa thay đổi, nguyên vẹn',
  'unanswered': 'Chưa được trả lời',
  'unattached': 'Độc thân, không gắn kết',
  'unattended': 'Không có người trông nom',
  'unavailable': 'Không có sẵn, bận',
  'unaware': 'Không nhận ra, không biết',
  'unbalanced': 'Mất cân bằng',
  'unbearable': 'Không thể chịu nổi',
  'unbelievable': 'Không thể tin được',
  'uncertain': 'Không chắc chắn',
  'unchanged': 'Không thay đổi',
  'uncomfortable': 'Không thoải mái',
  'uncommon': 'Hiếm gặp, không phổ biến',
  'unconditional': 'Vô điều kiện',
  'unconscious': 'Bất tỉnh, không tự giác',
  'uncontrolled': 'Không kiểm soát được',
  'uncountable': 'Không đếm được',
  'undecided': 'Chưa quyết định',
  'undefined': 'Chưa xác định',
  'undeniable': 'Không thể phủ nhận',
  'underground': 'Dưới mặt đất, ngầm',
  'understand': 'Hiểu, hiểu rõ',
  'understanding': 'Sự hiểu biết, thấu hiểu',
  'undesirable': 'Không mong muốn',
  'undoubted': 'Rõ ràng, không nghi ngờ',
  'uneasy': 'Lo lắng, bồn chồn',
  'unemployed': 'Thất nghiệp',
  'unequal': 'Không bình đẳng',
  'unexpected': 'Bất ngờ, ngoài dự kiến',
  'unfair': 'Không công bằng',
  'unfamiliar': 'Xa lạ, không quen',
  'unfavorable': 'Bất lợi, không thuận lợi',
  'unfit': 'Không vừa, không thích hợp',
  'unfortunate': 'Không may mắn',
  'unfriendly': 'Không thân thiện',
  'unhappy': 'Không vui, buồn',
  'unhealthy': 'Không lành mạnh',
  'unidentified': 'Chưa xác định danh tính',
  'important': 'Quan trọng',
  'impossible': 'Không thể',
  'impatient': 'Nóng vội, thiếu kiên nhẫn',
  'imperfect': 'Chưa hoàn hảo',
  'impolite': 'Bất lịch sự',
  'inactive': 'Không hoạt động',
  'inaccurate': 'Không chính xác',
  'inappropriate': 'Không thích hợp',
  'incapable': 'Không có khả năng',
  'incomplete': 'Chưa hoàn thành',
  'incorrect': 'Không đúng, sai',
  'indirect': 'Gián tiếp',
  'informal': 'Thân mật, không trang trọng',
  'unoccupied': 'Không có người ở, nhàn rỗi, còn trống',
  'improved': 'Đã cải thiện, được nâng cao',
  'disable': 'Vô hiệu hóa, làm tàn tật',
  'interactive': 'Tương tác, có tính tương tác',
  'disinterested': 'Vô tư, không vụ lợi, không quan tâm'
};

console.log("Fixes dictionary defined for real words with bad synthetic translations.");
