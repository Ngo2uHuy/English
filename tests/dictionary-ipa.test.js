import { describe, it, expect } from 'vitest';
import { IpaService } from '../src/services/ipa-service.js';
import { DictionaryService } from '../src/services/dictionary-service.js';

describe('IPA Service & Dictionary Service Suite', () => {
  it('should lookup IPA pronunciation offline', () => {
    const ipa = IpaService.getIPA('hello');
    expect(ipa).toBeDefined();
    expect(ipa.length).toBeGreaterThan(0);
  });

  it('should lookup word using DictionaryService', async () => {
    const result = await DictionaryService.lookupWord('perseverance');
    expect(result).toBeDefined();
    expect(result.word).toBe('perseverance');
    expect(result.ipa).toBeDefined();
  }, 15000);
});

