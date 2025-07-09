export async function fetchIndice(symbol) {
  try {
    const response = await fetch(`http://localhost:5000/api/quote/${symbol}`);

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'indice");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur dans fetchIndice:", error);
    throw error;
  }
}