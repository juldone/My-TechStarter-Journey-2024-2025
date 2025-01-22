// 1) String verkettung
let name = "Heino";
let alter = 25;
let begruessung = "Hallo, " + name + ". Du bist " + alter + " Jahre alt.";
console.log(begruessung);

// 2) Template String
let vorname = "Template";
let nachname = "String";
let stadt = "Githausen";
let vorstellung = `Ich heiße ${vorname} ${nachname} und komme aus ${stadt}.`;
console.log(vorstellung);

// 3) Sting Mehtoden 
let vollerName = "  Dino Saurier  ";
console.log(vollerName.trim().toLowerCase());  
console.log(vollerName.trim().toUpperCase());  

// 4) String interpolation
function begruesse(name) {
    return `Willkommen, ${name}!`;
}
  console.log(begruesse("Hubert"));

// 5) Replace einsetzen 
let satz = "Das Wetter ist schlecht heute.";
let neuerSatz = satz.replace("schlecht", "großartig");
console.log(neuerSatz);
