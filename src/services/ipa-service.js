// ==========================================================================
// IPA Phonetic Service — English International Phonetic Alphabet Engine
// Provides accurate IPA transcriptions & dynamic G2P synthesis for words & phrases
// ==========================================================================

// Extensive Core IPA Dictionary for Common Words, Grammar Terms & Irregular Verbs
const IPA_DICT = {
  // Common & Game Words
  'a': 'ə', 'an': 'æn', 'the': 'ðə', 'and': 'ænd', 'or': 'ɔːr', 'but': 'bʌt', 'in': 'ɪn', 'on': 'ɒn', 'at': 'æt',
  'to': 'tuː', 'for': 'fɔːr', 'with': 'wɪð', 'by': 'baɪ', 'about': 'əˈbaʊt', 'against': 'əˈɡenst', 'between': 'bɪˈtwiːn',
  'into': 'ˈɪn.tuː', 'through': 'θruː', 'during': 'ˈdjʊə.rɪŋ', 'before': 'bɪˈfɔːr', 'after': 'ˈɑːf.tər', 'above': 'əˈbʌv',
  'below': 'bɪˈloʊ', 'from': 'frɒm', 'up': 'ʌp', 'down': 'daʊn', 'out': 'aʊt', 'off': 'ɒf', 'over': 'ˈoʊ.vər', 'under': 'ˈʌn.dər',
  
  'i': 'aɪ', 'you': 'juː', 'he': 'hiː', 'she': 'ʃiː', 'it': 'ɪt', 'we': 'wiː', 'they': 'ðeɪ',
  'me': 'miː', 'him': 'hɪm', 'her': 'hɜːr', 'us': 'ʌs', 'them': 'ðem',
  'my': 'maɪ', 'your': 'jɔːr', 'his': 'hɪz', 'its': 'ɪts', 'our': 'aʊər', 'their': 'ðeər',
  
  // Verbs (Base, Past, Participle)
  'be': 'biː', 'is': 'ɪz', 'am': 'æm', 'are': 'ɑːr', 'was': 'wɒz', 'were': 'wɜːr', 'been': 'biːn', 'being': 'ˈbiː.ɪŋ',
  'have': 'hæv', 'has': 'hæz', 'had': 'hæd', 'having': 'ˈhæv.ɪŋ',
  'do': 'duː', 'does': 'dʌz', 'did': 'dɪd', 'done': 'dʌn', 'doing': 'ˈduː.ɪŋ',
  'go': 'ɡoʊ', 'goes': 'ɡoʊz', 'went': 'went', 'gone': 'ɡɒn', 'going': 'ˈɡoʊ.ɪŋ',
  'make': 'meɪk', 'made': 'meɪd', 'making': 'ˈmeɪ.kɪŋ',
  'get': 'ɡet', 'got': 'ɡɒt', 'gotten': 'ˈɡɒt.n̩',
  'take': 'teɪk', 'took': 'tʊk', 'taken': 'ˈteɪ.kən',
  'see': 'siː', 'saw': 'sɔː', 'seen': 'siːn',
  'come': 'kʌm', 'came': 'keɪm',
  'think': 'θɪŋk', 'thought': 'θɔːt',
  'know': 'noʊ', 'knew': 'njuː', 'known': 'noʊn',
  'say': 'seɪ', 'said': 'sed',
  'tell': 'tel', 'told': 'toʊld',
  'speak': 'spiːk', 'spoke': 'spoʊk', 'spoken': 'ˈspoʊ.kən',
  'write': 'raɪt', 'wrote': 'roʊt', 'written': 'ˈrɪt.n̩',
  'read': 'riːd', 'reading': 'ˈriː.dɪŋ',
  'run': 'rʌn', 'ran': 'ræn',
  'eat': 'iːt', 'ate': 'et', 'eaten': 'ˈiː.tən',
  'drink': 'drɪŋk', 'drank': 'dræŋk', 'drunk': 'drʌŋk',
  'drive': 'draɪv', 'drove': 'droʊv', 'driven': 'ˈdrɪv.n̩',
  'fly': 'flaɪ', 'flew': 'fluː', 'flown': 'floʊn',
  'break': 'breɪk', 'broke': 'broʊk', 'broken': 'ˈbroʊ.kən',
  'buy': 'baɪ', 'bought': 'bɔːt',
  'catch': 'kætʃ', 'caught': 'kɔːt',
  'choose': 'tʃuːz', 'chose': 'tʃoʊz', 'chosen': 'ˈtʃoʊ.zən',
  'fall': 'fɔːl', 'fell': 'fel', 'fallen': 'ˈfɔː.lən',
  'find': 'faɪnd', 'found': 'faʊnd',
  'forget': 'fərˈɡet', 'forgot': 'fərˈɡɒt', 'forgotten': 'fərˈɡɒt.n̩',
  'give': 'ɡɪv', 'gave': 'ɡeɪv', 'given': 'ˈɡɪv.n̩',
  'hear': 'hɪər', 'heard': 'hɜːd',
  'keep': 'kiːp', 'kept': 'kept',
  'leave': 'liːv', 'left': 'left',
  'lose': 'luːz', 'lost': 'lɒst',
  'pay': 'peɪ', 'paid': 'peɪd',
  'put': 'pʊt',
  'ring': 'rɪŋ', 'rang': 'ræŋ', 'rung': 'rʌŋ',
  'sell': 'sel', 'sold': 'soʊld',
  'sing': 'sɪŋ', 'sang': 'sæŋ', 'sung': 'sʌŋ',
  'sit': 'sɪt', 'sat': 'sæt',
  'sleep': 'sliːp', 'slept': 'slept',
  'stand': 'stænd', 'stood': 'stʊd',
  'swim': 'swɪm', 'swam': 'swæm', 'swum': 'swʌm',
  'teach': 'tiːtʃ', 'taught': 'tɔːt',
  'understand': 'ˌʌn.dəˈstænd', 'understood': 'ˌʌn.dəˈstʊd',
  'win': 'wɪn', 'won': 'wʌn',
  'wear': 'weər', 'wore': 'wɔːr', 'worn': 'wɔːn',

  // Core Vocabulary & Flashcards
  'apple': 'ˈæp.əl', 'banana': 'bəˈnɑː.nə', 'cat': 'kæt', 'dog': 'dɒɡ', 'house': 'haʊs', 'car': 'kɑːr',
  'book': 'bʊk', 'water': 'ˈwɔː.tər', 'time': 'taɪm', 'year': 'jɪər', 'people': 'ˈpiː.pəl', 'way': 'weɪ',
  'day': 'deɪ', 'man': 'mæn', 'thing': 'θɪŋ', 'woman': 'ˈwʊm.ən', 'life': 'laɪf', 'child': 'tʃaɪld',
  'world': 'wɜːld', 'school': 'skuːl', 'state': 'steɪt', 'family': 'ˈfæm.əl.i', 'student': 'ˈstjuː.dənt',
  'group': 'ɡruːp', 'country': 'ˈkʌn.tri', 'problem': 'ˈprɒb.ləm', 'hand': 'hænd', 'part': 'pɑːt',
  'place': 'pleɪs', 'case': 'keɪs', 'week': 'wiːk', 'company': 'ˈkʌm.pə.ni', 'system': 'ˈsɪs.təm',
  'program': 'ˈproʊ.ɡræm', 'question': 'ˈkwes.tʃən', 'work': 'wɜːk', 'number': 'ˈnʌm.bər', 'night': 'naɪt',
  'mr': 'ˈmɪs.tər', 'point': 'pɔɪnt', 'home': 'hoʊm', 'water': 'ˈwɔː.tər', 'room': 'ruːm',
  'mother': 'ˈmʌð.ər', 'area': 'ˈeə.ri.ə', 'money': 'ˈmʌn.i', 'story': 'ˈstɔː.ri', 'fact': 'fækt',
  'month': 'mʌnθ', 'lot': 'lɒt', 'right': 'raɪt', 'study': 'ˈstʌd.i', 'book': 'bʊk', 'eye': 'aɪ',
  'job': 'dʒɒb', 'word': 'wɜːd', 'business': 'ˈbɪz.nɪs', 'issue': 'ˈɪʃ.uː', 'side': 'saɪd',
  'kind': 'kaɪnd', 'head': 'hed', 'house': 'haʊs', 'service': 'ˈsɜː.vɪs', 'friend': 'frend',
  'father': 'ˈfɑː.ðər', 'power': 'ˈpaʊ.ər', 'hour': 'ˈaʊ.ər', 'game': 'ɡeɪm', 'line': 'laɪn',
  'end': 'end', 'member': 'ˈmem.bər', 'law': 'lɔː', 'car': 'kɑːr', 'city': 'ˈsɪt.i',
  'community': 'kəˈmjuː.nə.ti', 'name': 'neɪm', 'president': 'ˈprez.ɪ.dənt', 'team': 'tiːm',
  'minute': 'ˈmɪn.ɪt', 'idea': 'aɪˈdɪə', 'kid': 'kɪd', 'body': 'ˈbɒd.i', 'information': 'ˌɪn.fəˈmeɪ.ʃən',
  'back': 'bæk', 'parent': 'ˈpeə.rənt', 'face': 'feɪs', 'others': 'ˈʌð.əz', 'level': 'ˈlev.əl',
  'office': 'ˈɒf.ɪs', 'door': 'dɔːr', 'health': 'helθ', 'person': 'ˈpɜː.sən', 'art': 'ɑːt',
  'war': 'wɔːr', 'history': 'ˈhɪs.tər.i', 'party': 'ˈpɑː.ti', 'result': 'rɪˈzʌlt', 'change': 'tʃeɪndʒ',
  'morning': 'ˈmɔː.nɪŋ', 'reason': 'ˈriː.zən', 'research': 'rɪˈsɜːtʃ', 'girl': 'ɡɜːl', 'guy': 'ɡaɪ',
  'moment': 'ˈmoʊ.mənt', 'air': 'eər', 'teacher': 'ˈtiː.tʃər', 'force': 'fɔːs', 'education': 'ˌedʒ.uˈkeɪ.ʃən',
  
  // Adjectives & Synonyms/Antonyms
  'big': 'bɪɡ', 'small': 'smɔːl', 'large': 'lɑːdʒ', 'tiny': 'ˈtaɪ.ni', 'huge': 'hjuːdʒ', 'enormous': 'ɪˈnɔː.məs',
  'good': 'ɡʊd', 'bad': 'bæd', 'great': 'ɡreɪt', 'excellent': 'ˈek.səl.ənt', 'terrible': 'ˈter.ə.bəl',
  'happy': 'ˈhæp.i', 'sad': 'sæd', 'joyful': 'ˈdʒɔɪ.fəl', 'gloomy': 'ˈɡluː.mi', 'cheerful': 'ˈtʃɪə.fəl',
  'fast': 'fɑːst', 'slow': 'sloʊ', 'quick': 'kwɪk', 'rapid': 'ˈræp.ɪd', 'swift': 'swɪft',
  'hot': 'hɒt', 'cold': 'koʊld', 'warm': 'wɔːm', 'cool': 'kuːl', 'freezing': 'ˈfriː.zɪŋ',
  'strong': 'strɒŋ', 'weak': 'wiːk', 'powerful': 'ˈpaʊ.ə.fəl', 'fragile': 'ˈfrædʒ.aɪl',
  'rich': 'rɪtʃ', 'poor': 'pʊər', 'wealthy': 'ˈwel.θi', 'affluent': 'ˈæf.lu.ənt',
  'smart': 'smɑːt', 'clever': 'ˈklev.ər', 'intelligent': 'ɪnˈtel.ɪ.dʒənt', 'foolish': 'ˈfuː.lɪʃ',
  'easy': 'ˈiː.zi', 'difficult': 'ˈdɪf.ɪ.kəlt', 'simple': 'ˈsɪm.pəl', 'complex': 'kəmˈpleks',
  'beautiful': 'ˈbjuː.tɪ.fəl', 'ugly': 'ˈʌɡ.li', 'gorgeous': 'ˈɡɔː.dʒəs', 'attractive': 'əˈtræk.tɪv',
  'abundant': 'əˈbʌn.dənt', 'scarce': 'skeəs', 'plentiful': 'ˈplen.tɪ.fəl',
  'ancient': 'ˈeɪn.ʃənt', 'modern': 'ˈmɒd.ən', 'new': 'njuː', 'old': 'oʊld',
  'brave': 'breɪv', 'cowardly': 'ˈkaʊ.əd.li', 'courageous': 'kəˈreɪ.dʒəs',
  'calm': 'kɑːm', 'anxious': 'ˈæŋk.ʃəs', 'peaceful': 'ˈpiːs.fəl',
  
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
  
  // Grammar Terms
  'grammar': 'ˈɡræm.ər', 'verb': 'vɜːb', 'noun': 'naʊn', 'adjective': 'ˈædʒ.ek.tɪv', 'adverb': 'ˈæd.vɜːb',
  'preposition': 'ˌprep.əˈzɪʃ.ən', 'pronoun': 'ˈproʊ.naʊn', 'conjunction': 'kənˈdʒʌŋk.ʃən',
  'tense': 'tens', 'present': 'ˈprez.ənt', 'past': 'pɑːst', 'future': 'ˈfjuː.tʃər',
  'simple': 'ˈsɪm.pəl', 'continuous': 'kənˈtɪn.ju.əs', 'perfect': 'ˈpɜː.fɪkt', 'passive': 'ˈpæs.ɪv',
  'active': 'ˈæk.tɪv', 'singular': 'ˈsɪŋ.ɡjə.lər', 'plural': 'ˈplʊə.rəl', 'subject': 'ˈsʌb.dʒekt'
};

// Grapheme to Phoneme (G2P) Rule Engine for Dynamic IPA Synthesis
function ruleBasedIPA(word) {
  let w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return word;

  // Check Dictionary
  if (IPA_DICT[w]) return IPA_DICT[w];

  // Common Prefix Handling
  let prefixIPA = '';
  if (w.startsWith('un')) { prefixIPA = 'ʌn-'; w = w.slice(2); }
  else if (w.startsWith('re')) { prefixIPA = 'riː-'; w = w.slice(2); }
  else if (w.startsWith('dis')) { prefixIPA = 'dɪs-'; w = w.slice(3); }
  else if (w.startsWith('pre')) { prefixIPA = 'priː-'; w = w.slice(3); }

  // Check dictionary again for stem
  if (IPA_DICT[w]) return prefixIPA + IPA_DICT[w];

  // Phonetic Pattern Transformations
  let res = w
    .replace(/tion/g, 'ʃən')
    .replace(/sion/g, 'ʒən')
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
    .replace(/oa/g, 'oʊ')
    .replace(/ow/g, 'oʊ')
    .replace(/ar/g, 'ɑːr')
    .replace(/or/g, 'ɔːr')
    .replace(/er$/g, 'ər')
    .replace(/ing$/g, 'ɪŋ')
    .replace(/ed$/g, 't')
    .replace(/ly$/g, 'li')
    .replace(/ful$/g, 'fəl')
    .replace(/less$/g, 'ləs')
    .replace(/ness$/g, 'nəs')
    .replace(/ment$/g, 'mənt')
    .replace(/able$/g, 'əbəl')
    .replace(/ible$/g, 'əbəl')
    .replace(/ous$/g, 'əs')
    .replace(/ity$/g, 'əti')
    .replace(/c([eiy])/g, 's$1')
    .replace(/c/g, 'k')
    .replace(/g([eiy])/g, 'dʒ$1')
    .replace(/qu/g, 'kw')
    .replace(/x/g, 'ks')
    .replace(/y$/g, 'i')
    .replace(/a([bcdfghjklmnpqrstvwxyz])e$/g, 'eɪ$1')
    .replace(/i([bcdfghjklmnpqrstvwxyz])e$/g, 'aɪ$1')
    .replace(/o([bcdfghjklmnpqrstvwxyz])e$/g, 'oʊ$1')
    .replace(/u([bcdfghjklmnpqrstvwxyz])e$/g, 'juː$1');

  // Insert primary stress mark for multi-syllables
  if (res.length > 4 && !res.includes('ˈ')) {
    res = 'ˈ' + res;
  }

  return prefixIPA + res;
}

export const IpaService = {
  /**
   * Get single word IPA transcription
   */
  getWordIPA(word) {
    if (!word) return '';
    const clean = word.trim().replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, '');
    if (!clean) return word;
    const lower = clean.toLowerCase();
    if (IPA_DICT[lower]) return IPA_DICT[lower];
    return ruleBasedIPA(clean);
  },

  /**
   * Get IPA transcription for words, phrases or sentences
   */
  getIPA(text) {
    if (!text) return '';
    const words = text.trim().split(/\s+/);
    const ipaParts = words.map(w => {
      // Keep punctuation outside IPA lookup
      const match = w.match(/^([^a-zA-Z]*)([a-zA-Z'-]+)([^a-zA-Z]*)$/);
      if (match) {
        const [, prefix, core, suffix] = match;
        const ipaCore = this.getWordIPA(core);
        return `${prefix}${ipaCore}${suffix}`;
      }
      return this.getWordIPA(w);
    });

    return `/${ipaParts.join(' ')}/`;
  },

  /**
   * Returns HTML string with text + IPA badge
   */
  getIPABadgeHtml(text, customStyle = '') {
    if (!text) return '';
    const ipa = this.getIPA(text);
    return `<span class="ipa-badge" style="${customStyle}" title="Phiên âm quốc tế IPA">${ipa}</span>`;
  },

  /**
   * Formats a term with term text and subtext IPA
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
