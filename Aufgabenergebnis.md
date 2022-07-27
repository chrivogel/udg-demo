# Aufgabenergebnis

## Eingesetzte Technologien / Frameworks

Folgende Technologien / Frameworks setze ich in meinem Projekt ein:

- Angular / Typescript

Ich habe mich für Angular entschieden, da sich das Framework gut für die Erstellung von SPAs eignet und ich hier die meiste Erfahrung mitbringe.

## Features des CSV-Editors

- Einlesen von Tabellendaten
- dynamisches Erzeugen von Feldern auf Basis des Tabellenheaders
- Bearbeiten der Daten (Neuen Eintrag erstellen, Eintrag bearbeiten/löschen)
- Anzeige der prozentualen Verteilung als Balken und Tortendiagramm (bei Spalten mit maximal 200 verschiedenen Einträgen)
- Speichern der Tabellendaten als CSV-Datei

## Eingesetzte 3rd Party Libraries

Ich setze in meinem Projekt die folgenden 3rd Party Libraries ein:

Name | Begründung
--- | ---
[@ng-bootstrap/ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap) | CSS-Framework zur Gestaltung des Frontends
[ngx-csv-parser](https://www.npmjs.com/package/ngx-csv-parser) | Zum Auslesen der CSV-Datei
[@molteni/export-csv](https://www.npmjs.com/package/@molteni/export-csv) | Zum Speichern der CSV-Datei
[ng2-charts](https://www.npmjs.com/package/ng2-charts) | Zur Anzeige der Diagramme
[chartjs](https://www.chartjs.org/) | Wird von ng2-charts benötigt

## Installation / Ausführen des Projektes
---

Folgende Komponenten müssen lokal installiert sein:

- [nodejs](https://nodejs.org/en/) v16.13.1

Um das Projekt lokal auszuführen, folgendes in der Commandline / Bash eingeben:

```console
$ git clone https://github.com/chrivogel/udg-demo.git udg-probeaufgabe
$ cd udg-probeaufgabe
$ npm install
$ npm start
```
---
