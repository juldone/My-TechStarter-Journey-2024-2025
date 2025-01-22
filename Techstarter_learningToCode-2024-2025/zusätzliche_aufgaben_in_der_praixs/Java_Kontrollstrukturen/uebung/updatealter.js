// Funktion = leitet eine Funktion in JS ein
function getAge() {
    // floor = macht aus Kommazahlen ganze Zahlen, indem
    // die Nachkommastelle gestrichen wird.
    // random = ermittelt eine Zufallszahl zwischen 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    let age = getAge();  // Variable richtig deklarieren
    console.log('Dein Alter ist: ' + age);

    if (age < 18) {
        console.log("Du bist minderjährig");
    } else if (age >= 67) {
        console.log("Du bist Rentner");
    } else {
        console.log("Du bist erwachsen!");
    }
}

// Funktionsaufruf (Hiermit sehe ich die console.log-Befehle im Terminal!)
checkAge();
