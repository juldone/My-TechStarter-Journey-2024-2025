const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

// GoldAPI Zugangstoken
const GOLDAPI_KEY = "goldapi-a1ws2o19m7k9899s-io";

app.use(express.json());

const goldApiHeaders = {
  "x-access-token": GOLDAPI_KEY,
  "Content-Type": "application/json",
};

// GET-Endpunkt: Aktueller Rohstoffpreis
app.get("/:symbol/:currency", async (req, res) => {
  const { symbol, currency } = req.params;
  const apiUrl = `https://www.goldapi.io/api/${symbol}/${currency}`;

  try {
    const response = await axios.get(apiUrl, { headers: goldApiHeaders });
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data,
      });
    } else {
      res.status(500).json({ error: "Fehler beim Abrufen der Daten" });
    }
  }
});

// GET-Endpunkt: Rohstoffpreis an einem bestimmten Datum
app.get("/:symbol/:currency/:date", async (req, res) => {
  const { symbol, currency, date } = req.params;
  const apiUrl = `https://www.goldapi.io/api/${symbol}/${currency}/${date}`;

  try {
    const response = await axios.get(apiUrl, { headers: goldApiHeaders });
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data,
      });
    } else {
      res.status(500).json({ error: "Fehler beim Abrufen der Daten" });
    }
  }
});

// PUT-Endpunkt: Beispiel für eine Aktualisierung
app.put("/:symbol/:currency", (req, res) => {
  const { symbol, currency } = req.params;
  const { newValue } = req.body;

  res.json({
    message: `Rohstoff ${symbol}/${currency} wurde aktualisiert.`,
    newValue,
  });
});

// DELETE-Endpunkt: Beispiel für das Löschen eines Eintrags
app.delete("/:symbol/:currency", (req, res) => {
  const { symbol, currency } = req.params;

  res.json({
    message: `Rohstoff ${symbol}/${currency} wurde gelöscht.`,
  });
});

// GET-Endpunkt: API-Statistiken (/stat)
app.get("/stat", async (req, res) => {
  try {
    const response = await axios.get("https://www.goldapi.io/api/stat", {
      headers: goldApiHeaders,
    });
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data,
      });
    } else {
      res
        .status(500)
        .json({ error: "Fehler beim Abrufen der API-Statistiken" });
    }
  }
});

// GET-Endpunkt: API-Status (/status)
// GET-Endpunkt: API-Status (/status)
app.get("/status", async (req, res) => {
  try {
    const response = await axios.get("https://www.goldapi.io/api/status", {
      headers: goldApiHeaders,
    });
    console.log(
      "Die API Schnittstelle zu den aktuellen Metallpreisen läuft tadellos"
    );
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data,
      });
    } else {
      res.status(500).json({ error: "Fehler beim Abrufen des API-Status" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
