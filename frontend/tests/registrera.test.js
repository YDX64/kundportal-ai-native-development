// ÄGARE: Del 3 (Frontend – registreringsformuläret)   AK1–AK8, gränssnittssidan
// Tips: ladda sidan som i smoke.test.js, skriv in värden, "klicka" Registrera och kontrollera
// vad som visas. Använd en låtsas-fetch som returnerar 201 eller 400 med faltfel (se docs/API.md).
import { describe, it } from 'vitest';

describe('Registreringsformuläret', () => {
  it.todo('AK1: lyckat svar (201) ger bekräftelse och formuläret nollställs');
  it.todo('AK2: tomt obligatoriskt fält visar serverns meddelande vid rätt fält');
  it.todo('AK3/AK4: svar om för lång rubrik/beskrivning visas vid rätt fält');
  it.todo('AK6/AK7: deadline-fel visas vid deadline-fältet');
  it.todo('servern nås inte: begripligt meddelande visas, inget kraschar');
});
