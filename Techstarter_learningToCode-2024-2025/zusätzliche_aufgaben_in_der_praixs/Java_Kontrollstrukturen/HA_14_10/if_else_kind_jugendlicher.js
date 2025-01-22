function bestimmeKategorie(alter) {
    if (alter >= 0 && alter <= 12) {
        console.log("Kind");
    } else if (alter >= 13 && alter <= 17) {
        console.log("Jugendlicher");
    } else if (alter >= 18 && alter <= 64) {
        console.log("Erwachsener");
    } else if (alter >= 65) {
        console.log("Senior");
    } else {
        console.log("Ungültiges Alter");
    }
}

// Beispielhafte Funktionsaufrufe
bestimmeKategorie(5);   // Ausgabe: Kind
bestimmeKategorie(15);  // Ausgabe: Jugendlicher
bestimmeKategorie(30);  // Ausgabe: Erwachsener
bestimmeKategorie(70);  // Ausgabe: Senior
bestimmeKategorie(-1);  // Ausgabe: Ungültiges Alter
