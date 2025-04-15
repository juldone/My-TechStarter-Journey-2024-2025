# Node.js Backend für API-Projekt

Dieses Backend wurde mit **Node.js** und **Express.js** entwickelt und stellt eine REST-API bereit, die CRUD-Operationen für eine Item-Liste ermöglicht.

## 📂 Projektstruktur

```
backend/
│── src/
│   ├── routes/           # API-Routen
│   │   ├── apiRoutes.js  # CRUD-Endpunkte für Items
│   ├── controllers/      # Logik für die API-Requests
│   │   ├── apiController.js
│   ├── config/           # Konfigurationsdateien (z. B. für eine DB)
│   │   ├── db.js         # Platzhalter für Datenbankverbindung
│   ├── app.js            # Express-App Konfiguration
│   ├── server.js         # Startpunkt für das Backend
│── .env                  # Umgebungsvariablen
│── package.json          # Enthält Backend-Abhängigkeiten
│── README.md             # Backend-Dokumentation
```

---

## 🛠 Installation & Setup

### **1️⃣ Abhängigkeiten installieren**

```bash
npm install
```

### **2️⃣ Backend starten**

```bash
npm run dev
```

Das Backend läuft standardmäßig auf **http://localhost:5001**.

---

## 🚀 API-Endpunkte

| Methode    | Route            | Beschreibung          |
| ---------- | ---------------- | --------------------- |
| **GET**    | `/api/items`     | Alle Items abrufen    |
| **POST**   | `/api/items`     | Neues Item hinzufügen |
| **PUT**    | `/api/items/:id` | Item aktualisieren    |
| **DELETE** | `/api/items/:id` | Item löschen          |

### Beispiel für einen POST-Request (neues Item erstellen)

```json
{
  "name": "Neues Item"
}
```

---

## 📄 Technologien

- Node.js
- Express.js
- CORS (für sichere API-Zugriffe)
- Dotenv (für Umgebungsvariablen)
- Nodemon (für automatische Server-Neustarts)

---

## ❓ Häufige Fehler & Lösungen

1️⃣ **Fehlermeldung: `Cannot GET /` im Browser**

- Ursache: Es gibt keine Route für `/`.
- Lösung: Füge folgende Zeile in `src/app.js` hinzu:
  ```javascript
  app.get("/", (req, res) => {
    res.send("API läuft! Verwende /api/items für CRUD-Operationen.");
  });
  ```

2️⃣ **CORS-Fehler im Frontend**

- Ursache: Das Backend erlaubt keine Anfragen vom Frontend.
- Lösung: Stelle sicher, dass in `src/app.js` `cors()` genutzt wird:
  ```javascript
  import cors from "cors";
  app.use(cors());
  ```

3️⃣ **Fehlermeldung: `Module type not specified` in `server.js`**

- Ursache: Node.js erwartet ES-Module-Syntax.
- Lösung: Füge in `package.json` hinzu:
  ```json
  "type": "module"
  ```

---

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

---

### 🎉 Viel Spaß beim Entwickeln! 🚀
