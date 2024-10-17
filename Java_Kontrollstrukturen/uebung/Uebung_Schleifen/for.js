function sumEvenNumbers() {
    let sum = 0;
    for (let i = 2; i <= 100; i += 2) {  // Start bei 2 und erhöhe um 2, um nur gerade Zahlen zu summieren
        sum += i;
    }
    return sum;
}

console.log("Summe der geraden Zahlen mit For-Schleife: " + sumEvenNumbers());
