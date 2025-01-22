function interpretiereWetter(wetterlage) {
    switch (wetterlage) {
        case "Sonnig":
            console.log("Gehe spazieren");
            break;
        case "Regnerisch":
            console.log("Bleibe zu Hause und lese ein Buch");
            break;
        case "Schnee":
            console.log("Baue einen Schneemann");
            break;
        case "Windig":
            console.log("Fliege einen Drachen");
            break;
        default:
            console.log("Unbekannte Wetterlage. Bitte gib eine gültige Wetterlage ein.");
            break;
    }
}

// Beispielhafte Funktionsaufrufe
interpretiereWetter("Sonnig");     // Ausgabe: Gehe spazieren
interpretiereWetter("Regnerisch");  // Ausgabe: Bleibe zu Hause und lese ein Buch
interpretiereWetter("Schnee");      // Ausgabe: Baue einen Schneemann
interpretiereWetter("Windig");      // Ausgabe: Fliege einen Drachen
interpretiereWetter("Nebelig");     // Ausgabe: Unbekannte Wetterlage. Bitte gib eine gültige Wetterlage ein.
