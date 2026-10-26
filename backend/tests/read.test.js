// ÄGARE: Del 2 (Backend – läsa och ändra)   AK9–AK11
import { describe, it } from 'vitest';
// import { expect } from 'vitest';
// import { startTestServer, validCase } from './helpers/testServer.js';
//
// Tips för AK9: starta servern med { dbPath: <tillfällig fil> }, skapa ett ärende, stäng,
// starta en NY server med samma dbPath och kontrollera att ärendet finns kvar.

describe('AK9: ärenden finns kvar efter omstart (happy path)', () => {
  it.todo('samma uppgifter, ärendenummer och skapad-tidpunkt efter att databasen öppnats på nytt');
});

describe('AK10: lista över ärenden (happy path)', () => {
  it.todo('alla registrerade ärenden finns i listan');
});

describe('AK11: detaljer för ett ärende (happy path)', () => {
  it.todo('alla åtta fält returneras');
  it.todo('okänt ärendenummer ger 404 med begripligt meddelande');
});
