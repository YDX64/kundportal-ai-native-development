# Verifieringsplan (mall)

Fylls i löpande. Uppgiften kräver tre saker: vilka tester som finns, hur och varför, samt resultat och begränsningar. Skilj automatiserade tester från manuella kontroller, och planerade från genomförda.

## 1. Vilka tester som finns

| AK | Typ | Beteende och förväntat resultat | Testfil | Status |
|---|---|---|---|---|
| AK1 | happy path | Giltigt ärende sparas med ärendenummer och skapad-tid | `backend/tests/create.test.js` | planerad |
| AK2 | error path | Saknat obligatoriskt fält avvisas, inget sparas | `backend/tests/create.test.js` | planerad |
| AK3 | gränsfall | Rubrik 100 tecken godtas, 101 avvisas | `backend/tests/create.test.js` | planerad |
| AK4 | gränsfall | Beskrivning 5000 tecken godtas, 5001 avvisas | `backend/tests/create.test.js` | planerad |
| AK5 | gränsfall | Enbart mellanslag räknas som tomt | `backend/tests/create.test.js` | planerad |
| AK6 | error path | Deadline saknas avvisas | `backend/tests/create.test.js` | planerad |
| AK7 | error path | Passerad deadline avvisas | `backend/tests/create.test.js` | planerad |
| AK8 | gränsfall | Dagens datum som deadline godtas | `backend/tests/create.test.js` | planerad |
| AK9 | happy path | Ärende finns kvar efter omstart | `backend/tests/read.test.js` | planerad |
| AK10 | happy path | Alla ärenden visas i listan | `backend/tests/read.test.js` | planerad |
| AK11 | happy path | Alla fält visas för ett ärende | `backend/tests/read.test.js` | planerad |
| AK12 | happy path | Statusändring sparas och finns kvar | `backend/tests/update.test.js` | planerad |
| AK13 | error path | Ogiltig status avvisas, gamla kvar | `backend/tests/update.test.js` | planerad |
| AK14 | happy path | Ändring av fält sparas, övriga oförändrade | `backend/tests/update.test.js` | planerad |
| AK15 | error path | Ogiltig ändring avvisas | `backend/tests/update.test.js` | planerad |
| AK16 | error path | Ärendenummer och skapad kan inte ändras | `backend/tests/update.test.js` | planerad |

## 2. Hur och varför

_Vald testnivå (t.ex. integrationstest mot HTTP + databas), varför just dessa testfall, och varför sättet att testa._

## 3. Resultat och begränsningar

_Faktiska körresultat (kommando + utfall), vad testerna inte visar, manuella kontroller (t.ex. är felmeddelandena begripliga?)._

## Så körs testerna

```bash
npm install
npm test
```
