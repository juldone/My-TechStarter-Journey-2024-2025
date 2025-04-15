import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables";
import dotenv from "dotenv";

dotenv.config(); // Lädt Umgebungsvariablen aus der .env-Datei

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME; // Name des Azure Storage Accounts
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY; // Zugriffsschlüssel für den Account
const tableName = "MyTable"; // Name der Tabelle, die erstellt/genutzt wird

const credential = new AzureNamedKeyCredential(accountName, accountKey); // Authentifizierung mit Azure Storage
const tableClient = new TableClient(
  `https://${accountName}.table.core.windows.net`, // URL für den Table Storage
  tableName,
  credential
);

async function main() {
  // 1. Erstelle eine Tabelle (falls nicht vorhanden)
  try {
    await tableClient.createTable(); // Erstellt die Tabelle, falls sie noch nicht existiert
    console.log(`Tabelle '${tableName}' erstellt oder bereits vorhanden.`);
  } catch (error) {
    console.error("Fehler beim Erstellen der Tabelle:", error.message);
  }

  // 2. Füge einen Eintrag hinzu
  const entity = {
    partitionKey: "Partition1", // Gruppiert verwandte Datensätze (z. B. alle Kunden einer Region)
    rowKey: "1", // Eindeutige ID innerhalb der Partition (z. B. eine Kunden-ID)
    name: "Max Mustermann", // Name des Kunden
    description: "Beispielbenutzer", // Beschreibung des Kunden
  };

  await tableClient.upsertEntity(entity); // Fügt den Eintrag hinzu oder aktualisiert ihn
  console.log("Eintrag hinzugefügt:", entity);

  // 3. Lese den Eintrag aus
  const fetchedEntity = await tableClient.getEntity(
    entity.partitionKey, // PartitionKey zur Identifikation
    entity.rowKey // RowKey zur eindeutigen Identifikation innerhalb der Partition
  );
  console.log("Eintrag ausgelesen:", fetchedEntity);

  // 4. Aktualisiere ein Feld
  fetchedEntity.description = "Aktualisierte Beschreibung"; // Neue Beschreibung setzen
  await tableClient.updateEntity(fetchedEntity); // Aktualisiert den bestehenden Eintrag
  console.log("Eintrag aktualisiert:", fetchedEntity);

  // 5. Lösche den Eintrag
  await tableClient.deleteEntity(entity.partitionKey, entity.rowKey); // Löscht den Eintrag anhand PartitionKey und RowKey
  console.log("Eintrag gelöscht.");
}

main().catch((error) => {
  console.error("Fehler:", error.message);
});

/*
Anwendungsfall:
Angenommen, wir entwickeln ein Kundenmanagement-System für ein E-Commerce-Unternehmen.
- Jeder Kunde gehört zu einer bestimmten Region (partitionKey).
- Die Kunden-ID (rowKey) ist eindeutig.
- Wir können Kundenprofile hinzufügen, lesen, aktualisieren und löschen.
- Bei einer Anfrage eines Kundendienstmitarbeiters können wir die Daten in Echtzeit abrufen und bearbeiten.
Dies macht das System effizient für große Datenmengen mit schnellen Zugriffsmöglichkeiten.
*/
