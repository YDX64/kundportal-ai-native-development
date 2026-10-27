// ÄGARE: Del 1 (Backend – registrera och validera)
//
// Ett valideringsfall per fält. Kontrakt för varje funktion:
//   - tar emot ett råvärde (kan vara undefined, fel typ, tom sträng …)
//   - returnerar `null` om värdet är giltigt
//   - returnerar annars ett felmeddelande på svenska som kan visas för handläggaren
//
// Exempel (ur AK2): validateRubrik('')  →  'Rubrik måste fyllas i'
//
// Del 2 återanvänder dessa vid ändring av ärenden (AK13, AK15) – gör dem klara tidigt!
import { notImplemented } from '../errors.js';
// import { KATEGORIER, STATUSAR, RUBRIK_MAX, BESKRIVNING_MAX, PRIORITET_MIN, PRIORITET_MAX } from '../constants.js';

/** AK2, AK3, AK5 – 1–100 tecken, enbart mellanslag räknas som tomt. */
export function validateRubrik(value) {
  notImplemented('Del 1: validateRubrik (AK2, AK3, AK5)');
}

/** AK2, AK4, AK5 – 1–5000 tecken, enbart mellanslag räknas som tomt. */
export function validateBeskrivning(value) {
  notImplemented('Del 1: validateBeskrivning (AK2, AK4, AK5)');
}

/** AK2, AK15 – en av KATEGORIER. */
export function validateKategori(value) {
  notImplemented('Del 1: validateKategori (AK2, AK15)');
}

/** AK2, AK15 – heltal 1–5. */
export function validatePrioritet(value) {
  notImplemented('Del 1: validatePrioritet (AK2, AK15)');
}

/** AK2, AK13 – en av STATUSAR. */
export function validateStatus(value) {
  notImplemented('Del 1: validateStatus (AK2, AK13)');
}

/**
 * AK2, AK6, AK7, AK8 – obligatoriskt datum (YYYY-MM-DD) som inte har passerat.
 * `today` är dagens datum som sträng (YYYY-MM-DD), beräknat av anroparen från `now()`.
 */
export function validateDeadline(value, today) {
  notImplemented('Del 1: validateDeadline (AK2, AK6, AK7, AK8)');
}
