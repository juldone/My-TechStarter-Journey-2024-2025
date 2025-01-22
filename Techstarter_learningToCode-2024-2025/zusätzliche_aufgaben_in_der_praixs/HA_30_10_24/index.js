import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import inspirationalQuotes from 'inspirational-quotes';

// Zitat
function showQuote(){
    const quote = inspirationalQuotes.getQuote();
    const quoteBox = boxen( quote.text , {padding: 1, margin: 1, borderStyle: 'double'});
    console.log(quoteBox);
}

// Benutzerinteraktion
async function askForNewQuote() {
    
}

// Hauptfunktion
async function main() {
    showQuote();
}


main();