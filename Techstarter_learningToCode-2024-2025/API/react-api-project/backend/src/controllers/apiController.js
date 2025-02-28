// Temporäre Datenbank-Simulation (später durch echte DB ersetzen)
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// 🔵 GET - Alle Items abrufen
export const getAllItems = (req, res) => {
  res.json(items);
};

// 🟢 POST - Neues Item hinzufügen
export const createItem = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name ist erforderlich!" });

  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
};

// 🟡 PUT - Ein Item aktualisieren
export const updateItem = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) return res.status(404).json({ error: "Item nicht gefunden!" });
  if (!name) return res.status(400).json({ error: "Name ist erforderlich!" });

  item.name = name;
  res.json(item);
};

// 🔴 DELETE - Ein Item löschen
export const deleteItem = (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ error: "Item nicht gefunden!" });

  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
};
