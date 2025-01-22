function sumOfDigits(num) {
    let sum = 0;

    do {
        sum += num % 10;  // Addiere die letzte Ziffer zur Summe hinzu
        num = Math.floor(num / 10);  // Entferne die letzte Ziffer indem man durch 10 teilt
    } while (num > 0);

    return sum;
}

console.log("Ziffernsumme von 248: " + sumOfDigits(333));  
