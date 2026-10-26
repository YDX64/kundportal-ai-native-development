// ÄGARE: Del 1 (Backend – registrera och validera)   POST /api/arenden
import { notImplemented } from '../errors.js';
// import { validateNewCase } from '../validation/newCase.js';
// import { generateCaseNumber } from '../caseNumber.js';
// import { insertCase } from '../repository/insertCase.js';

/**
 * Förväntat flöde (AK1–AK8):
 *   1. today = dagens datum som YYYY-MM-DD, beräknat från now()   ← OBS tidszon, se docs/ARBETSFORDELNING.md
 *   2. input = validateNewCase(body, today)       (kastar ValidationError → 400)
 *   3. arendenummer = generateCaseNumber(db, now)
 *   4. skapad = now().toISOString()
 *   5. return { status: 201, body: insertCase(db, { arendenummer, ...input, skapad }) }
 *
 * Inget får sparas om valideringen misslyckas (AK2).
 */
export function createCase({ db, now, body }) {
  notImplemented('Del 1: POST /api/arenden (AK1–AK8)');
}
