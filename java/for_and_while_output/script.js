// For-Schleife: Gibt die Zahlen von 1 bis 10 aus
let forOutput = "";
for (let index = 1; index <= 10; index++) {
    forOutput += index + "<br>";
}
document.getElementById("for-output").innerHTML = "<h2>For-Schleife (1 bis 10)</h2>" + forOutput;

// While-Schleife: Gibt die Zahlen von 0 bis 5 aus
let whileOutput = "";
let counter = 0;
while (counter <= 5) {
    whileOutput += counter + "<br>";
    counter++;
}
document.getElementById("while-output").innerHTML = "<h2>While-Schleife (0 bis 5)</h2>" + whileOutput;
