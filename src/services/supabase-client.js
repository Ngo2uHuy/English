// ============================================================================
// Supabase Client Service — Initialization & Configuration Management
// ============================================================================

import { createClient } from '@supabase/supabase-js';

const STORAGE_KEYS = {
  URL: 'grammarai_supabase_url',
  ANON_KEY: 'grammarai_supabase_key',
};

// Default from Vite env vars if available
const ENV_URL = String(import.meta.env?.VITE_SUPABASE_URL || '').trim();
const ENV_KEY = String(import.meta.env?.VITE_SUPABASE_ANON_KEY || '').trim();

let supabaseInstance = null;

function sanitizeUrl(url) {
  if (!url) return '';
  let clean = String(url).trim();
  // Remove /rest/v1 or /rest/v1/ at the end if user copied REST endpoint URL
  clean = clean.replace(/\/rest\/v1\/?$/, '');
  // Remove trailing slashes
  clean = clean.replace(/\/+$/, '');
  return clean;
}

export function getSupabaseConfig() {
  const customUrl = String(localStorage.getItem(STORAGE_KEYS.URL) || '').trim();
  const customKey = String(localStorage.getItem(STORAGE_KEYS.ANON_KEY) || '').trim();

  return {
    url: sanitizeUrl(customUrl || ENV_URL),
    key: customKey || ENV_KEY,
    isCustom: !!customUrl,
  };
}

export function setSupabaseConfig(url, key) {
  if (url) {
    localStorage.setItem(STORAGE_KEYS.URL, sanitizeUrl(url));
  } else {
    localStorage.removeItem(STORAGE_KEYS.URL);
  }

  if (key) {
    localStorage.setItem(STORAGE_KEYS.ANON_KEY, key.trim());
  } else {
    localStorage.removeItem(STORAGE_KEYS.ANON_KEY);
  }

  // Re-initialize client
  supabaseInstance = null;
  return getSupabaseClient();
}

export function isSupabaseConfigured() {
  const { url, key } = getSupabaseConfig();
  return Boolean(url && key && url.startsWith('http'));
}

export function getSupabaseClient() {
  if (supabaseInstance) return supabaseInstance;

  const { url, key } = getSupabaseConfig();
  if (!url || !key) return null;

  try {
    supabaseInstance = createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
    return supabaseInstance;
  } catch (err) {
    console.error('[Supabase] Failed to initialize client:', err);
    return null;
  }
}

export async function testSupabaseConnection() {
  const client = getSupabaseClient();
  if (!client) {
    return { success: false, message: 'Supabase URL or Anon Key is missing.' };
  }

  try {
    const { data, error } = await client
      .from('user_app_data')
      .select('data_key')
      .limit(1);

    if (error) {
      if (error.code === '42P01') {
        return {
          success: false,
          message: 'Connected to Supabase, but "user_app_data" table does not exist. Please run supabase_schema.sql.',
        };
      }
      return { success: false, message: `Supabase Error: ${error.message}` };
    }

    return { success: true, message: 'Successfully connected to Supabase database!' };
  } catch (err) {
    return { success: false, message: `Connection exception: ${err.message}` };
  }
}
