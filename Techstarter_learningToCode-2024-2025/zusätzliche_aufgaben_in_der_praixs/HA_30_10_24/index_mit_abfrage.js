import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import inspirationalQuotes from 'inspirational-quotes';

// Zitat anzeigen
function showQuote() {
    const quote = inspirationalQuotes.getQuote(); // Jedes Mal ein neues Zitat abrufen
    const quoteBox = boxen(quote.text, { padding: 1, margin: 1, borderStyle: 'double' });
    console.log(chalk.green(quoteBox));
}

// Benutzerinteraktion
async function askForNewQuote() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'newQuote',
            message: 'Möchtest du ein neues Zitat sehen?',
            default: true,
        }
    ]);
    return answers.newQuote;
}

// Hauptfunktion
async function main() {
    let showNewQuote = true;
    while (showNewQuote) {
        showQuote(); // Jedes Mal neues Zitat anzeigen
        showNewQuote = await askForNewQuote();
    }
}

main();
