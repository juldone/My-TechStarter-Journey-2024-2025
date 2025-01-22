function factorialWhile(n) {
    let result = 1;
    let i = n;
    while (i > 0) {
        result *= i;
        i--;  // Zähle rückwärts
    }
    return result;
}

console.log("Fakultät mit While-Schleife: " + factorialWhile(3));  // Beispiel: 5! = 120
