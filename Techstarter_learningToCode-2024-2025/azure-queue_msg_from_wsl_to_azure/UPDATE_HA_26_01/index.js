// Importieren des Azure Storage SDK
const { QueueServiceClient } = require("@azure/storage-queue");
require("dotenv").config();

// Umgebungsvariable für den Connection String
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const queueName = "MoinMoin";

if (!connectionString) {
  console.error("Fehler: AZURE_STORAGE_CONNECTION_STRING ist nicht gesetzt.");
  process.exit(1);
}

// Verbindung zur Queue herstellen
const queueServiceClient =
  QueueServiceClient.fromConnectionString(connectionString);
const queueClient = queueServiceClient.getQueueClient(queueName);

// Queue erstellen (falls nicht vorhanden)
async function ensureQueueExists() {
  try {
    const createQueueResponse = await queueClient.createIfNotExists();
    if (createQueueResponse.succeeded) {
      console.log(`Queue '${queueName}' wurde erstellt.`);
    } else {
      console.log(`Queue '${queueName}' existiert bereits.`);
    }
  } catch (error) {
    console.error("Fehler beim Erstellen der Queue:", error.message);
  }
}

// Nachricht in die Queue senden
async function sendMessage(message) {
  try {
    const encodedMessage = Buffer.from(message).toString("base64");
    const enqueueResponse = await queueClient.sendMessage(encodedMessage);
    console.log(
      `Nachricht wurde in die Queue gesendet. Message ID: ${enqueueResponse.messageId}`
    );
  } catch (error) {
    console.error("Fehler beim Senden der Nachricht:", error.message);
  }
}

// Nachricht aus der Queue auslesen
async function receiveMessage() {
  try {
    const peekedMessages = await queueClient.receiveMessages({
      maxMessages: 1,
    });
    if (peekedMessages.receivedMessageItems.length > 0) {
      const message = peekedMessages.receivedMessageItems[0];
      const decodedMessage = Buffer.from(
        message.messageText,
        "base64"
      ).toString("utf-8");

      console.log(`Nachricht aus der Queue: ${decodedMessage}`);
    } else {
      console.log("Keine Nachrichten in der Queue.");
    }
  } catch (error) {
    console.error("Fehler beim Auslesen der Nachricht:", error.message);
  }
}

// Hauptfunktion zur Ausführung
(async () => {
  await ensureQueueExists();

  // Beispiel: Nachricht senden
  await sendMessage("Hallo, Azure Queue!");

  // Beispiel: Nachricht empfangen
  await receiveMessage();
})();
