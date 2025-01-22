// 1. Erstellen einer Map
let stadtMap = new Map();

// 2. Hinzufügen von Paaren
stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');

// 3. Zugriff auf den Wert des Schlüssels 'Berlin'
console.log(stadtMap.get('Berlin')); // 'Deutschland'

// 4. Überprüfen, ob der Schlüssel 'Rom' existiert
console.log(stadtMap.has('Rom')); // false


// 1. Hinzufügen von 'Rom' : 'Italien'
stadtMap.set('Rom', 'Italien');

// 2. Iteration über die Map und Ausgabe im Format "Stadt: Land"
stadtMap.forEach((land, stadt) => {
    console.log(`Stadt: ${stadt}, Land: ${land}`);
});
