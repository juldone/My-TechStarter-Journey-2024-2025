// index.js
const fs = require('fs').promises;
const readline = require('readline');

// Ein Interface für Benutzereingaben erstellen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Eine Funktion zur Eingabe von Benutzerdaten mit Promises
function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

// Funktion zum Schreiben oder Anhängen an eine Datei
async function writeOrAppendToFile(filename, message) {
  try {
    // Überprüfen, ob die Datei existiert
    await fs.access(filename);
    // Datei existiert, Nachricht anhängen
    await fs.appendFile(filename, `\n${message}`);
    console.log("Nachricht erfolgreich an die Datei angehängt.");
  } catch (error) {
    // Datei existiert nicht oder Zugriff fehlgeschlagen
    if (error.code === 'ENOENT') {
      console.log(`Datei "${filename}" existiert nicht. Sie wird nun erstellt.`);
      try {
        await fs.writeFile(filename, message);
        console.log("Nachricht erfolgreich in die neue Datei geschrieben.");
      } catch (writeError) {
        console.error("Fehler beim Erstellen der Datei:", writeError.message);
      }
    } else {
      console.error("Fehler beim Zugriff auf die Datei:", error.message);
    }
  }
}

// Hauptfunktion zum Ausführen der Benutzereingaben und Dateioperation
async function main() {
  const filename = await question("Geben Sie den Dateinamen ein: ");
  const message = await question("Geben Sie die Nachricht ein, die Sie schreiben oder anhängen möchten: ");
  
  await writeOrAppendToFile(filename, message);
  rl.close();
}

// Hauptfunktion aufrufen
main();
