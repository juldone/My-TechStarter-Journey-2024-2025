const sharp = require("sharp");

// Eingabe- und Ausgabe-Dateinamen
const inputImage = "bild.jpg";
const outputImage = "output.jpg";

// Bildverarbeitung mit sharp
sharp(inputImage)
  .resize({ width: 300 }) // Skalierung auf 300px Breite, Höhe wird automatisch angepasst
  .toFile(outputImage)
  .then(() => {
    console.log("Bild erfolgreich skaliert und gespeichert als", outputImage);
  })
  .catch((err) => {
    console.error("Fehler bei der Bildverarbeitung:", err);
  });
