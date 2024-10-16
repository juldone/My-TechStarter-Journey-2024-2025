// 1.1 Erstelle ein Array mit den Zahlen 1 bis 10.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1.2 Füge die Zahl 11 am Ende des Arrays hinzu.
numbers.push(11);  // fügt einen neuen Wert am Ende des Arrays hinzu.

// 1.3 Entferne die erste Zahl aus dem Array.
numbers.shift();   // entfernt das erste Elemenment aus dem Array.

// 1.4 Finde und gib die Position der Zahl 5 im Array aus.
let indexOfFive = numbers.indexOf(5);  // such die geneua position der gesuchten Zahl im index 
console.log("Position der Zahl 5:", indexOfFive);

// 1.5 Überprüfe, ob die Zahl 7 im Array enthalten ist.
let containsSeven = numbers.includes(7);  // prüft, ob die Zahl z.b. 7 im Array enthalten ist.
console.log("Enthält das Array die Zahl 7?", containsSeven);


// 2.1 Erstelle ein Array mit den Namen von fünf verschiedenen Städten.
let cities = ["Berlin", "Hamburg", "München", "Köln", "Frankfurt"];

// 2.2 Iteriere über das Array und gib jede Stadt in Großbuchstaben aus.
for (let city of cities) {
  console.log(city.toUpperCase());  //konvertiert einen genau den String in in Großbuchstaben.
}

// 2.3 Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert.
let cityLengths = cities.map(city => city.length);  //erzeugt ein neues Array, indem es eine Funktion auf jedes Element anwendet.
console.log(cityLengths);


// 3.1 Erstelle ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20 Zahlen).
let randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);  //  erstellt ein Array mit den zufaellig erzeugten Zufallszahlen von 1 bis 100

// 3.2 Filtern Sie alle geraden Zahlen in einem neuen Array heraus.
let evenNumbers = randomNumbers.filter(num => num % 2 === 0);  // erstellt ein neues Array mit den Elementen, die die Bedingung erfüllen (gerade Zahl).
console.log("Gerade Zahlen:", evenNumbers);

// 3.3 Berechne die Summe aller gefilterten geraden Zahlen.
let sumEvenNumbers = evenNumbers.reduce((sum, num) => sum + num, 0);  // summiert alle Elemente im Array.
console.log("Summe der geraden Zahlen:", sumEvenNumbers);
