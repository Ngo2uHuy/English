// ==========================================================================
// Sound Service — Synthesized Arcade Sound Effects & Robust TTS Audio Engine
// ==========================================================================

let audioCtx = null;
let soundMuted = false;
let keepAliveInterval = null;
let currentAudioFallback = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Pre-load voices on browser load
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

export const SoundService = {
  isMuted() {
    return soundMuted;
  },

  toggleMute() {
    soundMuted = !soundMuted;
    return soundMuted;
  },

  // ------------------------------------------------------------------------
  // Sound Effects (Web Audio API)
  // ------------------------------------------------------------------------
  playCorrect() {
    if (soundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.08); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.16); // G5

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // Ignore audio autoplay restrictions
    }
  },

  playError() {
    if (soundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc.frequency.setValueAtTime(150, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // Ignore
    }
  },

  playCombo() {
    if (soundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.06 + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.2);
      });
    } catch {
      // Ignore
    }
  },

  playTick() {
    if (soundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore
    }
  },

  playVictory() {
    if (soundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const melody = [
        { f: 523.25, d: 0.15 },
        { f: 659.25, d: 0.15 },
        { f: 783.99, d: 0.15 },
        { f: 1046.50, d: 0.4 },
      ];

      let time = ctx.currentTime;
      melody.forEach(note => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, time);

        gain.gain.setValueAtTime(0.2, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + note.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + note.d);

        time += note.d * 0.8;
      });
    } catch {
      // Ignore
    }
  },

  // ------------------------------------------------------------------------
  // Text-To-Speech (TTS) Engine with Voice Selection & Online Audio Fallback
  // ------------------------------------------------------------------------
  speakText(text, options = {}) {
    if (!text) return;

    const {
      rate = 1.0,
      pitch = 1.0,
      onStart = () => {},
      onEnd = () => {},
      onError = () => {},
    } = options;

    this.stopSpeech();

    if ('speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.lang = 'en-US';

        const voices = window.speechSynthesis.getVoices() || [];
        const englishVoice = voices.find(
          v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('US'))
        ) || voices.find(v => v.lang.startsWith('en'));

        if (englishVoice) {
          utterance.voice = englishVoice;
        }

        utterance.onstart = () => {
          onStart();
          // Chrome SpeechSynthesis keep-alive timer for long passages
          if (keepAliveInterval) clearInterval(keepAliveInterval);
          keepAliveInterval = setInterval(() => {
            if (window.speechSynthesis.speaking) {
              window.speechSynthesis.pause();
              window.speechSynthesis.resume();
            } else {
              clearInterval(keepAliveInterval);
            }
          }, 8000);
        };

        utterance.onend = () => {
          if (keepAliveInterval) clearInterval(keepAliveInterval);
          onEnd();
        };

        utterance.onerror = (err) => {
          console.warn('[SoundService] WebSpeech error, launching fallback:', err);
          if (keepAliveInterval) clearInterval(keepAliveInterval);
          this.playAudioFallback(text, { rate, onStart, onEnd, onError });
        };

        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('[SoundService] WebSpeech exception:', e);
        this.playAudioFallback(text, { rate, onStart, onEnd, onError });
      }
    } else {
      this.playAudioFallback(text, { rate, onStart, onEnd, onError });
    }
  },

  playAudioFallback(text, { rate = 1.0, onStart = () => {}, onEnd = () => {}, onError = () => {} }) {
    try {
      const cleanText = text.slice(0, 200);
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=en&client=tw-ob`;
      currentAudioFallback = new Audio(url);
      currentAudioFallback.playbackRate = rate;

      currentAudioFallback.onplay = () => onStart();
      currentAudioFallback.onended = () => onEnd();
      currentAudioFallback.onerror = (e) => {
        console.warn('[SoundService] Audio fallback error:', e);
        onError(e);
      };

      currentAudioFallback.play().catch(err => {
        console.warn('[SoundService] Audio play blocked:', err);
        onError(err);
      });
    } catch (err) {
      onError(err);
    }
  },

  stopSpeech() {
    if (keepAliveInterval) {
      clearInterval(keepAliveInterval);
      keepAliveInterval = null;
    }
    if (currentAudioFallback) {
      currentAudioFallback.pause();
      currentAudioFallback = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  },
};
