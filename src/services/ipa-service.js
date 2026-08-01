// ==========================================================================
// IPA Phonetic Service — Oxford Learner's Dictionaries Standard Engine
// Provides accurate Oxford IPA transcriptions & dynamic G2P synthesis
// Standardized based on Oxford Learner's Dictionaries (BrE / NAmE)
// ==========================================================================

// Core Oxford Learner's Dictionaries IPA Database
const IPA_DICT = {
  // Common & Game Words
  'a': 'ə', 'an': 'ən', 'the': 'ðə', 'and': 'ənd', 'or': 'ɔː(r)', 'but': 'bət', 'in': 'ɪn', 'on': 'ɒn', 'at': 'ət',
  'to': 'tə', 'for': 'fə(r)', 'with': 'wɪð', 'by': 'baɪ', 'about': 'əˈbaʊt', 'against': 'əˈɡenst', 'between': 'bɪˈtwiːn',
  'into': 'ˈɪntə', 'through': 'θruː', 'during': 'ˈdjʊərɪŋ', 'before': 'bɪˈfɔː(r)', 'after': 'ˈɑːftə(r)', 'above': 'əˈbʌv',
  'below': 'bɪˈləʊ', 'from': 'frəm', 'up': 'ʌp', 'down': 'daʊn', 'out': 'aʊt', 'off': 'ɒf', 'over': 'ˈəʊvə(r)', 'under': 'ˈʌndə(r)',
  
  'i': 'aɪ', 'you': 'juː', 'he': 'hiː', 'she': 'ʃiː', 'it': 'ɪt', 'we': 'wiː', 'they': 'ðeɪ',
  'me': 'miː', 'him': 'hɪm', 'her': 'hɜː(r)', 'us': 'əs', 'them': 'ðəm',
  'my': 'maɪ', 'your': 'jɔː(r)', 'his': 'hɪz', 'its': 'ɪts', 'our': 'ˈaʊə(r)', 'their': 'ðeə(r)',
  
  // Verbs (Base, Past, Participle)
  'be': 'biː', 'is': 'ɪz', 'am': 'əm', 'are': 'ɑː(r)', 'was': 'wɒz', 'were': 'wɜː(r)', 'been': 'biːn', 'being': 'ˈbiːɪŋ',
  'have': 'hæv', 'has': 'hæz', 'had': 'hæd', 'having': 'ˈhævɪŋ',
  'do': 'duː', 'does': 'dʌz', 'did': 'dɪd', 'done': 'dʌn', 'doing': 'ˈduːɪŋ',
  'go': 'ɡəʊ', 'goes': 'ɡəʊz', 'went': 'went', 'gone': 'ɡɒn', 'going': 'ˈɡəʊɪŋ',
  'make': 'meɪk', 'made': 'meɪd', 'making': 'ˈmeɪkɪŋ',
  'get': 'ɡet', 'got': 'ɡɒt', 'gotten': 'ˈɡɒtn',
  'take': 'teɪk', 'took': 'tʊk', 'taken': 'ˈteɪkən',
  'see': 'siː', 'saw': 'sɔː', 'seen': 'siːn',
  'come': 'kʌm', 'came': 'keɪm',
  'think': 'θɪŋk', 'thought': 'θɔːt',
  'know': 'nəʊ', 'knew': 'njuː', 'known': 'nəʊn',
  'say': 'seɪ', 'said': 'sed',
  'tell': 'tel', 'told': 'təʊld',
  'speak': 'spiːk', 'spoke': 'spəʊk', 'spoken': 'ˈspəʊkən',
  'write': 'raɪt', 'wrote': 'rəʊt', 'written': 'ˈrɪtn',
  'read': 'riːd', 'reading': 'ˈriːdɪŋ',
  'run': 'rʌn', 'ran': 'ræn',
  'eat': 'iːt', 'ate': 'et', 'eaten': 'ˈiːtn',
  'drink': 'drɪŋk', 'drank': 'dræŋk', 'drunk': 'drʌŋk',
  'drive': 'draɪv', 'drove': 'drəʊv', 'driven': 'ˈdrɪvn',
  'fly': 'flaɪ', 'flew': 'fluː', 'flown': 'fləʊn',
  'break': 'breɪk', 'broke': 'brəʊk', 'broken': 'ˈbrəʊkən',
  'buy': 'baɪ', 'bought': 'bɔːt',
  'catch': 'kætʃ', 'caught': 'kɔːt',
  'choose': 'tʃuːz', 'chose': 'tʃəʊz', 'chosen': 'ˈtʃəʊzn',
  'fall': 'fɔːl', 'fell': 'fel', 'fallen': 'ˈfɔːlən',
  'find': 'faɪnd', 'found': 'faʊnd',
  'forget': 'fəˈɡet', 'forgot': 'fəˈɡɒt', 'forgotten': 'fəˈɡɒtn',
  'give': 'ɡɪv', 'gave': 'ɡeɪv', 'given': 'ˈɡɪvn',
  'hear': 'hɪə(r)', 'heard': 'hɜːd',
  'keep': 'kiːp', 'kept': 'kept',
  'leave': 'liːv', 'left': 'left',
  'lose': 'luːz', 'lost': 'lɒst',
  'pay': 'peɪ', 'paid': 'peɪd',
  'put': 'pʊt',
  'ring': 'rɪŋ', 'rang': 'ræŋ', 'rung': 'rʌŋ',
  'sell': 'sel', 'sold': 'səʊld',
  'sing': 'sɪŋ', 'sang': 'sæŋ', 'sung': 'sʌŋ',
  'sit': 'sɪt', 'sat': 'sæt',
  'sleep': 'sliːp', 'slept': 'slept',
  'stand': 'stænd', 'stood': 'stʊd',
  'swim': 'swɪm', 'swam': 'swæm', 'swum': 'swʌm',
  'teach': 'tiːtʃ', 'taught': 'tɔːt',
  'understand': 'ˌʌndəˈstænd', 'understood': 'ˌʌndəˈstʊd',
  'win': 'wɪn', 'won': 'wʌn',
  'wear': 'weə(r)', 'wore': 'wɔː(r)', 'worn': 'wɔːn',

  // Core Vocabulary & Oxford Top Words
  'apple': 'ˈæpl', 'banana': 'bəˈnɑːnə', 'cat': 'kæt', 'dog': 'dɒɡ', 'house': 'haʊs', 'car': 'kɑː(r)',
  'book': 'bʊk', 'water': 'ˈwɔːtə(r)', 'time': 'taɪm', 'year': 'jɪə(r)', 'people': 'ˈpiːpl', 'way': 'weɪ',
  'day': 'deɪ', 'man': 'mæn', 'thing': 'θɪŋ', 'woman': 'ˈwʊmən', 'life': 'laɪf', 'child': 'tʃaɪld',
  'world': 'wɜːld', 'school': 'skuːl', 'state': 'steɪt', 'family': 'ˈfæməli', 'student': 'ˈstjuːdnt',
  'group': 'ɡruːp', 'country': 'ˈkʌntri', 'problem': 'ˈprɒbləm', 'hand': 'hænd', 'part': 'pɑːt',
  'place': 'pleɪs', 'case': 'keɪs', 'week': 'wiːk', 'company': 'ˈkʌmpəni', 'system': 'ˈsɪstəm',
  'program': 'ˈprəʊɡræm', 'question': 'ˈkwestʃən', 'work': 'wɜːk', 'number': 'ˈnʌmbə(r)', 'night': 'naɪt',
  'mr': 'ˈmɪstə(r)', 'point': 'pɔɪnt', 'home': 'həʊm', 'room': 'ruːm',
  'mother': 'ˈmʌðə(r)', 'area': 'ˈeəriə', 'money': 'ˈmʌni', 'story': 'ˈstɔːri', 'fact': 'fækt',
  'month': 'mʌnθ', 'lot': 'lɒt', 'right': 'raɪt', 'study': 'ˈstʌdi', 'eye': 'aɪ',
  'job': 'dʒɒb', 'word': 'wɜːd', 'business': 'ˈbɪznəs', 'issue': 'ˈɪʃuː', 'side': 'saɪd',
  'kind': 'kaɪnd', 'head': 'hed', 'service': 'ˈsɜːvɪs', 'friend': 'frend',
  'father': 'ˈfɑːðə(r)', 'power': 'ˈpaʊə(r)', 'hour': 'ˈaʊə(r)', 'game': 'ɡeɪm', 'line': 'laɪn',
  'end': 'end', 'member': 'ˈmembə(r)', 'law': 'lɔː', 'city': 'ˈsɪti',
  'community': 'kəˈmjuːnəti', 'name': 'neɪm', 'president': 'ˈprezɪdənt', 'team': 'tiːm',
  'minute': 'ˈmɪnɪt', 'idea': 'aɪˈdɪə', 'kid': 'kɪd', 'body': 'ˈbɒdi', 'information': 'ˌɪnfəˈmeɪʃn',
  'back': 'bæk', 'parent': 'ˈpeərənt', 'face': 'feɪs', 'others': 'ˈʌðəz', 'level': 'ˈlevl',
  'office': 'ˈɒfɪs', 'door': 'dɔː(r)', 'health': 'helθ', 'person': 'ˈpɜːsn', 'art': 'ɑːt',
  'war': 'wɔː(r)', 'history': 'ˈhɪstri', 'party': 'ˈpɑːti', 'result': 'rɪˈzʌlt', 'change': 'tʃeɪndʒ',
  'morning': 'ˈmɔːnɪŋ', 'reason': 'ˈriːzn', 'research': 'rɪˈsɜːtʃ', 'girl': 'ɡɜːl', 'guy': 'ɡaɪ',
  'moment': 'ˈməʊmənt', 'air': 'eə(r)', 'teacher': 'ˈtiːtʃə(r)', 'force': 'fɔːs', 'education': 'ˌedʒuˈkeɪʃn',
  
  // Adjectives & Synonyms/Antonyms
  'big': 'bɪɡ', 'small': 'smɔːl', 'large': 'lɑːdʒ', 'tiny': 'ˈtaɪni', 'huge': 'hjuːdʒ', 'enormous': 'ɪˈnɔːməs',
  'good': 'ɡʊd', 'bad': 'bæd', 'great': 'ɡreɪt', 'excellent': 'ˈeksələnt', 'terrible': 'ˈterəbl',
  'happy': 'ˈhæpi', 'sad': 'sæd', 'joyful': 'ˈdʒɔɪfl', 'gloomy': 'ˈɡluːmi', 'cheerful': 'ˈtʃɪəfl',
  'fast': 'fɑːst', 'slow': 'sləʊ', 'quick': 'kwɪk', 'rapid': 'ˈræpɪd', 'swift': 'swɪft',
  'hot': 'hɒt', 'cold': 'kəʊld', 'warm': 'wɔːm', 'cool': 'kuːl', 'freezing': 'ˈfriːzɪŋ',
  'strong': 'strɒŋ', 'weak': 'wiːk', 'powerful': 'ˈpaʊəfl', 'fragile': 'ˈfrædʒaɪl',
  'rich': 'rɪtʃ', 'poor': 'pɔː(r)', 'wealthy': 'ˈwelθi', 'affluent': 'ˈæfluənt',
  'smart': 'smɑːt', 'clever': 'ˈklevə(r)', 'intelligent': 'ɪnˈtelɪdʒənt', 'foolish': 'ˈfuːlɪʃ',
  'easy': 'ˈiːzi', 'difficult': 'ˈdɪfɪkəlt', 'simple': 'ˈsɪmpl', 'complex': 'ˈkɒmpleks',
  'beautiful': 'ˈbjuːtɪfl', 'ugly': 'ˈʌɡli', 'gorgeous': 'ˈɡɔːdʒəs', 'attractive': 'əˈtræktɪv',
  'abundant': 'əˈbʌndənt', 'scarce': 'skeəs', 'plentiful': 'ˈplentɪfl',
  'ancient': 'ˈeɪnʃənt', 'modern': 'ˈmɒdn', 'new': 'njuː', 'old': 'əʊld',
  'brave': 'breɪv', 'cowardly': 'ˈkaʊədli', 'courageous': 'kəˈreɪdʒəs',
  'calm': 'kɑːm', 'anxious': 'ˈæŋkʃəs', 'peaceful': 'ˈpiːsfl',
  
  // Minimal Pairs & Phoneme Blitz Words
  'ship': 'ʃɪp', 'sheep': 'ʃiːp',
  'pen': 'pen', 'pan': 'pæn',
  'bit': 'bɪt', 'beat': 'biːt',
  'sit': 'sɪt', 'seat': 'siːt',
  'full': 'fʊl', 'fool': 'fuːl',
  'look': 'lʊk', 'luke': 'luːk',
  'fit': 'fɪt', 'feet': 'fiːt',
  'live': 'lɪv', 'leave': 'liːv',
  'cot': 'kɒt', 'caught': 'kɔːt',
  'hat': 'hæt', 'hut': 'hʌt',
  'bad': 'bæd', 'bed': 'bed',
  'fan': 'fæn', 'van': 'væn',
  'wet': 'wet', 'vet': 'vet',
  'think': 'θɪŋk', 'sink': 'sɪŋk',
  'three': 'θriː', 'tree': 'triː',
  
  // Specific Oxford Learner's Dictionary Transcriptions
  'ballroom': 'ˈbɔːlruːm',
  'improved': 'ɪmˈpruːvd',
  'archery': 'ˈɑːtʃəri',
  'unoccupied': 'ˌʌnˈɒkjupaɪd',
  'abrupt': 'əˈbrʌpt',
  'audio': 'ˈɔːdiəʊ',
  'unable': 'ʌnˈeɪbl',
  'unacceptable': 'ˌʌnəkˈseptəbl',
  'acquired': 'əˈkwaɪəd',
  'occupied': 'ˈɒkjupaɪd',
  'operated': 'ˈɒpəreɪtɪd',
  'interactive': 'ˌɪntərˈæktɪv',
  'disable': 'dɪsˈeɪbl',
  'disinterested': 'dɪsˈɪntrestɪd',

  // Grammar Terms
  'grammar': 'ˈɡræmə(r)', 'verb': 'vɜːb', 'noun': 'naʊn', 'adjective': 'ˈædʒɪktɪv', 'adverb': 'ˈædvɜːb',
  'preposition': 'ˌprepəˈzɪʃn', 'pronoun': 'ˈprəʊnaʊn', 'conjunction': 'kənˈdʒʌŋkʃn',
  'tense': 'tens', 'present': 'ˈpreznt', 'past': 'pɑːst', 'future': 'ˈfjuːtʃə(r)',
  'simple': 'ˈsɪmpl', 'continuous': 'kənˈtɪnjuəs', 'perfect': 'ˈpɜːfɪkt', 'passive': 'ˈpæsɪv',
  'active': 'ˈæktɪv', 'singular': 'ˈsɪŋɡjələ(r)', 'plural': 'ˈplʊərəl', 'subject': 'ˈsʌbdʒɪkt'
};

/**
 * Normalizes any IPA input string to Oxford Learner's Dictionaries standard
 */
export function formatToOxfordIPA(ipaStr) {
  if (!ipaStr) return '';
  let str = String(ipaStr).trim();
  if (!str) return '';

  const isEnclosed = str.startsWith('/') && str.endsWith('/');
  let clean = isEnclosed ? str.slice(1, -1) : str;

  clean = clean
    // Replace non-standard IPA symbols
    .replace(/∫/g, 'ʃ')
    .replace(/'/g, 'ˈ')
    // Oxford BrE Diphthong: oʊ -> əʊ
    .replace(/oʊ/g, 'əʊ')
    // Oxford Latin g -> IPA script ɡ
    .replace(/g/g, 'ɡ')
    // Oxford short e sound: ɛ -> e
    .replace(/ɛ/g, 'e')
    // Clean up double consonants created by naive rule concatenation
    .replace(/ll/g, 'l')
    .replace(/kk/g, 'k')
    .replace(/pp/g, 'p')
    .replace(/tt/g, 't')
    .replace(/bb/g, 'b')
    // Clean up internal syllable dots while preserving stress marks (ˈ, ˌ)
    .replace(/\./g, '')
    // Oxford r notation (non-rhotic Linking R: ər -> ə(r), etc.)
    .replace(/ər$/g, 'ə(r)')
    .replace(/ər\s/g, 'ə(r) ')
    .replace(/ɔːr$/g, 'ɔː(r)')
    .replace(/ɔːr\s/g, 'ɔː(r) ')
    .replace(/ɑːr$/g, 'ɑː(r)')
    .replace(/ɑːr\s/g, 'ɑː(r) ')
    .replace(/eər$/g, 'eə(r)')
    .replace(/eər\s/g, 'eə(r) ')
    .replace(/ɪər$/g, 'ɪə(r)')
    .replace(/ɪər\s/g, 'ɪə(r) ');

  return isEnclosed ? `/${clean}/` : clean;
}

// Grapheme to Phoneme (G2P) Rule Engine for Dynamic Oxford IPA Synthesis
function ruleBasedIPA(word) {
  let w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return word;

  if (IPA_DICT[w]) return IPA_DICT[w];

  let prefixIPA = '';
  if (w.startsWith('un')) { prefixIPA = 'ʌn'; w = w.slice(2); }
  else if (w.startsWith('re')) { prefixIPA = 'riː'; w = w.slice(2); }
  else if (w.startsWith('dis')) { prefixIPA = 'dɪs'; w = w.slice(3); }
  else if (w.startsWith('pre')) { prefixIPA = 'priː'; w = w.slice(3); }

  if (IPA_DICT[w]) return prefixIPA + IPA_DICT[w];

  let res = w
    .replace(/tion/g, 'ʃn')
    .replace(/sion/g, 'ʒn')
    .replace(/ph/g, 'f')
    .replace(/sh/g, 'ʃ')
    .replace(/ch/g, 'tʃ')
    .replace(/th/g, 'θ')
    .replace(/wh/g, 'w')
    .replace(/ck/g, 'k')
    .replace(/ng$/g, 'ŋ')
    .replace(/ee/g, 'iː')
    .replace(/ea/g, 'iː')
    .replace(/oo/g, 'uː')
    .replace(/ou/g, 'aʊ')
    .replace(/oi/g, 'ɔɪ')
    .replace(/ai/g, 'eɪ')
    .replace(/ay/g, 'eɪ')
    .replace(/oa/g, 'əʊ')
    .replace(/ow/g, 'əʊ')
    .replace(/ar/g, 'ɑː(r)')
    .replace(/or/g, 'ɔː(r)')
    .replace(/er$/g, 'ə(r)')
    .replace(/ing$/g, 'ɪŋ')
    .replace(/ed$/g, 't')
    .replace(/ly$/g, 'li')
    .replace(/ful$/g, 'fl')
    .replace(/less$/g, 'ləs')
    .replace(/ness$/g, 'nəs')
    .replace(/ment$/g, 'mənt')
    .replace(/able$/g, 'əbl')
    .replace(/ible$/g, 'əbl')
    .replace(/ous$/g, 'əs')
    .replace(/ity$/g, me => 'əti')
    .replace(/c([eiy])/g, 's$1')
    .replace(/c/g, 'k')
    .replace(/g([eiy])/g, 'dʒ$1')
    .replace(/qu/g, 'kw')
    .replace(/x/g, 'ks')
    .replace(/y$/g, 'i')
    .replace(/a([bcdfghjklmnpqrstvwxyz])e$/g, 'eɪ$1')
    .replace(/i([bcdfghjklmnpqrstvwxyz])e$/g, 'aɪ$1')
    .replace(/o([bcdfghjklmnpqrstvwxyz])e$/g, 'əʊ$1')
    .replace(/u([bcdfghjklmnpqrstvwxyz])e$/g, 'juː$1');

  if (res.length > 4 && !res.includes('ˈ')) {
    res = 'ˈ' + res;
  }

  return prefixIPA + res;
}

export const IpaService = {
  /**
   * Normalize input to Oxford Learner's Dictionaries standard
   */
  formatToOxfordIPA(ipa) {
    return formatToOxfordIPA(ipa);
  },

  /**
   * Get single word Oxford IPA transcription
   */
  getWordIPA(word) {
    if (!word) return '';
    const clean = word.trim().replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, '');
    if (!clean) return word;
    const lower = clean.toLowerCase();
    const rawIpa = IPA_DICT[lower] || ruleBasedIPA(clean);
    return formatToOxfordIPA(rawIpa);
  },

  /**
   * Get Oxford IPA transcription for words, phrases or sentences
   */
  getIPA(text) {
    if (!text) return '';
    const words = text.trim().split(/\s+/);
    const ipaParts = words.map(w => {
      const match = w.match(/^([^a-zA-Z]*)([a-zA-Z'-]+)([^a-zA-Z]*)$/);
      if (match) {
        const [, prefix, core, suffix] = match;
        const ipaCore = this.getWordIPA(core);
        return `${prefix}${ipaCore}${suffix}`;
      }
      return this.getWordIPA(w);
    });

    const joined = ipaParts.join(' ');
    return `/${formatToOxfordIPA(joined)}/`;
  },

  /**
   * Returns HTML string with text + Oxford IPA badge
   */
  getIPABadgeHtml(text, customStyle = '') {
    if (!text) return '';
    const ipa = this.getIPA(text);
    return `<span class="ipa-badge" style="${customStyle}" title="Phiên âm Oxford Learner's Dictionaries">${ipa}</span>`;
  },

  /**
   * Formats a term with term text and subtext Oxford IPA
   */
  formatTermWithIPA(termText) {
    if (!termText) return '';
    const ipa = this.getIPA(termText);
    return `
      <span class="term-with-ipa">
        <span class="term-main">${termText}</span>
        <span class="term-ipa">${ipa}</span>
      </span>
    `;
  }
};
