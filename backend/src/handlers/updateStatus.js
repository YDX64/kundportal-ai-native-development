// ÄGARE: Del 2 (Backend – läsa och ändra)   PATCH /api/arenden/:arendenummer/status
import { notImplemented } from '../errors.js';
// import { validateStatus } from '../validation/fields.js';
// import { updateCaseStatus } from '../repository/updateCaseStatus.js';

/**
 * AK12, AK13 – body: { "status": "Pågående" }
 * Ogiltig status → kasta ValidationError({ status: '…' }) och låt den gamla statusen vara kvar.
 * Okänt ärendenummer → NotFoundError.
 */
export function updateStatus({ db, params, body }) {
  notImplemented('Del 2: PATCH /api/arenden/:arendenummer/status (AK12, AK13)');
}
