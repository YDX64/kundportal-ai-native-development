// ÄGARE: Del 1 (Backend – registrera och validera)
import { notImplemented } from '../errors.js';

/**
 * Sparar ett nytt ärende i tabellen `arenden` och returnerar det sparade ärendet
 * i API-formatet (se docs/API.md): { arendenummer, rubrik, beskrivning, kategori, prioritet, status, skapad, deadline }.
 * Kolumnen `id` ska inte läcka ut i API-svaret.
 *
 * @param {import('node:sqlite').DatabaseSync} db
 * @param {{arendenummer:string, rubrik:string, beskrivning:string, kategori:string, prioritet:number, status:string, skapad:string, deadline:string}} arende
 */
export function insertCase(db, arende) {
  notImplemented('Del 1: insertCase (AK1)');
}
