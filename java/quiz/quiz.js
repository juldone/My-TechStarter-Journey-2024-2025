// Quiz Fragen und Antworten definieren
const quiz = [
    {
        frage: "Was ist der Rückgabewert von typeof null in JavaScript?",
        antworten: ["1. object", "2. null", "3. undefined"],
        richtigeAntwort: 1
    },
    {
        frage: "Welches Schlüsselwort wird verwendet, um eine Konstante in JavaScript zu deklarieren?",
        antworten: ["1. var", "2. let", "3. const"],
        richtigeAntwort: 3
    },
    {
        frage: "Welches der folgenden ist kein JavaScript-Datentyp?",
        antworten: ["1. Number", "2. String", "3. Float"],
        richtigeAntwort: 3
    }
];

// Funktion zum Starten des Quizzes
function quizStarten() {
    let richtigeAntworten = 0;
    let falscheAntworten = 0;

    for (let i = 0; i < quiz.length; i++) {
        console.log(quiz[i].frage);
        console.log(quiz[i].antworten.join("\n"));
        
        let benutzerAntwort = parseInt(prompt("Gib die Nummer deiner Antwort ein: "));
        
        if (benutzerAntwort === quiz[i].richtigeAntwort) {
            console.log("Richtig!");
            richtigeAntworten++;
        } else {
            console.log("Falsch!");
            falscheAntworten++;
        }

        // Beenden, wenn mehr als zwei falsche Antworten gegeben wurden
        if (falscheAntworten > 2) {
            console.log("Du hast mehr als zwei falsche Antworten gegeben. Das Quiz wird beendet.");
            break;
        }
    }

    // Ergebnis ausgeben
    console.log(`Du hast ${richtigeAntworten} von ${quiz.length} Fragen richtig beantwortet.`);
    
    if (richtigeAntworten === quiz.length) {
        console.log("Gut gemacht!");
    } else if (richtigeAntworten >= quiz.length / 2) {
        console.log("Nicht schlecht, aber es gibt Raum für Verbesserungen.");
    } else {
        console.log("Mehr Übung erforderlich!");
    }
}

// Quiz starten
quizStarten();
