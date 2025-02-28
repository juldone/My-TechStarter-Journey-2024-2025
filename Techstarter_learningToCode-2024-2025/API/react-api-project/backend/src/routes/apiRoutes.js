import express from "express";
import {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/apiController.js";

const router = express.Router();

// CRUD-Routen
router.get("/items", getAllItems); // 🔵 GET - Alle Items abrufen
router.post("/items", createItem); // 🟢 POST - Neues Item hinzufügen
router.put("/items/:id", updateItem); // 🟡 PUT - Item aktualisieren
router.delete("/items/:id", deleteItem); // 🔴 DELETE - Item löschen

export default router;
