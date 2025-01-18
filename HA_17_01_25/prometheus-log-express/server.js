import express from "express";
import promClient from "prom-client";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Ermitteln des Verzeichnisses (__dirname für ES-Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const register = promClient.register;

// Pfad korrekt definieren
const logFilePath = path.join(__dirname, "app.log");

// Sicherstellen, dass die Datei existiert, oder erstellen
if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, "");
}

// Log-Datei-Stream für morgan
const logStream = fs.createWriteStream(logFilePath, { flags: "a" });

// Morgan-Middleware für HTTP-Logging
app.use(morgan("combined", { stream: logStream }));

// Metrik: Zähler für HTTP-Anfragen
const httpRequestsTotal = new promClient.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests made",
  labelNames: ["method", "status"],
});

// Metrik: Histogramm für Antwortzeiten
const httpDurationHistogram = new promClient.Histogram({
  name: "http_duration_seconds",
  help: "Histogram of HTTP request durations in seconds",
  buckets: [0.1, 0.5, 1, 2, 5, 10], // Anpassung der Buckets je nach Anforderungen
  labelNames: ["method", "status"],
});

// Middleware: HTTP-Anfragen zählen
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestsTotal.labels(req.method, res.statusCode).inc();
  });
  next();
});

// Middleware: Antwortzeiten messen
app.use((req, res, next) => {
  const end = httpDurationHistogram.startTimer();
  res.on("finish", () => {
    end({ method: req.method, status: res.statusCode });
  });
  next();
});

// Beispielroute
app.get("/", (req, res) => {
  setTimeout(() => {
    res.send("Hello, World!");
  }, Math.random() * 1000); // Zufällige Verzögerung simulieren
});

// /metrics-Endpunkt für Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// Server starten
const PORT = 3400;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
