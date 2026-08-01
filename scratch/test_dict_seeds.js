import fs from 'fs';

console.log("=== GENERATING VOCAB BANK DATASET (6,000+ WORDS) ===");

const allWordsMap = new Map();

function cleanWord(en, vn, category = '', rawPool = '') {
  if (!en || !vn) return null;
  let cleanEn = String(en).trim();
  let cleanVn = String(vn).trim().replace(/^(v:|n:|adj:|adv:)\s*/i, '');

  if (cleanEn.length < 2 || cleanEn.length > 35) return null;
  if (cleanEn.includes('...') || cleanEn.startsWith('✅') || cleanEn.startsWith('❌') || cleanEn.includes(' — ')) return null;
  if (cleanEn.includes('___')) return null;

  // Normalize capitalization: First letter capitalized for display
  cleanEn = cleanEn.charAt(0).toUpperCase() + cleanEn.slice(1);
  cleanVn = cleanVn.charAt(0).toUpperCase() + cleanVn.slice(1);

  const key = cleanEn.toLowerCase();

  // Categorize pool & level
  let pool = rawPool || 'common';
  let level = 'B1';
  let cat = category || 'General';

  const lowerCat = cat.toLowerCase();
  const lowerEn = cleanEn.toLowerCase();

  if (lowerCat.includes('toeic') || lowerCat.includes('work') || lowerCat.includes('career') || lowerCat.includes('business') || lowerCat.includes('finance') || lowerCat.includes('office') || lowerCat.includes('market') || lowerCat.includes('trade') || lowerCat.includes('contract')) {
    pool = 'toeic';
    level = 'B2';
  } else if (lowerCat.includes('ielts') || lowerCat.includes('academic') || lowerCat.includes('science') || lowerCat.includes('law') || lowerCat.includes('psychology') || lowerCat.includes('ethics') || lowerCat.includes('environment') || lowerCat.includes('tech') || lowerCat.includes('society') || lowerCat.includes('philosophy')) {
    pool = 'ielts';
    level = 'C1';
  } else if (lowerCat.includes('beginner') || lowerCat.includes('daily') || lowerCat.includes('a1') || lowerCat.includes('a2')) {
    pool = 'common';
    level = 'A1';
  } else if (lowerCat.includes('advanced') || lowerCat.includes('c1') || lowerCat.includes('c2')) {
    pool = 'common';
    level = 'C1';
  }

  return { en: cleanEn, vn: cleanVn, category: cat, pool, level };
}

// 1. Gather all existing words from scratch files & src
function scanFiles() {
  const scratchFiles = fs.readdirSync('./scratch');
  scratchFiles.forEach(file => {
    if (file.endsWith('.js') || file.endsWith('.json')) {
      try {
        const content = fs.readFileSync(`./scratch/${file}`, 'utf8');
        // JSON parse check
        if (file.endsWith('.json')) {
          const parsed = JSON.parse(content);
          if (Array.isArray(parsed)) {
            parsed.forEach(item => {
              const w = cleanWord(item.en || item.word, item.vn || item.translation || item.meaning, item.category || item.cat, item.pool);
              if (w && !allWordsMap.has(w.en.toLowerCase())) {
                allWordsMap.set(w.en.toLowerCase(), w);
              }
            });
          }
        } else {
          // JS regex check
          const regex = /{\s*"en":\s*"([^"]+)",\s*"vn":\s*"([^"]+)"(?:,\s*"category":\s*"([^"]+)")?/g;
          let m;
          while ((m = regex.exec(content)) !== null) {
            const w = cleanWord(m[1], m[2], m[3]);
            if (w && !allWordsMap.has(w.en.toLowerCase())) {
              allWordsMap.set(w.en.toLowerCase(), w);
            }
          }
        }
      } catch(e) {}
    }
  });
}

scanFiles();
console.log("Current gathered unique words:", allWordsMap.size);

// Read from games-data.js
try {
  const gamesDataContent = fs.readFileSync('./src/data/games-data.js', 'utf8');
  const regex = /{\s*"en":\s*"([^"]+)",\s*"vn":\s*"([^"]+)"(?:,\s*"category":\s*"([^"]+)")?/g;
  let m;
  while ((m = regex.exec(gamesDataContent)) !== null) {
    const w = cleanWord(m[1], m[2], m[3]);
    if (w && !allWordsMap.has(w.en.toLowerCase())) {
      allWordsMap.set(w.en.toLowerCase(), w);
    }
  }
} catch(e) {}

console.log("Unique words after reading games-data.js:", allWordsMap.size);

// Let's create dictionary expansion sets for TOEIC, IELTS, and 6000 Common Words
// We will generate comprehensive lists covering TOEIC Business/Workplace, IELTS Academic/Topic, and 6000 Common Words A1-C2.

const toeicSeeds = [
  { en: "Agenda", vn: "Chương trình nghị sự, lịch trình họp", cat: "Office & Meetings", level: "B1" },
  { en: "Applicant", vn: "Người nộp đơn ứng tuyển", cat: "HR & Recruitment", level: "B1" },
  { en: "Auditor", vn: "Kiểm toán viên", cat: "Finance & Accounting", level: "B2" },
  { en: "Bargain", vn: "Món hời, thương lượng giá", cat: "Sales & Marketing", level: "A2" },
  { en: "Brochure", vn: "Sách quảng cáo, tờ rơi", cat: "Sales & Marketing", level: "B1" },
  { en: "Budget", vn: "Ngân sách, quỹ tài chính", cat: "Finance & Accounting", level: "B1" },
  { en: "Candidate", vn: "Ứng viên xin việc", cat: "HR & Recruitment", level: "B1" },
  { en: "Compensation", vn: "Tiền bồi thường, thù lao", cat: "HR & Recruitment", level: "B2" },
  { en: "Compliance", vn: "Sự tuân thủ quy định", cat: "Legal & Corporate", level: "C1" },
  { en: "Consignment", vn: "Lô hàng ký gửi", cat: "Logistics & Shipping", level: "B2" },
  { en: "Contractor", vn: "Nhà thầu", cat: "Corporate & Construction", level: "B2" },
  { en: "Corporation", vn: "Tập đoàn, công ty lớn", cat: "Corporate Management", level: "B2" },
  { en: "Defect", vn: "Hàng lỗi, khuyết điểm sản phẩm", cat: "Manufacturing & QA", level: "B2" },
  { en: "Delegation", vn: "Đoàn đại biểu, sự phân công", cat: "Corporate Management", level: "C1" },
  { en: "Depreciation", vn: "Sự khấu hao tài sản", cat: "Finance & Accounting", level: "C1" },
  { en: "Dividend", vn: "Cổ tức, tiền lãi cổ phần", cat: "Finance & Banking", level: "C1" },
  { en: "Enterprise", vn: "Doanh nghiệp, thương nghiệp", cat: "Corporate Management", level: "B2" },
  { en: "Executive", vn: "Giám đốc điều hành, cấp quản lý", cat: "Corporate Management", level: "B2" },
  { en: "Incentive", vn: "Tiền thưởng khuyến khích, ưu đãi", cat: "HR & Sales", level: "B2" },
  { en: "Inventory", vn: "Hàng tồn kho, sự kiểm kê", cat: "Logistics & Warehouse", level: "B2" },
  { en: "Invoice", vn: "Hóa đơn thanh toán", cat: "Finance & Office", level: "B1" },
  { en: "Itinerary", vn: "Lịch trình chuyến đi", cat: "Travel & Hospitality", level: "B2" },
  { en: "Liability", vn: "Nghĩa vụ pháp lý, khoản nợ", cat: "Finance & Legal", level: "C1" },
  { en: "Merger", vn: "Sự sáp nhập doanh nghiệp", cat: "Corporate Management", level: "C1" },
  { en: "Negotiation", vn: "Cuộc thương lượng, đàm phán", cat: "Corporate Management", level: "B2" },
  { en: "Personnel", vn: "Nhân sự, toàn bộ nhân viên", cat: "HR & Recruitment", level: "B2" },
  { en: "Portfolio", vn: "Danh mục đầu tư, hồ sơ năng lực", cat: "Finance & Banking", level: "B2" },
  { en: "Proceeds", vn: "Tiền thu được từ bán hàng", cat: "Finance & Accounting", level: "C1" },
  { en: "Procurement", vn: "Sự thu mua, mua sắm trang thiết bị", cat: "Corporate & Logistics", level: "C1" },
  { en: "Quota", vn: "Hạn ngạch, chỉ tiêu", cat: "Sales & Trade", level: "B2" },
  { en: "Receipt", vn: "Biên lai thanh toán", cat: "Sales & Office", level: "A2" },
  { en: "Reimburse", vn: "Hoàn lại tiền chi phí", cat: "Finance & HR", level: "B2" },
  { en: "Renovation", vn: "Sự nâng cấp, cải tạo", cat: "Real Estate & Corporate", level: "B2" },
  { en: "Restructure", vn: "Tái cơ cấu công ty", cat: "Corporate Management", level: "C1" },
  { en: "Revenue", vn: "Doanh thu", cat: "Finance & Accounting", level: "B2" },
  { en: "Shareholder", vn: "Cổ đông", cat: "Corporate & Finance", level: "B2" },
  { en: "Shipment", vn: "Lô hàng vận chuyển", cat: "Logistics & Shipping", level: "B1" },
  { en: "Signature", vn: "Chữ ký", cat: "Office & Legal", level: "A2" },
  { en: "Strategy", vn: "Chiến lược", cat: "Corporate Management", level: "B2" },
  { en: "Subscriber", vn: "Người đăng ký dịch vụ", cat: "Sales & IT", level: "B1" },
  { en: "Subsidiary", vn: "Công ty con", cat: "Corporate Management", level: "C1" },
  { en: "Surplus", vn: "Số lượng thặng dư, dư thừa", cat: "Finance & Trade", level: "C1" },
  { en: "Tariff", vn: "Thuế quan xuất nhập khẩu", cat: "Trade & Customs", level: "C1" },
  { en: "Transaction", vn: "Giao dịch tài chính", cat: "Banking & Finance", level: "B2" },
  { en: "Unanimous", vn: "Nhất trí 100%, đồng lòng", cat: "Corporate & Legal", level: "C1" },
  { en: "Vacancy", vn: "Vị trí việc làm còn trống", cat: "HR & Recruitment", level: "B1" },
  { en: "Vendor", vn: "Nhà cung cấp, người bán hàng", cat: "Sales & Supply Chain", level: "B2" },
  { en: "Warranty", vn: "Phần phiếu bảo hành", cat: "Sales & Customer Service", level: "B1" },
  { en: "Workplace", vn: "Nơi làm việc", cat: "Office & HR", level: "A2" },
  { en: "Yield", vn: "Lợi nhuận thu được, sản lượng", cat: "Finance & Agriculture", level: "C1" }
];

toeicSeeds.forEach(item => {
  const w = cleanWord(item.en, item.vn, item.cat, 'toeic');
  if (w && !allWordsMap.has(w.en.toLowerCase())) {
    w.pool = 'toeic';
    w.level = item.level;
    allWordsMap.set(w.en.toLowerCase(), w);
  }
});

console.log("Total unique words after adding seeds:", allWordsMap.size);
