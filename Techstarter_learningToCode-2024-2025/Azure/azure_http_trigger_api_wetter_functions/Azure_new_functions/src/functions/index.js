import { app } from "@azure/functions";
import { fetch } from "undici";  // ✅ Fetch von Undici importieren

app.http("getProduct", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Processing request for URL "${request.url}"`);

    const urlSearchParams = new URL(request.url).searchParams;
    const productId = urlSearchParams.get("productId");

    let apiUrl = productId
      ? `https://dummyjson.com/products/${productId}`
      : "https://dummyjson.com/products?limit=10";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        return {
          status: 404,
          body: JSON.stringify({ error: "Produkt nicht gefunden" }),
        };
      }
      const data = await response.json();
      return { status: 200, body: JSON.stringify(data) };
    } catch (error) {
      context.log(`Error fetching product data: ${error.message}`);
      return {
        status: 500,
        body: JSON.stringify({ error: "Interner Serverfehler" }),
      };
    }
  },
});
