// String-Manipulationen
// 1. String-Verkettung mit "+" Konkatenation
name = (" Ahmet ");
greeting = ("Hallo");
console.log("Willkommen, " + name);
console.log("Willkommen " + name + " möchtest du " + greeting + " sagen ")

    //. Template-Strings
    name = "Ünal";
    gruss = `Willkommen Herr ${name}`;
    console.log(gruss);
zahl1 = 5;
zahl2 = 7;
erg = (zahl1 + zahl2)
console.log( `das Ergebnis ist ${erg}`);
console.log(" Das ergebnis ist " + erg);

// 3. String - Methoden
str1 = "Hallo Welt"
formattedStrL = str1.trim().toLowerCase();
console.log(formattedStrL);
formattedStrU = str1.trim().toUpperCase();
console.log(formattedStrU);

// 4. String-Interpolation in Funktionen
function mehrwertSteuerpreis(preis){
    const steuersatz = 0.19;
    gesamtpreis = preis * (1 * steuersatz);
    return `Der Gesamtpreis beträgt: €${gesamtpreis.toFixed(2)}`;
}
console.log(mehrwertSteuerpreis(100));

let satz = "Das Wetter ist schlecht heute.";
let neuerSatz = satz.replace("schlecht", "großartig");
console.log(neuerSatz);
