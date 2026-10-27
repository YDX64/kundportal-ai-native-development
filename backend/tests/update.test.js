// ÄGARE: Del 2 (Backend – läsa och ändra)   AK12–AK16
import { describe, it } from 'vitest';
// import { expect } from 'vitest';
// import { startTestServer, validCase } from './helpers/testServer.js';

describe('AK12: ändra status (happy path)', () => {
  it.todo('Nytt → Pågående syns direkt och finns kvar efter omstart');
});

describe('AK13: ogiltig status avvisas (error path)', () => {
  it.todo('400 med begripligt felmeddelande och statusen är fortfarande Nytt');
});

describe('AK14: ändra ett fält (happy path)', () => {
  it.todo('kategori och prioritet ändras, övriga fält är oförändrade, ändringen finns kvar efter omstart');
});

describe('AK15: ogiltig ändring avvisas (error path)', () => {
  it.todo('tom rubrik avvisas, sparade uppgifter oförändrade');
  it.todo('prioritet 6 avvisas, sparade uppgifter oförändrade');
  it.todo('kategori som inte finns avvisas, sparade uppgifter oförändrade');
});

describe('AK16: fält som inte kan ändras (error path)', () => {
  it.todo('försök att ändra arendenummer eller skapad avvisas/ignoreras, värdena är oförändrade');
});
