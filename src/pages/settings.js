// ==========================================================================
// Settings Page — Modern Provider & Key Management
// ==========================================================================

import { StorageService, PROVIDERS } from '../services/storage-service.js';
import { showToast } from '../components/toast.js';

export function renderSettings() {
  const container = document.getElementById('page-container');
  if (!container) return;

  const currentProvider = StorageService.getProvider();
  const activeProviderObj = PROVIDERS.find(p => p.id === currentProvider) || PROVIDERS[0];
  const apiKey = StorageService.getApiKey(currentProvider);
  const currentModel = StorageService.getModel(currentProvider);
  const theme = StorageService.getTheme();

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 24px;">
      <div class="section-title-group">
        <span class="section-label">Preferences</span>
        <h1>Settings & AI Configuration</h1>
      </div>
      <p class="section-subtitle">Manage AI providers, API keys, and workspace themes</p>
    </div>

    <!-- AI Provider & API Key -->
    <div class="card" style="margin-bottom: 24px;">
      <h3 style="font-size:1.15rem;margin-bottom:6px;">AI Provider & Free API Key</h3>
      <p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:20px;">
        Choose an AI provider. All options below offer 100% Free API Keys without requiring a credit card.
      </p>

      <!-- Provider Selector -->
      <div style="margin-bottom:20px;">
        <label style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;display:block;">AI Provider</label>
        <select class="input-field" id="provider-select">
          ${PROVIDERS.map(p => `
            <option value="${p.id}" ${currentProvider === p.id ? 'selected' : ''}>
              ${p.name} — (${p.badge})
            </option>
          `).join('')}
        </select>
      </div>

      <!-- API Key Input -->
      <div style="margin-bottom:20px;">
        <label style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;display:block;">API Key for ${activeProviderObj.name}</label>
        <div style="display:flex;gap:10px;">
          <input type="password" class="input-field" id="api-key-input" 
                 value="${apiKey}" placeholder="Paste API Key for ${activeProviderObj.name}..." style="flex:1;" />
          <button class="btn btn-secondary" id="toggle-key-visibility" style="padding:0 16px;">Show</button>
          <button class="btn btn-primary" id="save-api-key">Save Key</button>
        </div>
        <div style="font-size:0.84rem;color:var(--text-secondary);margin-top:10px;padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-md);display:flex;align-items:center;gap:8px;">
          <span>Get Free API Key:</span>
          <a href="${activeProviderObj.freeKeyUrl}" target="_blank" rel="noopener" style="color:var(--color-primary);font-weight:700;text-decoration:underline;">
            ${activeProviderObj.name} Portal ↗
          </a>
        </div>
      </div>

      <!-- Model Selection -->
      <div>
        <label style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;display:block;">Model (${activeProviderObj.name})</label>
        <select class="input-field" id="model-select">
          ${activeProviderObj.models.map(m => `
            <option value="${m.id}" ${currentModel === m.id ? 'selected' : ''}>${m.name}</option>
          `).join('')}
        </select>
      </div>
    </div>

    <!-- Theme & Storage Reset -->
    <div class="card">
      <h3 style="font-size:1.15rem;margin-bottom:14px;">Appearance & Data</h3>
      <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid var(--border-subtle);margin-bottom:16px;">
        <div>
          <div style="font-weight:700;">Workspace Theme</div>
          <div style="font-size:0.84rem;color:var(--text-secondary);">Toggle between Obsidian Dark & Porcelain Light</div>
        </div>
        <button class="btn btn-secondary btn-sm" id="toggle-theme-btn">${theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</button>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-weight:700;color:var(--color-rose);">Reset Storage</div>
          <div style="font-size:0.84rem;color:var(--text-secondary);">Clear exercise history, streak & cached session data</div>
        </div>
        <button class="btn btn-secondary btn-sm" id="btn-reset-data" style="color:var(--color-rose);">Reset Progress Data</button>
      </div>
    </div>
  `;

  // Bind Events
  document.getElementById('provider-select')?.addEventListener('change', (e) => {
    StorageService.setProvider(e.target.value);
    renderSettings();
    showToast('AI Provider updated');
  });

  document.getElementById('toggle-key-visibility')?.addEventListener('click', (e) => {
    const input = document.getElementById('api-key-input');
    if (input) {
      const isPass = input.type === 'password';
      input.type = isPass ? 'text' : 'password';
      e.target.textContent = isPass ? 'Hide' : 'Show';
    }
  });

  document.getElementById('save-api-key')?.addEventListener('click', () => {
    const key = document.getElementById('api-key-input')?.value.trim() || '';
    StorageService.setApiKey(key, currentProvider);
    showToast('API Key saved successfully');
  });

  document.getElementById('model-select')?.addEventListener('change', (e) => {
    StorageService.setModel(e.target.value, currentProvider);
    showToast('AI Model updated');
  });

  document.getElementById('toggle-theme-btn')?.addEventListener('click', () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    StorageService.setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    renderSettings();
  });

  document.getElementById('btn-reset-data')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all stored progress and statistics?')) {
      localStorage.clear();
      renderSettings();
      showToast('All progress data cleared');
    }
  });
}
