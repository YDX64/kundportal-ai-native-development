// ÄGARE: Del 1 (Backend – registrera och validera)
import { notImplemented } from './errors.js';

/**
 * Skapar nästa unika ärendenummer enligt specen: "<årtal>-<löpnummer>", t.ex. "2026-1", "2026-2".
 *
 * Att besluta och dokumentera (specen säger inte):
 *   - Startar löpnumret om från 1 varje nytt år, eller fortsätter det räkna?
 *   - Hur garanterar ni att två ärenden aldrig får samma nummer? (kolumnen är UNIQUE i db.js)
 */
export function generateCaseNumber(db, now) {
  notImplemented('Del 1: generateCaseNumber (AK1)');
}
