import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/data/grammar-data.js');
let code = fs.readFileSync(targetPath, 'utf8');

// Extraction bounds
const startMarker = 'export const GRAMMAR_TOPICS = ';
const endMarker = ';\n\n// ==========================================================================\n// EXPERT ROADMAP';

const startIndex = code.indexOf(startMarker);
const endIndex = code.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in grammar-data.js');
  process.exit(1);
}

const jsonStr = code.substring(startIndex + startMarker.length, endIndex);
const topics = JSON.parse(jsonStr);

// Comprehensive Vietnamese translations for overviews and rule explanations
const TRANSLATIONS = {
  // Overviews
  "The verb \"to be\" is the most fundamental verb in English. It is used to describe identity, characteristics, states, and locations.":
    "Động từ \"To Be\" là động từ nền tảng nhất trong tiếng Anh, dùng để giới thiệu bản thân, diễn tả quốc tịch, tuổi tác, đặc điểm tính cách, trạng thái và vị trí.",

  "The Present Simple (thì hiện tại đơn) is used for facts, general truths, habits, and permanent situations.":
    "Thì Hiện tại đơn (Present Simple) dùng để diễn tả thói quen lặp đi lặp lại hàng ngày, sự thật hiển nhiên, quy luật tự nhiên hoặc các trạng thái cố định kéo dài.",

  "The Present Continuous (thì hiện tại tiếp diễn) is used for actions happening right now, temporary situations, and planned future events.":
    "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả hành động đang diễn ra ngay tại thời điểm nói, các tình huống mang tính tạm thời, hoặc kế hoạch tương lai đã sắp xếp sẵn.",

  "The Past Simple (thì quá khứ đơn) is used for actions that happened and finished at a specific time in the past.":
    "Thì Quá khứ đơn (Past Simple) dùng để diễn tả hành động đã xảy ra và hoàn toàn kết thúc tại một thời điểm xác định trong quá khứ.",

  "Future Simple (will) and Be Going To are used to talk about actions and predictions in the future.":
    "Thì Tương lai đơn (Will) và Cấu trúc Be Going To dùng để diễn tả các quyết định bộc phát, kế hoạch đã lên lịch trước hoặc dự đoán sự việc trong tương lai.",

  "Countable nouns can be counted (one apple, two apples). Uncountable nouns cannot be counted directly (water, rice, information).":
    "Danh từ đếm được (Countable Nouns) có thể đếm theo từng đơn vị (một quả táo, hai quả táo). Danh từ không đếm được (Uncountable Nouns) là chất lỏng, hạt nhỏ hoặc khái niệm trừu tượng (water, rice, information).",

  "Articles (a, an, the) are used before nouns to show whether the noun is specific or general.":
    "Mạo từ (a, an, the) đứng trước danh từ để chỉ ra đối tượng được nhắc đến là chung chung (a/an) hay cụ thể (the).",

  "Pronouns replace nouns to avoid repetition. Personal pronouns can be subjects (I, you, he) or objects (me, him, her).":
    "Đại từ thay thế cho danh từ để tránh lặp từ trong câu. Đại từ nhân xưng có thể đóng vai trò làm Chủ ngữ (I, you, he...) hoặc Tân ngữ (me, him, her...).",

  "Prepositions show relationships of time, place, direction, and position between words in a sentence.": "Giới từ thể hiện mối quan hệ về thời gian, nơi chốn, hướng đi và vị trí giữa các từ trong câu.",

  "There is and There are state the existence of something in a particular place.": "Cấu trúc There is / There are dùng để thông báo về sự tồn tại của người hoặc vật tại một địa điểm xác định.",

  "Comparatives compare two things (taller, more interesting). Superlatives compare one thing against a group (the tallest, the most interesting).": "So sánh hơn dùng để so sánh 2 đối tượng (taller, more expensive). So sánh nhất dùng để so sánh 1 đối tượng với cả tập hợp (the tallest, the most expensive).",

  "Modal verbs (can, could, must, should, may, might) add meaning like ability, permission, obligation, advice, or possibility.": "Động từ khuyết thiếu (can, could, must, should, may, might) dùng để bày tỏ khả năng, sự cho phép, nghĩa vụ bắt buộc, lời khuyên hoặc khả năng xảy ra.",

  "Adjectives describe nouns (a fast car). Adverbs describe verbs, adjectives, or other adverbs (he drives fast / quickly).": "Tính từ bổ nghĩa cho danh từ (a fast car). Trạng từ bổ nghĩa cho động từ, tính từ hoặc trạng từ khác (he drives fast / quickly).",

  "Possessive adjectives (my, your) go before nouns. Reflexive pronouns (myself, yourself) refer back to the subject.": "Tính từ sở hữu (my, your...) đứng trước danh từ. Đại từ phản xạ (myself, yourself...) chỉ hành động do chính chủ ngữ thực hiện tác động lại bản thân.",

  "Questions can be Yes/No, Wh- questions, or tag questions added to the end of a statement.": "Câu hỏi trong tiếng Anh gồm Câu hỏi Yes/No, Câu hỏi Wh- (từ để hỏi) và Câu hỏi đuôi (Question tags) ở cuối mệnh đề.",

  "The Present Perfect connects the past with the present. It expresses life experiences, recent events, or states continuing until now.": "Thì Hiện tại hoàn thành (Present Perfect) nối liền quá khứ với hiện tại, diễn tả trải nghiệm sống, sự việc vừa mới xảy ra hoặc trạng thái kéo dài đến nay.",

  "The Present Perfect Continuous emphasizes the duration or ongoing nature of an action that started in the past and continues into the present.": "Thì Hiện tại hoàn thành tiếp diễn nhấn mạnh vào TÍNH LIÊN TỤC hoặc THỜI LƯỢNG của hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn.",

  "The Past Continuous describes actions that were in progress at a specific time in the past, often interrupted by another event.": "Thì Quá khứ tiếp diễn (Past Continuous) diễn tả hành động đang diễn ra tại một thời điểm xác định trong quá khứ, thường bị một hành động khác xen vào.",

  "The Past Perfect describes an action completed BEFORE another action or time in the past. It is the 'past before the past'.": "Thì Quá khứ hoàn thành (Past Perfect) diễn tả hành động đã hoàn thành TRƯỚC một sự kiện hoặc mốc thời gian khác trong quá khứ.",

  "The Past Perfect Continuous emphasizes the duration of an ongoing action before a specific past event.": "Thì Quá khứ hoàn thành tiếp diễn nhấn mạnh khoảng thời gian kéo dài liên tục của một hành động cho tới trước một mốc quá khứ khác.",

  "The Future Continuous describes an action that will be in progress at a specific time in the future.": "Thì Tương lai tiếp diễn (Future Continuous) diễn tả hành động đang diễn ra tại một thời điểm xác định trong tương lai.",

  "The Future Perfect describes an action that will be completed BEFORE a specific point in the future.": "Thì Tương lai hoàn thành (Future Perfect) diễn tả hành động sẽ hoàn thành TRƯỚC một mốc thời gian hoặc một hành động khác trong tương lai.",

  "The Future Perfect Continuous emphasizes the ongoing duration of an action up to a future moment.": "Thì Tương lai hoàn thành tiếp diễn nhấn mạnh thời lượng kéo dài liên tục của hành động tính tới một thời điểm trong tương lai.",

  "Conditionals express real or unreal conditions and their results using if-clauses (Type 0, 1, 2).": "Câu điều kiện (Conditionals) diễn tả điều kiện có thật hoặc giả định và kết quả đi kèm thông qua mệnh đề If (Loại 0, 1, 2).",

  "The Passive Voice shifts focus from the doer of the action (subject) to the receiver of the action (object).": "Câu bị động (Passive Voice) chuyển trọng tâm từ người thực hiện hành động sang đối tượng chịu tác động của hành động.",

  "Reported speech (indirect speech) is used to report what someone else said without using their exact words.": "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác mà không sử dụng nguyên văn lời thoại trực tiếp.",

  "Relative clauses give extra information about a noun using relative pronouns (who, which, that, whose, where).": "Mệnh đề quan hệ (Relative Clauses) bổ sung thông tin chi tiết cho danh từ bằng cách dùng đại từ quan hệ (who, which, that, whose, where).",

  "Gerunds (verb-ing) and Infinitives (to + verb) are verb forms that function like nouns after certain verbs and prepositions.": "Danh động từ (V-ing) và Động từ nguyên mẫu (To-V) là dạng động từ đóng vai trò như danh từ sau các động từ và giới từ nhất định.",

  "Phrasal verbs consist of a main verb + particle (preposition or adverb) creating a new idiomatic meaning.": "Cụm động từ (Phrasal Verbs) gồm Động từ + Giới từ/Tiểu từ, tạo thành một nghĩa thành ngữ mới khác với nghĩa gốc của từ.",

  "Conjunctions and connectors join words, phrases, or clauses to show logical relationships (addition, contrast, cause, result).": "Liên từ và từ nối giúp gắn kết các từ, cụm từ hoặc mệnh đề để thể hiện quan hệ logic (bổ sung, đối lập, nguyên nhân, kết quả).",

  "Used to, would, and be/get used to talk about past habits, former states, and getting accustomed to things.": "Các cấu trúc Used to, Would và Be/Get used to dùng để diễn tả thói quen quá khứ, trạng thái cũ hoặc việc dần quen với một điều gì đó.",

  "Modals of deduction (must, can't, might, could) are used to make logical guesses about present and past situations.": "Động từ khuyết thiếu suy đoán (must, can't, might, could) dùng để đưa ra phán đoán logic về các tình huống ở hiện tại hoặc quá khứ.",

  "Wish and If Only express desires for things to be different from reality in the present or past.": "Cấu trúc Wish & If Only diễn tả mong ước trái ngược với thực tế ở hiện tại hoặc sự nuối tiếc trong quá khứ.",

  "Third conditionals and mixed conditionals express regret or unreal conditions in the past and their consequences.": "Câu điều kiện loại 3 và điều kiện hỗn hợp diễn tả sự nuối tiếc, giả định không có thật trong quá khứ và kết quả tương ứng.",

  "Inversion reverses the normal word order (auxiliary before subject) for dramatic emphasis and formal academic style.": "Đảo ngữ (Inversion) đảo trợ động từ lên trước chủ ngữ nhằm tạo ấn tượng mạnh mẽ và văn phong học thuật trang trọng.",

  "Cleft sentences (It is/was... that / What... is) divide a sentence to emphasize a specific element.": "Câu chẻ (Cleft Sentences) chia tách câu để tập trung sự chú ý của người đọc vào một thông tin trọng tâm.",

  "The Subjunctive mood uses base verb forms to express urgency, requirements, recommendations, or hypothetical situations.": "Thức giả định (Subjunctive Mood) sử dụng động từ nguyên mẫu không chia để thể hiện sự khẩn cấp, yêu cầu, kiến nghị hoặc giả định.",

  "Advanced passive structures include impersonal passive (It is said that...), causative passive (have something done), and passive infinitives.": "Cấu trúc bị động nâng cao gồm bị động khách quan (It is said that...), bị động truyền dụng (have something done) và bị động của động từ nguyên mẫu.",

  "Participle clauses (-ing and -ed clauses) shorten sentences and provide background information, reason, or condition concisely.": "Mệnh đề phân từ (Participle Clauses) giúp rút gọn câu, cung cấp thông tin nền, nguyên nhân hoặc điều kiện một cách súc tích.",

  "Ellipsis omits words to avoid repetition; substitution replaces words with pronouns, 'do so', or 'so/neither'.": "Lược bỏ (Ellipsis) loại bỏ từ lặp; Thay thế (Substitution) dùng các từ đại diện như 'do so', 'so/neither' giúp văn phong mượt mà.",

  "Emphasis and fronting move important elements to the sentence beginning or use emphatic 'do' for rhetorical impact.": "Tiền đề hóa (Fronting) chuyển các thành phần quan trọng lên đầu câu hoặc dùng 'Do' nhấn mạnh để tạo hiệu ứng văn phong.",

  "Complex noun phrases pack detailed information using pre-modifiers (adjectives, nouns) and post-modifiers (prepositional phrases, relative clauses).": "Cụm danh từ phức hợp (Complex Noun Phrases) nén nhiều thông tin chi tiết bằng các từ bổ nghĩa đứng trước và đứng sau.",

  "Discourse markers signal logical connections, structure academic texts, and guide the reader through arguments.": "Từ nối dẫn dắt (Discourse Markers) định hướng lập luận, liên kết logic và dẫn dắt người đọc qua các đoạn văn học thuật.",

  "Inverted conditionals remove 'if' and put Should, Were, or Had at the sentence start for formal academic prose.": "Đảo ngữ câu điều kiện bỏ 'If' và đưa Should, Were, Had lên đầu mệnh đề mang sắc thái trang trọng.",

  "Academic collocations are natural word combinations expected in scholarly writing and professional communication.": "Cụm từ cố định học thuật (Academic Collocations) là sự kết hợp từ tự nhiên chuẩn mực trong văn viết bài luận và báo cáo.",

  "Punctuation rules for semicolons, colons, dashes, and commas ensure syntactic clarity and sophisticated sentence structures.": "Quy tắc dấu câu (dấu chấm phẩy, dấu hai chấm, dấu gạch ngang) bảo đảm sự rõ ràng cú pháp và cấu trúc câu tinh tế.",

  "Irregular verbs do not follow the standard -ed pattern in past simple and past participle forms.": "Động từ bất quy tắc KHÔNG thêm đuôi -ed ở quá khứ và quá khứ phân từ, đòi hỏi phải học thuộc 3 cột V1 - V2 - V3.",

  "Mastering Parts of Speech (Nouns, Verbs, Adjectives, Adverbs) is essential for solving TOEIC Part 5 & 6 questions quickly.": "Làm chủ Từ loại (Danh từ, Động từ, Tính từ, Trạng từ) là chìa khóa để giải quyết 80% câu hỏi TOEIC Part 5 & 6 nhanh chóng.",

  "Subject-Verb Agreement rules ensure singular subjects take singular verbs and plural subjects take plural verbs.": "Sự hòa hợp Chủ ngữ - Động từ bảo đảm chủ ngữ số ít đi với động từ số ít, chủ ngữ số nhiều đi với động từ số nhiều.",

  "Prepositions are followed by nouns/N-phrases (-ing); conjunctions are followed by full subject-verb clauses in TOEIC test items.": "Giới từ theo sau là Danh từ/V-ing (despite, due to); Liên từ theo sau là Mệnh đề S + V (although, because) trong đề thi TOEIC.",

  "Quantifiers and determiners express quantity and modify nouns in precise ways tested frequently on TOEIC exams.": "Từ chỉ số lượng và định từ thể hiện số lượng chính xác của danh từ, xuất hiện liên tục trong bài thi TOEIC.",

  "Reduced clauses transform full relative or adverbial clauses into participle phrases (-ing / -ed) for concise writing.": "Rút gọn mệnh đề giúp giản lược câu phức thành cụm phân từ (-ing / -ed), làm cho câu viết đắt giá và ngắn gọn.",

  "Parallel structure requires elements connected by conjunctions (and, or, not only...but also) to share the same grammatical form.": "Cấu trúc song song đòi hỏi các thành phần nối với nhau bằng liên từ (and, or, not only...but also) phải có cùng dạng ngữ pháp.",

  "Business Subjunctive mood appears in corporate demands, contracts, and formal proposals (demand that he submit...).": "Thức giả định thương mại xuất hiện trong các yêu cầu doanh nghiệp, hợp đồng và đề xuất trang trọng (require that he be...).",

  // Rule Explication Dictionary
  "The verb 'to be' has three forms in the present: am, is, are.": "Động từ 'To Be' có 3 dạng ở thì hiện tại đơn: am, is, are. Dùng 'am' với I; 'is' với He, She, It, danh từ số ít; 'are' với You, We, They, danh từ số nhiều.",
  "We use 'to be' to talk about: identity, age, nationality, feelings, descriptions, jobs, and location.": "Động từ 'To Be' dùng để diễn tả danh tính, tuổi tác, quốc tịch, cảm xúc, đặc điểm tính cách, nghề nghiệp và vị trí địa lý.",
  "Form questions by swapping the subject and 'to be': Is she...? Are you...? Form negatives by adding 'not': am not, is not (isn't), are not (aren't).": "Tạo câu hỏi bằng cách đảo To Be lên trước chủ ngữ (Is she...? Are you...?). Tạo câu phủ định bằng cách thêm 'not' đằng sau To Be (am not, isn't, aren't).",
  "We use the present simple for habits, facts, and permanent situations. Add -s/-es for third-person singular (he/she/it).": "Thì Hiện tại đơn dùng cho thói quen hàng ngày, sự thật hiển nhiên hoặc tình trạng cố định. Thêm -s/-es đằng sau động từ khi chủ ngữ là He/She/It.",
  "Use 'do/does' for questions and 'don't/doesn't' for negatives. Third-person singular uses 'does/doesn't' + base verb.": "Dùng trợ động từ 'do/does' cho câu hỏi và 'don't/doesn't' cho câu phủ định. Với He/She/It, dùng 'does/doesn't' đi với động từ nguyên mẫu.",
  "Spelling rules for third-person singular (-s, -es, -ies).": "Quy tắc thêm đuôi: Thêm -es sau động từ kết thúc bằng -o, -ch, -sh, -x, -s, -z (goes, watches). Đổi -y thành -ies nếu trước -y là phụ âm (study -> studies).",
  "Form: am/is/are + verb-ing. Used for actions happening right now at the moment of speaking.": "Công thức: S + am/is/are + V-ing. Dùng để diễn tả hành động đang diễn ra ngay lúc nói (ví dụ: I am reading now).",
  "Used for temporary situations, ongoing projects, and changing/developing situations.": "Dùng cho các tình huống mang tính tạm thời, dự án đang triển khai hoặc những sự thay đổi theo thời gian.",
  "Stative verbs (like, know, understand, believe, want) are NOT usually used in continuous tenses.": "Các động từ chỉ trạng thái (like, know, understand, believe, want) KHÔNG dùng ở thì tiếp diễn.",
  "Form: Regular verbs add -ed (played, walked). Irregular verbs have unique past forms (went, saw, ate). Used for completed actions at a specific time in the past.": "Công thức: Động từ có quy tắc thêm -ed (played); động từ bất quy tắc dùng cột V2 (went, saw). Dùng cho hành động đã xong trong quá khứ.",
  "Use 'did' for questions and 'didn't' for negatives + base verb for all subjects.": "Dùng trợ động từ 'did' trong câu hỏi và 'didn't' trong câu phủ định đi kèm động từ nguyên mẫu cho tất cả các chủ ngữ.",
  "Spelling rules for regular past tense (-ed endings and pronunciation /t/, /d/, /ɪd/).": "Quy tắc phát âm đuôi -ed: /ɪd/ sau âm /t/, /d/; /t/ sau các âm vô thanh (/p/, /k/, /f/, /s/, /ʃ/, /tʃ/); /d/ cho các âm còn lại.",
  "Form: will + base verb for all subjects. Used for instant decisions, predictions without present evidence, promises, and offers.": "Công thức: S + will + V-nguyên mẫu. Dùng cho quyết định bộc phát tại thời điểm nói, dự đoán không bằng chứng, lời hứa hoặc đề nghị.",
  "Use 'be going to + verb' for planned future actions and predictions based on present evidence.": "Cấu trúc 'Be going to + V' dùng cho kế hoạch đã lên lịch trước hoặc dự đoán dựa trên dấu hiệu/bằng chứng thực tế.",
  "Countable nouns can be counted and have singular and plural forms (an apple, three apples). Uncountable nouns cannot be counted individually (water, advice, rice).": "Danh từ đếm được có cả dạng số ít và số nhiều (apple -> apples). Danh từ không đếm được là chất lỏng, vật chất hoặc khái niệm (water, rice, advice).",
  "Use 'a/an' with singular countable nouns. Use 'some' with uncountable nouns and plural countable nouns in positive sentences. Use 'any' in questions and negatives.": "Dùng 'a/an' với danh từ đếm được số ít. Dùng 'some' với danh từ không đếm được/số nhiều trong câu khẳng định. Dùng 'any' trong câu phủ định/câu hỏi.",
  "Use 'a' before consonant sounds (a book, a university). Use 'an' before vowel sounds (an apple, an hour).": "Dùng 'a' trước danh từ bắt đầu bằng phụ âm (a book, a university). Dùng 'an' trước danh từ bắt đầu bằng nguyên âm (an apple, an hour).",
  "Use 'the' when referring to a specific item already known to the speaker and listener, or for unique things (the sun, the world).": "Dùng 'the' khi nói về vật/người cụ thể mà cả hai bên đều biết, hoặc các đối tượng duy nhất (the sun, the moon).",
  "Do NOT use articles (zero article) with uncountable or plural nouns when speaking generally.": "KHÔNG dùng mạo từ khi nói chung chung về danh từ không đếm được hoặc danh từ số nhiều (Cats like milk).",
  "Subject pronouns (I, you, he, she, it, we, they) do the action. Object pronouns (me, you, him, her, it, us, them) receive the action.": "Đại từ làm Chủ ngữ (I, you, he...) thực hiện hành động. Đại từ làm Tân ngữ (me, him, her...) nhận tác động của hành động.",
  "Time prepositions: AT (specific times: at 5 PM), ON (days and dates: on Monday), IN (months, years, seasons: in July, in 2024).": "Giới từ chỉ thời gian: AT dùng cho giờ (at 5 PM); ON dùng cho ngày/ngày tháng (on Monday); IN dùng cho tháng, năm, mùa (in July, in 2024).",
  "Place prepositions: AT (specific points: at the bus stop), ON (surfaces: on the table), IN (enclosed spaces: in the room).": "Giới từ nơi chốn: AT dùng cho địa điểm xác định (at the bus stop); ON dùng cho bề mặt (on the table); IN dùng cho không gian khép kín (in the room).",
  "Use 'There is' (+ singular/uncountable noun) and 'There are' (+ plural noun) to state that something exists in a location.": "Dùng 'There is' (với danh từ số ít/không đếm được) và 'There are' (với danh từ số nhiều) để chỉ sự tồn tại.",
  "Comparatives compare 2 things: short adj + -er (taller), long adj: more + adj (more expensive). Use 'than' after comparatives.": "So sánh hơn: tính từ ngắn + -er (taller); tính từ dài dùng more + tính từ (more expensive). Thêm 'than' đằng sau.",
  "Superlatives compare 3+ things: the + short adj + -est (the tallest), the most + long adj (the most expensive).": "So sánh nhất: the + tính từ ngắn + -est (the tallest); the most + tính từ dài (the most expensive).",
  "Can/Could express ability and polite requests. Must/Have to express obligation and rules. Should expresses advice.": "Can/Could diễn tả khả năng/lời yêu cầu. Must/Have to diễn tả sự bắt buộc. Should diễn tả lời khuyên nên làm.",
  "Adjectives describe nouns (a quick runner). Adverbs describe verbs, adjectives, or other adverbs (he runs quickly). Most adverbs end in -ly.": "Tính từ bổ nghĩa cho danh từ (a quick runner). Trạng từ bổ nghĩa cho động từ, tính từ hoặc trạng từ khác (he runs quickly).",
  "Irregular adverbs: good -> well, fast -> fast, hard -> hard, late -> late.": "Trạng từ bất quy tắc: good -> well; fast, hard, late giữ nguyên không thêm đuôi -ly.",
  "Possessive adjectives (my, your, his, her, its, our, their) come BEFORE nouns. Possessive pronouns (mine, yours, his, hers, ours, theirs) replace nouns.": "Tính từ sở hữu (my, your...) đứng TRƯỚC danh từ. Đại từ sở hữu (mine, yours...) thay thế cho cả cụm tính từ + danh từ.",
  "Reflexive pronouns (myself, yourself, himself, herself, itself, ourselves, themselves) are used when the subject and object are the same person/thing.": "Đại từ phản xạ (myself, yourself...) dùng khi chủ ngữ và tân ngữ trong câu là cùng một người/vật.",
  "Form questions with auxiliary verbs (be, do, have, modal) before the subject: Auxiliary + S + V...?": "Đặt câu hỏi: Đảo trợ động từ lên trước chủ ngữ (Trợ động từ + S + V...?).",
  "Question tags: positive sentence + negative tag (You are English, aren't you?); negative sentence + positive tag (She doesn't like tea, does she?).": "Câu hỏi đuôi: Mệnh đề khẳng định + đuôi phủ định (You are English, aren't you?); Mệnh đề phủ định + đuôi khẳng định (She isn't here, is she?).",
  "Form: have/has + past participle (V3). Used for life experiences without mentioning specific time (I have visited Paris).": "Công thức: S + have/has + V3/ed. Dùng cho trải nghiệm sống mà không cần nói thời gian cụ thể (I have visited Paris).",
  "Used with 'for' (duration: for 5 years) and 'since' (starting point: since 2020).": "Đi với 'for' (chỉ khoảng thời gian: for 5 years) và 'since' (chỉ mốc thời gian bắt đầu: since 2020).",
  "Used with 'just' (recently), 'already' (sooner than expected), and 'yet' (until now, in negatives/questions).": "Đi với 'just' (vừa mới), 'already' (đã xong rồi) và 'yet' (chưa - dùng trong câu phủ định/câu hỏi).",
  "Form: have/has been + verb-ing. Used for actions that started in the past, continue to the present, and emphasize DURATION or ongoing effort.": "Công thức: S + have/has been + V-ing. Nhấn mạnh vào THỜI LƯỢNG liên tục của hành động từ quá khứ đến nay.",
  "Present Perfect vs Present Perfect Continuous: Simple emphasizes RESULT (I have read 3 books); Continuous emphasizes DURATION (I have been reading for 3 hours).": "So sánh: Present Perfect Simple nhấn mạnh KẾT QUẢ/SỐ LƯỢNG; Present Perfect Continuous nhấn mạnh THỜI LƯỢNG/QUÁ TRÌNH.",
  "Form: was/were + verb-ing. Used for actions that were in progress at a specific moment in the past.": "Công thức: S + was/were + V-ing. Dùng cho hành động đang diễn ra tại một thời điểm xác định trong quá khứ.",
  "Often combined with Past Simple using 'when' and 'while': long background action in Past Continuous, interrupted by short action in Past Simple.": "Kết hợp với Past Simple: Hành động dài dùng Past Continuous, hành động ngắn xen vào dùng Past Simple (While I was reading, the phone rang).",
  "Form: had + past participle (V3). Used for an action that happened BEFORE another action or time in the past.": "Công thức: S + had + V3/ed. Dùng cho hành động xảy ra và kết thúc TRƯỚC một sự kiện quá khứ khác.",
  "Form: had been + verb-ing. Used for an ongoing action in the past that continued up until another event or time in the past.": "Công thức: S + had been + V-ing. Dùng cho hành động xảy ra liên tục trong quá khứ trước một mốc quá khứ khác.",
  "Emphasizes the duration of an activity before a past checkpoint (He was tired because he had been working all day).": "Nhấn mạnh quá trình liên tục dẫn đến kết quả trong quá khứ (He was tired because he had been working all day).",
  "Form: will be + verb-ing. Used for actions that will be in progress at a specific time in the future.": "Công thức: S + will be + V-ing. Dùng cho hành động đang diễn ra tại mốc thời gian xác định trong tương lai.",
  "Used for polite inquiries about future plans and scheduled events.": "Dùng để hỏi hoặc để cập lịch trình kế hoạch tương lai một cách lịch sự.",
  "Form: will have + past participle (V3). Used for actions that will be completed BEFORE a specific time in the future.": "Công thức: S + will have + V3/ed. Dùng cho hành động sẽ hoàn thành TRƯỚC một mốc tương lai.",
  "Typically used with 'by...' or 'by the time...' (e.g., By next year, I will have graduated).": "Thường đi kèm với 'by + mốc thời gian' (By next year, I will have graduated).",
  "Form: will have been + verb-ing. Used to emphasize the DURATION of an activity up to a future point in time.": "Công thức: S + will have been + V-ing. Nhấn mạnh thời lượng kéo dài liên tục của hành động tới mốc tương lai.",
  "Usually includes 'for...' and 'by...' (e.g., By 5 o'clock, I will have been working for 8 hours).": "Thường gồm 'for + khoảng thời gian' và 'by + mốc tương lai'.",
  "Zero Conditional: If + present simple, present simple. Used for general truths and scientific facts.": "Điều kiện loại 0: If + Present Simple, Present Simple. Dùng cho chân lý, sự thật hiển nhiên.",
  "First Conditional: If + present simple, will + base verb. Used for real, possible future situations.": "Điều kiện loại 1: If + Present Simple, S + will + V. Dùng cho điều kiện có thật, có khả năng xảy ra.",
  "Second Conditional: If + past simple, would + base verb. Used for hypothetical, unreal situations in the present/future.": "Điều kiện loại 2: If + Past Simple, S + would + V. Dùng cho giả định không có thật ở hiện tại.",
  "Form: Subject + be + past participle (V3) (+ by agent). Used when the action itself is more important than who did it.": "Công thức: S + be + V3/ed (+ by người thực hiện). Dùng khi bản thân hành động quan trọng hơn người làm.",
  "Shift tenses back when reporting past statements: Present Simple -> Past Simple, Present Continuous -> Past Continuous, Present Perfect -> Past Perfect, Will -> Would.": "Quy tắc lùi thì khi tường thuật: Present Simple -> Past Simple; Present Continuous -> Past Continuous; Present Perfect -> Past Perfect; Will -> Would.",
  "Pronouns, time expressions, and place words also change (today -> that day, here -> there, now -> then).": "Đại từ, thời gian và nơi chốn cũng thay đổi (today -> that day, now -> then, here -> there).",
  "Defining relative clauses give essential information. Use 'who' for people, 'which' for things, 'that' for both. No commas used.": "Mệnh đề quan hệ xác định cung cấp thông tin thiết yếu. Dùng 'who' chỉ người, 'which' chỉ vật, 'that' cho cả hai. KHÔNG dùng dấu phẩy.",
  "Non-defining relative clauses give extra, non-essential information enclosed in commas. Cannot use 'that'.": "Mệnh đề quan hệ không xác định bổ sung thông tin phụ, dùng dấu phẩy. KHÔNG dùng 'that'.",
  "Some verbs are followed by V-ing (enjoy, avoid, suggest, consider, mind).": "Động từ theo sau là V-ing: enjoy, avoid, suggest, consider, mind, finish.",
  "Some verbs are followed by To + Infinitive (want, decide, hope, agree, promise, plan).": "Động từ theo sau là To + V: want, decide, hope, agree, promise, plan.",
  "Some verbs change meaning with V-ing vs To + Infinitive (remember, stop, regret, try).": "Động từ đổi nghĩa với V-ing vs To-V: remember, stop, regret, try, mean.",
  "Phrasal verbs consist of a main verb + particle (preposition or adverb) creating a new idiomatic meaning.": "Phrasal verbs = Động từ + Giới từ/Tiểu từ, tạo thành nghĩa thành ngữ mới.",
  "Separable vs Inseparable phrasal verbs: separable allow objects between verb and particle (turn it off). Pronouns MUST go in the middle.": "Separable (tách được): tân ngữ đại từ (it, them) BẮT BUỘC phải đứng ở giữa (turn it off).",
  "Coordinating conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So) join independent clauses.": "Liên từ kết hợp (FANBOYS: For, And, Nor, But, Or, Yet, So) nối các mệnh đề ngang hàng.",
  "Subordinating conjunctions (because, although, if, unless, while, since) introduce dependent clauses.": "Liên từ phụ thuộc (because, although, if, unless, while, since) nối mệnh đề phụ vào mệnh đề chính.",
  "Conjunctive adverbs (however, furthermore, therefore, nevertheless) connect full sentences with proper punctuation.": "Trạng từ liên kết (however, furthermore, therefore...) nối các câu độc lập có dấu chấm phẩy/chấm.",
  "'Used to + base verb' expresses past habits or past states that are no longer true.": "'Used to + V' chỉ thói quen hoặc trạng thái trong quá khứ nay không còn nữa.",
  "'Would + base verb' expresses repeated past actions, but NOT past states.": "'Would + V' chỉ hành động lặp đi lặp lại trong quá khứ, không dùng cho trạng thái.",
  "Must have + V3 expresses strong certainty about a past event (It must have rained).": "Must have + V3: suy đoán chắc chắn về sự việc quá khứ (chắc hẳn là đã...).",
  "Can't/Couldn't have + V3 expresses impossibility about a past event. Might/May/Could have + V3 expresses possibility.": "Can't have + V3: chắc chắn không thể xảy ra trong quá khứ. Might/Could have + V3: có thể đã xảy ra.",
  "Wish/If only + past simple expresses regret about a PRESENT situation (I wish I had a car).": "Wish / If only + Past Simple: ước điều trái ngược thực tế ở hiện tại.",
  "Third Conditional: If + past perfect, would have + V3. Used for unreal situations in the PAST.": "Điều kiện loại 3: If + Past Perfect, S + would have + V3. Giả định không có thật trong quá khứ.",
  "Mixed Conditionals combine past condition with present result (If I had studied harder, I would have a better job now).": "Điều kiện hỗn hợp: Điều kiện quá khứ dẫn tới kết quả ở hiện tại.",
  "Inversion after negative adverbials (Hardly, Never, Seldom, Not only): Negative word + Auxiliary + Subject + Verb.": "Đảo ngữ sau trạng từ phủ định: Từ phủ định + Trợ động từ + S + V.",
  "Creates dramatic emphasis and formal academic style.": "Tạo văn phong trang trọng, nhấn mạnh đặc biệt trong bài luận academic.",
  "It-clefts (It is/was... that...) emphasize a specific element of a sentence.": "It-cleft (It is/was + thành phần nhấn mạnh + that/who...): Dồn sự chú ý vào thông tin trọng tâm.",
  "Wh-clefts (What... is/was...) rephrase sentences to highlight key information.": "Wh-cleft (What + S + V + is/was...): Nhấn mạnh trọng tâm thông tin ở cuối câu.",
  "The subjunctive mood uses the base form of verbs after verbs/adjectives of urgency (demand, insist, suggest, vital, crucial).": "Thức giả định: Động từ nguyên mẫu không chia sau các từ chỉ sự khẩn cấp (suggest that he do...).",
  "Impersonal passive (It is said/believed that...) and Personal passive (He is said to be...) for formal news and reporting.": "Bị động vô nhân xưng (It is said that...) và Bị động truyền dụng (He is said to V...) cho tin tức báo chí.",
  "Present participle (-ing) clauses express simultaneous actions, reasons, or cause-and-effect.": "Mệnh đề phân từ hiện tại (-ing): Rút gọn hai hành động song song, nguyên nhân hoặc kết quả.",
  "Past participle (-ed) clauses have passive meaning and reduce passive relative clauses.": "Mệnh đề quá khứ phân từ (-ed): Mang nghĩa bị động, rút gọn mệnh đề quan hệ dạng bị động.",
  "Ellipsis omits repeated words to avoid redundancy (She can play piano and [she can] sing).": "Lược bỏ (Ellipsis): Bỏ từ trùng lặp để câu văn ngắn gọn súc tích.",
  "Substitution uses words like 'do so', 'one/ones', 'so', 'neither' to replace phrases.": "Thay thế (Substitution): Dùng 'do so', 'one/ones', 'so' để tránh lặp từ.",
  "Fronting moves non-subject elements to the beginning of the sentence for focus or contrast.": "Tiền đề hóa (Fronting): Đưa các thành phần không phải chủ ngữ lên đầu câu để tạo điểm nhấn.",
  "Complex noun phrases pack detailed information into a single subject or object using pre-modifiers and post-modifiers.": "Cụm danh từ phức hợp: Nén nhiều thông tin chi tiết bằng bổ nghĩa trước và bổ nghĩa sau.",
  "Discourse markers signpost the logical flow of writing (Furthermore, Consequently, On the contrary, Admittedly).": "Từ nối dẫn dắt (Discourse Markers): Định hướng dòng chảy logic của văn bản học thuật.",
  "Invert conditionals by dropping 'if' and placing Had, Should, or Were at the beginning of the clause.": "Đảo ngữ câu điều kiện: Bỏ 'If', đưa Should, Were, Had lên đầu mệnh đề.",
  "Academic collocations are natural word combinations essential for high-scoring writing and research papers.": "Cụm từ cố định học thuật (Academic Collocations): Kết hợp từ tự nhiên giúp bài viết đạt điểm cao.",
  "Proper punctuation (semicolons, em-dashes, colons) establishes clear syntactic boundaries and sophisticated tone.": "Dấu câu chuẩn xác (dấu chấm phẩy, dấu hai chấm): Phân định cú pháp rõ ràng và văn phong tinh tế.",
  "Irregular verbs do not follow the standard -ed past pattern and must be committed to memory.": "Động từ bất quy tắc: KHÔNG thêm -ed, cần học thuộc 3 cột V1 - V2 - V3.",
  "Identify word forms (Nouns, Verbs, Adjectives, Adverbs) by suffix clues and position rules in TOEIC Part 5 & 6.": "Nhận diện từ loại dựa vào đuôi từ (suffixes) và vị trí trong đề thi TOEIC Part 5 & 6.",
  "Singular subjects require singular verbs; plural subjects require plural verbs. Special rules apply to collective nouns, compound subjects, and quantifiers.": "Sự hòa hợp S-V: Chủ ngữ số ít đi với động từ số ít, chủ ngữ số nhiều đi với động từ số nhiều.",
  "Prepositions are followed by Nouns/N-phrases/V-ing (despite, due to). Conjunctions are followed by full Clauses (although, because).": "Giới từ đi với Danh từ/V-ing (despite, due to); Liên từ đi với Mệnh đề S + V (although, because).",
  "Master correct usage of quantifiers (each, every, all, both, either, neither, few, little) for TOEIC questions.": "Làm chủ từ chỉ số lượng (each, every, all, both, either, neither, few, little) trong bài thi TOEIC.",
  "Reduce relative clauses and adverbial clauses into participle phrases (-ing / -ed) to write concise sentences.": "Rút gọn mệnh đề quan hệ & trạng ngữ thành cụm phân từ (-ing / -ed) giúp câu súc tích.",
  "Maintain parallel grammatical structures when connecting items with conjunctions or correlative pairs (both...and, not only...but also).": "Cấu trúc song song: Giữ nguyên dạng ngữ pháp khi nối từ bằng liên từ đăng đối (not only...but also).",
  "Use business subjunctive forms (require that he submit, it is imperative that...) in formal corporate emails and contracts.": "Thức giả định thương mại (require that he submit...) dùng trong thư từ hợp đồng doanh nghiệp.",
  "Recognize inverted structure in Part 5 questions (e.g., Only after... did the company report a profit).": "Nhận biết đảo ngữ trong TOEIC Part 5 (ví dụ: Only after... did the company...).",
};

let countUpdated = 0;

topics.forEach(t => {
  if (TRANSLATIONS[t.content?.overview]) {
    t.content.overview = TRANSLATIONS[t.content.overview];
    countUpdated++;
  }

  if (t.content && Array.isArray(t.content.rules)) {
    t.content.rules.forEach(r => {
      if (TRANSLATIONS[r.explanation]) {
        r.explanation = TRANSLATIONS[r.explanation];
        countUpdated++;
      }
    });
  }
});

console.log(`Replaced ${countUpdated} English text entries with rich Vietnamese explanations!`);

const newCode = code.substring(0, startIndex + startMarker.length) + JSON.stringify(topics, null, 2) + code.substring(endIndex);
fs.writeFileSync(targetPath, newCode, 'utf8');
console.log('Successfully updated grammar-data.js!');
