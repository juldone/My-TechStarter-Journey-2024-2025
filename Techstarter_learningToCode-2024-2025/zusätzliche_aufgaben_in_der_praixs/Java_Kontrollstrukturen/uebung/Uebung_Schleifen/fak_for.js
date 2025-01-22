function factorialFor(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {  // Zähle rückwärts, von n bis 1
        result *= i;
    }
    return result;
}

console.log("Fakultät mit For-Schleife: " + factorialFor(8));  // Beispiel: 5! = 120
