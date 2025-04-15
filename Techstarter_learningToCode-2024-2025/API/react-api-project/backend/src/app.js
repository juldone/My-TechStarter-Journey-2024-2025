import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes.js";

// Umgebungsvariablen laden
dotenv.config();

// Express-App erstellen
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Standardroute für "/"
app.get("/", (req, res) => {
  res.send("🚀 API läuft! Verwende /api/test für die Test-Route.");
});

// API-Routen
app.use("/api", apiRoutes);

export default app;
