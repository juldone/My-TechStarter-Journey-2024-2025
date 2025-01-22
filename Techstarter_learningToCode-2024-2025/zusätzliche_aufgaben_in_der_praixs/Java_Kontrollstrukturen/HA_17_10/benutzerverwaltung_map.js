// Aufgabe 1) Benutzerverwaltung mit Map
let benutzerVerwaltung = new Map();

benutzerVerwaltung.set('thor', {email: 'thor@avengers.com', rolle: 'Admin'});
benutzerVerwaltung.set('groot', {email: 'groot@avengers.com', rolle: 'User'});
benutzerVerwaltung.set('hulk', {email: 'hulk@avengers.com', rolle: 'Gast'});



function zeigeAlleBenutzer() {
    benutzerVerwaltung.forEach((details, benutzername) => {
        console.log(`${benutzername}: E-Mail: ${details.email}, Rolle: ${details.rolle}`);
    });
}

zeigeAlleBenutzer();

// Aufgabe 2) Eindeutige Einträge mit Set
let besuchteSeiten = new Set();

besuchteSeiten.add('Startseite');
besuchteSeiten.add('Impressum');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite');  // copy
besuchteSeiten.add('Hilfe');
besuchteSeiten.add('Profil');      // copy

console.log(`Anzahl der eindeutigen Seiten: ${besuchteSeiten.size}`); // Zeigt mir die Seiten an, ohne die Duplikate

function zeigeSeiten() {
    besuchteSeiten.forEach(seite => {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

function pruefeSeite(seite) {
    if (besuchteSeiten.has(seite)) {
        console.log(`Die Seite '${seite}' wurde bereits besucht.`);
    } else {
        console.log(`Die Seite '${seite}' wurde noch nicht besucht.`);
    }
}

zeigeSeiten();

pruefeSeite('Startseite'); 
pruefeSeite('Kontakt');   
