import express from "express";
import yahooFinance from "yahoo-finance2";

const app = express();
const port = 5000;

app.get("/api/quote/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const data = await yahooFinance.quote(symbol);
    if (!data || !data.symbol) {
      return res.status(404).json({ error: "Symbole invalide ou introuvable" });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur API Yahoo Finance" });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
