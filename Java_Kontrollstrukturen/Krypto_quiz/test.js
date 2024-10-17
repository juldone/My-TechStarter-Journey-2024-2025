// Funktion, um zwei Fragen zu Kryptowährungen zu stellen
function cryptoQuiz() {
    // Erste Frage
    let question1 = "Was ist Bitcoin?";
    let answers1 = [
        "1. Eine digitale Währung",
        "2. Eine traditionelle Bank",
        "3. Ein soziales Netzwerk"
    ];
    let userAnswer1 = prompt(question1 + "\n" + answers1.join("\n"));

    // Überprüfen der Antwort auf die erste Frage
    if (userAnswer1 == "1") {
        alert("Richtig! Bitcoin ist eine digitale Währung.");
    } else {
        alert("Falsch! Die richtige Antwort ist: Eine digitale Währung.");
    }

    // Zweite Frage
    let question2 = "Was ist ein Smart Contract?";
    let answers2 = [
        "1. Ein intelligenter Roboter",
        "2. Ein selbstausführender Vertrag auf einer Blockchain",
        "3. Ein Vertrag mit Künstlicher Intelligenz"
    ];
    let userAnswer2 = prompt(question2 + "\n" + answers2.join("\n"));

    // Überprüfen der Antwort auf die zweite Frage
    if (userAnswer2 == "2") {
        alert("Richtig! Ein Smart Contract ist ein selbstausführender Vertrag auf einer Blockchain.");
    } else {
        alert("Falsch! Die richtige Antwort ist: Ein selbstausführender Vertrag auf einer Blockchain.");
    }
}

// Quiz starten
cryptoQuiz();
