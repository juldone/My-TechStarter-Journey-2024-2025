const { app } = require("@azure/functions");
const Jimp = require("jimp"); // ✅ Korrektur: Jimp ist kein benannter Export, daher direkt importieren
const { BlobServiceClient } = require("@azure/storage-blob"); // ✅ Bessere Methode zur Blob-Verwaltung

const containerName = "resizebucket";

app.storageBlob("storageBlobTrigger", {
  path: `${containerName}/input/{name}`,
  connection: "AzureWebJobsStorage", // ✅ Verbindung gesetzt, damit Azure auf den Storage Account zugreifen kann
  handler: async (blob, context) => {
    const widthInPixels = 100;
    const fileName = context.triggerMetadata.name;
    const connectionString = process.env.AzureWebJobsStorage;

    try {
      let image = await Jimp.read(blob);
      image.resize(widthInPixels, Jimp.AUTO); // ✅ Korrektur: `resize({ w: widthInPixels })` war falsch

      const buffer = await image.getBufferAsync(Jimp.MIME_JPEG); // ✅ Korrektur: `getBuffer` benötigt expliziten MIME-Typ

      // ✅ Bessere Verwaltung des Blob Storage Clients
      const blobServiceClient =
        BlobServiceClient.fromConnectionString(connectionString);
      const containerClient =
        blobServiceClient.getContainerClient(containerName);
      const blobClient = containerClient.getBlockBlobClient(
        `output/${fileName}`
      );

      // ✅ Korrektur: `uploadData` richtig genutzt und Content-Type gesetzt
      await blobClient.uploadData(buffer, {
        blobHTTPHeaders: { blobContentType: "image/jpeg" },
      });

      context.log(`Resized image uploaded to output/${fileName}`); // ✅ Logging für besseren Debugging-Support
    } catch (e) {
      context.error("Error processing image:", e); // ✅ Bessere Fehlerbehandlung mit Logging
    }
  },
});
