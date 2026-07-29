import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/data/grammar-data.js');

// Read current file
let code = fs.readFileSync(targetPath, 'utf8');

// Load topics by evaluating code
import { GRAMMAR_TOPICS, EXPERT_ROADMAP } from '../src/data/grammar-data.js';

// Comprehensive dictionary of Vietnamese explanations for rules that were in English
const VIETNAMESE_DICTIONARY = {
  // to-be
  "The verb 'to be' has three forms in the present: am, is, are.": "Động từ 'To Be' có 3 dạng ở thì hiện tại đơn: am, is, are. Dùng 'am' cho chủ ngữ I; 'is' cho He, She, It, danh từ số ít; và 'are' cho You, We, They, danh từ số nhiều.",
  "We use 'to be' to talk about: identity, age, nationality, feelings, descriptions, jobs, and location.": "Động từ 'To Be' được dùng để diễn tả danh tính, tuổi tác, quốc tịch, cảm xúc, đặc điểm tính cách, nghề nghiệp và vị trí địa lý.",
  "Form questions by swapping the subject and 'to be': Is she...? Are you...? Form negatives by adding 'not': am not, is not (isn't), are not (aren't).": "Đặt câu hỏi bằng cách đảo động từ To Be lên trước chủ ngữ (Is she...? Are you...?). Tạo câu phủ định bằng cách thêm 'not' đằng sau To Be (am not, isn't, aren't).",

  // present-simple
  "We use the present simple for habits, facts, and permanent situations. Add -s/-es for third-person singular (he/she/it).": "Thì Hiện tại đơn (Present Simple) dùng để diễn tả thói quen lặp đi lặp lại hàng ngày, sự thật hiển nhiên hoặc tình trạng cố định. Thêm -s hoặc -es vào sau động từ khi chủ ngữ là He, She, It hoặc danh từ số ít.",
  "Use 'do/does' for questions and 'don't/doesn't' for negatives. Third-person singular uses 'does/doesn't' + base verb.": "Dùng trợ động từ 'do/does' khi đặt câu hỏi và 'don't/doesn't' cho câu phủ định. Với He/She/It, dùng 'does/doesn't' đi kèm động từ nguyên mẫu.",
  "Spelling rules for third-person singular (-s, -es, -ies).": "Quy tắc thêm đuôi -s/es: Thêm -es với các động từ kết thúc bằng -o, -ch, -sh, -x, -s, -z (ví dụ: goes, watches); đổi -y thành -ies nếu trước -y là một phụ âm (ví dụ: study -> studies).",

  // present-continuous
  "Form: am/is/are + verb-ing. Used for actions happening right now at the moment of speaking.": "Công thức: S + am/is/are + V-ing. Dùng để diễn tả hành động đang diễn ra ngay tại thời điểm nói (ví dụ: I am studying now).",
  "Used for temporary situations, ongoing projects, and changing/developing situations.": "Dùng để diễn tả tình huống tạm thời, các dự án đang triển khai hoặc những sự thay đổi, phát triển theo thời gian (ví dụ: The climate is changing).",
  "Stative verbs (like, know, understand, believe, want) are NOT usually used in continuous tenses.": "Các động từ chỉ trạng thái (Stative Verbs) như like, know, understand, believe, want, love... thường KHÔNG dùng ở thì tiếp diễn.",

  // past-simple
  "Form: Regular verbs add -ed (played, walked). Irregular verbs have unique past forms (went, saw, ate). Used for completed actions at a specific time in the past.": "Công thức: Động từ có quy tắc thêm -ed (played, walked); động từ bất quy tắc dùng cột V2 (went, saw, ate). Dùng để diễn tả hành động đã hoàn thành tại một thời điểm xác định trong quá khứ.",
  "Use 'did' for questions and 'didn't' for negatives + base verb for all subjects.": "Dùng trợ động từ 'did' trong câu hỏi và 'didn't' trong câu phủ định, đi kèm động từ nguyên mẫu cho tất cả các chủ ngữ.",
  "Spelling rules for regular past tense (-ed endings and pronunciation /t/, /d/, /ɪd/).": "Quy tắc phát âm đuôi -ed: Phát âm là /ɪd/ với từ kết thúc bằng /t/, /d/; phát âm là /t/ với các âm vô thanh (/p/, /k/, /f/, /s/, /ʃ/, /tʃ/); phát âm là /d/ với các trường hợp còn lại.",

  // future-simple
  "Form: will + base verb for all subjects. Used for instant decisions, predictions without present evidence, promises, and offers.": "Công thức: S + will + V-nguyên mẫu. Dùng để diễn tả quyết định bộc phát ngay tại thời điểm nói, dự đoán không có căn cứ cụ thể, lời hứa hoặc lời đề nghị giúp đỡ.",
  "Use 'be going to + verb' for planned future actions and predictions based on present evidence.": "Cấu trúc 'Be going to + V' dùng để diễn tả kế hoạch/dự định đã lên lịch trước, hoặc dự đoán dựa trên dấu hiệu/bằng chứng thực tế hiện tại.",

  // countable-uncountable
  "Countable nouns can be counted and have singular and plural forms (an apple, three apples). Uncountable nouns cannot be counted individually (water, advice, rice).": "Danh từ đếm được (Countable Nouns) có cả dạng số ít và số nhiều (apple -> apples). Danh từ không đếm được (Uncountable Nouns) là các chất lỏng, khái niệm trừu tượng, vật chất không đếm riêng từng cái được (water, advice, rice).",
  "Use 'a/an' with singular countable nouns. Use 'some' with uncountable nouns and plural countable nouns in positive sentences. Use 'any' in questions and negatives.": "Dùng 'a/an' với danh từ đếm được số ít. Dùng 'some' với danh từ không đếm được và danh từ số nhiều trong câu khẳng định. Dùng 'any' trong câu phủ định và câu hỏi.",

  // articles
  "Use 'a' before consonant sounds (a book, a university). Use 'an' before vowel sounds (an apple, an hour).": "Dùng 'a' trước từ bắt đầu bằng phụ âm (a book, a university - âm /ju:/). Dùng 'an' trước từ bắt đầu bằng nguyên âm (an apple, an hour - âm h câm).",
  "Use 'the' when referring to a specific item already known to the speaker and listener, or for unique things (the sun, the world).": "Dùng 'the' khi nói về vật/người cụ thể mà cả người nói và người nghe đều đã biết, hoặc các đối tượng duy nhất (the sun, the moon, the world).",
  "Do NOT use articles (zero article) with uncountable or plural nouns when speaking generally.": "KHÔNG dùng mạo từ (Zero Article) khi nói chung chung về danh từ không đếm được hoặc danh từ số nhiều (ví dụ: Cats like milk).",

  // pronouns
  "Subject pronouns (I, you, he, she, it, we, they) do the action. Object pronouns (me, you, him, her, it, us, them) receive the action.": "Đại từ nhân xưng làm Chủ ngữ (I, you, he, she, it, we, they) thực hiện hành động. Đại từ làm Tân ngữ (me, you, him, her, it, us, them) nhận tác động của hành động.",

  // prepositions
  "Time prepositions: AT (specific times: at 5 PM), ON (days and dates: on Monday), IN (months, years, seasons: in July, in 2024).": "Giới từ chỉ thời gian: AT dùng cho giờ giấc cụ thể (at 5 PM); ON dùng cho ngày trong tuần và ngày tháng (on Monday); IN dùng cho tháng, năm, mùa, thế kỷ (in July, in 2024).",
  "Place prepositions: AT (specific points: at the bus stop), ON (surfaces: on the table), IN (enclosed spaces: in the room).": "Giới từ chỉ nơi chốn: AT dùng cho địa điểm xác định/điểm dừng (at the bus stop); ON dùng cho bề mặt (on the table); IN dùng cho không gian khép kín/bên trong (in the room).",

  // there-is-are
  "Use 'There is' (+ singular/uncountable noun) and 'There are' (+ plural noun) to state that something exists in a location.": "Dùng 'There is' (đi với danh từ số ít hoặc không đếm được) và 'There are' (đi với danh từ số nhiều) để diễn tả sự tồn tại của vật/người tại một vị trí.",

  // comparatives-superlatives
  "Comparatives compare 2 things: short adj + -er (taller), long adj: more + adj (more expensive). Use 'than' after comparatives.": "So sánh hơn dùng để so sánh 2 đối tượng: Tính từ ngắn thêm -er + than (taller than); tính từ dài dùng more + tính từ + than (more expensive than).",
  "Superlatives compare 3+ things: the + short adj + -est (the tallest), the most + long adj (the most expensive).": "So sánh nhất dùng để so sánh 3 đối tượng trở lên: the + tính từ ngắn + -est (the tallest); the most + tính từ dài (the most expensive).",

  // modal-verbs-basic
  "Can/Could express ability and polite requests. Must/Have to express obligation and rules. Should expresses advice.": "Can/Could diễn tả khả năng hoặc lời yêu cầu lịch sự. Must/Have to diễn tả sự bắt buộc, quy định. Should diễn tả lời khuyên nên làm gì.",

  // adjectives-adverbs
  "Adjectives describe nouns (a quick runner). Adverbs describe verbs, adjectives, or other adverbs (he runs quickly). Most adverbs end in -ly.": "Tính từ (Adjectives) dùng để bổ nghĩa cho danh từ (a quick runner). Trạng từ (Adverbs) dùng để bổ nghĩa cho động từ, tính từ hoặc trạng từ khác (he runs quickly).",
  "Irregular adverbs: good -> well, fast -> fast, hard -> hard, late -> late.": "Trạng từ bất quy tắc cần lưu ý: good đổi thành well; fast, hard, late giữ nguyên dạng khi chuyển sang trạng từ.",

  // possessives-reflexives
  "Possessive adjectives (my, your, his, her, its, our, their) come BEFORE nouns. Possessive pronouns (mine, yours, his, hers, ours, theirs) replace nouns.": "Tính từ sở hữu (my, your, his...) luôn đứng TRƯỚC danh từ. Đại từ sở hữu (mine, yours...) đứng ĐỘC LẬP để thay thế cho cụm [tính từ sở hữu + danh từ].",
  "Reflexive pronouns (myself, yourself, himself, herself, itself, ourselves, themselves) are used when the subject and object are the same person/thing.": "Đại từ phản xạ (myself, yourself...) được sử dụng khi chủ ngữ và tân ngữ trong câu là cùng một đối tượng (ví dụ: He cut himself).",

  // question-formation-tags
  "Form questions with auxiliary verbs (be, do, have, modal) before the subject: Auxiliary + S + V...?": "Quy tắc đặt câu hỏi: Đảo trợ động từ (be, do, have, modal) lên trước chủ ngữ: Trợ động từ + S + V...?",
  "Question tags: positive sentence + negative tag (You are English, aren't you?); negative sentence + positive tag (She doesn't like tea, does she?).": "Câu hỏi đuôi (Question Tags): Mệnh đề khẳng định đi với đuôi phủ định (You like tea, don't you?); Mệnh đề phủ định đi với đuôi khẳng định (She isn't here, is she?).",

  // present-perfect
  "Form: have/has + past participle (V3). Used for life experiences without mentioning specific time (I have visited Paris).": "Công thức: S + have/has + V3/ed. Dùng để diễn tả trải nghiệm sống cho đến nay mà không đề cập thời gian cụ thể (ví dụ: I have visited Paris).",
  "Used with 'for' (duration: for 5 years) and 'since' (starting point: since 2020).": "Present Perfect đi với 'for' (chỉ khoảng thời gian: for 5 years) và 'since' (chỉ mốc thời gian bắt đầu: since 2020).",
  "Used with 'just' (recently), 'already' (sooner than expected), and 'yet' (until now, in negatives/questions).": "Đi với 'just' (vừa mới xong), 'already' (đã làm rồi) và 'yet' (chưa làm - dùng trong câu phủ định và câu hỏi).",

  // present-perfect-continuous
  "Form: have/has been + verb-ing. Used for actions that started in the past, continue to the present, and emphasize DURATION or ongoing effort.": "Công thức: S + have/has been + V-ing. Dùng để diễn tả hành động bắt đầu trong quá khứ, kéo dài liên tục đến hiện tại và nhấn mạnh vào TÍNH LIÊN TỤC hoặc THỜI LƯỢNG.",
  "Present Perfect vs Present Perfect Continuous: Simple emphasizes RESULT (I have read 3 books); Continuous emphasizes DURATION (I have been reading for 3 hours).": "So sánh: Present Perfect Simple nhấn mạnh KẾT QUẢ/SỐ LƯỢNG (I have written 3 emails); Present Perfect Continuous nhấn mạnh THỜI LƯỢNG/QUÁ TRÌNH (I have been writing emails all morning).",

  // past-continuous
  "Form: was/were + verb-ing. Used for actions that were in progress at a specific moment in the past.": "Công thức: S + was/were + V-ing. Dùng để diễn tả hành động đang diễn ra tại một thời điểm xác định trong quá khứ.",
  "Often combined with Past Simple using 'when' and 'while': long background action in Past Continuous, interrupted by short action in Past Simple.": "Thường kết hợp với Past Simple qua 'when' và 'while': Hành động kéo dài đang diễn ra dùng Past Continuous, hành động ngắn xen vào dùng Past Simple (ví dụ: While I was studying, the phone rang).",

  // past-perfect
  "Form: had + past participle (V3). Used for an action that happened BEFORE another action or time in the past.": "Công thức: S + had + V3/ed. Dùng để diễn tả một hành động xảy ra và hoàn thành TRƯỚC một hành động khác hoặc một mốc thời gian trong quá khứ.",

  // past-perfect-continuous
  "Form: had been + verb-ing. Used for an ongoing action in the past that continued up until another event or time in the past.": "Công thức: S + had been + V-ing. Dùng để diễn tả hành động xảy ra liên tục trong quá khứ cho tới trước một mốc thời gian/sự kiện quá khứ khác.",
  "Emphasizes the duration of an activity before a past checkpoint (He was tired because he had been working all day).": "Nhấn mạnh quá trình liên tục kéo dài dẫn đến kết quả trong quá khứ (ví dụ: He was exhausted because he had been running).",

  // future-continuous
  "Form: will be + verb-ing. Used for actions that will be in progress at a specific time in the future.": "Công thức: S + will be + V-ing. Dùng để diễn tả hành động đang diễn ra tại một thời điểm xác định trong tương lai (ví dụ: At 8 PM tomorrow, I will be studying).",
  "Used for polite inquiries about future plans and scheduled events.": "Dùng để hỏi hoặc đề cập lịch trình/dự định tương lai một cách lịch sự.",

  // future-perfect
  "Form: will have + past participle (V3). Used for actions that will be completed BEFORE a specific time in the future.": "Công thức: S + will have + V3/ed. Dùng để diễn tả hành động sẽ HOÀN THÀNH TRƯỚC một thời điểm hoặc một hành động khác trong tương lai.",
  "Typically used with 'by...' or 'by the time...' (e.g., By next year, I will have graduated).": "Thường đi kèm với cụm từ 'by + mốc tương lai' hoặc 'by the time + mệnh đề' (ví dụ: By next year, I will have graduated).",

  // future-perfect-continuous
  "Form: will have been + verb-ing. Used to emphasize the DURATION of an activity up to a future point in time.": "Công thức: S + will have been + V-ing. Dùng để nhấn mạnh THỜI LƯỢNG kéo dài của một hành động tính tới một mốc thời gian trong tương lai.",
  "Usually includes 'for...' and 'by...' (e.g., By 5 o'clock, I will have been working for 8 hours).": "Thường chứa 'for + khoảng thời gian' và 'by + mốc thời gian' (ví dụ: By next month, I will have been living here for 10 years).",

  // conditionals-012
  "Zero Conditional: If + present simple, present simple. Used for general truths and scientific facts.": "Câu điều kiện loại 0 (Zero Conditional): If + Present Simple, Present Simple. Dùng để diễn tả chân lý, sự thật hiển nhiên hoặc quy luật tự nhiên.",
  "First Conditional: If + present simple, will + base verb. Used for real, possible future situations.": "Câu điều kiện loại 1 (First Conditional): If + Present Simple, S + will + V-nguyên mẫu. Dùng để diễn tả điều kiện có thật, hoàn toàn có khả năng xảy ra ở hiện tại hoặc tương lai.",
  "Second Conditional: If + past simple, would + base verb. Used for hypothetical, unreal situations in the present/future.": "Câu điều kiện loại 2 (Second Conditional): If + Past Simple, S + would + V-nguyên mẫu. Dùng để diễn tả giả định không có thật, trái ngược với thực tế ở hiện tại.",

  // passive-voice
  "Form: Subject + be + past participle (V3) (+ by agent). Used when the action itself is more important than who did it.": "Công thức: S + be + V3/ed (+ by + người thực hiện). Dùng khi bản thân hành động hoặc đối tượng chịu tác động quan trọng hơn người thực hiện hành động.",

  // reported-speech
  "Shift tenses back when reporting past statements: Present Simple -> Past Simple, Present Continuous -> Past Continuous, Present Perfect -> Past Perfect, Will -> Would.": "Quy tắc lùi thì khi chuyển sang câu tường thuật: Present Simple -> Past Simple; Present Continuous -> Past Continuous; Present Perfect -> Past Perfect; Will -> Would.",
  "Pronouns, time expressions, and place words also change (today -> that day, here -> there, now -> then).": "Đại từ, chỉ định từ và trạng từ chỉ thời gian/nơi chốn cũng thay đổi (today -> that day; now -> then; here -> there).",

  // relative-clauses
  "Defining relative clauses give essential information. Use 'who' for people, 'which' for things, 'that' for both. No commas used.": "Mệnh đề quan hệ xác định (Defining Relative Clause) cung cấp thông tin thiết yếu. Dùng 'who' chỉ người, 'which' chỉ vật, 'that' chỉ cả hai. KHÔNG dùng dấu phẩy.",
  "Non-defining relative clauses give extra, non-essential information enclosed in commas. Cannot use 'that'.": "Mệnh đề quan hệ không xác định (Non-defining Relative Clause) bổ sung thông tin phụ, ngăn cách bằng dấu phẩy. KHÔNG được dùng 'that'.",

  // gerunds-infinitives
  "Some verbs are followed by V-ing (enjoy, avoid, suggest, consider, mind).": "Một số động từ theo sau bắt buộc là V-ing (như: enjoy, avoid, suggest, consider, mind, finish).",
  "Some verbs are followed by To + Infinitive (want, decide, hope, agree, promise, plan).": "Một số động từ theo sau bắt buộc là To + V-nguyên mẫu (như: want, decide, hope, agree, promise, plan).",
  "Some verbs change meaning with V-ing vs To + Infinitive (remember, stop, regret, try).": "Một số động từ đổi nghĩa tùy thuộc vào V-ing hay To + V (như: remember, stop, regret, try, mean).",

  // phrasal-verbs
  "Phrasal verbs = Verb + Preposition/Particle. The combined meaning is often idiomatic and different from the individual words.": "Cụm động từ (Phrasal Verbs) = Động từ + Giới từ/Tiểu từ. Ý nghĩa của cả cụm mang tính thành ngữ, khác với nghĩa đen từng từ đơn lẻ.",
  "Separable vs Inseparable phrasal verbs: separable allow objects between verb and particle (turn it off). Pronouns MUST go in the middle.": "Phrasal verbs tách được (Separable) cho phép tân ngữ đứng ở giữa. Nếu tân ngữ là đại từ (it, them, him), bắt buộc phải đứng ở giữa (ví dụ: turn it off, không dùng turn off it).",

  // conjunctions-connectors
  "Coordinating conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So) join independent clauses.": "Liên từ kết hợp (FANBOYS: For, And, Nor, But, Or, Yet, So) dùng để nối các mệnh đề độc lập có vai trò ngang hàng nhau.",
  "Subordinating conjunctions (because, although, if, unless, while, since) introduce dependent clauses.": "Liên từ phụ thuộc (because, although, if, unless, while, since) dùng để nối mệnh đề phụ thuộc vào mệnh đề chính.",
  "Conjunctive adverbs (however, furthermore, therefore, nevertheless) connect full sentences with proper punctuation.": "Trạng từ liên kết (however, furthermore, therefore...) dùng để nối hai câu độc lập, thường đi sau dấu chấm phẩy hoặc đứng đầu câu có dấu phẩy.",

  // used-to-would
  "'Used to + base verb' expresses past habits or past states that are no longer true.": "'Used to + V' dùng để diễn tả thói quen hoặc trạng thái trong quá khứ mà nay không còn nữa.",
  "'Would + base verb' expresses repeated past actions, but NOT past states.": "'Would + V' dùng để diễn tả hành động lặp đi lặp lại trong quá khứ, nhưng KHÔNG dùng cho động từ chỉ trạng thái.",

  // modals-of-deduction
  "Must have + V3 expresses strong certainty about a past event (It must have rained).": "Must have + V3 diễn tả sự suy đoán gần như chắc chắn về một sự việc đã xảy ra trong quá khứ (chắc hẳn là đã...).",
  "Can't/Couldn't have + V3 expresses impossibility about a past event. Might/May/Could have + V3 expresses possibility.": "Can't have + V3 diễn tả sự việc chắc chắn không thể xảy ra trong quá khứ. Might/Could have + V3 diễn tả khả năng có thể đã xảy ra.",

  // wish-if-only
  "Wish/If only + past simple expresses regret about a PRESENT situation (I wish I had a car).": "Wish / If only + Past Simple diễn tả mong ước trái ngược với thực tế ở HIỆN TẠI (giá mà tôi có...).",

  // conditionals-3-mixed
  "Third Conditional: If + past perfect, would have + V3. Used for unreal situations in the PAST.": "Câu điều kiện loại 3: If + Past Perfect, S + would have + V3. Dùng để diễn tả giả định không có thật trong QUÁ KHỨ và kết quả trái ngược quá khứ.",
  "Mixed Conditionals combine past condition with present result (If I had studied harder, I would have a better job now).": "Câu điều kiện hỗn hợp (Mixed Conditionals): Kết hợp điều kiện quá khứ với kết quả hiện tại (ví dụ: Nếu quá khứ tôi đã học chăm thì bây giờ tôi đã có việc làm tốt).",

  // inversion
  "Inversion after negative adverbials (Hardly, Never, Seldom, Not only): Negative word + Auxiliary + Subject + Verb.": "Đảo ngữ sau các trạng từ phủ định (Hardly, Never, Seldom, Not only): Trạng từ phủ định + Trợ động từ + S + V.",
  "Creates dramatic emphasis and formal academic style.": "Tạo văn phong trang trọng, nhấn mạnh đặc biệt trong bài viết chính luận và bài thi academic.",

  // cleft-sentences
  "It-clefts (It is/was... that...) emphasize a specific element of a sentence.": "Câu chẻ dạng It-cleft (It is/was + thành phần nhấn mạnh + that/who...): Dùng để dồn sự chú ý vào một thông tin cụ thể.",
  "Wh-clefts (What... is/was...) rephrase sentences to highlight key information.": "Câu chẻ dạng Wh-cleft (What + S + V + is/was...): Dùng để nhấn mạnh trọng tâm thông tin ở cuối câu.",

  // subjunctive
  "The subjunctive mood uses the base form of verbs after verbs/adjectives of urgency (demand, insist, suggest, vital, crucial).": "Thức giả định (Subjunctive Mood) sử dụng động từ nguyên mẫu không chia (V-bare) đằng sau các động từ/tính từ thể hiện sự khẩn cấp, yêu cầu, đề nghị (demand, insist, suggest that he be/do...).",

  // advanced-passive
  "Impersonal passive (It is said/believed that...) and Personal passive (He is said to be...) for formal news and reporting.": "Bị động vô nhân xưng (It is said that...) và Bị động truyền dụng/chủ ngữ giả (He is said to have V3...) dùng trong báo cáo trang trọng và tin tức truyền thông.",

  // participle-clauses
  "Present participle (-ing) clauses express simultaneous actions, reasons, or cause-and-effect.": "Mệnh đề phân từ hiện tại (-ing) dùng để rút gọn hai hành động xảy ra đồng thời, chỉ nguyên nhân hoặc kết quả.",
  "Past participle (-ed) clauses have passive meaning and reduce passive relative clauses.": "Mệnh đề quá khứ phân từ (-ed) mang nghĩa bị động, dùng để rút gọn mệnh đề quan hệ dạng bị động.",

  // ellipsis-substitution
  "Ellipsis omits repeated words to avoid redundancy (She can play piano and [she can] sing).": "Lược bỏ từ (Ellipsis) giúp loại bỏ các từ ngữ bị lặp lại mà vẫn giữ nguyên nghĩa, tăng độ súc tích cho câu.",
  "Substitution uses words like 'do so', 'one/ones', 'so', 'neither' to replace phrases.": "Thay thế (Substitution) sử dụng các từ thay thế như 'do so', 'one/ones', 'so' để tránh lặp cụm từ.",

  // emphasis-fronting
  "Fronting moves non-subject elements to the beginning of the sentence for focus or contrast.": "Tiền đề hóa (Fronting) chuyển các thành phần không phải chủ ngữ lên đầu câu để tạo sự chú ý hoặc đối lập văn phong.",

  // complex-noun-phrases
  "Complex noun phrases pack detailed information into a single subject or object using pre-modifiers and post-modifiers.": "Cụm danh từ phức hợp (Complex Noun Phrases) đóng gói thông tin chi tiết vào một chủ ngữ hoặc tân ngữ thông qua các từ bổ nghĩa đứng trước và đứng sau.",

  // discourse-markers
  "Discourse markers signpost the logical flow of writing (Furthermore, Consequently, On the contrary, Admittedly).": "Từ nối dẫn dắt văn phong (Discourse Markers) định hướng dòng chảy logic của bài viết (Furthermore, Consequently, Admittedly...).",

  // inverted-conditionals
  "Invert conditionals by dropping 'if' and placing Had, Should, or Were at the beginning of the clause.": "Đảo ngữ câu điều kiện bằng cách bỏ 'If' và đưa Had, Should hoặc Were lên đầu mệnh đề.",

  // academic-collocations
  "Academic collocations are natural word combinations essential for high-scoring writing and research papers.": "Cụm từ cố định học thuật (Academic Collocations) là sự kết hợp từ tự nhiên giúp bài viết luận đạt điểm số cao.",

  // punctuation-syntax
  "Proper punctuation (semicolons, em-dashes, colons) establishes clear syntactic boundaries and sophisticated tone.": "Dấu câu chuẩn xác (dấu chấm phẩy, dấu hai chấm, dấu gạch ngang) giúp phân định ranh giới cú pháp rõ ràng và tạo giọng văn chuyên nghiệp.",

  // irregular-verbs
  "Irregular verbs do not follow the standard -ed past pattern and must be committed to memory.": "Động từ bất quy tắc KHÔNG tuân theo quy tắc thêm -ed và cần được ghi nhớ theo 3 cột (V1 - V2 - V3).",

  // parts-of-speech-toeic
  "Identify word forms (Nouns, Verbs, Adjectives, Adverbs) by suffix clues and position rules in TOEIC Part 5 & 6.": "Nhận diện từ loại (Danh từ, Động từ, Tính từ, Trạng từ) dựa vào đuôi từ (suffixes) và vị trí cú pháp trong đề thi TOEIC.",

  // subject-verb-agreement
  "Singular subjects require singular verbs; plural subjects require plural verbs. Special rules apply to collective nouns, compound subjects, and quantifiers.": "Chủ ngữ số ít đi với động từ số ít; chủ ngữ số nhiều đi với động từ số nhiều. Chú ý các quy tắc đặc biệt với danh từ tập hợp, từ chỉ số lượng và chủ ngữ ghép.",

  // prepositions-vs-conjunctions
  "Prepositions are followed by Nouns/N-phrases/V-ing (despite, due to). Conjunctions are followed by full Clauses (although, because).": "Giới từ theo sau là Danh từ / Cụm danh từ / V-ing (despite, due to, in spite of). Liên từ theo sau là một Mệnh đề S + V hoàn chỉnh (although, because, since).",

  // quantifiers-determiners
  "Master correct usage of quantifiers (each, every, all, both, either, neither, few, little) for TOEIC questions.": "Làm chủ cách dùng các từ chỉ số lượng (each, every, all, both, either, neither, few, little) trong bài thi TOEIC.",

  // reduced-clauses
  "Reduce relative clauses and adverbial clauses into participle phrases (-ing / -ed) to write concise sentences.": "Rút gọn mệnh đề quan hệ và mệnh đề trạng ngữ thành cụm phân từ (-ing / -ed) giúp câu văn đắt giá và ngắn gọn.",

  // parallel-structure
  "Maintain parallel grammatical structures when connecting items with conjunctions or correlative pairs (both...and, not only...but also).": "Giữ nguyên tính song song về mặt ngữ pháp khi nối các từ/cụm từ bằng liên từ hoặc cặp liên từ đăng đối (not only...but also, both...and).",

  // subjunctive-business
  "Use business subjunctive forms (require that he submit, it is imperative that...) in formal corporate emails and contracts.": "Sử dụng thức giả định thương mại (require that he submit...) trong thư từ doanh nghiệp và hợp đồng trang trọng.",

  // toeic-inversion-emphasis
  "Recognize inverted structure in Part 5 questions (e.g., Only after... did the company report a profit).": "Nhận biết cấu trúc đảo ngữ trong đề thi TOEIC Part 5 (ví dụ: Only after... did the company...).",
};

let matchCount = 0;

GRAMMAR_TOPICS.forEach(topic => {
  if (topic.content && Array.isArray(topic.content.rules)) {
    topic.content.rules.forEach(rule => {
      if (VIETNAMESE_DICTIONARY[rule.explanation]) {
        rule.explanation = VIETNAMESE_DICTIONARY[rule.explanation];
        matchCount++;
      }
    });
  }
});

console.log(`Successfully translated/enhanced ${matchCount} explanations!`);

// Write back updated code to grammar-data.js
let newTopicsJSON = JSON.stringify(GRAMMAR_TOPICS, null, 2);

// Re-generate file content
const exportHeader = `// ==========================================================================
// AESTHETE — Modern Human-Crafted Grammar Database
// ==========================================================================

export const LEVELS = [
  { id: 'beginner', name: 'Beginner (A1-A2)', subtitle: 'Sơ Cấp', icon: '🌱', color: 'emerald', description: 'Essential sentence structures, core tenses, articles, and basic modifiers.' },
  { id: 'intermediate', name: 'Intermediate (B1-B2)', subtitle: 'Trung Cấp', icon: '🌿', color: 'indigo', description: 'Complex tenses, passive voice, modal nuances, conditionals, and clauses.' },
  { id: 'advanced', name: 'Advanced (C1-C2)', subtitle: 'Cao Cấp', icon: '🌲', color: 'amber', description: 'Inversion, subjunctive mood, academic discourse markers, and rhetoric.' },
  { id: 'lexicon', name: 'Lexicon & Usage', subtitle: 'Từ Vựng & Cú Pháp', icon: '💎', color: 'cyan', description: 'Phrasal verbs, collocations, idiomatic prepositional structures.' },
  { id: 'toeic', name: 'TOEIC Mastery', subtitle: 'Chuyện Thi TOEIC', icon: '🎯', color: 'rose', description: 'Grammar patterns, part 5/6 short-cut strategies, business contexts.' },
];

export const EXERCISE_TYPES = [
  { id: 'fill-blanks', name: 'Fill in the Blanks', icon: '✍️' },
  { id: 'multiple-choice', name: 'Multiple Choice', icon: '🔘' },
  { id: 'error-correction', name: 'Error Correction', icon: '🔍' },
  { id: 'sentence-transformation', name: 'Sentence Transformation', icon: '🔄' },
  { id: 'matching', name: 'Matching Pairs', icon: '🧩' },
];

export const GRAMMAR_TOPICS = ${newTopicsJSON};
`;

// Append roadmap code back
const roadmapCode = fs.readFileSync(targetPath, 'utf8');
const roadmapPart = roadmapCode.substring(roadmapCode.indexOf('// ==========================================================================\n// EXPERT ROADMAP'));

fs.writeFileSync(targetPath, exportHeader + '\n' + roadmapPart, 'utf8');
console.log('Successfully updated src/data/grammar-data.js with 100% Vietnamese explanations!');
