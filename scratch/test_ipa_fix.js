import { IpaService } from '../src/services/ipa-service.js';

const testWords = ['Ballroom', 'Improved', 'Archery', 'Unoccupied', 'Abrupt', 'Audio', 'Unable', 'Acceptable'];

console.log("Current IPA outputs:");
testWords.forEach(w => {
  console.log(`${w}: ${IpaService.getIPA(w)}`);
});
