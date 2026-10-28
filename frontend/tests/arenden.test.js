// ÄGARE: Del 4 (Frontend – lista, detalj, status och redigering)   AK10–AK16, gränssnittssidan
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const FALL_A = {
  arendenummer: '2026-1',
  rubrik: 'Kan inte logga in',
  beskrivning: 'Kunden får felmeddelande vid inloggning.',
  kategori: 'Digital tjänst och inloggning',
  prioritet: 3,
  status: 'Nytt',
  skapad: '2026-11-02T09:00:00.000Z',
  deadline: '2026-11-30',
};

const FALL_B = {
  arendenummer: '2026-2',
  rubrik: 'Saknar aktivitetsrapport',
  beskrivning: 'Kunden undrar hur rapporten skickas in.',
  kategori: 'Aktivitetsrapport',
  prioritet: 2,
  status: 'Pågående',
  skapad: '2026-11-03T10:00:00.000Z',
  deadline: '2026-12-01',
};

function jsonResponse(status, body) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  };
}

async function loadPage(fetchStub) {
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    url: 'http://localhost/',
    beforeParse(window) { window.fetch = fetchStub; },
  });
  await new Promise((resolve) => dom.window.addEventListener('load', resolve));
  // onShowListView är async (api/fetch) – vänta tills listan hunnit ritas.
  await new Promise((resolve) => setTimeout(resolve, 0));
  await new Promise((resolve) => setTimeout(resolve, 0));
  return dom.window;
}

function listText(document) {
  return document.getElementById('view-list').textContent;
}

describe('Ärendelistan och detaljvyn', () => {
  it('AK10: alla ärenden från servern visas i listan', async () => {
    const { document } = await loadPage(async (url) => {
      if (String(url).includes('/api/arenden')) return jsonResponse(200, [FALL_A, FALL_B]);
      return jsonResponse(404, { fel: 'Sökvägen finns inte.' });
    });

    const text = listText(document);
    expect(text).toContain(FALL_A.arendenummer);
    expect(text).toContain(FALL_B.arendenummer);
    expect(text).toContain(FALL_A.rubrik);
    expect(text).toContain(FALL_B.rubrik);
    expect(text).toContain(String(FALL_A.prioritet));
    expect(text).toContain(FALL_A.status);
    expect(text).toContain(FALL_A.deadline);
    expect(text).toContain('Ärendenummer');
    expect(text).toContain('Rubrik');
    expect(text).toContain('Prioritet');
    expect(text).toContain('Status');
    expect(text).toContain('Deadline');
  });

  it('AK10: tom lista visar ett begripligt meddelande', async () => {
    const { document } = await loadPage(async () => jsonResponse(200, []));
    expect(listText(document)).toContain('Inga ärenden ännu.');
  });

  it('AK10: fel från servern visas och listan kraschar inte', async () => {
    const { document } = await loadPage(async () => {
      throw new Error('nätverk');
    });
    const msg = document.getElementById('global-message');
    expect(msg.hidden).toBe(false);
    expect(msg.textContent).toContain('Kunde inte nå servern');
    expect(document.getElementById('view-list')).toBeTruthy();
  });

  it.todo('AK11: klick på ett ärende visar alla åtta fält');
  it.todo('AK12: statusbyte skickas till servern och ny status visas');
  it.todo('AK13: serverns felmeddelande vid ogiltig status visas och gamla statusen visas kvar');
  it.todo('AK14: sparad ändring av kategori/prioritet visas i detaljvyn');
  it.todo('AK15: serverns fältfel visas vid rätt fält vid ogiltig ändring');
});
