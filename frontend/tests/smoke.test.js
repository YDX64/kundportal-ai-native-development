// ÄGARE: gemensamt skelett (Del 3 och Del 4 lägger egna testfiler bredvid).
// Laddar index.html i jsdom med en låtsas-fetch, så ingen backend behövs.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

async function loadPage(fetchStub = async () => ({ ok: true, status: 200, json: async () => [] })) {
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    url: 'http://localhost/',
    beforeParse(window) { window.fetch = fetchStub; },
  });
  await new Promise((resolve) => dom.window.addEventListener('load', resolve));
  return dom.window;
}

describe('skelett', () => {
  it('visar ärendelistan först och döljer övriga vyer', async () => {
    const { document } = await loadPage();
    expect(document.getElementById('view-list').hidden).toBe(false);
    expect(document.getElementById('view-new').hidden).toBe(true);
    expect(document.getElementById('view-detail').hidden).toBe(true);
  });

  it('byter vy när man klickar i menyn', async () => {
    const { document } = await loadPage();
    document.querySelector('[data-nav="new"]').click();
    expect(document.getElementById('view-new').hidden).toBe(false);
    expect(document.getElementById('view-list').hidden).toBe(true);
  });

  it('showFieldErrors skriver felmeddelandet vid rätt fält', async () => {
    const window = await loadPage();
    const form = window.document.createElement('form');
    form.innerHTML = '<input name="rubrik"><span data-error-for="rubrik"></span>';
    window.Portal.showFieldErrors(form, { rubrik: 'Rubrik måste fyllas i' });
    expect(form.querySelector('[data-error-for="rubrik"]').textContent).toBe('Rubrik måste fyllas i');
    expect(form.querySelector('[name="rubrik"]').getAttribute('aria-invalid')).toBe('true');
  });

  it('api() returnerar ett begripligt fel när servern inte nås', async () => {
    const window = await loadPage(async () => { throw new Error('nätverk'); });
    const res = await window.Portal.api('GET', '/api/arenden');
    expect(res.ok).toBe(false);
    expect(res.data.fel).toContain('Kunde inte nå servern');
  });
});
