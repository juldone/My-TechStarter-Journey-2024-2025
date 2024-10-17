// 1. Erstellen einer Map für Bücher
let buecherMap = new Map([
    ['Der Alchemist', { autor: 'Paulo Coelho', seiten: 198 }],
    ['1984', { autor: 'George Orwell', seiten: 328 }],
    ['Moby Dick', { autor: 'Herman Melville', seiten: 635 }]
]);

// 2. Zugriff auf die Seitenanzahl von 'Der Alchemist'
console.log(buecherMap.get('Der Alchemist').seiten); // 198

// 3. Iteration über die Map und Ausgabe von Titel, Autor, und Seiten
buecherMap.forEach((info, titel) => {
    console.log(`Buch: ${titel}, Autor: ${info.autor}, Seiten: ${info.seiten}`);
});



// 1. Erstellen eines Sets mit Sportarten
let sportartenSet = new Set(['Fußball', 'Basketball', 'Tennis']);

// 2. Ausgabe der Anzahl einzigartiger Sportarten
console.log(sportartenSet.size); // 3

// 3. Entfernen von 'Basketball' und Ausgabe der aktualisierten Größe
sportartenSet.delete('Basketball');
console.log(sportartenSet.size); // 2


// 1. Erstellen der Funktion 'zeigeBuecher'
function zeigeBuecher(buecherMap) {
    buecherMap.forEach((info, titel) => {
        console.log(`${titel}: ${info.autor}, ${info.seiten} Seiten`);
    });
}

// 2. Testen der Funktion mit der 'buecherMap' aus Aufgabe 6
zeigeBuecher(buecherMap);
