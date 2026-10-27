// ÄGARE: Del 1 (Backend – registrera och validera)
import { notImplemented } from '../errors.js';
// import { ValidationError } from '../errors.js';
// import * as fields from './fields.js';

/**
 * Validerar inmatningen för ett nytt ärende (AK1–AK8).
 *
 * Förväntat beteende:
 *   - kontrollera ALLA obligatoriska fält och samla alla fel, inte bara det första
 *   - finns det fel: kasta new ValidationError({ rubrik: '…', deadline: '…' })
 *   - annars: returnera ett rent objekt med bara de fält som ska sparas
 *     ({ rubrik, beskrivning, kategori, prioritet, status, deadline })
 *     – okända fält i `input` ska inte följa med
 *
 * @param {object} input  JSON-kroppen från klienten
 * @param {string} today  dagens datum, YYYY-MM-DD
 */
export function validateNewCase(input, today) {
  notImplemented('Del 1: validateNewCase (AK1–AK8)');
}
