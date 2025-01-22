const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 4000;

// Middleware, um JSON-Anfragen zu verarbeiten
app.use(express.json());

// Route, um To-Dos zu laden
app.get('/todos', (req, res) => {
    // Lesen der JSON-Datei
    fs.readFile('./todos.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Datei:', err);
            res.status(500).send('Server error');
            return;
        }
        const todos = JSON.parse(data); // Konvertiere den JSON-String in ein JavaScript-Array
        res.json(todos); // Sende die Daten als JSON-Antwort an den Client
    });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://127.0.0.1:${PORT}`);
});
