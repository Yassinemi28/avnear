test("ajoute et supprime un indice", () => {
  let indices = [];

  // Simuler ajout
  const newIndice = { name: "Test", symbol: "TEST", price: 100, change: 1 };
  indices = [...indices, newIndice];
  expect(indices.length).toBe(1);
  expect(indices[0].symbol).toBe("TEST");

  // Simuler suppression
  indices = indices.filter((i) => i.symbol !== "TEST");
  expect(indices.length).toBe(0);
});
