// 1. Erstellen eines Arrays
let autos = ['BMW', 'Audi', 'Mercedes'];

// 2. Zugriff auf das zweite Element
console.log(autos[1]); // 'Audi'

// 3. Hinzufügen von 'Volkswagen'
autos.push('Volkswagen');
console.log(autos); // ['BMW', 'Audi', 'Mercedes', 'Volkswagen']

// 4. Iteration über das Array und Ausgabe in Großbuchstaben
autos.forEach(auto => {
    console.log(auto.toUpperCase());
});
