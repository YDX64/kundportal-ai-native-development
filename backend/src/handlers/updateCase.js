// ÄGARE: Del 2 (Backend – läsa och ändra)   PATCH /api/arenden/:arendenummer
import { notImplemented } from '../errors.js';
// import { updateCaseFields } from '../repository/updateCaseFields.js';

/**
 * AK14, AK15, AK16 – body innehåller de fält som ska ändras, t.ex. { "kategori": "Övrigt", "prioritet": 4 }.
 *
 * Att besluta och dokumentera:
 *   - AK16: avvisas eller ignoreras försök att ändra arendenummer/skapad? (specen tillåter båda)
 *   - Öppen fråga 2 i specen: får deadline ändras, och måste ett nytt datum ligga idag eller framåt?
 *   - Ändrar PATCH även status, eller bara via /status? (förslag: bara via /status)
 *
 * Ogiltig ändring → ValidationError, och inget sparas (AK15).
 */
export function updateCase({ db, params, body }) {
  notImplemented('Del 2: PATCH /api/arenden/:arendenummer (AK14, AK15, AK16)');
}
