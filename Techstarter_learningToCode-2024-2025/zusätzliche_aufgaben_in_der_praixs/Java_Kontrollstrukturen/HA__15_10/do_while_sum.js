function sumEvenNumbers() {
    let sum = 0;
    let i = 1;

    do {
        if (i % 2 === 0) {  // Überprüfeungen ob die Zahl gerade ist
            sum += i;
        }
        i++;
    } while (i <= 100);

    return sum;
}

console.log("Summe der geraden Zahlen von 1 bis 100: " + sumEvenNumbers());
