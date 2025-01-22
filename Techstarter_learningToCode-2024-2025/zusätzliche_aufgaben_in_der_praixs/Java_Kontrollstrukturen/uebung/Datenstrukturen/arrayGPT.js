// Ein einfaches Zahlen-Array
// Array hat eine Laenge von 5
// Indizes: 0 - 4
const zahlenArray = [1, 2, 3, 4, 5];

// Ein einfaches String-Array
const namen = ["hi", "moin", "servus", "Hola"];

// Auswahl eines beliebigen Elements aus einem Array
console.log(namen[0]); // hi
console.log(namen[1]); // moin
console.log(zahlenArray[3]); // 4

// Befüllen von Arrays
namen.push("marcel");
zahlenArray.push(6);

// Definiere leeresArray bevor du es verwendest
const leeresArray = [];
leeresArray.push("Hund");

console.log(namen);        // ["hi", "moin", "servus", "Hola", "marcel"]
console.log(zahlenArray);  // [1, 2, 3, 4, 5, 6]
console.log(leeresArray);  // ["Hund"]







// Beispiel 1: Ein einfaches Array mit Zahlen
const zahlen = [10, 20, 30, 40, 50];
console.log(zahlen); // [10, 20, 30, 40, 50]
// Beispiel 2: Ein Array mit verschiedenen Datentypen
const gemischt = [1, "Hallo", true, {name: "John"}, [1, 2, 3]];
console.log(gemischt); // [1, "Hallo", true, {name: "John"}, [1, 2, 3]]
// Hier haben wir Zahlen, einen String, einen Boolean, ein Objekt und sogar ein weiteres Array in einem Array gespeichert.

// Array-Befehle (Methoden)
//JavaScript bietet eine Vielzahl von Methoden, um mit Arrays zu arbeiten. Hier sind einige der wichtigsten Methoden:

// 1. push() – Element(e) ans Ende hinzufügen
// Die Methode push() fügt ein oder mehrere Elemente am Ende eines Arrays hinzu.

const namen = ["Max", "Anna", "John"];
namen.push("Sarah");
console.log(namen); // ["Max", "Anna", "John", "Sarah"]

// 2. pop() – Letztes Element entfernen
// pop() entfernt das letzte Element eines Arrays und gibt es zurück.

const zahlen = [1, 2, 3, 4];
const entferntesElement = zahlen.pop();
console.log(entferntesElement); // 4
console.log(zahlen);            // [1, 2, 3]

// 3. unshift() – Element(e) am Anfang hinzufügen
// Die Methode unshift() fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu.

const farben = ["blau", "grün"];
farben.unshift("rot");
console.log(farben); // ["rot", "blau", "grün"]

// 4. shift() – Erstes Element entfernen
// shift() entfernt das erste Element eines Arrays und gibt es zurück.

const obst = ["Apfel", "Banane", "Orange"];
const entfernt = obst.shift();
console.log(entfernt); // "Apfel"
console.log(obst);     // ["Banane", "Orange"]

// 5. length – Länge des Arrays
// Das length-Attribut gibt die Anzahl der Elemente in einem Array zurück.

const zahlen = [1, 2, 3, 4, 5];
console.log(zahlen.length); // 5

// 6. splice() – Elemente aus einem Array entfernen oder hinzufügen
// Mit splice() kannst du ein oder mehrere Elemente aus einem Array entfernen, ersetzen oder hinzufügen.

const tiere = ["Hund", "Katze", "Maus", "Pferd"];
tiere.splice(1, 2);  // Ab Index 1, entferne 2 Elemente
console.log(tiere);  // ["Hund", "Pferd"]

// Beispiel (Elemente hinzufügen):
const zahlen = [1, 2, 5];
zahlen.splice(2, 0, 3, 4);  // Ab Index 2, füge 3 und 4 hinzu
console.log(zahlen);        // [1, 2, 3, 4, 5]

// CALLBACKS
// soll die Elemente eines Arrays einzeln ausgeben
namen.forEach(namen => {
    console.log(namen);
});
// Manipulation
let slicedNamen = namen.slive(2,5);
console.log(slicedNamen);


