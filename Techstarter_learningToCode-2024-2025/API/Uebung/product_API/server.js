const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

let items = [];

// GET-Endpunkt: Alle Items abrufen
app.get("/items", (req, res) => {
  res.json(items);
});

// POST-Endpunkt: Ein neues Item hinzufügen
app.post("/items", (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// DELETE-Endpunkt: Ein Item nach ID löschen
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item nicht gefunden" });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
