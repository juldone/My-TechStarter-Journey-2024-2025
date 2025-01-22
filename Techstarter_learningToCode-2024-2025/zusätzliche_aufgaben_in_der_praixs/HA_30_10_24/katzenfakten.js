import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import catFacts from 'cat-facts';

// Funktion zur Anzeige eines zufälligen Katzenfakts
function showCatFact() {
    const fact = catFacts.random(); // Zufälligen Katzenfakt abrufen
    const factBox = boxen(fact, { padding: 1, margin: 1, borderStyle: 'double' });
    console.log(chalk.green(factBox)); // Fakt in einer dekorierten Box anzeigen
}

// Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Wie lautet dein Name?',
        },
    ]);
    return answers.username; // Benutzername zurückgeben
}

// Funktion für die Benutzerinteraktion
async function askForNewCatFact() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'newFact',
            message: 'Möchtest du einen weiteren Katzenfakt sehen?',
            default: true,
        },
    ]);
    return answers.newFact;
}

// Hauptfunktion
async function main() {
    const username = await askForUsername(); // Benutzername abfragen

    console.log(
        chalk.blue(
            `Willkommen, ${username}, zu deinem Katzenfakt-Tool!\n` +
            'Erfahre mehr über unsere pelzigen Freunde mit jedem neuen Fakt.'
        )
    );

    let showNewFact = true;

    // Schleife, um neue Katzenfakten anzuzeigen, solange der Benutzer dies möchte
    while (showNewFact) {
        showCatFact();
        showNewFact = await askForNewCatFact();
    }

    console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
}

// Hauptfunktion aufrufen
main();
