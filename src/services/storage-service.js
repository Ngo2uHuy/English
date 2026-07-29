import { getSupabaseClient, isSupabaseConfigured } from './supabase-client.js';

export const PROVIDERS = [
  {
    id: 'gemini',
    name: 'Google Gemini AI Studio',
    badge: '100% Free',
    freeKeyUrl: 'https://aistudio.google.com/app/apikey',
    defaultModel: 'gemini-2.5-flash',
    models: [
      { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash (Recommended - Fast & Free)' },
      { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro (Powerful)' },
      { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash' },
      { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' },
    ],
  },
  {
    id: 'groq',
    name: 'Groq Cloud AI',
    badge: 'Ultra Fast & Free',
    freeKeyUrl: 'https://console.groq.com/keys',
    defaultModel: 'llama-3.3-70b-versatile',
    models: [
      { id: 'llama-3.3-70b-versatile', name: 'LLaMA 3.3 70B Versatile (Recommended)' },
      { id: 'llama-3.1-8b-instant', name: 'LLaMA 3.1 8B Instant (Super Fast)' },
      { id: 'gemma2-9b-it', name: 'Gemma 2 9B IT' },
      { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B (32k Context)' },
    ],
  },
  {
    id: 'openrouter',
    name: 'OpenRouter AI (Free Models)',
    badge: 'Unlimited Free Tier',
    freeKeyUrl: 'https://openrouter.ai/keys',
    defaultModel: 'meta-llama/llama-3.3-70b-instruct:free',
    models: [
      { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'LLaMA 3.3 70B Instruct (Free)' },
      { id: 'deepseek/deepseek-r1:free', name: 'DeepSeek R1 (Free Reasoning)' },
      { id: 'google/gemini-2.0-flash-lite-preview:free', name: 'Gemini 2.0 Flash Lite (Free)' },
      { id: 'qwen/qwen-2.5-72b-instruct:free', name: 'Qwen 2.5 72B Instruct (Free)' },
    ],
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    badge: 'Free Dev Tier',
    freeKeyUrl: 'https://console.mistral.ai/api-keys/',
    defaultModel: 'mistral-small-latest',
    models: [
      { id: 'mistral-small-latest', name: 'Mistral Small (Fast & Smart)' },
      { id: 'pixtral-12b-2409', name: 'Pixtral 12B' },
    ],
  },
];

const KEYS = {
  PROVIDER: 'grammarai_provider',
  API_KEYS: 'grammarai_api_keys',
  API_KEY: 'grammarai_api_key',
  MODELS: 'grammarai_provider_models',
  MODEL: 'grammarai_model',
  THEME: 'grammarai_theme',
  PROGRESS: 'grammarai_progress',
  EXERCISE_HISTORY: 'grammarai_exercise_history',
  STREAK: 'grammarai_streak',
  FLASHCARD_PROGRESS: 'grammarai_flashcard_progress',
  GENERATED_QUESTIONS: 'grammarai_generated_questions',
  SAVED_VOCABULARY: 'grammarai_saved_vocabulary',
  SKILLS_HISTORY: 'grammarai_skills_history',
  WRITING_DRAFTS: 'grammarai_writing_drafts',
  ACTIVE_SESSION: 'grammarai_active_session',
  LISTENING_SESSION: 'grammarai_listening_session',
  SPEAKING_SESSION: 'grammarai_speaking_session',
  WRITING_SESSION: 'grammarai_writing_session',
  READING_SESSION: 'grammarai_reading_session',
  GAME_STATS: 'grammarai_game_stats',
};

async function saveToSupabase(key, value) {
  if (!isSupabaseConfigured()) return;
  const client = getSupabaseClient();
  if (!client) return;

  try {
    const { error } = await client
      .from('user_app_data')
      .upsert(
        { data_key: key, data_value: value, updated_at: new Date().toISOString() },
        { onConflict: 'data_key' }
      );
    if (error) {
      console.warn('[Supabase Sync Warning] Failed to save key:', key, error.message);
    }
  } catch (err) {
    console.error('[Supabase Sync Error]:', err);
  }
}

function get(key, fallback = null) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
}

function set(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    // Asynchronously sync with Supabase cloud storage
    saveToSupabase(key, value);
  } catch (e) {
    console.error('Storage error:', e);
  }
}

export const StorageService = {
  // Provider
  getProvider() {
    return get(KEYS.PROVIDER, 'gemini');
  },
  setProvider(provider) {
    set(KEYS.PROVIDER, provider);
  },

  // API Key per provider (with legacy & env fallbacks)
  getApiKey(targetProvider = null) {
    const provider = targetProvider || this.getProvider();
    const keys = get(KEYS.API_KEYS, {});
    if (keys[provider]) return keys[provider];
    if (provider === 'gemini' && get(KEYS.API_KEY, '')) {
      return get(KEYS.API_KEY, '');
    }

    // Fallback to Vite environment variables if available
    const envKeyMap = {
      gemini: import.meta.env?.VITE_GEMINI_API_KEY || import.meta.env?.VITE_API_KEY || '',
      groq: import.meta.env?.VITE_GROQ_API_KEY || '',
      openrouter: import.meta.env?.VITE_OPENROUTER_API_KEY || '',
      mistral: import.meta.env?.VITE_MISTRAL_API_KEY || '',
    };

    return envKeyMap[provider] || '';
  },
  setApiKey(key, targetProvider = null) {
    const provider = targetProvider || this.getProvider();
    const keys = get(KEYS.API_KEYS, {});
    keys[provider] = key;
    set(KEYS.API_KEYS, keys);
    if (provider === 'gemini') {
      set(KEYS.API_KEY, key);
    }
  },

  // Model per provider
  getModel(targetProvider = null) {
    const provider = targetProvider || this.getProvider();
    const models = get(KEYS.MODELS, {});
    if (models[provider]) return models[provider];

    const providerObj = PROVIDERS.find(p => p.id === provider);
    if (provider === 'gemini') {
      return get(KEYS.MODEL, providerObj?.defaultModel || 'gemini-2.5-flash');
    }
    return providerObj?.defaultModel || '';
  },
  setModel(model, targetProvider = null) {
    const provider = targetProvider || this.getProvider();
    const models = get(KEYS.MODELS, {});
    models[provider] = model;
    set(KEYS.MODELS, models);
    if (provider === 'gemini') {
      set(KEYS.MODEL, model);
    }
  },

  // Theme
  getTheme() {
    return get(KEYS.THEME, 'dark');
  },
  setTheme(theme) {
    set(KEYS.THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  // Progress: { [topicId]: { completed: bool, score: number, exercisesDone: number } }
  getProgress() {
    return get(KEYS.PROGRESS, {});
  },
  setProgress(progress) {
    set(KEYS.PROGRESS, progress);
  },
  // Spaced Repetition System (SRS) Intervals: 1d, 3d, 7d, 14d, 30d
  SRS_INTERVALS: [1, 3, 7, 14, 30].map(d => d * 86400000),

  updateTopicProgress(topicId, data) {
    const progress = this.getProgress();
    const existing = progress[topicId] || {};
    const now = Date.now();

    let srsStage = existing.srsStage || 0;
    if (data.completed) {
      srsStage = Math.min((existing.srsStage || 0) + 1, 5);
    }
    const intervalMs = this.SRS_INTERVALS[Math.max(0, srsStage - 1)] || (30 * 86400000);
    const nextReviewDue = data.completed ? (now + intervalMs) : existing.nextReviewDue;

    progress[topicId] = {
      ...existing,
      ...data,
      lastAccessed: now,
      srsStage,
      lastReviewedAt: data.completed ? now : (existing.lastReviewedAt || now),
      nextReviewDue
    };
    this.setProgress(progress);
  },
  getTopicProgress(topicId) {
    const progress = this.getProgress();
    return progress[topicId] || { completed: false, score: 0, exercisesDone: 0 };
  },
  getDueSRSReviewTopics(allTopics = []) {
    const progress = this.getProgress();
    const now = Date.now();
    return allTopics.filter(t => {
      const p = progress[t.id];
      if (!p || !p.completed) return false;
      return p.nextReviewDue && p.nextReviewDue <= now;
    });
  },

  // Exercise History: Array of { date, topicId, type, score, total, timestamp }
  getExerciseHistory() {
    return get(KEYS.EXERCISE_HISTORY, []);
  },
  addExerciseResult(result) {
    const history = this.getExerciseHistory();
    history.push({ ...result, timestamp: Date.now(), date: new Date().toISOString().split('T')[0] });
    // Keep only last 500 entries
    if (history.length > 500) history.splice(0, history.length - 500);
    set(KEYS.EXERCISE_HISTORY, history);
  },

  // Streak
  getStreak() {
    return get(KEYS.STREAK, { current: 0, best: 0, lastDate: null });
  },
  updateStreak() {
    const streak = this.getStreak();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (streak.lastDate === today) return streak;

    if (streak.lastDate === yesterday) {
      streak.current += 1;
    } else if (streak.lastDate !== today) {
      streak.current = 1;
    }

    streak.lastDate = today;
    if (streak.current > streak.best) streak.best = streak.current;
    set(KEYS.STREAK, streak);
    return streak;
  },

  // Flashcard progress
  getFlashcardProgress() {
    return get(KEYS.FLASHCARD_PROGRESS, {});
  },
  updateFlashcardProgress(topicId, data) {
    const progress = this.getFlashcardProgress();
    progress[topicId] = { ...(progress[topicId] || {}), ...data };
    set(KEYS.FLASHCARD_PROGRESS, progress);
  },

  // Active session for exercises
  getActiveSession() {
    return get(KEYS.ACTIVE_SESSION, null);
  },
  saveActiveSession(sessionData) {
    set(KEYS.ACTIVE_SESSION, sessionData);
  },
  clearActiveSession() {
    localStorage.removeItem(KEYS.ACTIVE_SESSION);
  },

  // Listening session
  getListeningSession() { return get(KEYS.LISTENING_SESSION, null); },
  saveListeningSession(data) { set(KEYS.LISTENING_SESSION, data); },
  clearListeningSession() { localStorage.removeItem(KEYS.LISTENING_SESSION); },

  // Speaking session
  getSpeakingSession() { return get(KEYS.SPEAKING_SESSION, null); },
  saveSpeakingSession(data) { set(KEYS.SPEAKING_SESSION, data); },
  clearSpeakingSession() { localStorage.removeItem(KEYS.SPEAKING_SESSION); },

  // Writing session
  getWritingSession() { return get(KEYS.WRITING_SESSION, null); },
  saveWritingSession(data) { set(KEYS.WRITING_SESSION, data); },
  clearWritingSession() { localStorage.removeItem(KEYS.WRITING_SESSION); },

  // Reading session
  getReadingSession() { return get(KEYS.READING_SESSION, null); },
  saveReadingSession(data) { set(KEYS.READING_SESSION, data); },
  clearReadingSession() { localStorage.removeItem(KEYS.READING_SESSION); },

  // Generated Questions history for deduplication
  getGeneratedQuestions(topicId, type) {
    const store = get(KEYS.GENERATED_QUESTIONS, {});
    const key = `${topicId}_${type}`;
    return store[key] || [];
  },
  saveGeneratedQuestions(topicId, type, questions) {
    if (!questions || questions.length === 0) return;
    const store = get(KEYS.GENERATED_QUESTIONS, {});
    const key = `${topicId}_${type}`;
    const existing = store[key] || [];

    const combined = [...existing];
    questions.forEach(q => {
      if (q && typeof q === 'string' && !combined.includes(q)) {
        combined.push(q);
      }
    });

    if (combined.length > 500) {
      combined.splice(0, combined.length - 500);
    }

    store[key] = combined;
    set(KEYS.GENERATED_QUESTIONS, store);
  },
  clearQuestionHistory(topicId, type = null) {
    const store = get(KEYS.GENERATED_QUESTIONS, {});
    if (type) {
      delete store[`${topicId}_${type}`];
    } else {
      Object.keys(store).forEach(k => {
        if (k.startsWith(`${topicId}_`)) delete store[k];
      });
    }
    set(KEYS.GENERATED_QUESTIONS, store);
  },

  // Saved Vocabulary (from Click-to-Word in Reading & Lessons)
  getSavedVocabulary() {
    return get(KEYS.SAVED_VOCABULARY, []);
  },
  getVocabList() {
    return this.getSavedVocabulary();
  },
  saveWord(wordObj) {
    const vocab = this.getSavedVocabulary();
    const index = vocab.findIndex(v => v.word.toLowerCase() === wordObj.word.toLowerCase());
    if (index >= 0) {
      vocab[index] = { ...vocab[index], ...wordObj, updatedAt: Date.now() };
    } else {
      vocab.unshift({ ...wordObj, id: Date.now().toString(), createdAt: Date.now() });
    }
    set(KEYS.SAVED_VOCABULARY, vocab);
    return vocab;
  },
  removeWord(word) {
    const vocab = this.getSavedVocabulary().filter(v => v.word.toLowerCase() !== word.toLowerCase());
    set(KEYS.SAVED_VOCABULARY, vocab);
    return vocab;
  },

  // Skills History: Array of { skill: 'listening'|'speaking'|'reading'|'writing', mode, title, score, total, details, date, timestamp }
  getSkillsHistory(skillFilter = null) {
    const history = get(KEYS.SKILLS_HISTORY, []);
    if (!skillFilter) return history;
    return history.filter(h => h.skill === skillFilter);
  },
  addSkillResult(result) {
    const history = get(KEYS.SKILLS_HISTORY, []);
    history.unshift({
      ...result,
      id: Date.now().toString(),
      timestamp: Date.now(),
      date: new Date().toISOString().split('T')[0],
    });
    if (history.length > 300) history.splice(300);
    set(KEYS.SKILLS_HISTORY, history);
    this.updateStreak();
  },
  recordSkillScore(skill, score) {
    this.addSkillResult({
      skill,
      mode: 'practice',
      title: 'Practice Session',
      score,
      total: 100
    });
  },

  // Writing Drafts
  getWritingDraft(promptId) {
    const drafts = get(KEYS.WRITING_DRAFTS, {});
    return drafts[promptId] || '';
  },
  saveWritingDraft(promptId, content) {
    const drafts = get(KEYS.WRITING_DRAFTS, {});
    drafts[promptId] = content;
    set(KEYS.WRITING_DRAFTS, drafts);
  },

  // Skill Summary Stats
  getSkillStats() {
    const history = get(KEYS.SKILLS_HISTORY, []);
    const skills = ['listening', 'speaking', 'reading', 'writing'];
    const summary = {};

    skills.forEach(s => {
      const items = history.filter(h => h.skill === s);
      const count = items.length;
      const avgScore = count > 0
        ? Math.round(items.reduce((acc, cur) => acc + (cur.score / (cur.total || 100)) * 100, 0) / count)
        : 0;
      summary[s] = { count, avgScore, items };
    });

    return summary;
  },

  // Game Stats: { highScores: { [mode]: number }, totalGames: number, totalXP: number, history: [] }
  getGameStats() {
    return get(KEYS.GAME_STATS, {
      highScores: { 'speed-match': 0, 'sentence-dash': 0, 'error-hunter': 0, 'phoneme-blitz': 0 },
      totalGames: 0,
      totalXP: 0,
      history: [],
    });
  },
  addGameResult(mode, score, xpGained, bestCombo = 0) {
    const stats = this.getGameStats();
    stats.totalGames += 1;
    stats.totalXP += (xpGained || 0);

    if (!stats.highScores[mode] || score > stats.highScores[mode]) {
      stats.highScores[mode] = score;
    }

    stats.history.unshift({
      mode,
      score,
      xpGained,
      bestCombo,
      timestamp: Date.now(),
      date: new Date().toISOString().split('T')[0],
    });

    if (stats.history.length > 200) stats.history.splice(200);

    set(KEYS.GAME_STATS, stats);
    this.updateStreak();
    return stats;
  },

  // Stats
  getStats() {
    const progress = this.getProgress();
    const history = this.getExerciseHistory();
    const streak = this.getStreak();
    const gameStats = this.getGameStats();

    const topicsStarted = Object.keys(progress).length;
    const topicsCompleted = Object.values(progress).filter(p => p.completed).length;
    const totalExercises = history.length;
    const validHistory = history.filter(h => h && typeof h.score === 'number' && typeof h.total === 'number' && h.total > 0);
    const avgScore = validHistory.length > 0
      ? Math.round(validHistory.reduce((sum, h) => sum + (h.score / h.total) * 100, 0) / validHistory.length)
      : 0;

    return {
      topicsStarted,
      topicsCompleted,
      totalExercises,
      avgScore,
      currentStreak: streak.current,
      bestStreak: streak.best,
      arcadeXP: gameStats.totalXP,
      gamesPlayed: gameStats.totalGames,
      gameHighScores: gameStats.highScores,
      history,
    };
  },

  // Reset all
  resetAll() {
    Object.values(KEYS).forEach(key => localStorage.removeItem(key));
  },

  // Export
  exportData() {
    const data = {};
    Object.entries(KEYS).forEach(([name, key]) => {
      data[name] = get(key);
    });
    return JSON.stringify(data, null, 2);
  },

  // Import
  importData(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      Object.entries(KEYS).forEach(([name, key]) => {
        if (data[name] !== undefined) set(key, data[name]);
      });
      return true;
    } catch {
      return false;
    }
  },

  // Supabase Cloud Synchronization
  async syncFromSupabase() {
    if (!isSupabaseConfigured()) return false;
    const client = getSupabaseClient();
    if (!client) return false;

    try {
      const { data, error } = await client
        .from('user_app_data')
        .select('data_key, data_value');

      if (error || !data) {
        console.warn('[Supabase Sync Error]:', error?.message);
        return false;
      }

      data.forEach(item => {
        if (item.data_key && item.data_value !== undefined) {
          localStorage.setItem(item.data_key, JSON.stringify(item.data_value));
        }
      });

      // Apply theme if restored
      const restoredTheme = get(KEYS.THEME);
      if (restoredTheme) {
        document.documentElement.setAttribute('data-theme', restoredTheme);
      }

      return true;
    } catch (err) {
      console.error('[Supabase Pull Exception]:', err);
      return false;
    }
  },

  async syncAllToSupabase() {
    if (!isSupabaseConfigured()) return { success: false, message: 'Supabase is not configured' };
    const client = getSupabaseClient();
    if (!client) return { success: false, message: 'Supabase client error' };

    try {
      const itemsToPush = Object.values(KEYS).map(key => {
        const value = get(key);
        if (value === null) return null;
        return {
          data_key: key,
          data_value: value,
          updated_at: new Date().toISOString(),
        };
      }).filter(Boolean);

      if (itemsToPush.length === 0) {
        return { success: true, count: 0, message: 'No local data to push.' };
      }

      const { error } = await client
        .from('user_app_data')
        .upsert(itemsToPush, { onConflict: 'data_key' });

      if (error) {
        return { success: false, message: error.message };
      }

      return { success: true, count: itemsToPush.length, message: `Uploaded ${itemsToPush.length} data items to Supabase!` };
    } catch (err) {
      return { success: false, message: err.message };
    }
  },

  async initSupabaseSync() {
    if (!isSupabaseConfigured()) return;
    try {
      await this.syncFromSupabase();
    } catch (e) {
      console.error('[Supabase Init Sync Failed]:', e);
    }
  },
};

