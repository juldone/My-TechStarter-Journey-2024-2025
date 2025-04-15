# React API Projekt (Full-Stack CRUD Anwendung)

Dieses Projekt ist eine einfache **Full-Stack CRUD Anwendung**, die mit **React (Frontend)** und **Node.js/Express (Backend)** erstellt wurde. Die Anwendung ermöglicht es, eine Liste von Items zu verwalten (Erstellen, Lesen, Aktualisieren, Löschen).

## 📂 Projektstruktur

```
react-api-project/
│── backend/                  # Backend mit Express
│   ├── src/
│   │   ├── routes/           # API-Routen
│   │   ├── controllers/      # Logik für die API-Requests
│   │   ├── config/           # Konfigurationsdateien (z. B. für DB)
│   │   ├── app.js            # Express-App Konfiguration
│   │   ├── server.js         # Startpunkt für das Backend
│   ├── .env                  # Umgebungsvariablen
│   ├── package.json          # Enthält Backend-Abhängigkeiten
│
│── frontend/                 # Frontend mit React
│   ├── src/
│   │   ├── components/       # React-Komponenten
│   │   ├── services/         # API-Service für CRUD-Requests
│   │   ├── App.js            # Hauptdatei für React
│   │   ├── index.js          # Einstiegspunkt für React
│   ├── package.json          # Enthält Frontend-Abhängigkeiten
│
├── .gitignore                 # Git Ignore für das gesamte Projekt
├── README.md                  # Hauptdokumentation
```

---

## 🛠 Installation & Setup

### 1️⃣ **Projekt klonen**

```bash
git clone <REPOSITORY_URL>
cd react-api-project
```

### 2️⃣ **Backend einrichten & starten**

```bash
cd backend
npm install       # Abhängigkeiten installieren
npm run dev       # Backend starten (läuft auf http://localhost:5001)
```

### 3️⃣ **Frontend einrichten & starten**

```bash
cd ../frontend
npm install       # Abhängigkeiten installieren
npm start         # Frontend starten (läuft auf http://localhost:3000)
```

---

## 🚀 API-Endpunkte (Backend)

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

## 🖥 Frontend-Funktionalitäten

- Zeigt eine Liste von Items an
- Fügt neue Items hinzu
- Aktualisiert vorhandene Items
- Löscht Items aus der Liste
- Kommuniziert mit dem Express-Backend

---

## 📌 Technologien

### **Frontend**

- React
- Axios (für API-Requests)
- useState & useEffect Hooks

### **Backend**

- Node.js
- Express.js
- CORS (für sichere API-Zugriffe)
- Dotenv (für Umgebungsvariablen)
- Nodemon (für automatische Server-Neustarts)

---

## ❓ Häufige Fehler & Lösungen

1️⃣ **Fehlermeldung: `Cannot GET /` im Backend**

- Ursache: Die Route `/` ist nicht definiert.
- Lösung: Füge folgende Zeile in `src/app.js` hinzu:
  ```javascript
  app.get("/", (req, res) => {
    res.send("API läuft! Verwende /api/items für CRUD-Operationen.");
  });
  ```

2️⃣ **CORS-Fehler im Frontend**

- Ursache: Backend erlaubt keine Anfragen vom Frontend.
- Lösung: Stelle sicher, dass in `backend/src/app.js` `cors()` genutzt wird:
  ```javascript
  import cors from "cors";
  app.use(cors());
  ```

3️⃣ **Fehlermeldung: `Module type not specified` in `server.js`**

- Ursache: Node.js erwartet ES-Module-Syntax.
- Lösung: Füge in `backend/package.json` hinzu:
  ```json
  "type": "module"
  ```

---

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

---

### 🎉 Viel Spaß beim Entwickeln! 🚀
