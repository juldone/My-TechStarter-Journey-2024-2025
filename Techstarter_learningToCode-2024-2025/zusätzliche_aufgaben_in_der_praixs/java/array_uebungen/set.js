// 1. Erstellen eines Sets
let buchstabenSet = new Set(['A', 'B', 'C']);

// 2. Überprüfen, ob 'D' existiert
console.log(buchstabenSet.has('D')); // false

// 3. Hinzufügen von 'A' erneut und Ausgabe der Anzahl
buchstabenSet.add('A');
console.log(buchstabenSet.size); // 3 (weil Sets keine Duplikate erlauben)
