import { fetchIndice } from "./fetchIndice";

beforeEach(() => {
  fetch.resetMocks();
});

test("fetchIndice récupère les données correctement", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({ regularMarketPrice: 100, symbol: "AAPL" })
  );

  const data = await fetchIndice("AAPL");

  expect(data.regularMarketPrice).toBe(100);
  expect(data.symbol).toBe("AAPL");
});
