// ÄGARE: Del 1 (Backend – registrera och validera)   AK1–AK8
//
// Arbetssätt: gör en `it.todo` till ett riktigt test, kör det (rött), låt implementationen bli grön.
// Hjälpare: startTestServer(), validCase(), TODAY / YESTERDAY / TOMORROW – se tests/helpers/testServer.js
import { describe, it } from 'vitest';
// import { expect, beforeEach, afterEach } from 'vitest';
// import { startTestServer, validCase, TODAY, YESTERDAY } from './helpers/testServer.js';

describe('AK1: registrera ett giltigt ärende (happy path)', () => {
  it.todo('201: ärendet sparas med unikt ärendenummer och skapad-tidpunkt');
  it.todo('ärendet finns i listan efter registrering');
});

describe('AK2: obligatoriskt fält saknas (error path)', () => {
  it.todo('400 med fältfel för varje obligatoriskt fält som saknas (rubrik, beskrivning, kategori, prioritet, status, deadline)');
  it.todo('inget ärende sparas och listan är oförändrad');
});

describe('AK3: rubrikens längdgräns (gränsfall)', () => {
  it.todo('100 tecken godtas');
  it.todo('101 tecken avvisas med meddelande om högst 100 tecken, inget sparas');
});

describe('AK4: beskrivningens längdgräns (gränsfall)', () => {
  it.todo('5000 tecken godtas');
  it.todo('5001 tecken avvisas med meddelande om högst 5000 tecken, inget sparas');
});

describe('AK5: enbart mellanslag (gränsfall)', () => {
  it.todo('rubrik med enbart mellanslag räknas som tom');
  it.todo('beskrivning med enbart mellanslag räknas som tom');
});

describe('AK6: deadline saknas (error path)', () => {
  it.todo('400 med "Deadline måste fyllas i", inget sparas');
});

describe('AK7: deadline har passerat (error path)', () => {
  it.todo('gårdagens datum avvisas med "Deadline kan inte ligga före dagens datum", inget sparas');
});

describe('AK8: deadline är dagens datum (gränsfall)', () => {
  it.todo('dagens datum godtas och ärendet sparas');
});
