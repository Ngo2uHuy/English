// ============================================================================
// Dictionary & Translation Service — Instant English-Vietnamese Dictionary
// ============================================================================

import { IpaService } from './ipa-service.js';
import { StorageService } from './storage-service.js';
import { SoundService } from './sound-service.js';
import { TranslationService } from './translation-service.js';
import { showToast } from '../components/toast.js';

const dictionaryCache = new Map();

export const DictionaryService = {
  /**
   * Look up word definition, IPA, audio, part of speech, and Vietnamese translation
   */
  async lookupWord(rawWord) {
    if (!rawWord) return null;
    const cleanWord = String(rawWord).toLowerCase().replace(/[^a-z0-9'-]/gi, '').trim();
    if (!cleanWord) return null;

    if (dictionaryCache.has(cleanWord)) {
      return dictionaryCache.get(cleanWord);
    }

    const localIpa = IpaService.getIPA(cleanWord);

    const result = {
      word: cleanWord,
      ipa: localIpa,
      vietnamese: '',
      partOfSpeech: '',
      definition: '',
      example: '',
      audioUrl: '',
    };

    try {
      // Fetch English Dictionary API & Translation via TranslationService in parallel
      const [dictRes, translatedVi] = await Promise.all([
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`).catch(() => null),
        TranslationService.translateText(cleanWord, 'en', 'vi')
      ]);

      if (translatedVi && !translatedVi.toLowerCase().includes('mymemory')) {
        result.vietnamese = translatedVi;
      }

      // 2. Process English Dictionary Data
      if (dictRes.status === 'fulfilled' && dictRes.value.ok) {
        const dictData = await dictRes.value.json();
        if (Array.isArray(dictData) && dictData.length > 0) {
          const entry = dictData[0];

          if (entry.phonetic) {
            result.ipa = `/${IpaService.formatToOxfordIPA(entry.phonetic)}/`;
          } else if (Array.isArray(entry.phonetics)) {
            const ph = entry.phonetics.find(p => p.text);
            if (ph) result.ipa = `/${IpaService.formatToOxfordIPA(ph.text)}/`;
          }

          if (Array.isArray(entry.phonetics)) {
            const audioObj = entry.phonetics.find(p => p.audio && p.audio.trim().length > 0);
            if (audioObj) result.audioUrl = audioObj.audio;
          }

          if (Array.isArray(entry.meanings) && entry.meanings.length > 0) {
            const m = entry.meanings[0];
            result.partOfSpeech = m.partOfSpeech || '';
            if (Array.isArray(m.definitions) && m.definitions.length > 0) {
              result.definition = m.definitions[0].definition || '';
              result.example = m.definitions[0].example || '';
            }
          }
        }
      }
    } catch (err) {
      console.warn('[DictionaryService] API lookup warning:', err);
    }

    // Fallback message if translation wasn't found
    if (!result.vietnamese) {
      result.vietnamese = result.definition ? result.definition : `Từ vựng: ${cleanWord}`;
    }

    dictionaryCache.set(cleanWord, result);
    return result;
  },

  /**
   * Speak word via audio element or SpeechSynthesis TTS
   */
  speakWord(word, audioUrl = null) {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(() => {
        this.speakTTS(word);
      });
    } else {
      this.speakTTS(word);
    }
  },

  speakTTS(text) {
    SoundService.speakText(text, { rate: 0.9 });
  },

  /**
   * Render word modal content dynamically with real translation & definition
   */
  async renderModalContent(containerEl, rawWord, contextSentence = '') {
    if (!containerEl) return;
    const cleanWord = String(rawWord).toLowerCase().replace(/[^a-z0-9'-]/gi, '').trim();

    // Loading state
    containerEl.innerHTML = `
      <div style="text-align:center;padding:24px 12px;">
        <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">
          🔍 Tra cứu từ vựng
        </div>
        <h2 style="font-size:1.8rem;margin-bottom:12px;color:var(--text-primary);">${cleanWord}</h2>
        <p style="color:var(--text-secondary);font-size:0.9rem;">Đang tìm nghĩa Tiếng Việt & phiên âm...</p>
      </div>
    `;

    const info = await this.lookupWord(cleanWord);
    if (!info) {
      containerEl.innerHTML = `
        <div style="text-align:center;padding:20px;">
          <p style="color:var(--color-rose);">Không thể tra cứu từ "${cleanWord}"</p>
        </div>
      `;
      return;
    }

    const posBadge = info.partOfSpeech ? `<span class="badge badge-cyan" style="text-transform:uppercase;">${info.partOfSpeech}</span>` : '';

    containerEl.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:0.75rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;">Tra cứu Từ vựng</span>
          ${posBadge}
        </div>
        <button id="btn-dict-speak" class="btn btn-secondary btn-sm" style="padding:4px 10px;border-radius:var(--radius-full);" title="Phát âm">
          🔊 Nghe
        </button>
      </div>

      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:16px;">
        <h2 style="font-size:1.9rem;font-weight:800;margin:0;color:var(--text-primary);">${info.word}</h2>
        <span style="font-size:1.05rem;color:var(--color-primary);font-family:monospace;font-weight:600;">${info.ipa}</span>
      </div>

      <!-- Vietnamese Translation Box -->
      <div style="padding:14px;background:var(--bg-secondary);border:1px solid var(--border-subtle);border-radius:var(--radius-md);margin-bottom:14px;">
        <div style="font-size:0.75rem;font-weight:700;color:var(--text-tertiary);margin-bottom:4px;text-transform:uppercase;">Nghĩa Tiếng Việt</div>
        <div style="font-size:1.15rem;font-weight:700;color:var(--color-success, #10b981);">${info.vietnamese}</div>
      </div>

      ${info.definition ? `
        <div style="margin-bottom:12px;font-size:0.88rem;line-height:1.5;">
          <strong style="color:var(--text-primary);">Định nghĩa Tiếng Anh:</strong>
          <p style="color:var(--text-secondary);margin-top:2px;">${info.definition}</p>
        </div>
      ` : ''}

      ${info.example ? `
        <div style="margin-bottom:16px;font-size:0.85rem;padding:10px 12px;background:rgba(255,255,255,0.03);border-left:3px solid var(--color-primary);border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
          <strong style="color:var(--text-primary);">Ví dụ:</strong>
          <p style="color:var(--text-secondary);margin-top:2px;font-style:italic;">"${info.example}"</p>
        </div>
      ` : ''}

      <button id="btn-dict-save" class="btn btn-primary" style="width:100%;margin-top:6px;">
        💾 Lưu vào Sổ Từ Vựng
      </button>
    `;

    // Bind Speak Button
    document.getElementById('btn-dict-speak')?.addEventListener('click', () => {
      this.speakWord(info.word, info.audioUrl);
    });

    // Automatically speak when opened
    this.speakWord(info.word, info.audioUrl);

    // Bind Save Button
    document.getElementById('btn-dict-save')?.addEventListener('click', () => {
      StorageService.saveWord({
        word: info.word,
        ipa: info.ipa,
        definition: info.vietnamese,
        enDefinition: info.definition,
        example: info.example || contextSentence,
      });
      showToast(`💾 Đã lưu từ "${info.word}" (${info.vietnamese}) vào sổ từ vựng!`);
      const modal = document.getElementById('word-modal');
      if (modal) modal.style.display = 'none';
    });
  }
};
