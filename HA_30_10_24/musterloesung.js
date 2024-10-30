// Pakete importieren
import inspirationalQuotes from 'inspirational-quotes';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

// Funktion zur Anzeige eines inspirierenden Zitats
function showInspirationalQuote() {
    let quote = inspirationalQuotes.getQuote(); // Jedes Mal ein neues Zitat abrufen
    let quoteBox = boxen(
        chalk.green(quote.text),
        { padding: 1, margin: 1, borderStyle: 'double' }
    );
    console.log(quoteBox); // Zitat in einer Box anzeigen
}

// Funktion für die Benutzerinteraktion
async function askForNewQuote() {
    let answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'getQuote',
            message: 'Möchtest du ein inspirierendes Zitat sehen?',
            default: true,
        },
    ]);
    
    return answers.getQuote;
}

// Hauptfunktion
async function main() {
    console.log(
        chalk.blue(
            'Willkommen zu deinem inspirierenden JS-Zitat-Tool!\n' +
            'Jetzt hast du die Möglichkeit, dein inspirierendes Zitat-Tool zu erstellen und ' +
            'gleichzeitig etwas über die verwendeten Module zu lernen.\n' +
            'Viel Spaß beim Programmieren! Wenn du Fragen hast oder Hilfe benötigst, ' +
            'zögere nicht, nachzufragen!'
        )
    );

    let showNewQuote = true;

    while (showNewQuote) {
        showInspirationalQuote(); // Jedes Mal neues Zitat anzeigen
        showNewQuote = await askForNewQuote();
    }

    console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
    process.exit(0); // Programm beenden
}

// Hauptfunktion aufrufen
main();
