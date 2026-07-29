import { JSDOM } from 'jsdom';

// Setup minimal DOM environment for testing
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="page-container"></div></body></html>', {
  url: 'http://localhost/#/games'
});

global.window = dom.window;
global.document = dom.window.document;
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

try {
  const { renderGamesPage } = await import('../src/pages/games.js');

  console.log("Testing renderGamesPage(null) - Arcade Hub...");
  renderGamesPage(null);
  console.log("Arcade Hub OK, container HTML length:", document.getElementById('page-container').innerHTML.length);

  const modes = ['speed-match', 'sentence-dash', 'error-hunter', 'phoneme-blitz', 'synonym-antonym', 'irregular-verbs'];

  for (const mode of modes) {
    console.log(`Testing mode: ${mode}...`);
    renderGamesPage(mode);
    console.log(`Mode ${mode} OK! Container HTML length:`, document.getElementById('page-container').innerHTML.length);
  }

  console.log("ALL 6 GAME MODES INITIALIZE WITHOUT RUNTIME ERRORS!");
} catch (err) {
  console.error("RUNTIME ERROR FOUND IN GAMES PAGE:", err);
}
