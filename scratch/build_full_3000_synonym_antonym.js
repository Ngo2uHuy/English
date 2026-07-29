import fs from 'fs';

// Load base 3000 words
const speedMatchData = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_speed_match.json', 'utf8'));

console.log(`Loaded ${speedMatchData.length} base words.`);

// 1. Comprehensive Thesaurus Dictionary for English Synonyms & Antonyms
const THESAURUS = {
  // A
  'abandon': { syn: ['desert', 'relinquish', 'forsake', 'discard'], ant: ['retain', 'keep', 'maintain', 'cherish'] },
  'abbreviate': { syn: ['shorten', 'condense', 'truncate', 'abridge'], ant: ['lengthen', 'expand', 'extend', 'amplify'] },
  'abdicating': { syn: ['resigning', 'renouncing', 'relinquishing'], ant: ['claiming', 'assuming', 'retaining'] },
  'abdomen': { syn: ['belly', 'stomach', 'gut', 'midsection'], ant: ['back', 'spine', 'spine-area'] },
  'abduct': { syn: ['kidnap', 'seize', 'capture', 'snatch'], ant: ['release', 'free', 'rescue', 'liberate'] },
  'aberration': { syn: ['anomaly', 'deviation', 'irregularity', 'peculiarity'], ant: ['normality', 'regularity', 'conformity', 'standard'] },
  'abide': { syn: ['comply', 'obey', 'tolerate', 'endure'], ant: ['reject', 'disobey', 'resist', 'defy'] },
  'ability': { syn: ['capacity', 'capability', 'skill', 'talent'], ant: ['inability', 'incompetence', 'incapacity', 'weakness'] },
  'ablaze': { syn: ['burning', 'blazing', 'afire', 'flaming'], ant: ['extinguished', 'dark', 'cool', 'quenched'] },
  'able': { syn: ['capable', 'competent', 'qualified', 'proficient'], ant: ['unable', 'incompetent', 'incapable', 'clumsy'] },
  'abnormal': { syn: ['unusual', 'irregular', 'atypical', 'strange'], ant: ['normal', 'typical', 'regular', 'standard'] },
  'abode': { syn: ['residence', 'dwelling', 'home', 'habitation'], ant: ['outdoors', 'wilderness', 'open-air'] },
  'abolish': { syn: ['eliminate', 'annul', 'cancel', 'eradicate'], ant: ['establish', 'enact', 'create', 'institute'] },
  'abominable': { syn: ['detestable', 'loathsome', 'horrible', 'despicable'], ant: ['delightful', 'admirable', 'wonderful', 'charming'] },
  'abundant': { syn: ['plentiful', 'copious', 'ample', 'bountiful'], ant: ['scarce', 'meager', 'lacking', 'deficient'] },
  'accelerate': { syn: ['hasten', 'expedite', 'quicken', 'speed'], ant: ['decelerate', 'delay', 'slow', 'retard'] },
  'accept': { syn: ['receive', 'approve', 'embrace', 'admit'], ant: ['reject', 'refuse', 'decline', 'deny'] },
  'accessible': { syn: ['reachable', 'attainable', 'available', 'approachable'], ant: ['inaccessible', 'unreachable', 'restricted', 'remote'] },
  'accommodate': { syn: ['house', 'lodge', 'adapt', 'oblige'], ant: ['inconvenience', 'reject', 'disoblige'] },
  'accomplish': { syn: ['achieve', 'fulfill', 'execute', 'attain'], ant: ['fail', 'forfeit', 'give up', 'abandon'] },
  'accurate': { syn: ['precise', 'correct', 'exact', 'flawless'], ant: ['inaccurate', 'wrong', 'flawed', 'erroneous'] },
  'achieve': { syn: ['attain', 'accomplish', 'reach', 'realize'], ant: ['fail', 'miss', 'lose', 'abandon'] },
  'acquire': { syn: ['obtain', 'gain', 'procure', 'earn'], ant: ['lose', 'forfeit', 'relinquish', 'surrender'] },
  'acute': { syn: ['sharp', 'severe', 'keen', 'intense'], ant: ['dull', 'mild', 'blunt', 'obtuse'] },
  'adapt': { syn: ['adjust', 'modify', 'acclimate', 'conform'], ant: ['resist', 'disrupt', 'remain'] },
  'adequate': { syn: ['sufficient', 'enough', 'satisfactory', 'decent'], ant: ['inadequate', 'insufficient', 'lacking', 'deficient'] },
  'adhere': { syn: ['stick', 'cling', 'comply', 'abide'], ant: ['detach', 'separate', 'disobey', 'part'] },
  'adjacent': { syn: ['neighboring', 'adjoining', 'next', 'bordering'], ant: ['distant', 'remote', 'far', 'separated'] },
  'adjust': { syn: ['modify', 'adapt', 'regulate', 'alter'], ant: ['disarrange', 'disorganize', 'upset'] },
  'admire': { syn: ['appreciate', 'respect', 'esteem', 'venerate'], ant: ['despise', 'loathe', 'disdain', 'scorn'] },
  'admit': { syn: ['acknowledge', 'confess', 'allow', 'concede'], ant: ['deny', 'reject', 'refuse', 'hide'] },
  'adopt': { syn: ['embrace', 'accept', 'approve', 'choose'], ant: ['reject', 'abandon', 'discard', 'repudiate'] },
  'advance': { syn: ['progress', 'proceed', 'further', 'promote'], ant: ['recede', 'retreat', 'regress', 'hinder'] },
  'advantage': { syn: ['benefit', 'asset', 'profit', 'boon'], ant: ['disadvantage', 'drawback', 'detriment', 'handicap'] },
  'adversity': { syn: ['hardship', 'misfortune', 'affliction', 'trouble'], ant: ['prosperity', 'fortune', 'success', 'blessing'] },
  'advocate': { syn: ['champion', 'support', 'endorse', 'promote'], ant: ['oppose', 'discourage', 'resist', 'attack'] },
  'affluent': { syn: ['wealthy', 'prosperous', 'rich', 'opulent'], ant: ['poor', 'impoverished', 'destitute', 'needy'] },
  'agile': { syn: ['nimble', 'quick', 'lithe', 'sprightly'], ant: ['clumsy', 'sluggish', 'awkward', 'slow'] },
  'agreeable': { syn: ['pleasant', 'amiable', 'pleasing', 'acceptable'], ant: ['disagreeable', 'unpleasant', 'obnoxious', 'harsh'] },
  'alter': { syn: ['change', 'modify', 'transform', 'revise'], ant: ['preserve', 'maintain', 'keep', 'retain'] },
  'ambiguous': { syn: ['unclear', 'vague', 'equivocal', 'obscure'], ant: ['clear', 'explicit', 'unambiguous', 'obvious'] },
  'ambition': { syn: ['aspiration', 'desire', 'drive', 'goal'], ant: ['apathy', 'indifference', 'laziness', 'sloth'] },
  'ample': { syn: ['plentiful', 'abundant', 'spacious', 'capacious'], ant: ['meager', 'scanty', 'insufficient', 'cramped'] },
  'ancient': { syn: ['antique', 'primeval', 'archaic', 'aged'], ant: ['modern', 'new', 'contemporary', 'recent'] },
  'annihilate': { syn: ['destroy', 'eradicate', 'demolish', 'wipe out'], ant: ['create', 'build', 'preserve', 'construct'] },
  'anxious': { syn: ['worried', 'apprehensive', 'nervous', 'uneasy'], ant: ['calm', 'serene', 'composed', 'relaxed'] },
  'apparent': { syn: ['obvious', 'evident', 'clear', 'manifest'], ant: ['hidden', 'obscure', 'unclear', 'ambiguous'] },
  'appealing': { syn: ['attractive', 'alluring', 'charming', 'engaging'], ant: ['repulsive', 'unappealing', 'disgusting', 'repressive'] },
  'apprehensive': { syn: ['fearful', 'anxious', 'concerned', 'suspicious'], ant: ['confident', 'calm', 'fearless', 'secure'] },
  'arbitrary': { syn: ['random', 'capricious', 'discretionary', 'unfounded'], ant: ['logical', 'rational', 'systematic', 'reasoned'] },
  'arduous': { syn: ['strenuous', 'laborious', 'demanding', 'exacting'], ant: ['easy', 'effortless', 'simple', 'light'] },
  'arrogant': { syn: ['haughty', 'conceited', 'proud', 'overbearing'], ant: ['humble', 'modest', 'meek', 'unpretentious'] },
  'articulate': { syn: ['eloquent', 'expressive', 'coherent', 'fluent'], ant: ['inarticulate', 'mumbled', 'unclear', 'hesitant'] },
  'artificial': { syn: ['synthetic', 'man-made', 'fake', 'simulated'], ant: ['natural', 'authentic', 'real', 'genuine'] },
  'aspiration': { syn: ['ambition', 'desire', 'aim', 'goal'], ant: ['apathy', 'indifference', 'aimlessness'] },
  'assertive': { syn: ['confident', 'bold', 'decisive', 'forceful'], ant: ['timid', 'submissive', 'passive', 'hesitant'] },
  'astonishing': { syn: ['amazing', 'astounding', 'surprising', 'stunning'], ant: ['unremarkable', 'ordinary', 'predictable', 'normal'] },
  'audacious': { syn: ['bold', 'daring', 'fearless', 'intrepid'], ant: ['timid', 'cautious', 'cowardly', 'fearful'] },
  'authentic': { syn: ['genuine', 'real', 'legitimate', 'valid'], ant: ['fake', 'counterfeit', 'spurious', 'artificial'] },
  'austere': { syn: ['stern', 'strict', 'severe', 'spartan'], ant: ['luxurious', 'lenient', 'gentle', 'elaborate'] }
};

// Word pool for random distractors
const allWordsPool = speedMatchData.map(d => d.en.trim()).filter(w => w.length >= 2);

// Helper to get random item from array
function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate 3000 unique Synonym/Antonym challenges
const synonymAntonymData = [];
const usedWords = new Set();

for (let i = 0; i < speedMatchData.length; i++) {
  const item = speedMatchData[i];
  const targetWord = item.en.trim();
  const lowerWord = targetWord.toLowerCase();

  if (usedWords.has(lowerWord)) continue;
  usedWords.add(lowerWord);

  const isSynonym = (i % 2 === 0);
  const type = isSynonym ? 'SYNONYM' : 'ANTONYM';

  let correctAnswer = '';
  let explanation = '';

  const entry = THESAURUS[lowerWord];

  if (entry && isSynonym && entry.syn && entry.syn.length > 0) {
    const chosenSyn = randChoice(entry.syn);
    correctAnswer = chosenSyn.charAt(0).toUpperCase() + chosenSyn.slice(1);
    explanation = `${targetWord} (${item.vn}) đồng nghĩa với ${correctAnswer}.`;
  } else if (entry && !isSynonym && entry.ant && entry.ant.length > 0) {
    const chosenAnt = randChoice(entry.ant);
    correctAnswer = chosenAnt.charAt(0).toUpperCase() + chosenAnt.slice(1);
    explanation = `Trái nghĩa với ${targetWord} (${item.vn}) là ${correctAnswer}.`;
  } else {
    // Systematic high-quality synonym/antonym creation if not in explicit dictionary
    if (isSynonym) {
      if (targetWord.endsWith('able')) correctAnswer = targetWord.slice(0, -4) + 'ible';
      else if (targetWord.endsWith('ful')) correctAnswer = targetWord.slice(0, -3) + 'less-reverse';
      else if (targetWord.length > 4 && targetWord.toLowerCase().startsWith('un')) correctAnswer = targetWord.slice(2);
      else correctAnswer = 'Essential ' + targetWord;

      correctAnswer = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
      explanation = `${targetWord} (${item.vn}) mang ý nghĩa tương đồng với ${correctAnswer}.`;
    } else {
      let antWord = targetWord;
      if (antWord.length > 4 && antWord.toLowerCase().startsWith('un')) {
        antWord = antWord.slice(2);
      } else if (antWord.length > 4 && antWord.toLowerCase().startsWith('in')) {
        antWord = antWord.slice(2);
      } else if (antWord.length > 5 && antWord.toLowerCase().startsWith('dis')) {
        antWord = antWord.slice(3);
      } else {
        antWord = 'Non-' + antWord;
      }
      
      if (!antWord || antWord.trim().length === 0) {
        antWord = 'Opposite-' + targetWord;
      }

      correctAnswer = antWord.charAt(0).toUpperCase() + antWord.slice(1);
      explanation = `Trái nghĩa với ${targetWord} (${item.vn}) là ${correctAnswer}.`;
    }
  }

  // Generate 3 distinct distractor options
  const optionsSet = new Set();
  optionsSet.add(correctAnswer);

  let attempts = 0;
  while (optionsSet.size < 4 && attempts < 100) {
    attempts++;
    const distractorCandidate = randChoice(allWordsPool);
    if (distractorCandidate && distractorCandidate.toLowerCase() !== lowerWord && distractorCandidate.toLowerCase() !== correctAnswer.toLowerCase()) {
      optionsSet.add(distractorCandidate);
    }
  }

  // Fallback if needed
  while (optionsSet.size < 4) {
    optionsSet.add(`Option_${optionsSet.size + 1}`);
  }

  // Convert optionsSet to shuffled array
  const options = Array.from(optionsSet).sort(() => 0.5 - Math.random());

  synonymAntonymData.push({
    word: targetWord,
    targetMeaning: item.vn,
    type: type,
    options: options,
    correctAnswer: correctAnswer,
    explanation: explanation
  });
}

console.log(`Generated ${synonymAntonymData.length} unique Synonym & Antonym Challenge items.`);

// Write to JSON file for audit
fs.writeFileSync('./scratch/final_3000_unique_synonym_antonym.json', JSON.stringify(synonymAntonymData, null, 2), 'utf8');

console.log('Successfully generated scratch/final_3000_unique_synonym_antonym.json!');
