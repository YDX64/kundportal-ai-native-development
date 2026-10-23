# Kundserviceportal till Arbetsförmedlingen (utkast)

## Bakgrund och syfte

I dagsläget så har Arbetsförmedlingen ett befintligt ärendehanteringssystem som inte fungerar optimalt. Sparade ärenden försvinner när applikationen startas om. De har även haft strul med att inte kunna ändra status på ärenden.
Vi är ett utvecklarteam som ska skapa en ny serviceportal till Arbetsförmedlingen.

## Målgrupp

Handläggare på Arbetsförmedlingens kundtjänst.

## Teknikval

För frontend ska koden skrivas i JavaScript, i html-fil.
För backend ska vi använda Node.js och SQlite som databas.
För tester, använd Vitest.
Vi vill ha backend och frontend i samma projekt men i separata mappar. I vardera mapp så ska det innehålla tester i en testmapp.
Inga andra externa tjänster och betaltjänster ska användas.

## Avgränsning

Den nya serviceportalen ska kunna:

- Registrera ett nytt kundärende och validera obligatorisk information.
- Spara ärenden så att de finns kvar när applikationen startas om.
- Visa en lista över ärenden och detaljer för ett valt ärende.
- Ändra status på ett ärende.
- Hantera minst ett felaktigt användningsfall med ett begripligt besked till användaren.
- Verifiera centrala beteenden med automatiserade tester som omfattar både happy paths och relevanta error paths.
- Kunna köras och demonstreras av någon annan med hjälp av era instruktioner.
- Ett ärende ska innehålla rubrik, beskrivning, kategori, prioritet, aktuell status och tidpunkt då det skapades. Statusar ska vara Nytt, Pågående, Väntar på kund och Avslutat.
- En kompletterande funktion är att sätta en deadline på ärenden, datum.

Det ingår inte:

- Inloggning och behörigheter.
- Notiser eller e-post till kund.
- Historik över tidigare statusar.

## Acceptanskriterier

- Registrera ett nytt kundärende.
  Given: Handläggare befinner sig i formuläret för att skapa ett nytt ärende.
  When: Handläggaren fyller i alla obligatoriska fält korrekt och klickar på "Registrera".
  Then: Ärendet sparas i systemet, tilldelas ett unikt ärendenummer och visas i ärendelistan.
- Validera obligatorisk information vid nyregistrering av kundärende.
  Given: Handläggaren har öppnat formuläret för ett nytt ärende.
  When: Handläggaren försöker registrera ärendet utan att fylla i ett obligatoriskt fält.
  Then: Ärendet sparas inte och systemet visar tydligt vilket fält som behöver kompletteras.

## Öppna frågor

Vi har inte funderat klart hur den kompletterande funktionen deadline på ärenden ska fungera än.
