// Funktion, die eine zufällige Note zwischen 1 und 6 zurückgibt
function getGrade() {
    return Math.floor(Math.random() * 6) + 1;  // Zufallszahl zwischen 1 und 6
}

// Funktion, die die Bewertung der Note durchführt
function checkGrade() {
    // Holen der zufälligen Note
    let grade = getGrade();
    console.log("Deine Note ist: " + grade);

    // Bewertung der Note mit if-else
    if (grade === 1) {
        console.log("Sehr gut");
    } else if (grade === 2) {
        console.log("Gut");
    } else if (grade === 3) {
        console.log("Befriedigend");
    } else if (grade === 4) {
        console.log("Ausreichend");
    } else if (grade === 5) {
        console.log("Mangelhaft");
    } else if (grade === 6) {
        console.log("Nicht bestanden");
    } else {
        console.log("Ungültige Note");
    }
}

// Funktionsaufruf
checkGrade();
