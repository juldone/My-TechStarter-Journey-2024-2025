// Funktion die eine zufällige Note zwischen 1 und 6 zurückgibt
function getGrade() {
    return Math.floor(Math.random() * 6) +1; // Zufallszahl zwischen  1 und 6 
}

// FUnktion die die Bewertung der Note durchführt

function checkGrade() {
    // Holen der zufäligen Note
    let grade = getGrade();
    console.log (" Deine Note ist: " + grade);

// Bewertung der Note mit switch-case
switch(grade) {
    case 1:
        console.log("Sehr gut");
        break;
    case 2:
        console.log("Gut");
        break;
    case 3:
        console.log("Befriedigend");
        break;
    case 4:
        console.log("Ausreichend");
        break;
    case 5:
        console.log("Mangelhaft");
        break;
    case 6:
        console.log("Nicht bestanden");
        break;
    default:
        console.log("Ungültige Note");
        break;
}
}

checkGrade();


// SWITCH-CASE ODER IF-ELSE 

// switch-case: Verwende switch-case, wenn du eine feste, bekannte Anzahl von möglichen Werten hast
// (z.B. Noten von 1 bis 6). Es ist strukturierter und kann die Lesbarkeit verbessern, wenn du viele gleichwertige Bedingungen hast.

// if-else: Verwende if-else, wenn du mit Bedingungen arbeitest, die keine festen Werte haben,
// sondern z.B. Bereiche oder komplexere logische Verknüpfungen. Es ist flexibler und kann vielseitiger angewendet werden.