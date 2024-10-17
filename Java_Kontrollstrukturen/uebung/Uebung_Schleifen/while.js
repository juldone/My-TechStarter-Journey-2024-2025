function sumEvenNumbersWhile() {
    let sum = 0;
    let i = 2;
    while (i <= 100) {
        sum += i;
        i += 2;  // Erhöhen um 2, um nur gerade Zahlen zu berücksichtigen
    }
    return sum;
}

console.log("Summe der geraden Zahlen mit While-Schleife: " + sumEvenNumbersWhile());
